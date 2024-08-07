import { Test } from "@nestjs/testing";
import {
  INestApplication,
  HttpStatus,
  ExecutionContext,
  CallHandler,
} from "@nestjs/common";
import request from "supertest";
import { ACGuard } from "nest-access-control";
import { DefaultAuthGuard } from "../../auth/defaultAuth.guard";
import { ACLModule } from "../../auth/acl.module";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { map } from "rxjs";
import { ContactLogController } from "../contactLog.controller";
import { ContactLogService } from "../contactLog.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  contactDate: new Date(),
  contactMethod: "exampleContactMethod",
  contactReason: "exampleContactReason",
  createdAt: new Date(),
  id: "exampleId",
  logId: 42,
  notes: "exampleNotes",
  updatedAt: new Date(),
};
const CREATE_RESULT = {
  contactDate: new Date(),
  contactMethod: "exampleContactMethod",
  contactReason: "exampleContactReason",
  createdAt: new Date(),
  id: "exampleId",
  logId: 42,
  notes: "exampleNotes",
  updatedAt: new Date(),
};
const FIND_MANY_RESULT = [
  {
    contactDate: new Date(),
    contactMethod: "exampleContactMethod",
    contactReason: "exampleContactReason",
    createdAt: new Date(),
    id: "exampleId",
    logId: 42,
    notes: "exampleNotes",
    updatedAt: new Date(),
  },
];
const FIND_ONE_RESULT = {
  contactDate: new Date(),
  contactMethod: "exampleContactMethod",
  contactReason: "exampleContactReason",
  createdAt: new Date(),
  id: "exampleId",
  logId: 42,
  notes: "exampleNotes",
  updatedAt: new Date(),
};

const service = {
  createContactLog() {
    return CREATE_RESULT;
  },
  contactLogs: () => FIND_MANY_RESULT,
  contactLog: ({ where }: { where: { id: string } }) => {
    switch (where.id) {
      case existingId:
        return FIND_ONE_RESULT;
      case nonExistingId:
        return null;
    }
  },
};

const basicAuthGuard = {
  canActivate: (context: ExecutionContext) => {
    const argumentHost = context.switchToHttp();
    const request = argumentHost.getRequest();
    request.user = {
      roles: ["user"],
    };
    return true;
  },
};

const acGuard = {
  canActivate: () => {
    return true;
  },
};

const aclFilterResponseInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle().pipe(
      map((data) => {
        return data;
      })
    );
  },
};
const aclValidateRequestInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle();
  },
};

describe("ContactLog", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: ContactLogService,
          useValue: service,
        },
      ],
      controllers: [ContactLogController],
      imports: [ACLModule],
    })
      .overrideGuard(DefaultAuthGuard)
      .useValue(basicAuthGuard)
      .overrideGuard(ACGuard)
      .useValue(acGuard)
      .overrideInterceptor(AclFilterResponseInterceptor)
      .useValue(aclFilterResponseInterceptor)
      .overrideInterceptor(AclValidateRequestInterceptor)
      .useValue(aclValidateRequestInterceptor)
      .compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  test("POST /contactLogs", async () => {
    await request(app.getHttpServer())
      .post("/contactLogs")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        contactDate: CREATE_RESULT.contactDate.toISOString(),
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      });
  });

  test("GET /contactLogs", async () => {
    await request(app.getHttpServer())
      .get("/contactLogs")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          contactDate: FIND_MANY_RESULT[0].contactDate.toISOString(),
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
        },
      ]);
  });

  test("GET /contactLogs/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/contactLogs"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /contactLogs/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/contactLogs"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        contactDate: FIND_ONE_RESULT.contactDate.toISOString(),
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  test("POST /contactLogs existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/contactLogs")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        contactDate: CREATE_RESULT.contactDate.toISOString(),
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      })
      .then(function () {
        agent
          .post("/contactLogs")
          .send(CREATE_INPUT)
          .expect(HttpStatus.CONFLICT)
          .expect({
            statusCode: HttpStatus.CONFLICT,
          });
      });
  });

  afterAll(async () => {
    await app.close();
  });
});
