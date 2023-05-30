import React from 'react';
import Typography from '@material-ui/core/Typography';
import CartItems from "components/CartItems/CartItems";
import {useAppSelector} from "../../../../app/hooks";
import {selectCartItems} from "store/cartSlice";

export default function ReviewCart() {
  const cartItems = useAppSelector(selectCartItems);

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Order summary
      </Typography>
      <CartItems items={cartItems} isEditable/>
    </React.Fragment>
  );
}