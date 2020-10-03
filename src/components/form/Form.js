import React, { Component } from "react";
import "./form.css";

const emailRegex = RegExp(
    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);

const formValid = ({ formErrors, ...rest }) => {
    let valid = true;

    // validate form errors being empty
    Object.values(formErrors).forEach(val => {
        val.length > 0 && (valid = false);
    });

    // validate the form was filled out
    Object.values(rest).forEach(val => {
        val === null && (valid = false);
    });

    return valid;
};

class Form extends Component {
    constructor(props) {
        super();

        this.state = {
            name: null,
            lastName: null,
            email: null,
            message: null,
            formErrors: {
                firstName: "",
                lastName: "",
                email: "",
                message: ""
            }
        };
    }

    handleSubmit = e => {
        e.preventDefault();

        let formErrors = { ...this.state.formErrors };

        // checking email and message fields being filled
        if (this.state.email === null || this.state.email.length === 0) {
            formErrors.email = "Requires to be filled";
        }
        if (this.state.message === null || this.state.message.length === 0) {
            formErrors.message = "Requires to be filled";
        }
        this.setState({ formErrors });

        if (formValid(this.state)) {
            console.log(`
                --SUBMITTING--
                First Name: ${this.state.firstName}
                Last Name: ${this.state.lastName}
                Email: ${this.state.email}
                message: ${this.state.message}
            `);
        } else {
            console.error("FORM INVALID - DISPLAY ERROR MESSAGE");
        }
    };

    handleChange = e => {
        e.preventDefault();
        const { name, value } = e.target;
        let formErrors = { ...this.state.formErrors };

        switch (name) {
            case "firstName":
                formErrors.firstName =
                    value.length < 3 ? "Minimum 3 characaters required" : "";
                break;
            case "lastName":
                formErrors.lastName =
                    value.length < 3 ? "Minimum 3 characaters required" : "";
                break;
            case "email":
                formErrors.email = emailRegex.test(value) || value.length === 0
                    ? ""
                    : "Invalid email address";
                break;
            case "message":
                formErrors.message =
                    value.length > 5 ? "Max 120 characaters required" : "";
                break;
            default:
                break;
        }

        this.setState({ formErrors, [name]: value }, () => console.log(this.state));
    };

    render() {
        const { formErrors } = this.state;

        return (
            <div id="form" className="form">
                <div className="contant-info">
                    <h1>contact<br /> us.</h1>
                    <p>Playground srl<br />
                    Via G. Mazzini 3/C,<br />
                    Cernusco Sul Naviglio (Milano)<br />
                    -<br />
                    T +39 0240706003<br />
                    </p>
                </div>
                <div className="form-wrapper">
                    <form onSubmit={this.handleSubmit} noValidate>
                        <div className="firstName">
                            <input
                                className={formErrors.firstName.length > 0 ? "error" : null}
                                placeholder="name"
                                type="text"
                                name="firstName"
                                noValidate
                                onChange={this.handleChange}
                            />
                            {formErrors.firstName.length > 0 && (
                                <span className="errorMessage">{formErrors.firstName}</span>
                            )}
                        </div>
                        <div className="lastName">
                            <input
                                className={formErrors.lastName.length > 0 ? "error" : null}
                                placeholder="Last Name"
                                type="text"
                                name="lastName"
                                noValidate
                                onChange={this.handleChange}
                            />
                            {formErrors.lastName.length > 0 && (
                                <span className="errorMessage">{formErrors.lastName}</span>
                            )}
                        </div>
                        <div className="email">
                            <input
                                className={formErrors.email.length > 0 ? "error" : null}
                                placeholder="*email"
                                type="email"
                                name="email"
                                noValidate
                                onChange={this.handleChange}
                            />
                            {formErrors.email.length > 0 && (
                                <span className="errorMessage">{formErrors.email}</span>
                            )}
                        </div>
                        <div className="message">
                            <input
                                className={formErrors.message.length > 0 ? "error" : null}
                                placeholder="*message"
                                type="message"
                                name="message"
                                maxLength="120"
                                noValidate
                                onChange={this.handleChange}
                            />
                            {formErrors.message.length > 0 && (
                                <span className="errorMessage">{formErrors.message}</span>
                            )}
                        </div>
                        <div className="createAccount">
                            <button type="submit">SEND &gt;</button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default Form;