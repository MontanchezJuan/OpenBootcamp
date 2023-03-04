import React, { useState, useEffect } from 'react';

const Oclock = () => {

    const [user, setuser] = useState(
        {
            fecha: new Date(),
            edad: 0,
            nombre: 'Juan',
            apellidos: 'Montanchez'
        });

    useEffect(() => {
        const timer = setInterval(() => {
            (() => {
                setuser(user => ({ ...user, edad: user.edad + 1 })); // spread
                setuser(user => ({ ...user, fecha: new Date() })); // spread
            })()
        }, 1000);
        return () => {
            clearInterval(timer);
        };
    }, [user]);

    return (
        <div>
            <h2>
                Hora Actual: {user.fecha.toLocaleTimeString()}
            </h2>
            <h3>{user.nombre} {user.apellidos}</h3>
            <h1>Edad: {user.edad}</h1>
        </div>
    );
}

export default Oclock;
