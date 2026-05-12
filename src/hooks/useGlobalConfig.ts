import { useEffect, useState } from "react";
import api from "../api";

export interface GlobalConfig {
  id: number;
  year: string;
  issue: string;
  reader: string;
  youtube_url?: string;
  facebook_url?: string;
  created_at: string | null;
  updated_at: string | null;
}

const useGlobalConfig = () => {

  const [config, setConfig] =
    useState<GlobalConfig | null>(null);

  const [loading, setLoading] =
    useState(true);

  const [error, setError] =
    useState<string | null>(null);

  useEffect(() => {

    let isMounted = true;

    const fetchConfig = async () => {

      try {

        // =========================
        // Local Cache
        // =========================
        const cachedConfig =
          localStorage.getItem(
            "globalConfig"
          );

        if (cachedConfig) {

          setConfig(
            JSON.parse(cachedConfig)
          );

          setLoading(false);
        }

        // =========================
        // API Call
        // =========================
        console.time(
          "Global Config API"
        );

        const result: any =
          await api.get(
            "/global-config"
          );

        console.timeEnd(
          "Global Config API"
        );

        const data: GlobalConfig =
          result.data.data;

        if (
          isMounted &&
          data
        ) {

          setConfig(data);

          // Save Cache
          localStorage.setItem(
            "globalConfig",
            JSON.stringify(data)
          );
        }

      } catch (err) {

        console.error(
          "Error fetching global config:",
          err
        );

        setError(
          "Unable to load global config."
        );

      } finally {

        setLoading(false);
      }
    };

    fetchConfig();

    return () => {
      isMounted = false;
    };

  }, []);

  return {
    config,
    loading,
    error,
  };
};

export default useGlobalConfig;