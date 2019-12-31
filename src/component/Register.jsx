import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class Register extends Component {

    constructor(props) {
      super(props);
      this.state = {
          namaD: '',
          namaB: '',
          username: '',
          email: '',
          password: '',
          password2: '',
          errors: {
              namaD: '',
              namaB: '',
              username: '',
              email: '',
              password: '',
          }
      };
    }

    handleChange = (event) => {
        event.preventDefault();
        const {name,value} = event.target;
        let errors = this.state.errors;

        const validEmailRegex = 
            RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);

        /*Pengecekan Kevalidan Tiap Form dan Mengisi State*/
        switch (name){
            case 'namaD':
                this.setState({namaD: value})
                errors.namaD =
                    value.length === 0?
                    'Value is empty': '';
                break;
            case 'namaB':
                this.setState.namaB = value;
                errors.namaB =
                    value.length === 0?
                    'Value is empty': '';
                break;
            case 'username':
                this.setState.username = value;
                errors.username =
                    value.length < 5?
                    'Username must be 5 characters long!': '';
                break;
            case 'email':
                this.setState.email = value;
                errors.email =
                    validEmailRegex.test(value)?
                    '': 'Email is not valid!';
                break;
            case 'password':
                this.setState.password = value;
                errors.password =
                    value.length < 8?
                    'Password must be 8 characters long!': '';
                break;
            case 'password2':
                this.setState.password2 = value;
                errors.password2 =
                    value.length < this.setState.password.length?
                    'Password does not match!': '';
                break;
            default:
                break;
        }

        this.setState({errors, [name]: value});
        
    }

    handleSubmit = (event) => {
        event.preventDefault();
        
        /*Pengecekan Username ke Database*/
        const validateForm = (errors) => {
            let valid = true;

            Object.values(this.state).forEach(
                (val) => val.length === 0 && (valid = false)
            );

            Object.values(errors).forEach(
                (val) => val.length > 0 && (valid = false)
            );
            return valid;
        }

        if(validateForm(this.state.errors)) {
            console.log('Valid Form');
            this.props.history.push('/');
        }else{
            if(!this.state.password.match(this.state.password2)){
                console.log('Password does not match!');
                console.log('Invalid Form')
            }else{
            console.log('Invalid Form')}
        }
        
        
    }

    submitRegister(e){}
  
    render() {
        const {errors} = this.state;
      return (
        <div className="container">

            <div className="inner-container">
                <form onSubmit={this.handleSubmit}>
                    <div className="header">
                        Register
                        <div className="bawah"></div>
                    </div>
                    <div className="box">
                        <div className="form-group">
                        <label htmlFor="nama">Full Name</label>
                        <div className="nm">
                        <input
                            type="text"
                            name="namaD"
                            id="nmd"
                            className="login-input"
                            noValidate
                            onChange={this.handleChange}
                            placeholder="First Name"/>
                        <input
                            type="text"
                            name="namaB"
                            className="login-input"
                            onChange={this.handleChange}
                            noValidate
                            placeholder="Last Name"/>
                        </div>
                        </div>
                        <div className="form-group">
                        <label htmlFor="username">Username</label>
                        <input
                            type="text"
                            name="username"
                            className="login-input"
                            onChange={this.handleChange}
                            noValidate
                            placeholder="Username"/>
                            {errors.username.length > 0 && 
                                <span className='error'>{errors.username}</span>}
                        </div>
            
                        <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" 
                            name="email" 
                            className="login-input" 
                            onChange={this.handleChange}
                            noValidate
                            placeholder="Email"/>
                        {errors.email.length > 0 && 
                            <span className='error'>{errors.email}</span>}
                        </div>
            
                        <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            name="password"
                            className="login-input"
                            onChange={this.handleChange}
                            placeholder="Password"
                            noValidate/>
                        {errors.password.length > 0 && 
                            <span className='error'>{errors.password}</span>}
                        </div>

                        <div className="info">
                            <small>Password must be 8 characters in length!</small>
                        </div>
                        <div className="form-group">
                        <label htmlFor="password">Re-Enter Password</label>
                        <input
                            type="password"
                            name="password2"
                            className="login-input"
                            onChange={this.handleChange}
                            placeholder="Re-Enter Password"
                            noValidate/>
                        </div>
                        
                    </div>
                    <button
                        type="submit"
                        className="btn btn-primary reg"
                        >Register</button>
                </form>
            </div>
        </div>
        
      );
    }
  }

  export default withRouter(Register);