import { Link } from 'react-router-dom'
function Home() {
    return (
        <div>
            <h2>Sistema de Cadastro de Alunos</h2>
            <p>
                <Link to="/cadastro">
                    Cadastrar aluno
                </Link>
            </p>
            <p>
                <Link to="/consulta">
                    Consultar alunos
                </Link>
            </p>
        </div>
    )
}
export default Home
