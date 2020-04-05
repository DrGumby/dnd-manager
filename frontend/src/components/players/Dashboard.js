import React, { Fragment } from "react";
import Players from "./Players";
import PlayerForm from "./PlayerForm";
import PlayerDetail from "./PlayerDetail";
import Inventory from "./Inventory";

export default function Dashboard() {
  return (
    <Fragment>
        <PlayerForm />
        <Players />
    </Fragment>
  );
}