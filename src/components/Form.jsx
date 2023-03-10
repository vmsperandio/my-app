import React, { useState } from "react";

export default function Form () {

  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  function handlePost() {
    const newData = {
      id: "",
      username,
      password,
    }
  }

  const inputClass = `shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`

  const [count, setCount] = useState(0);
  return (
    <div className="container mx-auto my-8">
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="username">
            Nome de usuário
          </label>
          <input className={inputClass} id="username" type="text" placeholder="Digite seu nome de usuário" onChange={e => setUserName(e.target.value)}/>
          {username}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="password">
            Senha
            {password}
          </label>
          <input className={inputClass} id="password" type="password" placeholder="Digite sua senha" onChange={e => setPassword(e.target.value)} />
        </div>
        <div className="mb-6">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button" 
          onClick={() => setCount(count + 1)

          }>
            Entrar {count}
          </button>
        </div>
      </form>
    </div>
  );
};

