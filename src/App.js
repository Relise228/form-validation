import React from 'react';
import s from './app.module.scss';
import {Field, reduxForm} from "redux-form";
import {useDispatch, useSelector} from "react-redux";
import {firstUpper, maxLength, minLength, number, required} from "./validators";
import {selectAuthorized, setAuthorized} from "./features/dataSlice";


function App() {

    const dispatch = useDispatch();
    const authorized = useSelector(selectAuthorized)

    const renderField = ({
                             input,
                             placeholder,
                             type,
                             meta: {touched, error, warning}
                         }) => (

        <div className={`${s.form_content_component} ${(error && touched) ? s.error : ''}`}>
            <input {...input} placeholder={placeholder} autoComplete = 'off' type={type}/>
            {touched &&
            ((error && <span>{error}</span>) ||
                (warning && <span>{warning}</span>))}
        </div>
    )


    let Note = () => {
        return <div className={s.list}>
            <ul>
                <li>All fields is required</li>
                <li>Login first symbol must be in Uppercase</li>
                <li>Password must contain at least one number</li>
                <li>Password length can't be longer than 15 symbols and less than 8</li>
            </ul>
            <p>Login: Testlogin</p>
            <p>Password: userpassword1</p>
        </div>
    }

    let LoginForm = (props) => {
        const {handleSubmit, pristine, submitting} = props
        return (
            <form className={s.form} onSubmit={handleSubmit}>
                <p>Login Form</p>
                <div className={s.form_content}>
                    <Field validate={[required, firstUpper]} type='text' placeholder='Login'
                           name='login'
                           component={renderField}/>
                    <Field validate={[required, number, maxLength, minLength]} placeholder='Password'
                           name='password' type='password'
                           component={renderField}/>
                    <div className={s.form_content_component}>
                        <button disabled={pristine || submitting} type='submit'>Login</button>
                    </div>
                </div>
            </form>
        )
    }

    LoginForm = reduxForm({form: 'login'})(LoginForm)

    const onSubmit = (values) => {
        if (values.login === 'Testlogin' && values.password === 'userpassword1') {
            dispatch(setAuthorized(true))
        }
    }

    return (
        <div className={s.app}>
            {!authorized ? <LoginForm onSubmit={onSubmit}/> : <div className={s.form}>
                <button className={s.logout} onClick={() => dispatch(setAuthorized(false))}>Log out</button>
            </div>}
            <Note/>
        </div>
    );
}

export default App;
