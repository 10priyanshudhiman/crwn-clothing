import React from 'react';

import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey  =  'pk_test_51IxetASHim5zk2VMM63hXgmogPlxc5lwmisX4Bgesc3D7PsDR06DmhBX4qHPwMTS4K951DnpaD0Ip9PXDzNQcUmK00rhEUaYib';


    const onToken = token => {
        console.log(token);
        alert('Payment Succesfull');
    }


    return (
        <StripeCheckout

        label= 'Pay Now'
        name= 'MY SHOP Clothing Ltd.'
        billingAddress
        shippingAddress
        image = 'https://svgshare.com/i/CUz.svg'
        description = {`Your total is $${price}`}
        amount = {priceForStripe}
        panelLabel = 'Pay Now'
        token= {onToken}
        stripeKey = {publishableKey}


        />
    )
};

export default StripeCheckoutButton;