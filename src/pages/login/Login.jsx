import Illustration from "../../components/illustration/Illustration";
import LoginForm from "../../components/login-form/LoginForm";

export default function Login() {
  return (
    <div>
      <h1>Login to your account</h1>
      <div className="column">
        <Illustration />
        <LoginForm />
      </div>
    </div>
  );
}
