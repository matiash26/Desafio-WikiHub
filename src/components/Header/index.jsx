import { useState, useContext, useEffect } from "react"
import { FavoriteContext } from "../context/FavoriteContext"
import { FiX } from "react-icons/fi"
import Repos from "../Repos"
import Logo from "../../assets/logo.png"
import "./style.css"

const Header = ({ onClick }) => {
    const [favoriteItem, setFavoriteItem] = useState([])
    const [favoriteRemove, setRemoveFavorite] = useState([])
    const { favorite } = useContext(FavoriteContext)

    const modalFavorite = () => {
        const model = document.querySelector(".favorite")
        model.classList.toggle("close")
    }
    const handleRemove = (event, key) =>{
        let storageRemove = localStorage.getItem('favorite') || '[]'
        storageRemove = JSON.parse(storageRemove)
        setRemoveFavorite(storageRemove.splice(key,1))
        localStorage.setItem("favorite", JSON.stringify(storageRemove))
    }
    useEffect(() => {
        let storage = localStorage.getItem('favorite') || '[]'
        setFavoriteItem(JSON.parse(storage))
    }, [favorite, favoriteRemove])

    return (
        <header>
            <nav>
                <img src={Logo} alt="Logo" />
                <h1>WikiHub</h1>
                <div className="list">
                    <button onClick={modalFavorite} >Repos Save</button>
                    <div className="favorite close">
                        <div className="favorite-header">
                            <h1>Favorite Repos</h1>
                            <FiX onClick={modalFavorite} />
                        </div>
                        <ul className="saveFavorite">
                            {
                                favoriteItem.map((item, i) => {
                                    return <Repos
                                        key={i}
                                        title={item.name}
                                        url={item.html_url}
                                        stars={item.stargazers_count}
                                        favorite={true} 
                                        Remove={(event) => handleRemove(event, i)}/>
                                })
                            }
                        </ul>
                    </div>

                </div>
            </nav>
        </header>
    )
}
export default Header;