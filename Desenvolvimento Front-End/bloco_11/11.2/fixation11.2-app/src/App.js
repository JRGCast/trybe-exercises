import './App.css';
import Greeting from './Greetings';
import Table from './Table';

function App() {
  return (
    <div className='App-header'>
      <Greeting name='Joseph' lastName='Pelintra' />
      <Table />
    </div>
  );
}
export default App;
