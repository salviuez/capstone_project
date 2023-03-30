import react from "react";
import { useState } from "react";


export function Carousels({ pictures }) {
    const [currentIndex, setCurrrentIndex] = useState(0);

    const pictureStyle = {
        height: "100%",
        position: "relative",

    };
    const slideStyle = {
        width: "100%",
        height: "100%",
        borderRadius: "10px",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundImage: `url(${pictures[currentIndex].url})`,
    };


    const leftArrow = {
        position: "absolute",
        top: "50%",
        transform: "translate(0 , -50%)",
        left: "32px",
        fontSize: "45px",
        color: "#fff",
        zIndex: 1,
        cursor: "pointer",
    };

    const rightArrow = {
        position: "absolute",
        top: "50%",
        transform: "translate(0 , -50%)",
        right: "32px",
        fontSize: "45px",
        color: "#fff",
        zIndex: 1,
        cursor: "pointer",
    };
    const previousImage = () => {
        const isFirstImage = currentIndex == 0;
        const newIndex = isFirstImage ? pictures.length - 1 : currentIndex - 1;
        setCurrrentIndex(newIndex);
    }
    const nextImage = () => {
        const islastImage = currentIndex == pictures.length - 1;
        const newIndex = islastImage ? 0 : currentIndex + 1;
        setCurrrentIndex(newIndex);
    }
    return (
        <div style={pictureStyle}>
            <div style={leftArrow} onClick={previousImage}>◀️</div>
            <div style={rightArrow} onClick={nextImage}>▶️</div>
            <div style={slideStyle}>

            </div>

        </div>

    )
}
