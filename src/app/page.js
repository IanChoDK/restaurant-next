import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      
      <section className="flex flex-col items-center justify-center py-20 px-4 text-center bg-zinc-800 text-white rounded-b-3xl shadow-md">
        <h1 className="text-5xl md:text-7xl font-black text-orange-600 mb-6 tracking-tight">
          Sabores que Inspiran
        </h1>
        <p className="text-lg md:text-xl text-zinc-300 max-w-2xl mb-10">
          Descubrí la mejor experiencia gastronómica. Ingredientes frescos, recetas tradicionales y un toque moderno en cada bocado.
        </p>
      </section>

      <section className="py-20 px-4 max-w-6xl mx-auto w-full">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-orange-600">
            Nuestras Especialidades
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-zinc-100 transition-transform hover:-translate-y-1 flex flex-col">
            
            <div className="h-60 relative overflow-hidden">
              <Image 
                src="/pizza.jpg" 
                alt="Pizza"
                fill 
                sizes="(max-width: 768px) 100vw, 33vw" 
                className="object-cover group-hover:scale-105 transition-transform duration-300" 
              />
            </div>

            <div className="p-6 flex flex-col grow">
              <h3 className="text-2xl font-bold text-zinc-900 mb-3">Pizzas</h3>
              <p className="text-zinc-600 grow mb-6">
                Masa de fermentación lenta, salsa de tomates peritas y los ingredientes más frescos. Desde las clásicas hasta nuestras creaciones de autor.
              </p>
              <Link href="/menu/pizzas" className="text-orange-600 font-bold hover:text-orange-700 inline-flex items-center group">
                Ver opciones 
                <span className="ml-2 transition-transform group-hover:translate-x-1">&rarr;</span>
              </Link>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-zinc-100 transition-transform hover:-translate-y-1 flex flex-col">
            
            <div className="h-60 relative overflow-hidden">
              <Image 
                src="/hamburguesa.jpg"
                alt="Hamburguesa con papas"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            <div className="p-6 flex flex-col grow">
              <h3 className="text-2xl font-bold text-zinc-900 mb-3">Hamburguesas</h3>
              <p className="text-zinc-600 grow mb-6">
                Medallon de carne premium, pan artesanal tostado con manteca y acompañadas siempre de nuestras papas rústicas crujientes.
              </p>
              <Link href="/menu/hamburguesas" className="text-orange-600 font-bold hover:text-orange-700 inline-flex items-center group">
                Ver opciones 
                <span className="ml-2 transition-transform group-hover:translate-x-1">&rarr;</span>
              </Link>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-zinc-100 transition-transform hover:-translate-y-1 flex flex-col">
            
            <div className="h-60 relative overflow-hidden">
              <Image 
                src="/empanadas.jpg"
                alt="Empanadas"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            <div className="p-6 flex flex-col grow">
              <h3 className="text-2xl font-bold text-zinc-900 mb-3">Empanadas</h3>
              <p className="text-zinc-600 grow mb-6">
                Fritas o al horno. Sabores tradicionales argentinos y opciones gourmet con rellenos abundantes y masa casera.
              </p>
              <Link href="/menu/empanadas" className="text-orange-600 font-bold hover:text-orange-700 inline-flex items-center group">
                Ver opciones 
                <span className="ml-2 transition-transform group-hover:translate-x-1">&rarr;</span>
              </Link>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}