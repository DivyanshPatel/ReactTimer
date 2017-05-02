var React = require('react');
var Clock = require('Clock');
var CountdownForm = require('CountdownForm');


var CountdownComponent = React.createClass({
  getInitialState: function(){
    return{
      count: 0,
      countDownStatus: 'Stopped'
    }
  },

  componentDidUpdate: function(prevProps, prevState) {
    if (this.state.countDownStatus != prevState.countDownStatus){
      switch (this.state.countDownStatus){
        case 'Started':
          this.startTimer();
          break;
      }
    }
  },

  startTimer: function(){
    this.timer = setInterval(() => {
      var newCount = this.state.count - 1;
      this.setState({
        count: newCount >= 0 ? newCount : 0
      });
    },1000);
  },
  handleCountdown: function(seconds){
    this.setState({
      count: seconds,
      countDownStatus: 'Started'
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
