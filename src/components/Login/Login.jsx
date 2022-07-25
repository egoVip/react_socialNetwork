import React from "react";
import { connect } from "react-redux";
import Field from "redux-form/lib/Field";
import reduxForm from "redux-form/lib/reduxForm";
import { required } from "../../utils/validators/validators";
import { createField, Input } from "../common/formsControl/FormsControls";
import { loginThunkCreator } from "../../redux/auth-reducer";
import { Navigate } from "react-router-dom";
import style from './../common/formsControl/FormsControls.module.css'


const LoginForm = ({ handleSubmit, error, captchaUrl }) => {
    return (
        <form onSubmit={handleSubmit} >
            {/* {createField("Email", "email", [required], Input)}
            {createField("Password", "password", [required], Input, { type: "password" })}
            {createField(null, "rememberMe", [], Input, { type: "checkbox" }, "remember me")} */}
            <div>
                <Field placeholder={'Email'} name={'email'} component={Input} validate={[required]} />
            </div>
            <div>
                <Field type={'password'} placeholder={'Password'} name={'password'} component={Input} validate={[required]} />
            </div>
            <div>
                <Field type={'checkbox'} name={'rememberMe'} component={Input} /> remember me
            </div>
            {captchaUrl && <img src={captchaUrl} alt="" />}
            {captchaUrl && <Field name={'captcha'} validate={[required]} component={Input} />}
            {error && <div className={style.formSummaryError}>
                {error}
            </div>}
            <div>
                <button>Login</button>
            </div>
        </form>
    )
};

const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm);

const Login = ({ loginThunkCreator, isAuth, captchaUrl }) => {
    const onSubmit = (formData) => {
        loginThunkCreator(formData.email, formData.password, formData.rememberMe, formData.captcha);
    }
    if (isAuth) {
        return <Navigate to="/profile/21851" />
    }
    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit} captchaUrl={captchaUrl} />
        </div>

    )
};

const mapStateToProps = (state) => ({
    captchaUrl: state.auth.captchaUrl,
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, { loginThunkCreator })(Login);