async function generate_mock(receive: fn) {
  for (const i of each(5)) {
    receive(i)
    await sleep(1)
  }
}

generate_mock(log)