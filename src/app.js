const { fetchTodos } = require('./services/todoService');

/**
 * Main function to fetch and display TODO items.
 * @async
 * @returns {Promise<void>} A promise that resolves when the function completes.
 */
async function main() {

    // The number of TODO items to fetch.
    let numTodos = 20;

    try {
        /**
         * An array containing the fetched TODO items.
         * @type {object[]}
         */
        const todos = await fetchTodos(numTodos);

        // Print table header
        console.log('Title \t\t\t\t\t\t\t\t\t | Completed status');
        console.log('--------------------------------------------------------------------------------------------');

        // Print results in table format
        todos.forEach(todo => {
             const title = todo.title.padEnd(72); // Adjust column width as needed

            /**
             * The completion status of the TODO item.
             * @type {string}
             */
            const completed = todo.completed ? 'Completed' : 'Incomplete';

            console.log(`${title} | ${completed}`);
        });

        console.log('--------------------------------------------------------------------------------------------');
        console.log('******All Process Over******');
    } catch (error) {
        /**
         * The error message encountered during the fetch operation.
         * @type {string}
         */
        const errorMessage = error.message;

        console.error('Error fetching TODOs:', errorMessage);
    }
}

main();
