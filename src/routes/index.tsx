import { Button } from '@mui/material'
import { useEffect } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import {
  // useAppThemeContext,
  useDrawerContext,
} from '../shared/contexts'

export const AppRoutes = () => {
  // const { toggleTheme } = useAppThemeContext()
  const { toggleDrawerOpen, setDrawerOptions } = useDrawerContext()

  useEffect(() => {
    setDrawerOptions([
      {
        icon: 'home',
        path: '/pagina-inicial',
        label: 'Página inicial',
      },
      // {
      //   icon: 'star',
      //   path: '/cidades',
      //   label: 'Cidades',
      // },
    ])
  }, [])

  return (
    <Routes>
      <Route
        path="/pagina-inicial"
        element={
          <Button
            variant="contained"
            color="primary"
            onClick={toggleDrawerOpen}
          >
            Toogle Theme
          </Button>
        }
      />
      {/* <Route path="/cidades" /> */}
      <Route path="*" element={<Navigate to="/pagina-inicial" />} />
    </Routes>
  )
}
