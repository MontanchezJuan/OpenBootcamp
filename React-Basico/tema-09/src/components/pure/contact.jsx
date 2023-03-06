import React from 'react';
import PropTypes from 'prop-types';
import { Contact } from '../../models/contact.class';

const ContactComponent = ({contact, conected, remove}) => {

    function contactConectedIcon(){
        if(contact.conected){
            return (<i onClick={() => conected(contact)} className='bi-toggle-on contact-action' style={{color: 'green'}}></i>)
        }else{
            return (<i onClick={() => conected(contact)} className='bi bi-toggle-off contact-action' style={{color: 'white'}}></i>)
        }
    }

    return (
        <tr>
            <th>
                {contact.name}
            </th>
            <th>
                {contact.lastName}
            </th>
            <th>
                {contact.email}
            </th>
            <th>
                {contact.conected ? 'On line' : 'Off line'}
            </th>
            <th>
                {contactConectedIcon()}
                <i className='bi-trash contact-action' style={{color: 'tomato'}} onClick={() => remove(contact)}></i>
            </th>
        </tr>
    );
};


ContactComponent.propTypes = {
    contact: PropTypes.instanceOf(Contact),
    conected: PropTypes.func.isRequired,
    remove: PropTypes.func.isRequired
};


export default ContactComponent;
