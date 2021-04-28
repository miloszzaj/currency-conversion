const apiLink='http://api.exchangeratesapi.io/v1/latest?access_key='

class ExchangeCounter extends React.Component {

  state = {
    result: '',
    value: 0,
    valueCurr: 0,
    array: [],
  }
componentDidMount() {
  axios.get(apiLink)
  .then(res=> this.setState({
    array: [...Object.entries(res.data.rates)],
  }
  )
)};

// componentDidMount() {
//   axios.get(apiLink)
//   .then(res=> this.setState({
//     array: Object.entries(res.data.rates).map(e => ( { curr: e[0], vC: e[1] } )), !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//   }
//   )
// )};


fn1 = (e) => {
  this.setState({
    value: e.target.value,
  })
}


fn2 = (e) => {
  this.setState({
    valueCurr: e.target.value,
  })
  this.setState((prevState) => {
    return {
  result: (prevState.value * prevState.valueCurr).toFixed(2)
}
  })
}


  render() {
    return (
      <div className="app">
        <h1>Przelicznik walut</h1>
        <input className='input' type='number' onChange={this.fn1} placeholder='EUR'/><span>EUR</span>
        <div>
            <span> to: {this.state.result}</span>
          <select className='select' onChange={this.fn2}>
            {this.state.array.map(item => (
              <option value={item[1]} key={item[0]}>{item[0]} (kurs: {item[1].toFixed(2)})</option>
              // <option value={item.vC} key={item.curr}> {item.curr} (kurs:{item.vC})</option>))}!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

              ) )}
          </select>
          <button onClick = {this.fn3}>przelicz</button>
        </div>
      </div>
    )

  }
}

ReactDOM.render(<ExchangeCounter />, document.getElementById('root'))






