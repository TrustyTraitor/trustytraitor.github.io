import { Card, ListGroup } from 'react-bootstrap';

interface IPanel
{
    name?: string;
    language?: string;
    description?: string;
    html_url?: string;
    homepage?: string;
}

function ProjectPanel(props: IPanel)
{
    return (
        <div className="col-sm-12 col-md-6 col-lg-4">
            <Card className="mb-4 mr-1">
                <Card.Body className="d-flex flex-column">
                    <Card.Title> {props.name} </Card.Title>
                    <Card.Subtitle> {props.language} </Card.Subtitle>
                    <Card.Text> {props.description} </Card.Text>
                    <ListGroup className="mt-auto list-group-flush">
                        <ListGroup.Item>
                            <Card.Link target="_blank" href={props.html_url}>Repo here</Card.Link>
                            { props.homepage ? <Card.Link target="_blank" href={props.homepage} className="mt-auto">Site here</Card.Link> : ''}
                        </ListGroup.Item>
                    </ListGroup>
                </Card.Body>
            </Card>
        </div>
    )
}

export default ProjectPanel;