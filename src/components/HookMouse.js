import React, { useEffect, useState } from 'react';
import { Children } from 'react/cjs/react.production.min';

const HookMouse = () => {
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);

    const handleMouseMove = e => {
        console.log('Mouse event');
        setX(e.clientX);
        setY(e.clientY);
    }

    useEffect(() => {
        console.log('Hook useEffect called');
        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            console.log('Component unmounting code');
            window.removeEventListener('mousemove', handleMouseMove);
        }
    },[])

    return <h1>Hook X-{x}, Y-{y}</h1>;
};

export default HookMouse;
