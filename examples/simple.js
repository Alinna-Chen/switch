require('../assets/index.less');
var React = require('react');
var Switch = require('rc-switch');

function onChange(value) {
  console.log('switch checked:' + value);
}


var Test = React.createClass({
  getInitialState() {
    return {
      disabled: false
    }
  },
  toggle(){
    this.setState({
      disabled:!this.state.disabled
    });
  },
  render() {
    return <div style={{margin: 20}}>
      <Switch onChange={onChange}
        disabled={this.state.disabled}
        checkedChildren={'开'}
        unCheckedChildren={'关'}
      />
      <div>
        <button onClick={this.toggle}>toggle disabled</button>
      </div>
    </div>;
  }
});

React.render(<Test />, document.getElementById("__react-content"));
