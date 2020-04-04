import React, { Fragment } from "react";
import Players from "./Players";
import PlayerForm from "./PlayerForm";
import PlayerDetail from "./PlayerDetail";
import Inventory from "./Inventory";

export default function Dashboard() {
  return (
    <Fragment>
        <PlayerDetail />
        <Inventory />
        <PlayerForm />
        <Players />
    </Fragment>
  );
}