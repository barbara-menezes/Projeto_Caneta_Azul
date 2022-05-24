import { Button, Form, Input, Typography } from "antd";
import styled from "styled-components";

const Periods = ({ form, products, setTabValue }) => (
  <Form form={form} onFinish={() => setTabValue("3")} layout="vertical">
    <Typography.Title level={4}>Necessidade bruta</Typography.Title>
    {products.map((product) => (
      <Flex
        key={product.label}
        style={{
          flexDirection: "column",
          margin: 0,
          borderBottom: "1px solid #f1f1f1",
        }}
      >
        <Typography.Title level={5} style={{ marginTop: "12px" }}>
          {product.name}
        </Typography.Title>
        <Flex>
          <Form.Item label="Semana 1:" name={[product.label, "week1"]}>
            <Input placeholder="digite aqui" type="number" />
          </Form.Item>
          <Form.Item label="Semana 2:" name={[product.label, "week2"]}>
            <Input placeholder="digite aqui" type="number" />
          </Form.Item>
          <Form.Item label="Semana 3:" name={[product.label, "week3"]}>
            <Input placeholder="digite aqui" type="number" />
          </Form.Item>
          <Form.Item label="Semana 4:" name={[product.label, "week4"]}>
            <Input placeholder="digite aqui" type="number" />
          </Form.Item>
          <Form.Item label="Semana 5:" name={[product.label, "week5"]}>
            <Input placeholder="digite aqui" type="number" />
          </Form.Item>
          <Form.Item label="Semana 6:" name={[product.label, "week6"]}>
            <Input placeholder="digite aqui" type="number" />
          </Form.Item>
          <Form.Item label="Semana 7:" name={[product.label, "week7"]}>
            <Input placeholder="digite aqui" type="number" />
          </Form.Item>
          <Form.Item label="Semana 8:" name={[product.label, "week8"]}>
            <Input placeholder="digite aqui" type="number" />
          </Form.Item>
        </Flex>
      </Flex>
    ))}
    <Controls>
      <Button onClick={() => form.resetFields()}>Limpar</Button>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Próximo
        </Button>
      </Form.Item>
    </Controls>
  </Form>
);

const Flex = styled.div`
  display: flex;
  margin: 0 -8px;

  .ant-row {
    width: 100%;
    margin: 0 8px 16px;

    label {
      color: #a3a3a3;
    }

    input {
      border-radius: 8px;
    }
  }
`;

const Controls = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 24px;

  button {
    margin-left: 16px;
  }
`;

export default Periods;
