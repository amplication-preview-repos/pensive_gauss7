import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { TenantList } from "./tenant/TenantList";
import { TenantCreate } from "./tenant/TenantCreate";
import { TenantEdit } from "./tenant/TenantEdit";
import { TenantShow } from "./tenant/TenantShow";
import { SpaceList } from "./space/SpaceList";
import { SpaceCreate } from "./space/SpaceCreate";
import { SpaceEdit } from "./space/SpaceEdit";
import { SpaceShow } from "./space/SpaceShow";
import { LeaseAgreementList } from "./leaseAgreement/LeaseAgreementList";
import { LeaseAgreementCreate } from "./leaseAgreement/LeaseAgreementCreate";
import { LeaseAgreementEdit } from "./leaseAgreement/LeaseAgreementEdit";
import { LeaseAgreementShow } from "./leaseAgreement/LeaseAgreementShow";
import { MallList } from "./mall/MallList";
import { MallCreate } from "./mall/MallCreate";
import { MallEdit } from "./mall/MallEdit";
import { MallShow } from "./mall/MallShow";
import { PaymentList } from "./payment/PaymentList";
import { PaymentCreate } from "./payment/PaymentCreate";
import { PaymentEdit } from "./payment/PaymentEdit";
import { PaymentShow } from "./payment/PaymentShow";
import { MaintenanceRequestList } from "./maintenanceRequest/MaintenanceRequestList";
import { MaintenanceRequestCreate } from "./maintenanceRequest/MaintenanceRequestCreate";
import { MaintenanceRequestEdit } from "./maintenanceRequest/MaintenanceRequestEdit";
import { MaintenanceRequestShow } from "./maintenanceRequest/MaintenanceRequestShow";
import { ContactLogList } from "./contactLog/ContactLogList";
import { ContactLogCreate } from "./contactLog/ContactLogCreate";
import { ContactLogEdit } from "./contactLog/ContactLogEdit";
import { ContactLogShow } from "./contactLog/ContactLogShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"Tango.Vision Malls"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Tenant"
          list={TenantList}
          edit={TenantEdit}
          create={TenantCreate}
          show={TenantShow}
        />
        <Resource
          name="Space"
          list={SpaceList}
          edit={SpaceEdit}
          create={SpaceCreate}
          show={SpaceShow}
        />
        <Resource
          name="LeaseAgreement"
          list={LeaseAgreementList}
          edit={LeaseAgreementEdit}
          create={LeaseAgreementCreate}
          show={LeaseAgreementShow}
        />
        <Resource
          name="Mall"
          list={MallList}
          edit={MallEdit}
          create={MallCreate}
          show={MallShow}
        />
        <Resource
          name="Payment"
          list={PaymentList}
          edit={PaymentEdit}
          create={PaymentCreate}
          show={PaymentShow}
        />
        <Resource
          name="MaintenanceRequest"
          list={MaintenanceRequestList}
          edit={MaintenanceRequestEdit}
          create={MaintenanceRequestCreate}
          show={MaintenanceRequestShow}
        />
        <Resource
          name="ContactLog"
          list={ContactLogList}
          edit={ContactLogEdit}
          create={ContactLogCreate}
          show={ContactLogShow}
        />
      </Admin>
    </div>
  );
};

export default App;
