import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';



export default function Navbar() {
    return (
        
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
            <ul class="navbar-nav">
                <li class="nav-item active">
                    <a className="navbar-brand" href="/addUser">Add User</a>
                </li>
                <li class="nav-item">
                    <a className="navbar-brand" href="/UserList">UserList</a>
                </li>      
            </ul>
          </div>
          
          
        </nav>
    
    )
}
