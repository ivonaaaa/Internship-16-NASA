export interface ImageCardProps {
  imageUrl: string;
  date: string;
  latitude: number;
  longitude: number;
}

export interface ImageCardPropsWithClick extends ImageCardProps {
  onImageClick: (url: string) => void;
}
