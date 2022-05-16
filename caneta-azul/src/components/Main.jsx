import { Layout, Tabs } from "antd";

import Parameters from "./Parameters";
import Periods from "./Periods";
import Results from "./Results";

const { TabPane } = Tabs;

const Main = () => (
  <Layout.Content>
    <Tabs defaultActiveKey="1">
      <TabPane tab="Parâmetros iniciais" key="1">
        <Parameters />
      </TabPane>
      <TabPane tab="Dados do período" key="2">
        <Periods />
      </TabPane>
      <TabPane tab="Resultados" key="3">
        <Results />
      </TabPane>
    </Tabs>
  </Layout.Content>
);

export default Main;
