import Topbar from "./Topbar";
import "./Turing.css";


function Turing() {
    let time = 15.0;
    let timerRunning = false;
    let score = 0;
    let ai = [
        'chibiTrump.jpg',
        'doggo.webp',
        'pastelHorror.jpg',
        'sadGhost.jpg',
        'spacoon.webp',
        'deep1.webp',
        'deep2.jpg',
    ]
    let person = [
        'mori1.jpg',
        'mori2.jpg',
        'mori3.jpg',
        'mori4.jpg',
        'mori5.png',
        'mori6.jpg',
        'mori7.jpg',
        'mori8.jpg',
        'mori9.jpg',
    ]
    let lang={
        "en":{
            "aiBtn":"This is AI",
            "aiQuiz":"AI Quiz",
            "expText":`                        This is a quiz that tests your knowledge of artificial intelligence.
            The quiz is based on the famous Turing test. You will have 15 seconds to guess which artwork was created by AI as often as you can. After the quiz you will be told how you score against others who have taken the quiz. Your time begins when you click go. `,
            "time":"Time",
            "score":"Score",
            "go":"Go",
        },
        "kn":{
        "aiBtn":"'oH mIwvam'e'",
        "aiQuiz":"tay'",
        "expText":"tlhoghvam rurlaw' potlhvam neH ghotpu''e' ta'qa' 'oH mIwvam'e' 'oH mIwvam'e'. nuwuvlIj ngaSwI'ghomquv. jaw *be'neDIq* Qu' DatlhobtaHvIS. tlhaQ DaghoSpu', naQ DaghoSpu' SoH.",
        "time":"poH",
        "score":"pe''egh",
        "go":"Qapla'",
        }
    }
    let langKey = localStorage.getItem("lang") || "en";
    let scores = []
    return (
        <>
            <div id="turing-container">
                <div id="turing-left">
                    <img id="turing-image-l" src="/works/lofiNuclear.jpg" alt="turing" />
                    <button className="quiz-btn" id="left-btn">{lang[langKey]["aiBtn"]}</button>
                </div>
                <div id="turing-text">
                    <h1>{lang[langKey]["aiQuiz"]}</h1>
                    <p>{lang[langKey]["expText"]}<br />
                    </p>
                    <div id="game-info"><p className="timer">{lang[langKey]["time"]}<i>{time.toFixed(1)}</i></p><p className="score">{lang[langKey]["score"]}: 0</p></div>
                    <button id="go-btn" onClick={() => {
                        if (!timerRunning) {
                            let localPerson = [...person]
                            let localAi = [...ai]
                            timerRunning = true;
                            const nextImage = () => {
                                if (time > 0) {
                                    let isRightAi = Math.random() < 0.5;
                                    let personIdx, aiIdx;
                                    if (localPerson.length == 0) {
                                        localPerson = [...person]
                                    }
                                    if (localAi.length == 0) {
                                        localAi = [...ai]
                                    }
                                    personIdx = Math.floor(Math.random() * localPerson.length);
                                    aiIdx = Math.floor(Math.random() * localAi.length);
                                    
                                    if (isRightAi) {
                                        document.getElementById("turing-image-l").src = "/works/" + localPerson[personIdx];
                                        document.getElementById("turing-image-r").src = "/works/" + localAi[aiIdx];
                                    } else {
                                        document.getElementById("turing-image-l").src = "/works/" + localAi[aiIdx];
                                        document.getElementById("turing-image-r").src = "/works/" + localPerson[personIdx];
                                    }
                                    localPerson.splice(personIdx, 1);
                                    localAi.splice(aiIdx, 1);
                                }
                            }
                            nextImage();
                            const handleScore = (side) => {
                                if (side === 'left') {
                                    if (document.getElementById("turing-image-l").src.includes("mori")) {
                                        score--;
                                        document.getElementsByClassName("score")[0].innerHTML = "Score: " + score;
                                        nextImage();
                                    } else {
                                        score++;
                                        document.getElementsByClassName("score")[0].innerHTML = "Score: " + score;
                                        nextImage();
                                    }
                                } else {
                                    if (document.getElementById("turing-image-r").src.includes("mori")) {
                                        score--;
                                        document.getElementsByClassName("score")[0].innerHTML = "Score: " + score;
                                        nextImage();
                                    } else {
                                        score++;
                                        document.getElementsByClassName("score")[0].innerHTML = "Score: " + score;
                                        nextImage();
                                    }
                                }
                            }
                            let timer = setInterval(() => {
                                time -= 0.1;
                                if (time <= 0) {
                                    let oldScore = score;
                                    score = 0;
                                    scores = [...scores, oldScore];
                                    clearInterval(timer);
                                    let alertMessage = "You scored " + oldScore + "! This is better than " + scores.filter(score => score < oldScore).length + " other players.";
                                    alert(alertMessage);
                                    timerRunning = false;
                                    time = 15.0;
                                    document.getElementsByClassName("timer")[0].innerHTML = "Time: " + time.toFixed(1);
                                    document.getElementsByClassName("score")[0].innerHTML = "Score: 0";
                                }
                                document.getElementsByClassName("timer")[0].innerHTML = `Time: ${time.toFixed(1)}`
                            }, 100);
                            document.getElementById("right-btn").addEventListener("click", () => {
                                handleScore("right");
                            });
                            document.getElementById("left-btn").addEventListener("click", () => {
                                handleScore("left");
                            });
                        }
                    }}>{lang[langKey]["go"]}</button>
                </div>
                <div id="turing-right">
                    <img id="turing-image-r" src="/works/lofiNuclear.jpg" alt="turing" />
                    <button className="quiz-btn" id="right-btn">{lang[langKey]["aiBtn"]}</button>
                </div>
            </div></>

    )
}
export default Turing;