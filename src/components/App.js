import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { AuthProvider } from "../context/AuthContext";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import Quiz from "../pages/quiz/Quiz";
import Result from "../pages/result/Result";
import Signup from "../pages/signup/Signup";
import "../styles/app.css";
import Layout from "./layout/Layout";
import PrivateRoute from "./private-route/PrivateRoute";
import PublicRoute from "./public-route/PublicRoute";

function App() {
  return (
    <Router>
      <AuthProvider>
        <Layout>
          <Switch>
            <Route exact path="/" component={Home} />
            <PublicRoute exact path="/signup" component={Signup} />
            <PublicRoute exact path="/login" component={Login} />
            <PrivateRoute exact path="/quiz" component={Quiz} />
            <PrivateRoute exact path="/result" component={Result} />
          </Switch>
        </Layout>
      </AuthProvider>
    </Router>
  );
}

export default App;
