import Profile from "../components/Profile/Profile";
import { useEffect } from "react";
import { toast } from "react-toastify";
import { useSelector, useDispatch } from "react-redux";
import { clearError } from "../redux/actions";

const ProfileUserView = () => {
    const dispatch = useDispatch();
    const error = useSelector((state)=> state.error);


    useEffect(() => {
        if (error) {     
            toast.error(error);
            dispatch(clearError()); 
        } 
      }, [error]);
      
    return <Profile />;
};
export default ProfileUserView;