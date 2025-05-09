import {createBrowserRouter} from "react-router";
import App from "../layout/App";
import HomePage from "../../features/home/HomePage.tsx";
import TicketDashboard from "../../features/tickets/dashboard/TicketDashboard.tsx";
import TicketForm from "../../features/tickets/form/TicketForm.tsx";
import TicketDetail from "../../features/tickets/details/TicketDetail.tsx";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {path: '', element: <HomePage /> },
            {path: 'tickets', element: <TicketDashboard />},
            {path: 'tickets/:id', element: <TicketDetail />},
            {path: 'createTicket', element: <TicketForm key='create' />},
            {path: 'manage/:id', element: <TicketForm />},
        ]
    }
]);