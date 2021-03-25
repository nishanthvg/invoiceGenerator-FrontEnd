import React from "react";
import "./css/App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import HomePage from "./js/HomePage";
import CreateInvoice from "./js/createInvoice"
import PreviousInvoice from "./js/previousInvoice/PreviousInvoice";
import ViewInvoice from "./js/previousInvoice/ViewInvoice"
function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
            <Route path="/createInvoice">
                <CreateInvoice />
            </Route>
            <Route path= "/invoice" >
              < PreviousInvoice />
            </Route>
            <Route path ="/viewInvoice">
                <ViewInvoice />
            </Route>

            {/* ---- */}
            <Route path="/">
              < HomePage />
            </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
