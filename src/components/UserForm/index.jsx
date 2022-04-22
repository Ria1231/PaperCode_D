import React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { AddUser,UpdateUser,GetUser } from '../../redux/Action/UserAction';
import { useHistory, useParams } from "react-router-dom";
import shortid from "shortid";


export default function UserForm(){

    let history = useHistory();
    //use dispatch    
    const dispatch = useDispatch();

    const [Name, setName] = useState('');
    const [Cardno, setCardno] = useState('');
    const [Mobileno, setMobileno] = useState('');
    const [Gender, setGender] = useState('');


    //Add Form Data
    const submithandler = (e) => {
        e.preventDefault()

        const userdata = {
            id: shortid.generate(),
            CardNo: Cardno,
            Name: Name,
            MobileNo: Mobileno,
            Gender:Gender
          }

          if(id){
            const userdata = {
                id: id,
                CardNo: Cardno,
                Name: Name,
                MobileNo: Mobileno,
                Gender:Gender
              }
              dispatch(UpdateUser(userdata));
             history.push("/UserList");
          }
          else{
        //   dispatch(getContact(""));
          dispatch(AddUser(userdata));
          console.log("formdata" + JSON.stringify(userdata));
          history.push("/UserList");
          }
    }

    let { id } = useParams();
    
    const getUserSelector = useSelector((state) => state.users.user)
    console.log("id", id);

    useEffect(() => {
        if (id) {
          dispatch(GetUser(id));
        }
      }, [id]);
    
      useEffect(() => {
        console.log("getcontactSelector", getUserSelector);
        if (getUserSelector != null) {
          setCardno(getUserSelector.Cardno)
          setName(getUserSelector.Name)
          setMobileno(getUserSelector.Mobileno)
          setGender(getUserSelector.Gender)
    
        }
      }, [getUserSelector]);
    return(

        <div className="container-fluid my-5">
        <div className="col-md-8 p-5 mx-auto shadow">
                <form>
                    <div className="form-group my-3">
                        <input type="text" 
                        className='form-control' 
                        name='cardno' 
                        placeholder='Enter Debit Card No.'
                        value={Cardno}
                        onChange={(e) => setCardno(e.target.value)}
                        />
                    </div>
                    
                    <div className="form-group my-3">
                        <input type="text" className='form-control' name='name' placeholder='Enter Name'
                        value={Name}
                        onChange={(e) => setName(e.target.value)}/>
                    </div>                    

                    <div className="form-group my-3">
                        <input type="text" className='form-control' name='mobile no' placeholder='Enter Mobile No'
                        value={Mobileno}
                        onChange={(e) => setMobileno(e.target.value)}/>
                    </div>

                    <div className="form-group my-3">
                        <input type="text" className='form-control' name='gender' placeholder='Gender'
                        value={Gender}
                        onChange={(e) => setGender(e.target.value)}/>
                    </div>
                    <div className="form-group my-3">
                    <button type="submit" onClick={submithandler} className="btn btn-primary">ADD</button>
                    <button type="button" className="btn btn-default">CANCEL</button>
                    </div>
                </form>
            </div>
            </div>
    )
}