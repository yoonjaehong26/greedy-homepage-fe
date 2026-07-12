// 사이트 전역 상수. 모집이 열리고 닫힐 때 이 파일만 바꾸면 돼요.
// 자세한 배경은 docs/adr/004-모집-상태-스위치.md 참고.

/** 모집 상태 스위치. GNB 버튼, 히어로, 하단 고정 CTA가 이 값 하나를 봐요. */
export const IS_RECRUITING = false;

/** 모집 알림 구글폼. 폼이 만들어지면 주소를 채워요. */
export const RECRUIT_FORM_URL = "";

/** 지원 폼(모집 기간). 모집이 열리면 주소를 채워요. */
export const APPLY_FORM_URL = "";

export const LINKS = {
  github: "https://github.com/greedy-team",
  discord: "https://discord.gg/zZgacYnwZ3",
  email: "greedydeerg@gmail.com",
  instagram: "https://www.instagram.com/sejong_greedy/",
} as const;
