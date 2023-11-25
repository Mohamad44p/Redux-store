import * as React from 'react';
import { useState, useEffect } from "react";
import { Card, CardContent, CardMedia, Typography, Box , Button  } from '@mui/material';
import { styled } from '@mui/material/styles';
import {useDispatch} from 'react-redux';
import { add } from '../store/cartSlice';

const StyledCard = styled(Card)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  maxWidth: 345,
  height: '530px',
  margin: 'auto',
  padding : '40px',
  transition: 'transform 0.15s ease-in-out, box-shadow 0.15s ease-in-out',
  cursor: 'pointer',
  background: 'linear-gradient(0deg, #FBAB7E 0%, #F7CE68 100%)', 
  color: theme.palette.getContrastText('#FBAB7E'), 
  '&:hover': {
    transform: 'scale(1.03)',
    boxShadow: theme.shadows[5],
  },
}));

const StyledCardMedia = styled(CardMedia)({
  display : 'flex',
  width: '200px', 
  
  justifyContent : 'center',
  alignItems : 'center',
  objectFit: 'contain', 
  backgroundSize: 'contain', 
  margin: '0.5rem 0', 
});

const StyledCardContent = styled(CardContent)({
  flexGrow: 1,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
});

const Product = () => {
  const [products, getProducts] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(data => data.json())
      .then(data => {
        const productsWithPrice = data.map(product => ({
          ...product,
          price: (Math.random() * 100).toFixed(2) 
        }));
        getProducts(productsWithPrice);
      })
  }, []);

  const addToCart = (product) =>{
    dispatch(add(product))
  }

  const cards = products.map(product => (
    <Box key={product.id} sx={{ maxWidth: 345, width: '100%', margin: 2 }}>
      <StyledCard>
        <StyledCardMedia
          component="img"
          image={product.image}
          alt={product.title}
        />
        <StyledCardContent>
          <Typography gutterBottom variant="h6" component="div">
            {product.title}
          </Typography>
          <Typography variant="body2">
            USD : {product.price}
          </Typography>
          <Button 
            variant="contained" 
            onClick={() => addToCart(product)}
            sx={{ 
              marginTop: 'auto',
              backgroundColor: '#c57040',
              backgroundImage: 'linear-gradient(62deg, #c57040 0%, #261d07 100%)',
              '&:hover': {
                backgroundColor: '#cf1b1b',
                backgroundImage: 'linear-gradient(62deg, #cf1b1b 0%, #a28749 100%)',
              },
              width: '100%', 
              borderRadius: 0, 
            }}
          >
            Add To Cart
          </Button>
        </StyledCardContent>
      </StyledCard>
    </Box>
  ));

  return (
    <>
      <Typography variant="h4" component="h1" gutterBottom textAlign="center" mb={10} mt={10}>
        Product Dashboard
      </Typography>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'stretch', gap: 2, padding: 3 }}>
        {cards}
      </Box>
    </>
  );
}

export default Product;
