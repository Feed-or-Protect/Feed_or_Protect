import React, { useState, useEffect } from "react";
import "./App.css";
import "./VisualNovelUI.css";
import INTRO from "./assets/intro.png";
import SCENE1 from "./assets/scene1.png";
import BG from "./assets/bg.png";
import SCENE1_A from "./assets/scene1_a.png";
import SCENE2_D from "./assets/scene2_d.png";
import SCENE2_M from "./assets/scene2_m.png";
import SCENE3 from "./assets/scene3.png";
import SCENE3_P from "./assets/scene3_p.png";
import SCENE3_A from "./assets/scene3_a.png";
import SCENE3_A2 from "./assets/scene3_a2.png";
import START from "./assets/start.png";
import BAD1_END from "./assets/bad1_end.png";
import BAD3_END from "./assets/bad3_end.png";
import SCENE4_A_N from "./assets/scene4_a_n.png";
import SCENE4_A2 from "./assets/scene4_a2.png";
import SCENE5_R_B_R from "./assets/scene5_r_b_r.png";
import SCENE_R_C_P from "./assets/scene5_r_c_p.png";
import SCENE5_R_C_A from "./assets/scene5_r_c_a.png";
import BAD4_END from "./assets/bad4_end.png";
import BAD4_END_C from "./assets/bad4_end_c.png";
import SCENE5_R_A from "./assets/scene5_r_a.png";
import SCENE5_R_B from "./assets/scene5_r_b.png";
import SCENE5_R_B2 from "./assets/scene5_r_b2.png";
import SCENE5_R_S from "./assets/scene5_r_s.png";
import SCENE6_B_R from "./assets/scene5_r_b.png";
import BAD5_END from "./assets/bad5_end.png";
import SCENE6_A from "./assets/scene6_a.png";
import SCENE6_A2_F from "./assets/scene6_a2_f.png";
import SCENE8_B from "./assets/scene8_b.png";
import SCENE8_P from "./assets/scene8_p.png";
import SCENE5_R_A2 from "./assets/scene5_r_a2.png";
import SCENE9_E from "./assets/scene9_e.png";
import SCENE9_F_E from "./assets/scene9_f_e.png";
import EPILOGUE from "./assets/epilogue.png";

