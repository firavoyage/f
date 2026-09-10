import 'web/design/app.css'
import 'web/design/utilitarian/utilitarian.css'



import { Graph, Grid, Line, Range, XAxis, YAxis } from 'web/component/graph'

const table = [
  { min: 100.5, rank: 'SSS+', coefficient: 22.4 },
  { min: 100.0, rank: 'SSS', coefficient: 21.6 },
  { min: 99.5, rank: 'SS+', coefficient: 21.1 },
  { min: 99.0, rank: 'SS', coefficient: 20.8 },
  { min: 98.0, rank: 'S+', coefficient: 20.3 },
  { min: 97.0, rank: 'S', coefficient: 20.0 },
  { min: 94.0, rank: 'AAA', coefficient: 16.8 },
  { min: 90.0, rank: 'AA', coefficient: 15.2 },
  { min: 80.0, rank: 'A', coefficient: 13.6 },
  { min: 75.0, rank: 'BBB', coefficient: 12.0 },
  { min: 70.0, rank: 'BB', coefficient: 11.2 },
  { min: 60.0, rank: 'B', coefficient: 9.6 },
  { min: 50.0, rank: 'C', coefficient: 8.0 },
  { min: 0.0, rank: 'D', coefficient: 5.0 },
];

const lines = map(table, (item, index) => {
  const { min, rank, coefficient } = item

  if (index == 0) {
    const { k, label } = { k: min / 100 * coefficient * 50, label: rank }
    // return { k: min / 100 * coefficient * 50, label: rank }

    return (
      <Line {...p({ line: [k], label })}></Line>
    )
  }

  const max = table[index - 1].min - 0.0001

  const line1 = [max / 100 * coefficient * 50]
  const line2 = [min / 100 * coefficient * 50]
  return (
    <Range {...p({ line1, line2, label: rank })}></Range>
  )

  // return [
  //   { k: max / 100 * coefficient * 50, label: `${rank}` },
  //   // { k: max / 100 * coefficient * 50, label: `${rank} max` },
  //   { k: min / 100 * coefficient * 50, label: `` },
  //   // { k: min / 100 * coefficient * 50, label: `${rank} min` },
  // ]
}).flat()

export function App() {
  return (
    <div className="app">
      <Graph {...p({
        aspect_ratio: ((15 - 10) / 0.5) / (((17000 - 10000) / 1000) * 2),
        x: each(10, 15, 0.5),
        y: each(10000, 17000, 500),
      })}>
        <Grid></Grid>
        {
          lines
          // map(lines, (line) => (
          //   <Line {...p({ line: [line.k], label: line.label })}></Line>
          // ))
        }
        <XAxis></XAxis>
        <YAxis></YAxis>
      </Graph>
    </div>
  )
}

