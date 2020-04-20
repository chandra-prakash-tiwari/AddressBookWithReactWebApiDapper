import React, { Component } from 'react';

export default class Form extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            email: '',
            mobile: '',
            landline: '',
            website: '',
            address: '',
            opertaion: '',
            id: '',
        }
    }
    
    handleChange = (event) => {
        this.setState({
            ...this.state,
            [event.target.name]: event.target.value
        });
    }

    componentDidMount = () => {
        if (window.location.pathname === '/add')
            this.setState({ opertaion: 'ADD' })

        else{
            fetch(`api/contact?id=${window.location.pathname.split('/')[2]}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            }).then(async response => {
                const data = await response.json();
                if (!response.ok) {
                    return Promise.reject();
                }
                this.setState({
                    id: data.id,
                    name: data.name,
                    mobile: data.mobile,
                    email: data.email,
                    landline: data.landline,
                    address: data.address,
                    website: data.website,
                    opertaion: 'UPDATE'
                })
                return data;

            }).catch(Error => {
                console.log(Error)
            })
        }
    }

    contact = (e) => {
        e.preventDefault();
        var contactdetail = {
            "name": this.state.name,
            "email": this.state.email,
            "mobile": this.state.mobile,
            "landline": this.state.landline,
            "website": this.state.website,
            "address": this.state.address
        };

        if (this.state.opertaion === 'ADD') {
            fetch('api/add', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(contactdetail)
            }).then(async response => {
                const data = response.json();
                if (!response.ok) {
                    return Promise.reject();
                }
                return data;

            }).catch(Error => {
                console.log(Error)
            })
        }
        else if (this.state.opertaion === 'UPDATE') {
            fetch(`api/edit?id=${this.state.id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(contactdetail)
            }).then(async response => {
                const data = response.json();
                if (!response.ok) {
                    return Promise.reject();
                }

                return data;

            }).catch(Error => {
                console.log(Error)
            })
        }

        window.location.pathname = '/';
    }

    render() {
        return (
            <div className="col-sm-6 form"  >
                <form action="/" id="form-details" onSubmit={this.contact} >
                    <div className="form-group">
                        <label><b>Name <span>Required</span></b></label>
                        <input type="text" className="form-control" name="name" value={this.state.name} id="name" onChange={this.handleChange} required />
                    </div>
                    <div className="form-group">
                        <label><b>Email <span>Required</span></b></label>
                        <input type="email" className="form-control" name="email" value={this.state.email} id="email" onChange={this.handleChange} required />
                    </div>
                    <div className="row">
                        <div className="form-group col-sm-6">
                            <label><b>Mobile <span>Required</span></b></label>
                            <input type="text" className="form-control" name="mobile" value={this.state.mobile} id="mobile" onChange={this.handleChange} required />
                        </div>
                        <div className="form-group col-sm-6">
                            <label><b>Landline <span>Required</span></b></label>
                            <input type="text" name="landline" id="landline" value={this.state.landline} className="form-control" onChange={this.handleChange} required />
                        </div>
                    </div>
                    <div className="form-group">
                        <label><b>Website <span>Required</span></b></label>
                        <input type="text" name="website" id="website" className="form-control" value={this.state.website} onChange={this.handleChange} required />
                    </div>
                    <div className="form-group">
                        <label><b>Address</b></label>
                        <textarea className="form-control" name="address" id="address" value={this.state.address} onChange={this.handleChange} ></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary" id="addbtn">{this.state.opertaion}</button>
                </form> 
            </div>  
        )
    }
}
