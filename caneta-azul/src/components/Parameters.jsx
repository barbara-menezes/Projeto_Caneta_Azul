import { Button, Form, Input, Typography } from "antd";
import styled from "styled-components";

const Parameters = ({ form, products, setTabValue }) => (
  <Form form={form} onFinish={() => setTabValue("2")} layout="vertical">
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
          <Form.Item label="Lote mínimo" name={[product.label, "minLot"]}>
            <Input placeholder="digite aqui" type="number" />
          </Form.Item>
          <Form.Item label="Lead Time" name={[product.label, "leadTime"]}>
            <Input placeholder="digite aqui" type="number" />
          </Form.Item>
          <Form.Item
            label="Estoque segurança"
            name={[product.label, "safetyStock"]}
          >
            <Input placeholder="digite aqui" type="number" />
          </Form.Item>
          <Form.Item label="Qtde Receita" name={[product.label, "revenue"]}>
            <Input placeholder="digite aqui" type="number" />
          </Form.Item>
          <Form.Item
            label="Estoque inicial"
            name={[product.label, "initialStock"]}
          >
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

export default Parameters;
