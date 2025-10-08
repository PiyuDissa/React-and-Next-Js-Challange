import Image from "next/image";
import CounterApp from '@/app/ui/counter';
import ColorPicker from '@/app/ui/color-picker';
import TodoList from  '@/app/ui/todo-list';

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <div>
          <h1 className="text-[40px]">Level 1 — React Basics</h1>
			    <h2 className="text-[30px]">Focus: Components, Props, State, Events</h2>
          <CounterApp/>
          <ColorPicker />
          <TodoList />
        </div>
      </main>
    </div>
  );
}
