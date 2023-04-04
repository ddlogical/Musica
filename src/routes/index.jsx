import { createBrowserRouter, Navigate } from "react-router-dom";
import AppLayout from "./AppLayout";
import ErrorPage from "../pages/ErrorPage";
import HomePage from "../pages/HomePage";
import CartRoute from "../pages/CartPage";
import PickedOutPage from "../pages/PickedOutPage";
import ListenPage from "../pages/ListenPage";
import EventsPage from "../pages/EventsPage";
import ContactsPage from "../pages/ContactsPage";

export const router = createBrowserRouter([
	{
		 path: "/",
		 element: <AppLayout />,
		 errorElement: <ErrorPage />,
		 children: [
			  {
					index: true,
					element: <Navigate to='shop' replace />
			  },
			  {
					path: 'shop',
					element: <HomePage />
			  },
			  {
					path: 'cart',
					element: <CartRoute />
			  },
			  {
					path: 'picked-out',
					element: <PickedOutPage />
			  },
			  {
					path: 'listen',
					element: <ListenPage />
			  },
			  {
					path: 'events',
					element: <EventsPage />
			  },
			  {
					path: 'contacts',
					element: <ContactsPage />
			  }
		 ]
	}
]);