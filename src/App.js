import React from "react";
import classes from "./App.module.css";
import { Switch, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import Users from "./Components/Users/Users";
import ToDo from "./Components/ToDo/ToDo";

function App() {
  return (
    <div className={classes.App}>
      <Header />
      <Switch>
        <Route path="/" exact>
          <ToDo />
          
        </Route>
        <Route path="/users" exact>
          <Users />
          {/* <NavBar />
          <Passengers /> */}
        </Route>

        <Route path="/">
          <div> 404</div>

          {/* <NavBar />
          <HomePage />
          <div className={classes.NotFound}>404 Page not Found</div> */}
        </Route>
      </Switch>
    </div>
  );
}

export default App;

// import React from "react";
// import classes from "./App.module.css";


// function App() {
//   return (
//     <div className={classes.App}>
      
//     </div>
//   );
// }

// export default App;
