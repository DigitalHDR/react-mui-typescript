import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { VTextField } from '../../shared/forms'
import { LinearProgress } from '@mui/material'
import { Form } from '@unform/web'

import { PessoasServices } from '../../shared/services/api/pessoas/PessoasServices'
import { FerramentasDeDetalhes } from '../../shared/components'
import { LayoutBaseDePagina } from '../../shared/layouts'

export const DetalheDePessoas: React.FC = () => {
  const { id = 'nova' } = useParams<'id'>()
  const navigate = useNavigate()

  const [isLoading, setIsLoading] = useState(false)
  const [nome, setNome] = useState('')

  useEffect(() => {
    if (id !== 'nova') {
      setIsLoading(true)
      PessoasServices.getById(Number(id)).then(result => {
        setIsLoading(false)
        if (result instanceof Error) {
          alert(result.message)
          navigate('/pessoas/')
        } else {
          setNome(result.nomeCompleto)
          console.log(result)
        }
      })
    }
  }, [id])

  const handleSave = () => {
    console.log('Save')
  }

  const handleDelete = (id: number) => {
    if (window.confirm('Realmente deseja apagar?')) {
      PessoasServices.deleteById(id).then(result => {
        if (result instanceof Error) {
          alert(result.message)
        } else {
          alert('Registro apagado com sucesso!')
          navigate('/pessoas')
        }
      })
    }
  }

  return (
    <LayoutBaseDePagina
      titulo={id === 'nova' ? 'Nova pessoa' : nome}
      barraDeFerramentas={
        <FerramentasDeDetalhes
          textoBotaoNovo="Nova"
          mostrarBotaoSalvarEFechar
          mostrarBotaoNovo={id !== 'nova'}
          mostrarBotaoApagar={id !== 'nova'}
          aoClicarEmSalvar={handleSave}
          aoClicarEmSalvarEFechar={handleSave}
          aoClicarEmVoltar={() => navigate('/pessoas')}
          aoClicarEmApagar={() => handleDelete(Number(id))}
          aoClicarEmNovo={() => navigate('/pessoas/detalhe/nova')}
        />
      }
    >
      {isLoading && <LinearProgress variant="indeterminate" />}

      <Form onSubmit={(dados) => console.log(dados)}>
        <VTextField name='nomeCompleto'  />

        <button type="submit">addd</button>
      </Form>
    </LayoutBaseDePagina>
  )
}
