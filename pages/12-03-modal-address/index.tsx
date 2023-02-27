import { Button, Modal } from "antd";
import { useState } from "react";
import DaumPostcode from "react-daum-postcode";

export default function ModalAddressPage() {
  const [isOpen, setIsOpen] = useState(false);
  const [myAddress, setMyAddress] = useState("");
  const [myZoneCode, setMyZoneCode] = useState("");
  // const [myAddressDetail, setMyAddressDetail] = useState("");

  const showModal = () => {
    setIsOpen(true);
  };

  const handleOk = () => {
    setIsOpen(false);
  };

  const handleCancel = () => {
    setIsOpen(false);
  };

  const handleComplete = (data: any) => {
    // console.log(data);

    setMyAddress(data.address);
    setMyZoneCode(data.zonecode);
    setIsOpen(false);
  };

  return (
    <>
      <Button onClick={showModal}>우편번호 검색</Button>
      {isOpen && (
        <Modal visible={true} onOk={handleOk} onCancel={handleCancel}>
          <DaumPostcode onComplete={handleComplete} />
        </Modal>
      )}

      <div>내주소 : {myAddress}</div>
      <div>내우편번호 : {myZoneCode} </div>
    </>
  );
}
