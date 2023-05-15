// interface extends interface, 인터페이스의 상속

interface Iperson2 {
  name: string;
  age?: number;
}

interface IKorean extends Iperson2 {
  city: string;
}

const k: IKorean = {
  name: "Mark",
  city: "서울",
};

//구조적으로 상속관계를 이용해서 원본 타입을 더 확장해서 많이 사용함

// ex) div 태그는 html 엘리먼트를 다 상속받고 자기가 필요한 값을 추가해서 사용됨.
HTMLDivElement;

interface HTMLDivElement extends HTMLElement {
  /**
   * Sets or retrieves how the object is aligned with adjacent text.
   * @deprecated
   */
  align: string;
  addEventListener<K extends keyof HTMLElementEventMap>(
    type: K,
    listener: (this: HTMLDivElement, ev: HTMLElementEventMap[K]) => any,
    options?: boolean | AddEventListenerOptions
  ): void;
  addEventListener(
    type: string,
    listener: EventListenerOrEventListenerObject,
    options?: boolean | AddEventListenerOptions
  ): void;
  removeEventListener<K extends keyof HTMLElementEventMap>(
    type: K,
    listener: (this: HTMLDivElement, ev: HTMLElementEventMap[K]) => any,
    options?: boolean | EventListenerOptions
  ): void;
  removeEventListener(
    type: string,
    listener: EventListenerOrEventListenerObject,
    options?: boolean | EventListenerOptions
  ): void;
}
