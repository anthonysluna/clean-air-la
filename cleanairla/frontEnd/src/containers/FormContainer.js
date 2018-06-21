import React, { PureComponent } from "react";
import AddressForm from "../components/AddressForm";
import "./formContainer.css";

class FormContainer extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      street: "",
      ste: "",
      city: "",
      state: "",
      zip: ""
    };
  }

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = () => {};

  render() {
    return (
      <div className="container" style={{ height: "100vh", marginTop: -88 }}>
        <div className="row centered">
          <div className="col-6 card" style={{ backgroundColor: "#968ef9" }}>
            <div className="card-body">
              <AddressForm
                street={this.state.street}
                ste={this.state.ste}
                city={this.state.city}
                state={this.state.state}
                zip={this.state.zip}
                onChange={this.onChange}
                onSubmit={this.onSubmit}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default FormContainer;
