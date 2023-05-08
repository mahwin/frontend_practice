Primitive Type

오브젝트와 레퍼런스 형태가 아닌 실제 값을 저장하는 자료형.

오브젝트와 레퍼런스 형태은 주소 값을 저장함.

ES2015 기준으로 6가지

boolean
number
string
symbol
null
undefined

- literal 값으로 primitive 타입의 서브 타입을 나타낼 수 있다.
  - literal = 직접 값을 할당하는 방식.

ex)
true; boolean의 true라는 서브타입임
'hello'; string이라는 타입의 서비타입임
3.14;
null;
undefined;

- or 래퍼 객체로 만들 수 있다.
  but 사용하지말라고 권고중

new Boolean(false); // typeof new Boolean(false) : object
new String('world'); // typeof new Boolean(false) : object
new Number(42); // typeof new Boolean(false) : object

String말고 string로 사용해야함
String은 래퍼 객체를 생성할 때 사용하는 것이지 타입처럼 사용하면 안됨!
