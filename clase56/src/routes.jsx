import { createBrowserRouter } from 'react-router-dom'

import App from './App'
import LastMovieInDb from './components/LastMovieInDb'
import ContentWrapper from './components/ContentWrapper'
import GenresInDb from './components/GenresInDb'
import Movie from './components/Movie'
import SearchMovies from './components/SearchMovies'

const routes = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <ContentWrapper />,
      },
      {
        path: '/last-movie',
        element: <LastMovieInDb />,
      },
      {
        path: '/genres',
        element: <GenresInDb />,
      },
      {
        path: '/movies',
        element: <Movie />,
      },
      {
        path: '/search',
        element: <SearchMovies />,
      }
    ]
  },
])

export default routes