import { useState, useEffect, useContext } from "react"
import { FavoriteContext } from "../context/FavoriteContext"
import Repos from "../Repos"
import "./style.css"


const ReposContainer = ({ img, name, desc, repos }) => {
    const [repository, setRepository] = useState([]);
    const { passFavorite } = useContext(FavoriteContext)


    const handleRepos = async () => {
        const response = await fetch(repos)
        const data = await response.json()
        setRepository(data)
    }
    const handleAddFavorite = (event, key) => {
        let storage = localStorage.getItem("favorite") || '[]'
        storage = JSON.parse(storage)
        const favorite = repository[key]
        storage.push(favorite)
        localStorage.setItem("favorite", JSON.stringify(storage))
        passFavorite(storage)
    }

    useEffect(() => {
        handleRepos();
    }, [repos])

    return (
        <section className="Repos-Container">
            <div className="user-info">
                {img ? <img src={img} alt="Foto de perfil" /> : ""}
                <div className="description">
                    <h3>{name}</h3>
                    <p>{desc}</p>
                </div>
            </div>
            <div className="repos">
                <ul>
                    {
                        repository.map((repo, i) => {
                            return <Repos
                                key={i}
                                title={repo.name}
                                url={repo.html_url}
                                stars={repo.stargazers_count}
                                favorite={false}
                                Add={(event) => handleAddFavorite(event, i)} />
                        })
                    }
                </ul>
            </div>
        </section>
    )
}
export default ReposContainer;