import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import AddUser from './components/AddUser';
import axios from 'axios'
import registerServiceWorker from './registerServiceWorker';

class App extends Component{
    constructor(){
        super();
        this.state = {
            firstname: '',
            lastname: '',
            username: '',
            password: '',
            cpassword: '',
            email: ''
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
    render(){
        return(
            <div className="container">
                <div className="col-sm-4"></div>
                <div className="col-sm-4">
                    <h1>User Registration </h1>
                    <br></br>
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
                </div>
                <div className="col-sm-4"></div>
            </div>
        )
    }
}
ReactDOM.render(<App />, document.getElementById('root'));

