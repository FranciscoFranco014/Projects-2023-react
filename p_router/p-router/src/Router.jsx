import { EVENTS } from "./consts"
import { useEffect, useState, Children } from "react"

import { match } from 'path-to-regexp'
import { getCurrentPath } from "./utils"
// eslint-disable-next-line react/prop-types
export function Router ({ children, routes = [], defaultComponent: DefaultComponent = () => <h1>404</h1> }){
    const [currentPath, setCurrentPath] = useState(getCurrentPath())
  
    useEffect(() => {
      const onLocationChange = () => {
        setCurrentPath(getCurrentPath())
      }
      window.addEventListener(EVENTS.PUSHSTATE, onLocationChange)
      window.addEventListener(EVENTS.POPSTATE, onLocationChange)
      return () =>{
        window.removeEventListener(EVENTS.PUSHSTATE, onLocationChange)
        window.removeEventListener(EVENTS.POPSTATE, onLocationChange)
  
      }
    }, [])
    
    let routesParams = {}

    const routesFromChildren = Children.map(children, ({props, type}) => {
      const {name} = type
      const isRoute = name === 'Route'

      return isRoute ? props : null
    })

    const routesToUse = routes.concat(routesFromChildren).filter(Boolean)

    const Page = routesToUse.find(({ path }) => {
        if(path === currentPath) return true

        const matcherUrl = match(path, { decode: decodeURIComponent })
        const matched = matcherUrl(currentPath)
        if(!matched) return false

        routesParams = matched.params
        return true

    })?.Component

    return Page ? <Page  routesParams={routesParams}/> : <DefaultComponent  routesParams={routesParams}/>
  } 