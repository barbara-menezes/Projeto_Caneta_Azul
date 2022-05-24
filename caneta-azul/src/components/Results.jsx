import { Button, Modal, Table } from "antd";
import { useState } from "react";

const Results = ({ data, products, detailData }) => {
  const [selectedProduct, setSelectedProduct] = useState("");

  const getName = (label) => {
    return products.find((e) => e.label === label)
      ? products.find((e) => e.label === label).name
      : "";
  };

  const dataSource = Object.entries(data).map((e) => {
    return {
      key: e[0],
      name: getName(e[0]),
      ...e[1],
    };
  });

  const columns = [
    {
      title: "Produto",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Lote Mínimo",
      dataIndex: "minLot",
      key: "minLot",
    },
    {
      title: "Lead Time",
      dataIndex: "leadTime",
      key: "leadTime",
    },
    {
      title: "Qtde. Receita",
      dataIndex: "revenue",
      key: "revenue",
    },
    {
      title: "Estoque de segurança",
      dataIndex: "safetyStock",
      key: "safetyStock",
    },
    {
      title: "Estoque Inicial",
      dataIndex: "initialStock",
      key: "initialStock",
    },
    {
      title: "+ Mais",
      dataIndex: "",
      key: "x",
      render: (e) => (
        <Button type="primary" ghost onClick={() => setSelectedProduct(e.key)}>
          Detalhes
        </Button>
      ),
    },
  ];

  const detailColumns = [
    {
      title: "Métrica",
      dataIndex: "metric",
      key: "metric",
    },
    {
      title: "S1",
      dataIndex: "1",
      key: "1",
    },
    {
      title: "S2",
      dataIndex: "2",
      key: "2",
    },
    {
      title: "S3",
      dataIndex: "3",
      key: "3",
    },
    {
      title: "S4",
      dataIndex: "4",
      key: "4",
    },
    {
      title: "S5",
      dataIndex: "5",
      key: "5",
    },
    {
      title: "S6",
      dataIndex: "6",
      key: "6",
    },
    {
      title: "S7",
      dataIndex: "7",
      key: "7",
    },
    {
      title: "S8",
      dataIndex: "8",
      key: "8",
    },
  ];

  const detailDataSource = [
    {
      key: selectedProduct ? detailData[selectedProduct].key : "",
      metric: "Necessidade bruta",
      1: selectedProduct ? detailData[selectedProduct].week1 : "",
      2: selectedProduct ? detailData[selectedProduct].week2 : "",
      3: selectedProduct ? detailData[selectedProduct].week3 : "",
      4: selectedProduct ? detailData[selectedProduct].week4 : "",
      5: selectedProduct ? detailData[selectedProduct].week5 : "",
      6: selectedProduct ? detailData[selectedProduct].week6 : "",
      7: selectedProduct ? detailData[selectedProduct].week7 : "",
      8: selectedProduct ? detailData[selectedProduct].week8 : "",
    },
  ];

  return (
    <>
      <Table dataSource={dataSource} columns={columns} />
      <Modal
        title={`Resultado ${getName(selectedProduct)}`}
        visible={!!selectedProduct}
        width={1000}
        onCancel={() => setSelectedProduct("")}
        footer={null}
      >
        <Table dataSource={detailDataSource} columns={detailColumns} />
      </Modal>
    </>
  );
};

export default Results;
