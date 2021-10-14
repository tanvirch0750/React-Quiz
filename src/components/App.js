import Home from "../pages/home/Home";
import Signup from "../pages/signup/Signup";
import "../styles/app.css";
import Layout from "./layout/Layout";

function App() {
  return (
    <Layout>
      <Home />
      <Signup />
    </Layout>
  );
}

export default App;
