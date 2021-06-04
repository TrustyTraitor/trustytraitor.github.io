import React, {useEffect} from 'react';
import PanelCollection from './Components/PanelCollection';
import getRepos from './scripts/getRepos';
import {Jumbotron} from 'react-bootstrap';

const Projects = () =>
{
    const [repos, setRepos] = React.useState([]);
    const url:string = 'https://api.github.com/users/Dovahkid/repos';

    useEffect(() => {
        getRepos(url).then( (data) => {setRepos(data)});
    }, []); 

    return (
        repos.length ? 
        <div className="container">
            <Jumbotron>
                <h1>My Projects</h1>
                <p>This page contains links and short descriptions for each of my github projects. 
                    The list is not curated but is instead automatically pulled when the page is loaded. 
                    Web projects will have links to the site and all projects will have links to the repos.</p>
            </Jumbotron>
            <PanelCollection repos={repos}/>
        </div>
        :
        <span>Loading...</span>
    );
}

export default Projects;