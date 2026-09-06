export const formatPrice = (price: number) => {
  return `${price} DH`;
};

export const formatDate = (date: Date) => {
  return new Intl.DateTimeFormat('en-GB', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  }).format(date);
};
