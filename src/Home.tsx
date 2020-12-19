import {Component} from 'react';
import educationImg from './assets/education.svg';
import {Link} from 'react-router-dom';

class Home extends Component {

  render() {
    return (
      <div className="Home">
          <div className="container">
            <div className="jumbotron">
              <h1 className="display-4 d-none d-md-block d-lg-block">About Me</h1>
              <h3 className="d-sm-block d-md-none">About Me</h3>
              <hr className="my-4"/>
              <p>My name is Michael Gain. I currently attend Cabarrus Early College of Technology and Rowan-Cabarrus Community College. 
                  I will receive my High School Diploma as well as an Applied Associates of Computer Programming.</p>

              <p>I love programming and everything computers. I have done a lot of programming in languages such as C++, C#, Python, 
                  JavaScript/TypeScript, and Visual Basic. I also do a little HTML and CSS. C# has quickly become my favorite language 
                  to use because of its flexibility and versatility. Programming is perfect for me because I love to come up with an idea 
                  and actually make it a reality.</p>
                  
              <p>If I'm not programming I'm probably playing video games. My favorite game is Skyrim and it is my biggest inspiration for 
                  wanting to develop video games as a career. My interest in programming goes back a few years before with Minecraft. Seeing 
                  all the amazing mods that people could create inspired me to learn how to program.</p>
            </div>

            <div className="jumbotron">
              <a className="float-left d-none d-sm-none d-md-block" href="https://www.flaticon.com/authors/linector" title="Linector" rel="noreferrer" target="_blank">
                <img src={educationImg} alt="globe with grad hat" className="education-img"/>
              </a>
              
              <h1 className="display-4 d-none d-md-block d-lg-block">Education and Experience</h1>
              <h3 className="d-sm-block d-md-none">Education and Experience</h3>
              <hr className="my-4"/>
              <p>I am currently enrolled in Cabarrus Early College of Technology and Rowan-Cabarrus Community College. I am working towards an Applied Associates of Computer Programming.</p>
              <p>Most of my recent projects are listed on my <Link to="/projects">Projects page</Link>. Other notable projects have been hosting a website using WAMP server, hosting game 
                servers with various software, and processes associated with both such as port forwarding.</p>
              <p>I also have 3 certificates:</p>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">MTA for Software Development Fundamentals (C#)</li>
                <li className="list-group-item">MTA for Introduction to Programming Using Javascript</li>
                <li className="list-group-item">MTA for Introduction to Programming using Python</li>
              </ul>
            </div>
          </div>
      </div>
    );
  }
  
}

export default Home;