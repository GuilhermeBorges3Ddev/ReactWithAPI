import {reduxForm, Field} from 'redux-form';
import {connect} from 'react-redux';
import React from 'react';
import {submitUserAction} from "../../actions/user/UserAction";

/*
    These form manipulates some states for trainning 
    the Redux lib concepts, its not a 'props-area' or a 'state area'.
*/

const UserFormFunc = props => {
    
    const {handleSubmit} = props
    
    const submit = (data, submitUserAction) => {
        submitUserAction(data)
    }

    return (
        <form onSubmit={handleSubmit((fields) => submit(fields, submitUserAction))}>
            <label>
                Name
            </label>
            <Field
                type="text"
                component="input"
                name="name"
            />
            <label>
                Email
            </label>
            <Field 
                type="text"
                component="input"
                name="email"
            />
            <button type="submit">Submit</button>
        </form>
    );
}

const UserForm = (reduxForm({
    form: 'formUser'
}))(UserFormFunc)

const mapStateToProps = state => ({})

export default connect(mapStateToProps, {submitUserAction})(UserForm)