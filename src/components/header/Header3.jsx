import { Box, Container, IconButton, ListItemIcon, ListItemText, Typography } from '@mui/material'
import React, { useState } from 'react'
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

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
       sx={{ ".MuiPaper-root":{width:222}   }}
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
<IconButton>
  <MenuIcon/>
</IconButton>
    </Container>
  )
}

export default Header3