import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import axios from 'axios'

axios.interceptors.request.use(
    (request) => {
        request.headers.Authorization ="token";
        console.log(`${request.method} requst sent to ${request.url}`);
        return request;
    }
    ,(error) => {
        console.log(error);
        return Promise.reject(error);
    }
)



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
