import React from "react";
import { ListItem } from "../ListItem/ListItem";

import styles from "./NavList.css";
export class NavList extends React.Component {
    state = {
        active: false
    };

    toggle = () => {
        this.setState({ active: !this.state.active });
    };

    render() {
        return (
            <nav
                className={`${styles.Nav} ${this.state.active &&
                    styles.active}`}
                onClick={this.toggle}
            >
                <ul>
                    {this.props.content.map(navItem => (
                        <ListItem
                            key={navItem.uuid}
                            selected={
                                navItem.uuid === this.props.selectedContent.uuid
                            }
                            onClick={() => this.props.onClick(navItem)}
                            label={navItem.common_name}
                            contextStyles={styles.NavItem}
                        />
                    ))}
                </ul>
            </nav>
        );
    }
}
