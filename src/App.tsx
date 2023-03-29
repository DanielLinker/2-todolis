import React, {useState} from 'react';
import './App.css';
import {TaskType, Todolist} from './components/Todolist';

function App() {

    let [tasks, setTasks] = useState<Array<TaskType>> ([
        { id: 1, title: "HTML&CSS", isDone: true },
        { id: 2, title: "JS", isDone: true },
        { id: 3, title: "ReactJS", isDone: false }
        ])




    function removeTasks (id: number) {
        tasks = tasks.filter(t => t.id !==id)
        setTasks(tasks)
    }

    return (
        <div className="App">
            <Todolist title="What to learn"
                      tasks={tasks}
                      removeTasks={removeTasks}/>
        </div>
    );
}

export default App;
