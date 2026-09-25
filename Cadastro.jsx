import { useState } from 'react'
import { Link } from 'react-router-dom'
function Cadastro() {
    const [formData, setFormData] = useState({
        nome: "",
        curso: "",
        email: ""
    })
    const handleChange = (event) => {
        const { name, value } = event.target
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value
        }))
    }
    const handleSubmit = (event) => {
        event.preventDefault()
        alert(
            `Aluno cadastrado!\n\n` +
            `Nome: ${formData.nome}\n` +
            `Curso: ${formData.curso}\n` +
            `E-mail: ${formData.email}`
        )
        setFormData({
            nome: "",
            curso: "",
            email: ""
        })
    }
    return (
        <div>
            <h2>Cadastro de Aluno</h2>
            <form onSubmit={handleSubmit}>
                <input
                    name="nome"
                    value={formData.nome}
                    placeholder="Digite o nome"
                    onChange={handleChange}
                    required
                />
                <br /><br />
                <input
                    name="curso"
                    value={formData.curso}
                    placeholder="Digite o curso"
                    onChange={handleChange}
                    required
                />
                <br /><br />
                <input
                    name="email"
                    value={formData.email}
                    placeholder="Digite o e-mail"
                    onChange={handleChange}
                    required
                />
                <br /><br />
                <button type="submit">
                    Cadastrar
                </button>
            </form>
            <br />
            <Link to="/">
                Voltar
            </Link>
        </div>
    )
}
export default Cadastro
