import React from "react";
import StateDropdown from "./StateDropdown";
import { Link } from "react-router-dom";

export default function AddressForm(props) {
  return (
    <React.Fragment>
      <h2 className="text-center">Please enter your address</h2>
      <form>
        <div className="row">
          <div className="form-group col">
            <label htmlFor="street">
              <b>Street:</b>
            </label>
            <input
              type="text"
              name="street"
              className="form-control"
              value={props.street}
              onChange={props.onChange}
            />
          </div>
          <div className="form-group col-4">
            <label htmlFor="ste">
              <b>Apt/Ste #:</b>
            </label>
            <input
              type="text"
              name="ste"
              className="form-control"
              value={props.ste}
              onChange={props.onChange}
            />
          </div>
        </div>
        <div className="row">
          <div className="form-group col">
            <label htmlFor="city">
              <b>City:</b>
            </label>
            <input
              type="text"
              name="city"
              className="form-control"
              value={props.city}
              onChange={props.onChange}
            />
          </div>
          <div className="form-group col-3">
            <label htmlFor="state">
              <b>State: </b>
            </label>
            <StateDropdown value={props.state} onChange={props.onChange} />
          </div>
          <div className="form-group col-3">
            <label htmlFor="zip">
              <b>Zip Code:</b>
            </label>
            <input
              type="text"
              name="zip"
              className="form-control"
              value={props.zip}
              onChange={props.onChange}
            />
          </div>
        </div>
        <div className="row">
          <div className="col text-right">
            <Link to="/results">
              <input
                type="button"
                className="btn"
                value="Submit"
                style={{ backgroundColor: "#6d66c6", color: "#ffffff" }}
                onClick={props.onSubmit}
              />
            </Link>
          </div>
        </div>
      </form>
    </React.Fragment>
  );
}
