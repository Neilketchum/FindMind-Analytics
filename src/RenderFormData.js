import React from 'react'
import Button from '@material-ui/core/Button';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import AlarmIcon from '@material-ui/icons/Alarm';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import { green } from '@material-ui/core/colors';
import { withStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
const GreenRadio = withStyles({
    root: {
      color: green[400],
      '&$checked': {
        color: green[600],
      },
    },
    checked: {},
  })((props) => <Radio color="default" {...props} />);
  
function RenderFormData({ taskName, taskdesc ,date,completed}) {
    const [selectedValue, setSelectedValue] = React.useState(completed);
    var comp = completed;
    const handleChange = (event) => {
        setSelectedValue(!selectedValue);
        comp = selectedValue;
      };
    
    return (
        <div>
            {selectedValue?<div>
                <div className="task_notComplete">
                <CheckCircleOutlineIcon style={{ fontSize: "22px" ,color:"yellowgreen"}} onClick = {handleChange}/>
                <h2 className="task_notComplete_head">{taskName}</h2>
                <AlarmIcon className="task__alarm" style={{ fontSize: "22px" ,color:"yellowgreen"}} />
            </div>
            <div className="task__desc">
                {taskdesc}
                <br />
            </div>
            <Button style={{ backgroundColor: "azure", padding: "4px", margin: "5px", marginLeft: "60%", width: "100px" }}><h4>{date.toString().substring(0,10)}</h4></Button>
            </div>:<div>
            <div className="task_notComplete">
            <GreenRadio
                checked={selectedValue}
                onClick={handleChange}
                value="c"
                name="radio-button-demo"
                inputProps={{ 'aria-label': 'C' }}
                style = {{fontSize:"22px",marginTop:"-10px"}}
            />
                <h2 className="task_notComplete_head blk">{taskName}</h2>
                <AlarmIcon className="task__alarm" style={{ fontSize: "22px" }} />
            </div>
            <div className="task__desc">
                {taskdesc}
                <br />
            </div>
            <Button style={{ backgroundColor: "azure", padding: "4px", margin: "5px", marginLeft: "60%", width: "100px" }}><h4>{date.toString().substring(0,10)}</h4></Button>
            </div>
            }
            
        </div>
    )
}

export default RenderFormData;
