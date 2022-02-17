import './App.css';
import { Header } from './components/Header'
import { Routes ,Route } from 'react-router-dom';
import {Home} from './components/Home'
import {Countries} from './components/countries'
import {Reports} from './components/Reports'
import {Provinces} from './components/Provinces'
import {ProviceReport} from './components/ProvinceReport'

function App() {
  return (
    <div className="App">
    <Header/>
    <Routes>
      <Route exact path="/" element={<Home/>}></Route>
      <Route exact path="/countries" element={<Countries/>}></Route>
      <Route exact path="/countries/:country/provinces" element={<Provinces/>}></Route>
      <Route exact path="/countries/:country/provinces/:province/report" element={<ProviceReport/>}></Route>
      <Route exact path="/reports" element={<Reports/>}></Route>
    </Routes>
    </div>
  );
}

export default App;
