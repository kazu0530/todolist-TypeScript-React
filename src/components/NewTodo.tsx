import React, {useRef} from "react";

import './NewTodo.css';

type NewToDoProps = {
    onAddToDo: (todoText: string) => void;
}

const NewTodo:React.FC<NewToDoProps>= props => {
    const textInputRef = useRef<HTMLInputElement>(null);
    const todoSubmitHandler = (event: React.FormEvent) => {
        event.preventDefault();
        const enteredText = textInputRef.current!.value;
        props.onAddToDo(enteredText)
    };


    return <form onSubmit={todoSubmitHandler}>
        <div className="form-control">
            <label htmlFor="todo-text">Todoの内容</label>
            <input type="text" id= "to-dotext" ref={textInputRef}/>
        </div>
        <button type='submit'>TODO追加</button>
    </form>


};


export default NewTodo