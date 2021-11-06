import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Home from "./pages";
import CourseDetails from "./pages/coursedetails";
import Navbar from "./../src/Components/Navbar/Navbar";
import Signup from "./Components/Authentication/Signup";
import { AuthProvider } from "./context/AuthContext";
import Login from "./Components/Authentication/Login";
import AddressForm from "./Components/AddressForm";

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="App">
          <Navbar />
          {/* <Home /> */}
          <Switch>
            <Route path="/coursedetails" component={CourseDetails} exact />
            <Route path="/signup" component={Signup} exact />
            <Route path="/login" component={Login} exact />
            <Route path="/address" component={AddressForm} exact />
            <Route path="/" component={Home} />
            <Route render={() => <Redirect to="/" />} />
          </Switch>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
