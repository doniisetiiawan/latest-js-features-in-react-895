render() {
  const tasks = [
    { task: 'Task 1' },
    { task: 'Task 2' },
    { task: 'Task 3' }
  ];
  return (
    <ul>
      {tasks.map((item, key) => <li key={key}>{item.task}</li>}
    </ul>
  );
}
