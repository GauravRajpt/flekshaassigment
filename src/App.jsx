import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUsers } from './redux/userSlice';
import UserList from './UserList';




const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <div className='App'>
     
      <UserList />
    </div>
  );
};

export default App;
