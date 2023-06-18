export default function Filho(props) {
    return (
        <div>
            <h1>Filho</h1>
            <button onClick={props.funcao}>Fala com o Pai</button>
            <button onClick={() => props.funcao("Passei no ENEM MAE")}>Fala com a Mae</button>
        </div>
    )
}