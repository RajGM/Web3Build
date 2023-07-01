import CategoryBar from "@components/CategoryBar"
import MainFeed from "@components/MainFeed";

const Home = () => {

  return (
    <div className="middle">
      <div className="childDiv">
        <CategoryBar />
      </div>
      <div className="childDiv">
        <MainFeed />
      </div>
    </div>
  )
}

export default Home