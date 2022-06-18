import {
  Icon,
  IconButton,
  Theme,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material'
import { Box } from '@mui/system'
import { useDrawerContext } from '../contexts'

interface IILayoutBaseDePaginaProps {
  titulo: string
  barraDeFerramentas?: React.ReactNode
  children: React.ReactNode
}

export const LayoutBaseDePagina: React.FC<IILayoutBaseDePaginaProps> = ({
  children,
  titulo,
  barraDeFerramentas,
}) => {
  const smDown = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'))
  const mdDown = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'))
  const theme = useTheme()

  const { toggleDrawerOpen } = useDrawerContext()

  return (
    <Box height="100%" display="flex" flexDirection="column" gap={1}>
      <Box
        padding={1}
        display="flex"
        alignItems="center"
        height={theme.spacing(12)}
        gap={1}
      >
        {smDown && (
          <IconButton onClick={toggleDrawerOpen}>
            <Icon>menu</Icon>
          </IconButton>
        )}
        <Typography
          variant={smDown ? 'h5' : mdDown ? 'h4' : 'h3'}
          whiteSpace="nowrap"
          textOverflow="ellipsis"
          overflow="hidden"
        >
          {titulo}
        </Typography>
      </Box>

      {barraDeFerramentas && <Box>{barraDeFerramentas}</Box>}

      <Box flex={1} overflow="auto">
        {children}
      </Box>
    </Box>
  )
}
