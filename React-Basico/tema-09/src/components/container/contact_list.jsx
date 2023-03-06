import React, { useState } from 'react';
import { Contact } from '../../models/contact.class';
import ContactComponent from '../pure/contact';
import ContactForm from '../pure/form/contactForm';

const ContactListComponent = () => {

    const defaultContact = new Contact('Juan', 'Montanchez', 'juan@gmail.com', true)
    const defaultContact1 = new Contact('Santi', 'Bedoya', 'santi@gmail.com', false)
    const defaultContact2 = new Contact('Marco', 'Lindo', 'marco@gmail.com', true)

    const [contacts, setContacts] = useState([defaultContact,defaultContact1,defaultContact2]);

    function conected(contact){
        const index = contacts.indexOf(contact);
        const tempContacts = [...contacts];
        tempContacts[index].conected = !tempContacts[index].conected;
        setContacts(tempContacts);
    }

    function remove(contact){
        const index = contacts.indexOf(contact);
        const tempContacts = [...contacts];
        tempContacts.splice(index,1);
        setContacts(tempContacts);
    }

    function addContact(contact){
        const tempContacts = [...contacts];
        tempContacts.push(contact);
        setContacts(tempContacts);
    }

    return (
        <table>
            <div>
                <h1>
                    Your contacts:
                </h1>
                <thead>
                    <th scope='col'>Name</th>
                    <th scope='col'>Last name</th>
                    <th scope='col'>Email</th>
                    <th scope='col'>Connected</th>
                    <th scope='col'>Actions</th>
                </thead>
                <tbody>
                { contacts.map((contact, index) => {
                        return (
                                <ContactComponent 
                                    key={index} 
                                    contact={contact}
                                    conected={conected}
                                    remove={remove}
                                >
                                </ContactComponent>
                            )
                        }
                    )}
                </tbody>
            </div>
            <div>
                <ContactForm add={addContact} length={contacts.length}></ContactForm>
            </div>
        </table>
    );
};


export default ContactListComponent;
