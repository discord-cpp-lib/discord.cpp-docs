import "./App.css";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Home from "./pages/Home/index";
import Docs from "./pages/Docs/index";

const App = () => {
    return (
        <div className="App">
            <Router>
				{/* <Header/> */}
                <Switch>
                    <Route path="/docs" component={Docs} />
                    <Route path="/" component={Home} />
                </Switch>
            </Router>
        </div>
    );
};

export default App;
