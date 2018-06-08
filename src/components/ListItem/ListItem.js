import React from "react";
import styles from "./ListItem.css";

export const ListItem = ({
    label,
    selected,
    onClick,
    contextStyles,
    online
}) => {
    const classNames = [styles.ListItem, contextStyles];

    if (selected) {
        classNames.push(styles.selected);
    }
    if (!online) {
        classNames.push(styles.offline);
    }

    return (
        <li className={classNames.join(" ")} onClick={onClick}>
            {label}
        </li>
    );
};
