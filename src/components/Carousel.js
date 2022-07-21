import "./Carousel.css";
function Carousel(){
    // when the user scrolls down, rotate each carousel-image by 90deg
    let lang = {
        "en":{
            "defy":"DEFY",
            "rise":"RISE",
            "create":"CREATE",
            "design":"DESIGN",
            "future":"future",
            "FUTURE":"FUTURE",
        },
        "kn":{
            "defy":"Nud'e'nIS",
            "rise":"JIB'e'nIS",
            "create":"chenmoH'e'nIS",
            "design":"QOCH'e'nIS",
            "future":"San'e'",
            "FUTURE":"San'nIS",
        }
    }
    let langKey = localStorage.getItem("lang") || "en";
    return(
    <div className="carousel-container">
        <div className="custom-carousel">
            <div className="carousel-image"/>
            <div className="carousel-image"><span>{lang[langKey]["defy"]}</span></div>
            <div className="carousel-image"/>
            <div className="carousel-image"><span>{lang[langKey]["rise"]}</span></div>
            <div className="carousel-image"/>
            <div className="carousel-image"><span>{lang[langKey]["create"]}</span></div>
            <div className="carousel-image"/>
            <div className="carousel-image"><span>{lang[langKey]["design"]}</span></div>
            <p>{lang[langKey]["future"]}</p>
            <p>{lang[langKey]["future"]}</p>
            <p>{lang[langKey]["FUTURE"]}</p>
            <p>{lang[langKey]["FUTURE"]}</p>
            <p>{lang[langKey]["future"]}</p>
            <p>{lang[langKey]["future"]}</p>
            <p>{lang[langKey]["FUTURE"]}</p>
            <p>{lang[langKey]["FUTURE"]}</p>
        </div>
    </div>)

}

export default Carousel;