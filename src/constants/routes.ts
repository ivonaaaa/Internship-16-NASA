export type Routes = {
  [key: string]: string;
};

export const routes: Routes = {
  HOME: "/",
  APOD: "/astronomy-picture-of-the-day",
  MRP: "/mars-rover-photos",
  NEO: "near-earth-objects",
  EI: "/earth-imagery",
  DETAILS: "/details/:type/:id",
  NOT_FOUND: "*",
};
