import CounterApp from '@/app/ui/counter';
import ColorPicker from '@/app/ui/color-picker';
import TodoList from  '@/app/ui/todo-list';
import BookList from '@/app/ui/books';
import AddBooks from '@/app/ui/add-books';
import FilterBooks from '@/app/ui/filter-books';
import SortBooks from '@/app/ui/sort-books';
import Pagination from '@/app/ui/pagination';
import SplitScreen from '@/app/ui/split-screen';
import Modal from '@/app/ui/modal';

const books = [
  {id: 1, title: "Learning React", author: "Daniel", year: 2002},
  {id: 2, title: "Learning Next", author: "Adam", year: 2003},
  {id: 3, title: "Learning Redux", author: "Smith", year: 2004},
]

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <div>
          <h1 className="text-[40px]">Level 1 — React Basics</h1>
			    <h2 className="text-[30px]">Focus: Components, Props, State, Events</h2>
          <CounterApp/>
          <ColorPicker />
          <TodoList />

          <p>Implement a component to display list of books details</p> 
          <div className="flex flex-col gap-2 p-5 bg-sky-100 mt-[20px] mb-[35px]">
            {books.length > 0 && books.map((book) => (
              <BookList
                key={book.id}
                id={book.id}
                title={book.title}
                author={book.author}
                year={book.year}
              />
            ))}
          </div>

          <AddBooks/>
          <FilterBooks/>
          <SortBooks />
          <Pagination />

          <p>Implement a Split Screen component</p>
          <div className="w-full border p-5 bg-sky-100 mt-[20px] mb-[35px]">
            <SplitScreen leftWeight={2} rightWeight={1}>
              <CounterApp />
              <ColorPicker />
            </SplitScreen>
          </div>

          <Modal>
            <SplitScreen leftWeight={1} rightWeight={1}>
              <CounterApp />
              <ColorPicker />
            </SplitScreen>
          </Modal>
        </div>
      </main>
    </div>
  );
}
