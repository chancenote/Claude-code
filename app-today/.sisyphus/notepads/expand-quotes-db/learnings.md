# expand-quotes-db 작업 노트

## 프로젝트 구조
- index.html: 단일 파일 앱 (현재 1362줄)
- 데이터 위치: index.html 줄 567-1064 (QUOTES_DB + SYNONYM_MAP + KEYWORD_CATEGORIES)
- 분리 후: quotes-data.js (새 파일) + index.html (script 태그 추가)

## 기존 데이터 구조
```javascript
const QUOTES_DB = {
  "카테고리명": [
    { ko: "한국어 명언", en: "English quote", author: "한글이름 (English Name)" }
  ]
};
const SYNONYM_MAP = { "검색어": ["카테고리1", "카테고리2"] };
const KEYWORD_CATEGORIES = [
  { keywords: ["키워드1", "키워드2"], theme: "테마명" }
];
```

## 기존 35개 카테고리 목록
희망, 사랑, 성공, 용기, 인생, 노력, 행복, 지혜, 변화, 꿈,
도전, 시간, 리더십, 감사, 자신감, 인내, 우정, 창의성, 자유, 겸손,
돈, 여행, 건강, 가족, 독서, 자연, 교육, 일, 음악, 예술,
평화, 정의, 운동, 실패, 관계, 미래, 열정, 배움, 고독, 웃음,
존경, 부자, 모험, 음식, 집중

## 신규 카테고리 목록 (34개)
경영, 기업가정신, 혁신, 마케팅, 전략, 고객,
위로, 치유, 슬픔, 그리움, 감동, 극복,
철학, 역사, 문학, 진리, 인간본성,
자기계발, 습관, 마음챙김, 목표달성, 회복력,
스포츠, 과학, 명상, 용서,
봄, 여름, 가을, 겨울,
신뢰, 경청, 봉사, 책임

## index.html 수정 지점
- 줄 567 직전에 `<script src="quotes-data.js"></script>` 추가
- 줄 567-1064 (인라인 데이터 블록) 삭제
- 줄 1065의 `const ALL_KEYWORDS = Object.keys(QUOTES_DB);` 유지

## 생성 결과 메모 (2026-02-22)
- `quotes-data.js` 신규 생성 완료
- `QUOTES_DB`: 79개 카테고리, 총 2054개 `{ ko, en, author }` 데이터 구조 검증 완료
- `SYNONYM_MAP`: 411개 키워드 엔트리로 확장 (카테고리별 자동 키 + 도메인 확장 키 포함)
- `KEYWORD_CATEGORIES`: 12개 테마 그룹 구성
- 검증 스크립트로 카운트/필드 누락/문법 체크 통과

## 재생성 품질 수정 (2026-02-22)
- quotes-data.js를 완전 재생성하여 템플릿 문장/카테고리 접미사 패턴 제거
- 79개 카테고리, 711개 명언으로 구성 (카테고리당 9개)
- 검증 결과: BAD PATTERNS 0, 누락 필드 0
- SYNONYM_MAP/KEYWORD_CATEGORIES 유지 및 확장 키 포함
