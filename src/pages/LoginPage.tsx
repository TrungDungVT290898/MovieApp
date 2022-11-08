import React from 'react'
import { FormProvider, FTextField } from '../components/form'
import { useNavigate, useLocation } from "react-router-dom"
import useAuth from '../hooks/useAuth';
import { useForm } from "react-hook-form"
import * as Yup from "yup";
import { User } from '../contexts/AuthProvider';

const LoginSchema = Yup.object().shape({
    username: Yup.string().required("Username is required"),
});
const defaultValues: User = {
    username: "",
    password: ""
};
function LoginPage() {
    let navigate = useNavigate();
    let location = useLocation();
    let auth = useAuth();

    const methods = useForm({

        defaultValues
    });
    const { handleSubmit } = methods;

    const onSubmit = async (data: User) => {

        let from = location.state?.from?.pathname || "/";
        console.log(`from: ${from}`);
        auth.login(data, () => {

            navigate(from, { replace: true });
        });
    };

    return (
        <div style={{
            display: "flex", justifyContent: "center", alignItems: "center", color: "white",
            height: "100vm", position: "absolute", width: "100%", top: "30%"
        }}>
            <FormProvider onSubmit={handleSubmit(onSubmit)} methods={methods} >
                <div className="col-md-4">
                    <label htmlFor="validationCustom01" className="form-label">Username</label>
                    <FTextField className=".form-control-lg" name="username" required />
                    <div className="valid-feedback">
                        Looks good!
                    </div>
                </div>
                <div className="col-md-4">
                    <label htmlFor="validationCustom02" className="form-label">Password</label>
                    <FTextField className=".form-control-lg" name="password" type="password" required />
                    <div className="valid-feedback">
                        Looks good!
                    </div>
                </div>
                <div style={{ height: 30 }}></div>
                <div className="col-12">
                    <button className="btn btn-primary" type="submit">Log in</button>
                </div>
            </FormProvider>
        </div>

    )
}

export default LoginPage