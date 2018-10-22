import { APPLY_DISCOUNT } from '../../actions/constants';

const initialState = {
  cart: [
    {
      title: 'OFM Essentials Racecar-Style Leather Gaming Chair',
      img:
        'https://i5.walmartimages.com/asr/e73e1252-642c-4473-93ea-fd3b564a7027_1.3e81ea58fa3042452fe185129a4a865f.jpeg?odnHeight=450&odnWidth=450&odnBg=FFFFFF',
      quantity: 1,
      price: 250.0,
      actualColor: 'blue'
    },
    {
      title: 'OFM Essentials Racecar-Style Leather Gaming Chair',
      img:
        'https://i5.walmartimages.com/asr/e73e1252-642c-4473-93ea-fd3b564a7027_1.3e81ea58fa3042452fe185129a4a865f.jpeg?odnHeight=450&odnWidth=450&odnBg=FFFFFF',
      quantity: 1,
      price: 250.0,
      actualColor: 'blue'
    }
  ],
  subtotal: 500.0,
  savings: -10.0,
  fees: 49.0,
  location: '94085',
  discountApplied: false
};

function purchaseSummaryReducer(state = initialState, action) {
  switch (action.type) {
    case APPLY_DISCOUNT:
      if (!state.discountApplied) {
        return {
          ...state,
          cart: state.cart.map(val => {
            return { ...val, price: val.price - val.price * action.discount };
          }),
          discountApplied: true,
          subtotal: state.subtotal - state.subtotal * action.discount,
          fees: state.fees - state.fees * action.discount
        };
      } else {
        return state;
      }
    default:
      return state;
  }
}

export default purchaseSummaryReducer;
