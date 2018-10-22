import { APPLY_DISCOUNT } from '../constants';

export function applyDiscount(discount) {
  return {
    type: APPLY_DISCOUNT,
    discount
  };
}
