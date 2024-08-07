/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";

import {
  IsDate,
  IsString,
  MaxLength,
  IsOptional,
  IsInt,
  Min,
  Max,
  ValidateNested,
  IsEnum,
} from "class-validator";

import { Type } from "class-transformer";
import { Space } from "../../space/base/Space";
import { EnumMaintenanceRequestStatus } from "./EnumMaintenanceRequestStatus";
import { Tenant } from "../../tenant/base/Tenant";

@ObjectType()
class MaintenanceRequest {
  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  createdAt!: Date;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  id!: string;

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
  issueDescription!: string | null;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  requestDate!: Date | null;

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
  requestId!: number | null;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  resolutionDate!: Date | null;

  @ApiProperty({
    required: false,
    type: () => Space,
  })
  @ValidateNested()
  @Type(() => Space)
  @IsOptional()
  space?: Space | null;

  @ApiProperty({
    required: false,
    enum: EnumMaintenanceRequestStatus,
  })
  @IsEnum(EnumMaintenanceRequestStatus)
  @IsOptional()
  @Field(() => EnumMaintenanceRequestStatus, {
    nullable: true,
  })
  status?: "Option1" | null;

  @ApiProperty({
    required: false,
    type: () => Tenant,
  })
  @ValidateNested()
  @Type(() => Tenant)
  @IsOptional()
  tenant?: Tenant | null;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  updatedAt!: Date;
}

export { MaintenanceRequest as MaintenanceRequest };
