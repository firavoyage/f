type table = (string | number)[][]
export function table(output: table) {
  return (
    <table className="table">
      <thead className="thead">
        {map(output[0], (cell) => (
          <th className="th">{cell}</th>
        ))}
      </thead>
      <thead className="tbody">
        {map(output.slice(1), (row) => (
          <tr className="tr">
            {
              map(row, (cell, index) => index == 0 ? (
                <th className="th">{cell}</th>
              ) : (
                <td className="td">{cell}</td>
              ))
            }
          </tr>
        ))}
      </thead>
    </table>
  )
}

export function graph() {

}