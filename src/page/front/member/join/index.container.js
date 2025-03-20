import JoinUI from "./index.presenter";
import { useState } from "react";
import { auth, db } from "../../../../firebaseConfig";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc, Timestamp } from "firebase/firestore";
import { useCheckExists } from "./../../../../Componant/hooks/useCheckExists";
import { schema } from "./../../../../Componant/hooks/validationSchema";
import { useRouter } from "next/router";

export default function Join(props) {
  //에러메세지
  const [errorMessage, setErrorMessage] = useState("");
  const { checkExists, loading, error } = useCheckExists();

  const router = useRouter();

  // useForm 훅 사용
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema(checkExists)), // Yup으로 유효성 검사 설정
  });

  // 폼 제출 핸들러
  const onClickSubmit = async (data) => {
    setErrorMessage("");

    // Firestore에 저장
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password
        // data.confirmPassword,
        // data.DOB,
        // data.nickname,
        // data.name,
        // data.phoneNumber,
        // data.address
      );

      //db에 유저정보 저장
      const User = userCredential.user;
      await setDoc(doc(db, "User", User.uid), {
        email: data.email,
        displayName: data.nickname,
        DOB: Timestamp.fromDate(new Date(data.DOB)),
        phoneNumber: data.phoneNumber,
        name: data.name,
        primaryAddress: data.primaryAddress, // 1차 주소
        detailedAddress: data.detailedAddress, // 상세 주소
      });

      //회원가입 성공시 메세지 띄우기
      alert("회원가입이 완료되었습니다.");

      //메인화면으로 리다이렉트
      router.push("/main");
    } catch (error) {
      console.error("사용자 등록 오류:", error.message);
    }
  };

  const [address, setAddress] = useState("");

  const handleAddressSelect = (selectedAddress) => {
    setAddress(selectedAddress);
    setValue("primaryAddress", selectedAddress);
  };

  return (
    <JoinUI
      register={register}
      errors={errors}
      handleSubmit={handleSubmit}
      onClickSubmit={onClickSubmit}
      errorMessage={errorMessage}
      setErrorMessage={setErrorMessage}
      address={address}
      handleAddressSelect={handleAddressSelect}
    />
  );
}
