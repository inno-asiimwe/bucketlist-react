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
            title: 'Bucketlist App'
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
           
        })
        .catch((err) => {console.log(err);})
    }
    handleChange(event){
        const obj = {};
        obj[event.target.name] = event.target.value;
        this.setState(obj);
    }
    login(event){
        event.preventDefault();
        const data = {
            username: this.state.username,
            password: this.state.password
        }
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
                                />
                            
                        )}/>
                        <Route exact path='/about' component={About}/>
                        <Route exact path='/login' render={() => (
                            <LoginUser 
                                login={this.login.bind(this)}
                                username={this.state.username}
                                password={this.state.password}
                            />
                        )}/>
                        
                    </Switch>
                </div>
                <div className="col-sm-4"></div>
            </div>
        )
    }
}
export default App