import React from 'react'
import { Card} from '../Component/Card'
import movies from '../Movies.json'
import './LandingScreen.css'

const LandingScreen = () => {
  return (
    <>
    <main className="bg-primary">
      {movies.map((movie, index)=>{
        return(
          <Card title={movie.title} year={movie.year} director={movie.director} duration={movie.duration} genre={movie.genre} synopsis={movie.synopsis} image_links={movie.image_links} />
        )
      })
      }
   
    
    </main>
    </>
  )
}

export default LandingScreen;