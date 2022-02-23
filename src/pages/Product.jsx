import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

import { ProductDetail, ProductInfo, ProductTitle, ResultModal } from "../components/product";
import { getProductDetail } from "../lib/api";

export default function Product() {
  const { id } = useParams();
  const [productData, setProductData] = useState({ name: "", price: "", material: "", delivery: "", description: "" });
  const { name, price, material, delivery, description } = productData;

  const [optionSelected, setOptionSelected] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);

  function handleSelectOptions(title, op) {
    setOptionSelected((current) => {
      const newObj = { ...current };

      newObj[title] = op;

      return newObj;
    });
  }

  function handleClickButton() {
    setIsModalOpen(!isModalOpen);
  }

  useEffect(async () => {
    const { data } = await getProductDetail(id);

    setProductData(data);
  }, []);

  return (
    <>
      <StMainWrapper>
        <ProductTitle productName={name} />
        <StProductDetailWrapper>
          <ProductInfo />
          <ProductDetail
            productDetail={{ price, material, delivery, description }}
            optionSelected={optionSelected}
            onSelectOptions={handleSelectOptions}
            onClickPurchaseBtn={handleClickButton}
          />
        </StProductDetailWrapper>
      </StMainWrapper>
      {isModalOpen && (
        <ResultModal
          optionSelected={{
            제품명: productData.name,
            가격: productData.price,
            배송: productData.country,
            ...optionSelected,
          }}
          onCloseModal={handleClickButton}
        />
      )}
    </>
  );
}

const StMainWrapper = styled.main`
  padding: 4.5rem 8rem 8rem 8rem;
  width: 100%;
`;

const StProductDetailWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  padding-top: 2.8rem;
`;
