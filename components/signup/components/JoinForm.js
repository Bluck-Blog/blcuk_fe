// lib
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useRecoilValue } from "recoil";
import { useForm } from "react-hook-form";

//components
import { validation } from "../../module/validation";
import { POST } from "../../../api/Post";
import { GET } from "../../../api/Get";
import { darkMode } from "../../../state/atom";
import * as S from "../../../styles/signup/JoinFormStyle";

//img
import Active from "../../../styles/img/activeCheck.png";
import Check from "../../../styles/img/check.png";
import BlackActive from "../../../styles/img/blackActiveCheck.png";
import BlackCheck from "../../../styles/img/blackCheck.png";
import moment from "moment/moment";

export default function JoinForm() {
  const isDark = useRecoilValue(darkMode);

  // 프로필 사진
  const [profile, setProfile] = useState("");
  const [profileFile, setProfileFile] = useState(null);

  // 개인정보 동의 체크
  const [check, setCheck] = useState(false);

  // 인증번호 유효성
  const [isSentAuthEmail, setIsSentAuthEmail] = useState(false);
  const [isCheckAuthNumber, setIsCheckAuthNumber] = useState(false);

  // verifyCode
  const [verifyCode, setVerifyCode] = useState("");

  const {
    register,
    handleSubmit,
    setError,
    getValues,
    formState: { errors },
  } = useForm();

  const joinSubmit = async (data) => {
    console.log("data===");
    console.log(data);

    if (!check) {
      setError("origin", { message: "개인정보 수집을 동의해주세요." });
      return;
    }

    if (!isSentAuthEmail || !isCheckAuthNumber) {
      setError("origin", { message: "이메일 인증을 완료해주세요." });
      return;
    }

    if (data.password !== data.passwordcheck) {
      setError("password", { message: "비밀번호를 확인해주세요" });
      return;
    }

    const formData = new FormData();

    formData.append("birthdate", data.birthday);
    formData.append("email", data.email);
    formData.append("introduction", data.introduction);
    formData.append("name", data.name);
    formData.append("nickname", data.nickname);
    formData.append("password", data.password);
    formData.append("phone", data.phone);
    formData.append("profileImage", profileFile);
    formData.append("profileMessage", data.profileMessage);
    formData.append("verifyCode", data.authNumber);

    const request = {
      birthdate: moment(data.birthday).format("YYYY-MM-DD"),
      email: data.email,
      introduction: data.introduction,
      name: data.name,
      nickname: data.nickname,
      password: data.password,
      phone: data.phone,
      profileImage:
        "https://png.pngtree.com/png-vector/20190119/ourmid/pngtree-dummy-limb-cartoon-cartoon-limb-png-image_476981.jpg",
      profileMessage: data.profileMessage,
      verifyCode: data.authNumber,
    };

    console.log("request===");
    console.log(request);

    // const res = await POST.register(formData);
    const res = await POST.register(request);

    console.log("res===");
    console.log(res);
  };

  const uploadProfile = (e) => {
    const {
      target: { files },
    } = e;

    const photo = files[0];
    const photoURL = URL.createObjectURL(photo);
    setProfileFile(photo);
    setProfile(photoURL);
  };

  const onCheckAuthNumberHandler = async (e) => {
    e.preventDefault();

    if (isCheckAuthNumber) {
      return;
    }

    const authNumber = getValues("authNumber");
    const res = await POST.confirmEmail({ code: authNumber, verifyCode });
    console.log("res==");
    console.log(res);

    if (res.code >= 0) {
      setIsCheckAuthNumber(true);
      return;
    }

    if (res.code < 0) {
      setError("authNumber", { message: "인증번호가 잘못되었습니다." });
      return;
    }
  };

  const onSentEmail = async (e) => {
    e.preventDefault();
    const email = getValues("email");
    const isValidation = validation.email.test(email);

    if (isSentAuthEmail) {
      return;
    }

    if (!isValidation) {
      setError("email", { message: "*이메일 형식이 잘못되었습니다.*" });
      return;
    }

    const res = await GET.sentAuthEmail(email);

    if (res.code >= 0) {
      setVerifyCode(res.body);
      setIsSentAuthEmail(true);
      return;
    }

    if (res.code < 0) {
      setError("email", { message: "인증번호 전송에 실패했습니다." });
      return;
    }
  };

  return (
    <S.Section>
      <S.PhotoBtn photo={profile && profile} for="profilePhoto">
        {profile ? "" : "+"}
      </S.PhotoBtn>
      <S.FileInput
        onChange={uploadProfile}
        accept="image/*"
        type="file"
        id="profilePhoto"
      />
      <S.Form onSubmit={handleSubmit(joinSubmit)}>
        <S.InputBox>
          <S.Label>이메일</S.Label>
          <S.ConFirmInput
            {...register("email", {
              required: "*이메일을 입력해주세요.*",
              pattern: {
                value: validation.email,
                message: "*이메일 형식이 잘못되었습니다.*",
              },
            })}
            type="text"
            onChange={() => {
              setIsSentAuthEmail(false);
              setIsCheckAuthNumber(false);
              setError("email", { message: "" });
            }}
            placeholder="이메일을 입력해주세요."
          />
          <S.ConfirmBtn onClick={onSentEmail}>
            {isSentAuthEmail ? "전송 완료" : "인증번호 전송"}
          </S.ConfirmBtn>
        </S.InputBox>
        <S.ErrorMsg>{errors?.email?.message}</S.ErrorMsg>
        <S.InputBox>
          <S.Label>인증번호</S.Label>
          <S.ConFirmInput
            {...register("authNumber", {
              required: "*인증 번호를 확인해주세요.*",
            })}
            type="text"
            placeholder="메일로 받은 인증번호 입력해주세요."
            disabled={isCheckAuthNumber}
          />
          <S.ConfirmBtn onClick={onCheckAuthNumberHandler}>
            {isCheckAuthNumber ? "인증완료" : "인증확인"}
          </S.ConfirmBtn>
        </S.InputBox>
        <S.ErrorMsg>{errors?.authNumber?.message}</S.ErrorMsg>
        <S.InputBox>
          <S.Label>별명</S.Label>
          <S.Input
            type="text"
            {...register("nickname", {
              required: "*닉네임을 입력주세요.*",
            })}
            placeholder="별명을 입력해주세요."
          />
        </S.InputBox>
        <S.ErrorMsg>{errors?.nickname?.message}</S.ErrorMsg>
        <S.InputBox>
          <S.Label>비밀번호</S.Label>
          <S.Input
            {...register("password", {
              required: "*비밀번호를 입력해주세요.*",
              pattern: {
                value: validation.password,
                message: "*비밀번호 형식이 잘못되었습니다.*",
              },
            })}
            type="password"
            placeholder="비밀번호를 입력해주세요."
          />
        </S.InputBox>
        <S.ErrorMsg>{errors?.password?.message}</S.ErrorMsg>
        <S.InputBox>
          <S.Label>재확인</S.Label>
          <S.Input
            {...register("passwordcheck", {
              required: "*비밀번호 확인을 입력해주세요.*",
              // pattern: {
              //   value: "",
              //   message: "*비밀번호와 다릅니다.*",
              // },
            })}
            type="password"
            placeholder="비밀번호를 다시 입력해주세요."
          />
        </S.InputBox>
        <S.ErrorMsg>{errors?.passwordcheck?.message}</S.ErrorMsg>
        <S.InputBox>
          <S.Label>이름</S.Label>
          <S.Input
            {...register("name", {
              required: "*이름을 작성해주세요.*",
            })}
            type="text"
            placeholder="이름을 입력해주세요."
          />
        </S.InputBox>
        <S.ErrorMsg>{errors?.name?.message}</S.ErrorMsg>
        <S.InputBox>
          <S.Label>생년월일</S.Label>
          <S.Input
            {...register("birthday", {
              required: "*생년월일 입력해주세요.*",
              pattern: {
                value: validation.birthday,
                message: "*생년월일 형식이 잘못돼었습니다.*",
              },
            })}
            type="text"
            placeholder="생년월일 6자리 입력해주세요."
          />
        </S.InputBox>
        <S.ErrorMsg>{errors?.birthday?.message}</S.ErrorMsg>
        <S.InputBox>
          <S.Label>휴대전화</S.Label>
          <S.Input
            {...register("phone", {
              required: "*휴대전화 번호를 입력해주세요.*",
              pattern: {
                value: validation.phone,
                message: "*휴대전화 번호 형식이 잘못돼었습니다.*",
              },
            })}
            type="text"
            placeholder="-없이 입력해주세요."
          />
        </S.InputBox>
        <S.ErrorMsg>{errors?.phone?.message}</S.ErrorMsg>
        <S.StateMsg>
          <S.Label>상태메시지</S.Label>
          <S.Input
            {...register("profileMessage", {
              required: false,
            })}
            type="text"
            placeholder="상태메시지 입력해주세요."
          />
        </S.StateMsg>
        <S.IntroBox>
          <S.IntroLabel>자기소개</S.IntroLabel>
          <S.IntroInput
            {...register("introduction", {
              required: false,
            })}
            type="text"
            placeholder="상태메시지 입력해주세요."
          />
        </S.IntroBox>
        <S.IdRememberBox onClick={() => setCheck((prev) => !prev)}>
          <S.IdRememberImageBox>
            <Image
              src={
                isDark
                  ? check
                    ? BlackActive
                    : BlackCheck
                  : check
                  ? Active
                  : Check
              }
              layout="fill"
            />
          </S.IdRememberImageBox>
          <S.IdRememberText>개인정보 수집 이용에 대한 동의</S.IdRememberText>
        </S.IdRememberBox>
        <S.ErrorMsg>{errors?.origin?.message}</S.ErrorMsg>
        <S.BtnBox>
          <S.Btn>취소</S.Btn>
          <S.Btn type="submit">회원가입</S.Btn>
        </S.BtnBox>
      </S.Form>
    </S.Section>
  );
}
