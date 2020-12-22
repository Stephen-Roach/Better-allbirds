import React from 'react';
import Product from './Product';
import './Women.css';

function Women() {
  return (
    <div className='womens__product'>
      <div className='womens__productColumn'>
        <Product
          image='https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_530,f_auto,q_auto,b_rgb:f5f5f5/https://cdn.allbirds.com/image/upload/f_auto,q_auto/v1/production/colorway/en-US/images/7jXq1RuwlAkAgSqCcKHFDb/1'
          image2='https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_834,f_auto,q_auto,c_fill,ar_0.7433155080213903/https://images.ctfassets.net/9uo1qvvet3xa/38rNfkbLfvlw6j9kImGvs8/bce6b879237299c761427ec8f16a981a/W_PCT_TS.jpg'
          id={12456}
          title={`Women's Tree Skippers`}
          subTitle={'Chalk (White Sole)'}
          price={95}
          description={
            'Our classic boat shoe made with breezy eucalyptus tree.'
          }
        />
      </div>
      <div className='womens__productColumn'>
        <Product
          image='https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_530,f_auto,q_auto,b_rgb:f5f5f5/https://cdn.allbirds.com/image/upload/f_auto,q_auto/v1/production/colorway/en-US/images/5PIOvGho6fumKEdjq2M914/1'
          image2='https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_834,f_auto,q_auto,c_fill,ar_0.7433155080213903/https://images.ctfassets.net/9uo1qvvet3xa/1NP44yEg2PB6VgewPN9AGo/4c3618f3d1b79637347cc96e8220b0db/W_PCT_WR.jpg'
          id={12457}
          title={`Women's Wool Runners`}
          subTitle={'Natural Grey (Light Grey Sole)'}
          price={95}
          description={
            'Our original everyday sneaker made with cozy merino wool.'
          }
        />
      </div>
      <div className='womens__productColumn'>
        <Product
          image='https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_530,f_auto,q_auto,b_rgb:f5f5f5/https://cdn.allbirds.com/image/upload/f_auto,q_auto/v1/production/colorway/en-US/images/3lzAaTjslhlCa7QeBt4WT5/1'
          image2='https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_834,f_auto,q_auto,c_fill,ar_0.7433155080213903/https://images.ctfassets.net/9uo1qvvet3xa/20CEbvKOYhBTSstykRFOzR/3e479edb4bc1c66538a4018b89f1f357/W_PCT_TT.jpg'
          id={12458}
          title={`Women's Tree Toppers`}
          subTitle={'Charcoal (Charcoal Sole)'}
          price={115}
          description={'Our classic high top made with breezy eucalyptus tree.'}
        />
      </div>
    </div>
  );
}

export default Women;
