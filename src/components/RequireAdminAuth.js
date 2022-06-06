import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate } from 'react-router-dom';
import useUsers from '../hooks/useUsers';
import auth from './firebase.init';
import Loading from './Loading';

const RequireAdminAuth = ({ children }) => {
    const [user] = useAuthState(auth);
    const [users, userLoading] = useUsers();
    const currentUser = users.find(currentUser => currentUser.email === user?.email);
    if (userLoading) { return <Loading></Loading>; }
    else if (currentUser?.role !== 'admin') { return <Navigate to="/dashboard" /> }
    return (children);
};

export default RequireAdminAuth;