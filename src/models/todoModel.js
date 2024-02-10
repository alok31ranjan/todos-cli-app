/**
 * Represents a TODO item.
 * @class
 */
class Todo {
    /**
     * Create a Todo.
     * @param {number} userId - The user ID associated with the todo.
     * @param {number} id - The unique ID of the todo.
     * @param {string} title - The title of the todo.
     * @param {boolean} completed - The completion status of the todo.
     */
    constructor(userId, id, title, completed) {
        /**
         * The user ID associated with the todo.
         * @member {number}
         */
        this.userId = userId;

        /**
         * The unique ID of the todo.
         * @member {number}
         */
        this.id = id;

        /**
         * The title of the todo.
         * @member {string}
         */
        this.title = title;

        /**
         * The completion status of the todo.
         * @member {boolean}
         */
        this.completed = completed;
    }
}

module.exports = Todo;
