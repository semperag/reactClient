import React, {useState} from 'react';

export function Inserter(props) {
    const [start, setStart] = useState(1);
    const [end, setEnd] = useState(1);
    const [message, setMessage] = useState('');

    return (
        <div id="inserter">

            <div id="left">

                <button id="week">Day/Week</button>
                <select id="day">
                    <option value="monday">Monday</option>
                    <option value="tuesday">Tuesday</option>
                    <option value="wednesday">Wednesday</option>
                    <option value="thursday">Thursday</option>
                    <option value="friday">Friday</option>
                    <option value="saturday">Saturday</option>
                    <option value="sunday">Sunday</option>
                </select>
            </div>
            <div id="mid">
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
            </div>

            <input 
                type="text"
                id="name-input"
                value={message}
                onChange={e => setMessage(e.target.value)}
                placeholder="title"
            />
            <span className="reset-input" onClick={() => 
                setMessage('')}> &#x2716;
            </span>

            <div id="insert">
                <button onClick={() => props.add({start, end, message})}>Insert</button>
            </div>
        </div>
    );
}