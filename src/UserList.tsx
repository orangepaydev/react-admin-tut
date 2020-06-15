import * as React from 'react';
import { ReferenceField, UrlField, List, Datagrid, TextField, EmailField } from 'react-admin';
import MyUrlField from './component/MyUrlField'

const UserList: React.FunctionComponent<{}> = (props) => {
    return <List {...props}>
        <Datagrid rowClick="edit">
            <ReferenceField source="userId" reference="users">
                <TextField source="id" />
            </ReferenceField>
            <TextField source="id" />
            <TextField source="name" />
            <TextField source="username" />
            <EmailField source="email" />
            <TextField source="address.street" />
            <TextField source="phone" />
            <UrlField source="website" />
            <MyUrlField source="website" />
            <TextField source="company.name" />
            <TextField source="status" />
        </Datagrid>
    </List>
};

export default UserList;
  