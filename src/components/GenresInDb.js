import React from 'react'

const GenresInDb = (props) => {
    //let genero = props.value
  return (
    <div>
        
		<div className="card bg-dark text-white shadow">
			<div className="card-body">
				{props.genero}
			</div>
		</div>
		
        
    </div>
  )
}

export default GenresInDb

