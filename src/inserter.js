import React from 'react';

export function Inserter() {

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
                <select id="first-times">
                    <option value="one-am">1:00am</option>
                    <option value="two-am">2:00am</option>
                    <option value="three-am">3:00am</option>
                    <option value="four-am">4:00am</option>
                    <option value="five-am">5:00am</option>
                    <option value="six-am">6:00am</option>
                    <option value="seven-am">7:00am</option>
                    <option value="eight-am">8:00am</option>
                    <option value="nine-am">9:00am</option>
                </select>
                <span> - </span>
                <select id="second-times">
                    <option value="one-am">1:00am</option>
                    <option value="two-am">2:00am</option>
                    <option value="three-am">3:00am</option>
                    <option value="four-am">4:00am</option>
                    <option value="five-am">5:00am</option>
                    <option value="six-am">6:00am</option>
                    <option value="seven-am">7:00am</option>
                    <option value="eight-am">8:00am</option>
                    <option value="nine-am">9:00am</option>
                </select>
            </div>
            <div id="right">
                <button>Insert</button>
            </div>
        </div>
    );
}