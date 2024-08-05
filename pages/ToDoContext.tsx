import React, { createContext, useReducer, useContext } from "react";

const ToDoContext = createContext<TodoList | null>(null);
const ToDdDispatchContext = createContext<Function>(() => { });

export interface Todo {
  done: boolean,
  text?: string,
  id: string
}

type TodoList = Array<Todo>

export interface Action {
  type: 'add' | 'delete' | 'change';
  id?: string;
  text?: string;
  task?: Todo;
}

const initialState: TodoList = [
  {
    text: '一条示例数据',
    id: 1,
    done: false
  }
]

function generateRandomID() {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let id = '';
  for (let i = 0; i < 5; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    id += characters.charAt(randomIndex);
  }
  return id;
}

export default function ToDoProvider({ children }: { children: React.ReactNode }) {
  const [list, dispatch] = useReducer(reduce, initialState);
  return <ToDoContext.Provider value={list}>
    <ToDdDispatchContext.Provider value={dispatch}>
      {children}
    </ToDdDispatchContext.Provider>
  </ToDoContext.Provider>
}

function reduce(state: TodoList, action: Action) {
  const { type, text, id, task } = action
  switch (type) {
    case 'add':
      return [...state, { text, done: false, id: generateRandomID()}];
    case 'delete':
      return state.filter(item => item.id !== id);
    case 'change':
      return state.map(item => item.id === id ? { ...item, ...task } : item);
    default:
      return state;
  }
}

export const useList = () => {
  return useContext(ToDoContext)
}

export const useListDispatch = () => {
  return useContext(ToDdDispatchContext)
}