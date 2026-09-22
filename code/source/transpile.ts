function transpile(ast) {
  if (ast.type = 'statement') {
    const { left, right, action } = ast

    const prefix = action == 'declare' ? 'let ' : ''

    return `${prefix}${left} = ${right};`
  }
}

const statement = {
  type: 'statement',
  action: 'declare',
  // action: declare, shadow, update
  left: 'x',
  right: '42'
}



log(transpile(statement))
