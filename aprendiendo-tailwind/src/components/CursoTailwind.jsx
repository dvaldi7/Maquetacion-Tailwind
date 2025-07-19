import React from 'react';
import { Link } from 'react-router-dom';

export const CursoTailwind = () => {
    return (
        <div className='bg-body-pattern bg-scroll'>

            {/* HEADER */}
            <header id='header' className='bg-red-600 text-white h-20'>
                <div className='container mx-auto flex flex-row'>

                    <div id='logo' className='flex-1'>
                        <h3>Diario UFC</h3>
                    </div>

                    <nav className='flex-1'>
                        <li>
                            <Link to='#'>Inicio</Link>
                        </li>
                        <li>
                            <Link to='#'>Peleadores</Link>
                        </li>
                        <li>
                            <Link to='#'>Eventos</Link>
                        </li>
                        <li>
                            <Link to='#'>Contacto</Link>
                        </li>
                    </nav>

                </div>
            </header>




        </div>
    )
}
