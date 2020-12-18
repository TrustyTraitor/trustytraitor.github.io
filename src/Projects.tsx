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
    
    this.getRepos();

  }

  getRepos = () =>
  {
    console.log("api call");
    fetch('https://api.github.com/users/Dovahkid/repos')
        .then( (response) => response.json())
        .then( (data) => {
            this.setState({panels: data});
          }
          );
  }

  render() {
    console.log("rendering component!")

    return (
      <div className="container">
        <div className="Projects row">
       {
         this.state.panels.map( (i, id) => { console.log("rendering card")
          return <ProjectPanel key={id} name={i.name} description={i.description} language={i.language} svn_url={i.svn_url} homepage={i.homepage}/>
         })
       }
      </div>
    </div>
    );
  }
  
}

export default Projects;
