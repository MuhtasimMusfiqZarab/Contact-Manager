import React, { Component } from "react";

class AddContact extends Component {
  state = {
    name: "",
    email: "",
    phone: ""
  };

  onSubmit = e => {
    e.preventDefault();
    console.log(this.state);
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    const { name, email, phone } = this.state;
    return (
      <div className="card mb-3">
        <div className="card-header">Add Contact</div>
        <div className="card-body">
          <form action="" onSubmit={this.onSubmit}>
            <div className="form-group">
              <label htmlFor="name">
                <input
                  type="text"
                  name="name"
                  className="form-control form-control-lg"
                  placeholder="Enter Name..."
                  value={name}
                  onChange={this.onChange}
                />
              </label>
            </div>
            <div className="form-group">
              <label htmlFor="email">
                <input
                  type="email"
                  name="email"
                  className="form-control form-control-lg"
                  placeholder="Enter Email..."
                  value={email}
                  onChange={this.onChange}
                />
              </label>
            </div>
            <div className="form-group">
              <label htmlFor="phone">
                <input
                  type="text"
                  name="phone"
                  className="form-control form-control-lg"
                  placeholder="Enter Phone..."
                  value={phone}
                  onChange={this.onChange}
                />
              </label>
            </div>
            <input
              type="submit"
              value="Add Contact"
              className="btn btn-light btn-block"
            />
          </form>
        </div>
      </div>
    );
  }
}

export default AddContact;
