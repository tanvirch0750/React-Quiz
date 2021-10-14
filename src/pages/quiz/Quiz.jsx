import Answers from "../../components/answers/Answers";
import MiniPlayer from "../../components/mini-player/MiniPlayer";
import ProgressBar from "../../components/progress-bar/ProgressBar";

export default function Quiz() {
  return (
    <div>
      <h1>Pick three of your favorite Star Wars Flims</h1>
      <h4>Question can have multiple answers</h4>
      <Answers />
      <ProgressBar />
      <MiniPlayer />
    </div>
  );
}
