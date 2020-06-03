import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Navbar";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import Movie from "./pages/Movie";
import NoMatch from "./pages/NoMatch";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route exact path={["/", "/horror"]}>
            <Movie />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route>
            <NoMatch />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
