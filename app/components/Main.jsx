var React = require('react');
var NavComponent = require('NavComponent');
var Main = React.createClass({

  render: function(){
  return(


    <div>
    <NavComponent />
        {this.props.children}
      </div>



  );
  }

}

);

module.exports = Main;
