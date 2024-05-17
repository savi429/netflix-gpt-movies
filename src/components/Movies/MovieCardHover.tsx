import { IMAGE_URL } from "../../utils/constants";

type CardHoverProps = {
  data: any;
  centerPosition: { left: number; right: number; top: number; bottom: number };
  hovered: boolean;
};
const MovieCardHover = ({ data, centerPosition, hovered }: CardHoverProps) => {
  const { id, title, poster_path } = data;

  let safeTranslateX = "-82px";
  let safeTranslateY = "-50px";

  if (centerPosition.left <= 48) {
    safeTranslateX = "-8px";
  } else if (centerPosition.right <= 48) {
    safeTranslateX = "-168px";
  }
  const hoverCardStyle = {
    left: centerPosition.left,
    top: centerPosition.top,
    transform: `translate(${safeTranslateX}, ${safeTranslateY})`,
  };
  return (
    <div
      className={`movie-hovered absolute w-80 z-[9999] ${hovered && "hovered"}`}
      style={hoverCardStyle}
    >
      <div className="hover-container bg-[#141414] shadow-md shadow-slate-950 m-2 rounded-md overflow-hidden">
        <div className="h-40 w-full bg-gray-700">
          <img src={`${IMAGE_URL}/${poster_path}`} alt={title} className="" />
        </div>
        <div className="detail p-5 text-white">
          <div className="actions flex items-center gap-3">
            <div className="w-10 h-10 flex items-center bg-white hover:bg-gray-200 text-black rounded-full justify-center">
              {/* <span className='icon-fill text-[36px]'>play_arrow</span> */}
              {/* <PlayArrowIcon style={{ fontSize: "24px" }} /> */}
              like
            </div>
            <button className="w-10 h-10 flex items-center bg-[#262626] text-white rounded-full justify-center border-2 border-solid border-gray-500 hover:border-gray-50">
              {/* <span className='icon-line text-[24px]'>add</span> */}
              {/* <AddIcon style={{ fontSize: "24px" }} /> */}
              share
            </button>
            <button className="w-10 h-10 flex items-center bg-[#262626] text-white rounded-full justify-center border-2 border-solid border-gray-500 hover:border-gray-50">
              {/* <span className='icon-line text-[20px]'>thumb_up</span> */}
              {/* <ThumbUpOffAltIcon style={{ fontSize: "24px" }} /> */}
              subscribe
            </button>
            <div className="ml-auto">
              <button className="w-10 h-10 flex items-center bg-[#262626] text-white rounded-full justify-center border border-solid border-gray-500 hover:border-gray-50">
                {/* <span className='icon-line text-[30px]'>expand_more</span> */}
                {/* <ExpandMoreIcon style={{ fontSize: "24px" }} /> */}
                channel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCardHover;
