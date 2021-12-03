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
 
  ![예시 이미지](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/7a9233a7-d756-4ce6-96b9-e5bdfe9e573a/%E3%84%B9.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20211203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20211203T064024Z&X-Amz-Expires=86400&X-Amz-Signature=ac42d140a22b2983ea242a83442000431c0797d5329f7f04cff438a34d9e34d7&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22%25E3%2584%25B9.png%22&x-id=GetObject)   
  * 로그인페이지 -> 아이디,비밀번호입력 -> 로그인버튼 -> 로그인
  * 우측 상단의 로그인탭 클릭 후 로그인페이지로 이동   
  * 이메일형식으로 아이디작성 (ex: joheegun@gmail.com)   
  * 로그인 성공시 포스트작성 가능
 
 </details> 
 <details><summary>회원가입</summary>
 
  ![예시 이미지](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/9dda1e7e-232d-4579-ace7-b06c76ed77d8/%ED%9A%8C%EC%9B%90.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20211203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20211203T064051Z&X-Amz-Expires=86400&X-Amz-Signature=3d6be73297bf9f7e74b0ff32946b3bda5699172b538d0f9da488ff05b7b5ca76&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22%25ED%259A%258C%25EC%259B%2590.png%22&x-id=GetObject)   
  * 회원가입페이지 -> 아이디,비밀번호등 개인정보 입력 -> 회원가입버튼 -> 회원가입완료
  * 상단의 회원가입탭 클릭 후 회원가입페이지로 이동   
  * 이메일형식으로 아이디작성   
  * 회원가입 성공시 로그인페이지로 이동   
  </details>  
 <details><summary>책 검색</summary>
 
  ![예시 이미지](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/c8518dbb-dd27-42ab-b657-bab71f704790/%E3%85%88.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20211203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20211203T064114Z&X-Amz-Expires=86400&X-Amz-Signature=29acc17c1934aa96b57071255ea61041b7a05f6614fc7c9136fab2a043589ecb&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22%25E3%2585%2588.png%22&x-id=GetObject)   
   ![예시 이미지](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/bb0fb969-6a89-47cd-b079-d585ddac0ff7/%E3%85%91.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20211203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20211203T064126Z&X-Amz-Expires=86400&X-Amz-Signature=73e305f29c843d7838f1379495b1153d047dc054b9d92ecd0fa4c260e08a2338&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22%25E3%2585%2591.png%22&x-id=GetObject)   
  * 상단 책 검색탭 클릭 후 검색페이지 이동
  * 로그인이 되어 있지 않는 비회원도 이용 가능한 서비스           
  * 원하는 검색조건을 설정하고 검색버튼클릭   
  * 검색조건에 따라 검색결과가 리스트형식으로 나열됨   
  * 개별 아이템 클릭 시 해당 책에대한 URL로 이동   
  </details>  
 <details><summary>나만의 포스트</summary>
 
  ![예시 이미지](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/6309d035-8699-48d3-b4e6-0d72be65a886/%E3%85%8D.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20211203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20211203T064145Z&X-Amz-Expires=86400&X-Amz-Signature=79e8d6b390f099e075e887796a949ca8c2a4ca410e32a6a01f0b54c66e3a2561&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22%25E3%2585%258D.png%22&x-id=GetObject)    
   ![예시 이미지](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/39c15ff3-87d7-4fd4-9f53-d1d291cce72e/%E3%85%8B.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20211203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20211203T064157Z&X-Amz-Expires=86400&X-Amz-Signature=4451a892e4cfc9a1b9f45c5b0fe09c74c3fe8e02b07482174d79842285880b63&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22%25E3%2585%258B.png%22&x-id=GetObject)    
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

