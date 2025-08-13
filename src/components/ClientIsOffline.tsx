import { useState } from "react";

export default function clientIsOffline() {
    const [ count, setCount ] = useState(0);
    
    return (
        <div> 
            <h3>Locating League Client...</h3>
                <button onClick={() => setCount(count => count + 1)}>test {count}</button>
                <p className='bg-red-600'>offline</p>
        </div>
    )
}