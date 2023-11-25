import { useDispatch, useSelector } from 'react-redux'; 
import { Card, CardContent, CardMedia, Typography, Box, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import { remove } from '../store/cartSlice';
const StyledCard = styled(Card)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  maxWidth: 345,
  height: 'auto',
  margin: theme.spacing(2),
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
  height: 194,
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

const Cart = () => {
  const productsInCart = useSelector(state => state.cart);
  
  const handleAddToCartClick = (product) => {
    console.log('Add to cart clicked', product);
  };
  const dispatch = useDispatch();
  const removeToCart = (id) =>{
    dispatch(remove(id));
  }
  const cards = productsInCart.map(product => (
    <Box key={product.id} sx={{ maxWidth: 345, width: '100%', m: 2 }}>
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
            USD: {product.price}
          </Typography>
          <Button 
            variant="contained" 
            onClick={() => removeToCart(product.id)}
            sx={{ 
              mt: 2,
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
            Remove Item
          </Button>
        </StyledCardContent>
      </StyledCard>
    </Box>
  ));

  return (
    <Box
    sx={{
      display: 'flex',
      justifyContent: 'center', 
      alignItems: 'center', 
      width: '100%', 
      marginTop : '3%',
    }}
  >
    {cards.length > 0 ? (
      cards
    ) : (
      <Typography
        sx={{
          fontWeight: 'bold',
          fontSize: '25px',
          color: 'orange',
          textShadow: '1px 1px 2px black',
          textAlign: 'center',
          marginTop: '30vh', // This will push the text down from the top
        }}
      >
        Your cart is empty🧛‍♂️.
      </Typography>
    )}
  </Box>
  
  );
}
 
export default Cart;
