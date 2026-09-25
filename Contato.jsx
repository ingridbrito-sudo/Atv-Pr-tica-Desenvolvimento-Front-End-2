function Contato({ nome, curso, email }) {
    return (
        <div>
            <p>
                <strong>Nome:</strong> {nome}
            </p>
            <p>
                <strong>Curso:</strong> {curso}
            </p>
            <p>
                <strong>E-mail:</strong> {email}
            </p>
            <hr />
        </div>
    )
}
export default Contato
