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

import { TENANT_TITLE_FIELD } from "./TenantTitle";
import { SPACE_TITLE_FIELD } from "../space/SpaceTitle";

export const TenantShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
        <ReferenceManyField
          reference="ContactLog"
          target="tenantId"
          label="Contact Logs"
        >
          <Datagrid rowClick="show">
            <TextField label="ContactDate" source="contactDate" />
            <TextField label="ContactMethod" source="contactMethod" />
            <TextField label="ContactReason" source="contactReason" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <TextField label="LogID" source="logId" />
            <TextField label="Notes" source="notes" />
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
        <ReferenceManyField
          reference="LeaseAgreement"
          target="tenantId"
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
          target="tenantId"
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
        <ReferenceManyField
          reference="Payment"
          target="tenantId"
          label="Payments"
        >
          <Datagrid rowClick="show">
            <TextField label="Amount" source="amount" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <TextField label="Lease" source="lease" />
            <TextField label="PaymentDate" source="paymentDate" />
            <TextField label="PaymentID" source="paymentId" />
            <TextField label="PaymentMethod" source="paymentMethod" />
            <TextField label="PaymentStatus" source="paymentStatus" />
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
