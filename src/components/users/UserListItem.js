import React from 'react';
import { Paper } from '@material-ui/core';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "2px 0",
  }
}));

export default function UserListItem(props) {
  const classes = useStyles();
  const user = new User(props.user);

  return (
    <div className={classes.root}>
      <Paper variant="outlined">
        <ListItem alignItems="center">
          <ListItemAvatar>
            <Avatar alt={user.getFullName()} src="/static/images/avatar/1.jpg" />
          </ListItemAvatar>
          <ListItemText>
            <React.Fragment>
              <Typography
                variant="subtitle1"
                color="textPrimary"
              >
                {user.getFullName()}
              </Typography>
              <Typography
                variant="body2"
                color="textPrimary"
              >
                Account ID : {user.getAccountId()}
              </Typography>
              <Typography
                variant="body2"
                color="textPrimary"
              >
                Age : {user.getAge()}
              </Typography>
            </React.Fragment>
          </ListItemText>
        </ListItem>
      </Paper>
    </div>
  );
}

class User{
  constructor(details){
    this.accountId = details.accountId;
    this.age = details.age;
    this.firstName = details.firstName;
    this.lastName = details.lastName;
  }

  getFullName(){
    return `${this.firstName} ${this.lastName}`;
  }

  getAge(){
    return this.age;
  }

  getAccountId(){
    return this.accountId;
  }
}