import * as React from 'react';
import Button from '@material-ui/core/Button';
import { SelectField, ReferenceManyField, TopToolbar, SimpleShowLayout, Filter, TextInput, ReferenceInput, SelectInput, ListButton, EditButton, ShowButton, ReferenceField, SimpleForm, Create, List, Edit, Show, Datagrid, TextField, EmailField } from 'react-admin';
import { PieDatefield, PieStatusField}  from './component/PieDatefield'

export const PermUserListFilter: React.FunctionComponent<{}> = (props) => {
    return <Filter {...props}>
        <TextInput label="Email" source="email" alwaysOn />
        <TextInput label="Code" source="code" />
        <TextInput label="First Name" source="firstName" />
        <TextInput label="Last Name" source="lastName" />
        <ReferenceInput label="Entity" source="entityId" reference="Entity" allowEmpty >
            <SelectInput optionText="entityName" />
        </ReferenceInput>
    </Filter>;
};

export const PermUserList: React.FunctionComponent<{}> = (props) => {
    return <List title="Users" filters={<PermUserListFilter />} {...props}>
        <Datagrid>
            <TextField source="id" />
            <ReferenceField source="entityId" reference="Entity" label="Entity Name">
                <TextField source="entityName" />
            </ReferenceField>
            
            <TextField source="entityId" label="Entity ID" />
            <TextField source="email" label="Email" />
            <TextField source="code" label="Code" />
            <TextField source="firstName" label="First Name" />
            <TextField source="lastName" label="Last Name" />
            <SelectField source="status" choices={[
                { id: '1', name: 'Active' },
                { id: '0', name: 'Disable' },
                ]} />
            <PieDatefield source="createdDt" label="Created Date Time"></PieDatefield>
            <ShowButton></ShowButton>
        </Datagrid>
    </List>
};

export const PermUserCreate: React.FunctionComponent<{}> = (props) => {
    return <Create {...props}>
        <SimpleForm>
            <ReferenceInput source="entityId" reference="Entity" label="Entity Name">
                <SelectInput optionText="entityName" />
            </ReferenceInput>
            <TextInput source="password" label="Password" />
            <TextInput source="email" label="Email" />
            <TextInput source="code" label="Code" />
            <TextInput source="firstName" label="First Name" />
            <TextInput source="lastName" label="Last Name" />
        </SimpleForm>
    </Create>
}

const PermUserEditActions = (props: any) => {
    return <TopToolbar>
        <ShowButton basePath={props.basePath} record={props.data} />
        <ListButton basePath={props.basePath} ></ListButton>
        {/* <Button className="MuiButtonBase-root MuiButton-root MuiButton-text RaButton-button-26 MuiButton-textPrimary MuiButton-textSizeSmall MuiButton-sizeSmall" onClick={backAction}>Back</Button> */}
    </TopToolbar>
}

export const PermUserEdit: React.FunctionComponent<{}> = (props) => {
    return  <Edit {...props} actions={<PermUserEditActions {...props} />}>
        <SimpleForm>
            <TextInput disabled source="id" />
            <ReferenceInput disabled source="entityId" reference="Entity" label="Entity Name">
                <SelectInput optionText="entityName" />
            </ReferenceInput>
            <TextInput source="email" label="Email" />
            <TextInput source="firstName" label="First Name" />
            <TextInput source="lastName" label="Last Name" />
            <TextInput source="password" label="Password"/>
            <TextInput disabled source="status" label="Status" />
        </SimpleForm>
    </Edit>
}

export const backAction = function () {
    window.history.back()
}

const PermUserShowActions = (props: any) => {
    return <TopToolbar>
        <EditButton basePath={props.basePath} record={props.data} />
        <ListButton basePath={props.basePath} ></ListButton>
        {/* <Button className="MuiButtonBase-root MuiButton-root MuiButton-text RaButton-button-26 MuiButton-textPrimary MuiButton-textSizeSmall MuiButton-sizeSmall" onClick={backAction}>Back</Button> */}
    </TopToolbar>
}

export const PermUserShow: React.FunctionComponent<{}> = (props) => {
    return  <Show {...props} actions={<PermUserShowActions {...props} />}>
        <SimpleShowLayout>
        <TextField source="id" />
            <ReferenceField source="entityId" reference="Entity" label="Entity Name">
                <TextField source="entityName" />
            </ReferenceField>
            
            <TextField source="email" label="Email" />
            <TextField source="code" label="Code" />
            <TextField source="firstName" label="First Name" />
            <TextField source="lastName" label="Last Name" />
            <SelectField source="status" choices={[
                { id: '1', name: 'Active' },
                { id: '0', name: 'Disable' },
                ]} />
            <TextField source="createdDt" label="Created Date Time"></TextField>
            <ReferenceManyField 
                reference="PermUsergroupJoined" 
                target="userId" 
                label="User Groups user belongs to" 
                source="id"
                sort={
                    {  }
                }
            >
                <Datagrid>
                    <TextField source="code" />
                    <TextField source="name" />
                    <PieStatusField source="status"></PieStatusField>
                    <TextField source="status" label="Status" />
                </Datagrid>
            </ReferenceManyField>
        </SimpleShowLayout>
    </Show>
}