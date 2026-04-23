import Link from "next/link";

const categorias = [
  { slug: "pizzas", label: "Pizzas", emoji: "🍕" },
  { slug: "hamburguesas", label: "Hamburguesas", emoji: "🍔" },
  { slug: "empanadas", label: "Empanadas", emoji: "🥟" },
];

export default function MenuPage() {
  return (
      <main className="flex w-full h-120 flex-col items-center py-10 bg-zinc-900">
        <div className="flex flex-col items-center gap-6 text-white">
          <h1 className="font-bold text-4xl">Nuestro Menú</h1>
          <nav className="flex flex-col items-center gap-6 text-xl">
            {categorias.map((cat) => (
              <Link className="bg-zinc-700 hover:bg-orange-600 rounded-4xl p-2" key={cat.slug} href={`/menu/${cat.slug}`}>
                {cat.emoji} {cat.label}
              </Link>
            ))}
          </nav>
        </div>
      </main>
  );
}