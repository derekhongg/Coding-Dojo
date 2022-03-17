import { useParams } from "react-router-dom";

const Display = (props) => {
    const { value } = useParams();
    return(
        <div>
            <h1>{ value }</h1>
        </div>
    )
}

export default Display;