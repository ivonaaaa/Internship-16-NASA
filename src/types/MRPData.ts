export type MarsPhoto = {
  id: number;
  img_src: string;
  earth_date: string;
  camera: {
    name: string;
    full_name: string;
  };
  rover: {
    name: string;
    landing_date: string;
    launch_date: string;
    status: string;
  };
};

export interface FiltersProps {
  setRover: (rover: string) => void;
  setCamera: (camera: string) => void;
}

export interface PhotoCardProps {
  photo: MarsPhoto;
}

export interface UseMarsPhotosParams {
  rover: string;
  camera?: string;
  page: number;
}
