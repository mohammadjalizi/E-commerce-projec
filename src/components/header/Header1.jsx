import   { useContext } from "react";
import { ColorModeContext } from "../../theme";
import { Box, IconButton, Stack, Typography, useTheme } from "@mui/material";
import { DarkModeOutlined, LightModeOutlined } from "@mui/icons-material";

const Header1 = () => {
  const colorMode = useContext(ColorModeContext);
  const theme = useTheme();
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
        <LightModeOutlined/>
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
        <DarkModeOutlined />
      </IconButton>
    )}
  </div>
  {/* end darkmoddd */}
  </Stack>
  </Box>
  )
}

export default Header1