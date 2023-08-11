import   { useContext, useState } from "react";
import { ColorModeContext } from "../../theme";
import { Box, IconButton, List, ListItem, ListItemText, Menu, MenuItem, Stack, Typography, useTheme } from "@mui/material";
import { DarkModeOutlined, LightModeOutlined } from "@mui/icons-material";
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';


const options = [
  'Ar',
  'En'

];


const Header1 = () => {
  const colorMode = useContext(ColorModeContext);
  const theme = useTheme();

  const [anchorEl, setAnchorEl] = useState(null)
  const [selectedIndex, setSelectedIndex] = useState(1);
  const open = Boolean(anchorEl);
  const handleClickListItem = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (event,index ) => {
    setSelectedIndex(index);
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (

    <Box sx={{bgcolor:"#2B3445"}}>
<Stack direction={"row"}  alignItems={"center"}> 
     <Typography sx={
      {bgcolor:"#D23f57",
      p:"3px 10px",
       borderRadius:"12px",
        color:"#fff" ,
         fontWeight:"bold",
         mr:2,

        
        }
         
         }>

       hot 
     </Typography>
     <Typography sx={{ fontWeight:"30px"}}>

free expres shopi
</Typography>

<Box flexGrow={1} />
 {/* start darkmodd icon */}
    <div>
    {theme.palette.mode === "light" ? (
      <IconButton
        onClick={() => {
          localStorage.setItem(
            "mode",
            theme.palette.mode === "dark" ? "light" : "dark"
          );
          colorMode.toggleColorMode();
        }}
        color="inherit"
      >
        <LightModeOutlined fontSize="small"/>
      </IconButton>
    ) : (
      <IconButton
        onClick={() => {
          localStorage.setItem(
            "mode",
            theme.palette.mode === "dark" ? "light" : "dark"
          );
          colorMode.toggleColorMode();
        }}
        color="inherit"
      >
        <DarkModeOutlined fontSize="small" />
      </IconButton>
    )}
  </div>
  {/* end darkmoddd */}



  <List
        component="nav"
        aria-label="Device settings"
        sx={{ bgcolor: 'background.paper' }}
      >
        <ListItem
          button
          id="lock-button"
          aria-haspopup="listbox"
          aria-controls="lock-menu"
          aria-label="when device is locked"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClickListItem}
        >
          <ListItemText
            primary="When device is locked"
            secondary={options[selectedIndex]}
          />
        </ListItem>
      </List>
      <Menu
        id="lock-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'lock-button',
          role: 'listbox',
        }}
      >
        {options.map((option, index) => (
          <MenuItem
            key={option}
            disabled={index === 0}
            selected={index === selectedIndex}
            onClick={(event) => handleMenuItemClick(event, index)}
          >
            {option}
          </MenuItem>
        ))}
      </Menu>

  <TwitterIcon fontSize="small"  />
  <FacebookIcon fontSize="small" />
  <InstagramIcon  fontSize="small"/>
  </Stack>
  </Box>
  )
}

export default Header1