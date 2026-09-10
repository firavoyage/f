type table = {
  table: (string | number)[][]
}

export function Table({ table }: table) {
  return (
    <div className="table">
      <table className="table_content">
        <thead className="thead">
          <tr className="tr">
            {map(table[0], (cell) => (
              <th className="th">{cell}</th>
            ))}
          </tr>
        </thead>
        <thead className="tbody">
          {map(table.slice(1), (row) => (
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
    </div>
  )
}
