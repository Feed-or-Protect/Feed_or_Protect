import React, { useState } from 'react';
import './App.css';            
import './VisualNovelUI.css';   
import INTRO from './assets/intro.png'; 
import SCENE1 from './assets/scene1.png'
import BG from './assets/bg.png';
import SCENE1_A from './assets/scene1_a.png';
import SCENE2_D from './assets/scene2_d.png';
import SCENE2_M from './assets/scene2_m.png';
import SCENE3 from './assets/scene3.png';
import SCENE3_P from './assets/scene3_p.png';
import SCENE3_A from './assets/scene3_a.png'
import SCENE3_A2 from './assets/scene3_a2.png';

const SCENARIO = {
  intro: {
    background: BG,
    chapter: "오프닝",
    location: "세계관 배경 — 인트로",
    name: "내레이션",
    text: "한때 세상은 밤을 지배하는 자들의 것이었다.\n그들은 인간의 위에 군림했고, 인간은 그 아래에서 살았다. 두려움과 복종으로 이어진 세상. 그것이 당연한 질서였다.\n하지만 당연함은 오래가지 않는다.\n인간들은 과학을 갈고닦았다. 자외선 포탄, 은 소재 무기, 인공 태양 조명 병기. 수십 년의 기술 축적 끝에 인간은 드디어 전쟁을 일으켰다. 그리고 이겼다.\n뱀파이어들은 쫓겨났다. 인간의 땅에서, 인간의 도시에서, 인간의 빛에서.\n지금 그들이 사는 곳은 회색 지대 — 도시 외곽의 음지. 버려진 공장 지구와 숲의 경계 어딘가.\n그리고 오늘, 거기에 아이 하나가 걸어 들어왔다.",
    options: [{ text: "다음으로", nextScene: "scene1" }]
  },

  // 📖 ACT 1 — 침입자 [씬 1 — 이안의 하루]
  scene1: {
    background : INTRO,
    chapter: "ACT 1 — 침입자",
    location: "뱀파이어 거주 구역 외곽. 허물어져 가는 철조망 근처.",
    name: "이안 (혼잣말)",
    text: "이안은 오래된 건물 옥상에 걸터앉아 있다. 손에는 읽다 만 책 한 권. 아래 골목에선 구역 경비대원이 순찰 중이다.\n\n……오늘도 별 거 없네.",
    options: [
      { text: "A. 내려가서 순찰대와 얘기한다.", nextScene: "scene1_A" },
      { text: "B. 그냥 책이나 계속 읽는다.", nextScene: "scene1_B_bad_route" }
    ]
  },

  // ✅ 선택지 1 — A 선택 후 진행
  scene1_A: {
    background: SCENE1,
    chapter: "ACT 1 — 침입자",
    location: "뱀파이어 거주 구역 외곽. 허물어져 가는 철조망 근처.",
    name: "시스템",
    text: "경비대원 \"루카\"가 오늘 철조망 쪽에서 이상한 냄새가 났다고 언급한다. 인간 냄새 같다고. 이안은 흘려듣고 돌아서다가 — 철조망 쪽 풀숲에서 부스럭거리는 소리를 듣는다.",
    options: [{ text: "풀숲을 헤쳐본다", nextScene: "scene2" }]
  },

  // [씬 2 — 조우]
  scene2: {
    background: SCENE1_A,
    chapter: "ACT 1 — 침입자",
    location: "철조망 근처 풀숲",
    name: "내레이션",
    text: "이안이 풀숲을 헤치자 —\n꼬마가 하나 있다. 얼굴에 흙이 묻고, 양 볼은 발그레하다. 점퍼 주머니에는 뭔가 잔뜩 구겨넣어져 있다. 아이는 이안을 보자마자 눈을 동그랗게 뜬다.",
    options: [{ text: "다음", nextScene: "scene2_dialogue" }]
  },
  scene2_dialogue: {
    background : SCENE2_D,
    chapter: "ACT 1 — 침입자",
    location: "철조망 근처 풀숲",
    name: "대화",
    text: "이안: ……뭐야, 너.\n\n이안이 본능적으로 송곳니를 드러낸다.\n그런데 아이는 —\n\n아토: 우와! 이빨이 뾰족해! 멋있다!",
    options: [{ text: "다음", nextScene: "scene2_monologue" }]
  },
  scene2_monologue: {
    background : SCENE2_M,
    chapter: "ACT 1 — 침입자",
    location: "철조망 근처 풀숲",
    name: "이안 (혼잣말)",
    text: "……왜 웃어. 왜 웃냐고.",
    options: [{ text: "아이를 창고로 데려간다", nextScene: "scene3" }]
  },

  // [씬 3 — 정보 파악]
  scene3: {
    background : SCENE3,
    chapter: "ACT 1 — 침입자",
    location: "근처 창고",
    name: "대화",
    text: "이안은 아이를 근처 창고로 데려간다.\n\n이안: 너, 어디서 왔어.\n아토: 저기. 숲 너머. 피크닉 왔는데 나비 쫓아오다 보니까 여기 됐어.\n이안: 부모님은?\n아토: 아마 되게 놀랐겠지. (쿨하게)\n이안: ……",
    options: [{ text: "이름과 나이를 물어본다", nextScene: "scene3_profile" }]
  },
  scene3_profile: {
    background : SCENE3_P,
    chapter: "ACT 1 — 침입자",
    location: "근처 창고",
    name: "대화",
    text: "이름을 물으니 \"김아토\"라고 한다. 몇 살이냐고 물으니 손가락 다섯 개를 편다.\n\n아토: 형은?\n이안: ……백쉰세.\n아토: 우와, 할아버지다.\n이안: 아니거든.",
    options: [
      { text: "A. \"빨리 돌려보낼 방법을 생각하자.\"", nextScene: "scene3_A" },
      { text: "B. \"일단 여기 숨겨두고 상황을 파악하자.\"", nextScene: "scene3_B_bad_route" }
    ]
  },

  // ✅ 선택지 2 — A 선택 — 정상 진행
  scene3_A: {
    background : SCENE3_A,
    chapter: "ACT 1 — 침입자",
    location: "근처 창고",
    name: "시스템",
    text: "이안이 철조망 너머로 데려다줄 경로를 탐색하기 시작한다. 지금은 순찰 시간대라 루트를 골라야 한다.",
    options: [{ text: "다음 스토리 대기", nextScene: "intro" }] 
  },

  // ❌ 선택지 2 — B 선택 — 배드엔딩 플래그
  scene3_B_bad_route: {
    
    chapter: "ACT 1 — 침입자",
    location: "근처 창고",
    name: "대화",
    text: "창고에 숨겨두는 동안 시간이 너무 지체된다. 아토가 창고 안을 돌아다니다 낡은 선반을 건드려 요란한 소리를 낸다. 근처를 지나던 이웃 \"세린\"이 소리를 듣고 들여다본다.\n\n세린: 이안, 이거 혹시……인간 아이야?\n이안: 아니, 이건——\n세린: (이미 구역 방송으로 알리는 중)",
    options: [{ text: "다음으로", nextScene: "bad2_end" }]
  },

  // [배드엔딩 2 — 지체의 대가]
  bad2_end: {
    chapter: "배드엔딩 2 — 지체의 대가",
    location: "근처 창고 내부",
    name: "내레이션",
    text: "너무 오래 머뭇거렸다. 구역 전체가 알아버리는 데 오 분도 걸리지 않았다. 이안은 아토 앞에 서서 끝까지 막아보려 했지만, 혼자서는 역부족이었다. 아토는 이안의 손을 꼭 잡고 있다가 놓였다. 그 작은 손의 온기가 한참 동안 사라지지 않았다.\n— 엔딩: 머뭇거림",
    options: [{ text: "처음부터 다시 하기", nextScene: "intro" }]
  },

  // ❌ 선택지 1 — B 선택 — 배드엔딩 플래그 (이전 파트)
  scene1_B_bad_route: {
    chapter: "ACT 1 — 침입자",
    location: "건물 옥상",
    name: "내레이션",
    text: "책을 읽던 이안은 아무것도 눈치채지 못한다. 한참 뒤, 구역 전체가 시끄러워진다. 경비대가 철조망 근처에서 인간 아이를 발견한 것이다. 이안이 뒤늦게 달려갔을 때, 아이는 이미 경비대에 둘러싸여 있다.",
    options: [{ text: "다음으로", nextScene: "bad1_end" }]
  },

  // [배드엔딩 1 — 너무 늦게] (이전 파트)
  bad1_end: {
    chapter: "배드엔딩 1 — 너무 늦게",
    location: "뱀파이어 거주 구역 외곽. 허물어져 가는 철조망 근처.",
    name: "이안",
    text: "이안이 끼어들 틈이 없었다. 아이는 구역 실력자들에게 넘겨졌고, 인간 구역과의 협상 카드가 됐다. 이안은 먼 발치에서 아이가 끌려가는 걸 바라봤다. 아이는 끝까지 울지 않았다. 그게 더 마음에 걸렸다.\n— 엔딩: 방관자",
    options: [{ text: "처음부터 다시 하기", nextScene: "intro" }]
  
  },
  // 📖 ACT 2 — 숨바꼭질 [씬 4 — 세린의 방문]
  scene3_A: {
    background : SCENE3_A2,
    chapter: "ACT 2 — 숨바꼭질",
    location: "근처 창고",
    name: "대화",
    text: "창고에 있는데 문을 두드리는 소리.\n\n세린: 이안, 거기 있어? 오늘 구역 회의 있는 거 알지?",
    options: [
      { text: "A. 살짝 문을 열고 \"나 좀 아파서 못 간다\"고 한다.", nextScene: "scene4_A" },
      { text: "B. 아토한테 조용히 있으라 신호하고 문을 연다.", nextScene: "scene4_B_bad_route" }
    ]
  },

  // ✅ 선택지 3 — A 선택 — 정상 진행
  scene4_A: {
    chapter: "ACT 2 — 숨바꼭질",
    location: "근처 창고",
    name: "대화",
    text: "세린이 \"얼굴은 멀쩡해 보이는데?\" 하며 의심하지만 일단 넘어간다. ★행운 발동.",
    options: [{ text: "다음 스토리 대기", nextScene: "intro" }] // 💡 추후 연재할 다음 씬 연결부
  },

  // ❌ 선택지 3 — B 선택 — 배드엔딩 플래그
  scene4_B_bad_route: {
    chapter: "ACT 2 — 숨바꼭질",
    location: "근처 창고",
    name: "대화",
    text: "문을 여는 순간 아토가 말한다.\n\n아토: 형, 저 사람 눈도 빨개. 멋있다!\n\n세린의 눈이 아토에게 고정된다.\n\n세린: ……이안, 이 아이 혹시.\n이안: 세린, 잠깐만——\n세린: 피부가……인간이잖아.\n\n세린은 나쁜 사람이 아니다. 하지만 구역 규칙을 어기는 건 두렵다. 그녀는 결국 이안을 설득하려다 실패하고, 구역 어른들에게 알린다.",
    options: [{ text: "다음으로", nextScene: "bad3_end" }]
  },

  // [배드엔딩 3 — 아토의 입]
  bad3_end: {
    chapter: "배드엔딩 3 — 아토의 입",
    location: "근처 창고 앞",
    name: "내레이션",
    text: "세린은 미안하다고 했다. 이안도 그걸 알았다. 그래서 더 할 말이 없었다. 아토는 끌려가면서도 이안을 돌아봤다. 손을 흔들었다. 아직도 뭐가 문제인지 모르는 얼굴로.\n— 엔딩: 선의의 배신",
    options: [{ text: "처음부터 다시 하기", nextScene: "intro" }]
  },
  // 📖 ACT 2 — 숨바꼭질 [씬 5 — 루트 선택]
  scene4_A: {
    chapter: "ACT 2 — 숨바꼭질",
    location: "구역 내 대피소",
    name: "내레이션",
    text: "구역 외곽으로 향하는 경로 세 가지.\n\n루트 A — 큰 길: 빠르지만 순찰대가 많다.\n루트 B — 골목 뒷길: 느리지만 조용하다. 단, 구역 실력자 거롯의 집 앞을 지나야 한다.\n루트 C — 지하 수로: 빠르고 은밀하다. 어둡고 좁다.",
    options: [
      { text: "A. 큰 길로 간다.", nextScene: "scene5_routeA" },
      { text: "B. 골목 뒷길로 간다.", nextScene: "scene5_routeB" },
      { text: "C. 지하 수로로 간다.", nextScene: "scene5_routeC_bad_route" }
    ]
  },

  // ✅ 루트 A — 큰 길 (정상 진행)
  scene5_routeA: {
    chapter: "ACT 2 — 숨바꼭질",
    location: "외곽으로 향하는 큰 길",
    name: "대화",
    text: "순찰대와 마주친다. 이안이 아토를 외투로 감싸 안고 지나가려 하는데, 아토가 외투 밖으로 쑥 내밀어 순찰대원의 외투를 잡아당긴다.\n\n아토: 아저씨, 옷 멋있어요.\n순찰대원: ……이안, 그 손이 뭐야.\n이안: 조카예요.\n순찰대원: 조카?\n이안: 혼혈. 피부가 엄청 밝게 나왔어요.\n\n★행운 최고조. 순찰대원이 어색하게 웃고 지나간다.",
    options: [{ text: "다음 스토리 대기", nextScene: "intro" }] // 💡 추후 연재할 다음 씬 연결부
  },

  // ✅ 루트 B — 골목 뒷길 (정상 진행)
  scene5_routeB: {
    chapter: "ACT 2 — 숨바꼭질",
    location: "거롯의 집 앞 골목 뒷길",
    name: "대화",
    text: "거롯의 부하들 사이를 지나는데, 아토가 이안의 손을 꼭 잡고 걷다가 부하 한 명에게 손을 흔든다.\n\n아토: 안녕하세요!\n부하: ……(당황) ……안녕.\n\n묘하게 분위기가 풀려서 그냥 지나가게 된다.",
    options: [{ text: "다음 스토리 대기", nextScene: "intro" }] // 💡 추후 연재할 다음 씬 연결부
  },

  // ❌ 루트 C — 지하 수로 (배드엔딩 플래그)
  scene5_routeC_bad_route: {
    chapter: "ACT 2 — 숨바꼭질",
    location: "어둡고 좁은 지하 수로",
    name: "대화",
    text: "어둡고 물이 흐른다. 아토가 무섭다며 이안의 팔을 꼭 붙잡는다.\n\n아토: 형, 무서워.\n이안: ……곧 끝나.\n아토: 형도 무서워?\n이안: ……나는 괜찮아.\n아토: 거짓말. 손 떨려.",
    options: [{ text: "앞으로 나아간다", nextScene: "scene5_routeC_puzzle" }]
  },
  scene5_routeC_puzzle: {
    chapter: "ACT 2 — 숨바꼭질",
    location: "지하 수로 철제 문 앞",
    name: "시스템",
    text: "수로 중간에 낡은 철제 문이 잠겨 있다. 자물쇠를 따는 미니 퍼즐 진행. 하지만 —\n퍼즐을 푸는 사이 아토가 발을 헛디뎌 물에 빠진다. 이안이 재빨리 끌어올리지만, 아토의 옷이 흠뻑 젖고 체온이 급격히 떨어진다. 수로를 빠져나왔을 때 아토는 열이 오르기 시작한다. 뱀파이어 구역에 인간 아이를 치료할 수단은 없다. 이안은 결국 구역 어른들에게 도움을 요청할 수밖에 없고, 아토의 존재가 탄로난다.",
    options: [{ text: "다음으로", nextScene: "bad4_end" }]
  },

  // [배드엔딩 4 — 수로의 끝]
  bad4_end: {
    chapter: "배드엔딩 4 — 수로의 끝",
    location: "지하 수로 밖 / 구역 중심부",
    name: "내레이션",
    text: "이안은 아토를 안고 구역 중심부로 뛰었다. 이미 들킨 거, 아토를 살리는 게 먼저였다. 거롯이 인간 구역에 연락을 취했다. 아토의 부모가 달려왔다. 아토는 살았다. 하지만 이안은 구역 규칙을 어긴 대가로 한동안 외부 출입이 금지됐다. 아이기가 실려 가며 뒤돌아 손을 흔들었다. 이안은 그 손을 끝까지 바라봤다.\n— 엔딩: 대가",
    options: [{ text: "처음부터 다시 하기", nextScene: "intro" }]
  },
  // 📖 ACT 3 — 발각 [씬 6 — 결정적 순간]
  scene5_routeA: {
    chapter: "ACT 3 — 발각",
    location: "구역 광장 근처",
    name: "내레이션",
    text: "구역 광장 근처. 거의 다 왔다 싶은 순간 —\n아토의 점퍼 주머니에서 인간 구역 브랜드 과자 봉지가 떨어진다. 구역 실력자 거롯이 그걸 집어 든다.\n\n거롯: ……이안. 이 아이, 인간이구나.\n\n주변에 뱀파이어들이 모인다. 분위기가 차가워진다. 아토는 이안의 손을 더 꼭 잡는다.\n\n거롯: 인간 전쟁 이후로 이쪽 구역에 인간 아이가 들어온 건 처음이야. 어떻게 할 생각이지?",
    options: [
      { text: "A. \"이 아이는 위협이 아니다. 그냥 길 잃은 어린아이야.\"", nextScene: "scene6_A" },
      { text: "B. \"……내가 잘못했다. 하지만 이 아이만은 보내줘.\"", nextScene: "scene6_B_bad_route" }
    ]
  },
  scene5_routeB: {
    chapter: "ACT 3 — 발각",
    location: "구역 광장 근처",
    name: "내레이션",
    text: "구역 광장 근처. 거의 다 왔다 싶은 순간 —\n아토의 점퍼 주머니에서 인간 구역 브랜드 과자 봉지가 떨어진다. 구역 실력자 거롯이 그걸 집어 든다.\n\n거롯: ……이안. 이 아이, 인간이구나.\n\n주변에 뱀파이어들이 모인다. 분위기가 차가워진다. 아토는 이안의 손을 더 꼭 잡는다.\n\n거롯: 인간 전쟁 이후로 이쪽 구역에 인간 아이가 들어온 건 처음이야. 어떻게 할 생각이지?",
    options: [
      { text: "A. \"이 아이는 위협이 아니다. 그냥 길 잃은 어린아이야.\"", nextScene: "scene6_A" },
      { text: "B. \"……내가 잘못했다. 하지만 이 아이만은 보내줘.\"", nextScene: "scene6_B_bad_route" }
    ]
  },

  // ✅ 선택지 5 — A 선택 — 정상 진행
  scene6_A: {
    chapter: "ACT 3 — 발각",
    location: "구역 광장 근처",
    name: "대화",
    text: "이안이 한 발 앞으로 나선다.\n\n이안: 이 아이가 무슨 죄야. 우리 구역에 쫓겨 온 게 인간의 잘못이야, 뱀파이어의 잘못이야. 아무것도 모르는 다섯 살짜리가 무슨 잘못이 있냐고.\n\n그때 아토가 거롯을 올려다본다.\n\n아토: 아저씨, 왜 화났어요?\n거롯: ……\n아토: 무서우면 화나는 거잖아요. 우리 아빠도 그래요.\n거롯: ……나는 무섭지 않아.\n아토: 그럼 왜요? 형은 안 무서웠는데. 처음엔 무서운 척했지만.\n\n침묵이 흐른다.\n\n거롯: (한참 뒤) ……이안, 너 예전부터 운도 입도 지나치게 좋았어.\n\n거롯이 물러선다. 길이 열린다.",
    options: [{ text: "다음 스토리 대기", nextScene: "intro" }] // 💡 추후 연재할 다음 씬 연결부
  },

  // ❌ 선택지 5 — B 선택 — 배드엔딩 플래그
  scene6_B_bad_route: {
    chapter: "ACT 3 — 발각",
    location: "구역 광장 근처",
    name: "대화",
    text: "이안이 고개를 숙인다. 거롯은 잠시 고민하는 척하더니 —\n\n거롯: 규칙은 규칙이야. 이안, 너도 알잖아.\n\n아토가 이안을 올려다본다.\n\n아토: 형, 괜찮아?\n\n이안은 대답하지 못한다.",
    options: [{ text: "다음으로", nextScene: "bad5_end" }]
  },

  // [배드엔딩 5 — 무릎을 꿇다]
  bad5_end: {
    chapter: "배드엔딩 5 — 무릎을 꿇다",
    location: "구역 광장",
    name: "내레이션",
    text: "사과는 때로 약함으로 읽힌다. 거롯은 아토를 협상 카드로 삼기로 했다. 이안은 막으려 했지만 혼자였다. 아토는 끝내 이안의 손을 놓쳤다. 형, 하고 부르는 목소리가 멀어졌다. 이안은 그날 이후 오랫동안 그 목소리를 잊지 못했다.\n— 엔딩: 굴복",
    options: [{ text: "처음부터 다시 하기", nextScene: "intro" }]
  },
  // 📖 ACT 4 — 귀환 [씬 7 — 이안의 회상]
  scene6_A: {
    chapter: "ACT 4 — 귀환",
    location: "구역 외곽으로 향하는 길",
    name: "내레이션",
    text: "거롯을 설득하고 걷는 사이, 짤막한 회상.\n전쟁 전, 이안은 인간 아이와 놀았던 적이 있다. 그 아이도 이안을 무서워하지 않았다. 전쟁 중 그 아이의 마을이 불탔다. 이안은 막지 못했다.\n\n(회상 속 목소리) \"형, 무서워?\"\n(회상 속 이안) \"……나는 괜찮아.\"\n\n현재로 돌아온다. 아토가 똑같이 물었었다는 걸 새삼 깨닫는다.",
    options: [{ text: "경계선으로 향한다", nextScene: "scene8_boundary" }]
  },

  // [씬 8 — 경계선]
  scene8_boundary: {
    chapter: "ACT 4 — 귀환",
    location: "구역 외곽 철조망",
    name: "대화",
    text: "구역 외곽 철조망. 인간 구역이 보인다. 저 멀리 아토의 아빠가 이름을 부르며 뛰어오고 있다.\n\n아토: 형, 나 가야 해.\n이안: ……그래.\n아토: 또 놀러 와도 돼?\n이안: 안 돼.\n아토: 왜?\n이안: 여기는 너한텐 위험해.\n아토: (잠깐 생각하다가) 그럼 나 크면 와도 돼?\n이안: ……\n아토: 크면 여기 위험 안 하게 만들 거야. 그러면 오면 되잖아.\n\n이안이 피식 웃는다. 오랜만에 웃는 표정.\n\n이안: ……그래. 그때 와.\n아토: 약속!",
    options: [{ text: "약속을 나눈다", nextScene: "scene8_promise" }]
  },
  scene8_promise: {
    chapter: "ACT 4 — 귀환",
    location: "구역 외곽 철조망",
    name: "내레이션",
    text: "아토가 이안의 손에 새끼손가락을 건다. 이안이 어색하게 새끼손가락을 걸어준다.",
    options: [{ text: "다음", nextScene: "scene9_ending" }]
  },

  // [씬 9 — 엔딩]
  scene9_ending: {
    chapter: "ACT 4 — 귀환",
    location: "구역 외곽 철조망 앞",
    name: "이안 (혼잣말)",
    text: "아토가 철조망 너머로 달려간다. 아빠 품에 와락 안긴다.\n이안은 그 자리에 서서 바라본다.\n\n……153년 살면서 새끼손가락은 처음이네.",
    options: [{ text: "돌아서서 걷기 시작한다", nextScene: "scene9_fadeout" }]
  },
  scene9_fadeout: {
    chapter: "TRUE ENDING",
    location: "회색 지대 경계선",
    name: "내레이션",
    text: "그가 돌아서서 구역 쪽으로 걷기 시작하는 장면으로 페이드아웃.",
    options: [{ text: "타이틀 화면으로 가기", nextScene: "intro" }]
  },
  // [에필로그 — 엔딩 크레딧 후]
  scene9_fadeout: {
    chapter: "TRUE ENDING",
    location: "회색 지대 경계선",
    name: "내레이션",
    text: "그가 돌아서서 구역 쪽으로 걷기 시작하는 장면으로 페이드아웃.",
    options: [{ text: "에필로그 보기", nextScene: "epilogue" }]
  },
  epilogue: {
    chapter: "에필로그 — 엔딩 크레딧 후",
    location: "20년 후 — 인간 구역",
    name: "내레이션",
    text: "그로부터 20년 후 —\n인간 구역의 젊은 정치인 김아토는 '뱀파이어 공존법'을 발의했다.\n그가 그 법안에 서명하던 날, 기자들이 물었다.\n\"왜 이 법을 만들었습니까?\"\n그는 잠깐 웃고 나서 대답했다.",
    options: [{ text: "다음", nextScene: "epilogue_ato" }]
  },
  epilogue_ato: {
    chapter: "에필로그 — 엔딩 크레딧 후",
    location: "20년 후 — 인간 구역",
    name: "김아토",
    text: "\"약속을 지켜야 해서요.\"",
    options: [{ text: "다음", nextScene: "epilogue_darkness" }]
  },
  epilogue_darkness: {
    chapter: "에필로그 — 엔딩 크레딧 후",
    location: "이안의 집 앞",
    name: "내레이션",
    text: "암전.\n이안의 방문 앞에 누군가 서 있다.\n문이 열린다.\n\n\nEND.",
    options: [{ text: "처음부터 다시 하기", nextScene: "intro" }]
  }
};

