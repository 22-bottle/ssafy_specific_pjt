# Hico

#### **삼성 청년 SW아카데미(SSAFY) 10th 특화 핀테크 프로젝트**

## **📅 프로젝트 진행 기간**


### **2024.02.19 ~ 2024.04.04(7주)**

## **🔎 프로젝트 소개**

**❤️ 서비스 한줄 소개**

> ‘**Hico**’ 는 세계사 이야기와 환율 변동의 흥미진진한 결합을 통해 초등학생들에게 금융 기초를 쉽고 재미있게 가르치는 창의적인 **핀테크 교육 플랫폼**입니다.
> 

## **💑 멤버 소개**
![제목을-입력해주세요_-004](/uploads/5f979f4773a18e97468186ae5a57ac25/제목을-입력해주세요_-004.jpg)

## **⚙️ 기술 스택**

| | |
| --- | --- |
| Back-end | Java, Spring Boot, JWT, MySQL, JPA, Gradle |
| Front-end | Npm, Node, React, Recoil, Typescript, Json, HTML5, CSS3 |
| Infra | AWS, Docker, Jenkins, NGINX |
| Tools | Notion, GitLab, JIRA, MatterMost |

## 🛠️ 서비스 아키텍처
![Untitled](/uploads/5c536b676ae5eb951531734120dde791/Untitled.png)



## 📈 ERD
![hicoERD](/uploads/c8cfc0b9757b9bbfbd9b2972ed9c2132/hicoERD.png)


## 📋 API 명세서

