import { Layout, Tabs, Form } from "antd";
import { useState } from "react";
import styled from "styled-components";

import Parameters from "./Parameters";
import Periods from "./Periods";
import Results from "./Results";

const { TabPane } = Tabs;

const Main = () => {
  const products = [
    { label: "lapiseira", name: "Lapiseira" },
    { label: "cexterno", name: "Corpo externo" },
    { label: "corpoPonteira", name: "Corpo da ponteira" },
    { label: "guiaPonteira", name: "Guia da ponteira" },
    { label: "tampa", name: "Tampa" },
    { label: "plastico", name: "Plástico ABS" },
    { label: "coranteAzul", name: "Corante azul" },
    { label: "tira", name: "Tira 1mm" },
    { label: "borracha", name: "Borracha" },
    { label: "capaBorracha", name: "Capa da borracha" },
    { label: "mioloInterno", name: "Miolo interno" },
    { label: "grafite", name: "Grafite 0.7mm" },
    { label: "fioBorracha", name: "Fio da borracha" },
    { label: "mola", name: "Mola" },
    { label: "corpoMiolo", name: "Corpo do miolo" },
    { label: "suporteGarra", name: "Suporte da garra" },
    { label: "capaGarra", name: "Capa da garra" },
    { label: "garras", name: "Garras" },
    { label: "corantePreto", name: "Corante preto" },
  ];

  const [parametersForm] = Form.useForm();
  const [periodsForm] = Form.useForm();

  const [tabValue, setTabValue] = useState("1");

  const data = parametersForm.getFieldsValue();
  const detailData = periodsForm.getFieldsValue();

  return (
    <Layout.Content style={{ padding: "4rem 0", height: "100%" }}>
      <Container>
        <StyledTabs
          type="card"
          size="large"
          activeKey={tabValue}
          onChange={(value) => setTabValue(value)}
        >
          <TabPane tab="Parâmetros iniciais" key="1" onC>
            <Parameters form={parametersForm} {...{ products, setTabValue }} />
          </TabPane>
          <TabPane tab="Dados do período" key="2">
            <Periods form={periodsForm} {...{ products, setTabValue }} />
          </TabPane>
          <TabPane tab="Resultados" key="3">
            <Results {...{ data, products, detailData }} />
          </TabPane>
        </StyledTabs>
      </Container>
    </Layout.Content>
  );
};

const StyledTabs = styled(Tabs)`
  .ant-tabs-nav {
    margin-bottom: 0;
  }

  .ant-tabs-content-holder {
    padding: 1rem;
    background: #fff;
    border: 1px solid #f0f0f0;
    border-top-color: #fff;
    border-radius: 0 8px 8px 8px;
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
