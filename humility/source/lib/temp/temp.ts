function temp(): result<string>  {
  if (Math.random()) {
    return err('err')
  } 

  return 'ok'
}

let a = temp()

function math() {
  
}
