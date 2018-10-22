import purchaseSummaryReducer from './index';
import { applyDiscount } from '../../actions/purchaseSummary';

describe('purchaseSummaryReducer', () => {
  let state;
  beforeEach(() => {
    state = {
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
  });
  it('should return the initial state', () => {
    const expectedResult = state;
    expect(purchaseSummaryReducer(undefined, {})).toEqual(expectedResult);
  });

  it('should handle applyDiscount action correctly', () => {
    const discount = 0.2;
    const expectedResult = {
      cart: [
        {
          title: 'OFM Essentials Racecar-Style Leather Gaming Chair',
          img:
            'https://i5.walmartimages.com/asr/e73e1252-642c-4473-93ea-fd3b564a7027_1.3e81ea58fa3042452fe185129a4a865f.jpeg?odnHeight=450&odnWidth=450&odnBg=FFFFFF',
          quantity: 1,
          price: 200.0,
          actualColor: 'blue'
        },
        {
          title: 'OFM Essentials Racecar-Style Leather Gaming Chair',
          img:
            'https://i5.walmartimages.com/asr/e73e1252-642c-4473-93ea-fd3b564a7027_1.3e81ea58fa3042452fe185129a4a865f.jpeg?odnHeight=450&odnWidth=450&odnBg=FFFFFF',
          quantity: 1,
          price: 200.0,
          actualColor: 'blue'
        }
      ],
      subtotal: 400.0,
      savings: -10.0,
      fees: 39.2,
      location: '94085',
      discountApplied: true
    };
    expect(purchaseSummaryReducer(state, applyDiscount(0.2))).toEqual(
      expectedResult
    );
  });
});
