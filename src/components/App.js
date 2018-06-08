import React, { Component } from "react";
import { AnimalDetail } from "./AnimalDetail/AnimalDetail";
import { NavList } from "./NavList/NavList";
import { Lightbox } from "./Lightbox/Lightbox";

import pages from "../fixtures/pages.json";
import { PageDetail } from "./PageDetail/PageDetail";

import "../theme/theme.css";
import styles from "./App.css";
import { withStore } from "../store";

export const App = withStore(
    class extends Component {
        displayName = "App";

        state = {
            content: pages,
            selectedContent: pages[0],
            lightboxAnimal: null
        };

        componentDidMount() {
            window.addEventListener("online", this.updateOnlineStatus);
            window.addEventListener("offline", this.updateOnlineStatus);
            this.updateOnlineStatus();
            this.loadContent();
        }

        setOnline = this.props.store.set("online");

        updateOnlineStatus = () => {
            console.log("update status", navigator.onLine);
            console.log(this.props.store);
            this.setOnline(navigator.onLine);
            console.log(this.props.store);
        };

        loadContent = async () => {
            const response = await fetch(
                "//api.jsonbin.io/b/5afc5c68c2e3344ccd96b97c/1"
            );
            const animals = await response.json();
            const content = pages.concat(animals);

            if (content.length) {
                this.setState({ content, selectedContent: content[0] });
            }
        };

        chooseAnimal = animal => {
            this.setState({ selectedContent: animal });
        };

        openLightbox = () =>
            this.setState({
                lightboxAnimal: this.state.selectedContent
            });

        closeLightbox = () => this.setState({ lightboxAnimal: null });

        chooseRenderComponent(selectedContent) {
            let comp = null;

            switch (selectedContent.isPage) {
                case true:
                    comp = <PageDetail content={selectedContent} />;
                    break;
                default:
                    comp = (
                        <AnimalDetail
                            animal={selectedContent}
                            onOpenImage={this.openLightbox}
                        />
                    );
            }

            return comp;
        }

        render() {
            const { selectedContent, content, lightboxAnimal } = this.state;

            return (
                <div>
                    <h1>
                        {this.props.store.get("online")
                            ? "we're online people"
                            : "we are offline now!"}
                    </h1>
                    <main className={styles.main}>
                        <div id="sidebar">
                            <NavList
                                content={content}
                                selectedContent={selectedContent}
                                onClick={this.chooseAnimal}
                            />
                        </div>
                        <div>{this.chooseRenderComponent(selectedContent)}</div>
                    </main>
                    <Lightbox
                        visible={!!lightboxAnimal}
                        image={lightboxAnimal && lightboxAnimal.image_full}
                        lowRes={lightboxAnimal && lightboxAnimal.image_thumb}
                        onClick={this.closeLightbox}
                        online={this.state.online}
                    />
                </div>
            );
        }
    }
);

export default App;
