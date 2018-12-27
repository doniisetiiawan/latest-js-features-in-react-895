class Person extends Component {
  showProps = () => {
    console.log(this.props);
  };
  render() {
    return <div>Consoling props: {this.showProps()}</div>;
  }
}
