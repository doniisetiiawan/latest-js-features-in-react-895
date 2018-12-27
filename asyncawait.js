Index.getInitialProps = async () => {
  const url = "https://api.coinmarketcap.com/v1/ticker/";
  const res = await axios.get(url);
  return {
    coins: res.data
  };
};
