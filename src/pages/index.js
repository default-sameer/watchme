import axios from "axios"
import { server } from "../config"
import PopularMovie from "../components/PopularMovie";
import Hero from "../components/Hero"

export default function Home({movies}) {
  return (
    <>
    <Hero />
    <div className="bg-slate-600 ">
      <PopularMovie movies={movies.results} />
    </div>
    </>
  )
}

export async function getStaticProps() {
  const res = await axios(`${server}/popular?api_key=${process.env.API_KEY}&language=en-US&page=1`)
  const movies = await res.data

  return {
    props: {
      movies
    }
  }
}

