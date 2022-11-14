import { AiFillStar } from "react-icons/ai"
import { FiTrash2 } from "react-icons/fi"
import "./style.css"
const Repos = ({ title, url, stars, favorite, Add, Remove}) => {
    return (
        <li className="repos-item">
            <div>
                <AiFillStar />
                <span>{stars}</span>
            </div>
            <h5>{title}</h5>
            <div className="add-link">
                <a href={url} target="_blank">Repositório</a>
                {favorite? <button id="remove" onClick={Remove}><FiTrash2 /></button> : <button id="addItem" onClick={Add}>Adicionar</button>}
            </div>
        </li>
    )
}
export default Repos