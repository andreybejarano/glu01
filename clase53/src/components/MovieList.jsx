import PropTypes from 'prop-types';

function MovieList(props) {
  return (
    <tr>
      <td>{props.id}</td>
      <td>{props.title}</td>
      <td>{props.rating}</td>
      <td>{props.awards}</td>
      <td>{props.length}</td>
    </tr>
  );
}

MovieList.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  rating: PropTypes.number,
  awards: PropTypes.number,
  length: PropTypes.number
};

export default MovieList;