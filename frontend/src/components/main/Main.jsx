import { useTheme } from '@emotion/react';
import { Box, Button, Card, CardActions, CardContent, CardMedia, CircularProgress, Container, Dialog, IconButton, Rating, Stack, ToggleButton, ToggleButtonGroup, Typography } from '@mui/material'
import React, { useState } from 'react'
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";
import CloseIcon from '@mui/icons-material/Close';
import ProductDetails from './ProductDetails';
import { useGetproductByNameQuery } from '../../redux/Product';





const Main = () => {


  const theme = useTheme();
  const [alignment, setAlignment] = useState('left');

  const handleAlignment = (event, newAlignment) => {
    setAlignment(newAlignment);
  };
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  const allProductsAPI = "products?populate=*";
  const menCategoryAPI = "products?populate=*&filters[category][$eq]=men";
  const womenCategoryAPI = "products?populate=*&filters[category][$eq]=women";

  const [myDate, setmyDate] = useState(allProductsAPI);
  
  const { data, error, isLoading } = useGetproductByNameQuery('products?populate=*')
  console.log(data)

  if (isLoading) {
    return (
      <Box sx={{ py: 11, textAlign: "center" }}>
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Container
        sx={{
          py: 11,
          textAlign: "center",
        }}
      >
        <Typography variant="h6">
          {
            // @ts-ignore
            error.error
          }
        </Typography>

        <Typography variant="h6">Please try again later</Typography>
      </Container>
    );
  }
 if (data) {
  return (
    <Container  sx={{py:6}} >
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
          <ToggleButton  sx={{color:theme.
// @ts-ignore
          palette.text.primary}}  className='myButton'   value="left" aria-label="left aligned">
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
    <Stack direction={"row"}flexWrap={"wrap"} justifyContent={"space-between"}>
    
    {data.data.map((item)=>{
    return(
    <Card key={item}  sx={{
                        maxWidth: 333,
                        mt: 6,
                        ":hover .MuiCardMedia-root ": {
                          rotate: "1deg",
                          scale: "1.1",
                          transition: "0.35s",
                        },
                      }}>
          <CardMedia
            sx={{ height: 277 }}
            // @ts-ignore
            image={`${import.meta.env.VITE_BASE_URL}
            ${item.attributes.productimag.data[0].attributes.url}`}
            title="green iguana"
          />
          <CardContent>
            <Box sx={{display:"flex",justifyContent:"space-between"}}>
            <Typography gutterBottom variant="h5" component="div">
           {item.attributes.producttitle  }
            </Typography>
            <Typography gutterBottom variant="h5" component="div">
           {item.attributes.productPrice  }
            </Typography>
            </Box>
          
            <Typography variant="body2" color="text.secondary">
            {item.attributes.productdescription  }
            </Typography>
          </CardContent>
          <CardActions sx={{justifyContent:"space-between"}}>
     
    
          <Button  onClick={handleClickOpen}  size="large"> 
          <AddShoppingCartOutlinedIcon
                            sx={{ mr: 1 }}
                            fontSize="small"
                          />
          Add to cart
          </Button>
          <Rating precision={0.5} name="read-only" value=       {item.attributes.productrating  }   readOnly />
          </CardActions>
        </Card>
    
    )
    
    })}
    
    </Stack>
    
    
    <Dialog sx={{".MuiPaper-root":{ minWidth:{xs:"100%", md:800} }}}
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
    
    <IconButton sx={{position:"absolute",top:0,right:0,":hover":{rotate:"160deg", color:"red", transition:"0.5s"}}}  onClick={handleClose}>
          <CloseIcon/>
                  
        </IconButton>
    <ProductDetails />
          </Dialog>
    </Container>
      ) 
 }
}

export default Main