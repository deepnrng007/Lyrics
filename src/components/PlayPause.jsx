import { FaPlayCircle, FaPauseCircle } from "react-icons/fa";

const PlayPause = ({
  song,
  handlePause,
  handlePlay,
  isPlaying,
  activeSong,
}) => {
  console.log("activeSong.title");
  console.log(activeSong.title);
  console.log("song.title");
  console.log(song.title);
  return isPlaying && activeSong?.title === song.title ? (
    <FaPauseCircle size={35} className="text-gray-300" onClick={handlePause} />
  ) : (
    <FaPlayCircle size={35} className="text-gray-300" onClick={handlePlay} />
  );
};

export default PlayPause;
