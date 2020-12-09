import React from 'react';

export function TimeSlot(props) {
    const slot = props.slot;
    let startTime = (24 - parseInt(slot.start)) * 50 + 2;
    const endTime = (24 - parseInt(slot.end)) * 50 ;
    const heightNumber = startTime - endTime - 4;
    let looper = heightNumber;

    while (looper > 46) {
        startTime = startTime - 50;
        looper = looper - 50;
    }
    startTime = startTime + 50;

    console.log(startTime + '   -   ' + endTime);

    return (
        <div className="example" style={{
            bottom: startTime.toString() + 'px',
            height: heightNumber + 'px'
        }}>
            <span >{slot.name}</span>
        </div>
    );
}