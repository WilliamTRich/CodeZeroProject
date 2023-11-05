//Imports
import ReactDOM from 'react-dom/client';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { registerLicense } from '@syncfusion/ej2-base';

//Components
import App from './App.jsx';
import './index.css';

export * from './schedule';
export * from './recurrence-editor';
export { Inject } from '@syncfusion/ej2-react-base';
export * from '@syncfusion/ej2-schedule';



// Registering Syncfusion license key
registerLicense('ORg4AjUWIQA/Gnt2VlhhQlJCfV5AQmJWfFN0RnNYdV1zflFCcDwsT3RfQF5iSH5Sd0ZnXH9ecnBUTg==');


ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </React.StrictMode>,
);
