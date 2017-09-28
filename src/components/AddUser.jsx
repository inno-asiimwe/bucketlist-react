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
                    required
                />
            </div>
            <div className="form-group row">
                <label htmlFor="password">
                Password : 
                </label>
                <input 
                    className="form-control" 
                    type="text" 
                    name="password"
                    placeholder="Password"
                    required
                />
            </div>
            <div className="form-group row">
                <label htmlFor="cpassword">
                Confirm Password : 
                </label>
                <input 
                    className="form-control" 
                    type="text" 
                    name="cpassword"
                    placeholder="Confirm Password"
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