var React = require('react');
var Clock = require('Clock');
var CountdownComponent = React.createClass({


  render: function(){
    return(
      <div>
        <Clock totalSeconds={62}/>
      </div>
    );
  }

});

module.exports = CountdownComponent;
