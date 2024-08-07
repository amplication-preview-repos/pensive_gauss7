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
import { LeaseAgreement } from "./LeaseAgreement";
import { LeaseAgreementCountArgs } from "./LeaseAgreementCountArgs";
import { LeaseAgreementFindManyArgs } from "./LeaseAgreementFindManyArgs";
import { LeaseAgreementFindUniqueArgs } from "./LeaseAgreementFindUniqueArgs";
import { CreateLeaseAgreementArgs } from "./CreateLeaseAgreementArgs";
import { UpdateLeaseAgreementArgs } from "./UpdateLeaseAgreementArgs";
import { DeleteLeaseAgreementArgs } from "./DeleteLeaseAgreementArgs";
import { Space } from "../../space/base/Space";
import { Tenant } from "../../tenant/base/Tenant";
import { LeaseAgreementService } from "../leaseAgreement.service";
@graphql.Resolver(() => LeaseAgreement)
export class LeaseAgreementResolverBase {
  constructor(protected readonly service: LeaseAgreementService) {}

  async _leaseAgreementsMeta(
    @graphql.Args() args: LeaseAgreementCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [LeaseAgreement])
  async leaseAgreements(
    @graphql.Args() args: LeaseAgreementFindManyArgs
  ): Promise<LeaseAgreement[]> {
    return this.service.leaseAgreements(args);
  }

  @graphql.Query(() => LeaseAgreement, { nullable: true })
  async leaseAgreement(
    @graphql.Args() args: LeaseAgreementFindUniqueArgs
  ): Promise<LeaseAgreement | null> {
    const result = await this.service.leaseAgreement(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => LeaseAgreement)
  async createLeaseAgreement(
    @graphql.Args() args: CreateLeaseAgreementArgs
  ): Promise<LeaseAgreement> {
    return await this.service.createLeaseAgreement({
      ...args,
      data: {
        ...args.data,

        space: args.data.space
          ? {
              connect: args.data.space,
            }
          : undefined,

        tenant: args.data.tenant
          ? {
              connect: args.data.tenant,
            }
          : undefined,
      },
    });
  }

  @graphql.Mutation(() => LeaseAgreement)
  async updateLeaseAgreement(
    @graphql.Args() args: UpdateLeaseAgreementArgs
  ): Promise<LeaseAgreement | null> {
    try {
      return await this.service.updateLeaseAgreement({
        ...args,
        data: {
          ...args.data,

          space: args.data.space
            ? {
                connect: args.data.space,
              }
            : undefined,

          tenant: args.data.tenant
            ? {
                connect: args.data.tenant,
              }
            : undefined,
        },
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

  @graphql.Mutation(() => LeaseAgreement)
  async deleteLeaseAgreement(
    @graphql.Args() args: DeleteLeaseAgreementArgs
  ): Promise<LeaseAgreement | null> {
    try {
      return await this.service.deleteLeaseAgreement(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => Space, {
    nullable: true,
    name: "space",
  })
  async getSpace(
    @graphql.Parent() parent: LeaseAgreement
  ): Promise<Space | null> {
    const result = await this.service.getSpace(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @graphql.ResolveField(() => Tenant, {
    nullable: true,
    name: "tenant",
  })
  async getTenant(
    @graphql.Parent() parent: LeaseAgreement
  ): Promise<Tenant | null> {
    const result = await this.service.getTenant(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
