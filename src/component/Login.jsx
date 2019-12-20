import React, { Component } from "react";
import "./Login.css";
import 'bootstrap/dist/css/bootstrap.min.css';

class Login extends Component {

    constructor(props) {
      super(props);
      this.state = {
          username: '',
          password: ''
      };
    }

    handleChange = (event) => {
        event.preventDefault();
        const {name,value} = event.target;

        switch(name){
            case 'username':
                this.setState({username : value});
                break;
            case 'password':
                this.setState({password : value});
                break;
        }
    }
    
    /*PENGECEKAN USERNAME & PASSWORD KE DATABASE*/
    submitLogin(event) {
        event.preventDefault();
        if((this.state.username == 'daffamaulana') && (this.state.password == 'tigaoktober')){
            alert('LOGIN BERHASIL')
        }else{
            alert('LOGIN GAGAL')
        }
    }
  
    render() {
      return (
        <div className="inner-container">
            <form>
                <div className="header">
                    Login
                </div>
                <div className="box">
        
                    <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input
                        type="text"
                        name="username"
                        className="login-input"
                        placeholder="Username"
                        onChange={this.handleChange}
                        required/>
                    </div>
        
                    <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        name="password"
                        className="login-input"
                        placeholder="Password"
                        onChange={this.handleChange}
                        required/>
                    </div>
        
                    
                </div>
                
                <div className="custom-control custom-switch form-group">
                    <input type="checkbox" className="custom-control-input" id="switch1" name="example"/>
                    <label className="custom-control-label" htmlFor="switch1">Remember Me</label>
                </div>
                <div className="teks form-group">
                    <a href="">Forgot Password?</a> 
                </div>
                <button
                    type="submit"
                    className="btn-primary form-group"
                    onClick={this.submitLogin.bind(this)}>Login</button>
                
            </form>
            
        </div>
          
      );
    }
  
  }export default Login;



