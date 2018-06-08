import React from "react";
import styles from "./ListItem.css";
import { withStore } from "../../store";

export const ListItem = withStore(
    ({ label, selected, onClick, contextStyles, store }) => {
        const classNames = [styles.ListItem, contextStyles];

        if (selected) {
            classNames.push(styles.selected);
        }
        if (!store.get("online")) {
            classNames.push(styles.offline);
        }

        return (
            <li className={classNames.join(" ")} onClick={onClick}>
                {label}
            </li>
        );
    }
);
