import   { useContext, useState } from "react";
import { ColorModeContext } from "../../theme";
import { Box, IconButton, List, ListItem, ListItemText, Menu, MenuItem, Stack, Typography, useTheme } from "@mui/material";
import { DarkModeOutlined, Expand, LightModeOutlined } from "@mui/icons-material";
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const options = [
  'AR',
  'EN'

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
 sx={{color:"#fff"}}
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
        sx={{ color:"#fff" }}
      >
        <ListItem
       sx={{
"&:hover":{cursor:"pointer"}

       }}
          id="lock-button"
          aria-haspopup="listbox"
          aria-controls="lock-menu"
          aria-label="when device is locked"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClickListItem}
        >
          <ListItemText sx={{".MuiTypography-root ": {fontSize:"10px",color:"#fff"}}}
     
            secondary={options[selectedIndex]}
          />
         <ExpandMoreIcon/>
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
          <MenuItem sx={{
             fontSize:"11px",
             p:'3px 10px',
             minHeight:"10px"
          }}
            key={option}
          
            selected={index === selectedIndex}
            onClick={(event) => handleMenuItemClick(event, index)}
          >
            {option}
          </MenuItem>
        ))}
      </Menu>

  <TwitterIcon     sx={{fontSize:"16px", color:"#fff"}}    />
  <FacebookIcon    sx={{fontSize:"16px", color:"#fff"}}  />
  <InstagramIcon    sx={{fontSize:"16px", color:"#fff"}}   />
  </Stack>
  </Box>
  )
}

export default Header1