import React, { useState } from 'react';
import Link from 'next/link';
// import Router from 'next/router'
import { useRouter } from 'next/router';

export default function New() {
  const router = useRouter();
  const [task, setTask] = useState();

  const handleInputChange = (e) => {
    setTask(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = '../api/form';
    const response = await fetch(url, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json',
      },
      redirect: 'follow', // manual, *follow, error
      referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify({ title: task }), // body data type must match "Content-Type" header
    });
    router.push('/');
  };

  return (
    <>
      <header className="flex justify-between items-center mb-4">
        <h1 className="text-2xl">New</h1>
      </header>
      <form onSubmit={handleSubmit} className="flex gap-2 flex-col">
        <input
          type="text"
          name="title"
          className="bg-transparent border rounded"
          value={task}
          onChange={handleInputChange}
        ></input>
        <div className="flex gap-1 justify-end my-3">
          <Link
            className="border rounded bg-transparent mx-1 px-2 py-1"
            href=".."
          >
            Cancel
          </Link>
          <button
            className="border rounded bg-transparent px-2 py-1"
            type="submit"
          >
            Create
          </button>
        </div>
      </form>
    </>
  );
}
