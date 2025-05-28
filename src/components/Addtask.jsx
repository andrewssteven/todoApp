import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../JS/action/action';
import { v4 as uuidv4 } from 'uuid';

const AddTask = () => {
  const [description, setDescription] = useState('');
  const dispatch = useDispatch();

  const handleAdd = () => {
    if (description.trim()) {
      dispatch(addTodo({ id: uuidv4(), description, isDone: false }));
      setDescription('');
    }
  };

  return (
    <div className="flex items-center gap-2 mb-6">
      <input
        type="text"
        placeholder="Add a task"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="border border-gray-300 outline-0 rounded px-4 py-2 w-full"
      />
      <button
        onClick={handleAdd}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Add
      </button>
    </div>
  );
};

export default AddTask;
