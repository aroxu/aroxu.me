import { Route } from "react-router-dom";
import Intro from "./Intro";

const App = () => (
  <div>
    <Route exact path="/" component={Intro} />
    {/* <Route path="/about" component={About} /> */}
  </div>
);

export default App;
