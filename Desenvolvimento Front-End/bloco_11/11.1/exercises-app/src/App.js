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
const task = (value) => {
  return <li>{value}</li>;
};
const App = () => (
  <div>
    <Xablau />
    <h1>{'TAREFAS'}</h1>
    <ul>{tasks.map((item) => task(item))}</ul>
  </div>
);

export default App;
