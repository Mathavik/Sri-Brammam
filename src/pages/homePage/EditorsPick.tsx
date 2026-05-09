import React, { useEffect, useState, useMemo } from "react";
import api from "../../api";
import { useNavigate } from "react-router-dom";

type EditorPick = {
  id: number;
  title: string;
  image: string;
  pdf: string | null;
  read_time: string;
  category: {
    name: string;
  };
  creator: {
    name: string;
    profile_image: string;
  };
};

const EditorsPick: React.FC = () => {
  const [editorsPicks, setEditorsPicks] = useState<EditorPick[]>([]);
  const [selectedPdf, setSelectedPdf] = useState<string | null>(null);
  const [selectedTitle, setSelectedTitle] = useState<string>("");

  const navigate = useNavigate();

  useEffect(() => {
    api
      .get("/editors-picks")
      .then((res: any) => {
        setEditorsPicks(res.data.data);
      })
      .catch((err: any) => console.error("API Error:", err));
  }, []);

  // Mobile detect
  const isMobile = useMemo(() => {
    return /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  }, []);

  // PDF src
  const getPdfSrc = () => {
    if (!selectedPdf) return "";

    return `${selectedPdf}#toolbar=1&navpanes=1&scrollbar=1`;
  };

  if (editorsPicks.length === 0) return null;

  return (
    <>
      <div className="w-full bg-white py-16">
        <div className="max-w-7xl mx-auto px-6 md:px-10">

          {/* Header */}
          <div className="flex justify-between items-center mb-10 flex-col md:flex-row gap-4 md:gap-0">

            <h2
              className="text-3xl font-bold text-gray-800 text-center md:text-left w-full md:w-auto"
              style={{ fontFamily: "Arima, serif" }}
            >
              Editor’s Pick
            </h2>

            <span
              onClick={() => navigate("/all-posts")}
              className="font-['Arima'] text-[18px] md:text-[26px] leading-[28px] md:leading-[38px] cursor-pointer hover:underline flex items-center gap-2 justify-center"
              style={{ color: "#B22C23", fontWeight: 600 }}
            >
              See All &rarr;
            </span>

          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            {editorsPicks.map((item) => (
              <div
                key={item.id}
                onClick={() => {
                  if (item.pdf) {
                    setSelectedPdf(item.pdf);
                    setSelectedTitle(item.title);
                  } else {
                    alert("PDF not uploaded");
                  }
                }}
                className="bg-white rounded-3xl overflow-hidden border shadow cursor-pointer hover:shadow-2xl transition"
              >

                {/* IMAGE */}
                <div className="h-[300px] overflow-hidden">

                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover hover:scale-105 transition duration-300"
                  />

                </div>

                {/* CONTENT */}
                <div className="p-5">

                  <div className="flex items-center gap-2 mb-4">

                    <img
                      src={item.creator.profile_image}
                      alt={item.creator.name}
                      className="w-7 h-7 rounded-full"
                    />

                    <span className="text-sm font-semibold">
                      {item.creator.name}
                    </span>

                  </div>

                  <h3 className="text-2xl font-bold mb-4">
                    {item.title}
                  </h3>

                  <div className="flex gap-2 text-sm text-gray-500">

                    <span className="text-red-700">
                      {item.category.name}
                    </span>

                    <span>|</span>

                    <span>
                      {item.read_time} Mins Read
                    </span>

                  </div>

                </div>

              </div>
            ))}

          </div>

        </div>
      </div>

      {/* PDF MODAL */}
      {selectedPdf && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-0 md:p-4">

          <div className="relative w-full h-full md:w-[95vw] md:h-[95vh] bg-[#323639] md:rounded-lg overflow-hidden flex flex-col">

            {/* TOP BAR */}
            <div className="w-full bg-[#323639] text-white p-3 flex justify-between items-center px-6">

              <span className="text-sm md:text-base font-medium truncate">
                {selectedTitle}
              </span>

              <button
                onClick={() => {
                  setSelectedPdf(null);
                  setSelectedTitle("");
                }}
                className="bg-red-600 hover:bg-red-700 text-white px-4 py-1 rounded-md text-sm font-bold transition-colors"
              >
                Close
              </button>

            </div>

            {/* PDF VIEWER */}
            <div className="flex-grow w-full h-full bg-white">

              <iframe
                src={getPdfSrc()}
                title="PDF Viewer"
                className="w-full h-full border-none"
                loading="lazy"
              />

            </div>

          </div>

        </div>
      )}
    </>
  );
};

export default EditorsPick;