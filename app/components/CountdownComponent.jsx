var React = require('react');
var Clock = require('Clock');
var CountdownForm = require('CountdownForm');


var CountdownComponent = React.createClass({
  getInitialState: function(){
    return{
      count: 0
    }
  },
  handleCountdown: function(seconds){
    this.setState({
      count: seconds
    })
  },


  render: function(){
    var {count} = this.state;
    return(
      <div>

        <Clock totalSeconds={count}/>
        <CountdownForm onSetCountdown={this.handleCountdown}/>
      </div>
    );
  }

});

module.exports = CountdownComponent;
