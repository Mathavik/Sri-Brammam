import React, {
  useEffect,
  useState,
} from "react";

import api from "../../api";

type Client = {
  id: number;
  name: string;
  client_logo: string;
};

const SponsorsBar: React.FC = () => {

  const [clients, setClients] =
    useState<Client[]>([]);

  const [loading, setLoading] =
    useState<boolean>(true);

  // =========================
  // Fetch Clients + Cache
  // =========================
  useEffect(() => {

    let isMounted = true;

    const fetchClients = async () => {

      try {

        // CACHE
        const cachedClients =
          localStorage.getItem("clients");

        if (cachedClients) {

          setClients(
            JSON.parse(cachedClients)
          );

          setLoading(false);
        }

        // API
        const response = await api.get(
          "/clients"
        );

        if (
          isMounted &&
          response.data.data
        ) {

          setClients(
            response.data.data
          );

          // SAVE CACHE
          localStorage.setItem(
            "clients",
            JSON.stringify(
              response.data.data
            )
          );
        }

      } catch (err) {

        console.error(
          "API Error:",
          err
        );

      } finally {

        setLoading(false);
      }
    };

    fetchClients();

    return () => {
      isMounted = false;
    };

  }, []);

  // =========================
  // Loading Skeleton
  // =========================
  if (loading) {

    return (
      <div className="w-full bg-white py-12 px-4 md:px-8 flex justify-center items-center mt-8 md:mt-12">

        <div className="w-full max-w-6xl bg-[#F9F9F9] py-10 px-6 md:px-12 rounded-2xl grid grid-cols-2 md:grid-cols-4 gap-8">

          {[1, 2, 3, 4].map((item) => (

            <div
              key={item}
              className="h-24 bg-gray-200 rounded-xl animate-pulse"
            ></div>

          ))}
        </div>
      </div>
    );
  }

  // =========================
  // No Data
  // =========================
  if (clients.length === 0) {

    return null;
  }

  return (
    <div className="w-full bg-white py-12 px-4 md:px-8 flex justify-center items-center mt-8 md:mt-12 overflow-hidden">

      <div className="w-full max-w-6xl bg-[#F9F9F9] py-10 px-6 md:px-12 rounded-2xl overflow-hidden">

        {/* AUTO SCROLL */}
        <div className="relative w-full overflow-hidden">

          <div className="flex gap-20 md:gap-28 animate-marquee whitespace-nowrap">

            {/* DUPLICATE FOR INFINITE SCROLL */}
            {[...clients, ...clients].map(
              (client, index) => (

                <div
                  key={`${client.id}-${index}`}
                  className="flex justify-center items-center h-24 w-44 flex-shrink-0"
                >

                  <img
                    src={client.client_logo}
                    alt={client.name}
                    loading="lazy"
                    decoding="async"
                    className="max-h-full max-w-full object-contain transition-transform duration-300 hover:scale-105"
                  />

                </div>
              )
            )}
          </div>
        </div>
      </div>

      {/* STYLE */}
      <style>
        {`
          @keyframes marquee {
            0% {
              transform: translateX(0%);
            }

            100% {
              transform: translateX(-50%);
            }
          }

         .animate-marquee {
  animation: marquee 20s linear infinite;
}

/* MOBILE SPEED FAST */
@media (max-width: 768px) {
  .animate-marquee {
    animation: marquee 10s linear infinite;
  }
}

          .animate-marquee:hover {
            animation-play-state: paused;
          }
        `}
      </style>
    </div>
  );
};

export default React.memo(
  SponsorsBar
);