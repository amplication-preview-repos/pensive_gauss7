import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  DateTimeInput,
  NumberInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { SpaceTitle } from "../space/SpaceTitle";
import { TenantTitle } from "../tenant/TenantTitle";

export const MaintenanceRequestEdit = (
  props: EditProps
): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput
          label="IssueDescription"
          multiline
          source="issueDescription"
        />
        <DateTimeInput label="RequestDate" source="requestDate" />
        <NumberInput step={1} label="RequestID" source="requestId" />
        <DateTimeInput label="ResolutionDate" source="resolutionDate" />
        <ReferenceInput source="space.id" reference="Space" label="Space">
          <SelectInput optionText={SpaceTitle} />
        </ReferenceInput>
        <SelectInput
          source="status"
          label="Status"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <ReferenceInput source="tenant.id" reference="Tenant" label="Tenant">
          <SelectInput optionText={TenantTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
