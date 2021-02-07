import React from 'react'
// tamplate
import Layout from './components/templates/Layout'
//  router
import { BrowserRouter, Switch, Route } from 'react-router-dom'
// pages
import Home from './pages/Home'
// categories
import Categories from './pages/Categories'

// Styles
import './styles/global.css'
import './styles/colors.css'

const App = () => {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route exact path='/' component={Home} />
            {/* Categories */}
            <Route exact path='/categories/:category' component={Categories} />
          </Switch>
        </Layout>
      </BrowserRouter>
    </React.Fragment>
  )
}

export default App
