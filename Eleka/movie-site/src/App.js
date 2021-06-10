import HomePage from "./pages/Homepage";
import {Route, Switch} from 'react-router-dom';
import SearchComponent from './components/Search/Search.component';
function App() {
  return (
    <div className="App">
      <SearchComponent/>
      <HomePage />
    </div>
  );
}

export default App;
