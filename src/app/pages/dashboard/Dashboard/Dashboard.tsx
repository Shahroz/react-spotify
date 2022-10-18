import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {doLogout} from "../../../../features/auth/authSlice";


 const Dashboard = () => {
    const dispatch = useDispatch()
   const auth =  useSelector((state: any) => state.auth);
   const logout = () =>{
       dispatch(doLogout())
   }
   console.log('auth', auth);
    return (
        <div className="App-Dashboard">
            Welcome {auth?.user?.user}
            <div>
                <button onClick={logout}>Logout</button>
            </div>
        </div>
    )
}

export default Dashboard
