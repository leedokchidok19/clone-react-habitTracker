# Habit Tracker

# React
엄격한 문법 구문 : <React.StrictMode>
                - 'use strict'; 동일
노드들의 그룹 묶기 : <React.fragment>
                - <> 동일
```
예)
<div>
    <h1></h1>
    <h1></h1>
</div>

<React.fragment>
    <h1></h1>
    <h1></h1>
</React.fragment>
<>
    <h1></h1>
    <h1></h1>
</>
```

# 개발환경
* Node.js : **16.15.0**
* Npm : **8.5.5**
* yarn : **1.22.18**

# 명령어
### 버전 확인
* 노드 버전 확인 : **node -v**
* npm 버전 확인 : **npm -v**
* yarn 버전 확인 : **yarn --version**

### 설치
* yarn : **sudo npm install -g yarn**
* 리액트 앱 :**yarn create react-app .**
* fontawesome : **yarn add @fortawesome/fontawesome-free**

### 개발
* **yarn start**

### 오류
```
react-dom.development.js:86 Warning: ReactDOM.render is no longer supported in React 18.
   Use createRoot instead.
   Until you switch to the new API, your app will behave as if it's running React 17.
   Learn more: https://reactjs.org/link/switch-to-createroot
```