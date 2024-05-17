import { FaPlay } from "react-icons/fa";
import { AiOutlineInfoCircle } from "react-icons/ai";
import {
  PiSpeakerSimpleNoneFill,
  PiSpeakerSimpleSlashFill,
} from "react-icons/pi";
import { Link } from "react-router-dom";
type VideoProps = {
  title: string;
  overview: string;
  handleMuteStatus: (flag: boolean) => void;
  muteStatus: boolean;
  movieId: number;
};
const VideoTitle = ({
  title,
  overview,
  handleMuteStatus,
  muteStatus,
  movieId,
}: VideoProps) => {
  return (
    <div className="w-full overflow-hidden aspect-video absolute top-0  pl-12 text-white bg-gradient-to-r from-black flex justify-between">
      <div className="pt-[20%]">
        <h2 className="text-4xl font-bold">{title}</h2>
        <p className="hidden sm:block mt-1 text-sm leading-7 w-1/2 first-letter md:text-lg">
          {overview}
        </p>
        <div className="flex gap-3 mt-2">
          <Link
            className="p-4 bg-white text-black w-40 rounded-lg text-xl hover:bg-opacity-80 flex items-center font-bold"
            // onClick={navigateToWatch}
            to={"/watch/" + movieId}
          >
            <FaPlay className="mr-2" />
            <span>Play</span>
          </Link>
          <button className="p-4 bg-gray-500 text-white  w-40 rounded-lg text-xl bg-opacity-60 flex items-center font-bold">
            <AiOutlineInfoCircle className="mr-2 " /> <span>More Info</span>
          </button>
        </div>
      </div>
      <div className="pt-[30%] mr-12">
        {muteStatus ? (
          <span onClick={() => handleMuteStatus(false)}>
            <PiSpeakerSimpleSlashFill
              size="3rem"
              className="border-2 border-white rounded-full text-center p-2"
            />
          </span>
        ) : (
          <span onClick={() => handleMuteStatus(true)}>
            <PiSpeakerSimpleNoneFill
              size="3rem"
              className="border-2 border-white rounded-full text-center p-2"
            />
          </span>
        )}
      </div>
    </div>
  );
};

export default VideoTitle;
