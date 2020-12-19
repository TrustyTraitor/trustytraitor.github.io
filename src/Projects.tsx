import {Component} from 'react';
import ProjectPanel from './Components/ProjectPanel';

interface IProject {
    repos: repoType[];
}

type repoType = {name: string, description: string, language: string, html_url: string, homepage: string};

class Projects extends Component<{}, IProject> 
{
    constructor(props:any) 
    {
        super(props);
        this.state = { repos: []};
    }

    componentDidMount() 
    {
        this.getRepos()
        .then( (data) => 
        { 
            this.setState({ repos: data }) 
        } 
        );
    }

    // Politely Asks github for my repos
    getRepos = async () =>
    {
        const response = await fetch('https://api.github.com/users/Dovahkid/repos');
        return await response.json();
    }

    render() 
    {
        
        return (
            this.state.repos.length ? 
            <div className="container">
                <div className="Projects">
                    <ProjectPanel repos={this.state.repos}/>
                </div>
            </div>
            :
            <span>Loading...</span>
        );
    }

}

export default Projects;