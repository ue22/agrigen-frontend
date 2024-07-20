import React, { useState, useEffect } from 'react';

const TodoDetails = () => {
    const [todo, setTodo] = useState(null);

    useEffect(() => {
        fetchTodo();
    }, []);

    const fetchTodo = async () => {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const todoData = await response.json();
            setTodo(todoData);
        } catch (error) {
            console.error('Error fetching todo:', error);
        }
    };

    return (
        <div>
            <h2>Todo Details</h2>
            {todo ? (
                <div>
                    <p><strong>Title:</strong> {todo.title}</p>
                </div>
            ) : (
                <p>Loading todo...</p>
            )}
        </div>
    );
};

export default TodoDetails;
