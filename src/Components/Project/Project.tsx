import './Project.css'

interface IProject {
    name: string;
    languages: string[];
    description: string;
    repo: string;
    homepage?: string;
}

function Project( {name, description, languages, repo, homepage}: IProject ) {
    return (
        <div>
            <div className="projectHeader">
                <div className={"projectName"}> <p> {name} </p> </div>
                <div className="projectLanguages">

                    { languages.map(language => (
                        <img src="" alt="{language} icon"/>
                    )) }

                </div>
            </div>
            <div className={"projectDescription"} > {description} </div>
            <div className="projectLinks">
                <a href={repo} target="_blank" rel="noopener noreferrer" >View the code</a>
                {(homepage) ? <a href={homepage} target="_blank" rel="noopener noreferrer">Homepage</a> : null}
            </div>
        </div>
    )
}

export default Project;