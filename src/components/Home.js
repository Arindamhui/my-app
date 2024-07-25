import React from "react";
import Array from "./array";
import {Button,Table } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import {Link , Navigate, useNavigate} from "react-router-dom";
import Create from "./Create";

const Home=()=> {

    let history = useNavigate();

    // you may skip this part if you're 
    // using react-context api or redux
    function setID(id, name, age) {
        localStorage.setItem("id", id);
        localStorage.setItem("Name", name);
        localStorage.setItem("Age", age);
    }

    function deleted(id){
        let index = Array.map(function (e){
            return e.id;
        })
        .indexOf(id);

        Array.splice(index, 1);
        history("/home");
    }
   
    return (
       
        
        <div style={{ margin: "5rem" }}>
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                    </tr>
                </thead>
                <tbody>
                    {/* Mapping though every element 
                        in the array and showing the 
                        data in the form of table */}
                    {Array.map((item) => {
                        return (
                            <tr>
                                <td>{item.Name}</td>
                                <td>{item.Age}</td>
 
                                {/* getting theid,name, and 
                                    age for storing these
                                    value in the jsx with 
                                    onclick event */}
                                <td>
                                   <Link to={'/edit'}>
                                        <Button
                                            onClick={(e)=>

                                                setID(
                                                    item.id,
                                                    item.Name,
                                                    item.Age
                                                )
                                            }
                                            
                                            variant="info"
                                        >
                                            Update
                                        </Button>
                                        </Link>
                                </td>
 
                                {/* Using thr deleted function passing
                                    the id of an entry */}
                                <td>
                                    
                                    <Button
                                     onClick={(e)=>

                                        deleted(
                                            item.id,
                                            item.Name,
                                            item.Age
                                        )
                                    }
                                         
                                        
                                        variant="danger"
                                    >
                                        Delete
                                    </Button>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </Table>
 
            {/* Button for redirecting to create page for
                insertion of values */}
            <Link to='/create'>
            <Button variant='warning' size='ig'>
                Create
            </Button>
            </Link>
            
        </div>
    );

}
export default Home;