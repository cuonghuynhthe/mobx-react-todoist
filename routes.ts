import * as nextRoutes from 'next-routes'

const routes = nextRoutes()

routes.add('news', '/news/:id')

interface IRoute {
    Link: any
    getRequestHandler: Function
}

export const Link = routes.Link

export default routes as IRoute
