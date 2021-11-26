import { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import useVideoList from "../../hooks/useVideoList";
import Video from "../video/Video";
//import classes from "./Videos.module.css";

export default function Videos() {
  const [page, setPage] = useState(1);
  const { loading, error, videos, hasMore } = useVideoList(page);

  return (
    <div>
      {videos.length > 0 && (
        <InfiniteScroll
          dataLength={videos.length}
          hasMore={hasMore}
          next={() => setPage(page + 8)}
        >
          {videos.map((video) => (
            <Video
              key={video.youtubeID}
              title={video.title}
              id={video.youtubeID}
              noq={video.noq}
            />
          ))}
        </InfiniteScroll>
      )}

      {!loading && videos.length === 0 && <h3>No data found</h3>}
      {error && <h3>There was an error</h3>}
      {loading && <h3>Loading...</h3>}
    </div>
  );
}
