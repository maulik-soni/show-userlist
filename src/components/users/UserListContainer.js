import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import UserListItem from './UserListItem';
import CircularProgress from '@material-ui/core/CircularProgress';
import { fetchUsers } from './../../request/api';
import { Typography } from '@material-ui/core';
import { Paper, InputBase, Container, IconButton, Tooltip, Collapse, Slider } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import FilterListIcon from '@material-ui/icons/FilterList';
import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: '10px',
  },
  loader:{
    textAlign: 'center',
    padding: '10px 0'
  },
  inline: {
    display: 'inline'
  },
  searchFilterContainer:{
    display:"flex",
  },
  search: {
    position: 'relative',
    width: '100%',
  },
  searchIcon: {
    width: theme.spacing(1) * 5,
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
    width: '100%',
  },
  inputInput: {
    paddingTop: theme.spacing(1) * 1.5,
    paddingRight: theme.spacing(1),
    paddingBottom: theme.spacing(1) * 1.5,
    paddingLeft: theme.spacing(1) * 5,
    transition: theme.transitions.create('width'),
    width: '100%',
  },
  filterContainer:{
    marginTop: theme.spacing(1),
    padding: theme.spacing(1) * 2
  },
  filterHeader:{
    display: 'flex',
    alignItems: "center",
    
    '& h6':{
      flex: 1
    }
  },
  noData:{
    padding: theme.spacing(1) * 2,
    textAlign: "center"
  }
}));

function ageRangeText(value) {
  return `${value}Yrs`;
}

function userNameLengthRangeText(value) {
  return `${value}`;
}

export default function UserListContainer() {
  const classes = useStyles();
  let timer = () => {};
  const [userList, setUserList] = React.useState(null);
  const [searchKey, setSearchKey] = React.useState('');
  const [checked, setChecked] = React.useState(false);
  const [ageRange, setAgeRange] = React.useState([0, 100]);
  const [userNameRange, setUserNameRange] = React.useState(100);

  useEffect(()=>{
    fetchUsers().then((users)=>{
      setUserList(users);
    }).catch((e)=>console.error(e));
  }, []);

  const onSearchHandler = (e)=>{
    const delay = 175; // milliseconds delay in server call
    clearTimeout(timer);
    const searchKey = e.target.value;
    timer = setTimeout(() => {
      setSearchKey(searchKey)
    }, delay);
  }

  const filteredUsers = (list, key)=>{
    const filteredList = list.filter(user => {
      const fullName = (`${user.firstName} ${user.lastName}`) || '';
      const age = user.age;
      const userNameLengthCheck = fullName.length <= userNameRange;
      const ageRangeCheck = age>=ageRange[0] && age<ageRange[1];
      const searchKeyCheck = fullName.toLowerCase().includes(key.toLowerCase());
      const condition = (searchKeyCheck && userNameLengthCheck && ageRangeCheck);
      return condition;
    });
    return filteredList.map((user, index)=><UserListItem key={index} user={user}/>);
  }

  const handleUserAgeRangeChange = (event, newValue) => {
    setAgeRange(newValue);
  };

  const handleUserNameLengthRangeChange = (event, newValue) => {
    setUserNameRange(newValue);
  }

  const handleChange = () => {
    setChecked((prev) => !prev);
  };

  const clearFilter = ()=>{
    setAgeRange([0, 100]);
    setUserNameRange(100);
  }

  return (
    <Container maxWidth="md" className={classes.root}>
      <div className={classes.searchFilterContainer}>
        <Paper className={classes.search} variant="outlined">
          <div className={classes.searchIcon}>
            <SearchIcon />
          </div>
          <InputBase
            placeholder="Search"
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput,
            }}
            onChange={onSearchHandler}
          />
        </Paper>
        <Tooltip title="Filter">
          <IconButton aria-label="filter" color="primary" onClick={handleChange}>
            <FilterListIcon fontSize="inherit" />
          </IconButton>
        </Tooltip>
      </div>
      <Collapse in={checked}>
        <Paper className={classes.filterContainer} variant="outlined">
          <div className={classes.filterHeader}>
            <Typography variant="h6" display="block">
              Filters :
            </Typography>
            <Tooltip title="Clear Filter">
              <IconButton aria-label="clear-filter" className={classes.margin} onClick={clearFilter}>
                <DeleteIcon fontSize="small"/>
              </IconButton>
            </Tooltip>
          </div>
          <Typography id="range-slider">
            User age range
          </Typography>
          <Slider
            value={ageRange}
            onChange={handleUserAgeRangeChange}
            valueLabelDisplay="auto"
            aria-labelledby="user-age-range-slider"
            getAriaValueText={ageRangeText}
          />
          <Typography id="range-slider">
            User name length range
          </Typography>
          <Slider
            onChange={handleUserNameLengthRangeChange}
            getAriaValueText={userNameLengthRangeText}
            value={userNameRange}
            valueLabelDisplay="auto"
            aria-labelledby="user-name-length-range-slider"
          />
        </Paper>
      </Collapse>
      <List>
        {userList 
          ? userList.length && filteredUsers(userList, searchKey)
          : (
            <div className={classes.loader}>
              <CircularProgress/>
            </div>
          )
        }
      </List>
    </Container>
  );
}