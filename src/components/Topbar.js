
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import "./Topbar.css";
function Topbar() {
    let abouts = {
        ["/AboutUs"]:true,
        ["/ListOfWorks"]:true,
        ["/SubmitWork"]:true,
        ["/ContactUs"]:true
    }
    let lang={
        "en":{
            "name":"Digital Gallery",
            "home":"Home",
            "gallery":"Interactive Gallery",
            "aiQuiz":"AI Quiz",
            "about":"More Info",
            "aboutUs":"About Us",
            "listOfWorks":"List of Works",
            "submitWork":"Submit Work",
            "contactUs":"Contact Us",
            "lang":"Language Selection"
        },
        "kn":{
            "name":"ghIlghameS",
            "home":"juH",
            "gallery":"ghertlhuD",
            "aiQuiz":"tay'",
            "about":"ghobe', pe'vIl",
            "aboutUs":"ghobe', pe'vIl",
            "listOfWorks":"qorDu'ghot",
            "submitWork":"qagh",
            "contactUs":"yIghoS",
            "lang":"DIvI'"
        }
    }
    let langKey = localStorage.getItem("lang") || "en";
    const handleLang = e => {
        if (e.target.attributes.value.value === "en") {
            localStorage.setItem("lang", "en");
        }else{
            localStorage.setItem("lang", "kn");
        }
        langKey = localStorage.getItem("lang") || "en";
        window.location.reload();
    }

    const handleSelect = (eventKey) => {(eventKey in abouts && (eventKey = "#About"));  localStorage.setItem("activeRoute", eventKey);}
    return (

        <Nav fill variant="tabs" activeKey={localStorage.getItem("activeRoute")} onSelect={handleSelect}>
            <Navbar.Brand href="#home"><span>{lang[langKey]["name"]}</span></Navbar.Brand>
            <Nav.Item>
                
                <Nav.Link href="/">{lang[langKey]["home"]}</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/Gallery">{lang[langKey]["gallery"]}</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/AIQuiz">{lang[langKey]["aiQuiz"]}</Nav.Link>
            </Nav.Item>
            <NavDropdown title={lang[langKey]["about"]} id="basic-nav-dropdown" className={localStorage.getItem("activeRoute") == "#About" ? "active" : ""}>
                <NavDropdown.Item href="/AboutUs">{lang[langKey]["aboutUs"]}</NavDropdown.Item>
                <NavDropdown.Item href="/ListOfWorks">{lang[langKey]["listOfWorks"]}</NavDropdown.Item>
                <NavDropdown.Item href="/SubmitWork">{lang[langKey]["submitWork"]}</NavDropdown.Item>
                <NavDropdown.Item href="/ContactUs">{lang[langKey]["contactUs"]}</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title={lang[langKey]["lang"]}>
                <NavDropdown.Item  onClick={handleLang} value="en">English</NavDropdown.Item>
                <NavDropdown.Item  onClick={handleLang} value="kn">tlhInganmaH</NavDropdown.Item>
            </NavDropdown>

        </Nav>
    )
}

export default Topbar;

