import { Card, ListGroup } from 'react-bootstrap';

interface IPanel
{
    repos: repoJson[]
}

type repoJson = 
{
    name?: string,
    language?: string,
    description?: string,
    html_url?: string,
    homepage?: string,
};

function ProjectPanel(props: IPanel) // Takes in a list of repos
{
    const panels = props.repos; // Creates a list of panels from the list of repos
    const panelList = panels.map( (repo, idx) => 
    {
        return (
        <div key={idx} className="col-sm-12 col-md-6 col-lg-4">
            <Card className="mb-4 mr-1">
                <Card.Body className="d-flex flex-column">
                    <Card.Title> {repo.name} </Card.Title>
                    <Card.Subtitle> {repo.language} </Card.Subtitle>
                    <Card.Text> {repo.description} </Card.Text>
                    <ListGroup className="mt-auto list-group-flush">
                        <ListGroup.Item>
                            <Card.Link target="_blank" href={repo.html_url}>Repo here</Card.Link>
                            { repo.homepage ? <Card.Link target="_blank" href={repo.homepage} className="mt-auto">Site here</Card.Link> : ''}
                        </ListGroup.Item>
                    </ListGroup>
                </Card.Body>
            </Card>
        </div>
        )
    });

    // returns that list of panels
    return ( 
        <div className="row"> 
            {panelList}
        </div> 
    )
}

export default ProjectPanel;