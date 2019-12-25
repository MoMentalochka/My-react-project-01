import React from 'react';
import {AddMessageActionCreator, UpdateNewMessageTextActionCreator} from '../../../../../redux/DialogReducer';
import Form from './Form';
    const FormContainer = (props) =>{

        let AddMessage = () =>{
            props.dispatch(AddMessageActionCreator());
        };

        let UpdateNewMessageText = (text) =>{
            let action = UpdateNewMessageTextActionCreator(text);
            props.dispatch(action);
        };
        
        return (<Form newMessageText = {props.MessageData.newMessageText} UpdateNewMessageText = {UpdateNewMessageText} AddMessage = {AddMessage} />)
    }

export default FormContainer;