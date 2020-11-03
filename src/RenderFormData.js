import React from 'react'
import Button from '@material-ui/core/Button';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import AlarmIcon from '@material-ui/icons/Alarm';
function RenderFormData({ taskName, taskdesc ,date}) {
    
    return (
        <div>
            <div className="task_notComplete">
                <RadioButtonUncheckedIcon style={{ fontSize: "22px" }} />
                <h2 className="task_notComplete_head">{taskName}</h2>
                <AlarmIcon className="task__alarm" style={{ fontSize: "22px" }} />
            </div>
            <div className="task__desc">
                {taskdesc}
                <br />
            </div>
    <Button style={{ backgroundColor: "azure", padding: "4px", margin: "5px", marginLeft: "60%", width: "100px" }}><h4>{date.toString().substring(0,10)}</h4></Button>
        </div>
    )
}

export default RenderFormData;
