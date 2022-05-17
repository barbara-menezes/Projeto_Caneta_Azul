import { Button, Form, Input } from "antd";

import styled from "styled-components";

const Parameters = ({ form }) => (
  <Form form={form} onValuesChange={() => {}} layout="vertical">
    <Flex>
      <Form.Item label="Lote mínimo">
        <Input placeholder="input placeholder" />
      </Form.Item>
      <Form.Item label="Lead Time">
        <Input placeholder="input placeholder" />
      </Form.Item>
      <Form.Item label="Estoque segurança">
        <Input placeholder="input placeholder" />
      </Form.Item>
      <Form.Item label="Qtde Receita">
        <Input placeholder="input placeholder" />
      </Form.Item>
      <Form.Item label="Estoque inicial">
        <Input placeholder="input placeholder" />
      </Form.Item>
    </Flex>
    <Controls>
      <Button>Limpar</Button>
      <Form.Item>
        <Button type="primary">Próximo</Button>
      </Form.Item>
    </Controls>
  </Form>
);

const Flex = styled.div`
  display: flex;
  margin: 0 -8px;

  .ant-row {
    width: 100%;
    margin: 0 8px;

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
