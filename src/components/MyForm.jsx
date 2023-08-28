import React from "react"
import Table from "./Table";


class MyForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            form: {
                email: "",
                password: "",
                address: "",
                city: "",
                country: "",
                acceptRules: false
            },
            isSubmitted: false


        }
    }

    handleChange = (e) => {
        const {name, value, type, checked} = e.target;

        this.setState((prevState) => ({

            form: {
                ...prevState.form,
                [name]: type === 'checkbox' ? checked : value
            }
        }));
    };

    handleSubmit = (e) => {
        e.preventDefault();
        this.setState(() => {
            return {isSubmitted: true}
        });
    };

    handleBack = (e) => {
        e.preventDefault();
        this.setState(() => {
            return {isSubmitted: false}
        });
    };

    render() {
        const {email, password, address, city, country, acceptRules} = this.state.form;

        return (
            <>
                {this.state.isSubmitted ? (<Table items={this.state} handleBack={this.handleBack} />) :
                    (<form name="myForm" onSubmit={this.handleSubmit}>
                        <div className="col-md-6 mb-3">
                            <label htmlFor="email" className="col-form-label">Email</label>
                            <input type="email" name="email" className="form-control" id="email" placeholder="Email"
                                   onChange={this.handleChange} value={email}/>
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="password" className="col-form-label">Password</label>
                            <input type="password" name="password" className="form-control" id="password"
                                   placeholder="Password"
                                   onChange={this.handleChange} value={password}/>
                        </div>
                        <div className="col-md-6 mb-3">
                            <label htmlFor="address" className="col-form-label">Address</label>
                            <textarea type="text" className="form-control" name="address" id="address"
                                      placeholder="1234 Main St" onChange={this.handleChange}
                                      value={address}></textarea>
                        </div>
                        <div className="col-md-6 mb-3">
                            <label htmlFor="city" className="col-form-label">City</label>
                            <input type="text" className="form-control" name="city" id="city"
                                   onChange={this.handleChange}
                                   value={city}/>
                        </div>
                        <div className="col-md-6 mb-3">
                            <label htmlFor="country" className="col-form-label">Country</label>
                            <select id="country" name="country" className="form-control" onChange={this.handleChange}
                                    value={country}>
                                <option>Choose</option>
                                <option value="argentina">Argentina</option>
                                <option value="ukraine">Ukraine</option>
                                <option value="china">China</option>
                            </select>
                        </div>
                        <div className="col-md-6 mb-3">
                            <div className="form-check">
                                <label className="form-check-label" htmlFor="rules">
                                    <input id="rules" type="checkbox" name="acceptRules" className="form-check-input"
                                           onChange={this.handleChange} checked={acceptRules}/>
                                    Accept Rules
                                </label>
                            </div>
                        </div>
                        <button type="submit" className="btn btn-primary">Sign in</button>
                    </form>)}
            </>
        )


    }
}

export default MyForm