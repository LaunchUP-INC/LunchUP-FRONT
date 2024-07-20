import LoginForm from "../components/LoginForm/LoginForm";
import { useEffect } from "react";
import { toast } from "react-toastify";
import { useSelector, useDispatch } from "react-redux";
import { clearError } from "../redux/actions";

const LoginView = () => {

      const dispatch = useDispatch();
      const error = useSelector((state)=> state.error);

      const errorValidation = () => {
        if (error) {
          toast.error(error);
        }
      };

      useEffect(() => {
        if (error) {     
            toast.error(error);
            dispatch(clearError()); 
        } 
      }, [error]);

    return (
        <div>
            <LoginForm errorValidation={errorValidation}/>
        </div>
    )

}

export default LoginView;