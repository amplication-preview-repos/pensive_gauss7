import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  DateTimeInput,
  TextInput,
  NumberInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { TenantTitle } from "../tenant/TenantTitle";

export const ContactLogEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <DateTimeInput label="ContactDate" source="contactDate" />
        <TextInput label="ContactMethod" source="contactMethod" />
        <TextInput label="ContactReason" source="contactReason" />
        <NumberInput step={1} label="LogID" source="logId" />
        <TextInput label="Notes" multiline source="notes" />
        <ReferenceInput source="tenant.id" reference="Tenant" label="Tenant">
          <SelectInput optionText={TenantTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