const SCENARIO = {
  // 🎬 시작 화면 (타이틀 메타 정보 반영)
  start: {
    background: START,
    chapter: "PROLOGUE",
    location: "경계의 회색 지대 — 타이틀",
    hideDialogue: true,
    options: [{ text: "시작하기", nextScene: "intro" }],
  },

  intro: {
    background: BG,
    chapter: "오프닝",
    location: "세계관 배경 — 인트로",
    name: "내레이션",
    text: "한때 세상은 밤을 지배하는 자들의 것이었다.\n그들은 인간의 위에 군림했고, 인간은 그 아래에서 살았다. 두려움과 복종으로 이어진 세상. 그것이 당연한 질서였다.\n하지만 당연함은 오래가지 않는다.\n인간들은 과학을 갈고닦았다. 자외선 포탄, 은 소재 무기, 인공 태양 조명 병기. 수십 년의 기술 축적 끝에 인간은 드디어 전쟁을 일으켰다. 그리고 이겼다.\n뱀파이어들은 쫓겨났다. 인간의 땅에서, 인간의 도시에서, 인간의 빛에서.\n지금 그들이 사는 곳은 회색 지대 — 도시 외곽의 음지. 버려진 공장 지구와 숲의 경계 어딘가.\n그리고 오늘, 거기에 아이 하나가 걸어 들어왔다.",
    options: [{ text: "다음으로", nextScene: "scene1" }],
  },

  // 📖 ACT 1 — 침입자 [씬 1 — 이안의 하루]
  scene1: {
    background: INTRO,
    chapter: "ACT 1 — 침입자",
    location: "뱀파이어 거주 구역 외곽. 허물어져 가는 철조망 근처.",
    name: "이안 (혼잣말)",
    text: "이안은 오래된 건물 옥상에 걸터앉아 있다. 손에는 읽다 만 책 한 권. 아래 골목에선 구역 경비대원이 순찰 중이다.\n\n……오늘도 별 거 없네.",
    options: [
      { text: "A. 내려가서 순찰대와 얘기한다.", nextScene: "scene1_A" },
      { text: "B. 그냥 책이나 계속 읽는다.", nextScene: "scene1_B_bad_route" },
    ],
  },

  // ❌ 선택지 1 — B 선택 (배드엔딩 1)
  scene1_B_bad_route: {
    background: INTRO,
    chapter: "ACT 1 — 침입자",
    location: "건물 옥상",
    name: "내레이션",
    text: "책을 읽던 이안은 아무것도 눈치채지 못한다. 한참 뒤, 구역 전체가 시끄러워진다. 경비대가 철조망 근처에서 인간 아이를 발견한 것이다. 이안이 뒤늦게 달려갔을 때, 아이는 이미 경비대에 둘러싸여 있다.",
    options: [{ text: "다음으로", nextScene: "bad1_end" }],
  },
  bad1_end: {
    background: BAD1_END,
    chapter: "배드엔딩 1 — 너무 늦게",
    location: "뱀파이어 거주 구역 외곽. 철조망 근처.",
    name: "이안",
    text: "이안이 끼어들 틈이 없었다. 아이는 구역 실력자들에게 넘겨졌고, 인간 구역과의 협상 카드가 됐다. 이안은 먼 발치에서 아이가 끌려가는 걸 바라봤다. 아이는 끝까지 울지 않았다. 그게 더 마음에 걸렸다.\n— 엔딩: 방관자",
    options: [{ text: "처음부터 다시 하기", nextScene: "start" }], // 🔄 타이틀(start)로 루프
  },

  // ✅ 선택지 1 — A 선택 (스토리 정상 진행)
  scene1_A: {
    background: SCENE1,
    chapter: "ACT 1 — 침입자",
    location: "뱀파이어 거주 구역 외곽.",
    name: "시스템",
    text: '경비대원 "루카"가 오늘 철조망 쪽에서 이상한 냄새가 났다고 언급한다. 인간 냄새 같다고. 이안은 흘려듣고 돌아서다가 — 철조망 쪽 풀숲에서 부스럭거리는 소리를 듣는다.',
    options: [{ text: "풀숲을 헤쳐본다", nextScene: "scene2" }],
  },

  // [씬 2 — 조우]
  scene2: {
    background: SCENE1_A,
    chapter: "ACT 1 — 침입자",
    location: "철조망 근처 풀숲",
    name: "내레이션",
    text: "이안이 풀숲을 헤치자 —\n꼬마가 하나 있다. 얼굴에 흙이 묻고, 양 볼은 발그레하다. 점퍼 주머니에는 뭔가 잔뜩 구겨넣어져 있다. 아이는 이안을 보자마자 눈을 동그랗게 뜬다.",
    options: [{ text: "다음", nextScene: "scene2_dialogue" }],
  },
  scene2_dialogue: {
    background: SCENE2_D,
    chapter: "ACT 1 — 침입자",
    location: "철조망 근처 풀숲",
    name: "대화",
    text: "이안: ……뭐야, 너.\n\n이안이 본능적으로 송곳니를 드러낸다.\n그런데 아이는 —\n\n아토: 우와! 이빨이 뾰족해! 멋있다!",
    options: [{ text: "다음", nextScene: "scene2_monologue" }],
  },
  scene2_monologue: {
    background: SCENE2_M,
    chapter: "ACT 1 — 침입자",
    location: "철조망 근처 풀숲",
    name: "이안 (혼잣말)",
    text: "……왜 웃어. 왜 웃냐고.",
    options: [{ text: "아이를 창고로 데려간다", nextScene: "scene3" }],
  },

  // [씬 3 — 정보 파악]
  scene3: {
    background: SCENE3,
    chapter: "ACT 1 — 침입자",
    location: "근처 창고",
    name: "대화",
    text: "이안은 아이를 근처 창고로 데려간다.\n\n이안: 너, 어디서 왔어.\n아토: 저기. 숲 너머. 피크닉 왔는데 나비 쫓아오다 보니까 여기 됐어.\n이안: 부모님은?\n아토: 아마 되게 놀랐겠지. (쿨하게)\n이안: ……",
    options: [{ text: "이름과 나이를 물어본다", nextScene: "scene3_profile" }],
  },
  scene3_profile: {
    background: SCENE3_P,
    chapter: "ACT 1 — 침입자",
    location: "근처 창고",
    name: "대화",
    text: '이름을 물으니 "김아토"라고 한다. 몇 살이냐고 물으니 손가락 다섯 개를 편다.\n\n아토: 형은?\n이안: ……백쉰세.\n아토: 우와, 할아버지다.\n이안: 아니거든.',
    options: [
      { text: 'A. "빨리 돌려보낼 방법을 생각하자."', nextScene: "scene3_A" },
      {
        text: 'B. "일단 여기 숨겨두고 상황을 파악하자."',
        nextScene: "scene3_B_bad_route",
      },
    ],
  },

  // ❌ 선택지 2 — B 선택 (배드엔딩 2)
  scene3_B_bad_route: {
    background: SCENE3,
    chapter: "ACT 1 — 침입자",
    location: "근처 창고",
    name: "대화",
    text: '창고에 숨겨두는 동안 시간이 너무 지체된다. 아토가 창고 안을 돌아다니다 낡은 선반을 건드려 요란한 소리를 낸다. 근처를 지나던 이웃 "세린"이 소리를 듣고 들여다본다.\n\n세린: 이안, 이거 혹시……인간 아이야?\n이안: 아니, 이건——\n세린: (이미 구역 방송으로 알리는 중)',
    options: [{ text: "다음으로", nextScene: "bad2_end" }],
  },
  bad2_end: {
    background: SCENE3,
    chapter: "배드엔딩 2 — 지체의 대가",
    location: "근처 창고 내부",
    name: "내레이션",
    text: "너무 오래 머뭇거렸다. 구역 전체가 알아버리는 데 오 분도 걸리지 않았다. 이안은 아토 앞에 서서 끝까지 막아보려 했지만, 혼자서는 역부족이었다. 아토는 이안의 손을 꼭 잡고 있다가 놓였다. 그 작은 손의 온기가 한참 동안 사라지지 않았다.\n— 엔딩: 머뭇거림",
    options: [{ text: "처음부터 다시 하기", nextScene: "start" }], // 🔄 루프 수정
  },

  // ✅ 선택지 2 — A 선택 (스토리 정상 진행)
  scene3_A: {
    background: SCENE3_A,
    chapter: "ACT 1 — 침입자",
    location: "근처 창고",
    name: "시스템",
    text: "이안이 철조망 너머로 데려다줄 경로를 탐색하기 시작한다. 지금은 순찰 시간대라 루트를 골라야 한다.",
    options: [{ text: "다음 화면으로", nextScene: "scene3_A2" }],
  },

  // 📖 ACT 2 — 숨바꼭질 [씬 4 — 세린의 방문]
  scene3_A2: {
    background: SCENE3_A2,
    chapter: "ACT 2 — 숨바꼭질",
    location: "근처 창고",
    name: "대화",
    text: "창고에 있는데 문을 두드리는 소리.\n\n세린: 이안, 거기 있어? 오늘 구역 회의 있는 거 알지?",
    options: [
      {
        text: 'A. 살짝 문을 열고 "나 좀 아파서 못 간다"고 한다.',
        nextScene: "scene4_A",
      },
      {
        text: "B. 아토한테 조용히 있으라 신호하고 문을 연다.",
        nextScene: "scene4_B_bad_route",
      },
    ],
  },

  // ❌ 선택지 3 — B 선택 (배드엔딩 3)
  scene4_B_bad_route: {
    background: SCENE3_A2,
    chapter: "ACT 2 — 숨바꼭질",
    location: "근처 창고",
    name: "대화",
    text: "문을 여는 순간 아토가 말한다.\n\n아토: 형, 저 사람 눈도 빨개. 멋있다!\n\n세린의 눈이 아토에게 고정된다.\n\n세린: ……이안, 이 아이 혹시.\n이안: 세린, 잠깐만——\n세린: 피부가……인간이잖아.\n\n세린은 나쁜 사람이 아니다. 하지만 구역 규칙을 어기는 건 두렵다. 그녀는 결국 이안을 설득하려다 실패하고, 구역 어른들에게 알린다.",
    options: [{ text: "다음으로", nextScene: "bad3_end" }],
  },
  bad3_end: {
    background: BAD3_END,
    chapter: "배드엔딩 3 — 아토의 입",
    location: "근처 창고 앞",
    name: "내레이션",
    text: "세린은 미안하다고 했다. 이안도 그걸 알았다. 그래서 더 할 말이 없었다. 아토는 끌려가면서도 이안을 돌아봤다. 손을 흔들었다. 아직도 뭐가 문제인지 모르는 얼굴로.\n— 엔딩: 선의의 배신",
    options: [{ text: "처음부터 다시 하기", nextScene: "start" }], // 🔄 루프 수정
  },

  // ✅ 선택지 3 — A 선택 (스토리 정상 진행)
  scene4_A: {
    background: SCENE3_A2,
    chapter: "ACT 2 — 숨바꼭질",
    location: "근처 창고 문틈",
    name: "대화",
    text: '세린이 "얼굴은 멀쩡해 보이는데?" 하며 의심쩍어하지만, 이안의 서늘한 태도에 이내 한숨을 쉬며 돌아선다.\n세린: ……알았어. 회의는 내가 대충 둘러댈 테니 푹 쉬어.\n\n★행운 발동. 세린이 골목 저편으로 사라진다.',
    options: [{ text: "창고를 빠져나간다", nextScene: "scene4_A_next" }],
  },

  // 🆕 개연성 보완: 대피소 잠입 빌드업 과정 씬
  scene4_A_next: {
    background: SCENE4_A_N,
    chapter: "ACT 2 — 숨바꼭질",
    location: "구역 내 버려진 대피소",
    name: "내레이션",
    text: "더는 지체할 수 없다. 이안은 커다란 외투 속에 아토를 숨긴 채 창고를 빠져나왔다.\n야간 순찰대원들의 시선을 피해 폐공장 벽면을 타고 조심스럽게 이동한 끝에, 이안은 인적 없는 안전한 임시 대피소로 잠입하는 데 성공했다.",
    options: [{ text: "탈출 지도를 살핀다", nextScene: "scene4_A2" }],
  },

  // 📖 ACT 2 — 숨바꼭질 [씬 5 — 루트 선택]
  scene4_A2: {
    background: SCENE4_A2,
    chapter: "ACT 2 — 숨바꼭질",
    location: "구역 내 대피소 내부",
    name: "이안 (혼잣말)",
    text: "인간 구역 경계선 철조망까지 빠져나갈 수 있는 경로는 세 가지다.\n어디든 위험은 따르지만, 지금 순찰 조의 타이밍을 피해 최선의 판단을 내려야만 해.\n\n루트 A — 큰 길: 가장 빠르지만 정식 순찰대와 조우할 위험이 크다.\n루트 B — 골목 뒷길: 느리지만 은밀하다. 단, 구역 실력자 거롯의 사택 앞을 지나쳐야 한다.\n루트 C — 지하 수로: 은밀하고 신속하나, 어둡고 험난해 아이가 버텨줄지 미지수다.",
    options: [
      { text: "A. 큰 길로 간다.", nextScene: "scene5_routeA" },
      { text: "B. 골목 뒷길로 간다.", nextScene: "scene5_routeB" },
      { text: "C. 지하 수로로 간다.", nextScene: "scene5_routeC_bad_route" },
    ],
  },

  // ❌ 루트 C — 지하 수로 선택 (배드엔딩 4)
  scene5_routeC_bad_route: {
    background: SCENE5_R_B_R,
    chapter: "ACT 2 — 숨바꼭질",
    location: "어둡고 좁은 지하 수로",
    name: "대화",
    text: "어둡고 물이 흐른다. 아토가 무섭다며 이안의 팔을 꼭 붙잡는다.\n\n아토: 형, 무서워.\n이안: ……곧 끝나.\n아토: 형도 무서워?\n이안: ……나는 괜찮아.\n아토: 거짓말. 손 떨려.",
    options: [{ text: "앞으로 나아간다", nextScene: "scene5_routeC_puzzle" }],
  },
  scene5_routeC_puzzle: {
    background: SCENE_R_C_P,
    chapter: "ACT 2 — 숨바꼭질",
    location: "지하 수로 철제 문 앞",
    name: "시스템",
    text: "수로 중간에 낡은 철제 문이 잠겨 있다. 자물쇠를 따는 미니 퍼즐 진행. 하지만 —",
    options: [{ nextScene: "scene5_routeC_accident" }],
  },

  scene5_routeC_accident: {
    background: SCENE5_R_C_A,
    chapter: "ACT 2 — 숨바꼭질",
    location: "지하 수로 철제 문 앞",
    name: "시스템",
    text: "퍼즐을 푸는 사이 아토가 발을 헛디뎌 물에 빠진다. 이안이 재빨리 끌어올리지만, 아토의 옷이 흠뻑 젖고 체온이 급격히 떨어진다. 수로를 빠져나왔을 때 아토는 열이 오르기 시작한다. 뱀파이어 구역에 인간 아이를 치료할 수단은 없다. 이안은 결국 구역 어른들에게 도움을 요청할 수밖에 없고, 아토의 존재가 탄로난다.",
    options: [{ nextScene: "bad4_end" }],
  },

  bad4_end: {
    background: BAD4_END,
    chapter: "배드엔딩 4 — 수로의 끝",
    location: "지하 수로 밖 / 구역 중심부",
    name: "내레이션",
    text: "이안은 아토를 안고 구역 중심부로 뛰었다. 이미 들킨 거, 아토를 살리는 게 먼저였다. 거롯이 인간 구역에 연락을 취했다. 아토의 부모가 달려왔다. 아토는 살았다.",
    options: [{ nextScene: "bad4_end_conclusion" }],
  },

  bad4_end_conclusion: {
    background: BAD4_END_C,
    chapter: "배드엔딩 4 — 수로의 끝",
    location: "구역 중심부",
    name: "내레이션",
    text: "하지만 이안은 구역 규칙을 어긴 대가로 한동안 외부 출입이 금지됐다. 아이가 실려 가며 뒤돌아 손을 흔들었다. 이안은 그 손을 끝까지 바라봤다.\n\n— 엔딩: 대가",
    options: [{ text: "처음부터 다시 하기", nextScene: "start" }],
  },

  scene5_routeA: {
    background: SCENE5_R_A,
    chapter: "ACT 2 — 숨바꼭질",
    location: "외곽으로 향하는 큰 길",
    name: "대화",
    text: "당당하게 전면 돌파를 감행하다 정식 야간 순찰대와 딱 마주친다. 이안이 외투로 감싸 안고 자연스럽게 지나가려는데, 아토가 호기심을 참지 못하고 외투 밖으로 꼬물거리며 손을 내밀어 순찰대원의 옷자락을 잡아당긴다.\n\n아토: 아저씨, 옷 멋있어요.\n순찰대원: ……이안, 네 외투 속의 그 작은 손은 뭐지?\n이안: ……조카입니다.\n순찰대원: 조카?\n이안: 혼혈이라 피부가 유독 밝게 태어났습니다. 열이 많이 나서 약을 구하러 가는 길입니다.\n\n★행운 최고조. 이안의 의연한 거짓말에 순찰대원이 어색하게 웃으며 길을 열어준다.",
    options: [
      { text: "최종 관문인 광장 교차로로 향한다", nextScene: "scene5_routeA2" },
    ],
  },

  scene5_routeB: {
    background: SCENE5_R_B,
    chapter: "ACT 2 — 숨바꼭질",
    location: "거롯의 집 앞 골목 뒷길",
    name: "대화",
    text: "어두컴컴한 사택 골목. 살벌한 인상의 거롯 부하들이 모여 담배를 피우고 있다.\n긴장감에 심장이 터질 것 같은 상태로 그들 사이를 스쳐 지나가는데, 아토가 이안의 손을 꼭 잡고 걷다가 부하 한 명에게 해맑게 손을 흔들며 인사한다.\n\n아토: 안녕하세요!\n부하: ……(당황해서 담뱃재를 떨어뜨림) ……어, 어 그래 꼬맹아 안녕.\n\n아이의 뜬금없는 순수함에 거친 분위기가 사르르 풀려 무사히 골목을 통과한다.",
    options: [
      { text: "최종 관문인 광장 교차로로 향한다", nextScene: "scene5_routeB2" },
    ],
  },

  scene5_routeA2: {
    background: SCENE5_R_A2,
    chapter: "ACT 3 — 발각",
    location: "구역 중심부 광장 교차로",
    name: "내레이션",
    text: "외곽 도로는 잘 통과했으나, 경계선 철조망으로 도달하기 위해서는 구역의 중심부인 광장 교차로를 무조건 횡단해야만 한다.\n거의 다 왔다는 안도감이 고개를 들며 이안이 발걸음을 재촉하던 그 순간 —\n\n바스락.\n\n아토의 점퍼 주머니가 들려 올라가며, 인간 구역 브랜드의 화려한 과자 봉지가 바닥으로 떨어져 요란하게 굴렀다.",
    options: [{ text: "주변을 살핀다", nextScene: "scene5_route_spotted" }], // 🆕 중복 제거: 대면 씬 통합
  },
  scene5_routeB2: {
    background: SCENE5_R_B2,
    chapter: "ACT 3 — 발각",
    location: "구역 중심부 광장 교차로",
    name: "내레이션",
    text: "뒷길로 영리하게 우회했으나, 철조망으로 가는 마지막 길목은 결국 구역 광장의 끄트머리와 맞닿아 있었다.\n최대한 그늘진 곳으로 몸을 숨겨 이동하려던 바로 그 순간 —\n\n바스락.\n\n아토가 주머니에 찔러넣어 두었던 알록달록한 인간 구역의 과자 봉지가 허술하게 툭 튀어나와 광장 한복판에 떨어졌다.",
    options: [{ text: "주변을 살핀다", nextScene: "scene5_route_spotted" }], // 🆕 중복 제거: 대면 씬 통합
  },

  scene5_route_spotted: {
    background: SCENE5_R_S,
    chapter: "ACT 3 — 발각",
    location: "구역 광장 한복판",
    name: "대화",
    text: "하필 그 자리를 지나던 구역 최고의 권력자 '거롯'이 걸음을 멈추고 봉지를 주워 올렸다.\n\n거롯: ……이안. 이 구역에 생경한 인간의 냄새가 진동한다 했더니. 이 아이, 인간이구나.\n\n주변에 있던 차가운 눈빛의 뱀파이어들이 순식간에 모여들며 포위망을 좁힌다. 아토는 겁을 먹고 이안의 손을 으스러지게 움켜쥐었다.\n\n거롯: 전쟁 이후 이 음지에 인간의 핏줄이 발을 들인 건 처음이다. 이안, 규칙을 어긴 대가를 어찌 감당하려 하느냐?",
    options: [
      {
        text: 'A. "이 아이는 위협이 아니다. 그냥 길 잃은 어린아이야."',
        nextScene: "scene6_A",
      },
      {
        text: 'B. "……내가 잘못했다. 하지만 이 아이만은 보내줘."',
        nextScene: "scene6_bad_route",
      },
    ],
  },

  scene6_bad_route: {
    background: SCENE6_B_R,
    chapter: "ACT 3 — 발각",
    location: "구역 광장 한복판",
    name: "대화",
    text: "이안이 결국 고개를 숙인다. 거롯은 무표정하게 이안을 내려다보더니 이내 차갑게 선언한다.\n\n거롯: 사정은 딱하나 규칙은 규칙이다. 이안, 너 또한 이 질서의 무게를 알 터.\n\n아토가 슬픈 눈으로 이안을 올려다본다.\n\n아토: 형, 나 때문에 그래? 괜찮아……?\n\n이안은 차마 아이의 얼굴을 보지 못한 채 입술을 깨물었다.",
    options: [{ text: "다음으로", nextScene: "bad5_end" }],
  },

  bad5_end: {
    background: BAD5_END,
    chapter: "배드엔딩 5 — 무릎을 꿇다",
    location: "구역 광장",
    name: "내레이션",
    text: "사과는 때로 약함으로 읽힌다. 거롯은 아토를 협상 카드로 삼기로 했다. 이안은 막으려 했지만 혼자였다. 아토는 끝내 이안의 손을 놓쳤다. 형, 하고 부르는 목소리가 멀어졌다. 이안은 그날 이후 오랫동안 그 목소리를 잊지 못했다.\n— 엔딩: 굴복",
    options: [{ text: "처음부터 다시 하기", nextScene: "start" }],
  },

  scene6_A: {
    background: SCENE6_A,
    chapter: "ACT 3 — 발각",
    location: "구역 광장 한복판",
    name: "대화",
    text: "이안이 한 발 앞으로 나선다.\n\n이안: 이 아이가 무슨 죄야. 우리 구역에 쫓겨 온 게 인간의 잘못이야, 뱀파이어의 잘못이야. 아무것도 모르는 다섯 살짜리가 무슨 잘못이 있냐고.\n\n그때 아토가 거롯을 올려다본다.\n\n아토: 아저씨, 왜 화났어요?\n거롯: ……\n아토: 무서우면 화나는 거잖아요. 우리 아빠도 그래요.\n거롯: ……나는 무섭지 않아.\n아토: 그럼 왜요? 형은 안 무서웠는데. 처음엔 무서운 척했지만.\n\n침묵이 흐른다.\n\n거롯: (한참 뒤) ……이안, 너 예전부터 운도 입도 지나치게 좋았어.\n\n거롯이 물러선다. 길이 열린다.",
    options: [{ text: "길을 나선다", nextScene: "scene6_A2_flashback" }],
  },

  // 📖 ACT 4 — 귀환 [씬 7 — 이안의 회상]
  scene6_A2_flashback: {
    background: SCENE6_A2_F,
    chapter: "ACT 4 — 귀환",
    location: "구역 외곽으로 향하는 길",
    name: "내레이션",
    text: '거롯을 설득하고 걷는 사이, 짤막한 회상.\n전쟁 전, 이안은 인간 아이와 놀았던 적이 있다. 그 아이도 이안을 무서워하지 않았다. 전쟁 중 그 아이의 마을이 불탔다. 이안은 막지 못했다.\n\n(회상 속 목소리) "형, 무서워?"\n(회상 속 이안) "……나는 괜찮아."\n\n현재로 돌아온다. 아토가 똑같이 물었었다는 걸 새삼 깨닫는다.',
    options: [{ text: "경계선으로 향한다", nextScene: "scene8_boundary" }],
  },

  // [씬 8 — 경계선]
  scene8_boundary: {
    background: SCENE8_B,
    chapter: "ACT 4 — 귀환",
    location: "구역 외곽 철조망",
    name: "대화",
    text: "구역 외곽 철조망. 인간 구역이 보인다. 저 멀리 아토의 아빠가 이름을 부르며 뛰어오고 있다.\n\n아토: 형, 나 가야 해.\n이안: ……그래.\n아토: 또 놀러 와도 돼?\n이안: 안 돼.\n아토: 왜?\n이안: 여기는 너한텐 위험해.\n아토: (잠깐 생각하다가) 그럼 나 크면 와도 돼?\n이안: ……\n아토: 크면 여기 위험 안 하게 만들 거야. 그러면 오면 되잖아.\n\n이안이 피식 웃는다. 오랜만에 웃는 표정.\n\n이안: ……그래. 그때 와.\n아토: 약속!",
    options: [{ text: "약속을 나눈다", nextScene: "scene8_promise" }],
  },
  scene8_promise: {
    background: SCENE8_P,
    chapter: "ACT 4 — 귀환",
    location: "구역 외곽 철조망",
    name: "내레이션",
    text: "아토가 이안의 손에 새끼손가락을 건다. 이안이 어색하게 새끼손가락을 걸어준다.",
    options: [{ text: "다음", nextScene: "scene9_ending" }],
  },

  // [씬 9 — 엔딩]
  scene9_ending: {
    background: SCENE9_E,
    chapter: "ACT 4 — 귀환",
    location: "구역 외곽 철조망 앞",
    name: "이안 (혼잣말)",
    text: "아토가 철조망 너머로 달려간다. 아빠 품에 와락 안긴다.\n이안은 그 자리에 서서 바라본다.\n\n……153년 살면서 새끼손가락은 처음이네.",
    options: [
      {
        text: "돌아서서 걷기 시작한다",
        nextScene: "scene9_fadeout_to_epilogue",
      },
    ],
  },

  // [트루 엔딩 스태프롤 페이드아웃]
  scene9_fadeout_to_epilogue: {
    background: SCENE9_F_E,
    chapter: "TRUE ENDING",
    location: "회색 지대 경계선",
    name: "내레이션",
    text: "그가 돌아서서 구역 쪽으로 걷기 시작하는 장면으로 페이드아웃.",
    options: [{ text: "에필로그 보기", nextScene: "epilogue" }],
  },

  // ⏳ 에필로그 — 20년 후 뒷이야기
  epilogue: {
    background: EPILOGUE,
    chapter: "에필로그 — 엔딩 크레딧 후",
    location: "20년 후 — 인간 구역",
    name: "내레이션",
    text: "그로부터 20년 후 —\n인간 구역의 젊은 정치인 김아토는 '뱀파이어 공존법'을 발의했다.\n그가 그 법안에 서명하던 날, 기자들이 물었다.\n\"왜 이 법을 만들었습니까?\"\n그는 잠깐 웃고 나서 대답했다.",
    options: [{ text: "다음", nextScene: "epilogue_ato" }],
  },
  epilogue_ato: {
    background: BG,
    chapter: "에필로그 — 엔딩 크레딧 후",
    location: "20년 후 — 인간 구역",
    name: "김아토",
    text: '"약속을 지켜야 해서요."',
    options: [{ text: "다음", nextScene: "epilogue_darkness" }],
  },
  epilogue_darkness: {
    background: BG,
    chapter: "에필로그 — 엔딩 크레딧 후",
    location: "이안의 집 앞",
    name: "내레이션",
    text: "암전.\n이안의 방문 앞에 누군가 서 있다.\n문이 열린다.\n\n\nEND.",
    requireButton: true,
    options: [{ text: "처음부터 다시 하기", nextScene: "start" }],
  },
};

