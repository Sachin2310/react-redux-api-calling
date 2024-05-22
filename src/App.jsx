import './App.css'
import { useDispatch, useSelector } from 'react-redux';
import { getTodoTasks, todoSelector } from './redux/slices/todoSlice';

function App() {
  const dispatch = useDispatch();
  const todos = useSelector(todoSelector)
  console.log("todos: ",todos);

  return (
    <>
      <button onClick={() => dispatch(getTodoTasks())}>Todo List</button>
      {todos.todoList && todos.todoList.map((task) =>
        <li key={task.id}>{task.title}</li>
      )}
    </>
  )
}

export default App
