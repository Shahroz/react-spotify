import React from 'react';
import {useDispatch} from "react-redux";
import {doLogIn} from "../../../../features/auth/authSlice";

const Signup = () => {
    const dispatch = useDispatch()
    const login = () =>{
        dispatch(doLogIn({user: 'Fahad saeed', email: 'fahadsaeed@gmail.com'}))
    }

    return (
        <div className="App-Login">
            Signup goes here
    <div>
    <button onClick={login}>Login</button>
        </div>
        </div>
)
}

export default Signup
