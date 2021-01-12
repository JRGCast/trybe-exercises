import logo from './logo.svg';
import './App.css';
import Xablau from './Xablau';
const tasks = [
  'Acordar',
  'Tomar café',
  'Escovar os dentes',
  'Ir trabalhar',
  'Xablauzar',
];
const App = () => (
  <ul>
    {tasks.map((task) => (
      <li>{task}</li>
    ))}
  </ul>
);

export default App;
