import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import { publicRoute } from '~/Routes'
import { DefaultLayout, HeaderOnly } from '~/components/Layout';
import { Fragment } from 'react';
function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route>
            {publicRoute.map((router, index) => {
              const Page = router.component

              let Layout = DefaultLayout
              if (router.layout) {
                Layout = router.layout
              } else if (router.layout === null) {
                router.layout = Fragment
              }
              return <Route key={index} path={router.path} element={<Layout><Page /></Layout>} />
            })}
          </Route>

        </Routes>
      </div>
    </Router>
  );
}

export default App;
