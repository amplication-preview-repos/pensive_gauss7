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

export const LeaseAgreementList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Lease Agreements"}
      perPage={50}
      pagination={<Pagination />}
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
        <ReferenceField label="Tenant" source="tenant.id" reference="Tenant">
          <TextField source={TENANT_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="TerminationClause" source="terminationClause" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
