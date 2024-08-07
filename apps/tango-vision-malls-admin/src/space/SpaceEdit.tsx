import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
  NumberInput,
} from "react-admin";

import { LeaseAgreementTitle } from "../leaseAgreement/LeaseAgreementTitle";
import { MaintenanceRequestTitle } from "../maintenanceRequest/MaintenanceRequestTitle";

export const SpaceEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Amenities" multiline source="amenities" />
        <SelectInput
          source="availability"
          label="Availability"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <ReferenceArrayInput
          source="leaseAgreements"
          reference="LeaseAgreement"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={LeaseAgreementTitle} />
        </ReferenceArrayInput>
        <TextInput label="Location" source="location" />
        <ReferenceArrayInput
          source="maintenanceRequests"
          reference="MaintenanceRequest"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={MaintenanceRequestTitle} />
        </ReferenceArrayInput>
        <NumberInput label="MonthlyRent" source="monthlyRent" />
        <NumberInput step={1} label="Size" source="size" />
        <NumberInput step={1} label="SpaceID" source="spaceId" />
        <TextInput label="Type" source="typeField" />
      </SimpleForm>
    </Edit>
  );
};
