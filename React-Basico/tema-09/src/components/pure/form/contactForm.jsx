import React, { useRef } from "react";
import { Contact } from "../../../models/contact.class";
import PropTypes from 'prop-types';

const ContactForm = ({ add, length }) => {

    const name = useRef('')
    const lastName = useRef('')
    const email = useRef('')
    const connected = useRef('')

    function addContact(e) {
        e.preventDefault();
        const newContact = new Contact(
            name.current.value,
            lastName.current.value,
            email.current.value,
            connected.current.value
        );
        add(newContact)
    }

    return (
        <form onSubmit={addContact} className="d-flex justify-content-center align-items-center mb-4">
            <div>
                <input className="form-control" ref={name} type="text" required placeholder='Jhon'/>
                <input className="form-control" ref={lastName} type="text" required placeholder='Montanchez'/>
                <input className="form-control" ref={email} type="text" required placeholder='jhon@example.com'/>
                <select className="form-select" ref={connected} defaultValue={true} id="selectValue">
                    <option value={true}>
                        On line
                    </option>
                    <option value={false}>
                        Off line
                    </option>
                </select>
                <button type='submit' className='btn btn-success btn-lg ms-2'>
                {length > 0 ? 'Add New Contact' : 'Create your First Contact'}
                </button>
            </div>
        </form>
    );
}

ContactForm.prototype = {
    add: PropTypes.func.isRequired,
    length: PropTypes.number.isRequired
}

export default ContactForm;