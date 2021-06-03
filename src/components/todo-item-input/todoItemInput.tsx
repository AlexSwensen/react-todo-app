import { FormEvent, useState } from "react"

interface ITodoListInputProps {
    addItemCallback: Function
}

export const TodoItemInput = (props: ITodoListInputProps) => {
    const [name, setName] = useState("");

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();
        props.addItemCallback(name);
        setName('');
    }

    const inputEnabled = () => {
        return !!name;
    }

    return (
        <div className="todoItem">
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    value={name}
                    onChange={e => setName(e.target.value)}
                />
                <input type="submit" title="Add Item" value="Add Item" disabled={!inputEnabled()}/>
            </form>
        </div>
    )
}