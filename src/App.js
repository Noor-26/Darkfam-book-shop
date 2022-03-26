import logo from './logo.svg';
import './App.css';
import Shop from './components/Shop/Shop';
import Question from './components/Question/Question';

function App() {
  return (
    <div className="App">
      <h1>Darkfam book shop</h1>
      <h3>Choose 4 books</h3>
      <Shop></Shop>
      <Question></Question>
    </div>
  );
}

export default App;
