import * as React from 'react';
import { Filter, TextInput, ReferenceInput, SelectInput, EditButton,ReferenceField, UrlField, List, Datagrid, TextField, EmailField } from 'react-admin';
import MyUrlField from './component/MyUrlField'

const PostFilter: React.FunctionComponent<{}> = (props) => {
    return <Filter {...props}>
        <TextInput label="Search" source="q" alwaysOn />
        <ReferenceInput label="User" source="userId" reference="users" allowEmpty >
            <SelectInput optionText="name" />
        </ReferenceInput>
    </Filter>;
};

const PostList: React.FunctionComponent<{}> = (props) => {
    return <List filters={<PostFilter />} {...props}>
        <Datagrid rowClick="edit">
            <ReferenceField source="userId" reference="users">
                <TextField source="name" />
            </ReferenceField>
            <TextField source="id" />
            <TextField source="userId" />
            <TextField source="title" />
            <TextField source="body" />
            <EditButton />
        </Datagrid>
    </List>
};

export default PostList;
  