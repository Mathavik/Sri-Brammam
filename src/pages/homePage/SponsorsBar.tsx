import React, { useEffect, useState } from "react";
import api from "../../api"; // path correct ah podunga

type Client = {
  id: number;
  name: string;
  client_logo: string;
};

const SponsorsBar: React.FC = () => {
  const [clients, setClients] = useState<Client[]>([]);

  // API Fetch
  useEffect(() => {
    const fetchClients = async () => {
      try {
        const response = await api.get("/clients");

        setClients(response.data.data);
      } catch (err) {
        console.error("API Error:", err);
      }
    };

    fetchClients();
  }, []);

  return (
    <div className="w-full bg-white py-12 px-4 md:px-8 flex justify-center items-center -mt-16">

      <div className="w-full max-w-6xl bg-[#F9F9F9] py-10 px-6 md:px-12 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-8">

        {clients.map((client) => (
          <div
            key={client.id}
            className="flex justify-center items-center h-24 w-44"
          >
            <img
              src={client.client_logo}
              alt={client.name}
              className="max-h-full max-w-full object-contain transition-transform hover:scale-105"
            />
          </div>
        ))}

      </div>
    </div>
  );
};

export default SponsorsBar;