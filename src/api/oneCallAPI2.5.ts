import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const APIkey = import.meta.env.VITE_REACT_APP_API_KEY;

export const format = "metric";
export const lang = "en";

export const oneCallAPI = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.openweathermap.org/data/2.5/" }),
  endpoints: (builder) => ({
    getOneCallAPI: builder.query({
      query: () => `onecall?lat=54.979733&lon=82.893111&exclude=${format}&appid=${APIkey}`,
    }),
  }),
});

export const { useGetOneCallAPIQuery } = oneCallAPI;
