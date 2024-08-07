import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { SPACE_TITLE_FIELD } from "../space/SpaceTitle";
import { TENANT_TITLE_FIELD } from "../tenant/TenantTitle";

export const MaintenanceRequestList = (
  props: ListProps
): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Maintenance Requests"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="IssueDescription" source="issueDescription" />
        <TextField label="RequestDate" source="requestDate" />
        <TextField label="RequestID" source="requestId" />
        <TextField label="ResolutionDate" source="resolutionDate" />
        <ReferenceField label="Space" source="space.id" reference="Space">
          <TextField source={SPACE_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Status" source="status" />
        <ReferenceField label="Tenant" source="tenant.id" reference="Tenant">
          <TextField source={TENANT_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
