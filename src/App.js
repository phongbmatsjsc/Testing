import './App.css';
import LineChart from './components/LineChart';
import useData from './useData';

function App() {
  var {data} = useData();
  
  return (
    <div className="App">
      <h1>Testing chart</h1>
      <div style={{height:400, width:1000}}>
        < LineChart 
          chartData={data}
        />
      </div>
    </div>
  );
}

export default App;

