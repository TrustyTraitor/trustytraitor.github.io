import React from "react";
import ProjectPanel from './ProjectPanel';
import Repo from '../Types/Repo';

interface IRepos 
{
    repos: Repo[];
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