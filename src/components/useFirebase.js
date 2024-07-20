import React, { useState, useEffect } from 'react';


const useFirebase = () => {
    const [todo, setTodo] = useState(null);
    

    useEffect(() => {
        fetchTodo();
    }, []);

    const fetchTodo = async () => {
        try {
            const response = await fetch('https://biotechhackathon.onrender.com/predict');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const todoData = await response.json();
            setTodo(todoData);
        } catch (error) {
            console.error('Error fetching todo:', error);
        }
    };

    return todo;
};

export default useFirebase;
