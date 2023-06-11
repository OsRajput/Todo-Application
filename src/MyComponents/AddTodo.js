import React from 'react'
import { useState } from 'react';

export const AddTodo = (props) => {
    const [title, setTitle] = useState("");

    const submit = (e) => {
        e.preventDefault();
        if (!title) {
            alert("Todo cannot be blank")
        }
        else {
            props.addTodo(title);
            setTitle("");
        }
    }

    return (
        <div className="container my-3">
            <h3>Add a Todo</h3>
            <form onSubmit={submit}>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Task to be done..</label>
                    <input type="text" value={title} onChange={(e) => setTitle(e.target.value)}
                        className="form-control" id="title" aria-describedby="emailHelp" />

                </div>


                <button type="submit" className="btn btn-sm btn-success">Add Todo</button>
            </form>

        </div >
    )
}


