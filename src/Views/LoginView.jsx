import LoginForm from "../components/LoginForm/LoginForm";
import { useEffect } from "react";
import { toast } from "react-toastify";
import { useSelector, useDispatch } from "react-redux";

const LoginView = () => {

      const dispatch = useDispatch();
      const error = useSelector((state)=> state.error);

      useEffect(() => {
        if (error) {     
            toast.error(error);
        } 
      }, [error]);

    return (
        <div>
            <LoginForm />
        </div>
    )

}

export default LoginView;