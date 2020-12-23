import React, { Component } from 'react'
import './App.css';
import Person from './Person/Person';
import Person2 from './Person/Person2';
import Person3 from './Person/Person3';


class App extends Component {

    state = {
      persons: [
        { nom: 'Victor', prenom: 'hugo'},
        { nom: 'Mbappé', prenom: 'Kylian'},
        { nom: 'Bruel', prenom: 'Patrick'},
      ]
    }

    switchNamehandler = () => {
      // alert('bouton cliqué')
      console.log('Console : bouton cliqué')
      this.setState({
        persons: [
          { nom: 'Voltaire', prenom: ''},
          { nom: 'Roux', prenom: 'Guy'},
          { nom: 'Bruel', prenom: 'Patrick'},
        ]
      });
    }

  render(){
  return (
    <div className="App">
      <h1>My App</h1>
        <Person />
        <Person2 prenom="Laurent" nom="Aubry" >Je suis prof</Person2>
        <Person2 prenom="Kylian" nom="Mbappé" >Je suis footballer</Person2>
        <br/>
        <button onClick={this.switchNamehandler} >Changer de nom</button>
        <Person2 prenom={this.state.persons[0].prenom} nom={this.state.persons[0].nom} />
        <Person2 prenom={this.state.persons[1].prenom} nom={this.state.persons[1].nom} />
        <Person2 prenom={this.state.persons[2].prenom} nom={this.state.persons[2].nom} />
        <br/>
        <p>Composant Person3 :</p>
        <Person3 clickMe={this.switchNamehandler} prenom={this.state.persons[0].prenom} nom={this.state.persons[0].nom} />
    </div>
  );
}
}

export default App;
