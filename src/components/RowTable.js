import React from 'react'

const RowTable = (props) => {
    const movie = props.movie
  return (
    <tr>
        <th scope="row">{movie.title}</th>
        <td>{movie.duration}</td>
        <td>{movie.rating}</td>
        <td>
            <ul>
                {movie.genre.map((elem, index) => {
                    return <li key={index}> {elem} </li>
                })}
            </ul>
        </td>
        <td>{movie.awards}</td>
    </tr>

  )
}

export default RowTable