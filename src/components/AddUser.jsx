import React from 'react'

const AddUser = (props) => {
    return(
        <form onSubmit={(event) => props.addUser(event)} >
            <div className="form-group row">
                <label htmlFor="firstname">
                First Name : 
                </label>
                <input 
                    className="form-control" 
                    type="text" 
                    name="firstname"
                    placeholder="Enter First Name"
                    value={props.firstname}
                    onChange={props.handleChange}
                    required
                />
            </div>
            <div className="form-group row">
                <label htmlFor="lastname">
                Last Name : 
                </label>
                <input 
                    className="form-control" 
                    type="text" 
                    name="lastname"
                    placeholder="Enter Last Name"
                    value={props.lastname}
                    onChange={props.handleChange}
                    required
                />
            </div>
            <div className="form-group row">
                <label htmlFor="username">
                Username : 
                </label>
                <input 
                    className="form-control" 
                    type="text" 
                    name="username"
                    placeholder="Username"
                    value={props.username}
                    onChange={props.handleChange}
                    required
                />
            </div>
            <div className="form-group row">
                <label htmlFor="password">
                Password : 
                </label>
                <input 
                    className="form-control" 
                    type="password" 
                    name="password"
                    placeholder="Password"
                    value={props.password}
                    onChange={props.handleChange}
                    required
                />
            </div>
            <div className="form-group row">
                <label htmlFor="cpassword">
                Confirm Password : 
                </label>
                <input 
                    className="form-control" 
                    type="password" 
                    name="cpassword"
                    placeholder="Confirm Password"
                    value={props.cpassword}
                    onChange={props.handleChange}
                    required
                />
            </div>
            <div className="form-group row">
                <label htmlFor="email">
                Email : 
                </label>
                <input 
                    className="form-control" 
                    type="text" 
                    name="email"
                    placeholder="Email Address"
                    value={props.email}
                    onChange={props.handleChange}
                    required
                />
            </div>
            <button type="submit" className="btn btn-primary pull-right">
            Register
            </button>

        
        </form>
    )
}
export default AddUser;