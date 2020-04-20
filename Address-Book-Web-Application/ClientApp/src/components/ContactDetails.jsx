import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Delete from '../Image/delete2.png';
import Edit from '../Image/edit1.jpg';

export default class ContactDetails extends Component {
    state = {
        name: '',
        mobile: '',
        email: '',
        landline: '',
        address: '',
        website:'',
    }

    componentDidMount = () => {
        fetch(`api/contact?id=${window.location.pathname.split('/')[2]}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        }).then(async response => {
            const data = await response.json();
            if (!response.ok) {
                alert('Contact record is not found')
                window.location.pathname = '/';
                return Promise.reject();
            }
            this.setState({
                name: data.name,
                mobile: data.mobile,
                email: data.email,
                landline: data.landline,
                address: data.address,
                website: data.website
            })
            return data;

        }).catch(Error => {
            console.log(Error)
        })
    }

    handleDelete = () => {
        fetch(`api/delete?id=${window.location.pathname.split('/')[2]}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        }).then(async response => {
            const data = await response.json();
            if (!response.ok) {
                return Promise.reject();
            }
            console.log(data);
            return data;

        }).catch(Error => {
            console.log(Error)
        })
        window.location.pathname = '/';
    }

    render() {
        return (
            <div className="col-sm-6 display-contact-details">
                <div className="contact-header">
                    <h4>{this.state.name}</h4>
                    <Link to={{pathname:'/edit/'+(window.location.pathname).split('/contactdisplay/')[1]}} className="contact-edit">
                        <img src={Edit} alt="EDIT" />
                        <p>EDIT</p>
                    </Link>
                    <Link to={{pathname:'/'}} className="contact-delete" onClick={this.handleDelete}>
                        <img src={Delete} alt="DELETE"/>
                        <p>DELETE</p>
                    </Link>
                </div>
                <p>Email: {this.state.email}</p>
                <p className='contact-media'>Mobile: {this.state.mobile}</p>
                <p className='contact-media'>Landline: {this.state.landline}</p>
                <p className='website'>Website: {this.state.website}</p>
                <p>Address: {this.state.address}</p>
            </div>
        )
    }
}
