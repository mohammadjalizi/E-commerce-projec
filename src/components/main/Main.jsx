import { useTheme } from '@emotion/react';
import { Box, Button, Card, CardActions, CardContent, CardMedia, Container, Rating, Stack, ToggleButton, ToggleButtonGroup, Typography } from '@mui/material'
import React from 'react'
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";
const Main = () => {
  const theme = useTheme();
  const [alignment, setAlignment] = React.useState('left');

  const handleAlignment = (event, newAlignment) => {
    setAlignment(newAlignment);
  };
  return (
<Container  >
<Stack direction={"row"} alignItems={"center"} justifyContent={"space-between"}flexWrap={"wrap"} gap={3}>
<Box >
            <Typography variant="h6">Selected Products</Typography>
            <Typography fontWeight={300} variant="body1">
              All our new arrivals in a exclusive brand selection
            </Typography>
          </Box>
          <ToggleButtonGroup
           sx={{
            ".Mui-selected": {
              border: "1px solid rgba(233, 69, 96, 0.5) !important",
              color: "#e94560",
              backgroundColor: "initial",
            },
          }}
          color='error'
      value={alignment}
      exclusive
      onChange={handleAlignment}
      aria-label="text alignment"
    >
      <ToggleButton  sx={{color:theme.palette.text.primary}}  className='myButton'   value="left" aria-label="left aligned">
         All Products
      </ToggleButton>
      <ToggleButton  sx={{color:theme.palette.text.primary,mx: "16px !important"}}   className='myButton'   value="center" aria-label="centered">
      MEN category
      </ToggleButton>
      <ToggleButton  sx={{color:theme.palette.text.primary}}   className='myButton'  value="right" aria-label="right aligned">
            Women category
      </ToggleButton>
     
    </ToggleButtonGroup>
</Stack>

{/* carttttt */}
<Stack>

<Card sx={{ maxWidth: 333 ,mt:4}}>
      <CardMedia
        sx={{ height: 277 }}
        image="https://mui.com//static/images/cards/contemplative-reptile.jpg"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions sx={{justifyContent:"space-between"}}>
 

      <Button size="large"> 
      <AddShoppingCartOutlinedIcon
                        sx={{ mr: 1 }}
                        fontSize="small"
                      />
      Add to cart
      </Button>
      <Rating name="read-only" value={4} readOnly />
      </CardActions>
    </Card>

</Stack>

</Container>
  )
}

export default Main