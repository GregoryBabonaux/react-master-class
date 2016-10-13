// Curieux non ? On dirait presque de la POO ! 
var Counter = React.createClass({
  // Inistal State
  getInitialState: function () {
    return { count: 0 };
  },
  

  // Evenement clic compteur
  handleClick: function () {
    this.setState({
      count: this.state.count + 1,
    });
  },

  // Rendering composant Counter
  render: function () {

    if ( this.state.count == 0 ) {
      var message = 'Clique donc ! C\'est fait pour !';
    } else {
      var message = this.state.count + ' fois ! Quand même ! Ca rigole pas !';
    }

    return (
      <div>
        <button onClick={ this.handleClick } className="btn btn-primary">
          J'ai cliqué {this.state.count} fois sur ce bouton sans me tromper ! 
        </button>
        <hr />

        <p className="lead">
          {message}
        </p>

      </div>
    );
  }
});

// Rendering React dans le DOM
ReactDOM.render(
  <Counter />,
  document.getElementById('container')
);