import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { initializeApp } from 'firebase/app';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import reportWebVitals from './reportWebVitals';

initializeApp({
	apiKey: 'AIzaSyCALeLhd4XGPG-_O1qicYk-ILPV8Nb1bPU',
	authDomain: 'ecommerce-telecom-coderhouse.firebaseapp.com',
	projectId: 'ecommerce-telecom-coderhouse',
	storageBucket: 'ecommerce-telecom-coderhouse.appspot.com',
	messagingSenderId: '763589335307',
	appId: '1:763589335307:web:9f5554c73e803c5125aa0e',
	measurementId: 'G-CXPW3NRK7J',
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
