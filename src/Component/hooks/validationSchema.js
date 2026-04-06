// Yup 스키마 정의
import * as yup from "yup";

export const schema = (checkExists) =>
  yup.object().shape({
    email: yup
      .string()
      .trim() // 앞뒤 공백 제거
      .email("유효한 이메일이 아닙니다.")
      .required("이메일은 필수입니다.")
      .test("email-exists", "이미 사용 중인 이메일입니다.", async (value) => {
        if (value) {
          const exists = await checkExists("User", "email", value);
          return !exists;
        }
        return true;
      }),
    nickname: yup
      .string()
      .trim() // 앞뒤 공백 제거
      .required("닉네임은 필수입니다.")
      .test(
        "nickname-exists",
        "이미 사용 중인 닉네임입니다.",
        async (value) => {
          if (value) {
            const exists = await checkExists("User", "nickname", value);
            return !exists;
          }
          return true;
        }
      ),
    password: yup
      .string()
      .trim() // 앞뒤 공백 제거
      .min(6, "비밀번호는 6-20자이어야 합니다.")
      .max(20, "비밀번호는 최소 6-20자이어야 합니다.")
      .required("비밀번호는 필수입니다."),

    confirmPassword: yup
      .string()
      .trim() // 앞뒤 공백 제거
      .oneOf([yup.ref("password"), null], "비밀번호가 일치하지 않습니다.")
      .required("2차 비밀번호는 필수입니다."),

    name: yup.string().trim().required("이름은 필수입니다."),

    DOB: yup
      .date()
      .nullable()
      .transform((value, originalValue) => {
        return originalValue === "" ? null : value; //
      })
      .required("생년월일은 필수입니다.")
      .max(new Date(), "생년월일은 오늘 이전이어야 합니다."),

    phoneNumber: yup
      .string()
      .trim()
      .required("핸드폰 번호는 필수입니다.")
      .matches(
        /^(01[0-9]{1})([-]?)([0-9]{3,4})([-]?)([0-9]{4})$/,
        "유효한 핸드폰 번호 형식이 아닙니다. (예: 010-1234-5678 또는 01012345678)"
      ),

    primaryAddress: yup.string().required("주소는 필수입니다."),
  });
