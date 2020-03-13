import "bootstrap/dist/css/bootstrap.css";
import React from 'react';
import {render} from 'react-dom';
import {SummaryActive, SummaryUsers} from "./Summaries";
import {GridComponent} from "./Grid";
import {dataRecords, dataUsers} from "./data";
import {UserDetails} from "./UserDetails";

render(
  <GridComponent data={dataRecords} users={dataUsers}>
    <SummaryActive/>
    <UserDetails/>
  </GridComponent>,
  document.getElementById('app')
);
