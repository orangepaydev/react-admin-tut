import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Admin, Resource, EditGuesser, ListGuesser, usePermissions } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import UserList from './UserList'
import PostList from './PostList'
import Dashboard from './Dashboard'
import { PostCreate, PostEdit } from './PostEdit'
import CustomAuthProvider from './AuthProvider'

import PostIcon from '@material-ui/icons/Book';
import Checkbox from '@material-ui/core/Checkbox';
import Radio from '@material-ui/core/Radio';
import UserIcon from '@material-ui/icons/Group';

const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');
function checkPermission (target:any): any  {
  const permissions = localStorage.getItem("token") == null ? "" : localStorage.getItem("token");
  return permissions == 'admin' ? target : null;
}
function isProd(targetProd:any, targetNonProd:any) {

}

function App() {  
  return (
    <Admin dashboard={Dashboard} dataProvider={dataProvider} authProvider={CustomAuthProvider}>
      {
        [
           <Resource name="users" list={UserList} edit={checkPermission(EditGuesser)} icon={UserIcon}/>,
           checkPermission(<Resource name="posts" list={PostList} edit={PostEdit} create={PostCreate} icon={PostIcon}/>),
           isProd(<Checkbox name="tags" />, <Radio name="tags" />)
           
        ].filter(e => {
          return e == null ? false : true
        })
      }
      

    </Admin>
  );
}

export default App;