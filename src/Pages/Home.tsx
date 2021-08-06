import educationImg from '../assets/education.svg';
import {Link} from 'react-router-dom';
import { ListGroup, ListGroupItem} from 'react-bootstrap';
import CustomJumbotron from '../Components/CustomJumbotron'

function Home()
{
    return (
        <div className="Home">
            <div className="container">
                <CustomJumbotron header="About Me">
                    <p>My name is Michael Gain. I have just finished high school at Cabarrus Early College of Technology and at Rowan-Cabarrus Community College. 
                        There I earned my Associates degree in Information Technology, Computer Programming and Development. I will now be attending High Point University starting in January 2021.</p>

                    <p>I love programming and everything computers. I have done a lot of programming in languages such as C++, C#, Python, 
                    Java, JavaScript/TypeScript, and Visual Basic. I also do a little HTML and CSS. C# has quickly become my favorite language 
                    to use because of its flexibility and versatility. Programming is perfect for me because I love to come up with an idea 
                    and actually make it a reality.</p>

                    <p>If I'm not programming I'm probably playing video games. My favorite type of games are massive 
                        openworld RPGs such as Skyrim, Witcher 3 and Cyberpunk 2077. These are my biggest inspiration for 
                        wanting to develop video games. My interest in programming goes back a few years before with Minecraft, 
                        seeing all the amazing mods that people could create inspired me to learn how to program.</p>
                </CustomJumbotron>

                <CustomJumbotron header="Education and Experience" image={educationImg} imageStyle="education-img">
                    <p>I have finished High School and received my Associates in Information Technology, Computer Programming and Development. 
                        I am now attending High Point University to earn my Bachelors in Programming.</p>
                    <p>Most of my recent projects are listed on my <Link to="/projects">Projects page</Link>. 
                    Other notable projects have been hosting a website using WAMP server, hosting game 
                    servers with various software, and processes associated with both such as port forwarding.</p>

                    <p>I have also earned 3 certificates:</p>
                    <ListGroup variant="flush">
                        <ListGroupItem>MTA for Software Development Fundamentals (C#)</ListGroupItem>
                        <ListGroupItem>MTA for Introduction to Programming Using Javascript</ListGroupItem>
                        <ListGroupItem>MTA for Introduction to Programming using Python</ListGroupItem>
                    </ListGroup>
                </CustomJumbotron>
            </div>
        </div>
    );
}

export default Home;