type Jumbo = {
    image? : any,
    imageAlt? : string,
    imageStyle? : string,
    header : string,
    children : any,
}

function CustomJumbotron(props : Jumbo)
{
    let image;
    if (props.image)
        image = <img src={props.image} alt={props.imageAlt} className={props.imageStyle}/>

    return (
        <div className="mb-3 p-4 border rounded-3 jumbotron">
            <span className="float-start d-none d-sm-none d-md-block">{image}</span>
            <h1 className="display-4 d-none d-md-block d-lg-block"> {props.header} </h1>
            <h3 className="d-sm-block d-md-none"> {props.header} </h3>

            <hr className="my-4"/>

            {props.children}  
        </div>
    )
}

export default CustomJumbotron;