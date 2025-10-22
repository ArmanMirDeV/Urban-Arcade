import React, { use } from 'react';
import { AuthContext } from './AuthProvider';
import { Navigate } from 'react-router';
import Loading from '../Pages/Loading';

const PrivateRoute = ({ children }) => {
    
    const { user, loading , setLoading } = use(AuthContext);
    console.log(user);
    

    if (loading) {
    return <Loading />

}


    if (user && user?.email) {
        
        return children
    }
    return <Navigate to="/login" ></Navigate>
};

export default PrivateRoute;