import { Inner } from "../../../../../styles/main";
import * as J from "./index.style";
import AddressSearch from "./../../../../api/daum_addressAPI/AddressSearch";

export default function JoinUI(props) {
  return (
    <>
      <Inner width={"1410px"}>
        <J.TitleWrapper>
          <J.Title>회원가입</J.Title>
          <p>오뚜기몰의 회원이 되어 다양한 혜택을 경험해보세요!</p>
          <span>전부 필수항목입니다</span>
        </J.TitleWrapper>

        <J.ContenstWrapper>
          <form onSubmit={props.handleSubmit(props.onClickSubmit)}>
            <div>
              <J.InputWrapper>
                <span>이메일</span>

                {props.errors?.email && (
                  <J.Error>{props.errors.email?.message}</J.Error>
                )}

                <div>
                  <input
                    type="text"
                    {...props.register("email")}
                    placeholder={"이메일을 입력하세요"}
                  />
                </div>
              </J.InputWrapper>

              <J.InputWrapper>
                <span>비밀번호</span>
                {props.errors?.password && (
                  <J.Error>{props.errors.password?.message}</J.Error>
                )}
                <div>
                  <input
                    type="password"
                    {...props.register("password")}
                    placeholder={"비밀번호를 입력하세요(6~20자 이내)"}
                  />
                </div>
              </J.InputWrapper>

              <J.InputWrapper>
                <span>비밀번호 확인</span>
                {props.errors?.confirmPassword && (
                  <J.Error>{props.errors.confirmPassword?.message}</J.Error>
                )}
                <div>
                  <input
                    type="password"
                    {...props.register("confirmPassword")}
                    placeholder={"비밀번호를 한번 더 입력해주세요"}
                  />
                </div>
              </J.InputWrapper>

              <J.InputWrapper>
                <span>이름</span>
                {props.errors?.name && (
                  <J.Error>{props.errors.name?.message}</J.Error>
                )}
                <div>
                  <input
                    type="text"
                    {...props.register("name")}
                    placeholder={"이름은 필수입니다."}
                  />
                </div>
              </J.InputWrapper>

              <J.InputWrapper>
                <span>전화번호</span>
                {props.errors?.phoneNumber && (
                  <J.Error>{props.errors.phoneNumber?.message}</J.Error>
                )}

                <div>
                  <input
                    type="text"
                    {...props.register("phoneNumber")}
                    placeholder={"휴대폰 번호(-제외)"}
                  />
                </div>
              </J.InputWrapper>

              <J.InputWrapper>
                <span>닉네임</span>
                {props.errors?.nickname && (
                  <J.Error>{props.errors.nickname?.message}</J.Error>
                )}
                <div>
                  <input
                    type="text"
                    {...props.register("nickname")}
                    placeholder={"닉네임은 필수입니다."}
                  />
                </div>
              </J.InputWrapper>

              <J.InputWrapper>
                <span>생년월일</span>
                {props.errors?.DOB && (
                  <J.Error>{props.errors.DOB?.message}</J.Error>
                )}

                <div>
                  <input
                    type="date"
                    {...props.register("DOB")}
                    placeholder={"생년월일은 필수입니다."}
                  />
                </div>
              </J.InputWrapper>

              <J.InputWrapper>
                <J.AddressWrapper>
                  <J.Inner>
                    <span>주소</span>

                    {props.errors?.primaryAddress && (
                      <J.Error>{props.errors.primaryAddress?.message}</J.Error>
                    )}
                  </J.Inner>

                  <AddressSearch
                    handleAddressSelect={props.handleAddressSelect}
                  />
                </J.AddressWrapper>

                <input
                  type="text"
                  {...props.register("primaryAddress")}
                  placeholder={"주소는 필수입니다."}
                  value={props.address}
                  readOnly
                />
                <input
                  type="text"
                  {...props.register("detailedAddress")}
                  value={props.detailedAddress}
                  placeholder="상세주소"
                />
              </J.InputWrapper>

              <button type="submit">가입하기</button>
            </div>
          </form>
        </J.ContenstWrapper>
      </Inner>
    </>
  );
}
