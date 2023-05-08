typescript vs javascript
static Dynamic
런타임에 돌입해야 잘못된 코드인지 알 수 있음.

```js
function add(n1, n2) {
  if (typeof n1 !== "number" || typeof n2 !== "number") {
    throw new Error("Incorrect input!");
  }
  return n1 + n2;
}
```

```ts
function add(n1: number, n2: number) {
  return n1 + n2;
}
```

js ECMA 기본 자료형

# Boolean

# Number

# String

# Null

# Undefined

# Symbol

# Array : object형

프로그래밍을 도울 몇가지 타입 (ts)

# Any, Void, Never, Unknown

# Enum

# Tuple : object형
