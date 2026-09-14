import { table } from 'action/json yaml toml xml'
import { Scroll } from './scroll'

type table_props = {
  table: table
}

export function render_cell(cell) {
  if (is(cell, 'object')) {
    return (
      <table className="sub_table">
        <tbody className="tbody">
          {
            map(cell, ([k, v]) => (
              <tr className="tr">
                <th className="th">{k}</th>
                <td className="td">{v}</td>
              </tr>
            ))
          }
        </tbody>
      </table>
    )
  }

  return cell
}

export function Table({ table }: table_props) {
  return (
    <div className="table">
      <Scroll {...p({ scrollbar: false })}>
        <table className="table_content">
          <thead className="thead">
            <tr className="tr">
              {map(table[0], (cell) => (
                <th className="th">{cell}</th>
              ))}
            </tr>
          </thead>
          <tbody className="tbody">
            {map(table.slice(1), (row) => (
              <tr className="tr">
                {
                  map(row, (cell, index) => index == 0 ? (
                    <th className="th">{render_cell(cell)}</th>
                  ) : (
                    <td className="td">{render_cell(cell)}</td>
                  ))
                }
              </tr>
            ))}
          </tbody>
        </table>
      </Scroll>
    </div>
  )
}

export function render_table(output: table) {
  return (
    <Table {...p({ table: output })}></Table>
  )
}
