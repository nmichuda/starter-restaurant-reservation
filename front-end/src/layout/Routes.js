import React from "react";

import { Redirect, Route, Switch } from "react-router-dom";
import Dashboard from "../dashboard/Dashboard";
import NewReservation from "../Reservations/newReservation";
import NewTable from "../Tables/newTable";
import NotFound from "./NotFound";
import { today } from "../utils/date-time";
import useQuery from "../utils/useQuery";
import SeatReservation from "../Reservations/seatReservation";
import Search from "../Search/search";
import EditReservation from "../Reservations/editReservation";

/**
 * Defines all the routes for the application.
 *
 * You will need to make changes to this file.
 *
 * @returns {JSX.Element}
 */
function Routes() {
       const query = useQuery();
       const date = query.get("date");
  return (
    <Switch>
      <Route exact={true} path="/">
        <Redirect to={"/dashboard"} />
      </Route>
      <Route exact={true} path="/reservations">
        <Redirect to={"/dashboard"} />
      </Route>
      <Route path="/dashboard">
        <Dashboard date={date || today()} />
      </Route>
      <Route path="/reservations/new">
        <NewReservation/>
      </Route>
      <Route path="/reservations/:reservation_id/seat">
        <SeatReservation/>
      </Route>
      <Route path="/reservations/:reservation_id/edit">
        <EditReservation/>
      </Route>
      <Route path="/tables/new">
        <NewTable/>
      </Route>
      <Route path="/search">
        <Search/>
      </Route>
      
      <Route>
        <NotFound />
      </Route>
    </Switch>
  );
}

export default Routes;
