export const formatNumber = (number) => {
  return number && number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}

export const classNames = (...classes) => classes.filter(Boolean).join(' ')
