"use client";
import React, { useState } from "react";
import DaumPostcode from "react-daum-postcode";
import Modal from "./Modal";
import * as A from "./AddressSearch.style";

export default function AddressSearch(props) {
  const [isOpen, setIsOpen] = useState(false);

  const handleAddressComplete = (data) => {
    props.handleAddressSelect(data.address);
    setIsOpen(false);
  };

  const handleButtonClick = (event) => {
    event.preventDefault(); // 기본 동작 방지
    setIsOpen(true); // 모달 열기
  };

  return (
    <A.Wrapper>
      <button onClick={handleButtonClick}>주소 검색</button>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <DaumPostcode onComplete={handleAddressComplete} />
      </Modal>
    </A.Wrapper>
  );
}
