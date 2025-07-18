import React from 'react'

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
                            <a href='#'>Inicio</a>
                        </li>
                         <li>
                            <a href='#'>Peleadores</a>
                        </li>
                         <li>
                            <a href='#'>Eventos</a>
                        </li>
                         <li>
                            <a href='#'>Contacto</a>
                        </li>
                    </nav>

                </div>
            </header>

            


        </div>
    )
}
