import React from 'react';
import AddTask from '../components/Addtask'
import ListTask from '../components/ListTask';

const Home = () => {

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg p-8">
          <h1 className='text-center text-2xl font-semibold'>ToDo App</h1>
          <AddTask />
          <ListTask />
        </div>
    </div>
  );
};

export default Home;