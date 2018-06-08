import React, { Component } from "react";
import { AnimalDetail } from "./AnimalDetail/AnimalDetail";
import { NavList } from "./NavList/NavList";
import { Lightbox } from "./Lightbox/Lightbox";

import pages from "../fixtures/pages.json";
import { PageDetail } from "./PageDetail/PageDetail";

import "../theme/theme.css";
import styles from "./App.css";

// const navigatior =
//     typeof window.navigator !== "undefined"
//         ? window.navigator
//         : { online: false };

export default class App extends Component {
    state = {
        content: pages,
        selectedContent: pages[0],
        lightboxAnimal: null,
        online: false
    };

    componentDidMount() {
        window.addEventListener("online", this.updateOnlineStatus);
        window.addEventListener("offline", this.updateOnlineStatus);
        this.loadContent();
    }

    updateOnlineStatus = () => {
        this.setState({ online: navigator.onLine });
    };

    loadContent = async () => {
        const response = await fetch(
            "//api.jsonbin.io/b/5afc5c68c2e3344ccd96b97c/1"
        );
        const animals = await response.json();
        const content = pages.concat(animals); //[...pages, ...animals];

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
                    {this.state.online
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
                />
            </div>
        );
    }
}
