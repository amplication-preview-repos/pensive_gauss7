import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  TextInput,
  DateTimeInput,
  SelectInput,
  ReferenceInput,
} from "react-admin";

import { TenantTitle } from "../tenant/TenantTitle";

export const PaymentCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput label="Amount" source="amount" />
        <TextInput label="Lease" source="lease" />
        <DateTimeInput label="PaymentDate" source="paymentDate" />
        <NumberInput step={1} label="PaymentID" source="paymentId" />
        <TextInput label="PaymentMethod" source="paymentMethod" />
        <SelectInput
          source="paymentStatus"
          label="PaymentStatus"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <ReferenceInput source="tenant.id" reference="Tenant" label="Tenant">
          <SelectInput optionText={TenantTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
