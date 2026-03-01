import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const initialTasks = [
  { id: 1, title: 'Tailor resume for Stripe', status: 'todo' },
  { id: 2, title: 'Send follow-up email', status: 'progress' },
  { id: 3, title: 'Practice interview questions', status: 'done' }
];

const Tasks = () => {
  const navigate = useNavigate();
  const [tasks, setTasks] = useState(initialTasks);
  const [input, setInput] = useState('');

  const move = (id, status) =>
    setTasks(tasks.map(t => t.id === id ? { ...t, status } : t));

  const addTask = () => {
    if (!input.trim()) return;
    setTasks([...tasks, { id: Date.now(), title: input, status: 'todo' }]);
    setInput('');
  };

  const Column = ({ title, status, color }) => (
    <div className="bg-[#14141a] border border-white/10 rounded-xl p-5 flex flex-col">
      <div className={`text-xs tracking-widest mb-5 ${color}`}>
        {title}
      </div>

      <div className="space-y-4">
        {tasks.filter(t => t.status === status).map(task => (
          <div
            key={task.id}
            className="bg-white/5 border border-white/10 rounded-xl p-4"
          >
            <div className="text-sm font-medium">
              {task.title}
            </div>

            <div className="flex gap-2 mt-4 text-xs">
              {status !== 'todo' && (
                <button onClick={() => move(task.id, 'todo')} className="border border-white/20 px-3 py-1 rounded-full hover:bg-white/10">
                  To-Do
                </button>
              )}
              {status !== 'progress' && (
                <button onClick={() => move(task.id, 'progress')} className="border border-white/20 px-3 py-1 rounded-full hover:bg-white/10">
                  In Progress
                </button>
              )}
              {status !== 'done' && (
                <button onClick={() => move(task.id, 'done')} className="border border-white/20 px-3 py-1 rounded-full hover:bg-white/10">
                  Done
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="flex flex-col h-full w-full bg-[#0f0f13] text-white">

      <div className="flex items-center justify-between px-12 py-6 border-b border-white/10">
        <div>
          <h1 className="text-2xl font-semibold">Task Manager</h1>
          <p className="text-sm text-gray-400 mt-1">
            Organize your job workflow.
          </p>
        </div>

        <button
          onClick={() => navigate('/app/dashboard')}
          className="text-sm border border-white/20 px-5 py-2 rounded-lg hover:bg-white/10 transition"
        >
          ← Back
        </button>
      </div>

      <div className="px-12 py-8">

        <div className="flex gap-4 mb-8">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Add new task..."
            className="flex-1 bg-transparent border border-white/20 rounded-xl px-4 py-2 text-sm focus:ring-2 focus:ring-indigo-500 outline-none"
          />
          <button
            onClick={addTask}
            className="px-6 py-2 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl text-sm font-medium"
          >
            Add
          </button>
        </div>

        <div className="grid grid-cols-3 gap-6">
          <Column title="TO-DO" status="todo" color="text-indigo-400" />
          <Column title="IN PROGRESS" status="progress" color="text-purple-400" />
          <Column title="COMPLETED" status="done" color="text-emerald-400" />
        </div>

      </div>
    </div>
  );
};

export default Tasks;