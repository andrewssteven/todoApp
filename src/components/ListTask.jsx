import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Task from './Task';

const ListTask = () => {
  const [filter, setFilter] = useState('all');
  const tasks = useSelector((state) => state.todos);

  const filteredTasks = tasks.filter((task) =>
    filter === 'all' ? true : filter === 'done' ? task.isDone : !task.isDone
  );

  return (
    <div>
      {/* filter buttons */}
      <div className="mb-4 flex gap-2">
        <button onClick={() => setFilter('all')} className="px-3 py-1 border rounded bg-gray-200">
          All
        </button>
        <button onClick={() => setFilter('done')} className="px-3 py-1 border rounded bg-green-200">
          Done
        </button>
        <button onClick={() => setFilter('not')} className="px-3 py-1 border rounded bg-red-200">
          Not Done
        </button>
      </div>

      {/* tasks */}
      <div>
        {filteredTasks.map((task) => (
          <Task key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
};

export default ListTask;
