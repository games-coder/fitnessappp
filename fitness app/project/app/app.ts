import { Application } from '@nativescript/core';
import { initializeFirebase } from './services/firebase.service';

// Initialize Firebase
initializeFirebase();

Application.run({ moduleName: 'app-root' });