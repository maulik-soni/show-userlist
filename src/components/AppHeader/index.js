import React from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { withRouter } from 'react-router-dom';
import Cookies from 'js-cookie'

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    main:{
      marginTop: "48px"
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }),
);

const AppHeader = (props)=>{
  const classes = useStyles();

  const logOut=()=>{
    Cookies.remove('token');
    props.history.replace('/login');
  }

  return (
    <div className={classes.root}>
      <AppBar position="fixed">
        <Toolbar variant="dense">
          <Typography variant="h6" className={classes.title}>
            Users
          </Typography>
          <Typography variant="h6" className={classes.title} onClick={()=>props.history.replace('/users0')}>
            Users0
          </Typography>
          <Typography variant="h6" className={classes.title} onClick={()=>props.history.replace('/users1')}>
            Users1
          </Typography>
          <Typography variant="h6" className={classes.title} onClick={()=>props.history.replace('/users2')}>
            Users2
          </Typography>
          <Typography variant="h6" className={classes.title} onClick={()=>props.history.replace('/users3')}>
            Users3
          </Typography>
          <Typography variant="h6" className={classes.title} onClick={()=>props.history.replace('/users4')}>
            Users4
          </Typography>
          <Button color="inherit" onClick={logOut}>Log out</Button>
        </Toolbar>
      </AppBar>
      <main className={classes.main}>
        {props.children}
      </main>
    </div>
  );
}

export default withRouter(AppHeader);