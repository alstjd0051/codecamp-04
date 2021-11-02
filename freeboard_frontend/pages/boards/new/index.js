// export default 해서 만들기!!!() - class 보고 따라만들기

import React, { useState } from 'react'
import { BGRound, Header, TopBox, PreparingInput, Preparing, Password_box, Password, PasswordInput, TitleBox, TitleBox_input, TitleText, Content_box, Content_title, Content__box, Address, Address_title, Youtube_box, Youtube_title, Youtube_addr, Address_num, Address_add, Youtube_details, Picture, PictureTitle, Upload_picture1, Upload, MainSetting, SettingTitle, SettingRadio, Registration, Zipcodeserch } from '../../../styles/port'

function index() {

  const [errorName, setErrorName] = useState()

  function name() {
    console.log(object)
    
  }

  function named__() {
    console.log('작성자를 입력하세요')

  }

  function register() {

    if (errorName.includes('') === false) {
      setErrorName('작성자를 다시 입력해주세요')
    }
  }

  return (
    <>
      <BGRound>
        <Header>게시물등록</Header>


        <TopBox>
          <Preparing onChange={name}>작성자</Preparing>
          <div style={{ color: "red" }}>{errorName}</div>
          <PreparingInput type="text" placeholder="이름을 적어주세요" />
          <Password>비밀번호</Password>
          <PasswordInput type="password" placeholder="비밀번호를 입력해주세요" />
        </TopBox>

        <TitleBox >
          <TitleText>제목</TitleText>
          <TitleBox_input placeholder="제목을 입력해주세요" />
        </TitleBox>

        <Content_box>
          <Content_title>내용</Content_title>
          <Content__box placeholder="내용을 입력하세요" />
        </Content_box>

        <Address>
          <Address_title>주소</Address_title>
          <Address_num type="number" placeholder="07250" />
          <Zipcodeserch>우편번호 검색</Zipcodeserch>
          <Address_add type="text" />
          <Youtube_details type="text" />
        </Address>

        <Youtube_box >
          <Youtube_title>유튜브</Youtube_title>
          <Youtube_addr placeholder="링크를 복사해주세요"></Youtube_addr>
        </Youtube_box>

        <Picture>
          <PictureTitle>사진첨부</PictureTitle>
          <Upload>
            <Upload_picture1><div>+</div>Upload</Upload_picture1>
            <Upload_picture1><div>+</div>Upload</Upload_picture1>
            <Upload_picture1><div>+</div>Upload</Upload_picture1>
          </Upload>
        </Picture>

        <MainSetting>
          <SettingTitle>메인 설정</SettingTitle>
          <SettingRadio type="radio" id="youtube" value="youtube" name="radio" checked />
          <label htmlFor="youtube">유튜브</label>
          <SettingRadio type="radio" id="picture" name="radio" value="picture" />
          <label htmlFor="picture" >사진</label>
        </MainSetting>
        <div style={{ display: "flex", justifyContent: "center" }}>
          {/* <Cancel>취소하기</Cancel> */}
          <Registration onClick={register}>등록하기</Registration>

        </div>

      </BGRound>
    </>
  )
}

export default index


