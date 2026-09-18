# AX 아이디어 보드

대상 업무별로 AI 활용 아이디어를 기록하고 관리하는 카드형 웹앱입니다.

## 실행 방법

```bash
npm install
npm run dev -- --port 3053
```

실행 후 브라우저에서 `http://localhost:3053` 접속합니다.

## 폴더 구조

```
src/
  main.jsx              # 앱 엔트리 포인트
  App.jsx               # 최상위 상태 관리 + localStorage 동기화
  App.css               # 폼/카드 레이아웃 스타일
  index.css             # 전역 스타일, 다크모드 테마 변수
  components/
    IdeaForm.jsx         # 제목·대상 업무·AI 활용 아이디어 입력 폼
    IdeaList.jsx          # 카드 목록 렌더링
    IdeaCard.jsx          # 카드 한 장 (내용 + 삭제 버튼)
public/
  favicon.svg
```

## 주요 기능

- 제목, 대상 업무, AI 활용 아이디어를 입력해 카드 추가
- 등록된 카드 목록 표시 및 개별 삭제
- 새로고침해도 데이터 유지 (localStorage 저장)
- 다크모드 자동 대응

## 남은 할 일

- 카드 내용 수정(편집) 기능
- 대상 업무/키워드 기준 검색 및 필터링
- 등록일 기준 정렬 옵션
- 자동 테스트(단위/통합 테스트) 부재
- 배포 설정 (정적 호스팅 등) 미구성
