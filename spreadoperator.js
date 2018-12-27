this.setState({
  items: [
    ...this.state.items,
    {
      task: "My new task"
    }
  ]
});


render() {
  const props = {};

  props.name = 'Carlos Santana';
  props.age = 30;
  props.email = 'carlos@milkzoft.com';
  
  return <Person {...props} />;
}
