// import './App.css';
import './styles/nullstyle.scss';
import { Route,Routes} from "react-router-dom"
import Authorization from './pages/Authorization';
import Registration from './pages/Registration';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path='/authorization' element={<Authorization/>}></Route>
        <Route exact path='/registration' element={<Registration/>}></Route>
        {/* <Route exact path='*' element={<PageNotFound/>}></Route> */}
        

        {/* PRIVATE ROUTES */}
        {/* <Route element={<PrivateRoutes/>}>
          <Route exact path='/disciplines/:id' element={<Disciplines/>}></Route>
        </Route> */}

      </Routes>
    </div>
  );
}

export default App;
