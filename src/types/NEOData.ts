export type NEO = {
  id: string;
  name: string;
  nasa_jpl_url: string;
  close_approach_data: {
    close_approach_date: string;
    miss_distance: {
      kilometers: string;
    };
    relative_velocity: {
      kilometers_per_hour: string;
    };
  }[];
};

export type NEOData = {
  near_earth_objects: Record<string, NEO[]>;
};

export interface NEOCardProps {
  neo: NEO;
}
