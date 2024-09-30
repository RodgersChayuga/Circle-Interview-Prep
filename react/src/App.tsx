import React from 'react';
import './App.css'

function App() {
  const tasks = [
    'Complete CodeSignal assessment',
    'Review React.js fundamentals',
    'Practice API integration'
  ];

  return (
    <div className="task-manager">
      <header>
        <h1>Task Manager</h1>
      </header>
      <main>
        <section className="task-list">
          <h2>Your Tasks</h2>
          <ul>
            {tasks.map((task, index) => (
              <li key={index} className="task-item">{task}</li>
            ))}
          </ul>
        </section>
      </main>
      <footer>
        <p>Task Manager © 2024</p>
      </footer>
    </div>
  )
}

export default App
