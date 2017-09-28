import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import AddUser from './components/AddUser';
import registerServiceWorker from './registerServiceWorker';

class App extends Component{
    constructor(){
        super()
    }
    addUser(event){
        event.preventDefault();
        console.log('Sanity check')
    }
    render(){
        return(
            <div className="container">
                <div className="col-sm-4"></div>
                <div className="col-sm-4">
                    <h1>User Registration </h1>
                    <br></br>
                    <AddUser addUser={this.addUser.bind(this)}/>
                </div>
                <div className="col-sm-4"></div>
            </div>
        )
    }
}
ReactDOM.render(<App />, document.getElementById('root'));

