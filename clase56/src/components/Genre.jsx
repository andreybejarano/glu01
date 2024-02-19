import PropTypes from 'prop-types'

function Genre(props) {
    return (
        <div className="col-lg-6 mb-4">
            <div className="card bg-dark text-white shadow">
                <div className="card-body">
                    {props.name}
                </div>
            </div>
        </div>
    )
}

Genre.propTypes = {
    name: PropTypes.string.isRequired
}

export default Genre