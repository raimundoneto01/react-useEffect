
export const Card = (props) => {
  return (
        <div className="col">
            <div className="card">
                <img src={props.foto} alt={props.texto} className="card-img-top " />
                <div className="card-body">
                    <h5 className="card-title">{props.id}</h5>
                    <p className="card-text">{props.texto}</p>
                </div>
            </div>
        </div>
  )
}






// rafc.. para importar a paginação do react ..