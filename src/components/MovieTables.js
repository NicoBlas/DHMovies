import React from 'react'
import RowTable from './RowTable'

const MovieTables = () => {
    const movies = [
        {
            title:"Titanic",
            duration: 120,
            rating: 10,
            genre: ["Drama", "Suspenso"],
            awards: 20
        },
        {
            title:"Robocop",
            duration: 98,
            rating: 7,
            genre: ["Comedia", "Ciencia Ficcion"],
            awards: 4
        },
        {
            title:"Alien",
            duration: 110,
            rating: 9,
            genre: ["Suspenso", "Accion"],
            awards: 7
        },
        {
            title:"Alien",
            duration: 110,
            rating: 9,
            genre: ["Suspenso", "Accion"],
            awards: 7
        },
        {
            title:"Harry Potter",
            duration: 160,
            rating: 11,
            genre: ["Suspenso", "Ciencia Ficcion"],
            awards: 17
        },
        {
            title:"Cars",
            duration: 90,
            rating: 8,
            genre: ["Infantil"],
            awards: 9
        },
        {
            title:"Hacker",
            duration: 105,
            rating: 6.5,
            genre: ["Suspenso", "Accion"],
            awards: 1
        }

    ]
  return (
    <table class="table">
        <thead>
        <tr>
            <th scope="col">Titulo</th>
            <th scope="col">Duracion</th>
            <th scope="col">Rating</th>
            <th scope="col">Generos</th>
            <th scope="col">Premios</th>
        </tr>
        </thead>
    {
        movies.map ((elem, index) => {
            return (
                <RowTable
                    key = {index}
                    movie = {elem}
                ></RowTable>
            )
        })
    }
    

  </table>
  )
}

export default MovieTables