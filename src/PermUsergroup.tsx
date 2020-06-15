import * as React from 'react';
import {Button, Select, MenuItem} from '@material-ui/core';
import { ReferenceInput, SelectField, SelectInput, ReferenceManyField, ShowButton, ReferenceField, SimpleShowLayout,SimpleForm, Create, List, Edit, Show, Datagrid, TextField, EmailField } from 'react-admin';
import { PieDatefield }  from './component/PieDatefield'
import axios from 'axios'
import { number } from 'prop-types';
export const PermUsergroupList: React.FunctionComponent<{}> = (props) => {
    return <List title="Usersgroup" {...props}>
        <Datagrid>
            <TextField source="id" />
            <ReferenceField source="entityId" reference="Entity" label="Entity Name">
                <TextField source="entityName" />
            </ReferenceField>
            <TextField source="code" label="Code" />
            <TextField source="name" label="First Name" />
            <SelectField source="usergroupTypeId" label="Type" choices={[
                { id: 0, name: 'Admin' },
                { id: 1, name: 'Normal' },
                ]} />
            <SelectField source="status" choices={[
                { id: '1', name: 'Active' },
                { id: '0', name: 'Disable' },
                ]} />

            <PieDatefield source="createdDt" label="Created Date Time"></PieDatefield>
            <PieDatefield source="modifyDt" label="Modify Date Time"></PieDatefield>
            <ShowButton></ShowButton>
        </Datagrid>
    </List>;
}
interface PermUser {
    email: String
    id: number
}
class AddUserField extends React.Component<{}, {userList:Array<PermUser>}> {
    holder = {
        usergroupId: number,
        entityId: number
    }

    constructor(props: any) {
        super(props)
        this.holder.usergroupId = props.record.id
        this.holder.entityId = props.record.entityId
        this.state = {
            userList: []
        }
    }

    componentDidMount() {

        // Fetch List of User Group
        axios.get("http://ec2-52-77-211-128.ap-southeast-1.compute.amazonaws.com:8080/api/PermUser?entityId=" + this.holder.entityId)
        .then (result => {
            this.setState({
                userList: result.data
            })
        })

    }
    renderValue(user: PermUser) {
        console.log(user)
        return user.id.toString()
    }

    memberSelected(changeEvent: any) {
        console.log("Member Selected " + changeEvent.target.value)
        console.log(changeEvent)
    }

    render() {
        
        return <span>
        <Select onChange={(e) => {this.memberSelected(e)}}>
            {this.state.userList.map( (user, i)=> (    
                    <MenuItem value={this.renderValue(user)}>{user.email}</MenuItem> 
                )
            )}
        </Select>
        <Button>Add</Button>
        </span>
    }
}

export const PermUsergroupShow: React.FunctionComponent<{}> = (props) => {
    return  <Show {...props} >
        <SimpleShowLayout>
            <TextField source="id" />
            <ReferenceField source="entityId" reference="Entity" label="Entity Name">
                <TextField source="entityName" />
            </ReferenceField>
            <TextField source="code" label="Code" />
            <TextField source="name" label="First Name" />
            <SelectField source="usergroupTypeId" label="Type" choices={[
                { id: 0, name: 'Admin' },
                { id: 1, name: 'Normal' },
                ]} />
            <SelectField source="status" choices={[
                { id: '1', name: 'Active' },
                { id: '0', name: 'Disable' },
                ]} />

            <TextField source="createdDt" label="Created Date Time"></TextField>
            <TextField source="modifyDt" label="Modify Date Time"></TextField>
            <AddUserField {...props}></AddUserField>
            
            <ReferenceManyField 
                reference="PermUserJoined" 
                target="usergroupId" 
                label="Member of User Group" 
                source="id"
                sort={
                    {  }
                }
            >
                <Datagrid>
                    <ReferenceField source="id" reference="PermUser" label="User">
                        <TextField source="email" />
                    </ReferenceField>
                    <TextField source="code" />
                    <TextField source="firstName" />
                    <TextField source="lastName" />
                    <ReferenceField source="entityId" reference="Entity" label="Entity">
                        <TextField source="entityName" />
                    </ReferenceField>
                    <SelectField source="status" choices={[
                        { id: '1', name: 'Active' },
                        { id: '0', name: 'Disable' },
                    ]} />
                </Datagrid>
            </ReferenceManyField>
        </SimpleShowLayout>
    </Show>
}