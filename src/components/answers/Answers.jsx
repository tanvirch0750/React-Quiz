import classes from "../answers/Answers.module.css";
import CheckBox from "../checkbox/CheckBox";

export default function Answers() {
  return (
    <div className={classes.answers}>
      <CheckBox className={classes.answer} text="test answer" />
    </div>
  );
}
