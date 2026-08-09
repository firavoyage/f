log(map([1, 2, 3, 4, 5, 6], (item) => {
  if (item == 4) {
    return halt
  } 
  if (item%2 == 0) {
    return item
  } 
}))