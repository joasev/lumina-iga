import { styled } from '@mui/system';
import Button from '@mui/material/Button';

const StyledButton = styled(Button)(({ size, width }) => ({
  height: size === 'small' ? '36px' : '40px', 
  width: width || 'auto', 
  borderRadius: '24px',
  marginLeft: size === 'small' ? '0px' : '0px', 
  marginRight: '0px',
  fontSize: size === 'small' ? '12px' : '16px',
  fontWeight: size === 'small' ? 'normal': 'bold',
  paddingLeft: '24px', 
  paddingRight: '24px',
  paddingTop: '8px',
  paddingBottom: '8px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  textTransform: 'none', // Prevent uppercase transformation
  borderWidth: size === 'small' ? '1px' : '2px', 
  borderColor: 'currentColor', // Matches the border color to the text color
}));

export default StyledButton;
