import { useState, useRef } from "react";
import "./App.css";

function App() {
  const [todo, setTodo] = useState([]);
  const inputRef = useRef();

  function onClickHandler() {
    const newTodo = inputRef.current.value;
    setTodo((prevTodo) => [...prevTodo, { text: newTodo, isComplete: false }]);
    inputRef.current.value = "";
  }

  function handleToggleCompleted(index) {
    setTodo((prevTodo) => {
      const updateTodo = [...prevTodo];
      updateTodo[index] = {
        ...updateTodo[index],
        isComplete: !updateTodo[index].isComplete,
      };
      return updateTodo;
    });
  }

  return (
    <>
      <div className="flex flex-col h-screen justify-center items-center ">
        <h1 className="text-slate-800 text-4xl font-bold">#todo</h1>
        <div className="mt-6">
          <input
            type="text"
            placeholder="add details"
            ref={inputRef}
            className="w-96 border border-gray-400 py-3 pl-2 rounded-xl"
          />
          <button
            className="bg-blue-500 text-white py-3 w-28 rounded-xl ml-5"
            onClick={onClickHandler}
          >
            Add
          </button>
          <div className="mt-6">
            <ul>
              {todo.map((data, index) => {
                return (
                  <li
                    key={index}
                    className={`${
                      data.isComplete ? "line-through" : ""
                    } font-semibold mt-2 flex items-center`}
                  >
                    <input
                      type="checkbox"
                      checked={data.isComplete}
                      onChange={() => handleToggleCompleted(index)}
                      className="mr-2 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded cursor-pointer"
                    />
                    {data.text}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
