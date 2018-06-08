import React from "react";
import styles from "./ListItem.css";

export const ListItem = ({ label, selected, onClick, contextStyles }) => (
    <li
        className={`${selected ? styles.selected : ""} ${contextStyles} ${
            styles.ListItem
        }`}
        onClick={onClick}
    >
        {label}
    </li>
);
