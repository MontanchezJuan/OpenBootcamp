import React from 'react';
import { Contact } from '../../models/contact.class';
import ContactComponent from '../pure/contact';


const ContactListComponent = () => {

    const defaultContact = new Contact('Juan', 'Montanchez', 'juan@gmail.com', true)
    const defaultContact1 = new Contact('Santi', 'Bedoya', 'santi@gmail.com', false)

    return (
        <div>
            <div>
                <h1>
                    Your contacts:
                </h1>
            </div>
            <ContactComponent contact={defaultContact}></ContactComponent>
            <ContactComponent contact={defaultContact1}></ContactComponent>
        </div>
    );
};


export default ContactListComponent;
