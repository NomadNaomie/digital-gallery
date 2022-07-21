import Topbar from "./Topbar";
import { useState } from 'react';
import "./Gallery.css";
function Gallery() {
    let art = {
        "Chibi Trump": {piece:"Chibi Trump", artist: "Dall-e Mini", date: "2022-06-29", technique: "Transformer Language Model" },
        "Sad Ghost": {piece:"Sad Ghost", artist: "Dall-e Mini", date: "2022-06-23", technique: "Transformer Language Model" },
        "Lofi Nuclear": {piece:"Lofi Nuclear", artist: "Dall-e Mini", date: "2022-06-30", technique: "Transformer Language Model" },
        "Pastel Horror": {piece:"Pastel Horror", artist: "Dall-e Mini", date: "2022-06-15", technique: "Transformer Language Model" },
        "Cool Dog": {piece:"Cool Dog", artist: "Dall-e Mega", date: "2022-05-15", technique: "Transformer Language Model" },
        "Racoon In Space": {piece:"Racoon In Space", artist: "Dall-e Mega", date: "2022-05-07", technique: "Transformer Language Model" },
        "Bugs": {piece:"Bugs", artist: "DeepDream", date: "2019-05-07", technique: "Convolutional Neural Net" },
        "Birb": {piece:"Bird Ross", artist: "DeepDream", date: "2016-05-07", technique: "Convolutional Neural Net" }
    }
    const [isActive, setIsActive] = useState(false);
    const handleClick = event => {
        setIsActive(current => !current);
    };
    const handleArt = event => {
        let artwork = event.target.alt;
        let piece = art[artwork];
        document.getElementById("date").innerHTML = piece.date;
        document.getElementById("name").innerHTML = piece.piece;
        document.getElementById("pic").src = event.target.src;
        document.getElementById("artist").innerHTML = piece.artist;
        document.getElementById("technique").innerHTML = piece.technique;
        document.getElementById("more-info").innerHTML = piece.technique == "Transformer Language Model" ? "This AI uses a Transformer Language Model to generate its images. In this case, it leverages the power of OpenAI's GPT-3, a predective text model modified to generate images instead. GPT works by looking back at some data in the past and trying to guess what will come next." : "This piece was generated using a Convolutional Neural Network, it is one of the earliest models to produce images, it was designed to seek out patterns in images an enchance them to induce pareidolia, a natural human instict to see faces and human like features in nature as a result of our primitive beginnings.";

    }
    let lang = {
        "en":{
            "artist":"Artist",
            "date":"Date",
            "technique":"Technique",
            "prompt":"Prompt",
            "welcome":"Welcome to the Digital Gallery!",
            "expText":"If you click the map in the bottom right you will be able to select one of our many works.",
            "exp":"Additional Information"
        },
        "kn":{
            "artist":"tay' boQ",
            "date":"Qo', joH.",
            "technique":"chIrgh",
            "prompt":"yol",
            "welcome":"jatlh ghIlghameS yIQuch!",
            "expText":"vItuQmoHmeH jIchegh'eghchugh, vaj qogh DaSovchugh.",
            "exp":"HmeHchugh"
        }
    }
    let langKey = localStorage.getItem("lang") || "en";
    return (
        <>
            <img id="pic"
                src="./works/pastelHorror.jpg"
                alt="pastelHorror"
                className={isActive ? 'gallery-image hidden' : 'gallery-image'}
            />
            <div id="gallery-text" className={isActive ? 'hidden' : ''}>
                <h2>{lang[langKey]["artist"]}</h2>
                <h5 id="artist">Dall-e Mini</h5>
                <h2>{lang[langKey]["date"]}</h2>
                <h5 id="date">2022-06-29</h5>
                <h2>{lang[langKey]["technique"]}</h2>
                <h5 id="technique">Transformer language model</h5>
                <h2>{lang[langKey]["prompt"]}</h2>
                <h5 id="name">Pastel Horror</h5>
                <h2>{lang[langKey]["exp"]}</h2>
                <h5 id="more-info">This AI uses a Transformer Language Model to generate its images. In this case, it leverages the power of OpenAI's GPT-3, a predective text model modified to generate images instead. GPT works by looking back at some data in the past and trying to guess what will come next. </h5></div>
            <p id="gallery-exp"><strong>{lang[langKey]["welcome"]}</strong><br />{lang[langKey]["expText"]}</p>
            <div id="gallery-map" className={isActive ? 'active' : ''} onClick={handleClick}>
                <img src="./works/chibiTrump.jpg" alt="Chibi Trump" onClick={handleArt} />
                <img src="./works/sadGhost.jpg" alt="Sad Ghost" onClick={handleArt} />
                <img src="./works/lofiNuclear.jpg" alt="Lofi Nuclear" onClick={handleArt} />
                <img src="./works/pastelHorror.jpg" alt="Pastel Horror" onClick={handleArt} />
                <img src="./works/doggo.webp" alt="Cool Dog" onClick={handleArt} />
                <img src="./works/spacoon.webp" alt="Racoon In Space" onClick={handleArt} />
                <img src="./works/deep1.webp" alt="Bugs" onClick={handleArt} />
                <img src="./works/deep2.jpg" alt="Birb" onClick={handleArt} />
            </div>

        </>
    )
}
export default Gallery;