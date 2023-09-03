export const formatPrice = new Intl.NumberFormat('en', {
  minimumFractionDigits: 2,
  style: 'currency',
  currency: 'USD',
}).format;
