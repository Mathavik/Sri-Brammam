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
    <div className="w-full h-[600px] relative overflow-hidden">
      {/* Background Image */}
      <img
        src="/images/herosection/background.png"
        alt="background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-orange-900/70 to-transparent"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto h-full flex items-center justify-between px-10">
        
        {/* LEFT TEXT */}
        <div className="text-white">
          <h1
            className="drop-shadow-2xl mb-2"
            style={{
              fontFamily: "'TAU-Paalai', sans-serif",
              fontWeight: 700,
              fontSize: "58px",
              lineHeight: "48px",
            }}
          >
            ஸ்ரீ பிரம்மம்
          </h1>

          <p
            style={{
              fontFamily: "'Arima', serif",
              fontWeight: 700,
              fontSize: "24px",
              lineHeight: "48px",
            }}
          >
            “ஆன்மீகம் • அறம் • அறிவு — உங்கள் வழிகாட்டி”
          </p>
        </div>

        {/* RIGHT VIDEO */}
        <div className="relative">
          <div className="bg-white p-4 pt-12 pb-5 rounded-[45px] shadow-2xl">
            <div className="rounded-[35px] overflow-hidden w-[440px] h-[300px] flex items-center justify-center bg-gray-100">
              
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