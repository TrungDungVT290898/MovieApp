import React from 'react'
import { useLocation } from 'react-router';
import { Navigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth'
import { Props } from '../types/type';
function AuthRequired({ children }: Props) {
    const location = useLocation();
    const { state } = useAuth();
    if (!state.isInit) {
        return <></>;
    }
    if (!state.isAuthen) {
        return <Navigate to="/login" state={{ from: location }} />
    }
    return children;


}

export default AuthRequired