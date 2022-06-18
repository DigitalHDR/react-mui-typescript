import { Box, Button, Icon, Paper, TextField, useTheme } from '@mui/material'

interface IBarraDeFerramentasProps {
  textoDaBusca?: string
  monstrarInputBusca?: boolean
  aoMudarTextoDeBusca?: (novoTexto: string) => void
}

export const BarraDeFerramentas: React.FC<IBarraDeFerramentasProps> = ({
  textoDaBusca = '',
  monstrarInputBusca = false,
  aoMudarTextoDeBusca,
}) => {
  const theme = useTheme()
  return (
    <Box
      height={theme.spacing(5)}
      marginX={1}
      padding={2}
      paddingX={2}
      display="flex"
      gap={1}
      alignItems="center"
      component={Paper}
    >
      {monstrarInputBusca && (
        <TextField
          size="small"
          value={textoDaBusca}
          onChange={e => aoMudarTextoDeBusca?.(e.target.value)}
          placeholder="Pesquisar..."
        />
      )}

      <Box flex={1} display="flex" justifyContent="flex-end"></Box>

      <Button
        color="primary"
        variant="contained"
        disableElevation
        endIcon={<Icon>add</Icon>}
      >
        Novo
      </Button>
    </Box>
  )
}
