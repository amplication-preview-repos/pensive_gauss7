import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { SPACE_TITLE_FIELD } from "./SpaceTitle";
import { TENANT_TITLE_FIELD } from "../tenant/TenantTitle";

export const SpaceShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Amenities" source="amenities" />
        <TextField label="Availability" source="availability" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="Location" source="location" />
        <TextField label="MonthlyRent" source="monthlyRent" />
        <TextField label="Size" source="size" />
        <TextField label="SpaceID" source="spaceId" />
        <TextField label="Type" source="typeField" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="LeaseAgreement"
          target="spaceId"
          label="Lease Agreements"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <TextField label="LeaseEndDate" source="leaseEndDate" />
            <TextField label="LeaseID" source="leaseId" />
            <TextField label="LeaseStartDate" source="leaseStartDate" />
            <TextField label="LeaseTerms" source="leaseTerms" />
            <TextField label="MonthlyRent" source="monthlyRent" />
            <TextField label="RenewalOptions" source="renewalOptions" />
            <TextField label="SecurityDeposit" source="securityDeposit" />
            <ReferenceField label="Space" source="space.id" reference="Space">
              <TextField source={SPACE_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Tenant"
              source="tenant.id"
              reference="Tenant"
            >
              <TextField source={TENANT_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="TerminationClause" source="terminationClause" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="MaintenanceRequest"
          target="spaceId"
          label="Maintenance Requests"
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
            <ReferenceField
              label="Tenant"
              source="tenant.id"
              reference="Tenant"
            >
              <TextField source={TENANT_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
