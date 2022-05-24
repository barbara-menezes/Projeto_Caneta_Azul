import { Button, Modal, Table } from "antd";
import { useState } from "react";

const Results = ({ data, products, detailData }) => {
  const [selectedProduct, setSelectedProduct] = useState("");

  const getName = (label) => {
    return products.find((e) => e.label === label)
      ? products.find((e) => e.label === label).name
      : "";
  };

  const calculaRecebimento = (estoquePlanejado, semana) => {
    const product = dataSource.find((e) => e.key === selectedProduct)
   if(semana === 1){
     const qtdeFaltante = estoquePlanejado - detailData[selectedProduct].week1 - product.safetyStock
     if (qtdeFaltante < 0)
     return qtdeFaltante * -1
     else return 0
   }
   if(semana === 2){
    const qtdeFaltante = estoquePlanejado - detailData[selectedProduct].week2 - product.safetyStock
    if (qtdeFaltante < 0)
    return qtdeFaltante * -1
    else return 0
  }
  if(semana === 3){
    const qtdeFaltante = estoquePlanejado - detailData[selectedProduct].week3 - product.safetyStock
    if (qtdeFaltante < 0)
    return qtdeFaltante * -1
    else return 0
  }
  if(semana === 4){
    const qtdeFaltante = estoquePlanejado - detailData[selectedProduct].week4 - product.safetyStock
    if (qtdeFaltante < 0)
    return qtdeFaltante * -1
    else return 0
  }
  if(semana === 5){
    const qtdeFaltante = estoquePlanejado - detailData[selectedProduct].week5 - product.safetyStock
    if (qtdeFaltante < 0)
    return qtdeFaltante * -1
    else return 0
  }
  if(semana === 6){
    const qtdeFaltante = estoquePlanejado - detailData[selectedProduct].week6 - product.safetyStock
    if (qtdeFaltante < 0)
    return qtdeFaltante * -1
    else return 0
  }
  if(semana === 7){
    const qtdeFaltante = estoquePlanejado - detailData[selectedProduct].week7 - product.safetyStock
    if (qtdeFaltante < 0)
    return qtdeFaltante * -1
    else return 0
  }
  if(semana === 8){
    const qtdeFaltante = estoquePlanejado - detailData[selectedProduct].week8 - product.safetyStock
    if (qtdeFaltante < 0)
    return qtdeFaltante * -1
    else return 0
  }
  }
  const calculaEstoqueProjetado = (estoqueInicial, semana) => {
    const product = estoqueInicial.find((e) => e.key === selectedProduct)
    if(semana === 1){
      product.estoqueAtual = product.initialStock
    return product.initialStock
    }
    if(semana === 2){
      const varAux = product.estoqueAtual
      product.estoqueAtual = product.estoqueAtual -  detailData[selectedProduct].week1
      if(varAux - detailData[selectedProduct].week1 < product.safetyStock)
      return product.safetyStock
      else
    return varAux - detailData[selectedProduct].week1
    }
    if(semana === 3){
      const varAux = product.estoqueAtual
      product.estoqueAtual = product.estoqueAtual -  detailData[selectedProduct].week2
      if(varAux - detailData[selectedProduct].week2 < product.safetyStock)
      return product.safetyStock
      else
    return varAux - detailData[selectedProduct].week2
    }
    if(semana === 4){
      const varAux = product.estoqueAtual
      product.estoqueAtual = product.estoqueAtual -  detailData[selectedProduct].week3
      if(varAux - detailData[selectedProduct].week3 < product.safetyStock)
      return product.safetyStock
      else
    return varAux - detailData[selectedProduct].week3
    }
    if(semana === 5){
      const varAux = product.estoqueAtual
      product.estoqueAtual = product.estoqueAtual -  detailData[selectedProduct].week4
      if(varAux - detailData[selectedProduct].week4 < product.safetyStock)
      return product.safetyStock
      else
    return varAux - detailData[selectedProduct].week4
    }
    if(semana === 6){
      const varAux = product.estoqueAtual
      product.estoqueAtual = product.estoqueAtual -  detailData[selectedProduct].week5
      if(varAux - detailData[selectedProduct].week5 < product.safetyStock)
      return product.safetyStock
      else
    return varAux - detailData[selectedProduct].week5
    }
    if(semana === 7){
      const varAux = product.estoqueAtual
      product.estoqueAtual = product.estoqueAtual -  detailData[selectedProduct].week6
      if(varAux - detailData[selectedProduct].week6 < product.safetyStock)
      return product.safetyStock
      else
    return varAux - detailData[selectedProduct].week6
    }
    if(semana === 8){
      const varAux = product.estoqueAtual
      product.estoqueAtual = product.estoqueAtual -  detailData[selectedProduct].week7
      if(varAux - detailData[selectedProduct].week7 < product.safetyStock)
      return product.safetyStock
      else
    return varAux - detailData[selectedProduct].week7
    }
  }

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
      key: detailData[selectedProduct] ? detailData[selectedProduct].key : "",
      metric: "Necessidade bruta",
      1: detailData[selectedProduct] ? detailData[selectedProduct].week1 : "",
      2: detailData[selectedProduct] ? detailData[selectedProduct].week2 : "",
      3: detailData[selectedProduct] ? detailData[selectedProduct].week3 : "",
      4: detailData[selectedProduct] ? detailData[selectedProduct].week4 : "",
      5: detailData[selectedProduct] ? detailData[selectedProduct].week5 : "",
      6: detailData[selectedProduct] ? detailData[selectedProduct].week6 : "",
      7: detailData[selectedProduct] ? detailData[selectedProduct].week7 : "",
      8: detailData[selectedProduct] ? detailData[selectedProduct].week8 : "",
    },
    {
      key: detailData[selectedProduct] ? detailData[selectedProduct].key : "",
      metric: "Estoque Projetado",
      1: detailData[selectedProduct] ? calculaEstoqueProjetado(dataSource, 1) : "",
      2: detailData[selectedProduct] ? calculaEstoqueProjetado(dataSource, 2) : "",
      3: detailData[selectedProduct] ? calculaEstoqueProjetado(dataSource, 3) : "",
      4: detailData[selectedProduct] ? calculaEstoqueProjetado(dataSource, 4) : "",
      5: detailData[selectedProduct] ? calculaEstoqueProjetado(dataSource, 5) : "",
      6: detailData[selectedProduct] ? calculaEstoqueProjetado(dataSource, 6) : "",
      7: detailData[selectedProduct] ? calculaEstoqueProjetado(dataSource, 7) : "",
      8: detailData[selectedProduct] ? calculaEstoqueProjetado(dataSource, 8) : "",
    },
    {
      key: detailData[selectedProduct] ? detailData[selectedProduct].key : "",
      metric: "Recebimento Planejado",
      1: detailData[selectedProduct] ? calculaRecebimento(calculaEstoqueProjetado(dataSource, 1), 1) : "",
      2: detailData[selectedProduct] ? calculaRecebimento(calculaEstoqueProjetado(dataSource, 2), 2) : "",
      3: detailData[selectedProduct] ? calculaRecebimento(calculaEstoqueProjetado(dataSource, 3), 3) : "",
      4: detailData[selectedProduct] ? calculaRecebimento(calculaEstoqueProjetado(dataSource, 4), 4) : "",
      5: detailData[selectedProduct] ? calculaRecebimento(calculaEstoqueProjetado(dataSource, 5), 5) : "",
      6: detailData[selectedProduct] ? calculaRecebimento(calculaEstoqueProjetado(dataSource, 6), 6) : "",
      7: detailData[selectedProduct] ? calculaRecebimento(calculaEstoqueProjetado(dataSource, 7), 7) : "",
      8: detailData[selectedProduct] ? calculaRecebimento(calculaEstoqueProjetado(dataSource, 8), 8) : "",
    },
    {
      key: detailData[selectedProduct] ? detailData[selectedProduct].key : "",
      metric: "Liberação das Ordens",
      1: "",
      2: "",
      3: "",
      4: "",
      5: "",
      6: "",
      7: "",
      8: "",
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
