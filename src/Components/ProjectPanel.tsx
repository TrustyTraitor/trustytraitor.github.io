import {Component} from 'react';
import { Card, ListGroup } from 'react-bootstrap';

interface IPanel
{
    name: string;
    language: string;
    description: string;
    svn_url: string;
    homepage?: string;
}

class ProjectPanel extends Component<IPanel>
{

    render()
    {
        return (
            <div className="col-sm-12 col-md-6 col-lg-4">
                <Card className="mb-4 mr-1">
                    <Card.Body className="d-flex flex-column">
                        <Card.Title> {this.props.name} </Card.Title>
                        <Card.Subtitle> {this.props.language} </Card.Subtitle>
                        <Card.Text> {this.props.description} </Card.Text>
                        <ListGroup className="mt-auto list-group-flush">
                            <ListGroup.Item>
                                <Card.Link target="_blank" href={this.props.svn_url}>Repo here</Card.Link>
                                { this.props.homepage ? <Card.Link target="_blank" href={this.props.homepage} className="mt-auto">Site here</Card.Link> : ''}
                            </ListGroup.Item>
                        </ListGroup>
                    </Card.Body>
                </Card>
            </div>
        )
    }
}

export default ProjectPanel;