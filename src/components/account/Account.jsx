import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import classes from "./Account.module.css";

export default function Account() {
  const { currentUser, logout } = useAuth();
  return (
    <div className={classes.account}>
      {currentUser && (
        <>
          <span class="material-icons-outlined" title="Account">
            account_circle
          </span>
          <span>{currentUser.displayName}</span>
          <span class="material-icons-outlined" title="Logout" onClick={logout}>
            {" "}
            logout
          </span>
        </>
      )}
      {!currentUser && (
        <>
          <Link to="/signup">Signup</Link>
          <Link to="/login">Login</Link>
        </>
      )}
    </div>
  );
}
