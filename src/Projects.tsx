import React, {useEffect} from 'react';
import PanelCollection from './Components/PanelCollection';
import getRepos from './scripts/getRepos';

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
            <PanelCollection repos={repos}/>
        </div>
        :
        <span>Loading...</span>
    );
}

export default Projects;