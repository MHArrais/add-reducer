"use client";

import { listReducer } from "@/reducers/listReducer";
import { useReducer } from "react";


export default function Page() {
  const [list, dispatch] = useReducer(listReducer, []); // Inicializa o reducer criado com uma lista vazia

  const handleAddClick = () => {
    dispatch({ type: 'add', payload: { text: 'Novo item' } });  // Exemplo de dispatch para adicionar um item
  }
  return (
    <div className="">
      <button onClick={handleAddClick}>Adicionar</button>
    </div>
  );
}
