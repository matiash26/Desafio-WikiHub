import { createContext, useState } from "react";

export const FavoriteContext = createContext()

export const FavoriteProvider = ({ children }) => {
    const [favorite, setFavorite] = useState();

    const handleFavorite = (repos) => {
        setFavorite(repos)
    }
    return (
        <FavoriteContext.Provider value={{passFavorite: handleFavorite, favorite}}>
            {children}
        </FavoriteContext.Provider>
    )
}