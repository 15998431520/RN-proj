import React, { createContext, useReducer, useContext, useState } from "react";

const ToDoContext = createContext<TodoList | null>(null);
const ToDoStatusContext = createContext<Status>({ status: '0', setStatus: () => {}});
const ToDdDispatchContext = createContext<Function>(() => { });

export type statusNumber = '0' | '1' | '-1'

interface Status {
  status: statusNumber;
  setStatus: (newStatus: statusNumber) => void;
}

export interface Todo {
  done: boolean
  text: string
  id: string
  status?: statusNumber
}

type TodoList = Array<Todo>

export interface Action {
  type: 'add' | 'delete' | 'change';
  id?: string;
  text?: string;
  task?: Todo;
  status?: statusNumber
}

const initialState: TodoList = [
  {
    text: '一条示例数据',
    id: 'ABCD2',
    done: false,
    status: '0',
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
  const [status, setStatus] = useState<statusNumber>('0')
  return <ToDoContext.Provider value={list}>
    <ToDoStatusContext.Provider value={{ status, setStatus }}>
      <ToDdDispatchContext.Provider value={dispatch}>
        {children}
      </ToDdDispatchContext.Provider>
    </ToDoStatusContext.Provider>
  </ToDoContext.Provider>
}

function reduce(state: TodoList, action: Action) {
  const { type, text, id, task } = action
  switch (type) {
    case 'add':
      return [
        ...state,
        {
          text,
          done: false,
          id: generateRandomID(),
          status: '0',
        }
      ];
    case 'delete':
      return state.map(item => item.id === id ? { ...item, status: '-1' } : item);
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

export const useStatus = () => {
  return useContext(ToDoStatusContext)
}