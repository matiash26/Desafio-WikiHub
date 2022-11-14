import { useState } from "react"
import ReposContainer from "../../components/ReposContainer"
import Header from "../../components/Header"
import Input from "../../components/Input"

const Home = () => {
  const [input, setInput] = useState([]);
  const [user, setUser] = useState([])

  const handleSearch = async () => {
    const response = await fetch(`https://api.github.com/users/${input}`)
    const data = await response.json()
    setUser(data)
  }

  return (
    <div className="App">
      <Header/>
      <main>
        <Input onClick={handleSearch} onChange={(e) => setInput(e.target.value)} />
        <ReposContainer
          img={user.avatar_url}
          name={user.name}
          desc={user.bio}
          repos={user.repos_url} />
      </main>
    </div>
  )
}

export default Home;
