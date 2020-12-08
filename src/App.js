import React, { useState } from 'react';
import './App.css';

import {Inserter} from './inserter';
//import {CalendarDay} from './calendarDay';
import {TimeSlot} from './timeSlot';


function App() {
  const [timeSlots, setSlots] = useState([]);

  console.log(timeSlots);

  const addSlot = newSlot => {
    setSlots(timeSlots => [newSlot, ...timeSlots.filter(
    slot => slot.start !== newSlot.start)]);
  }

  return (
    <div id="swatches-root">
      Calendar
      <Inserter add={addSlot}/>
      <div id="calendar-day">
            
            <div id="calendar-times">
                <div id="left-cal">
                    <div className="time">1 AM</div>
                    <div className="time">2 AM</div>
                    <div className="time">3 AM</div>
                    <div className="time">4 AM</div>
                    <div className="time">5 AM</div>
                    <div className="time">6 AM</div>
                    <div className="time">7 AM</div>
                    <div className="time">8 AM</div>
                    <div className="time">9 AM</div>
                    <div className="time">10 AM</div>
                    <div className="time">11 AM</div>
                    <div className="time">12 PM</div>
                    <div className="time">1 PM</div>
                    <div className="time">2 PM</div>
                    <div className="time">3 PM</div>
                    <div className="time">4 PM</div>
                    <div className="time">5 PM</div>
                    <div className="time">6 PM</div>
                    <div className="time">7 PM</div>
                    <div className="time">8 PM</div>
                    <div className="time">9 PM</div>
                    <div className="time">10 PM</div>
                    <div className="time">11 PM</div>
                </div>
                <div id="right-cal">
                  <div id="today">Monday</div>
                    <div className="time-block"></div>
                    <div className="time-block"></div>
                    <div className="time-block"></div>
                    <div className="time-block"></div>
                    <div className="time-block"></div>
                    <div className="time-block"></div>
                    <div className="time-block"></div>
                    <div className="time-block"></div>
                    <div className="time-block"></div>
                    <div className="time-block"></div>
                    <div className="time-block"></div>
                    <div className="time-block"></div>
                    <div className="time-block"></div>
                    <div className="time-block"></div>
                    <div className="time-block"></div>
                    <div className="time-block"></div>
                    <div className="time-block"></div>
                    <div className="time-block"></div>
                    <div className="time-block"></div>
                    <div className="time-block"></div>
                    <div className="time-block"></div>
                    <div className="time-block"></div>
                    <div className="time-block"></div>
                    <div className="time-block"></div>
                    {timeSlots.map(slot => <TimeSlot
                    key={slot.start} slot=
                    {slot}/>)}
                </div>
            </div>
        </div>
    </div>
  );
}

export default App;