function App() {
  const [currentSceneId, setCurrentSceneId] = useState('intro');
  const currentScene = SCENARIO[currentSceneId] || SCENARIO['intro'];

  return (
    <div className="vn-container">
      {/* 배경 이미지 레이어 */}
      <div className="vn-background-layer">
        <img 
          src={currentScene.background} 
          className="vn-bg-img" 
          alt="Visual Novel Background" 
        />
      </div>

      {/* 왼쪽 상단 챕터 및 장소 정보 글박스 */}
      <div className="vn-top-info">
        <div className="vn-info-chapter">{currentScene.chapter}</div>
        <div className="vn-info-location">{currentScene.location}</div>
      </div>

      {/* 하단 인터페이스 오버레이 */}
      <div className="vn-ui-overlay">
        
        {/* 대화 상자 */}
        <div className="vn-dialogue-box">
          {/* 캐릭터 이름 표기 태그 */}
          <div className="vn-name-tag">
            <span className="vn-name-text">{currentScene.name}</span>
          </div>
          
          {/* 원본 텍스트 줄바꿈 형식 그대로 적용 출력 */}
          <div className="vn-text-content">
            {currentScene.text.split('\n').map((line, index) => (
              <p key={index}>{line}</p>
            ))}
          </div>
          
          {/* 우측 하단 반짝이는 다이아몬드 커서 */}
          <div className="vn-next-cursor">♦</div>
        </div>

        {/* 유동적인 선택지 버튼 컨테이너 */}
        <div className="vn-options-container">
          {currentScene.options.map((option, idx) => (
            <button 
              key={idx} 
              className="vn-option-button"
              onClick={() => setCurrentSceneId(option.nextScene)}
            >
              {option.text}
            </button>
          ))}
        </div>

      </div>
    </div>
  );
}

export default App;