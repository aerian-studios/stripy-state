import React from "react";

export const Lightbox = ({ image, lowRes, onClick, visible }) =>
    visible && (
        <div onClick={onClick}>
            <img
                src={image}
                style={{
                    backgroundImage: `url(${lowRes})`
                }}
            />
        </div>
    );
