import React, {useState, useEffect} from 'react';
import './ItemCount.css';

export default function Contador({stock, initial, onAdd}) {
    const [count, setCount] = useState(0);
    
    
    useEffect(() => {
        console.log('Actualice count', count);
        return () => {
            console.log('Clean Up', count)
        }
    }, [count])
    return (
    <div className='itemCount'>
        
        <button className='btnLess' onClick={() => setCount(count -1)}>-</button>
        <p className='counter'>{count}</p>
        <button className='btnMore' onClick={() => setCount(count +1)}>+</button>

        <button className='btnAdd' onClick={() => {
        }}>Agregar al carrito </button>
    </div>
    );
}