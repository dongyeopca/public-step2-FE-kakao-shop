### 페이지별 구성

- 메인 페이지
- 검색 결과 페이지
- 개별 상품 상세 페이지
- 로그인 페이지
- 회원가입 페이지
- 회원가입 성공 페이지
- 장바구니 페이지
- 주문 목록 확인 페이지
- 주문 페이지
- 결제 페이지
- 결제 완료 페이지


1. 메인 페이지
- 핵심 기능 : 회원가입 및 로그인, 검색, 장바구니를 사용할 수 있도록 표시하며 상품 목록을 출력
- 기능 상세 설명 : 인기 상품 등을 포함한 상품의 목록을 출력합니다. 또한 사용자가 검색, 로그인, 회원가입, 장바구니 기능을 사용할 수 있도록 하는 인터페이스를 제공합니다.
- 인터페이스 요구사항 : 상품의 정보를 요청하고 받아와서 나타냅니다. 로그인, 회원가입, 장바구니 버튼을 클릭하면 해당 페이지로 이동합니다. 검색 창에서 키워드를 검색하면 검색 요청을 보내고 검색 결과 페이지로 이동하여 결과를 나타냅니다.


2. 검색 결과 페이지
- 핵심 기능 : 키워드로 검색한 결과 출력
- 기능 상세 설명 : 키워드로 검색한 결과를 받아와 해당하는 상품들의 목록을 나타냅니다.
- 인터페이스 요구사항 : 검색 요청의 응답에 포함된 상품들을 출력합니다. 응답에 포함된 상품이 없다면 검색 결과가 없다고 알립니다.


3. 개별 상품 상세 페이지
- 핵심 기능 : 해당 상품의 이름, 옵션, 가격, 상세 설명 등의 정보 제공 및 장바구니 또는 주문 목록에 해당 상품 추가
- 기능 상세 설명 : 해당 상품의 정보를 요청하여 받아와 사용자에게 제공합니다. 그리고 수량과 옵션을 선택하여 장바구니 또는 주문 목록에 해당 상품을 추가할 수 있습니다.
- 인터페이스 요구사항 : 상품 상세 정보 요청의 응답을 받아와 상품명, 가격, 상세 설명 등을 출력합니다. 장바구니에 담기 버튼 클릭 시, 선택된 옵션과 수량 정보로 상품을 장바구니에 저장하는 요청을 보내고 결과 알림을 나타냅니다.


4. 로그인 페이지
- 핵심 기능 : 로그인 요청 및 사용자 로그인 정보 저장
- 기능 상세 설명 : 이메일과 비밀번호를 이용해 로그인은 진행하고, 이에 대한 상태를 처리합니다.
- 인터페이스 요구사항 : 이메일 또는 비밀번호에 들어온 값이 적합하지 않은 경우 적절한 알림을 보냅니다. 이메일과 비밀번호의 값이 모두 적합하다면 로그인 요청을 보냅니다. 


5. 회원가입 페이지
- 핵심 기능 : 회원가입에 필요한 정보를 입력받아 회원가입 요청
- 기능 상세 설명 : 이메일, 이름, 비밀번호, 비밀번호 확인 값을 사용자에게 입력받고 이에 대한 상태를 처리합니다.
- 인터페이스 요구사항 : 이메일, 이름, 비밀번호, 비밀번호 확인 값을 입력받고 들어온 값이 적합하지 않은 경우 적절한 알림을 보냅니다. 입력값이 모두 적합하다면 회원가입 버튼 클릭 시 회원가입 요청을 보내고 결과 페이지로 이동합니다.


6. 회원가입 성공 페이지
- 핵심 기능 : 회원가입 요청 성공을 알림
- 기능 상세 설명 : 회원가입이 성공적으로 완료되었음을 알려줍니다. 가입한 계정에 대한 정보를 출력하고 메인 페이지와 로그인 페이지로 이동할 수 있는 버튼을 제공합니다.
- 인터페이스 요구사항 : 가입한 계정의 정보를 요청하고 응답을 받아와 출력합니다. 메인 페이지와 로그인 페이지로 이동하는 버튼을 클릭하면 해당 페이지로 이동합니다.


7. 장바구니 페이지
- 핵심 기능 : 현재 장바구니에 담긴 상품 목록을 출력하고 수량을 변경하거나 주문
- 기능 상세 설명 : 현재 장바구니에 담긴 상품들의 정보(상품명, 옵션, 가격 등)와 수량, 총 금액을 출력합니다. 상품의 종류마다 수량을 변경하거나 삭제할 수 있습니다. 그리고 장바구니에 현재 담긴 상품들을 주문할 수 있습니다.
- 인터페이스 요구사항 : 장바구니 상품 데이터 요청 및 출력합니다. 상품 별로 주문 수량을 변경할 수 있는 버튼으로 수량을 변경합니다. 수량 변경 시 총 금액이 따라서 변경됩니다. 주문하기 버튼 클릭 시 주문 목록 확인 페이지로 이동합니다.


8. 주문목록 페이지
- 핵심 기능 : 주문할 상품 목록 확정
- 기능 상세 설명 : 결정된 상품 종류, 수량, 총 금액 등의 목록을 확인합니다. 해당 상품 목록을 주문 정보로 사용하여 결제 단계로 넘어갈 수 있습니다.
- 인터페이스 요구사항 : 장바구니에 저장된 상품 목록과 총 금액을 요청하여 출력합니다. 주문하기 버튼 클릭 시 주문 페이지로 이동합니다.


9. 주문 페이지
- 핵심 기능 : 배송지, 연락처 등 주문 정보를 입력받고 저장
- 기능 상세 설명 : 상품을 주문하기 위한 정보들(배송지, 연락처 등)을 입력받고 결제를 진행할 수 있습니다.
- 인터페이스 요구사항 : 주어진 입력값이 모두 적합한 값일 때 결제 버튼을 클릭하면 입력한 정보를 저장하고 결제 페이지로 이동합니다.


10. 결제 페이지
- 핵심 기능 : 주문이 진행 중인 상품 목록의 결제
- 기능 상세 설명 : 주문 금액에 대한 결제를 진행합니다. 결제 방법을 선택하고 선택된 방법으로 결제 요청을 보냅니다.
- 인터페이스 요구사항 : 결제 방법을 선택할 수 있는 인터페이스를 제공하고 결제 방법 선택 시 결제 요청을 보냅니다.


11. 결제 완료 페이지
- 핵심 기능 : 주문의 결제 완료를 알림
- 기능 상세 설명 : 해당 주문의 결제 요청의 결과가 성공하여 이를 알립니다. 주문 상품에 대한 상세 정보를 출력합니다.
- 인터페이스 요구사항 : 결제 요청 성공 시 주문 내역의 상세 정보를 출력합니다. 메인 화면으로 갈 수 있는 버튼을 클릭하면 메인 페이지로 이동합니다.



### 디렉터리 구조

└─ src
 ├─ apis
 ├─ assets
 ├─ components
 ├─ styles
 ├─ hooks
 ├─ dto
 ├─ utils