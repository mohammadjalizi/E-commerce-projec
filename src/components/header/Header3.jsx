import { Box, Container, Drawer, IconButton, ListItemIcon, ListItemText, Typography } from '@mui/material'
import React, { useState } from 'react'
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from "@mui/icons-material/Menu";
import WindowIcon from "@mui/icons-material/Window";
import KeyboardArrowRightOutlinedIcon from "@mui/icons-material/KeyboardArrowRightOutlined";
import {
  SportsEsportsOutlined,
  ElectricBikeOutlined,
  LaptopChromebookOutlined,
  MenuBookOutlined,
  Close,
  ContentCut,
} from "@mui/icons-material";
import { useTheme } from '@emotion/react';
const Header3 = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const theme=useTheme()


// drawerrrr

const [state, setState] =useState({
  top: false,
  left: false,
  bottom: false,
  right: false,
});

const toggleDrawer = (anchor, open) => (event) => {
  if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
    return;
  }

  setState({ ...state, [anchor]: open });
};



  function list(anchor) {
    throw new Error('Function not implemented.');
  }

  return (
    <Container sx={{
display:"flex",
alignItems:"center",
justifyContent:"space-between"

    }} >

<Box>
        <Button
          id="basic-button"
          aria-controls={open ? 'basic-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
          sx={{
  width:222,
  bgcolor:theme.palette.mycolor.main,
  color:theme.palette.text.primary
  
  
          }}
        >
          <WindowIcon/>
          <Typography
              sx={{
                padding: "0",
                textTransform: "capitalize",
                mx: 1,
              }}
            >
              Categories
            </Typography>
            <Box  flexGrow={1}/>
  <KeyboardArrowRightOutlinedIcon/>
        </Button>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            'aria-labelledby': 'basic-button',
          }}
          sx={{ ".MuiPaper-root":{width:222,bgcolor:theme.palette.mycolor.main} }}
        >
          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <ElectricBikeOutlined fontSize="small" />
            </ListItemIcon>

            <ListItemText>Bikes</ListItemText>
          </MenuItem>

          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <LaptopChromebookOutlined fontSize="small" />
            </ListItemIcon>

            <ListItemText>Electronics</ListItemText>
          </MenuItem>

          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <MenuBookOutlined fontSize="small" />
            </ListItemIcon>

            <ListItemText>Books</ListItemText>
          </MenuItem>

          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <SportsEsportsOutlined fontSize="small" />
            </ListItemIcon>

            <ListItemText>Games</ListItemText>
          </MenuItem>
        </Menu>
  
</Box>
  <IconButton  onClick={toggleDrawer("top", true)}>
    <MenuIcon/>
  </IconButton>
  <Drawer
              anchor={"top"}
              open={state["top"]}
              onClose={toggleDrawer("top", false)}
              sx={{".MuiPaper-root":{height:"100%"}}}
            >
         
<Box sx={{width:444,mx:"auto",mt:6, position:"relative",pt:10}}>
    <IconButton sx={{position:"absolute",top:0,right:0}}  onClick={toggleDrawer("top", false)}>
      <CloseIcon/>
              
    </IconButton>
</Box >
          </Drawer>
    </Container>
  )
}

export default Header3