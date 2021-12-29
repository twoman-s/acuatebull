import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Home from "./pages";
import CourseDetails from "./pages/coursedetails";
import Signup from "./Components/Authentication/Signup";
import { AuthProvider } from "./context/AuthContext";
import Login from "./Components/Authentication/Login";
import AddressForm from "./Components/AddressForm";
import Nav from "./Components/Nav";
import Footer from "./Components/Footer";
// import PreLoader from "./Components/Preloader";
import Profile from "./Components/Profile";
import TermsConditions from "./Components/TermsConditions";
import PrivacyPolicy from "./Components/PrivacyPolicy";
import ForgotPassword from "./Components/Authentication/ForgotPassword";
import { PopUpForm } from "./Components/PopUp";
import RefundPolicy from "./Components/RefundPolicy";
import Disclaimer from "./Components/Disclaimer";

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="App">
          <PopUpForm />
          <Nav />
          <Switch>
            <Route path="/coursedetails" component={CourseDetails} exact />
            <Route path="/signup" component={Signup} exact />
            <Route path="/login" component={Login} exact />
            <Route path="/forgotpassword" component={ForgotPassword} exact />
            <Route path="/address" component={AddressForm} exact />
            <Route path="/profile" component={Profile} exact />
            <Route
              path="/termsandconditions"
              component={TermsConditions}
              exact
            />
            <Route path="/privacypolicy" component={PrivacyPolicy} exact />
            <Route path="/disclaimer" component={Disclaimer} exact />
            <Route path="/refundpolicy" component={RefundPolicy} exact />
            <Route path="/" component={Home} />
            <Route render={() => <Redirect to="/" />} />
          </Switch>
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;

// loader ? (
//   <>
//     <PreLoader />
//   </>
// ) :
