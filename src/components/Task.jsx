import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toggleTodo, editTodo, removeTodo } from '../JS/action/action';
// import { Trash } from "@phosphor-icons/react";

const Task = ({ task }) => {
  const dispatch = useDispatch();
  const [editMode, setEditMode] = useState(false);
  const [updatedDesc, setUpdatedDesc] = useState(task.description);

  const handleEdit = () => {
    if (updatedDesc.trim()) {
      dispatch(editTodo(task.id, updatedDesc));
      setEditMode(false);
    }
  };

  return (
    <div className="flex items-center justify-between bg-white px-3 py-1 border rounded shadow mb-2">
      {editMode ? (
        <input
          type="text"
          value={updatedDesc}
          onChange={(e) => setUpdatedDesc(e.target.value)}
          className="outline-none px-2 py-1 rounded w-full mr-4"
        />
      ) : (
        <span
          className={`flex-1 ${task.isDone ? 'line-through text-gray-400' : ''}`}
        >
          {task.description}
        </span>
      )}

      <div className="flex gap-2 ml-4">
          <button
          onClick={() => dispatch(removeTodo(task.id))}
          className="text-red-600 hover:underline px-2 py-1 rounded"
        >
          Remove
          {/* <Trash/> */}
        </button>
        
        <button
          onClick={() => dispatch(toggleTodo(task.id))}
          className="text-sm text-green-600 hover:underline"
        >
          {task.isDone ? 'Undo' : 'Done'}
        </button>

        <button
          onClick={() => (editMode ? handleEdit() : setEditMode(true))}
          className="text-sm text-blue-600 hover:underline"
        >
          {editMode ? 'Save' : 'Edit'}
        </button>
      </div>
    </div>
  );
};

export default Task;
