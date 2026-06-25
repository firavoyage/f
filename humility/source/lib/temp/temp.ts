function log(){
  console.log(1)
  return true
}

function foo({ bar = log()} = {}){
}

foo({bar: false})

foo({})

foo()
