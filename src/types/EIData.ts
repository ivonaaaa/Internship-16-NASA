export type EarthImage = {
  url: string;
  date: string;
  latitude: number;
  longitude: number;
};

export type UseEarthImageParams = {
  latitude: number;
  longitude: number;
};
