import React from 'react';

const LoginUser = (props) => {
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
                        onChange={props.handlechange}
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
                        onChange={props.handlechange}
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