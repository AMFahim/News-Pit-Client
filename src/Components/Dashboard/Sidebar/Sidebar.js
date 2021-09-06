import React from 'react';
import './Sidebar.css';
import {
  Drawer as MIUDrawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText 
  } from "@material-ui/core"
import { makeStyles} from '@material-ui/core/styles';
import HomeIcon from '@material-ui/icons/Home';
import AddIcon from '@material-ui/icons/Add';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import { withRouter } from 'react-router';

const useStyles = makeStyles({
  drawer: {
    width: '160px',
 
  }
})

const Sidebar = (props) => {
  const {history} = props;
  const classes = useStyles();
  const itemsList = [
    {
     text: "Home",
     icon: <HomeIcon/>,
     onClick: () => history.push('/')
    },
    {
      text: "Add Article",
      icon: <AddIcon/>,
      onClick: () => history.push('/addArticle')
    },
    {
      text: "Add Admin",
      icon: <PersonAddIcon/>,
      onClick: () => history.push('/addAdmin')
    }
  ] 
  
  return (
    <MIUDrawer variant="permanent" className={classes.drawer}>
     <List className="forResponsive" style={{backgroundColor:'#CCD1D1'}}>
          {itemsList.map((item, index) => {
            const {text, icon, onClick} = item;  
            return(
            <ListItem button key={text} onClick={onClick}>
             { icon && <ListItemIcon>{icon}</ListItemIcon>}
              <ListItemText primary={text} />
            </ListItem>
          )})}
        </List>
    </MIUDrawer>
  );
};

export default withRouter(Sidebar);