const axios = require('axios');

/**
 * Fetches a single TODO item from an external API.
 * @param {number} todoID - The ID of the TODO item to fetch.
 * @returns {Promise<object|null>} A promise that resolves to the fetched TODO item or null if an error occurs.
 */
async function fetchTodoFromAPI(todoID) {
    try {
        /**
         * The base URL of the external API.
         * @type {string}
         */
        const baseURL = 'https://jsonplaceholder.typicode.com/todos/';

        /**
         * The response object received from the external API.
         * @type {object}
         */
        const response = await axios.get(`${baseURL}${todoID}`);

        /**
         * The data object extracted from the response.
         * @type {object}
         */
        const responseData = response.data;

        return responseData;
    } catch (error) {
        /**
         * The error message encountered during the fetch operation.
         * @type {string}
         */
        const errorMessage = error.message;

        console.error(`Error fetching TODO ${todoID}:`, errorMessage);

        return null;
    }
}

module.exports = {
    fetchTodoFromAPI
};
