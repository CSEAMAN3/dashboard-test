export const formatCurrency = (amount : number) => {
  return (amount/100).toLocaleString('en-us', {
    style: 'currency',
    currency: 'USD'
  })
}