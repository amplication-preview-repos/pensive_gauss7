/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { Space } from "./Space";
import { SpaceCountArgs } from "./SpaceCountArgs";
import { SpaceFindManyArgs } from "./SpaceFindManyArgs";
import { SpaceFindUniqueArgs } from "./SpaceFindUniqueArgs";
import { CreateSpaceArgs } from "./CreateSpaceArgs";
import { UpdateSpaceArgs } from "./UpdateSpaceArgs";
import { DeleteSpaceArgs } from "./DeleteSpaceArgs";
import { LeaseAgreementFindManyArgs } from "../../leaseAgreement/base/LeaseAgreementFindManyArgs";
import { LeaseAgreement } from "../../leaseAgreement/base/LeaseAgreement";
import { MaintenanceRequestFindManyArgs } from "../../maintenanceRequest/base/MaintenanceRequestFindManyArgs";
import { MaintenanceRequest } from "../../maintenanceRequest/base/MaintenanceRequest";
import { SpaceService } from "../space.service";
@graphql.Resolver(() => Space)
export class SpaceResolverBase {
  constructor(protected readonly service: SpaceService) {}

  async _spacesMeta(
    @graphql.Args() args: SpaceCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Space])
  async spaces(@graphql.Args() args: SpaceFindManyArgs): Promise<Space[]> {
    return this.service.spaces(args);
  }

  @graphql.Query(() => Space, { nullable: true })
  async space(
    @graphql.Args() args: SpaceFindUniqueArgs
  ): Promise<Space | null> {
    const result = await this.service.space(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Space)
  async createSpace(@graphql.Args() args: CreateSpaceArgs): Promise<Space> {
    return await this.service.createSpace({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => Space)
  async updateSpace(
    @graphql.Args() args: UpdateSpaceArgs
  ): Promise<Space | null> {
    try {
      return await this.service.updateSpace({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Space)
  async deleteSpace(
    @graphql.Args() args: DeleteSpaceArgs
  ): Promise<Space | null> {
    try {
      return await this.service.deleteSpace(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => [LeaseAgreement], { name: "leaseAgreements" })
  async findLeaseAgreements(
    @graphql.Parent() parent: Space,
    @graphql.Args() args: LeaseAgreementFindManyArgs
  ): Promise<LeaseAgreement[]> {
    const results = await this.service.findLeaseAgreements(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @graphql.ResolveField(() => [MaintenanceRequest], {
    name: "maintenanceRequests",
  })
  async findMaintenanceRequests(
    @graphql.Parent() parent: Space,
    @graphql.Args() args: MaintenanceRequestFindManyArgs
  ): Promise<MaintenanceRequest[]> {
    const results = await this.service.findMaintenanceRequests(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }
}
