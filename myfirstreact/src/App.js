import './App.css';
import AddUser from './component/AddUser'
import Link1 from './component/Link1';
import Edituser from './component/Edituser';
import {BrowserRouter as Router, Route, withRouter} from "react-router-dom";


function App() {
  return (
    <Router>
      <div className="App Container">

      <Link1></Link1>
     
     <Route path={"/AddUser"} component={AddUser} />
     <Route path={"/Edituser/:ID"} component={Edituser} />
    </div>
    </Router>
  );
}
export default App;