import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Admin, Resource, EditGuesser, ListGuesser, usePermissions } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import UserList from './UserList'
import PostList from './PostList'
import { PermUserList, PermUserEdit, PermUserShow, PermUserCreate } from './PermUser'
import { PermUsergroupList, PermUsergroupShow } from './PermUsergroup'
import Dashboard from './Dashboard'
import { PostCreate, PostEdit } from './PostEdit'
import CustomAuthProvider from './AuthProvider'

import PostIcon from '@material-ui/icons/Book';
import Checkbox from '@material-ui/core/Checkbox';
import Radio from '@material-ui/core/Radio';
import Slider from '@material-ui/core/Slider';
import UserIcon from '@material-ui/icons/Group';

const dataProvider = jsonServerProvider('http://ec2-52-77-211-128.ap-southeast-1.compute.amazonaws.com:8080/api');
function checkPermission (target:any): any  {
  const permissions = localStorage.getItem("token") == null ? "" : localStorage.getItem("token");
  return permissions == 'admin' ? target : null;
}
function isProd(targetProd:any, targetNonProd:any) {
  
}

function App() {  
  return (
    <Admin dashboard={Dashboard} dataProvider={dataProvider} authProvider={CustomAuthProvider}>
      <Resource name="AuditLog" list={ListGuesser}/>
      <Resource name="PermUser" options={{ label: 'Users' }} list={PermUserList} edit={PermUserEdit} show={PermUserShow} create={PermUserCreate}/>
      <Resource name="PermUsergroup" options={{ label: 'UserGroups' }} list={PermUsergroupList} show={PermUsergroupShow}/>
      <Resource name="Entity" list={ListGuesser}/>
      <Resource name="StaticCode" list={ListGuesser}/>
      
      <Resource name="PermUsergroupJoined" />
      <Resource name="PermUserJoined" />
      <Resource name="Joined" />
    </Admin>
  );
}

export default App;