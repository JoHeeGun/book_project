# MBP
  * ## 🗣 프로젝트 소개
  ![예시 이미지](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/23fe158a-b205-4ed8-a121-c4edd0072df3/%EA%B2%80%EC%83%89.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20211203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20211203T063940Z&X-Amz-Expires=86400&X-Amz-Signature=6bff620943854a00543547ec2193dd5cda2212277b27729752c00d04ef02c4aa&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22%25EA%25B2%2580%25EC%2583%2589.PNG.png%22&x-id=GetObject)   
MBP는 My Book Post의 줄임말로 책에대한 자신만의 생각을 개인적인 공간에 포스팅 할 수 있는 웹페이지입니다.   
개인적인 포스팅공간에 자유롭게 포스팅할 수 있고, 카카오Developers의 검색 API를 활용하여 원하는 책의 정보를 얻을 수 있습니다.   
포스팅된 게시물들은 개인적인 공간에 보관되며 자신의 포스팅된 게시글은 추후에 자유롭게 찾아보고 생각해 볼 수 있습니다.


* ## 🛠 기술스택 & 개발환경
Frontend : Javascript / HTML5 / CSS3 / sass,scss / Vue.js / Bootstrap    
Backend : Node.js / Express    
Database : MongoDB      
Tools : vscode   
useAPI : kakao Developers Daum검색 API

* ## 🤚 Team & Part  
1인 프로젝트(개인)      
웹 프론트엔드 전체 디자인 및 개발   

 



* ## 🕹 주요기능
 
 <details><summary>로그인</summary>
 
  ![예시 이미지](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/7a9233a7-d756-4ce6-96b9-e5bdfe9e573a/%E3%84%B9.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20211115%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20211115T153854Z&X-Amz-Expires=86400&X-Amz-Signature=d6d3aa42d06f75900b58cb6250dfe44a4ba722d3a5d692c8201ae3b67b3947a6&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22%25E3%2584%25B9.png%22)   
  * 로그인페이지 -> 아이디,비밀번호입력 -> 로그인버튼 -> 로그인
  * 우측 상단의 로그인탭 클릭 후 로그인페이지로 이동   
  * 이메일형식으로 아이디작성 (ex: joheegun@gmail.com)   
  * 로그인 성공시 포스트작성 가능
 
 </details> 
 <details><summary>회원가입</summary>
 
  ![예시 이미지](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/9dda1e7e-232d-4579-ace7-b06c76ed77d8/%ED%9A%8C%EC%9B%90.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20211115%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20211115T154038Z&X-Amz-Expires=86400&X-Amz-Signature=948a6ce8c1363f815fd663288effe60e3e0cc3822f08e77d94a803ab31013929&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22%25ED%259A%258C%25EC%259B%2590.png%22)   
  * 회원가입페이지 -> 아이디,비밀번호등 개인정보 입력 -> 회원가입버튼 -> 회원가입완료
  * 상단의 회원가입탭 클릭 후 회원가입페이지로 이동   
  * 이메일형식으로 아이디작성   
  * 회원가입 성공시 로그인페이지로 이동   
  </details>  
 <details><summary>책 검색</summary>
 
  ![예시 이미지](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/c8518dbb-dd27-42ab-b657-bab71f704790/%E3%85%88.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20211115%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20211115T154219Z&X-Amz-Expires=86400&X-Amz-Signature=348524afad7434829b27add26fcd1eb7ee77072b9b54e613035e93f1494009fd&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22%25E3%2585%2588.png%22)   
   ![예시 이미지](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/bb0fb969-6a89-47cd-b079-d585ddac0ff7/%E3%85%91.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20211115%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20211115T154232Z&X-Amz-Expires=86400&X-Amz-Signature=b7f20b068958fa351d9516c3d2c18ef794fe6bad61e96638d1db9b570843115e&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22%25E3%2585%2591.png%22)   
  * 상단 책 검색탭 클릭 후 검색페이지 이동
  * 로그인이 되어 있지 않는 비회원도 이용 가능한 서비스           
  * 원하는 검색조건을 설정하고 검색버튼클릭   
  * 검색조건에 따라 검색결과가 리스트형식으로 나열됨   
  * 개별 아이템 클릭 시 해당 책에대한 URL로 이동   
  </details>  
 <details><summary>나만의 포스트</summary>
 
  ![예시 이미지](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/6309d035-8699-48d3-b4e6-0d72be65a886/%E3%85%8D.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20211115%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20211115T154654Z&X-Amz-Expires=86400&X-Amz-Signature=35b07d60af6e9b55fd17a825c50eaf784c1c0a956d56ff97053bfd48bd9dd2de&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22%25E3%2585%258D.png%22)    
   ![예시 이미지](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/39c15ff3-87d7-4fd4-9f53-d1d291cce72e/%E3%85%8B.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20211115%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20211115T154708Z&X-Amz-Expires=86400&X-Amz-Signature=dbb63cf3cc1b03d9dfd3a9d936c5947dbc285282ace63145bda9cf7459c43ffa&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22%25E3%2585%258B.png%22)    
  * 상단 나만의포스트탭 클릭 후 페이지 이동
  * 로그인이 되어있는 회원만 이용가능한 서비스   
  * 우측하단 작성아이콘 클릭 후 작성페이지 이동         
  * 제목,내용을 입력하고 글 작성버튼 클릭   
  * 자신이 포스트한 내용이 카드형태로 나타남   
  * 수정,삭제아이콘 클릭시 해당 작업 수행   
  </details>   
 
   
 
* ## 📕 성과 
Javascript의 Framework인 Vue.js를 이용하여 프로젝트를 개발해 봄으로써 SPA의 개념을 이해하고 활용해볼 수 있었음     
Vuex의 상태관리패턴에 대해 공부하고 프로젝트에 적용해 보며 활용해 볼 수 있었음        
axios라이브러리를 이용하여 API의 HTTP 비동기통신을 프로젝트에 적용해 볼 수 있었음    
Vue-Router를 이용하여 페이지 권한 처리 및 인증처리에 대해 알게 되었음      
프로젝트 규모가 커지며 폴더구조정리 및 클린코드작성의 필요성을 느꼈음    
Jest를 이용하여 테스트코드를 공부해보고 필요성을 느꼈음   



* ## 📎 Link   
* Notion (https://www.notion.so/MBP-My-Book-Post-969e18f073ef4fe39d39b2ed0f635c17)   
* 웹구동 영상 (https://www.youtube.com/watch?v=uQr1mThCS3c)

