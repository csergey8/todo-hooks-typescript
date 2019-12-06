import React, { useState } from 'react';

interface TodoFromProps {
    onAdd(title: string): void;
}

export const TodoForm: React.FC<TodoFromProps> = (props) => {
    const [ title, setTitle ] = useState<string>('');
    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value);
    }
    const keyPressHandler = (e: React.KeyboardEvent) => {
        if(e.key === 'Enter'){
            props.onAdd(title)
            setTitle('')
        }
    }
    return (
        <div>
            <input 
                type="text" 
                value={title} 
                onChange={changeHandler} 
                id="title" 
                placeholder="Enter Todo" 
                onKeyPress={keyPressHandler}
            />
            <label htmlFor="title">Enter Todo</label>
        </div>
    )
}
