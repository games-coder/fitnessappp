import { firebase } from '@nativescript/firebase';

export function initializeFirebase() {
    firebase.init({
        persist: true
    }).then(() => {
        console.log('Firebase initialized');
    }).catch(error => {
        console.error('Firebase init error:', error);
    });
}