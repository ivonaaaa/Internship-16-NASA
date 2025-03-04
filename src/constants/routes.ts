export type Routes = {
  [key: string]: string;
};

export const routes: Routes = {
  HOME: "/",
  APOD: "/astronomy-picture-of-the-day",
  MRP: "/mars-rover-photos",
  NEO: "near-earth-objects",
  EI: "/earth-imagery",
  DETAILS: "/details/:id", //valjda ce po ID-ju bit
  NOT_FOUND: "*",
};
