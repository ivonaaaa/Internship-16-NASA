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

export interface ImageCardProps {
  imageUrl: string;
  date: string;
  latitude: number;
  longitude: number;
}

export interface ImageCardPropsWithClick extends ImageCardProps {
  onImageClick: (url: string) => void;
}

export interface MapComponentProps {
  onLocationSelect: (lat: number, lng: number) => void;
}
