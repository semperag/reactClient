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

  while (looper > 46) {
    startTime = startTime - 50;
    looper = looper - 50;
}
startTime = startTime + 294;

const onAdd = () => {


dispatch(startAddingMemory(year, month, day, startTime, heightNumber, message));
}

return (
  <div className="memories-root">
    <div id="app-name">Calendar</div>
    <div id="calendar-day">



      
    <div id="calendar-times">
        <div id="time-selector">
            <select id="first-times"
                value={start}
                onChange={e => setStart(parseInt(e.target.value))}
            >
                <option value="1">12:00am</option>
                <option value="2">1:00am</option>
                <option value="3">2:00am</option>
                <option value="4">3:00am</option>
                <option value="5">4:00am</option>
                <option value="6">5:00am</option>
                <option value="7">6:00am</option>
                <option value="8">7:00am</option>
                <option value="9">8:00am</option>
                <option value="10">9:00am</option>
                <option value="11">10:00am</option>
                <option value="12">11:00am</option>
                <option value="13">12:00pm</option>
                <option value="14">1:00pm</option>
                <option value="15">2:00pm</option>
                <option value="16">3:00pm</option>
                <option value="17">4:00pm</option>
                <option value="18">5:00pm</option>
                <option value="19">6:00pm</option>
                <option value="20">7:00pm</option>
                <option value="21">8:00pm</option>
                <option value="22">9:00pm</option>
                <option value="23">10:00pm</option>
                <option value="24">11:00pm</option>
            </select>

            <span> - </span>

            <select id="second-times"
                value={end}
                onChange={e => setEnd(parseInt(e.target.value))}
            >
                <option value="2">1:00am</option>
                <option value="3">2:00am</option>
                <option value="4">3:00am</option>
                <option value="5">4:00am</option>
                <option value="6">5:00am</option>
                <option value="7">6:00am</option>
                <option value="8">7:00am</option>
                <option value="9">8:00am</option>
                <option value="10">9:00am</option>
                <option value="11">10:00am</option>
                <option value="12">11:00am</option>
                <option value="13">12:00pm</option>
                <option value="14">1:00pm</option>
                <option value="15">2:00pm</option>
                <option value="16">3:00pm</option>
                <option value="17">4:00pm</option>
                <option value="18">5:00pm</option>
                <option value="19">6:00pm</option>
                <option value="20">7:00pm</option>
                <option value="21">8:00pm</option>
                <option value="22">9:00pm</option>
                <option value="23">10:00pm</option>
                <option value="24">11:00pm</option>
            </select>
            <textarea value={message} onChange={e =>setMessage(e.target.value)}/>
            <button id="insert" onClick={onAdd}>New Event</button>
        </div>
                  
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
          <div id="today">{weekday[date.getDay() - 1]}</div>
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
            
            {memories.map(memory => <Memory key={memory.id} memory={memory} />)}
        </div>
      </div>
    </div>
  </div>
  );
}

export default App;
