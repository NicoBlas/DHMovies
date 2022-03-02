import { element } from 'prop-types';
import React from 'react';
import imagenFondo from '../assets/images/mandalorian.jpg'
import ContentRowMovies from './ContentRowMovies';
import GenresInDb from './GenresInDb';
import LastMovieInDb from './LastMovieInDb';
import MovieTables from './MovieTables';
function ContentRowTop(){
	const movieData = [{
		color:"primary",
		icon:"film",
		titulo:"Movies in Data Base",
		cifra: 21
	},{
		color:"success",
		icon:"award",
		titulo:"Total awards",
		cifra: 79
	},{
		color:"warning",
		icon:"film",
		titulo:"Actors queantity",
		cifra: 49
	}]

	let peliculas = [{
		titulo: "El señor de los anillos",
		duracion: "200"

	},{
		titulo: "StarWars",
		duracion: "230"

	}]

	const generosDisponibles = [{
		value: "Accion",
		rat : 2

	},{
		value: "Comedia",
		rat: 1

	},{
		value: "Drama",
		rat:null

	},{
		value: "CF",
		rat: 1

	},{
		value: "Terror",
		rat:1

	},{
		value:"Thriller",
		rat:3

	},{
		value: "Suspenso",
		rat:5

	},{
		value: "Historias Reales",
		rat:3

	}]
	

    return(
        <React.Fragment>
				{/*<!-- Content Row Top -->*/}
				<div className="container-fluid">
					<div className="d-sm-flex aligns-items-center justify-content-between mb-4">
						<h1 className="h3 mb-0 text-gray-800">App Dashboard</h1>
					</div>
				
					{/*<!-- Content Row Movies-->*/}
					<div className="row">
						{
							movieData.map( (element,i) => {
								return(
									
									<div className="col-md-4 mb-4" key ={i}>
										<ContentRowMovies 
											borderColor= {element.color} 
											icon= {element.icon}
											titulo= {element.titulo}
											cifra= {element.cifra}
										></ContentRowMovies>
									</div>
								)
							})
						}
					</div>
					{/*<!-- End movies in Data Base -->*/}
					
	
					{/*<!-- Content Row Last Movie in Data Base -->*/}
					<div className="row">
						{/*<!-- Last Movie in DB -->*/}
						<div className="col-lg-6 mb-4">
							<LastMovieInDb
								titulo = {peliculas[peliculas.length-1].titulo}

							
							></LastMovieInDb>

						</div>
						{/*<!-- End content row last movie in Data Base -->*/}

						{/*<!-- Genres in DB -->*/}
						<div className="col-lg-6 mb-4">						
							<div className="card shadow mb-4">
								<div className="card-header py-3">
									<h5 className="m-0 font-weight-bold text-gray-800">Genres in Data Base</h5>
								</div>
								<div className="card-body">
									<div className="row">
										{
											generosDisponibles.map((elem,i) => {
												return (
													<div className="col-lg-6 mb-4" key = {i}>
														<GenresInDb
															genero = {elem.value}
														></GenresInDb>
														
													</div>

												)
											})
										}


									</div>
								</div>
							</div>
						</div>	
					</div>
					<div className='row'>
						<div className='col-12'>
							<MovieTables></MovieTables>
						</div>
					</div>
				</div>
				{/*<!--End Content Row Top-->*/}

        </React.Fragment>
    )

}
export default ContentRowTop;