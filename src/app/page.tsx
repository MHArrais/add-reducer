"use client";

import { listReducer } from "@/reducers/listReducer";
import { useReducer, useState } from "react";


export default function Page() {
  const [list, dispatch] = useReducer(listReducer, []); // Inicializa o reducer criado com uma lista vazia
  const [addField, setAddField] = useState(''); // Estado para o campo de adição de novos itens

  const handleAddButton = () => {
    if (addField.trim() === '') return false; // Verifica se o campo não está vazio antes de adicionar
    dispatch({ // Dispara a ação de adicionar um novo item
      type: 'add', // Ação de adicionar um novo item
      payload: {
        text: addField.trim() // Adiciona o texto do campo ao dispatch
      }
    })
  }
  
  return (
    <div className="container mx-auto">
      <h1 className="text-center text-4xl my-4">Lista de Tarefas</h1>
      <div className="max-w-2xl mx-auto flex border rounded-md border-gray-400 p-4 my-4">   {/*Área para adicionar novos itens*/}
        <input type="text" 
        className="flex-1 rounded-md border border-black p-3 bg-transparent text-black outline-none" 
        placeholder="Digite uma nova tarefa"
        value={addField}
        onChange={e => setAddField(e.target.value)}  // Atualiza o estado do campo de adição
        />
        <button className="p-4"
        onClick={handleAddButton}
        >Adicionar</button>
      </div>
      <ul>
        {list.map(item => (
          <li key={item.id}>{item.text}</li> // Renderiza cada item da lista com seu texto
        ))}
      </ul>
    </div>
  );
}
