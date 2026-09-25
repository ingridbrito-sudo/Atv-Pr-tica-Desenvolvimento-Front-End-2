import { useState } from 'react'
import Contato from './Contato'
function Consulta() {
    const [alunos] = useState([
        {
            nome: "Ingrid",
            curso: "Análise e Desenvolvimento de Sistemas",
            email: "ingrid@email.com"
        },
        {
            nome: "Maria",
            curso: "Análise e Desenvolvimento de Sistemas",
            email: "maria@email.com"
        },
        {
            nome: "João",
            curso: "Sistemas de Informação",
            email: "joao@email.com"
        }
    ])
    return (
        <div>
            <h2>Lista de Alunos</h2>
            {
                alunos.map((aluno, index) => {
                    return (
                        <Contato
                            key={index}
                            nome={aluno.nome}
                            curso={aluno.curso}
                            email={aluno.email}
                        />
                    )
                })
            }
        </div>
    )
}
export default Consulta
