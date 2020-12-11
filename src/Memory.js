import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {enterEditMode, leaveEditMode, startSavingMemory, startDeletingMemory} from './actions';

//const months = ["January", "February", "March", "April",
//"May", "June", "July", "August", "September", "October",
//"November", "December"];

export function Memory(props) {
    const memory = props.memory;
    const dispatch = useDispatch();
    const [year] = useState(memory.year);
    const [month] = useState(memory.month);
    const [day] = useState(memory.day);
    const [message, setMessage] = useState(memory.message);

    const onEdit = () => {
        dispatch(enterEditMode(memory));
    }

    const onCancel = () => {
        dispatch(leaveEditMode(memory));
    }

    const onSave = () => {
        
        dispatch(startSavingMemory({
            id: memory.id,
            year,
            month,
            day,
            message,
            start_time: memory.start_time,
            end_time: memory.end_time
            
        }));
    }

    const onDelete = () => {
        dispatch(startDeletingMemory(memory));
    }

    if (memory.isEditing) {
        return (
            <div className="example" style={{
                bottom: (memory.start_time - (200 - memory.end_time)) + 'px',
                height: 200 + 'px',
                zIndex: '1'
            }}>
                <div className="memory" style={{
                    boxShadow: '5px 10px 8px #888888'
                }}>
                    <div className="memory-left">
                    
                        <button onClick={onSave}>save</button>
                        <button onClick={onCancel}>cancel</button>
                        <button onClick={onDelete} className='delete-button'>delete</button>
                    </div>
                    <div className="memory-right">
                        <textarea value={message} onChange={e =>
                        setMessage(e.target.value)}/>
                    </div>
                </div>
            </div>
        );
        //<input type="text" value={year} onChange={e =>
        //setYear(parseInt(e.target.value))}/>
        //<input type="text" value={month} onChange={e =>
        //setMonth(parseInt(e.target.value))}/>
        //<input type="text" value={day} onChange={e =>
        //setDay(parseInt(e.target.value))}/>
    } else {
        console.log(memory.start_time + ' - ' + memory.end_time);
        console.log(memory.start + ' - ' + memory.end);
        return (
            
            <div className="example" style={{
                bottom: memory.start_time + 'px',
                height: memory.end_time + 'px',
            }}>
                <div className="memory" style={{
                    boxShadow: '5px 10px 8px #888888'
                }}>
                    <div className="memory-left">
                        <button onClick={onEdit}>edit</button>
                    </div>
                    <div className="memory-right">
                        {memory.message}
                    </div>
                </div>
            </div>
        );

        //<span className="year">{memory.year}</span>
        //<span>{months[memory.month - 1]} {memory.day}</span>
    }
}