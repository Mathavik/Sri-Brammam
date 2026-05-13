import React, { useEffect, useState } from "react";
import api from "../../api";

type Client = {
  id: number;
  name: string;
  client_logo: string;
};

const SponsorsBar: React.FC = () => {
  const [clients, setClients] = useState<Client[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    let isMounted = true;
    const fetchClients = async () => {
      try {
        const cachedClients = localStorage.getItem("clients");
        if (cachedClients) {
          setClients(JSON.parse(cachedClients));
          setLoading(false);
        }
        const response = await api.get("/clients");
        if (isMounted && response.data.data) {
          setClients(response.data.data);
          localStorage.setItem("clients", JSON.stringify(response.data.data));
        }
      } catch (err) {
        console.error("API Error:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchClients();
    return () => { isMounted = false; };
  }, []);

  if (loading) {
    return (
      <div className="w-full bg-white py-12 px-4 md:px-8 flex justify-center items-center mt-8 md:mt-12">
        <div className="w-full max-w-6xl bg-[#F9F9F9] py-10 px-6 md:px-12 rounded-2xl grid grid-cols-2 md:grid-cols-4 gap-8">
          {[1, 2, 3, 4].map((item) => (
            <div key={item} className="h-24 bg-gray-200 rounded-xl animate-pulse"></div>
          ))}
        </div>
      </div>
    );
  }

  if (clients.length === 0) return null;

  return (
    <div className="w-full bg-white py-12 px-4 md:px-8 flex justify-center items-center mt-0 md:mt-0 overflow-hidden">
      <div className="w-full max-w-6xl bg-[#F9F9F9] py-10 px-6 md:px-12 rounded-2xl overflow-hidden">
        
        {/* SCROLLABLE CONTAINER */}
        <div className="relative w-full overflow-x-auto no-scrollbar scroll-smooth">
          
          <div className="flex gap-20 md:gap-28 animate-marquee whitespace-nowrap w-max px-10">
            {/* INFINITE SCROLL DATA */}
            {[...clients, ...clients, ...clients].map((client, index) => (
              <div
                key={`${client.id}-${index}`}
                className="flex justify-center items-center h-24 w-44 flex-shrink-0"
              >
                <img
                  src={client.client_logo}
                  alt={client.name}
                  loading="lazy"
                  className="max-h-full max-w-full object-contain transition-transform duration-300 hover:scale-105 select-none pointer-events-none"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>
        {`
          /* அனிமேஷன் ஓடும்போதே ஸ்க்ரோல் செய்ய அனுமதிக்கும் வசதி */
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-33.33%); }
          }

          .animate-marquee {
            display: flex;
            animation: marquee 30s linear infinite;
          }

          /* மொபைலில் வேகம் மற்றும் கையேடு ஸ்க்ரோலிங் */
          .no-scrollbar::-webkit-scrollbar {
            display: none;
          }
          .no-scrollbar {
            -ms-overflow-style: none;
            scrollbar-width: none;
            cursor: grab;
          }
          .no-scrollbar:active {
            cursor: grabbing;
          }

          .animate-marquee:hover {
            animation-play-state: paused;
          }

          @media (max-width: 768px) {
            .animate-marquee {
              animation: marquee 15s linear infinite;
            }
          }
        `}
      </style>
    </div>
  );
};

export default React.memo(SponsorsBar);