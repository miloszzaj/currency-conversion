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
    // entries: Object.entries(res.data.rates).map((key, value) => {
    //   return {
    //     id: key,
    //     x: value,
    //     ...res.data.rates[key]

    //   }
    // })
  }
  )
)};


fn1 = (e) => {
  this.setState({
    value: e.target.value,
    result: (this.state.value * this.state.valueCurr).toFixed(2)
  })
}


fn2 = (e) => {
  this.setState({
    valueCurr: e.target.value,
    result: (this.state.value * this.state.valueCurr).toFixed(2)
  })
}



fn3 = () => {
    this.setState({
      
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
              <option value={item[1]} key={item[0]}>{item[0]}</option>

            ) )}
          </select>
          <div>w druga stronę to: {this.fn3}</div>
        </div>
      </div>
    )

  }
}

ReactDOM.render(<ExchangeCounter />, document.getElementById('root'))






