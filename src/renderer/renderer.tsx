import ReactDOM from 'react-dom/client';
import './index.css';
import ConnectedToClient from '../components/ConnectedToClient';
import ClientIsOffline from '../components/ClientIsOffline';
import React from 'react';
import useClientConnection from '../hooks/useClientConnection';

export default function App () {
    const connection = useClientConnection();
    console.log(connection)
    
    return (
        <>
            <div>
                {connection ? <ConnectedToClient /> : <ClientIsOffline />}
            </div>
        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);