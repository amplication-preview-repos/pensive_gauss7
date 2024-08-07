import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  DateTimeInput,
  NumberInput,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { SpaceTitle } from "../space/SpaceTitle";
import { TenantTitle } from "../tenant/TenantTitle";

export const LeaseAgreementCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <DateTimeInput label="LeaseEndDate" source="leaseEndDate" />
        <NumberInput step={1} label="LeaseID" source="leaseId" />
        <DateTimeInput label="LeaseStartDate" source="leaseStartDate" />
        <TextInput label="LeaseTerms" multiline source="leaseTerms" />
        <NumberInput label="MonthlyRent" source="monthlyRent" />
        <TextInput label="RenewalOptions" multiline source="renewalOptions" />
        <NumberInput label="SecurityDeposit" source="securityDeposit" />
        <ReferenceInput source="space.id" reference="Space" label="Space">
          <SelectInput optionText={SpaceTitle} />
        </ReferenceInput>
        <ReferenceInput source="tenant.id" reference="Tenant" label="Tenant">
          <SelectInput optionText={TenantTitle} />
        </ReferenceInput>
        <TextInput
          label="TerminationClause"
          multiline
          source="terminationClause"
        />
      </SimpleForm>
    </Create>
  );
};
