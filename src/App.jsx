import { useState } from "react";

import "./App.css";
import React from "react";
import Input from "./componet/input";
import { useRef } from "react";
import { Tododoprovider } from "./context"; //cotex.provider
import { useEffect } from "react";


function App() {
  const hidden = useRef([]);
  const [todos, setSettos] = useState([]);
  const addtod = (todo) => {
    setSettos((prev) => {
      return [{ to: Date.now(), ...todo }, ...prev];
    });
    console.log("dataadd");
  };
  const update = (id, todo) => {
    setSettos((prev) =>
      prev.map((obj) => {
        if (obj.id !== id) {
          return obj;
        } else {
          obj.todo = todo;
          return obj;
        }
      })
    );
  };

  const removetodo = (id) => {
    setSettos((prev) =>
      prev.filter((prevobj) => {
        return prevobj.id !== id;
      })
    );
  };

  const togelComplete = (id) => {
    setSettos((prev) => {
      prev.map((prevelemet) => {
        return prevelemet.id == id
          ? { ...prevelemet, completed: !prevelemet.completed }
          : prevelemet;
      });
    });
  };

  useEffect(() => {
    const todo = JSON.parse(localStorage.getItem("todos"));
    if (todo && todo.length > 0) {
      setSettos(todo);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));

    console.log(todos);
  }, [todos]);


  function change(params) {
    console.log(hidden);
    
// Suppose params is a DOM node, e.g., an event target
hidden.current.forEach((element) => {
  if (element && element.classList.contains(params)) {
    element.classList.toggle('hidden');
  }
});
 
    
  }
  return (
    <Tododoprovider
      value={{
        todos,
        addtod,
        removetodo,
        update,
        togelComplete,
      }}
    >
      <div className="bg-gray-100 min-h-screen flex items-center justify-center p-4">
        <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-6">
          <h1 className="text-2xl font-bold mb-4 text-center text-gray-800">
            My To-Do List
          </h1>

          <div className="flex mb-4">
            <Input />
          </div>

          <ul id="task-list" className="space-y-2">
            {todos.map((tod,index) => (
              <li
                key={tod.id}
                className="flex items-center justify-between p-4 bg-white rounded shadow"
              >
                <div className="flex space-x-2">
                  <input
                    type="checkbox"
                    name="check"
                    id="check"
                    className="px-3 py-1 text-white bg-green-500 rounded hover:bg-green-600 focus:outline-none"
                  />
                  <span className="text-gray-800">{tod.todo}</span>
                </div>
                <div className="flex space-x-2">
                 
              
                  <button
                    className="px-3 py-1 text-white bg-red-500 rounded hover:bg-red-600 focus:outline-none"
                    onClick={() => removetodo(tod.id)}
                  >
                    Delete
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Tododoprovider>
  );
}

export default App;
