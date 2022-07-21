import Topbar from './Topbar';
import Carousel from './Carousel';
import "./Home.css";
function Home(){
    let lang = {
        "en":{
            "copy":"Defy the conventional. This entire gallery was composed by AI. Enjoy."
        },
        "kn":{
            "copy":"bIHeghvIpchu'. ghoM HIq vItlhutlhlu'. tIv."
        }
    }
    let langKey = localStorage.getItem("lang") || "en";
    return(
        <>
            <Carousel />
            <p id="ai-copy">{lang[langKey]["copy"]}</p></>
    )
}
export default Home;