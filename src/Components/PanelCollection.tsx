import React from "react";
import ProjectPanel from './ProjectPanel';

interface IRepos 
{
    repos: Repo[];
}

type Repo = {
    name?: string,
    language?: string,
    description?: string,
    html_url?: string,
    homepage?: string,
}

const PanelCollection = (props: IRepos) =>
{
    const panels = props.repos.map( (i, idx) => {
        return <ProjectPanel key={idx} repo={i} />
    });

    return (
        <div className="row">
            {panels}
        </div>
    )
}

export default PanelCollection;