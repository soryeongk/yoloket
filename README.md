# 0. yoloket
온라인 쇼핑몰에서 상품의 사이즈/색상을 선택하는 화면을 만들어봅니다.

YOLO에서 제공해주신 API와 함께 다른 플로우에서 사용될 mock-api를 만들어 json-server로 함께 만들었습니다.



전달받은 API는 옵션에 대한 것으로 `optionGroupFrameList`에는 옵션 그룹 제목과 각 그룹별 리스트가 들어있습니다.

기본 제공된 옵션에서는 사이즈는 `스몰`과 `라지`, 색상은 `검정` `하양` `빨강`이 있었습니다.

`optionList`에는 옵션 그룹으로 조합할 수 있는 모든 리스트와 각 항목에 남은 개수 정보가 담겨있습니다.

`optionList`의 내용 안에서 사이즈는 `스몰`과 `라지`가 아닌 `S`와 `M`으로 표기되어있어 이에 대한 예외 처리를 해주었습니다.

또한, 추가적으로 사이즈가 추가될 경우를 고려하여, 서버에 해당 내용이 추가되거나 변경되었을 때는 `src > lib > index.js > convertKeyName`내 switch문을 추가해주시면 됩니다.



# 1. 기술 스택

**dependencies**

```
"axios": "^0.26.0",
"json-server": "^0.17.0",
"react": "^17.0.2",
"react-dom": "^17.0.2",
"react-router-dom": "^6.2.1",
"styled-components": "^5.3.3",
"styled-reset": "^4.3.4"
```

기본적으로 `react`를 사용했으며, `react-router-dom`은 가장 최신 버전인 v6를 사용했습니다.

mock-api를 위한 가상 서버를 위해 `json-server`를 사용했고 api 통신은 `axios`를 사용했습니다.

간단하게 figma로 화면을 디자인하고 UI 프레임워크를 사용하기 보다는 `styled-components`로 직접 구현했습니다.

**devDependencies**

```
"@vitejs/plugin-react": "^1.0.7",
"eslint": "^8.9.0",
"eslint-config-prettier": "^8.4.0",
"eslint-plugin-import": "^2.25.4",
"eslint-plugin-jsx-a11y": "^6.5.1",
"eslint-plugin-prettier": "^4.0.0",
"eslint-plugin-react": "^7.28.0",
"eslint-plugin-react-hooks": "^4.3.0",
"eslint-plugin-simple-import-sort": "^7.0.0",
"prettier": "^2.5.1",
"vite": "^2.8.0"
```

최소한의 모듈만 사용하기 위해 `vite`로 만들어졌습니다.

더욱 깔끔한 코드를 위해 `eslint`와 `prettier` 설정 후 작업했습니다.



# 2. 폴더 구조

```
src
├── assets
│   ├── *.svg
│   └── index.js
├── components
│   ├── common
│   │   └── Header.jsx
│   ├── main
│   │   └── ProductCard.ts
│   ├── product
│       ├── index.jsx
│       ├── OptionForm.jsx
│       ├── ProductDetail.jsx
│       ├── ProductInfo.jsx
│       ├── ProductTitle.jsx
│       ├── ResultModal.jsx
│       └── Selection.jsx
├── lib
│   ├── api
│   │   └── index.js
│   └── index.ts
├── pages
│   ├── Main.jsx
│   ├── Product.jsx
│   └── Router.js
├── styles
│   ├── globalStyle.js
│   └── theme.js
├── App.jsx
├── main.jsx
├── .eslintrc.json
├── .prettierrc
├── index.html
├── mock-api.json
├── ...
└── package.json
```



# 3. 구동 방법

**1. 본 repogitory를 clone 받습니다.**

```
git clone https://github.com/soryeongk/yoloket.git
# or
git clone git@github.com:soryeongk/yoloket.git
```

**2. vite로 화면을 구동합니다.**

```
yarn dev
```

**3. 옵션 외의 플로우가 정상 작동할 수 있도록 가상 서버를 구동합니다.**

localhost:4000에 json-server가 열립니다.

```
yarn server
```

**4. [localhost:3000](http://localhost:3000/)에 접속합니다.**

```
http://localhost:3000/
```



# 4. 화면 구성

상품의 사이즈/색상을 선택하는 것을 필수 기능으로 구현하되,
보다 확장성이 좋은 기능을 만들기 위해, 제품 선택의 플로우를 알아야한다고 생각하여,
제품의 목록을 보여주는 메인 화면과 상세 화면을 모두 만들어봅니다.
개발 중 디자인 변경이있었기에 크기, 위치 등에서 초기 디자인과 실제 화면이 차이가 조금 있을 수 있습니다.

## 메인 화면
![image](https://user-images.githubusercontent.com/40630964/155459661-56697aef-063b-4176-a3bf-5f0818b05801.png)

## 제품 상세 화면
![image](https://user-images.githubusercontent.com/40630964/155459678-3628e206-e630-4a61-8407-ea2975209afb.png)

- 사이즈/색상 선택 부분
<img width="520px" src="https://user-images.githubusercontent.com/40630964/155102606-0bba7adf-64c1-42a0-9fe2-44a13029d531.png" />

## 선택 완료 후 결과 화면
<img width="1280" alt="image" src="https://user-images.githubusercontent.com/40630964/155459584-b8c203e3-2b2c-4b55-aa75-8b6855f3d6d3.png">
