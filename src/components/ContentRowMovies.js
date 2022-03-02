import PropTypes from "prop-types"

function ContentRowMovies(props){
    const colorLine = "card border-left-"+ props.borderColor+ " shadow h-100 py-2" 
    const icon = "fas fa-"+props.icon+ " fa-2x text-gray-300" 
    return (
        <div className={colorLine}>
            <div className="card-body">
                <div className="row no-gutters align-items-center">
                    <div className="col mr-2">
                        <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">{props.titulo}</div>
                        <div className="h5 mb-0 font-weight-bold text-gray-800">{props.cifra}</div>
                    </div>
                    <div className="col-auto">
                        <i className={icon}></i>
                    </div>
                </div>
            </div>
        </div>
    )
}

ContentRowMovies.propTypes = {
    borderColor : PropTypes.string,
    icon: PropTypes.string,
    titulo: PropTypes.string,
    cifra: PropTypes.number
}

ContentRowMovies.defaultProps = {
    borderColor: "primary",
    icon: "user",
    titulo: "Data con Titulo",
    cifra: 100
}


export default ContentRowMovies