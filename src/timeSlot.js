import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {enterEditMode, leaveEditMode, startSavingMemory, startDeletingMemory} from './actions';

//const months = ["January", "February", "March", "April",
//"May", "June", "July", "August", "September", "October",
//"November", "December"];

export function TimeSlot(props) {
    const memory = props.slot;
    const slot = props.slot;
    const dispatch = useDispatch();
    //const [year, setYear] = useState(memory.year);
    //const [month, setMonth] = useState(memory.month);
    //const [day, setDay] = useState(memory.day);
    const [message, setMessage] = useState(slot.message);

    const onEdit = () => {
        dispatch(enterEditMode(memory));
    }

    const onCancel = () => {
        dispatch(leaveEditMode(memory));
    }

    const onSave = () => {
        dispatch(startSavingMemory({
            id: memory.id,
            message,
        }));
    }

    const onDelete = () => {
        dispatch(startDeletingMemory(memory));
        props.remove(message);
    }

    
    let startTime = (24 - parseInt(slot.start)) * 50 + 2;
    const endTime = (24 - parseInt(slot.end)) * 50 ;
    const heightNumber = startTime - endTime - 4;
    let looper = heightNumber;

    while (looper > 46) {
        startTime = startTime - 50;
        looper = looper - 50;
    }
    startTime = startTime + 50;

    if (memory.isEditing) {
        <div className="example" style={{
            bottom: startTime.toString() + 'px',
            height: heightNumber + 'px'
        }}>
            <span className="delete-button" onClick={() => 
                props.remove(message)}>&#x2716;</span>
            <button onClick={onSave}>save</button>
            <button onClick={onCancel}>cancel</button>
            <textarea value={message} onChange={e =>
                    setMessage(e.target.value)}/>
        </div>
    } else {
        return (
            <div className="example" style={{
                bottom: startTime.toString() + 'px',
                height: heightNumber + 'px'
            }}>
                <button onClick={onEdit}>edit</button>
                <span className="delete-button" onClick={onDelete}>&#x2716;</span>
                <span >{message}</span>
            </div>
        );
    }
}