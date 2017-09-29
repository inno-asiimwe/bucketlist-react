import React from 'react';
import { Redirect } from 'react-router-dom'

const LoginUser = (props) => {
    if(props.isAuthenticated){
        return <Redirect to='/' />
    }
    return(
        <div>
            <h1>Login in </h1>
            <br></br>
            <form onSubmit={(event) =>props.login(event)}>
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
                <button type="submit" className="btn btn-primary pull-right">
                Log in
                </button>
            </form>
        </div>
    )
}
export default LoginUser;