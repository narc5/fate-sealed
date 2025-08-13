import { useState, useEffect } from "react";

export default function useClientConnection(): boolean {
    const [ connection, setConnection ] = useState<boolean>(false);

    // re-renders do not call effect again (because of []), as anything outside will be called multiple times on re-render (good)
    // instead, the listener will wait until open/close then update outer comp. state
    useEffect(() => {
        window.clientConnection.onStatus(status => {
            console.log('client status:', status);
            setConnection(status);
        });
    }, []);

    return connection;
}