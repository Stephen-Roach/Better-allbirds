import React from 'react';
import './Stores.css';
import StoreLocations from './StoreLocations';

function Stores() {
  return (
    <div className='stores'>
      <img
        className='stores__img'
        src='https://cdn.allbirds.com/image/upload/f_auto,q_auto/v1/production/pageSectionCard/en-US/images/1REdtEfBdNeoEbdzBAOqZi/1'
        alt='...'
      />

      <StoreLocations
        img={
          'https://cdn.allbirds.com/image/upload/f_auto,q_auto,w_500/production/pageSectionCard/en-US/images/dPqwQYXFIV6B3LEQnaD44/1'
        }
        city={'San Fransicsco'}
        description={
          'Step into an entirely unexpected shoe-buying experience at our location in historic Jackson Square.'
        }
        locationStreet={'57 Hotaling Place'}
        locationCity={'San Francisco, CA 94111'}
        hours={'Everyday: 10am-5pm'}
        daysClosed={'Christmas Day: Closed'}
        phone={'(415) 469-1455'}
      />

      <StoreLocations
        img={
          'https://cdn.allbirds.com/image/upload/f_auto,q_auto,w_500/production/pageSectionCard/en-US/images/4EGclrQnFZaD7O40MfA4I5/1'
        }
        city={'San Fransicsco - Hayes Valley'}
        description={
          'Pop through Hayes Valley and stroll around our second SF location, designed with inspiration from our very own natural materials.'
        }
        locationStreet={'425 Hayes St.'}
        locationCity={'San Francisco, CA 94102'}
        hours={'Everyday: 11am-7pm'}
        daysClosed={'Christmas Day: Closed'}
        phone={'(415) 802-2800'}
      />
      <StoreLocations
        img={
          'https://cdn.allbirds.com/image/upload/f_auto,q_auto,w_500/production/pageSectionCard/en-US/images/6903hsdRLWIXI9do2OTwPB/1'
        }
        city={'Allbirds Outlet - San Francisco'}
        description={
          'Swing by our first self-service outlet store where unique deals and discounts will help you grow your planet-friendly Allbirds collection.'
        }
        locationStreet={
          'SF Premium Outlets, 3228 Livermore Outlets Drive, Suite 675'
        }
        locationCity={'Livermore, CA 94551'}
        hours={'Everyday: 11am-7pm'}
        daysClosed={'Christmas Day: Closed'}
        phone={'(925) 800-3331'}
      />
      <StoreLocations
        img={
          'https://cdn.allbirds.com/image/upload/f_auto,q_auto,w_500/production/pageSectionCard/en-US/images/3q1ikoNdDB4FwhqIpKqWKa/1'
        }
        city={'New York City'}
        description={
          'Head towards the lower part of the island and come experience our totally reimagined retail space in SoHo.'
        }
        locationStreet={'73 Spring St.'}
        locationCity={'New York, NY 10012'}
        hours={'Everyday: 10am-8pm'}
        daysClosed={'Christmas Day: Closed'}
        phone={'(917) 985-6646'}
      />
    </div>
  );
}

export default Stores;
