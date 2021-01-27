import React, { Component } from "react";
import "./style.css";
import Container from "react-bootstrap/Container";

class Form extends Component {
    // Setting the component's initial state
    state = {
        firstName: "",
        lastName: "",
    };

    handleInputChange = event => {
        // Getting the value and name of the input which triggered the change
        let value = event.target.value;
        const name = event.target.name;

        // Updating the input's state
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        // Preventing the default behavior of the form submit (which is to refresh the page)
        event.preventDefault();
        this.setState({
            firstName: "",
            lastName: "",
        });
    };

    render() {
        // Notice how each input has a `value`, `name`, and `onChange` prop
        return (
            <div>
                <Container>
                    <h1>
                        Hello {this.state.firstName} {this.state.lastName}!
          </h1>
                    <h2>
                        Fill out the form to contact me!
            </h2>
                    <form className="form">
                        <input
                            value={this.state.firstName}
                            name="firstName"
                            onChange={this.handleInputChange}
                            type="text"
                            placeholder="First Name"
                        />
                        <input
                            value={this.state.lastName}
                            name="lastName"
                            onChange={this.handleInputChange}
                            type="text"
                            placeholder="Last Name"
                        />
                        <div class="form-group">
                            <label for="exampleFormControlTextarea1">I can't wait to hear from you!</label>
                            <input class="form-control" id="exampleFormControlTextarea1" rows="3"
                                placeholder="Please add information about your company and your company's website!">
                            </input>
                        </div>
                        <button onClick={this.handleFormSubmit}>Submit</button>
                    </form>
                </Container>
            </div>
        );
    }
}

export default Form;