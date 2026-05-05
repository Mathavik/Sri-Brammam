import React, { useEffect, useState } from "react";

const MainSection: React.FC = () => {
  const [videoUrl, setVideoUrl] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchVideoData = async () => {
      try {
        const response = await fetch(
          "https://pcstech.in/pcs_api/brammam/public/api/video-urls"
        );
        const result = await response.json();

        console.log("API RESULT:", result); // ✅ debug

        // ✅ Correct data access
        if (result.success && result.data.length > 0) {
          const youtubeUrl = result.data[0].url;

          // ✅ Convert to embed URL
          const videoId = youtubeUrl.split("v=")[1];
          const embedUrl = `https://www.youtube.com/embed/${videoId}`;

          setVideoUrl(embedUrl);
        }
      } catch (error) {
        console.error("Error fetching video data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchVideoData();
  }, []);

  return (
    <div className="w-full h-auto md:h-[600px] relative overflow-hidden py-12 md:py-0 flex items-center">
      {/* Background Image */}
      <img
        src="/images/herosection/background.png"
        alt="background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-orange-900/70 to-transparent"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto h-full flex flex-col md:flex-row items-center justify-between px-6 md:px-10 gap-12 md:gap-6 w-full">
        
        {/* LEFT TEXT */}
        <div className="text-white text-center md:text-left w-full md:w-1/2">
          <h1
            className="drop-shadow-2xl mb-4"
            style={{
              fontFamily: "'TAU-Paalai', sans-serif",
              fontWeight: 700,
              fontSize: "clamp(38px, 5vw, 58px)",
              lineHeight: "1.2",
            }}
          >
            ஸ்ரீ பிரம்மம்
          </h1>

         <p
  style={{
    fontFamily: "'Arima', serif",
    fontWeight: 700,
    fontSize: "20px",
    lineHeight: "48px",
    letterSpacing: "0%",
    textTransform: "capitalize",
  }}
>
  “ஆன்மீகம் • அறம் • அறிவு — உங்கள் வழிகாட்டி”
</p>
        </div>

        {/* RIGHT VIDEO */}
        <div className="relative w-full max-w-[440px] flex justify-center mr-8 md:mr-16">
          <div className="bg-white p-4 pt-12 pb-5 rounded-[45px] shadow-2xl w-full">
            <div className="rounded-[35px] overflow-hidden w-full h-[220px] sm:h-[260px] md:h-[300px] flex items-center justify-center bg-gray-100">
              
              {loading ? (
                <p className="text-gray-500 text-sm">
                  வீடியோ லோட் ஆகிறது...
                </p>
              ) : videoUrl ? (
                <iframe
                  src={videoUrl}
                  title="YouTube video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                />
              ) : (
                <p className="text-gray-500 text-sm">
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

export default MainSection;