import React from 'react'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import { ButtonGroup } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import AccountTreeIcon from '@material-ui/icons/AccountTree';
import TextField from '@material-ui/core/TextField';


const useStyles = makeStyles((theme) => ({
    appBar: {
      position: 'relative',
    },
    title: {
      marginLeft: theme.spacing(2),
      flex: 1,
    },
    field: {
        marginTop: 20,
        marginBottom: 20,
        display: 'block'
    }
  }));

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});  


function Dashboard(){

    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
      };
    
      const handleClose = () => {
        setOpen(false);
      };    

    return(
        <div>

{/* Buttons  */}
            <Typography variant="h4" color="primary" gutterBottom>Dashboard</Typography>
            <ButtonGroup  variant="outlined" color="primary">
                <Button onClick={handleClickOpen} startIcon={<PersonAddIcon />} > Add User </Button>  
                <Button startIcon={<AccountTreeIcon />} > Create Role </Button>  
            </ButtonGroup>

{/* Dialogue */}
            <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
                <AppBar className={classes.appBar}>
                <Toolbar>
                    <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
                    <CloseIcon />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}> Add User </Typography>
                    <Button autoFocus color="inherit" onClick={handleClose}> save </Button>
                </Toolbar>
                </AppBar>
                <form noValidate autoComplete="off">
                    <TextField
                        className={classes.field}
                        label="Full Name"
                        id="outlined-size-small"
                        variant="outlined"
                        size="small"
                        fullWidth
                        required
                    />                
                </form>
            </Dialog>
          

        </div>

    )
}

export default Dashboard


