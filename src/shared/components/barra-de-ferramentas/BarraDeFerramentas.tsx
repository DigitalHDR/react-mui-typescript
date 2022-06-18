import { Box, Button, Icon, Paper, TextField, useTheme } from '@mui/material'

export const BarraDeFerramentas: React.FC = () => {
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
      <TextField size="small" placeholder="Pesquisar..." />

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
