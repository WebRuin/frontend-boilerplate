import React, { Component, PropTypes } from 'react';

//Styles
import style from './style.css';

class Nav extends Component {
    static propTypes = {
        className: PropTypes.string,
    };

    constructor(props) {
      super(props);
      this.state = {
      	currentUser          : 'Tim Smith',
      	userLoggedIn         : false,
        loginDropdownOpen    : false,
        signupDropdownOpen   : false,
        users                : []
      };
      this.handleLoginClick = this.handleLoginClick.bind(this);
      this.handleSignupClick = this.handleSignupClick.bind(this);
      this.handleLogoutClick = this.handleLoginClick.bind(this);
      this.handleUserClick = this.handleUserClick.bind(this);
      this.handleSignup = this.handleSignup.bind(this);
    }

    handleLoginClick() {
      this.setState({
        userLoggedIn: !this.state.userLoggedIn
      });
      console.log(this.state.userLoggedIn);
    }

    handleLogoutClick() {
      this.state.userLoggedIn = !this.state.userLoggedIn;
      console.log(this.state.userLoggedIn);
    }

    handleSignupClick() {
      this.setState({
        signupDropdownOpen: !this.state.signupDropdownOpen
      });
      console.log('Signup clicked! :)');
    }

    handleSignup() {
      this.state.users.push({
        name: this.refs.name.value,
        email: this.refs.email.value,
        user_name: this.refs.user_name.value,
        password: this.refs.password.value
      });
      this.handleSignupClick();
    }

    handleUserClick() {
      console.log('User clicked! :)');
    }

    render() {
        // Constants
        const login = this.state.userLoggedIn ? '' : <button className={ style.button__login_button } onClick={ this.handleLoginClick }>Login</button>;
        const signup = this.state.userLoggedIn ? '' : <button className={ style.button__signup_button } onClick={ this.handleSignupClick }>Signup</button>;
        const logout = this.state.userLoggedIn ? <button className={ style.button__signout_button } onClick={ this.handleLogoutClick }>Logout</button> : '';
        const signupDropdown = this.state.signupDropdownOpen ? <div className={ style.signupDropdown}><div><lable htmlFor='name'>Name</lable><input ref='name' placeholder='Joe Shmoe' /></div><div><lable htmlFor='email'>Email</lable><input ref='email' placeholder='Joe_Shmoe@email.com' /></div><div><lable htmlFor='user_name'>User Name</lable><input ref='user_name' placeholder='jshmoe' /></div><div><lable htmlFor='password'>Password</lable><input ref='password' placeholder='12345@$%AS' /></div><div><button className={ style.cancel_button } onClick={ this.handleSignup }>Submit</button><button className={ style.signup_button } onClick={ this.handleSignupClick }>Cancel</button></div></div> : '';
        return (
          <nav className={ style.nav }>
           	<div className={ style.logo }>
           		<h2>logo</h2>
           	</div>
           	<section className={ style.user_account_buttons }>
           		<button className={ style.button__user_button } onClick={ this.handleUserClick.bind(this) }>
           			{ this.state.currentUser }
           		</button>
           		{ login }
           		{ signup }
           		{ logout }
              { signupDropdown }
            </section>
          </nav>
        );
    }
}

export default Nav;
