import { Button, Modal } from "antd";
import { useState } from "react";
import DaumPostcode from "react-daum-postcode";

export default function ModalAddressPage() {
  const [isOpen, setIsOpen] = useState(false);
  const [myAddress, setMyAddress] = useState("");
  const [myZoneCode, setMyZoneCode] = useState("");
  // const [myAddressDetail, setMyAddressDetail] = useState("");

  /*   const showModal = () => {
    setIsOpen((prev) => !prev);
  };

  const handleOk = () => {
    setIsOpen((prev) => !prev);
  };

  const handleCancel = () => {
    setIsOpen((prev) => !prev);
  }; */

  const onTogleModal = () => {
    setIsOpen((prev) => !prev);
  };

  const handleComplete = (data: any) => {
    // console.log(data);

    setMyAddress(data.address);
    setMyZoneCode(data.zonecode);
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      <Button onClick={onTogleModal}>우편번호 검색</Button>
      {isOpen && (
        <Modal visible={true} onOk={onTogleModal} onCancel={onTogleModal}>
          <DaumPostcode onComplete={handleComplete} />
        </Modal>
      )}

      <div>내주소 : {myAddress}</div>
      <div>내우편번호 : {myZoneCode} </div>
    </>
  );
}
