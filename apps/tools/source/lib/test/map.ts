log(map([1, 2, 3, 4, 5, 6], (item) => {
  if (item == 4) {
    return halt(5)
  } 
  if (item%2 == 0) {
    return item
  } 
}))

log(map([1,2,3], v => v)) 

log(map({a:1}, ([k,v]) => ([v,k])))