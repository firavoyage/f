import 'sakura.css/css/sakura.css'

import { init_request, post } from 'lib/request'

init_request('http://localhost:9005')

export function App() {
  const { value: quotes, loading: is_loading } = useAsync(async () =>
    post('read'),
  )

  // log({ quotes, is_loading })

  if (!is_loading) {
    return (
      <div>
        {map(quotes, (quote) => {
          return (
            <div>
              <blockquote>
                <div dangerouslySetInnerHTML={{ __html: quote.html }}></div>
                {/* {quote.html} */}
                {/* {quote.text} */}
              </blockquote>
              <p>{quote.time}</p>
            </div>
          )
        })}
      </div>
    )
  }
}
