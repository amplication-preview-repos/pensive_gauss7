import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const TenantList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Tenants"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="BusinessType" source="businessType" />
        <TextField label="ContactNumber" source="contactNumber" />
        <TextField label="ContactPerson" source="contactPerson" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="Email" source="email" />
        <TextField label="ID" source="id" />
        <TextField label="MoveInDate" source="moveInDate" />
        <TextField label="Name" source="name" />
        <TextField label="Status" source="status" />
        <TextField label="TenantID" source="tenantId" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
