import React from 'react';
//, {useState}
import './App.css';

import {Inserter} from './inserter';
import {CalendarDay} from './calendarDay';

function App() {
  return (
    <div id="swatches-root">
      Calendar
      <Inserter />
      <CalendarDay />
    </div>
  );
}

export default App;
