import {
  useEffect,
  useState,
} from "react";

import api from "../api";

export interface GlobalConfig {
  id: number;

  year: string;
  issue: string;
  reader: string;

  short_about_us?: string;
  long_about_us?: string;

  youtube_url?: string;
  facebook_url?: string;

  created_at: string | null;
  updated_at: string | null;
}

const CACHE_KEY =
  "globalConfig";

const useGlobalConfig = () => {

  const [config, setConfig] =
    useState<GlobalConfig | null>(
      null
    );

  const [loading, setLoading] =
    useState(true);

  const [error, setError] =
    useState<string | null>(null);

  useEffect(() => {

    let isMounted = true;

    const fetchConfig = async () => {

      try {

        // =====================
        // CACHE
        // =====================
        const cachedData =
          localStorage.getItem(
            CACHE_KEY
          );

        if (cachedData) {

          setConfig(
            JSON.parse(cachedData)
          );

          setLoading(false);
        }

        // =====================
        // API
        // =====================
        const response: any =
          await api.get(
            "/global-config"
          );

        const data =
          response.data.data;

        if (
          isMounted &&
          data
        ) {

          setConfig(data);

          localStorage.setItem(
            CACHE_KEY,
            JSON.stringify(data)
          );
        }

      } catch (err) {

        console.error(
          "Global Config Error:",
          err
        );

        setError(
          "Unable to load data."
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