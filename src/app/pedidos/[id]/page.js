//src/app -> pedidos -> [id] -> page.js

import Link from "next/link";
export default async function Pedido({ params }) {
    const { id } = await params;

    const pedidos = [
        { id: 1, cliente: "Ian", plato: "Pizza", estado: "Pendiente", direccion: "San martin 234", pago: "Efectivo", precio: "33,3", hora: "11:11", telefono: "8327498"},
        { id: 2, cliente: "Chena", plato: "Hamburguesa", estado: "En preparacion", direccion: "La rioja 777", pago: "Transferencia", precio: "22,2", hora: "10:10", telefono: "829299292"},
        { id: 3, cliente: "Pomo God", plato: "Empanadas", estado: "Entregado", direccion: "Crack 333", pago: "Efectivo", precio: "11,1", hora: "09:09", telefono: "123144111"}
    ];

    const pedido = pedidos.find(p => p.id === Number(id));

    if (!pedido) {


        return(

            <section className="min-h-screen bg-gray-900 text-white flex flex-col p-6">

                <Link
                    href="/pedidos"
                    className="self-start mb-4 inline-block text-sm bg-orange-500 px-3 py-1 rounded hover:bg-orange-600 text-white"
                >
                    Volver
                </Link>

                <div className="flex flex-1 items-center justify-center">
                    <p>Pedido no encontrado</p>
                </div>

            </section>

        );

    }

    return(

        <section className="min-h-screen bg-gray-900 text-gray-300 flex flex-col p-6">

            
            <Link
                href="/pedidos"
                className="self-start mb-4 inline-block text-sm bg-orange-500 px-3 py-1 rounded hover:bg-orange-600 text-white"
            >
                Volver
            </Link>
            


            <div className="flex flex-1 items-center justify-center">
                <div className="bg-gray-800 p-6 rounded-xl shadow text-center space-y-2">

                    <h1 className="text-2xl font-bold text-orange-400">
                        Pedido {pedido.id}
                    </h1>

                    <p><strong>Cliente:</strong> {pedido.cliente}</p>
                    <p><strong>Plato:</strong> {pedido.plato}</p>
                    <p><strong>Direccion:</strong> {pedido.direccion}</p>
                    <p><strong>Metodo de pago:</strong> {pedido.pago}</p>
                    <p><strong>Precio:</strong> {pedido.precio}</p>
                    <p><strong>Hora del pedido:</strong> {pedido.hora}</p>
                    <p><strong>Telefono:</strong> {pedido.telefono}</p>

                    <p className={
                        pedido.estado === "Pendiente" ? "text-yellow-400" :
                        pedido.estado === "En preparacion" ? "text-orange-400" :
                        "text-green-400"
                    }>
                        Estado: {pedido.estado}
                    </p>

                </div>
            </div>





        </section>

    );
}