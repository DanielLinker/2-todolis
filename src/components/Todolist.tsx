import React from 'react';
import {FilterValuesType} from "../App";

export type TaskType = {
    id: number
    title: string
    isDone: boolean
}

type PropsType = {
    title: string
    tasks: Array<TaskType>
    removeTasks: (id: number) => void
    changeFilter: (value: FilterValuesType) => void
}

export function Todolist(props: PropsType) {

    let tasksOutput =  props.tasks.map( (t) => {
        return <li key={t.id}><input type="checkbox" checked={t.isDone}/>
            <span>{t.title}</span>
            <button onClick={ () => {props.removeTasks(t.id)}}>x</button>
        </li>
    })
    return <div>
        <h3>{props.title}</h3>
        <div>
            <input/>
            <button>+</button>
        </div>
        <ul>
            {tasksOutput}
        </ul>
        <div>
            <button onClick={ () => {props.changeFilter("All")}}>All</button>
            <button onClick={ () => {props.changeFilter("Active")}}>Active</button>
            <button onClick={ () => {props.changeFilter("Completed")}}>Completed</button>
        </div>
    </div>
}
