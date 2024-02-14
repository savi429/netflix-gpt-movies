import React from "react";

type VideoProps = {
  title: string;
  overview: string;
};
const VideoTitle = ({ title, overview }: VideoProps) => {
  return (
    <div className="w-screen aspect-video absolute top-0 pt-[20%] px-24 text-white bg-gradient-to-r from-black">
      <h2 className="text-4xl font-bold">{title}</h2>
      <p className="mt-1 text-lg leading-7 w-1/2">{overview}</p>
      <div className="flex gap-3 mt-2">
        <button className="p-4 bg-white text-black w-40 rounded-lg text-xl hover:bg-opacity-80">
          Play
        </button>
        <button className="p-4 bg-gray-500 text-white  w-40 rounded-lg text-xl bg-opacity-60">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
