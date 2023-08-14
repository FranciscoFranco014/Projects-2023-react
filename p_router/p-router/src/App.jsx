import { Suspense, lazy } from 'react'

import { Router } from './Router.jsx'
import { Route } from './Route.jsx'

// import HomePage from './pages/Home.jsx'
// import AboutPage from './pages/About.jsx'
import Page404 from './pages/404.jsx'
import SearchPage from './pages/Search.jsx'

import './App.css'


const lazyHomePage = lazy(() => import('./pages/Home.jsx'))
const lazyAboutPage = lazy(() => import('./pages/About.jsx'))

const appRoutes = [
  {
    path: '/search/:query',
    // eslint-disable-next-line react/prop-types
    Component: SearchPage
  }
]





function App() {


  
  return (
    <main>
      <Suspense fallback={<h3>Loading...</h3>}>
        <Router routes={appRoutes} defaultComponent={Page404}>
          <Route path='/' Component={lazyHomePage} />
          <Route path='/about' Component={lazyAboutPage}/>
        </Router>
      </Suspense>
    </main>
      
  )
}

export default App
