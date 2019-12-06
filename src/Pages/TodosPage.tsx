import React, { useState, useEffect } from 'react';
import { TodoList } from '../components/TodoList';
import { TodoForm } from '../components/TodoForm';
import { ITodo } from '../interfaces';

export const TodosPage: React.FC = () => {
    const [ todos, setTodos ] = useState<ITodo[]>([]);
  const addHandler = (title: string) => {
    const newTodo: ITodo = {
      title: title,
      id: Date.now(),
      completed: false
    }
    // setTodos([newTodo, ...todos]) ;
    setTodos(prev => [newTodo, ...prev])
  }

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('todos') || '[]') as ITodo[];

    setTodos(saved)
  }, []);


  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  const toggleHandler = (id: number) => {
    const newTodos = todos.map(todo => {
      if(todo.id == id) {
        todo.completed = !todo.completed
      }
      return todo
    })
    setTodos(newTodos)
  }

  const deleteHandler = (id: number) => {
    const newTodos = todos.filter(todo => todo.id !== id);
    setTodos(newTodos);
  }
    return (
        <>
            <TodoForm onAdd={addHandler} />
            <TodoList todos={todos} toggleHandler={toggleHandler} deleteHandler={deleteHandler} />
        </>
    )
}
