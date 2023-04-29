import { useState, useRef } from "react";
import "./App.css";

function App() {
  const [todo, setTodo] = useState([]);
  const inputRef = useRef();
  // const checbox = useRef();

  function onClickHandler() {
    const newTodo = inputRef.current.value;
    setTodo((prevTodo) => [...prevTodo, { text: newTodo, isComplete: false }]);
    inputRef.current.value = "";
  }

  function handleToggleCompleted(index) {
    setTodo((prevTodo) => {
      const updateTodo = [...prevTodo];
      // console.log("belum di rubah");
      // console.log(updateTodo);
      // console.log(updateTodo[index].isComplete);
      // if (checbox.current.checked) {
      //   updateTodo[index].isComplete = true;
      // } else {
      //   updateTodo[index].isComplete = false;
      // }

      // console.log(checbox.current.length);

      if (updateTodo[index].isComplete === true)
        updateTodo[index].isComplete = false;
      updateTodo[index].isComplete = true;
      // console.log("setelah rubah");
      console.log(updateTodo);
      // console.log(updateTodo[index].isComplete);
      // console.log(updateTodo[index].isComplete);
      return updateTodo;
    });

    console.log(index);
  }

  return (
    <>
      <div className="flex flex-col h-screen justify-center items-center ">
        <h1 className="text-red-400 text-4xl">#todo</h1>
        <div>
          <input type="text" placeholder="add details" ref={inputRef} />
          <button onClick={onClickHandler}>Add</button>
        </div>
        <div>
          <ul>
            {todo.map((data, index) => {
              return (
                <li
                  key={index}
                  className={`${data.isComplete ? "line-through" : ""}`}
                >
                  <input
                    type="checkbox"
                    onChange={() => handleToggleCompleted(index)}
                  />
                  {data.text}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
}

export default App;
