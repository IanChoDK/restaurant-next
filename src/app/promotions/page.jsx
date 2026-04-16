import Link from "next/link";
import React from "react";

export default function page() {

    return (
        <div className="flex flex-1 flex-col items-center justify-center bg-zinc-900">
            <main className="flex w-full flex-col items-center py-16 px-16 bg-zinc-900">
                <div className="flex flex-col items-center gap-6 text-white">
                    <h1 className="text-4xl font-bold mb-4">
                        Promociones
                    </h1>
                    <p>Ingresa los siguientes codigos al momento de tu compra y llevate un descuento especial!</p>
                </div>

                <div className="flex flex-rowflex-wrap gap-4 justify-center mt-4">
                    <section className='w-75 text-center items-center gap-4 my-8 p-6 rounded-3xl flex flex-col bg-red-600'>
                        <div>
                            <h1 className='text-lg'>Descuento Pizzas 20%</h1>
                            <p className="py-1 text-4xl font-extrabold">20PZ26</p>
                        </div>
                        <Link href={"/menu"} className='p-2 text-center rounded-md text-black bg-white transition-colors hover:bg-gray-500'> Ir al menu</Link>
                    </section>

                    <section className='w-75 text-center items-center gap-4 my-8 p-6 rounded-3xl flex flex-col bg-red-600'>
                        <div>
                            <h1 className='text-lg'>Descuento Hamburgesas 2x1</h1>
                            <p className="py-1 text-4xl font-extrabold">2X1H26</p>
                        </div>
                        <Link href={"/menu"} className='p-2 text-center rounded-md text-black bg-white transition-colors hover:bg-gray-500'> Ir al menu</Link>
                    </section>

                    <section className='w-75 text-center items-center gap-4 my-8 p-6 rounded-3xl flex flex-col bg-red-600'>
                        <div>
                            <h1 className='text-lg'>Descuento Empanadas 15%</h1>
                            <p className="py-1 text-4xl font-extrabold">05EM26</p>
                        </div>
                        <Link href={"/menu"} className='p-2 text-center rounded-md text-black bg-white transition-colors hover:bg-gray-500'> Ir al menu</Link>
                    </section>
                </div>

            </main>
        </div>
    );
}