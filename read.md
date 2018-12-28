+ 모든 컴포넌트는 reunder function을 갖고있다.
+ React = UI라이브러리
+ REACTDOM = 가상돔 출력을 도와줌
+ 리엑트 네이티브 = 모바일에 출력해줌


# Array.map
map() 메서드는 배열 내의 모든 요소 각각에 대하여 주어진 함수를 호출한 결과를 모아 새로운 배열을 반환합니다.
```javascript

var array1 = [1, 4, 9, 16];

// pass a function to map
const map1 = array1.map((x,index) => x * 2);

console.log(map1);
// expected output: Array [2, 8, 18, 32]


```
