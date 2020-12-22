import React from 'react';
import Product from './Product';
import './Men.css';

function Men() {
  return (
    <div className='mens__product'>
      <div className='mens__productColumn'>
        <Product
          image='https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_530,f_auto,q_auto,b_rgb:f5f5f5/https://cdn.allbirds.com/image/upload/f_auto,q_auto/v1/production/colorway/en-US/images/4luxdrVozQHwTXk2HkcIW0/1'
          image2='https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_834,f_auto,q_auto,c_fill,ar_0.7433155080213903/https://images.ctfassets.net/9uo1qvvet3xa/4fUZDsnl4l1pXaWSxPy7Ov/8580f0a8d04f5d836464e538c2757881/M_PCT_WR.jpg'
          id={12345}
          title={`Men's Wool Runners`}
          subTitle={'Natural White (Cream Sole)'}
          price={95}
          description={
            'Our original everyday sneaker made with cozy merino wool.'
          }
        />
      </div>
      <div className='mens__productColumn'>
        <Product
          image='https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_530,f_auto,q_auto,b_rgb:f5f5f5/https://cdn.allbirds.com/image/upload/f_auto,q_auto/v1/production/colorway/en-US/images/6zdZ6PC1jhCrgl1lilg7N8/1'
          image2='https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_834,f_auto,q_auto,c_fill,ar_0.7433155080213903/https://images.ctfassets.net/9uo1qvvet3xa/LjweM1HB8wNMdul8RZBIF/d1b76cf0dd18bb913f6337a09c7b2231/M_PCT_WRM.jpg'
          id={12346}
          title={`Men's Wool Runner Mizzles`}
          subTitle={'Natural Grey (Cream Sole)'}
          price={115}
          description={
            'Our weather-ready sneaker made with merino wool and Puddle Guard™.'
          }
        />
      </div>
      <div className='mens__productColumn'>
        <Product
          image='https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_530,f_auto,q_auto,b_rgb:f5f5f5/https://cdn.allbirds.com/image/upload/f_auto,q_auto/v1/production/colorway/en-US/images/1vj0oKn4Grnojpwe2UkKh1/1'
          image2='https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_834,f_auto,q_auto,c_fill,ar_0.7433155080213903/https://images.ctfassets.net/9uo1qvvet3xa/6s0mLTD6H0uwtXHz5QYm7D/dfe34a367f616eaa5bf6d281b4382c9c/M_PCT_WRUM.jpg'
          id={12347}
          title={`Men's Wool Runner-up Mizzles`}
          subTitle={'Tuke Jo (Cream Sole)'}
          price={135}
          description={
            'Our weather-ready high top made with merino wool and Puddle Guard™.'
          }
        />
      </div>
    </div>
  );
}

export default Men;
