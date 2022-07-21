import Topbar from "./Topbar";
import "./About.css";
function About() {
  let lang = {
    "en": {
      "who":"Who are we?",
      "whoTxt":"Digital Gallery is dedicated to advancing the world through unconventional means, by breaking the mould and innovating, our incredible and creative ideas can serve as the liberation for your dreams. Success is not algorithmic, it is wild and unchained, free from the influences of the mudane. We strive to capture that spirit and deliver on it.",
      "why":"Why do we do what we do?",
      "whyTxt":"The life blood of our genesis, inspiring and pushing forward the focuses of the day. Slip past the orthodoxy to stare the challenge in the face, assuring a continued path to multi-layered solutions. Defy the outcome by assuming a leading role in the charge towards a brighter future.",
      "how":"How can you help?",
      "howTxt":"Individuals are essential to the taming and unsettling of paradigms. They are instrumental to the focusing of the machinery of the unorthodox and serve as revolutionary pressure to advance critical ideas and birth innovation. By donating your time, resources and livelihood you can help us advance on our mission to shift the foundational ideas of art. Join us, so that you may become part of the new vanguard."
    },
    "kn": {
      "who":"maHvaD jatlh chol 'Iv?",
      "whoTxt":"Qo' HoD sanvaD Hegh vIrurchoHDI' Qob SIvI' yuQmeyDaq pawDI', qorDu'lIj LuneH. QongDaqvetlhDaq yapbe'law' tu'lu'be'chugh. Huchmaj wIta'pu'.",
      "why":"nuq wIjatlh?",
      "whyTxt":"wa'maHcha' ghu'vam, nontaHvIS jatlhlu' tIqlIj. lut vISovbe'lu' 'ach pa'vo' tlhoS Hoch ngoDmey vISovbe'.' tangqa' targh Humanpu''e' Seng.",
      "how":"*Hero*?",
      "howTxt":"Qo' HoD sanvaD Hegh vIrurchoHDI' Qob SIvI' yuQmeyDaq pawDI', qorDu'lIj LuneH. QongDaqvetlhDaq yapbe'law' tu'lu'be'chugh. Huchmaj wIta'pu'."
    }
  }
  let langKey = localStorage.getItem("lang") || "en";
  return (
    <>
    <div id="about-container">
      <div className="about-text">
      <h3>{lang[langKey]["who"]}</h3>
        <p>{lang[langKey]["whoTxt"]}</p>
      </div>
      <img src="/works/pastelHorror.jpg" alt="turing"/>
      <img src="/works/sadGhost.jpg" alt="turing"/>
      <div className="about-text">
      <h3>{lang[langKey]["why"]}</h3>
        <p>{lang[langKey]["whyTxt"]}</p>
      </div>
      <div className="about-text">
      <h3>{lang[langKey]["how"]}</h3>
        <p>{lang[langKey]["howTxt"]}</p>
      </div>
      <img src="/works/chibiTrump.jpg" alt="turing"/>
    </div>
  </>
  );
}
export default About;