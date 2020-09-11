# 관심사 등록 UI

## 요구사항

- [x] 관심사를 입력하고 쉼표(,)를 입력하면 UI생성

- [x] x버튼을 누르면 태그 삭제

- [x] 키보드 delete입력시 맨 뒤에 태그 삭제

- [x] 아무 글자 없이 입력되는 쉼표는 무시된다 (,만 입력해도 무시 ,,, 무시)


## 파일구조

index.js - 초기 dom생성, 관심사 ui 실행, 매개변수로 객체 옵션 변경가능

utils.js - 공통으로 사용하는 메소드 

constants.js - 클래스네임, placeholder 정의

btnComponents.js - 버튼 컴포넌트 

interestComponents.js - 관심사 컴포넌트



## 고려한점

- 객체dom생성 함수 실행할때 매개변수로 옵션값 전달 가능

  ```js
  const dom = await interestTemplate(
          {
              WRAP: 'inputText2',
              INPUT: 'inputType2'
          }
      );
  ```

- 인풋에 텍스트 입력 후 delay주기 
  (delay를 주지 않으면 클릭시 버튼이 생성되서 ,를 확인할수없다.)
  **keyup 이벤트로 변경해서 해결**

- , 이나 ,,,, 일때는 reset 하기

- 문자열 입력후 , 쉼표를 여러개 입력해도 하나만 출력될수 있도록!
  **keyup 이벤트로 변경해서 해결**

- 입력창에 스페이스바 입력으로 빈문자열입력해도 reset

- backspace입력시 맨뒤 버튼요소 삭제

- 인풋 입력중에 backspace입력시 문자열 삭제