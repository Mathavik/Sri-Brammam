import React, { useEffect, useState } from "react";
import api from "../../api";

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

  useEffect(() => {
    api
      .get("/editors-picks")
      .then((res: any) => {
        setEditorsPicks(res.data.data);
      })
      .catch((err: any) => {
        console.error(err);
      });
  }, []);

  return (
    <>
      <div className="w-full bg-white py-16">
        <div className="max-w-7xl mx-auto px-6 md:px-10">

          <h2 className="text-3xl font-bold mb-10">
            Editor’s Pick
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            {editorsPicks.map((item) => (
              <div
                key={item.id}
                onClick={() => {
                  if (item.pdf) {
                    setSelectedPdf(item.pdf);
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
                    className="w-full h-full object-cover"
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
        <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4">

          <div className="relative w-full max-w-6xl h-[90vh] bg-white rounded-2xl overflow-hidden">

            {/* CLOSE */}
            <button
              onClick={() => setSelectedPdf(null)}
              className="absolute top-4 right-4 z-50 bg-red-600 text-white w-10 h-10 rounded-full"
            >
              ✕
            </button>

            {/* PDF */}
            <iframe
              src={selectedPdf}
              title="PDF Viewer"
              className="w-full h-full"
            />

          </div>

        </div>
      )}
    </>
  );
};

export default EditorsPick;