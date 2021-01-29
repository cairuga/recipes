import { useState } from 'react';

function Home() {
   return <div>
      <h1>My Recipes</h1>
      <p>Estou aprendendo next.js para desenvolver um livro de receitas</p>
      <Contador />
   </div>
}

function Contador() {
   const [contador, setContador] = useState(1);

   function adicionarContador() {
      setContador(contador+1);
   }

   return (
      <div>
         <div>{contador}</div>
         <button onClick={adicionarContador}>Adicionar</button>
      </div>
   )
}

export default Home