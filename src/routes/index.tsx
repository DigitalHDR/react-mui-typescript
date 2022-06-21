import { useEffect } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { Dashboard, ListagemDePessoas } from '../pages'
import { useDrawerContext } from '../shared/contexts'

export const AppRoutes = () => {
  const { setDrawerOptions } = useDrawerContext()

  useEffect(() => {
    setDrawerOptions([
      {
        icon: 'home',
        path: '/pagina-inicial',
        label: 'Página inicial',
      },
      {
        icon: 'location_city',
        path: '/pessoas',
        label: 'Pessoas',
      },
    ])
  }, [])

  return (
    <Routes>
      <Route path="/pagina-inicial" element={<Dashboard />} />

      <Route path="/pessoas" element={<ListagemDePessoas />} />
      {/* <Route path="/pessoas/detalhe/:id" element={<Dashboard />} /> */}

      <Route path="*" element={<Navigate to="/pagina-inicial" />} />
    </Routes>
  )
}
