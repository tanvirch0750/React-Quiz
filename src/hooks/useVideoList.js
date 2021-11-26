import {
  get,
  getDatabase,
  limitToFirst,
  orderByKey,
  query,
  ref,
  startAt,
} from "firebase/database";
import { useEffect, useState } from "react";

export default function useVideoList(page) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [videos, setVideos] = useState([]);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    async function fetchVideos() {
      // database realated works
      const db = getDatabase();
      const videoRef = ref(db, "videos");
      const videoQuery = query(
        videoRef,
        orderByKey(),
        startAt("" + page),
        limitToFirst(8)
      );

      try {
        setError(false);
        setLoading(true);
        // request fb db
        const snapshot = await get(videoQuery);

        setLoading(false);

        if (snapshot.exists()) {
          setVideos((prevVideos) => [
            ...prevVideos,
            ...Object.values(snapshot.val()),
          ]);
        } else {
          setHasMore(false);
        }

        //////////
      } catch (error) {
        setLoading(false);
        setError(true);
      }
    }
    fetchVideos();
  }, [page]);

  return { loading, error, videos, hasMore };
}
