import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
     <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <h1>Dashboard de Productos</h1>

        <section>
          <Link href="/valor-total" className="block">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg cursor-pointer hover:bg-blue-700">
              Valor total por tipo de producto
            </button>
          </Link>
        </section>

        <section>
          <Link href="/por-estado" className="block">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg cursor-pointer hover:bg-blue-700">
              Cantidad de productos por estado
            </button>
          </Link>
        </section>

        <section>
          <Link href="/promedio-categoria" className="block">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg cursor-pointer hover:bg-blue-700">
              Promedio por categoría
            </button>
          </Link>
        </section>
      </main>

    </div>
  );
}
