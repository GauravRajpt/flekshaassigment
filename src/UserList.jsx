import React, { Component } from 'react';
import { connect } from 'react-redux';


class UserList extends Component {
  render() {
    const { users, loading, error } = this.props;

    if (loading) {
      return <div className="loading">Loading...</div>;
    }

    if (error) {
      return <div className="error">Error: {error}</div>;
    }

    return (
      <div className="container">
        <h1>User List</h1>
        {users.map((user) => (
          <div className="user-card" key={user.id}>
            <h3>{user.name}</h3>
            <p>Email: {user.email}</p>
            
          </div>
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.users.data,
    loading: state.users.loading,
    error: state.users.error,
  };
};

export default connect(mapStateToProps)(UserList);
