const routes = [
  {
    name: "District Dashboard",
    routes: [
      {
        path: "/district/capacity",
        name: "Capacity",
      },
      {
        path: "/district/patient",
        name: "Patient",
      },
      {
        path: "/district/tests",
        name: "Tests",
      },
      {
        path: "/district/covid",
        name: "Covid",
      },
      {
        path: "/district/oxygen",
        name: "Oxygen",
      },
    ],
  },
  {
    href: "https://balliacovidcare.in/",
    name: "Care",
  },
];

export default routes;
