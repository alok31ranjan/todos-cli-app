const { fetchTodoFromAPI } = require('../utils/axiosUtils');
const Todo = require('../models/todoModel');

/**
 * Fetches TODO items from an external API.
 * @param {number} numTodos - The number of TODO items to fetch.
 * @returns {Promise<Todo[]>} A promise that resolves to an array of TODO items.
 */
async function fetchTodos(numTodos) {
    /**
     * An array to store fetched TODO items.
     * @type {Todo[]}
     */
    const todos = [];

    /**
     * An array to store promises for fetching TODO items concurrently.
     * @type {Promise<void>[]}
     */
    const promises = [];

    // Fetch TODOs concurrently
    for (let i = 2; i <= numTodos * 2 && todos.length < numTodos; i += 2) {
        promises.push(fetchTodoFromAPI(i));
    }

    // Wait for all promises to resolve
    const results = await Promise.all(promises);

    // Filter out null results (due to failed fetches)
    for (const todoData of results) {
        if (todoData !== null) {
            /**
             * A TODO item created from fetched data.
             * @type {Todo}
             */
            const todo = new Todo(todoData.userId, todoData.id, todoData.title, todoData.completed);
            todos.push(todo);
        }
    }

    return todos;
}

module.exports = {
    fetchTodos
};

