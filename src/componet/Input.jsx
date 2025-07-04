import React from 'react'
import { useState } from 'react'
import { useTodo } from '../context'
import { useRef } from 'react'
function Input() {
let input = useRef();

let {addtod}=useTodo()
function add(params) {
  console.log(input.current);
  
  addtod({id:Date.now(),todo:input.current.value,completed:false})
  
}

  return (
 
    <>
         <input

        type="text"
       ref={input}
        placeholder="Add new task..."
        className="flex-1 border border-gray-300 rounded-l px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        id="new-task"
      />
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded-r hover:bg-blue-600"
        id="add-btn"
        onClick={add}
      >
        Add
      </button>
    </>
   
  )
}

export default Input
