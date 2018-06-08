import React from "react";

export const AnimalDetail = ({ animal, onOpenImage }) => {
    const onClick = ev => {
        if (onOpenImage) {
            ev.preventDefault();
            onOpenImage();
        }
    };

    return (
        animal && (
            <section>
                <h1>{animal.common_name}</h1>
                <h2>{animal.latin_name}</h2>
                <h3>{animal.conservation_status}</h3>
                {animal.image_thumb && (
                    <a
                        href={animal.image_full}
                        onClick={onClick}
                        target="_blank"
                    >
                        <img src={animal.image_thumb} />
                    </a>
                )}
                <p>{animal.description}</p>
            </section>
        )
    );
};
export default AnimalDetail;
