# To Do List🌿

React를 이용한 To Do List 만들기

<br>


### 🔽 **프로젝트 소개**

**프로젝트명** : To Do List🌿

**개발 기간** : 2024.01.19 ~ 2024.01.23 

**프로젝트 소개** : 할 일을 작성하고 추가한 뒤, 진행 상태를 설정할 수 있습니다.



<br>

### 🔽  **개발 환경**

- **Environment :** vscode, github
- **Development :** React, Javascript, HTML, CSS
- **Library :** [react-icons](https://react-icons.github.io/react-icons/)
- **Design** : Figma



<br>


### **🔽 시작 가이드**

**1. git clone**

```bash
$ git clone https://github.com/seopport/TodoList.git
$ cd TodoList
```

**2. yarn start**

```bash
npm i
yarn start
```



<br>

### **🔽 와이어프레임**

|![wireframe](https://github.com/seopport/TodoList/assets/103973797/9e9da085-3048-4eec-8ccc-724f714bc0bb) |
| ------------------------------------------------------------ |






<br>

### 🔽 화면 구성 및 기능

#### 1. 화면 구성
|![작동 GIF](https://github.com/seopport/TodoList/assets/103973797/d541d30f-90d1-40e0-9edf-60150f91571f) |
| ------------------------------------------------------------ |
<br>

#### 2. 기능 소개

+ 메인 페이지
  + 날짜를 표시합니다.
  + Task 박스에 할 일의 타이틀과 메모를 입력하고 펜 버튼을 눌러 추가합니다.
  + 할 일의 타이틀에 공백을 입력하면 입력되지 않았음을 알리는 alert를 표시합니다.
  + 만약 메모가 입력되지 않았다면, confirm창을 통해 메모를 입력하지 않고 할 일을 추가할지 선택할 수 있도록 합니다.
  + 할 일을 추가하면 입력폼이 초기화됩니다.

  

+ 할 일 진행 상태

  + 할 일의 상태를 In progress(진행중), Done(완료됨)으로 전환할 수 있습니다.
  + In progress 영역의 할 일을 완료 버튼을 누르면 Done 영역으로 넘어갑니다.
  + Done 영역의 할 일에서 되돌리기 버튼을 누르면 다시 In progress 영역으로 넘어갑니다.
  + 어느 영역에서든 삭제 버튼을 누르면 할 일을 삭제할 수 있습니다.

  

<br>



### 🔽 컴포넌트 구성

+ App.jsx - 메인 컴포넌트입니다.
+ TaskInputBox.jsx - 입력폼을 담당하는 컴포넌트입니다.
+ InProgressTasks.jsx - 진행 중인 할 일들을 보여주는 컴포넌트입니다.
+ DoneTasks.jsx - 완료된 할 일들을 보여주는 컴포넌트입니다.


<br>

### 🚦 트러블 슈팅

  #### **1. 문제**


  #### **2. 시도**

  #### **3. 해결방안**

#### **4. 선택한 방법**



<br>

***
