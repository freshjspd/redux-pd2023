import React from 'react';
import CreateUserForm from '../../Components/forms/CreateUserForm';
import UserList from '../../Components/UserList';

export default function UsersInfoPage(props) {
  return (
    <>
        <CreateUserForm />
        <UserList />
    </>
  )
}
