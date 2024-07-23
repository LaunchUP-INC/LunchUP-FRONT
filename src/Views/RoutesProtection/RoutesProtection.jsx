import { Navigate, useLocation } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import Loader from "../../components/Loader/Loader";

export const ProtectedRoute = ({ children }) => {
    const { isAuthenticated, isLoading: authLoading } = useAuth0();
    const user = useSelector((state) => state.user);
    const location = useLocation();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if (!authLoading) {
            setIsLoading(false);
        } 
    }, [isAuthenticated, user, authLoading]);

    if (isLoading) {
        return <Loader />;
    }

    if (!isAuthenticated && !user && !["/", "/login", "/signup"].includes(location.pathname)) {
       return  <Navigate to="/login" state={{ from: location }} />;
        
    }

    return children;
};

export const ProtectAdminRoutes = ({ children }) => {
    const { isAuthenticated } = useAuth0();
    const user = useSelector((state) => state.user);
    const location = useLocation();
    const [isLoading, setIsLoading] = useState(true);

    let auth = isAuthenticated || user ? true : false;
    // Aquí debes definir cómo determinar si el usuario es un administrador
    const isAdmin = user.isAdmin; 

    useEffect(() => {
        if (isAuthenticated && user) {
            setIsLoading(false);
        } else {
            setIsLoading(false);
        }
    }, [isAuthenticated, user]);

    if (isLoading) {
        return <div>Loading...</div>; // O un spinner, etc.
    }

    if (!isAdmin && auth) {
        return <Navigate to="/home" state={{ from: location }} />;
    }

    return children;
};
