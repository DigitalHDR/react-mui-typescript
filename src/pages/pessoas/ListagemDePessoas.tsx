import { useEffect, useMemo } from 'react'
import { useSearchParams } from 'react-router-dom'

import { PessoasSesvices } from '../../shared/services/api/pessoas/PessoasSesvices'
import { FerramentasDaListagem } from '../../shared/components'
import { LayoutBaseDePagina } from '../../shared/layouts'
import { useDebounce } from '../../shared/hooks'

export const ListagemDePessoas: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const { debounce } = useDebounce()

  const busca = useMemo(() => {
    return searchParams.get('busca') || ''
  }, [searchParams])

  useEffect(() => {
    debounce(() => {
      PessoasSesvices.getAll(1, busca).then(result => {
        if (result instanceof Error) {
          alert(result.message)
        } else {
          console.log(result)
        }
      })
    })
  }, [busca])

  return (
    <LayoutBaseDePagina
      titulo="Listagem de pessoas"
      barraDeFerramentas={
        <FerramentasDaListagem
          textoBotaoNovo="Nova"
          monstrarInputBusca
          textoDaBusca={busca}
          aoMudarTextoDeBusca={texto =>
            setSearchParams({ busca: texto }, { replace: true })
          }
        />
      }
    >
      ListagemDeCidade
    </LayoutBaseDePagina>
  )
}

// ?? ou || É QUASE A MESMA COISA
