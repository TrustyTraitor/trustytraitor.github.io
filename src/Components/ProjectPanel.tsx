import { Card, ListGroup } from 'react-bootstrap';
import Repo from '../Types/Repo';

interface IPanel
{
    repo: Repo;
}

function ProjectPanel(props: IPanel)
{
    return ( 
        <div className="col-sm-12 col-md-6 col-lg-4">
            <Card className="mb-4 mr-1" >
                <Card.Body className="d-flex flex-column">
                    <Card.Title> {props.repo.name} </Card.Title>
                    <Card.Subtitle> {props.repo.language} </Card.Subtitle>
                    <Card.Text> {props.repo.description} </Card.Text>
                    <ListGroup className="mt-auto list-group-flush">
                        <ListGroup.Item>
                            <Card.Link target="_blank" href={props.repo.html_url}>Repo here</Card.Link>
                            { props.repo.homepage ? <Card.Link target="_blank" href={props.repo.homepage} className="mt-auto">Site here</Card.Link> : ''}
                        </ListGroup.Item>
                    </ListGroup>
                </Card.Body>
            </Card>
        </div>
    )
}

export default ProjectPanel;