import Head from "next/head";

declare const window: typeof globalThis & {
  IMP: any;
};

export default function PaymentPage() {
  function onClickPayment() {
    const IMP = window.IMP; // 생략 가능
    IMP.init("imp49910675"); // 아임포트 시스템설정 가맹점 식별코드
    IMP.request_pay(
      {
        // param
        pg: "html5_inicis",
        pay_method: "card",
        /* merchant_uid: "ORD20180131-0000011", // 제품번호를 넣거나 삭제 */
        name: "피곤함 200g",
        amount: 100,
        buyer_email: "gildong@gmail.com",
        buyer_name: "홍길동",
        buyer_tel: "010-4242-4242",
        buyer_addr: "서울특별시 강남구 신사동",
        buyer_postcode: "01181",
        m_redirect_url: "localhost:3000/28-01-payment", // 모바일 결제후 리다렉트될 주소!!!
      },
      (rsp) => {
        // callback
        if (rsp.success) {
          console.log(rsp);
          // 결제 성공 시 로직,

          // createPointTransactionOfLoading  뮤테이션 실행하기(impUid 인자로 넘기기)
          // 결제날짜 결제된 시간, 취소된 시간
        } else {
          // 결제 실패 시 로직,
        }
      }
    );
  }

  return (
    <>
      <Head>
        <script
          type="text/javascript"
          src="https://code.jquery.com/jquery-1.12.4.min.js"
        ></script>
        <script
          type="text/javascript"
          src="https://cdn.iamport.kr/js/iamport.payment-1.2.0.js"
        ></script>
      </Head>
      <div>
        결제금액 <input type="text" />
      </div>
      <button onClick={onClickPayment}>결제하기</button>
    </>
  );
}
