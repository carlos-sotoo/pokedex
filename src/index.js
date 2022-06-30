import React from 'react';
import{ createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import { SWRConfig} from 'swr'

createRoot(document.getElementById('root')).render(
    <SWRConfig 
      value={{
        fetcher: (...args)=>{
          return fetch(...args)
            .then(res=>res.json())
        },
        suspense: true
      }}>
      <App />
    </SWRConfig>
)
