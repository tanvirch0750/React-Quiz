import { Link } from "react-router-dom";
import Button from "../../components/button/Button";
import Form from "../../components/form/Form";
import Illustration from "../../components/illustration/Illustration";
import TextInput from "../../components/text-input/TextInput";
import classes from "./Login.module.css";

export default function Login() {
  return (
    <div>
      <h1>Login to your account</h1>
      <div className="column">
        <Illustration />
        <Form className={classes.login} action="#">
          <TextInput
            type="email"
            placeholder="Enter email"
            icon="alternate_email"
          />

          <TextInput type="password" placeholder="Enter Password" icon="lock" />

          <Button>
            <span>Login</span>
          </Button>

          <div className="info">
            Don't have an account? <Link to="/signup">Signup</Link> instead.
          </div>
        </Form>
      </div>
    </div>
  );
}
