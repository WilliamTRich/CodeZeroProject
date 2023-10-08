import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App.jsx';
import './index.css';

import { sequelize } from "./../../server/config/demo_db_connection.js"
// import { User, Trainer } from './../../server/models/associations.js';



sequelize.sync()
    .then(() => {
        console.log('Database & tables synched!');
        ReactDOM.createRoot(document.getElementById('root')).render(
            <React.StrictMode>
                <App />
            </React.StrictMode>,
        );  })
    .catch(err => {
        console.error('Error synchronizing database and tables:', err);
    });

