import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import { SPACE_TITLE_FIELD } from "../space/SpaceTitle";
import { TENANT_TITLE_FIELD } from "../tenant/TenantTitle";

export const LeaseAgreementShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
        <ReferenceField label="Tenant" source="tenant.id" reference="Tenant">
          <TextField source={TENANT_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="TerminationClause" source="terminationClause" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
