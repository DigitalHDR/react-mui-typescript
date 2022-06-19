import { Box, Button, Icon, Paper, TextField, useTheme } from '@mui/material'

import { Environment } from '../../environment'

interface IFerramentasDaListagemProps {
  textoDaBusca?: string
  monstrarInputBusca?: boolean
  aoMudarTextoDeBusca?: (novoTexto: string) => void
  textoBotaoNovo?: string
  monstrarBotaoNovo?: boolean
  aoClicarEmNovo?: () => void
}

export const FerramentasDaListagem: React.FC<IFerramentasDaListagemProps> = ({
  textoDaBusca = '',
  monstrarInputBusca = false,
  aoMudarTextoDeBusca,
  aoClicarEmNovo,
  textoBotaoNovo = 'Novo',
  monstrarBotaoNovo = true,
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
          placeholder={Environment.INPUT_DE_BUSCA}
        />
      )}

      <Box flex={1} display="flex" justifyContent="flex-end"></Box>

      {monstrarBotaoNovo && (
        <Button
          color="primary"
          variant="contained"
          disableElevation
          onClick={aoClicarEmNovo}
          endIcon={<Icon>add</Icon>}
        >
          {textoBotaoNovo}
        </Button>
      )}
    </Box>
  )
}
