import React, {Fragment} from 'react'
import TodoList from './components/TodoList'
import Contar from './components/Count'
import Pront from './components/Prons'

export default function App(){
    return(
        <Fragment>
            <TodoList listas={[{id: 1, task: "Tarea 1", completed: false}]}/>
            <Contar/>
            <Pront nombre='mario' edad= '15' />
        </Fragment>
    )
}