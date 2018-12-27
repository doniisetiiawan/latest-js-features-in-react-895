render() {
  console.log(this.props);
  const { name, age, email } = this.props;

  console.log(name, age, email);

  return (
    <ul>
      <li>Name: {name}</li>
      <li>Age: {age}</li>
      <li>Email: {email}</li>
    </ul>
  );
}

//

const Person = ({ name, age, email }) => (
  <ul>
    <li>Name: {name}</li>
    <li>Age: {age}</li>
    <li>Email: {email}</li>
  </ul>
);
