import React from 'react';
import './App.css';

//import ButtonPrimary from './ButtonPrimary';
import Filter from './Filter';
// import ItemCards from './ItemCards';
// import Numbers from './Numbers';
// import Toggle from './Toggle';
import Todos from './Todos';

class App extends React.Component {
  constructor(props) {
    super(props);
    // Initialize state
    this.state = {
      // color: 'blue',
      // items: [
      //   { description: 'This is description 1', title: 'My title 1' },
      //   { description: 'This is description 2', title: 'My title 2' },
      //   { description: 'This is description 3', title: 'My title 3' },
      // ],
      text: '',
      todos: [],
    };
    // Handlers
    // this.mostrarEnPantalla = this.mostrarEnPantalla.bind(this);
    // this.changeFontColor = this.changeFontColor.bind(this);
    this.setTextState = this.setTextState.bind(this);
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(todos => this.setState({ todos }));
  }

  // mostrarEnPantalla(text) {
  //   console.log(text);
  // }

  // changeFontColor(color) {
  //   this.setState({ color });
  // }

  setTextState(e) {
    this.setState({ text: e.target.value });
  }

  render() {
    //const { text, todos } = this.state;
    const filteredTodos = this.state.todos.filter(todo => todo.title.toLowerCase().includes(this.state.text.toLowerCase()));
    //const paginatedTodos = filteredTodos.slice(currentPage * itemsPerPage, (currentPage * itemsPerPage) + itemsPerPage);

    return (
      <section className="container">
        <Filter onChange={this.setTextState} text={this.state.text} />
        <Todos todos={filteredTodos} />
        {
          //filteredTodos.length && <Todos todos={filteredTodos} />
          //<Todos todos={this.state.todos} />
        }
      </section>
      // <div className="App">
      //   <div>
      //     <button onClick={() => this.changeFontColor('green')}>Cambiar Color</button>
      //     &nbsp;
      //     <ButtonPrimary mostrarEnPantalla={this.mostrarEnPantalla} text="Click Me!" />
      //     &nbsp;
      //     <ButtonPrimary level="danger" mostrarEnPantalla={this.mostrarEnPantalla} text="Cuidado!" />
      //   </div>
      //   <ItemCards items={this.state.items} />
      //   <Numbers />
      //   <Toggle />
      //   <Filter setText={this.onChangeText} text={this.state.text} />
      // </div>
    );
  }
}

export default App;
