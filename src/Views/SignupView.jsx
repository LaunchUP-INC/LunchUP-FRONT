import SingForm from "../components/SingFormg/SingForm";
import { useEffect } from "react";
import { toast } from "react-toastify";
import { useSelector, useDispatch } from "react-redux";
import { clearError } from "../redux/actions";

const SignupView = () =>{
    const dispatch = useDispatch();
    const error = useSelector((state)=> state.error);


    useEffect(() => {
        if (error) {     
            toast.error(error);
            dispatch(clearError()); 
        } 
      }, [error]);

    return (
        <div>
            <SingForm />
        </div>
    )
}

export default SignupView;