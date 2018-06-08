import React from "react";
import styles from "./PageDetail.css";
export const PageDetail = ({ content }) => {
    return (
        content && (
            <section>
                <h1>{content.common_name}</h1>
                <h2>{content.latin_name}</h2>
                {content.image_full && (
                    <img className={styles.img} src={content.image_full} />
                )}

                <div
                    dangerouslySetInnerHTML={{ __html: content.description }}
                />
            </section>
        )
    );
};
export default PageDetail;
