import React from "react";

interface Image {
    image: string;
}

export const Background: React.FC<Image> = ({ image }) => {
    return(
        <>
        <img className="background-img" src={image} alt="background"></img>
        </>
    )
};