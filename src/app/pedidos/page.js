//src/app -> pedidos -> page.js

import Link from "next/link";

export default function Pedidos(){
    
    const pedidos = [

        { id: 1, cliente: "Ian", plato: "Pizza", estado: "Pendiente"},
        { id: 2, cliente: "Chena", plato: "Hamburguesa", estado: "En preparacion"},
        { id: 3, cliente: "Pomo God", plato: "Empanadas", estado: "Entregado"}

    ];


    return(
        
        <section className="min-h-screen bg-zinc-900 text-gray-300 flex flex-col items-center justify-center gap-4">
            <h1 className="text-3xl font-bold text-orange-600">
                Pedidos del Restaurante
            </h1>

            <p>Seleccione su pedido:</p>

            <div className="grid gap-4 mt-6 sm:grid-cols-2 lg:grid-cols-3"> 

                {pedidos.map(pedido => (
                    <Link
                        key={pedido.id}
                        href={`/pedidos/${pedido.id}`}
                        className="bg-gray-800 p-4 rounded-xl shadow border border-gray-700 hover:border-orange-600 hover:scale-105 transition"
                    >
                        <h2 className="text-xl font-bold">Pedido {pedido.id}</h2>
                        <p>Cliente: {pedido.cliente}</p>
                        <p>Plato: {pedido.plato}</p>
                        <p>Estado: {pedido.estado}</p>

                    </Link>
                
                ))}

            </div>


        </section>
        
    );

}