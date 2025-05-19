import Link from "next/link";

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#e33434] to-[#e01010] text-white">
      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16">
        <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
          Banco <span className="text-[hsl(0, 72.20%, 52.00%)]">Cin</span> 
        </h1>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-8">
          <Link
            className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20"
            href=""
            target="_blank"
          >
            <h3 className="text-2xl font-bold">Testar como Cliente →</h3>
            <div className="text-lg">
              Teste as funcionalidades do sistema como um cliente.
            </div>
          </Link>
          <Link
            className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20"
            href=""
            target="_blank"
          >
            <h3 className="text-2xl font-bold">Testar como ADM →</h3>
            <div className="text-lg">
              Teste as funcionalidades do sistema como um administrador.
            </div>
          </Link>
        </div>
      </div>
    </main>
  );
}
