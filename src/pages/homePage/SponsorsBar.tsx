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

        // Cached Data
        const cachedClients =
          localStorage.getItem("clients");

        if (cachedClients) {
          setClients(
            JSON.parse(cachedClients)
          );

          setLoading(false);
        }

        console.time("Clients API");

        const response = await api.get(
          "/clients"
        );

        console.timeEnd("Clients API");

        if (
          isMounted &&
          response.data.data
        ) {

          setClients(response.data.data);

          // Save Cache
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
    <div className="w-full bg-white py-12 px-4 md:px-8 flex justify-center items-center mt-8 md:mt-12">

      <div className="w-full max-w-6xl bg-[#F9F9F9] py-10 px-6 md:px-12 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-8">

        {clients.map((client) => (

          <div
            key={client.id}
            className="flex justify-center items-center h-24 w-44"
          >

            <img
              src={client.client_logo}
              alt={client.name}
              loading="lazy"
              decoding="async"
              className="max-h-full max-w-full object-contain transition-transform hover:scale-105"
            />

          </div>
        ))}
      </div>
    </div>
  );
};

export default React.memo(SponsorsBar);