import { useParams } from "react-router-dom";

const Display2 = (props) => {
    const { value, color1, color2 } = useParams();
    if (isNaN(value)) {
    return(
        <div>
            <h1 style={{color: color1, backgroundColor: color2}}>{ value }</h1>
        </div>
        );
    } else{
        return <h1>Number is {value} </h1>
    }
}

export default Display2