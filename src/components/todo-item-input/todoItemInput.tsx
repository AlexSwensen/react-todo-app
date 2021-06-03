import { FormEvent, useState } from "react"

interface ITodoListInputProps {

}

export const TodoItemInput = (props: ITodoListInputProps) => {
    const [name, setName] = useState("");

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();
        alert(`submitting event name ${name}`)
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
                <input type="submit" />
            </form>
        </div>
    )
}