function App() {
  const [currentSceneId, setCurrentSceneId] = useState("start");
  const [textIndex, setTextIndex] = useState(0);

  const currentScene = SCENARIO[currentSceneId] || SCENARIO["intro"];

  // =========================
  // 배경 이미지 전체 프리로드
  // =========================
  useEffect(() => {
    Object.values(SCENARIO).forEach((scene) => {
      if (scene.background) {
        const img = new Image();
        img.src = scene.background;
      }
    });
  }, []);

  // 문장 단위 분리
  const textParts = currentScene.text
    ? currentScene.text
        .split("\n")
        .map((t) => t.trim())
        .filter((t) => t !== "")
    : [];

  // 분기 선택지 여부
  const hasChoice =
    currentScene.options &&
    (currentScene.options.length > 1 || currentScene.requireButton);

  // 단일 연결 씬
  const autoNextScene =
    currentScene.options && currentScene.options.length === 1
      ? currentScene.options[0].nextScene
      : null;

  // 씬 변경 시 텍스트 초기화
  useEffect(() => {
    setTextIndex(0);
  }, [currentSceneId]);

  const handleNext = () => {
    if (currentSceneId === "start") {
      setCurrentSceneId("intro");
      return;
    }

    if (hasChoice) return;

    if (textIndex < textParts.length - 1) {
      setTextIndex((prev) => prev + 1);
      return;
    }

    if (autoNextScene) {
      setCurrentSceneId(autoNextScene);
    }
  };

  return (
    <div className="vn-container" onClick={handleNext}>
      {/* 배경 */}
      <div className="vn-background-layer">
        <img
          src={currentScene.background}
          className="vn-bg-img"
          alt="Visual Novel Background"
          draggable="false"
        />
      </div>

      {/* 상단 정보 */}
      <div className="vn-top-info">
        <div className="vn-info-chapter">{currentScene.chapter}</div>

        <div className="vn-info-location">{currentScene.location}</div>
      </div>

      {/* 시작 화면 */}
      {currentSceneId === "start" && (
        <div className="vn-ui-overlay">
          <div className="vn-options-container">
            <button
              className="vn-option-button"
              onClick={(e) => {
                e.stopPropagation();
                setCurrentSceneId("intro");
              }}
            >
              시작하기
            </button>
          </div>
        </div>
      )}

      {/* 게임 화면 */}
      {currentSceneId !== "start" && (
        <div className="vn-ui-overlay">
          <div className="vn-dialogue-box">
            <div className="vn-name-tag">
              <span className="vn-name-text">{currentScene.name}</span>
            </div>

            <div className="vn-text-content">
              <p>{textParts[textIndex]}</p>
            </div>

            {!hasChoice && !currentScene.requireButton && (
              <div className="vn-next-cursor">♦</div>
            )}
          </div>

          {/* 선택지 */}
          {hasChoice && (
            <div className="vn-options-container">
              {currentScene.options.map((option, idx) => (
                <button
                  key={idx}
                  className="vn-option-button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setCurrentSceneId(option.nextScene);
                  }}
                >
                  {option.text}
                </button>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default App;
