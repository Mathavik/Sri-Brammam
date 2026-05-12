import React, {
  useEffect,
  useState,
} from "react";

import api from "../../api";

const MainSection: React.FC = () => {

  const [videoUrl, setVideoUrl] =
    useState<string>("");

  const [loading, setLoading] =
    useState<boolean>(true);

  // =========================
  // Fetch Video + Cache
  // =========================
  useEffect(() => {
    let isMounted = true;

    const fetchVideoData = async () => {
      try {

        // Cached Data
        const cachedVideo =
          localStorage.getItem("mainVideo");

        if (cachedVideo) {
          setVideoUrl(cachedVideo);
          setLoading(false);
        }

        console.time("Video API");

        const res: any = await api.get(
          "/video-urls"
        );

        console.timeEnd("Video API");

        if (
          isMounted &&
          res.data.success &&
          res.data.data.length > 0
        ) {

          const youtubeUrl =
            res.data.data[0].url;

          // Convert to embed URL
          const videoId =
            youtubeUrl.split("v=")[1]
              ?.split("&")[0];

          const embedUrl = `https://www.youtube.com/embed/${videoId}`;

          setVideoUrl(embedUrl);

          // Save Cache
          localStorage.setItem(
            "mainVideo",
            embedUrl
          );
        }

      } catch (error: any) {

        console.error(
          "Error fetching video data:",
          error
        );

      } finally {

        setLoading(false);
      }
    };

    fetchVideoData();

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <div className="relative w-full py-4 md:py-0 min-h-[340px] sm:h-[380px] md:h-[400px] lg:h-[450px] -mt-8 sm:mt-0 flex items-center">

      {/* Background Image */}
      <img
        src="/images/herosection/background.png"
        alt="background"
        decoding="async"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-orange-900/70 to-transparent"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto h-full flex flex-col md:flex-row items-center justify-between px-6 md:px-10 gap-6 md:gap-6 w-full">

        {/* LEFT TEXT */}
        <div className="text-white text-center md:text-left w-full md:w-1/2">

          <h1
            className="drop-shadow-2xl mb-2 md:mb-4 text-3xl sm:text-5xl md:text-[58px]"
            style={{
              fontFamily:
                "'TAU-Paalai', sans-serif",

              fontWeight: 700,

              lineHeight: "1.2",
            }}
          >
            ஸ்ரீ ப்ரம்மம்
          </h1>

          <p
            className="text-base sm:text-lg md:text-xl leading-relaxed max-w-md mx-auto md:mx-0"
            style={{
              fontFamily:
                "'Arima', serif",

              fontWeight: 700,

              fontSize: "16px",
            }}
          >
            “ஆன்மிகம் • அறம் • அறிவு —
            உங்கள் வழிகாட்டி”
          </p>
        </div>

        {/* RIGHT VIDEO */}
        <div className="relative w-full max-w-[340px] sm:max-w-[400px] md:max-w-[440px] flex justify-center md:mr-8 lg:mr-16 px-2 sm:px-0">

          <div className="bg-white p-2 sm:p-4 pt-8 sm:pt-12 pb-3 sm:pb-5 rounded-[28px] sm:rounded-[45px] shadow-2xl w-full">

            <div className="rounded-[20px] sm:rounded-[35px] overflow-hidden w-full h-[160px] sm:h-[200px] md:h-[260px] lg:h-[300px] flex items-center justify-center bg-gray-100">

              {/* Loading Skeleton */}
              {loading ? (

                <div className="w-full h-full bg-gray-200 animate-pulse"></div>

              ) : videoUrl ? (

                <iframe
                  src={videoUrl}
                  title="YouTube video"
                  loading="lazy"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                />

              ) : (

                <p className="text-gray-500 text-xs sm:text-sm">
                  வீடியோ கிடைக்கவில்லை
                </p>
              )}
            </div>
          </div>

          {/* Glow Effect */}
          <div className="absolute -inset-4 bg-orange-500/20 blur-3xl -z-10 rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(MainSection);