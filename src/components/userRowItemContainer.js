import { connect } from 'react-redux';
import { addUserToFavorites } from './../actions/users';
import { isFavorite } from './../reducers/root';
import UserRowItem from './userRowItem';

const mapStateToProps = (state, { user }) => {
  return {
    user,
    favorited: isFavorite(state, user)
  }
};

const mapDispatchToProps = dispatch => ({
  addUserToFavorites: (user) => dispatch(addUserToFavorites(user)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(UserRowItem);
