/**
 * This is a naive mocked implementation of a service. Imagine it rather
 * being a decent implementation that interacts with a remote service to
 * persist/fetch data  */

 export default (() => {
  let todos = [
    {
      key: 'to-do',
      name: 'To Do',
      items: [
        {
          id: 1,
          title: 'Create initial setup for Kaban list',
          description: 'Loremp ipsum sit ammet',
          assignee: 'Ricardo Merino',
          tags: ['tag 1', 'tag 2'],
          due: Date.now()
        }
      ]
    },
    {
      key: 'in-progress',
      name: 'In Progress',
      items: [
        {
          id: 2,
          title: 'Task 2',
          description: 'Loremp ipsum sit ammet',
          assignee: 'Ricardo Merino',
          tags: ['tag 1', 'tag 2'],
          due: Date.now()
        }
      ]
    },
    {
      key: 'done',
      name: 'Done',
      items: [
        {
          id: 3,
          title: 'Task 3',
          description: 'Loremp ipsum sit ammet',
          assignee: 'Ricardo Merino',
          tags: ['tag 1', 'tag 2'],
          due: Date.now()
        },
        {
          id: 4,
          title: 'Task 4',
          description: 'Loremp ipsum sit ammet',
          assignee: 'Ricardo Merino',
          tags: ['tag 1', 'tag 2'],
          due: Date.now()
        }
      ]
    }
  ];

  return {
    fetchCollections: () => Promise.resolve(todos.map(x => ({ ...x }))),
  };
})();
