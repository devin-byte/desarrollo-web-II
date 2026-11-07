
import Pregunta from "./components/Pregunta";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans ">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-center py-16 px-6">
        <Pregunta />
      </main>
    </div>
  );
}
