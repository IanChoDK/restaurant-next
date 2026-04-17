import Link from 'next/link'
import React from 'react'

export default function page(){

    return (
        <div className="flex flex-1 flex-col items-center justify-center bg-zinc-900">
            <main className="flex w-full flex-col items-center py-16 px-16 bg-zinc-900">
                <div className="flex flex-col items-center gap-6 text-white">
                    <h1 className="text-4xl font-bold mb-4">
                        Contactos
                    </h1>
                    <p>Ante cualquier duda o consulta, comunicate con nosotros</p>
                </div>

                <div className="flex flex-col gap-4 justify-center mt-4">
                    <section className='w-75 text-center items-center gap-4 my-8 p-6 rounded-3xl flex flex-col bg-red-600'>
                        <ul>
                            <li>Telefono: 3584643036</li>
                            <li>Mail: restaurante@gmail.com</li>
                            <li>Local: Wenceslao Tejerina Norte </li>
                        </ul>
                    </section>
                    <section>
                        <p>Tambien podes dejarnos tu sugerencia</p>
                        <input type="text" className='w-75 h-15 border border-white rounded-2xl bg-zinc-900'/>
                    </section>
                </div>
            </main>
        </div>
    )
}