import {Component} from 'react';
import PanelCollection from './Components/PanelCollection';
import getRepos from './scripts/getRepos';

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
        getRepos()
        .then( (data) => 
        { 
            this.setState({ repos: data }) 
        } 
        );
    }

    render() 
    {
        return (
            this.state.repos.length ? 
            <div className="container">
                <div className="Projects">
                    <PanelCollection repos={this.state.repos}/>
                </div>
            </div>
            :
            <span>Loading...</span>
        );
    }
}

export default Projects;