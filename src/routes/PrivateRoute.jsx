import React, { useContext } from 'react';
import { AuthContext } from '../Auth/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';

const PrivateRoute = ({children}) => {

    const {user, loader} = useContext(AuthContext);
    const location = useLocation();

    if(loader){
        return  <Spinner className='mx-auto d-block mt-5' animation="border" variant="danger" />
    }

    if(user){
        return children;
    }

    return <Navigate to="/login" state={{from: location}} replace></Navigate>
    
};

export default PrivateRoute;