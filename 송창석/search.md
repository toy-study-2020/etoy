# etoy search

# 생성방법
``` javascript
    const search = new formSearch('#search', 10);
    search.setInit();
```

# etoy search 요구사항

- [x] 검색어를 입력하면 자동완성결과가 노출된다. (최대 10개)

- [x] 백스페이스로 삭제시 일치하는 자동완성 결과가 노출된다.

- [x] 자동완성결과는 키보드 위아래로 이동할 수 있다.

- [x] 자동완성결과에서 키보드로 위아래 입력시 배경이 바뀐다.

- [x] 자동완성결과를 엔터 또는 submit 실행시 콘솔에 검색창에 입력된것이 콘솔로 노출한다.

# 설계도
![설계도03  ](./설계도03.png)
