import React, { useState, useEffect } from 'react';
import './App.css';
//import {Memory} from './Memory';
import {useSelector, useDispatch} from 'react-redux';
import {loadDay, startAddingMemory} from './actions';
import {Inserter} from './inserter';
import {TimeSlot} from './timeSlot';

const date = new Date();
const year = date.getFullYear();
const month = date.getMonth() + 1;
const day = date.getDate();

function App() {

  const memories = useSelector(state => state.memories);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadDay(month, day));
  }, [dispatch]);

  const onAdd = () => {
    dispatch(startAddingMemory(year, month, day));
  }

  const addSlot = newSlot => {
    setSlots(timeSlots => [newSlot, ...timeSlots.filter(
    slot => slot.start !== newSlot.start)]);
  }


  //return (
  //  <div className="memories-root">
  //    <button onClick={onAdd}>new memory</button>
  //    {memories.map(memory => <Memory key={memory.id} memory={memory} />)}
  //  </div>
  //);

  //OLD CODE---------------------------
  const [timeSlots, setSlots] = useState([]);

  console.log(timeSlots);

  const removeSlot = message => {
    setSlots(timeSlots => timeSlots.filter( slot => 
      slot.message !== message));
  }


  return (
    <div id="swatches-root">
      <div id="app-name">Calendar</div>
      <Inserter add={onAdd} add={addSlot}/>
      <div id="calendar-day">
      <div id="today">Monday</div>
            
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
                    slot={slot} remove={removeSlot}/>)}
                    {memories.map(slot => <TimeSlot key={slot.id} slot={slot} />)}
                </div>
            </div>
        </div>
    </div>
  );
}

export default App;
