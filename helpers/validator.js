class Validator {
    static validateTaskInfo(task) {
        if(task.hasOwnProperty("title") &&
        task.hasOwnProperty("description") &&
        task.hasOwnProperty("completed") &&
        typeof task.title === 'string' &&
        task.title.trim() !== '' &&
        typeof task.description === 'string' &&
        task.description.trim() !== '' &&
        typeof task.completed === 'boolean') {
            return {
                "status": true,
                "message": "Task has been validated"
            };
        } else {
            return {
                "status": false,
                "message": "Task Info is malformed, please provide all the mandatory parameters"
            };
        }
    }
}

module.exports = Validator;