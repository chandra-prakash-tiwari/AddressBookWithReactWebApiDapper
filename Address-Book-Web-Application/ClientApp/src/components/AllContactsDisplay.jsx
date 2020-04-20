import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../css/index.css'

export default class AllContactsDisplay extends Component {
    state = {
        contacts:[]
    }

    handleChange=(id)=> {
        window.location.pathname = '/';
        window.location.pathname =  '/contactdisplay/'+id;
    }

    componentDidMount = () => {
        fetch('api/contacts', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept':'application/json'
            }
        }).then(async response => {
            const data = await response.json();
            if (!response.ok) {
                return Promise.reject();
            }

            this.setState({ contacts: data })
            return data;

        }).catch(Error => {
            console.log(Error)
        })
    }

    render() {
        const contactsDisplay = this.state.contacts.map((contact, i) => (
            <div className='contacts-details' key={i} onClick={() => this.handleChange(contact.id)}>
                <Link to='/'>
                    <h4>{contact.name}</h4>
                    <p>{contact.email}</p>
                    <p>{contact.mobile}</p>
                </Link>
            </div>
            ))


        return (
            <div className="col-sm-4" id="contact-list" >
                <h6 className="contacts-head"><b>CONTACTS</b></h6>
                <div>{contactsDisplay}</div>
            </div>
        );
    }
}
