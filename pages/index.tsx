import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import prisma from '../prisma/db';
import TodoItem from '../components/TodoItem';

// import styles from '../styles/Home.module.css';

export async function getStaticProps() {
  // const prisma = new PrismaClient();
  const todos = await prisma.todo.findMany();

  // console.log('my todos');
  // console.log('my todos');
  // console.log(todos);

  return {
    props: {
      todos: JSON.parse(JSON.stringify(todos)),
    },
  };
}

async function toggleTodo(id: string, complete: boolean) {
  // await prisma.todo.update({ where: { id }, data: { complete } });

  const url = './api/todo';

  const response = await fetch(url, {
    method: 'PUT', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json',
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: 'follow', // manual, *follow, error
    referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify({ id, complete }), // body data type must match "Content-Type" header
  });
}

const Home: NextPage = ({ todos }) => {
  return (
    <div
      // className={styles.container}
      className="bg-slate-800 text-slate-100 conatiner mx-auto p-4"
    >
      <Head>
        <title>Todo List</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="flex justify-between items-center mb-4">
        <h1 className="text-2xl">Todos</h1>
        <Link className="border border-slate-300 text-slate-300" href="/new">
          New
        </Link>
      </header>
      <main
      // className={styles.main}
      >
        <ul className="pl-4">
          {todos.map((todo) => {
            return <TodoItem key={todo.id} {...todo} toggleTodo={toggleTodo} />;
          })}
        </ul>
      </main>
    </div>
  );
};

export default Home;
