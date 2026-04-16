import Link from "next/link";

const categorias = [
  { slug: "pizzas", label: "Pizzas", emoji: "🍕" },
  { slug: "hamburguesas", label: "Hamburguesas", emoji: "🍔" },
  { slug: "empanadas", label: "Empanadas", emoji: "🥟" },
];

export default function MenuPage() {
  return (
    <div>
      <h1>Nuestro Menú</h1>
      <nav>
        {categorias.map((cat) => (
          <Link key={cat.slug} href={`/menu/${cat.slug}`}>
            {cat.emoji} {cat.label}
          </Link>
        ))}
      </nav>
    </div>
  );
}