import { Item } from "@/app/types/Item";

type AddAction = {  // Type da ação de adicionar
    type: 'add';
    payload: {
        text: string
    };
}

type EditTextAction = { // Type da ação de editar o texto
    type: 'editText';
    payload: {
        id: number;
        newText: string
    }
}

type ToggleDoneAction = { // Type da ação de alterar o status
    type: 'toggleDone';
    payload: { id: number };
}

type RemoveAction = { // Type da ação de remover
    type: 'remove';
    payload: { id: number ;
    }
}

type ListActions = AddAction | EditTextAction | ToggleDoneAction | RemoveAction;  // União dos types de ação

export const listReducer = (list: Item[], action: ListActions) => {  // Função do reducer que recebe a lista e a ação
    // Criação da estrutura de switch para cada ação
    switch(action.type) {
        case 'add':    // Adicionar um novo item
            return [
              ...list,
              {
                id: list.length,
                text: action.payload.text,
                done: false,
              },
            ];
        case 'editText':   // Editar o texto do item
            return list.map((t) => {
              if (t.id === action.payload.id) {
                t.text = action.payload.newText
            }
              
              return t;
            });
        case 'toggleDone':  // Alterar o status do item
            return list.map((t) => {
        if(t.id === action.payload.id) {
          t.done = !t.done;
        }
        return t;
      })
        case 'remove':  // Remover o item
            return list.filter((t) => t.id !== action.payload.id)
        default:
            return list // Retornar o resultado da ação lista atualizada
    }
}

