import Link from "next/link";

export default function MenuLayout({ children }) {

    return (
        <div>
            <nav className="flex flex-col text-center items-center bg-red-600 p-1">
                <Link className="font-semibold w-auto rounded-3xl text-white bg-red-600 color-transition hover:bg-red-700" href="/promotions">
                    → DESCUBRI PROMOS INCREIBLES APRETANDO AQUI ←
                </Link>
            </nav>
            {children}
        </div>
    )
}