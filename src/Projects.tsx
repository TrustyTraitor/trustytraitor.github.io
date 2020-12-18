import {Component} from 'react';
import ProjectPanel from './Components/ProjectPanel';

interface IProject {
  panels: repoType[];
}

type repoType = {name: string, description: string, language: string, svn_url: string, homepage: string}

class Projects extends Component<{}, IProject> {

  constructor(props:any) {
    super(props);
    this.state = { panels: []};
  }

  componentDidMount() {
    this.getRepos().then( (data) => { 
      this.setState({ panels: data }) 
    } );
  }

  getRepos = async () =>
  {
    const response = await fetch('https://api.github.com/users/Dovahkid/repos');
    return await response.json();
  }

  render() {
    return (
      this.state.panels.length ? 
      <div className="container">
        <div className="Projects row">
       {
         this.state.panels.map( (i, id) => {
          return <ProjectPanel key={id} name={i.name} description={i.description} language={i.language} svn_url={i.svn_url} homepage={i.homepage}/>
         })
       }
      </div>
    </div>
    :
    <span>Loading...</span>
    );
  }
  
}

export default Projects;
