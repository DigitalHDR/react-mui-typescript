import { useEffect, useRef, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { FormHandles } from '@unform/core'
import { Form } from '@unform/web'

import { PessoasServices } from '../../shared/services/api/pessoas/PessoasServices'
import { FerramentasDeDetalhes } from '../../shared/components'
import { LayoutBaseDePagina } from '../../shared/layouts'
import { VTextField } from '../../shared/forms'

interface IFormData {
  email: string
  cidadeId: string
  nomeCompleto: string
}

export const DetalheDePessoas: React.FC = () => {
  const { id = 'nova' } = useParams<'id'>()
  const navigate = useNavigate()

  const formRef = useRef<FormHandles>(null)

  const [isLoading, setIsLoading] = useState(false)
  const [nome, setNome] = useState('')

  useEffect(() => {
    if (id !== 'nova') {
      setIsLoading(true)

      PessoasServices.getById(Number(id)).then(result => {
        setIsLoading(false)

        if (result instanceof Error) {
          alert(result.message)
          navigate('/pessoas')
        } else {
          setNome(result.nomeCompleto)
          console.log(result)
        }
      })
    }
  }, [id])

  const handleSave = (dados: IFormData) => {
    console.log(dados)
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
          aoClicarEmVoltar={() => navigate('/pessoas')}
          aoClicarEmApagar={() => handleDelete(Number(id))}
          aoClicarEmSalvar={() => formRef.current?.submitForm()}
          aoClicarEmNovo={() => navigate('/pessoas/detalhe/nova')}
          aoClicarEmSalvarEFechar={() => formRef.current?.submitForm()}
        />
      }
    >
      <Form ref={formRef} onSubmit={handleSave}>
        <VTextField name="nomeCompleto" />
        <VTextField name="email" />
        <VTextField name="cidadeId" />
      </Form>
    </LayoutBaseDePagina>
  )
}
