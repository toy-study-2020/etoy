### 작업순서

#### 검색 자동 완성

1. 마크업
2. CSS   
   2-2. 애니메이션
3. Javascript

---
#### 메인 컨텐츠
1. 마크업
2. CSS
3. API 통신   
3-1. GNB   
3-2. Store   
3-3. hot deal products   
3-4. event list   
3-5. chance products

### Javascript Step

#### 검색 자동 완성
1. 변수 값 초기화
2. 검색창 열기 (keyup, focus)   
2-2. 검색어 !== null   
3. 검색창 닫기   
3-2. 검색창 외 엘리먼트 클릭 시   
3-3. 검색어 === null
4. 검색 완성 기능 구현   
4-1. 해당하는 검색어 리스트 노출   
4-2. 키보드   
4-3. 개수제한(안하려고했는데 키보드 이벤트 시 시점 이동 이슈..)
5. 검색 console 노출
6. keyword 클릭 시 submit 이벤트 추가
7. refactoring

##### 메인 컨텐츠
1. API 통신   
1-2. contentsAPI.js 내 구현-이유 없....

....

#### 별도 추가 기능
- data shuffle(구글링)

#### 경로/이름 정리
##### 폴더경로
- style 폴더
  - `*.css`, `*.scss`
  - 세부적으로 import 시켜서 사용 예정
- script 폴더
  - `*.js`
- image 폴더
  - `*.jpg`, `*.png`, `*.svg`
  
##### 파일명
- `기능.확장자`
  - ex. `search.js` = `검색기능.javascript`
  - ex. `contentAPI.js` = `컨텐츠API.javascript`
  - ex. `category.scss` = `카테고리영역.scss`