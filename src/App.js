import React, {useState, useEffect} from 'react';
import './App.css';
import {Memory} from './Memory';
import {useSelector, useDispatch} from 'react-redux';
import {loadDay, startAddingMemory} from './actions';

const date = new Date();
const year = date.getFullYear();
const month = date.getMonth() + 1;
const day = date.getDate();

var weekday = new Array(7);
weekday[0]="Monday";
weekday[1]="Tuesday";
weekday[2]="Wednesday";
weekday[3]="Thursday";
weekday[4]="Friday";
weekday[5]="Saturday";
weekday[6]="Sunday";

function App() {

  const [start, setStart] = useState(1);
  const [end, setEnd] = useState(1);
  const [message, setMessage] = useState('');

  const memories = useSelector(state => state.memories);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadDay(month, day));
  }, [dispatch]);

  let startTime = (24 - parseInt(start)) * 50;
  let endTime = (24 - parseInt(end)) * 50 ;
  let heightNumber = startTime - endTime - 4;
  let looper = heightNumber;


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
