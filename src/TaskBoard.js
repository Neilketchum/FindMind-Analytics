import React, { useState } from 'react'
import Navbar from './Navbar'
import "./TaskBoard.css"
import AddCircleRoundedIcon from '@material-ui/icons/AddCircleRounded';
import MoreVertRoundedIcon from '@material-ui/icons/MoreVertRounded';
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import RenderFormData from './RenderFormData';
function TaskBoard() {
    const [modal, setmodal] = useState(false);
    const [date, setDate] = useState(new Date());
    const [taskName, settaskName] = useState("");
    const [taskdesc, settaskdesc] = useState("");
    const [formdata, setformdata] = useState([]);
    const handleCalendarClose = () => console.log("Calendar closed");
    const handleCalendarOpen = () => console.log("Calendar opened");
    const handleSubmit = (e) => {
        e.preventDefault();
        setformdata(formdata=>[...formdata,{
            taskName: taskName,
            taskdesc: taskdesc,
            date: date
        }])
        console.log(formdata)
    }
    const addTask = () => {
        setmodal(!modal)
    }
    return (
        <div className="taskBoard">
            <Navbar />

            <div className="tasks">
                <div className="task">
                    <div className="taskNav">
                        <h2 className="task__heading">My Tasks</h2>
                        <MoreVertRoundedIcon style={{ color: "blue", fontSize: "20px", marginTop: "10px", cursor: "pointer" }} />
                    </div>

                    <div className="task__header">
                        <AddCircleRoundedIcon style={{ color: "blue", fontSize: "20px", cursor: "pointer" }} onClick={addTask} />
                        <p>Add a task</p>
                    </div>
                    {modal ? <div className="task__form">
                        <form className="form">
                            <DeleteOutlinedIcon onClick={() => setmodal(false)} style={{ fontSize: "30px", cursor: "pointer" }}></DeleteOutlinedIcon>
                            <p></p>
                            <TextField onChange={(e) => settaskName(e.target.value)} label="Enter Task Name" style={{ width: "350px", marginBottom: "12px" }} variant="outlined" />
                            <TextField
                                id="filled-multiline-static"
                                label="Add Details"
                                multiline
                                rows={4}
                                variant="filled"
                                onChange={(e) => settaskdesc(e.target.value)}
                            />
                            <div className="datePick">
                                <DatePicker
                                    selected={date}
                                    onChange={date => setDate(date)}
                                    onCalendarClose={handleCalendarClose}
                                    onCalendarOpen={handleCalendarOpen}
                                />
                            </div>
                            <Button variant="contained" color="primary" type="submit" onClick={handleSubmit}>
                                Add Task
                            </Button>
                        </form>
                    </div> : <></>}
                    {formdata.length>0?formdata.map((data) => (
                            <RenderFormData taskName = {data.taskName} taskdesc = {data.taskdesc} date = {date} />
                            )):<></>}

                </div>


            </div>
        </div>
    )
}

export default TaskBoard