[![Postman__software_](/uploads/6ef2480888286a0c8b95e82a062e26b9/Postman__software_.png)](https://documenter.getpostman.com/view/29635180/2sA358ckD5#ebc7ff68-4a43-4829-8412-b37731aeb995)

## **🧾 기능 소개**
### 부모

**부모 회원가입**
![부모회원가입](/uploads/e3357d2fc907d902566ed6c9102c741a/부모회원가입.gif)

**계좌등록**
![계좌등록](/uploads/1605696189ff70d541cd540a57b3e93f/계좌등록.gif)

**아이 초대 코드**
![초대코드](/uploads/fde755ff0f2933cd7f91fdaf5e1c9e5a/초대코드.gif)

**아이 학습 현황**
![자녀학습현황](/uploads/9ad79cf77cb4c776d393f023c8f31039/자녀학습현황.gif)

**부모 지갑**
![부모지갑](/uploads/3a2f8c708a4dcfccf7fa9630b03cc322/부모지갑.gif)

**송금**
![송금](/uploads/7233c706f17263c950343d8dcc74af3a/송금.gif)

### 아이
**아이 회원가입**
![아이회원가입](/uploads/80dcbd7422b9cdfcd2755756a0c6ada8/아이회원가입.gif)

**로그인**
![아이로그인](/uploads/8deb84f3e63497edda61ece5e5fd538f/아이로그인.gif)

**스토리**
![스토리](/uploads/bb348e00e26ce3213430576de685ef8b/스토리.gif)

**아이 월드맵**
![월드맵](/uploads/27162cc66f02ec7299f7fcd2a1934388/월드맵.gif)

**아이 스테이지**
![스테이지](/uploads/f12ed63f8463451252549cb2c022a05a/스테이지.gif)

**아이 만화**
![만화](/uploads/7d2018e02300e3f7a95220ae7f074a45/만화.gif)

**아이 포인트**
![아이포인트](/uploads/dabba718562925008cb4ea2e61e833e4/아이포인트.gif)

**아이 환전 요청**
![환전요청](/uploads/6e93c2906ab581f4ef7efb8dc92cfa69/환전요청.gif)

**아이 지갑**
![내지갑](/uploads/d4177b82966cc1dcc5d78dbcda997db9/내지갑.gif)

**환율**
![환율](/uploads/c278ecbdac3c22566c466495c3cdaaae/환율.gif)


## 📂 프로젝트 디렉토리 구조
<details>
  <summary>
  Back-End
  </summary>

    📦src
     ┣ 📂main
     ┃ ┣ 📂java
     ┃ ┃ ┗ 📂ssafy
     ┃ ┃ ┃ ┗ 📂hico
     ┃ ┃ ┃ ┃ ┣ 📂config
     ┃ ┃ ┃ ┃ ┃ ┣ 📜FilterConfig.java
     ┃ ┃ ┃ ┃ ┃ ┣ 📜S3Config.java
     ┃ ┃ ┃ ┃ ┃ ┣ 📜SecurityConfig.java
     ┃ ┃ ┃ ┃ ┃ ┗ 📜WebConfig.java
     ┃ ┃ ┃ ┃ ┣ 📂domain
     ┃ ┃ ┃ ┃ ┃ ┣ 📂account
     ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂controller
     ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜AccountController.java
     ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂dto
     ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂request
     ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜InquireAccountTransactionRequest.java
     ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜MakeAccountRequest.java
     ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜OpenAccountRequest.java
     ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜RegistrationAccountRequest.java
     ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📂response
     ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜AccountListResponse.java
     ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜InquireAccountTransactionResponse.java
     ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜OpenAccountResponse.java
     ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂entity
     ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜Account.java
     ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂repository
     ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜AccountRepository.java
     ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📂service
     ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜AccountService.java
     ┃ ┃ ┃ ┃ ┃ ┣ 📂book
     ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂controller
     ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜BookController.java
     ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂dto
     ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📂request
     ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜BookAddRequest.java
     ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂entity
     ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜BookPage.java
     ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂repository
     ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜BookRepository.java
     ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📂service
     ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜BookService.java
     ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜S3Uploader.java
     ┃ ┃ ┃ ┃ ┃ ┣ 📂country
     ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂entity
     ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜Country.java
     ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📂repository
     ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜CountryRepository.java
     ┃ ┃ ┃ ┃ ┃ ┣ 📂exchangerate
     ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂controller
     ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜ExchangeRateController.java
     ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂dto
     ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📂response
     ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜ExchangeRateApiResponse.java
     ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜ExchangeRateFindResponse.java
     ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂entity
     ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜ExchangeRate.java
     ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜Variation.java
     ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂repository
     ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜ExchangeRateRepository.java
     ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📂service
     ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜ExchangeRateService.java
     ┃ ┃ ┃ ┃ ┃ ┣ 📂history
     ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂dto
     ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📂response
     ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜HistoryFindResponse.java
     ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜HistoryRec.java
     ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂entity
     ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜History.java
     ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📂repository
     ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜HistoryRepository.java
     ┃ ┃ ┃ ┃ ┃ ┣ 📂member
     ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂controller
     ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜ChildController.java
     ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜MemberController.java
     ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜ParentController.java
     ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂dto
     ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂request
     ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜BankAccountBalanceRequest.java
     ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜BankMemberCreateRequest.java
     ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜BankMemberSearchRequest.java
     ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜MemberLoginRequest.java
     ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜MemberSignUpRequest.java
     ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜ParentAccountTransferRequest.java
     ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜ParentSendMoneyRequest.java
     ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📂response
     ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜AccountBalanceResponse.java
     ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜BankMemberSearchResponse.java
     ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜ChildInfoResponse.java
     ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜ChildPointResponse.java
     ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜ChildQuizStatusResponse.java
     ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜LoginResponse.java
     ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜MemberSignUpResponse.java
     ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂entity
     ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜Gender.java
     ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜Member.java
     ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜Role.java
     ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂repository
     ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜MemberRepository.java
     ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📂service
     ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜ChildService.java
     ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜MemberService.java
     ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜ParentService.java
     ┃ ┃ ┃ ┃ ┃ ┣ 📂point
     ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂controller
     ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜PointController.java
     ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂dto
     ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂response
     ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜MyPointResponse.java
     ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜ChildApplyTranRequest.java
     ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂entity
     ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜FrPoint.java
     ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂repository
     ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜FrPointRepository.java
     ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📂service
     ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜PointService.java
     ┃ ┃ ┃ ┃ ┃ ┣ 📂quiz
     ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂entity
     ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜Difficulty.java
     ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜Quiz.java
     ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜QuizLevel.java
     ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜QuizStatus.java
     ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜QuizType.java
     ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📂repository
     ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜QuizRepository.java
     ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜QuizStatusRepository.java
     ┃ ┃ ┃ ┃ ┃ ┣ 📂stage
     ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂controller
     ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜StageController.java
     ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂dto
     ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂request
     ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜QuizResult.java
     ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜StageQuizSaveRequest.java
     ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📂response
     ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜Page.java
     ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜ProgressRate.java
     ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜QuizInfo.java
     ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜StageBookFindResponse.java
     ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜StageChildFindResponse.java
     ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜StageCountryFindResponse.java
     ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜StageQuizFindResponse.java
     ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂entity
     ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜Season.java
     ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜Stage.java
     ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜StageStatus.java
     ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂repository
     ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜StageRepository.java
     ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜StageStatusRepository.java
     ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📂service
     ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜StageService.java
     ┃ ┃ ┃ ┃ ┃ ┣ 📂transaction
     ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂dto
     ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂request
     ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📂response
     ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜AccountAndFrTranResponse.java
     ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜ChildForeignTransactionResponse.java
     ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜FrTransactionResponse.java
     ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂entity
     ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜FrTransaction.java
     ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📂repository
     ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜FrTransactionRepository.java
     ┃ ┃ ┃ ┃ ┃ ┗ 📂wallet
     ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂entity
     ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜FrWallet.java
     ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📂repository
     ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜FrWalletRepository.java
     ┃ ┃ ┃ ┃ ┣ 📂global
     ┃ ┃ ┃ ┃ ┃ ┣ 📂annotation
     ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜LoginOnly.java
     ┃ ┃ ┃ ┃ ┃ ┣ 📂aspect
     ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜LoginAspect.java
     ┃ ┃ ┃ ┃ ┃ ┣ 📂bank
     ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂dto
     ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂request
     ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜Header.java
     ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜HeaderRequest.java
     ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📂response
     ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜HeaderResponse.java
     ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜BankApi.java
     ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜BankApiClient.java
     ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜BankErrorResponse.java
     ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜BankProperties.java
     ┃ ┃ ┃ ┃ ┃ ┣ 📂entity
     ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜BaseTimeEntity.java
     ┃ ┃ ┃ ┃ ┃ ┣ 📂filter
     ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜CorsFilter.java
     ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜JwtAuthenticationFilter.java
     ┃ ┃ ┃ ┃ ┃ ┣ 📂jwt
     ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜AuthInfo.java
     ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜JwtTokenProvider.java
     ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜TokenResponse.java
     ┃ ┃ ┃ ┃ ┃ ┗ 📂response
     ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂error
     ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂exception
     ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜BankException.java
     ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜CustomException.java
     ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜ExceptionController.java
     ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜ErrorCode.java
     ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜ErrorResponseEntity.java
     ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📂success
     ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜CommonResponseEntity.java
     ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜SuccessCode.java
     ┃ ┃ ┃ ┃ ┗ 📜HicoApplication.java
     ┃ ┗ 📂resources
     ┃ ┃ ┣ 📂db
     ┃ ┃ ┃ ┗ 📜data.sql
     ┃ ┃ ┣ 📜application-secret.properties
     ┃ ┃ ┗ 📜application.yml
     ┗ 📂test
     ┃ ┗ 📂java
     ┃ ┃ ┗ 📂ssafy
     ┃ ┃ ┃ ┗ 📂hico
     ┃ ┃ ┃ ┃ ┗ 📜HicoApplicationTests.java
</details>

<details>
  <summary>
  Front-End
  </summary>

    📦src
     ┣ 📂api
     ┃ ┣ 📜account.ts
     ┃ ┣ 📜child.ts
     ┃ ┣ 📜childPoint.ts
     ┃ ┣ 📜currency.ts
     ┃ ┣ 📜member.ts
     ┃ ┗ 📜parent.ts
     ┣ 📂assets
     ┃ ┣ 📂lottie
     ┃ ┃ ┣ 📜america.json
     ┃ ┃ ┣ 📜bchina.json
     ┃ ┃ ┣ 📜bjapan.json
     ┃ ┃ ┣ 📜china-location-pin.json
     ┃ ┃ ┣ 📜china.json
     ┃ ┃ ┣ 📜europe.json
     ┃ ┃ ┣ 📜italy-location-pin.json
     ┃ ┃ ┣ 📜japan-flag.json
     ┃ ┃ ┣ 📜japan-location-pin.json
     ┃ ┃ ┣ 📜japan.json
     ┃ ┃ ┣ 📜japan1.json
     ┃ ┃ ┣ 📜japan2.json
     ┃ ┃ ┣ 📜japan3.json
     ┃ ┃ ┣ 📜one-star-badge.json
     ┃ ┃ ┣ 📜pinjapan.json
     ┃ ┃ ┣ 📜star.json
     ┃ ┃ ┗ 📜usa-location-pin.json
     ┃ ┣ 📜activated_1.png
     ┃ ┣ 📜activated_2.png
     ┃ ┣ 📜activated_3.png
     ┃ ┣ 📜activated_4.png
     ┃ ┣ 📜activated_5.png
     ┃ ┣ 📜arrow.png
     ┃ ┣ 📜back-d3.png
     ┃ ┣ 📜back.png
     ┃ ┣ 📜background_basic.png
     ┃ ┣ 📜back_b.jpg
     ┃ ┣ 📜back_china.png
     ┃ ┣ 📜back_d.jpg
     ┃ ┣ 📜back_d2.jpg
     ┃ ┣ 📜back_italy.png
     ┃ ┣ 📜back_japan.png
     ┃ ┣ 📜back_usa.png
     ┃ ┣ 📜basicsky.PNG
     ┃ ┣ 📜boy.png
     ┃ ┣ 📜chinaflag.PNG
     ┃ ┣ 📜chinamap.png
     ┃ ┣ 📜chinapin.png
     ┃ ┣ 📜countrymapbackground.png
     ┃ ┣ 📜down.png
     ┃ ┣ 📜downicon.png
     ┃ ┣ 📜europeflag.PNG
     ┃ ┣ 📜failed.png
     ┃ ┣ 📜fairy_china.png
     ┃ ┣ 📜fairy_italy.png
     ┃ ┣ 📜fairy_japan.png
     ┃ ┣ 📜fairy_usa.png
     ┃ ┣ 📜flag_china.png
     ┃ ┣ 📜flag_europe.png
     ┃ ┣ 📜flag_japan.png
     ┃ ┣ 📜flag_usa.png
     ┃ ┣ 📜forest.jpg
     ┃ ┣ 📜fuel.png
     ┃ ┣ 📜girl.png
     ┃ ┣ 📜globe.PNG
     ┃ ┣ 📜goTonext.png
     ┃ ┣ 📜goToprevious.png
     ┃ ┣ 📜grandpa.png
     ┃ ┣ 📜italymap.png
     ┃ ┣ 📜italypin.png
     ┃ ┣ 📜japanese-fan.png
     ┃ ┣ 📜japanflag.PNG
     ┃ ┣ 📜japanmap.png
     ┃ ┣ 📜japanpin.png
     ┃ ┣ 📜KakaoTalk_20240402_212047197.png
     ┃ ┣ 📜lab.png
     ┃ ┣ 📜login_singup_background.png
     ┃ ┣ 📜logo.png
     ┃ ┣ 📜moneycomplete.png
     ┃ ┣ 📜moneysending.png
     ┃ ┣ 📜next.png
     ┃ ┣ 📜next_q.png
     ┃ ┣ 📜nochild_boy.png
     ┃ ┣ 📜oval.png
     ┃ ┣ 📜play.png
     ┃ ┣ 📜preview.png
     ┃ ┣ 📜preview_q.png
     ┃ ┣ 📜profile_boy1.png
     ┃ ┣ 📜profile_boy2.png
     ┃ ┣ 📜profile_boy3.png
     ┃ ┣ 📜profile_boy4.png
     ┃ ┣ 📜profile_girl1.png
     ┃ ┣ 📜profile_girl2.png
     ┃ ┣ 📜profile_girl3.png
     ┃ ┣ 📜profile_girl4.png
     ┃ ┣ 📜questionmark.png
     ┃ ┣ 📜QuizComponent.png
     ┃ ┣ 📜rectangle.png
     ┃ ┣ 📜sakura.png
     ┃ ┣ 📜skybasic.jpg
     ┃ ┣ 📜spaceship.png
     ┃ ┣ 📜StageComponent.png
     ┃ ┣ 📜stop.png
     ┃ ┣ 📜storylab.png
     ┃ ┣ 📜storynext.png
     ┃ ┣ 📜storyprev.png
     ┃ ┣ 📜storyspaceship.png
     ┃ ┣ 📜storytimemachine.png
     ┃ ┣ 📜success.png
     ┃ ┣ 📜timemachine.png
     ┃ ┣ 📜unactivated_2.png
     ┃ ┣ 📜unactivated_3.png
     ┃ ┣ 📜unactivated_4.png
     ┃ ┣ 📜unactivated_5.png
     ┃ ┣ 📜up.png
     ┃ ┣ 📜updow.png
     ┃ ┣ 📜upicon.png
     ┃ ┣ 📜usaflag.PNG
     ┃ ┣ 📜usamap.png
     ┃ ┣ 📜usapin.png
     ┃ ┣ 📜wallet.png
     ┃ ┗ 📜worldmap.jpg
     ┣ 📂components
     ┃ ┣ 📂account
     ┃ ┃ ┣ 📜completeaccount.module.css
     ┃ ┃ ┣ 📜CompleteAccount.tsx
     ┃ ┃ ┣ 📜createaccount.module.css
     ┃ ┃ ┣ 📜CreateAccount.tsx
     ┃ ┃ ┣ 📜registeraccount.module.css
     ┃ ┃ ┣ 📜RegisterAccount.tsx
     ┃ ┃ ┗ 📜RegisterAccountPassword.tsx
     ┃ ┣ 📂childwallet
     ┃ ┃ ┣ 📜AskComplete.module.css
     ┃ ┃ ┣ 📜AskComplete.tsx
     ┃ ┃ ┣ 📜askWon.module.css
     ┃ ┃ ┣ 📜AskWon.tsx
     ┃ ┃ ┣ 📜ChildWallet.tsx
     ┃ ┃ ┣ 📜HistoryDetail.module.css
     ┃ ┃ ┣ 📜HistoryDetail.tsx
     ┃ ┃ ┣ 📜myaccount.module.css
     ┃ ┃ ┣ 📜MyAccount.tsx
     ┃ ┃ ┣ 📜mypoint.module.css
     ┃ ┃ ┗ 📜MyPoint.tsx
     ┃ ┣ 📂mainchild
     ┃ ┃ ┣ 📜Cartoon.module.css
     ┃ ┃ ┣ 📜Cartoon.tsx
     ┃ ┃ ┣ 📜China.module.css
     ┃ ┃ ┣ 📜China.tsx
     ┃ ┃ ┣ 📜ChinaStage.module.css
     ┃ ┃ ┣ 📜ChinaStage.tsx
     ┃ ┃ ┣ 📜Italy.module.css
     ┃ ┃ ┣ 📜Italy.tsx
     ┃ ┃ ┣ 📜ItalyStage.module.css
     ┃ ┃ ┣ 📜ItalyStage.tsx
     ┃ ┃ ┣ 📜Japan.module.css
     ┃ ┃ ┣ 📜Japan.tsx
     ┃ ┃ ┣ 📜JapanStage.module.css
     ┃ ┃ ┣ 📜JapanStage.tsx
     ┃ ┃ ┣ 📜Loading.tsx
     ┃ ┃ ┣ 📜MainChild.tsx
     ┃ ┃ ┣ 📜navbar.tsx
     ┃ ┃ ┣ 📜Quiz.module.css
     ┃ ┃ ┣ 📜Quiz.tsx
     ┃ ┃ ┣ 📜QuizStart.module.css
     ┃ ┃ ┣ 📜QuizStart.tsx
     ┃ ┃ ┣ 📜Result.module.css
     ┃ ┃ ┣ 📜Result.tsx
     ┃ ┃ ┣ 📜Story.module.css
     ┃ ┃ ┣ 📜Story.tsx
     ┃ ┃ ┣ 📜USA.module.css
     ┃ ┃ ┣ 📜USA.tsx
     ┃ ┃ ┣ 📜USAStage.module.css
     ┃ ┃ ┣ 📜USAStage.tsx
     ┃ ┃ ┣ 📜worldmap.module.css
     ┃ ┃ ┗ 📜WorldMap.tsx
     ┃ ┣ 📂mainparent
     ┃ ┃ ┣ 📜childadd.module.css
     ┃ ┃ ┣ 📜ChildAdd.tsx
     ┃ ┃ ┣ 📜childstatus.module.css
     ┃ ┃ ┣ 📜ChildStatus.tsx
     ┃ ┃ ┣ 📜MainParent.tsx
     ┃ ┃ ┣ 📜nochild.module.css
     ┃ ┃ ┗ 📜NoChild.tsx
     ┃ ┣ 📂parentcurrency
     ┃ ┃ ┣ 📜Currency.module.css
     ┃ ┃ ┣ 📜Currency.tsx
     ┃ ┃ ┣ 📜CurrencyDetail.module.css
     ┃ ┃ ┗ 📜CurrencyDetail.tsx
     ┃ ┣ 📂parentwallet
     ┃ ┃ ┣ 📜ParentWallet.tsx
     ┃ ┃ ┣ 📜request.module.css
     ┃ ┃ ┣ 📜Request.tsx
     ┃ ┃ ┣ 📜sending.module.css
     ┃ ┃ ┣ 📜Sending.tsx
     ┃ ┃ ┣ 📜sendingcomplete.module.css
     ┃ ┃ ┗ 📜SendingComplete.tsx
     ┃ ┗ 📂signup
     ┃ ┃ ┣ 📜signup.module.css
     ┃ ┃ ┣ 📜Signup.tsx
     ┃ ┃ ┣ 📜SignupAccount.tsx
     ┃ ┃ ┣ 📜signupcomplete.module.css
     ┃ ┃ ┗ 📜SignupComplete.tsx
     ┣ 📂pages
     ┃ ┣ 📂account
     ┃ ┃ ┗ 📜index.tsx
     ┃ ┣ 📂childwallet
     ┃ ┃ ┣ 📜index.tsx
     ┃ ┃ ┗ 📜navbar.tsx
     ┃ ┣ 📂login
     ┃ ┃ ┣ 📜index.tsx
     ┃ ┃ ┗ 📜login.module.css
     ┃ ┣ 📂mainchild
     ┃ ┃ ┗ 📜index.tsx
     ┃ ┣ 📂mainparent
     ┃ ┃ ┣ 📜index.tsx
     ┃ ┃ ┗ 📜navbar.tsx
     ┃ ┣ 📂parentcurrency
     ┃ ┃ ┗ 📜index.tsx
     ┃ ┣ 📂parentwallet
     ┃ ┃ ┗ 📜index.tsx
     ┃ ┣ 📂signup
     ┃ ┃ ┗ 📜index.tsx
     ┃ ┗ 📜tts.tsx
     ┣ 📂state
     ┃ ┣ 📜AccountAtoms.ts
     ┃ ┣ 📜AccountSelectors.ts
     ┃ ┣ 📜childselectors.ts
     ┃ ┣ 📜currencyatoms.ts
     ┃ ┣ 📜currencyselectors.ts
     ┃ ┣ 📜MainChildSelector.ts
     ┃ ┣ 📜Parentatoms.ts
     ┃ ┣ 📜Parentselectors.ts
     ┃ ┣ 📜StageSubjectAtoms.ts
     ┃ ┗ 📜StageSubjectSelectors.ts
     ┣ 📜App.css
     ┣ 📜App.tsx
     ┣ 📜axios.ts
     ┣ 📜global.d.ts
     ┣ 📜index.css
     ┣ 📜index.js
     ┣ 📜index.tsx
     ┣ 📜Loading.tsx
     ┣ 📜reportWebVitals.ts
     ┣ 📜routes.tsx
     ┣ 📜setupTests.ts
     ┗ 📜theme.ts
</details>
