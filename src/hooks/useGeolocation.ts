import { useLocalStorage } from "@mantine/hooks";
import { useCallback, useEffect, useState } from "react";

export default function useGeolocation(options?: PositionOptions) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<GeolocationPositionError | null>(null);
  const [data, setData] = useState({});

  const [value, setValue] = useLocalStorage<{ lat: number; lon: number } | null>({
    key: "geolocation",
    defaultValue: null,
  });

  const successHandler = useCallback(
    (position: GeolocationPosition) => {
      setLoading(false);
      setError(null);
      setData({ lat: position.coords.latitude, lon: position.coords.longitude });
      setValue({ lat: position.coords.latitude, lon: position.coords.longitude });
    },
    [setValue]
  );

  const errorHandler = (error: GeolocationPositionError) => {
    setError(error);
    setLoading(false);
  };

  const getPosition = useCallback(
    () => navigator.geolocation.getCurrentPosition(successHandler, errorHandler, options),
    [options, successHandler]
  );

  const clearWatchPosition = useCallback(() => {
    const id = navigator.geolocation.watchPosition(successHandler, errorHandler, options);
    return () => navigator.geolocation.clearWatch(id);
  }, [options, successHandler]);

  useEffect(() => {
    if (value) return;

    getPosition();
    return clearWatchPosition();
  }, [clearWatchPosition, getPosition, options, setValue, successHandler, value]);

  return { loading, error, data };
}
