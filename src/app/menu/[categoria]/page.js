import Link from 'next/link'
import React from 'react'

const menuData = {
  pizzas: {
    label: "Pizzas",
    emoji: "🍕",
    items: [
      { name: "Muzzarella", price: 1800, description: "Salsa, muzzarella y orégano" },
      { name: "Napolitana", price: 2100, description: "Salsa, muzzarella y tomate" },
    ],
  },
  hamburguesas: {
    label: "Hamburguesas",
    emoji: "🍔",
    items: [
      { name: "Clásica", price: 2500, description: "Pan, carne, lechuga y tomate" },
      { name: "Doble", price: 3200, description: "Doble carne y cheddar" },
    ],
  },
  empanadas: {
    label: "Empanadas",
    emoji: "🥟",
    items: [
      { name: "Carne suave", price: 600, description: "Relleno de carne con verduras" },
      { name: "Humita", price: 550, description: "Choclo cremoso con queso" },
    ],
  },
};

export default async function CategoriaPage({ params }) {
  const { categoria } = await params;  // 👈 await aquí
  
  const categoriaData = menuData[categoria];

  if (!categoriaData) return <p>Categoría no encontrada</p>;

  return (
    <div className='flex flex-1 flex-col h-120 items-center text-center justify-start gap-10 bg-zinc-900 text-white py-5'>
      <h1 className='font-bold text-4xl'>{categoriaData.emoji} {categoriaData.label}</h1>
      <ul className='flex flex-col gap-4 items-center'>
        {categoriaData.items.map((item) => (
          <li key={item.name}>
            <strong>{item.name}</strong> — ${item.price}
            <p>{item.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function generateStaticParams() {
  return Object.keys(menuData).map((slug) => ({ categoria: slug }));
}