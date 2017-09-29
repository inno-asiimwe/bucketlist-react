import React, {Component} from 'react';
import axios from 'axios';
import {Route, Switch} from 'react-router-dom';

import AddUser from './components/AddUser';
import NavBar from './components/NavBar';
import About from './components/About';
import LoginUser from './components/LoginUser';

class App extends Component{
    constructor(){
        super();
        this.state = {
            firstname: '',
            lastname: '',
            username: '',
            password: '',
            cpassword: '',
            email: '',
            title: 'Bucketlist App',
            isAuthenticated: false
        }
    }
    addUser(event){
        event.preventDefault();
        const data = {
            firstname: this.state.firstname,
            lastname: this.state.lastname,
            username: this.state.username,
            password: this.state.password,
            email: this.state.email
        }
        axios.post('http://127.0.0.1:5000/auth/register', data)
        .then((res) => {
            this.setState({
                    firstname: '',
                    lastname: '',
                    username: '',
                    password: '',
                    cpassword: '',
                    email: ''
            });
           console.log(res)
        })
        .catch((err) => {console.log(err);})
    }
    
    login(event){
        event.preventDefault();
        const data = {
            username: this.state.username,
            password: this.state.password
        }
        axios.post('http://127.0.0.1:5000/auth/login', data)
        .then((res) => {
            this.setState({
                username: '',
                password: '',
                isAuthenticated: true
            })
            window.localStorage.setItem('authToken', res.data.auth_token);
        })
        .catch((err) => {console.log(err);})
    }
    handleChange(event){
        const obj = {};
        obj[event.target.name] = event.target.value;
        this.setState(obj);
    }
    render(){
        return(
            <div className="container">
                <NavBar title={this.state.title}/>
                <div className="col-sm-4"></div>
                <div className="col-sm-4">
                    <Switch>
                        <Route exact path="/register" render={() => (
                            
                                <AddUser 
                                    addUser={this.addUser.bind(this)}
                                    firstname={this.state.firstname}
                                    lastname={this.state.lastname}
                                    username={this.state.username}
                                    password={this.state.password}
                                    cpassword={this.state.cpassword}
                                    email={this.state.email}
                                    handleChange={this.handleChange.bind(this)}
                                    isAuthenticated={this.state.isAuthenticated}
                                />
                            
                        )}/>
                        <Route exact path='/about' component={About}/>
                        <Route exact path='/login' render={() => (
                            <LoginUser 
                                login={this.login.bind(this)}
                                username={this.state.username}
                                password={this.state.password}
                                handleChange={this.handleChange.bind(this)}
                                isAuthenticated={this.state.isAuthenticated}
                            />
                        )}/>
                        
                    </Switch>
                </div>
                <div className="col-sm-4"></div>
            </div>
        )
    }
}
export default App;