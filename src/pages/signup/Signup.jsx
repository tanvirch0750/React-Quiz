import Illustration from "../../components/illustration/Illustration";
import SignupForm from "../../components/signup-form/SignupForm";

export default function Signup() {
  return (
    <div>
      <h1>Create an account</h1>
      <div className="column">
        <Illustration />
        <SignupForm />
      </div>
    </div>
  );
}
