import React, { useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom"
import DeleteButton from "./DeleteButton";

const DisplayAll = (props) => {

    const { authorList, setAuthorList } = props;
    const navigate = useNavigate();

    useEffect(() => {
        axios.get("http://localhost:8000/api/authors")
            .then((res) => {
                console.log(res.data);
                setAuthorList(res.data);
            })
            .catch((err) => console.log(err))
    }, []);

    const deleteFilter = (idFromBelow) => {
        setAuthorList(authorList.filter((author, index) => author._id !== idFromBelow))
    };

    return(
        <div>
            <h1>Favorite Authors</h1>
            <Link to={`/new`}>
                Add New Author
            </Link>
            {
                <table>
                    <thead>
                        {
                            <tr>
                                <th>Author</th>
                                <th>Action Available</th>
                            </tr>
                        }
                    </thead>
                    <tbody>
                    {
                    authorList.map((author, index) => (
                        <tr key={index}>
                            <td>
                                <Link to={`/author/${author._id}`}>
                                {author.name}
                                </Link>
                            </td>
                            <td>
                                <button onClick={() => navigate(`/author/edit/${author._id}`)}>
                                    Edit
                                </button>
                                <DeleteButton authorId={author._id} successfulCallback={()=>deleteFilter(author._id)} navigate="/"/>
                            </td>
                        </tr>
                    ))
                    }
                    </tbody>
                </table>
            }
        </div>
    )

}

export default DisplayAll;