function temp(): Result<string> {
  if (Math.random() > 0.5) {
    return err('err')
  }

  return 'ok'
}

function main() {
  const foo = temp()

  if (is_error(foo)) {
    log(foo.message)

    return
  }

  log(foo.toLowerCase())
}

main()
