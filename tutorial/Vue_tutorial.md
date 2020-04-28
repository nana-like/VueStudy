# Vue.js

## 설치

- (1) CDN으로 가져와 사용

  ```HTML
  <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
  ```

- (2) 스크립트 파일로 추가

  [공식 홈페이지](https://kr.vuejs.org/v2/guide/installation.html#%EC%A7%81%EC%A0%91-lt-script-gt-%EC%97%90-%EC%B6%94%EA%B0%80)에서 다운로드 후 `<script>` 태그로 삽입

- (3) 웹 에디터 사용
  
  [Codepen](https://codepen.io)이나 [JSFiddle](https://jsfiddle.net/) 등의 웹 에디터에서 Vue 삽입 후 사용

## 특징

- MVVM 패턴의 ViewModel(뷰모델) 레이어에 해당하는 View단 라이브러리
- 데이터와 DOM이 연결되어 반응형으로 렌더링 해준다.
- `v-{}` 형태로 DOM 제어가 가능하다. 이것을 디렉티브라고 부른다.
- Vue 엘리먼트가 Vue에 삽입/갱신.제거될 때 자동 트랜지션 효과를 줄 수 있다.

## 컴포넌트 통신 방식

- 상위에서 하위로는 데이터를 내려줌 👉 props 속성
- 하위에서 상위로는 이벤트를 올려줌 👉 이벤트 발생
- 이는 데이터의 흐름을 추적하기에 용이하다.