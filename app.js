const apiLink='https://free.currconv.com/api/v7/convert?q=USD_PHP&compact=ultra&apiKey=458519bf09071b4e3a8b'


class ExchangeCounter extends React.Component {

  state = {
    result: 0,
    value: 0
  }

fn1 = () => {
  axios.get(apiLink)
  .then(res=> this.setState({
    result: this.state.value * res.data.USD_PHP}))
}

fn2 = (e) => {
  this.setState({
    value: e.target.value
  })
}

  render() {
    return (
      <div className="app">
        <input onChange={this.fn2}
        />
        <button onClick={this.fn1}>przlicz</button>
        <div>USD po przeliczeniu to tyle PHP: {this.state.result}</div>
      </div>
    )

  }
}
ReactDOM.render(<ExchangeCounter />, document.getElementById('root'))






