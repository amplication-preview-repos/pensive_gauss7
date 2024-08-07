/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";

import {
  IsString,
  MaxLength,
  IsOptional,
  IsEnum,
  ValidateNested,
  IsNumber,
  Min,
  Max,
  IsInt,
} from "class-validator";

import { EnumSpaceAvailability } from "./EnumSpaceAvailability";
import { LeaseAgreementCreateNestedManyWithoutSpacesInput } from "./LeaseAgreementCreateNestedManyWithoutSpacesInput";
import { Type } from "class-transformer";
import { MaintenanceRequestCreateNestedManyWithoutSpacesInput } from "./MaintenanceRequestCreateNestedManyWithoutSpacesInput";

@InputType()
class SpaceCreateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  amenities?: string | null;

  @ApiProperty({
    required: false,
    enum: EnumSpaceAvailability,
  })
  @IsEnum(EnumSpaceAvailability)
  @IsOptional()
  @Field(() => EnumSpaceAvailability, {
    nullable: true,
  })
  availability?: "Option1" | null;

  @ApiProperty({
    required: false,
    type: () => LeaseAgreementCreateNestedManyWithoutSpacesInput,
  })
  @ValidateNested()
  @Type(() => LeaseAgreementCreateNestedManyWithoutSpacesInput)
  @IsOptional()
  @Field(() => LeaseAgreementCreateNestedManyWithoutSpacesInput, {
    nullable: true,
  })
  leaseAgreements?: LeaseAgreementCreateNestedManyWithoutSpacesInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  location?: string | null;

  @ApiProperty({
    required: false,
    type: () => MaintenanceRequestCreateNestedManyWithoutSpacesInput,
  })
  @ValidateNested()
  @Type(() => MaintenanceRequestCreateNestedManyWithoutSpacesInput)
  @IsOptional()
  @Field(() => MaintenanceRequestCreateNestedManyWithoutSpacesInput, {
    nullable: true,
  })
  maintenanceRequests?: MaintenanceRequestCreateNestedManyWithoutSpacesInput;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsNumber()
  @Min(-999999999)
  @Max(999999999)
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  monthlyRent?: number | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @Min(-999999999)
  @Max(999999999)
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  size?: number | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @Min(-999999999)
  @Max(999999999)
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  spaceId?: number | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  typeField?: string | null;
}

export { SpaceCreateInput as SpaceCreateInput };
