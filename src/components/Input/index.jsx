import { BiSearch } from "react-icons/bi"
import "./style.css"
const Input = ({ onClick, onChange }) => {
    return (
        <div className="search">
            <input type="text" placeholder="Buscar usuário" onChange={onChange}/>
            <button onClick={onClick}><BiSearch /></button>
        </div>
    )
}
export default Input;