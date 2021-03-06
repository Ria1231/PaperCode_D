import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { DeleteUser } from "../../redux/Action/UserAction";



export default function UserList() {
    let history = useHistory();
    const dispatch = useDispatch();

    const userSel = useSelector((state) => state.users.users)
    console.log("userSel ", userSel)
    const submithandler = () => {
        history.push("/addUser");
      }

    return (
        <div className="container">
                <table className="table table-striped">
                    <thead>
                        <th>ID</th>
                        <th>CARD NO.</th>
                        <th>NAME</th>
                        <th>MOBILE NO.</th>
                        <th>GENDER</th>
                        <th>ACTION</th>
                    </thead>
                    <tbody>
                        {
                            userSel.map(user=>{
                                return(
                                    <tr key={user.id}>
                                        <td>{user.id}</td>
                                        <td>{user.CardNo}</td>
                                        <td>{user.Name}</td>      
                                        <td>{user.MobileNumber}</td>
                                        <td>{user.Gender}</td>
                                        <td>
                                            <button type="button" 
                                            onClick={() => dispatch(DeleteUser(user.id))}
                                            className="btn btn-danger">Delete</button>
                                            <Link to={'/edit/'+user.id}>
                                            {/* <a href={'edit/1'}> */}
                                                <span>Edit</span>
                                                {/* </a> */}
                                                </Link>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
                <button type="button" onClick={submithandler} className="btn btn-outline-dark btn-sm ">ADD USER</button>

            </div>
    )
}