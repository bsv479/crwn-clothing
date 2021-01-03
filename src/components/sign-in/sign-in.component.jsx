import React  from 'react';
import FormInput from "../form-input/form-input.component";
import CustomButton from "../cuatom-button/custom-button.component";
import {auth, signInWithGoogle } from '../../firebase/firebase.util';

import './sign-in.styles.scss';

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    };
  }


  handleSubmit = async event => {
    event.preventDefault();

    const {email, password} = this.state;

    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({email: '', password: ''});
    } catch (error) {
      console.log(error);
    }

    this.setState({ email: '', password: ''});
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };


  render() {
    return(
      <div className='sign-in'>
        <h2 className='title'>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput handleChange={this.handleChange}
                 name='email'
                 type='email'
                 label='email'
                 value={this.state.email}
                 required
          />

          <FormInput handleChange={this.handleChange}
                 name='password'
                 type='password'
                 label='password'
                 value={this.state.password}
                 required
          />

          <div className='buttons'>
            <CustomButton type='submit'>Sign in</CustomButton>
            <CustomButton onClick={signInWithGoogle} isGoogleSignIn>Sign in with Google</CustomButton>
          </div>

        </form>
      </div>
    );
  }
}

export default SignIn;