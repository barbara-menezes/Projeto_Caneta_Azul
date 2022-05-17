import { Layout, Tabs } from "antd";
import styled from "styled-components";

import Parameters from "./Parameters";
import Periods from "./Periods";
import Results from "./Results";

const { TabPane } = Tabs;

const Main = () => (
  <Layout.Content style={{ padding: "4rem 0", height: "100%" }}>
    <Container>
      <StyledTabs defaultActiveKey="1" type="card" size="large">
        <TabPane tab="Parâmetros iniciais" key="1">
          <Parameters />
        </TabPane>
        <TabPane tab="Dados do período" key="2">
          <Periods />
        </TabPane>
        <TabPane tab="Resultados" key="3">
          <Results />
        </TabPane>
      </StyledTabs>
    </Container>
  </Layout.Content>
);

const StyledTabs = styled(Tabs)`
  height: 100%;

  .ant-tabs-nav {
    margin-bottom: 0;
  }

  .ant-tabs-content-holder {
    padding: 1rem;
    background: #fff;
    border: 1px solid #f0f0f0;
    border-top-color: #fff;
    border-radius: 0 0 8px 8px;
  }
`;

const Container = styled.div`
  max-width: 100%;
  height: 100%;
  margin: 0 auto;
  padding: 0 1rem;
  @media (min-width: 576px) {
    max-width: 576px;
  }
  @media (min-width: 768px) {
    max-width: 768px;
  }
  @media (min-width: 992px) {
    max-width: 992px;
  }
  @media (min-width: 1200px) {
    max-width: 1200px;
  }
`;

export default Main;
