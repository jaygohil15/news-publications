
import './App.css';
import Home from './components/Home'

function App() {
  // fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=3700955710dd4e63b295e48b6237b40a'
  //   // , 
  //   // {
  //   //   headers: {
  //   //     // 'Content-Type': 'application/json',
  //   //     'Accept': '*/*',
  //   //     "Access-Control-Allow-Origin": "*",
  //   //     "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept"
  //   //   }
  //   // }
  // ).then((data) => data.json()).then((data) => console.log(data))
  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;
