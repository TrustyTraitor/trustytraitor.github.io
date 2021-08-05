import { Col, Row} from 'react-bootstrap'

type Jumbo = {
    header : string,
    children : any,
}

function CustomJumbotron(props : Jumbo)
{

    return (
        <Row>
            <Col>
                <div className="p-5 bg-light border rounded-3">
                    <h1 className="display-4 d-none d-md-block d-lg-block"> {props.header} </h1>
                    <h3 className="d-sm-block d-md-none"> {props.header} </h3>

                    <hr className="my-4"/>

                    {props.children}  
                </div>
            </Col>
        </Row>
    )
}

export default CustomJumbotron;