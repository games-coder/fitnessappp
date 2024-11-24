import { Observable } from '@nativescript/core';
import { firebase } from '@nativescript/firebase';
import { navigate } from '../../utils/navigation';

export class LoginViewModel extends Observable {
    email: string = '';
    password: string = '';

    constructor() {
        super();
    }

    async onLogin() {
        try {
            const user = await firebase.login({
                type: firebase.LoginType.PASSWORD,
                passwordOptions: {
                    email: this.email,
                    password: this.password
                }
            });
            navigate('home');
        } catch (error) {
            console.error('Login error:', error);
        }
    }

    async onGoogleLogin() {
        try {
            const user = await firebase.login({
                type: firebase.LoginType.GOOGLE
            });
            navigate('home');
        } catch (error) {
            console.error('Google login error:', error);
        }
    }

    onSignUp() {
        navigate('signup');
    }
}