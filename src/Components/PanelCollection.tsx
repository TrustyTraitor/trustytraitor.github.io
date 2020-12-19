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

// Panel Collection returns an array of panels created from the repos gathered
function PanelCollection(props: IRepos)
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