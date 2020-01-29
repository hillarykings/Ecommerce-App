import React from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import './contact.style.scss';

class Contact extends React.Component {
    constructor() {
        super();

        this.state = {
            fullName: '',
            email: '',
            message: ''
        }
    }



    render() {
        return (
                <div className="contact">
                    <h2 className="title">Get Intouch With Us</h2>
                    {/* <span>Sign up with your email and password</span> */}
                    <form className="contact-form" onSubmit={this.handleSubmit}>
                        <FormInput
                            type='text'
                            name='fullName'
                            // defaultValue={displayName}
                            onChange={this.handChange}
                            placeholder='full name'
                            required
                        />
                        <FormInput
                            type='email'
                            name='email'
                            // defaultValue={email}
                            onChange={this.handChange}
                            placeholder='email'
                            required
                        />
                        <FormInput
                            className="message"
                            type='text'
                            name='message'
                            // defaultValue={password}
                            onChange={this.handChange}
                            placeholder='enter message'
                            required
                        />
                        <CustomButton type='submit'>SEND</CustomButton>
                    </form>
                </div>
        )
    }
}

export default Contact;