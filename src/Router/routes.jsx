import { createBrowserRouter } from "react-router";
import MainLayOut from "../Layout/MainLayOut";
import Home from "../Pages/Home";
import UpcomingEvent from "../Pages/UpcomingEvent";
import About from "../Pages/About";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import CreateEvent from "../Pages/CreateEvent";
import EventDetails from "../Pages/EventDetails";
import Loading from "../Component/Loading";
import Error from "../Component/Error";
import ManageEvent from "../Pages/ManageEvent";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayOut,
    hydrateFallbackElement: <Loading></Loading>,
    errorElement: <Error></Error>,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/upcoming-event",
        Component: UpcomingEvent,
        loader: () => fetch("http://localhost:3000/create-event"),
      },
      {
        path: "/about",
        Component: About,
      },
      {
        path: "/login",
        Component: Login,
      },
      {
        path: "/register",
        Component: Register,
      },
      {
        path: "/create-event",
        element: <CreateEvent></CreateEvent>,
      },
      {
        path: "/event-details/:id",
        element: <EventDetails></EventDetails>,
        loader: ({ params }) =>
          fetch(`http://localhost:3000/create-event/${params.id}`),
      },
      {
        path: "/manage-event",
        element: <ManageEvent></ManageEvent>,
      },
    ],
  },
]);
