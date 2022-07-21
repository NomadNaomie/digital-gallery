import Topbar from "./Topbar";
import { Col, Row, Card } from 'react-bootstrap';
import "./ListOfWorks.css";

function ListOfWorks() {
    const handleFilter = (event) => {
        if (event.target.value == "Artist") {
            document.getElementById("artist-select").classList.remove("hidden")
            document.getElementById("artist-select").classList.add("filter-drop")
            document.getElementById("model-select").classList.add("hidden")
            document.getElementById("model-select").classList.remove("filter-drop")
        } else if (event.target.value == "Model") {
            document.getElementById("model-select").classList.remove("hidden")
            document.getElementById("model-select").classList.add("filter-drop")
            document.getElementById("artist-select").classList.add("hidden")
            document.getElementById("artist-select").classList.remove("filter-drop");
        }
    }
    const handleArtist = (event) => {
        if (event.target.value == "All"){
            [...document.getElementsByClassName("col")].forEach(element => {
                element.classList.remove("hidden")
            });
        }else{
            [...document.getElementsByClassName("col")].forEach(element => {
                if (element.getAttribute("artist") != event.target.value){
                    element.classList.add("hidden")
                }else{
                    element.classList.remove("hidden")
                }
            });
        }
    }
    const handleModel = (event) => {
        if (event.target.value == "All"){
            [...document.getElementsByClassName("col")].forEach(element => {
                element.classList.remove("hidden")
            });
        }else{
            [...document.getElementsByClassName("col")].forEach(element => {
                if (element.getAttribute("model") != event.target.value){
                    element.classList.add("hidden")
                }else{
                    element.classList.remove("hidden")
                }
            });
        }
    }

    return (<>
        <label className="ai-copy">Filters: </label>
        <div id="custom-select">
            <select id="standard-select" onChange={handleFilter}>
                <option selected disabled>Filter Artwork</option>
                <option value="Artist">Artist</option>
                <option value="Model">Model</option>
            </select>
        </div>
        <select className="filter-drop hidden" id="artist-select" onChange={handleArtist}>
            <option selected disabled>Filter by Artist</option>
            <option value="All">All</option>
            <option value="Dall-E-Mini">Dall-E Mini</option>
            <option value="DeepDream">DeepDream</option>
            <option value="Dall-E-Mega">Dall-E Mega</option>
        </select>
        <select className="filter-drop hidden" id="model-select" onChange={handleModel}>
            <option selected disabled>Filter by Model</option>
            <option value="All">All</option>
            <option value="GPT">Transformer Language Model</option>
            <option value="CNN">Convolutional Neural Network</option>
        </select>
        <Row id="works-container" xs={1} md={2} className="g-4">
            <Col model="GPT" artist="Dall-E-Mini">
                <Card>
                    <Card.Img variant="top" src="/works/lofiNuclear.jpg" />
                    <Card.Body>
                        <Card.Title>LoFi Nuclear Apocalypse by <i>Dall-e</i></Card.Title>
                        <Card.Text>
                            This piece depicts a lofi nuclear detonation resulting in calamity and war, to relax and study to, generated by a Dall-e 2 Mini model, based on the GPT-3 model developed by Open AI.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
            <Col model="GPT" artist="Dall-E-Mini">
                <Card>
                    <Card.Img variant="top" src="/works/chibiTrump.jpg" />
                    <Card.Body>
                        <Card.Title>Chibi Trump by <i>Dall-e</i></Card.Title>
                        <Card.Text>
                            The artwork contained within is purely for derogatory and comedic purposes. This piece shall not be taken as implicit or explicit confirmation that Donald Trump looks like that.</Card.Text>
                    </Card.Body>
                </Card>
            </Col>
            <Col model="GPT" artist="Dall-E-Mini">
                <Card>
                    <Card.Img variant="top" src="/works/pastelHorror.jpg" />
                    <Card.Body>
                        <Card.Title>Pastel Horror by <i>Dall-e</i></Card.Title>
                        <Card.Text>
                            She lurks, deep in the shadows, waiting for her time to fright. It might be said that the art reflects the artist within, is Dall-e crying out for help? All we know is this is the Pastel horror.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
            <Col model="GPT" artist="Dall-E-Mini">
                <Card>
                    <Card.Img variant="top" src="/works/sadGhost.jpg" />
                    <Card.Body>
                        <Card.Title>Sad Pastel Ghost by <i>Dall-e</i></Card.Title>
                        <Card.Text>
                            She's a sad ghost. Why is she sad? Maybe she can't afford to attend a hockey tournament and the idea of needing to pay to participate in sports is a capitalist ideal that she will not stand for.                         </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
            <Col model="GPT" artist="Dall-E-Mega">
                <Card>
                    <Card.Img variant="top" src="/works/spacoon.webp" />
                    <Card.Body>
                        <Card.Title>Space Racoon by <i>Dall-e</i></Card.Title>
                        <Card.Text>
                            It is a racoon in space that has been altered enough to avoid any legal liabilties and avoid catching the eye of the mouse and its house... of lawyers.  </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
            <Col model="GPT" artist="Dall-E-Mega">
                <Card>
                    <Card.Img variant="top" src="/works/doggo.webp" />
                    <Card.Body>
                        <Card.Title>Cool Doggo by <i>Dall-e</i></Card.Title>
                        <Card.Text>
                            There is not much to say other than you wish you were this dog. Look how cool he is. He probably doesn't even pay rent, doesn't need to worry about a global pandemic, doesn't need to worry about food. He's got it all.</Card.Text>
                    </Card.Body>
                </Card>
            </Col>
            <Col model="CNN" artist="DeepDream">
                <Card>
                    <Card.Img variant="top" src="/works/deep1.webp" />
                    <Card.Body>
                        <Card.Title>Bugs by <i>DeepDream</i></Card.Title>
                        <Card.Text>
                            Its the mesosoaic era. You are a bug, on your back, the sun beating down on you but slightly more tame since humans aren't around to cause 40 degree heatwaves and destroy the atmosphere. All is right. You are tripping.</Card.Text>
                    </Card.Body>
                </Card>
            </Col>
            <Col model="CNN" artist="DeepDream">
                <Card>
                    <Card.Img variant="top" src="/works/deep2.jpg" />
                    <Card.Body>
                        <Card.Title>Birb Ross by <i>DeepDream</i></Card.Title>
                        <Card.Text>
                            Allegedly, not saying birds are real or anything silly like that, but apparently someone's cousin's brother's mother's dog groomer's mistress once said that bob ross was actually a peregrine falcon and i think that's neat.</Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    </>)
}
export default ListOfWorks;