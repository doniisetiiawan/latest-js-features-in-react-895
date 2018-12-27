render() {
  const { theme } = this.props;
  return (
    <div
      className={`base ${theme === 'dark' ? 'darkMode' : 'lightMode'}`}
    >
      Some content here...
    </div>
  );
}
