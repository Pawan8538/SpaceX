import React from 'react'
import Home from "./components/Home"
// import {BrowserRouter, Routes, Route} from 'react-router-dom'

// const App = () => {
//   return (
//     <>
//     <div>
//         <BrowserRouter>
//         <Routes>
//         <Route path="/" element={ <Home/>}> </Route>
//         </Routes>
//         </BrowserRouter>
     
//     </div>
//     </>
//   );
// }

// export default App

import { HashRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </Router>
  );
}

export default App;

