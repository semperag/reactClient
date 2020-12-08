import React from 'react';

export function TimeSlot(props) {
    const slot = props.slot;
    const startTime = (25 - parseInt(slot.start)) * 30 ;
    const endTime = (25 - parseInt(slot.end)) * 30 ;
    const heightNumber = startTime - endTime - 2;

    console.log(startTime + '   -   ' + endTime);

    return (
        <div className="example" style={{
            bottom: startTime.toString() + 'px',
            height: heightNumber + 'px'
        }}>
            <span >{props.start} - {props.end}</span>
        </div>
    );
}