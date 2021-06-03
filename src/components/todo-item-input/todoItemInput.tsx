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

    const inputDisabled = () => {
        return !!name;
    }

    return (
        <div className="todoItem">
            <form onSubmit={handleSubmit}>
                <div className="input">
                <input 
                    type="text" 
                    value={name}
                    onChange={e => setName(e.target.value)}
                />
                </div>
                <input type="submit" title="Add Item" value="Add Item" disabled={!inputDisabled()}/>
            </form>
        </div>
    )
}