import MovieCard from "./MovieCard"

const PopularMovie = ({movies}) => {
  return (
    <div className="container max-w-7xl mx-auto pb-10 px-4 text-white">
        <h1 className="text-white text-center text-2xl mt-8 mb-5">What&apos;s Popular</h1>
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {movies.map((movie) => <div key={movie.id}><MovieCard movie={movie} /></div>)}
        </div>
    </div>
  )
}

export default PopularMovie