import * as React from 'react';
import { Filter, Edit, Create, SimpleForm, TextInput, List, ReferenceInput, TextField, SelectInput } from 'react-admin';

export const PostEdit: React.FunctionComponent<{}> = (props) => {
    return  <Edit {...props}>
        <SimpleForm>
            <TextInput disabled source="id" />
            <ReferenceInput source="userId" reference="users">
                <SelectInput optionText="name" />
            </ReferenceInput>
            <TextInput multiline source="body" />
        </SimpleForm>
    </Edit>
};

export const PostCreate: React.FunctionComponent<{}> = (props) => {
    return  <Create {...props}>
        <SimpleForm>
            <ReferenceInput source="userId" reference="users">
                <SelectInput optionText="name" />
            </ReferenceInput>
            <TextInput source="title" />
            <TextInput multiline source="body" />
        </SimpleForm>
    </Create>
};