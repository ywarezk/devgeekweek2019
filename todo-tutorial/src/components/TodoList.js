/**
 * fetch todos from server
 * 
 */

import React from 'react';
import TodoItem from './TodoItem';

// [ {"id":9726,"title":"565","description":"new","group":"33","when":"2018-12-06T14:01:00Z"}]
export default class TodoList extends React.Component {
    state = {
        tasks: []
    }

    /**
     * lifecycle event for initialization
     *  get todo tasks from server
     */
    async componentDidMount() {
        const response = await fetch('https://nztodo.herokuapp.com/api/task/?format=json');
        const tasksArrayJson = await response.json();
        this.setState({
            tasks: tasksArrayJson
        })

        // fetch(
        //     'https://nztodo.herokuapp.com/api/task/?format=json'
        // ).then(
        //     function(response){
        //         response.json().then(function(tasksArrayJson) {
        //             this.setState({
        //                 tasks: tasksArrayJson
        //             })
        //         })
        //     }
        // );
    }

    render() {
        return (
            <ul>
                {
                    // [<TodoItem>]
                    // for(let item of this.state.tasks) {
                    //     <TodoItem />
                    // }

                    this.state.tasks.map(function(todoTask) {
                        return <TodoItem key={todoTask.id} task={todoTask} />
                    })
                }
                
            </ul>
        )
    }
}