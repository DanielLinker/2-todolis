import React, {useState} from 'react';
import './App.css';
import {TaskType, Todolist} from './components/Todolist';


export type FilterValuesType = "All" | "Completed" | "Active";
function App() {

    let [tasks, setTasks] = useState<Array<TaskType>> ([
        { id: 1, title: "HTML&CSS", isDone: true },
        { id: 2, title: "JS", isDone: true },
        { id: 3, title: "ReactJS", isDone: false }
        ])
    let [filter, setFilter] = useState<FilterValuesType>('All')

    let tasksForTodolist = tasks;
    if (filter === "Completed"){
        tasksForTodolist = tasks.filter(t => t.isDone);
    }
    if (filter === "Active"){
        tasksForTodolist = tasks.filter(t => !t.isDone)
    }

    function changeFilter(value: FilterValuesType) {
        setFilter(value)
    }

    function removeTasks (id: number) {
        tasks = tasks.filter(t => t.id !==id)
        setTasks(tasks)
    }


    return (
        <div className="App">
            <Todolist title="What to learn"
                      tasks={tasksForTodolist}
                      removeTasks={removeTasks}
                      changeFilter={changeFilter}/>
        </div>
    );
}

export default App;
