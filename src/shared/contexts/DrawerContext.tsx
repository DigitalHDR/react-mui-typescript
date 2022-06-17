import { createContext, useCallback, useContext, useState } from 'react'

interface IThemeContextData {
  isDrawerOpen: boolean
  toggleDrawerOpen: () => void
}

const DrawerContext = createContext({} as IThemeContextData)

interface IDrawerContextData {
  children: React.ReactNode
}

export const useDrawerContext = () => {
  return useContext(DrawerContext)
}

export const DrawerProvider: React.FC<IDrawerContextData> = ({
  children,
}) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)

  const toggleDrawerOpen = useCallback(() => {
    setIsDrawerOpen(oldDrawerOpen => !oldDrawerOpen)
  }, [])

  return (
    <DrawerContext.Provider value={{ isDrawerOpen, toggleDrawerOpen }}>
      {children}
    </DrawerContext.Provider>
  )
}
