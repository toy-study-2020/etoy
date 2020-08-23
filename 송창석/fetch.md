# etoy content rendering

**set.js: 공통**
<br>
1. setUrl, toJson, fetchJson 실행  
2. setElement = selector 내부의 엘레먼트들 객체로 리턴(gnb는 별도, gnbElement)  
3. setComponent dataMenu = 객체내부 item배열, list에 reduce로 callback으로 받은 랜더링할 태그들 넣어줌, list 리턴  
4. renderHtml로 타겟엘레멘트에 list 인자값으로 넘겨서 랜더링  

**xxxxComponent.js : 각각 JSON별 js**
<br>
1. const xxxx = setElement로 엘레먼트값 받음  
2. const xxxxUrl = setUrl로 JSON url설정  
3. fetchJson으로 data값 리턴받음  
4. .then()에 콜백함수로 renderHtml, setComponent 실행  


# etoy content rendering 요구사항

- [x] fetch API를 이용하여 네트워크 통신한다. (get)

- [x] 응답 받은 JSON 형태를 분석해본다.

- [x] JSON : originalPrice 와 salePrice 동일한 경우는 할인이 없는 경우이니 originalPrice만 출력 시킨다.

- [x] JSON : badge의 배열이 비어있으면 출력하지 않는다.

- [x] 화폐의 단위는 달러($)로 표기한다.

- [x] 화면 UI는 이베이를 참고 하고 이외 부분은 자유롭게 진행한다. 단, JSON과 맞는 렌더링이 이루어져야한다.

- [x] 기획전&이벤트의 경우는 캐러셀슬라이더로 해도되고 안해도된다. (일단 안하고 진행하고, 시간이 남으면 고민해보는걸 추천!)


