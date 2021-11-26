import { Link } from "react-router-dom";
import img from "../../assets/images/3.jpg";
import classes from "./Video.module.css";

export default function Video({ title, noq, id }) {
  const imageUrl = `http://img.youtube.com/vi/${id}/maxresdefault.jpg`;
  return (
    <>
      {noq > 0 ? (
        <Link to="/quiz">
          <div className={classes.video}>
            <img src={imageUrl ? imageUrl : img} alt={title} />
            <p>{title}</p>
            <div className={classes.qmeta}>
              <p>{noq} Questions</p>
              <p>Total Points: {noq * 5}</p>
            </div>
          </div>
        </Link>
      ) : (
        <div className={classes.video}>
          <img src={imageUrl ? imageUrl : img} alt={title} />
          <p>{title}</p>
          <div className={classes.qmeta}>
            <p>{noq} Questions</p>
            <p>Total Points: {noq * 5}</p>
          </div>
        </div>
      )}
    </>
  );
}
