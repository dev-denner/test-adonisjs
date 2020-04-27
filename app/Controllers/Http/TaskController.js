'use strict'

class TaskController {
  index({
    view
  }) {
    const tasks = [{
        title: 'task 01',
        body: 'Task One'
      },
      {
        title: 'task 02',
        body: 'Task Two'
      },
    ];
    return view.render('task', {
      title: 'Your Task',
      tasks: tasks
    });
  }
}

module.exports = TaskController
