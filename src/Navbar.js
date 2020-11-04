import React,{useEffect,useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }));
function Navbar() {
    const classes = useStyles();
    const [avatar,setAvatar] = useState("");
    var randomValue = Math.floor(Math.random() * 1000);
    useEffect(() => {
      fetch(`https://picsum.photos/id/${randomValue}/info`).then(res=>res.json()).then((data)=>setAvatar(data.download_url))
    })
    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" className={classes.title}>
              
            </Typography>
            <Button><Avatar alt="Remy Sharp" src={avatar} /></Button>
          </Toolbar>
        </AppBar>
      </div>
    );
}

export default Navbar
