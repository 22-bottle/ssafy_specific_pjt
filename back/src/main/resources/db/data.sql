-- country
INSERT INTO country (code, country_name, fr_type)
VALUES ('USD', '미국', '미국 달러'),
       ('JPY', '일본', '일본 옌'),
       ('EUR', '이탈리아', '유로'),
       ('CNH', '중국', '위안화'),
       ('AED', '아랍에미리트', '아랍에미리트 디르함'),
       ('AUD', '호주', '호주 달러'),
       ('BHD', '바레인', '바레인 디나르'),
       ('BND', '브루나이', '브루나이 달러'),
       ('CAD', '캐나다', '캐나다 달러'),
       ('CHF', '스위스', '스위스 프랑'),
       ('DKK', '덴마크', '덴마크 크로네'),
       ('GBP', '영국', '영국 파운드'),
       ('HKD', '홍콩', '홍콩 달러'),
       ('IDR', '인도네시아', '인도네시아 루피아'),
       ('KRW', '한국', '한국 원'),
       ('KWD', '쿠웨이트', '쿠웨이트 디나르'),
       ('MYR', '말레이시아', '말레이시아 링기트'),
       ('NOK', '노르웨이', '노르웨이 크로네'),
       ('NZD', '뉴질랜드', '뉴질랜드 달러'),
       ('SAR', '사우디아라비아', '사우디아라비아 리얄'),
       ('SEK', '스웨덴', '스웨덴 크로나'),
       ('SGD', '싱가포르', '싱가포르 달러'),
       ('THB', '태국', '태국 바트');

-- quiz_level
INSERT INTO quiz_level (country_id, quiz_level, quiz_price)
VALUES (1, 'LOW', 1),
       (1, 'MIDDLE', 2),
       (1, 'HIGH', 3),
       (2, 'LOW', 100),
       (2, 'MIDDLE', 200),
       (2, 'HIGH', 300),
       (3, 'LOW', 1),
       (3, 'MIDDLE', 2),
       (3, 'HIGH', 3),
       (4, 'LOW', 50),
       (4, 'MIDDLE', 100),
       (4, 'HIGH', 150);

-- stage
INSERT INTO stage (country_id, stage_num, stage_title, increase)
       -- 미국 스테이지
VALUES (1, 1, '서부개척시대 - 미국의 확장 (1803-1848년)', 0.4),
       (1, 2, '남북 전쟁 - 내전 시작 (1861-1865년)', -0.2),
       (1, 3, '세계 경제 대공황 - 세계적 위기의 영향 (1900-1920년)', -0.5),
       (1, 4, '', 0),
       (1, 5, '', 0),
       -- 일본 스테이지
       (2, 1, '메이지 유신 (1868년)', 30),
       (2, 2, '폐쇄정책의 시행과 종료 (1639년-1853년)', 30),
       (2, 3, '중일 전쟁 (1894-1895년)', -20),
       (2, 4, '러일 전쟁 (1904-1905년)', -50),
       (2, 5, '', 0),
       -- 이탈리아 스테이지
       (3, 1, '나폴레옹 전쟁 기간 - 이탈리아 캠페인 (1796-1815년)', -0.2),
       (3, 2, '이탈리아 통일 운동 - 리소르지멘토 (1815-1871년)', 0.4),
       (3, 3, '로마의 교황령 점령 (1870년)', -0.3),
       (3, 4, '에티오피아와의 전쟁 (1887-1896년)', -0.2),
       (3, 5, '트리플 알리안스 가입 (1882년)', 0.4),
       -- 중국 스테이지
       (4, 1, '아편전쟁 (제1차: 1839-1842년, 제2차: 1856-1860년)', 25),
       (4, 2, '청나라의 확장 (1700년대)', 30),
       (4, 3, '태평천국의 난 (1850-1864년)', -20),
       (4, 4, '중일전쟁 (1894-1895년)', -30),
       (4, 5, '신해혁명 (1911년)', 10);

-- book_page
INSERT INTO `book_page` (`book_page_id`,`create_time`,`updated_time`,`book_page_img`,`book_page_num`,`stage_id`,`tts`)
VALUES (1,'2024-03-25 16:51:00.141611','2024-03-25 16:51:00.142608','https://hico-books.s3.ap-northeast-2.amazonaws.com/books/stage1_1.png',1,1,"옛날 옛적에, 미국이라는 나라는 지금보다 훨씬 작았어요. 그런데 어느 날, 미국의 대통령 제퍼슨 씨가 프랑스 나라와 큰 거래를 했어요. 루이지애나라는 넓은 땅을 사서 미국을 두 배로 키웠답니다. 이 땅을 사고 나서 많은 사람들이 새로운 집을 찾아 서쪽으로 여행을 시작했어요. 그들은 가족과 짐을 마차에 싣고, 서쪽으로 향하며 새로운 농장을 만들고, 그곳을 자신들의 집으로 만들었지요."),
       (2,'2024-03-25 16:54:20.437969','2024-03-25 16:54:20.437969','https://hico-books.s3.ap-northeast-2.amazonaws.com/books/stage1_2.png',2,1,"1848년에는 캘리포니아에서 금이 발견되었어요. '금이 나왔다!'는 소식을 듣자마자, 많은 사람들이 금을 찾기 위해 캘리포니아로 달려갔어요. 그들은 금을 찾아 부자가 되고 싶었답니다. 사람들은 금을 캐며 행복해했고, 그 덕분에 새로운 도시가 생겨나고 많은 사람들이 살게 되었어요."),
       (3,'2024-03-25 16:54:35.207993','2024-03-25 16:54:35.207993','https://hico-books.s3.ap-northeast-2.amazonaws.com/books/stage1_3.png',3,1,"그 후, 사람들은 더 멀리, 더 빠르게 이동하고 싶어했어요. 그래서 거대한 철도를 만들기로 했지요. 많은 사람들이 모여 철도를 만들었고, 마침내 대륙을 가로질러 이어지는 긴 철도가 완성되었어요. 이 철도 덕분에 사람들은 더 빠르게 여행할 수 있게 되었고, 물건들도 멀리까지 보낼 수 있게 되었답니다."),
       (4,'2024-03-25 16:54:43.599141','2024-03-25 16:54:43.599141','https://hico-books.s3.ap-northeast-2.amazonaws.com/books/stage1_4.png',4,1,"하지만, 새로운 땅을 찾아가는 과정에서, 이미 그 땅에 살고 있던 인디언들과 만나기도 했어요. 인디언들은 '이 땅은 우리 조상들로부터 물려받은 땅이에요'라고 말했지요. 하지만 개척자들과 인디언들 사이에는 서로를 이해하지 못하는 일들이 많았고, 때로는 싸움도 일어났어요. 결국 인디언들은 많이 슬퍼하며 예약지로 이사를 가야만 했답니다."),
       (5,'2024-03-25 16:55:02.056514','2024-03-25 16:55:02.056514','https://hico-books.s3.ap-northeast-2.amazonaws.com/books/stage1_5.png',5,1,"마지막으로, 새로운 마을들이 생기기 시작했고, 마을마다 보안관이 임명되어 마을의 질서를 지키게 되었어요. 보안관은 나쁜 사람들을 잡아 마을을 안전하게 만들었지요. 사람들은 서로 도와가며 마을을 지키고, 덕분에 서부에는 평화와 번영이 찾아왔답니다."),
       (6,'2024-03-25 16:57:58.804787','2024-03-25 16:57:58.804787','https://hico-books.s3.ap-northeast-2.amazonaws.com/books/stage2_1.png',1,2, "오랜 옛날, 미국에는 큰 다툼이 있었어요. 남부의 사람들이 '우리는 혼자서 잘 살 수 있어'라며 탈퇴하겠다는 서류에 서명했어요. 북부의 큰 회의장에서 이 소식을 듣고 많은 사람들이 깜짝 놀랐어요. 한 분이 '이건 우리가 나뉘기 시작하는 거야!'라고 크게 말했어요. 집에서는 가족들이 이 소식을 듣고, 아버지가 '우리 집 앞마당까지 싸움이 올 것 같아'라고 걱정했어요. 그리고 북부와 남부의 지도자들이 서로를 굳게 응시하며, 아무도 물러서지 않았어요. 그저 긴장감만이 느껴졌답니다."),
       (7,'2024-03-25 16:58:07.941464','2024-03-25 16:58:07.941464','https://hico-books.s3.ap-northeast-2.amazonaws.com/books/stage2_2.png',2,2, "전쟁이 시작되었고, 많은 병사들이 싸움터로 떠났어요. 정부에서는 전쟁을 위해 돈과 채권을 많이 찍어냈어요. 한 사람이 '이것으로 충분할까?'라고 걱정했어요. 시장에서는 물건값이 하루아침에 올라버려, 사람들이 '어제와 가격이 왜 달라졌어?'라며 놀랐어요. 남부에서는 한 가족이 지갑을 열어보며 '이 돈으론 아무것도 살 수 없다'라고 한숨 쉬었어요."),
       (8,'2024-03-25 16:58:16.680256','2024-03-25 16:58:16.680256','https://hico-books.s3.ap-northeast-2.amazonaws.com/books/stage2_3.png',3,2, "전쟁 때문에 많은 농장이 파괴되고, 공장도 멈춰 섰어요. 한 사람이 '여기서는 더 이상 살 수 없어'라며 슬퍼했어요. 많은 사람들이 집을 떠나야 했고, 어린 아이가 '우리 집은 어디에 있는 거야?'라고 물었어요. 하지만 희망을 잃지 않은 한 농민이 다시 땅을 일구며 '우리는 다시 시작해야 해'라고 말했어요."),
       (9,'2024-03-25 16:58:23.984911','2024-03-25 16:58:23.984911','https://hico-books.s3.ap-northeast-2.amazonaws.com/books/stage2_4.png',4,2, "전쟁 동안 북부에서는 많은 공장이 분주하게 돌아갔어요. 한 공장장이 '주문이 너무 많아!'라고 말했어요. 시장에서는 사람들이 많은 물건을 사려고 줄을 서고, 한 상인이 '물가가 또 올랐네'라고 투덜거렸어요. 여성들도 공장에서 일하며 '전쟁 덕분에 우리도 일자리를 갖게 됐어'라고 말했어요. 한 경제학자는 그래프를 가리키며 '전쟁이 경제를 살렸지만, 물가도 많이 올렸어요'라고 설명했어요."),
       (10,'2024-03-25 16:58:30.872440','2024-03-25 16:58:30.872440','https://hico-books.s3.ap-northeast-2.amazonaws.com/books/stage2_5.png',5,2, "전쟁이 끝나고 사람들은 폐허 위에서 새로운 희망을 찾았어요. 남부에서는 사람들이 다시 집과 도시를 짓기 시작했고, 한 건축가가 '우리의 힘으로 이곳을 다시 흥하게 할 수 있어'라고 말했어요. 북부에서는 전쟁 후 경제를 안정시키기 위한 큰 회의가 열렸어요. 한 정치인이 '경제를 안정시키는 건 평화를 유지하는 데 정말 중요해'라고 말했어요. 마지막으로 남북의 대표들이 서로 손을 맞잡으며, 배경으로는 다시 지어지는 도시와 농촌이 보였어요. 그들의 손잡음에서 남북이 다시 하나가 되려는 희망의 메시지가 전해졌답니다.");

-- quiz
INSERT INTO quiz (stage_id, quiz_level_id, quiz_type, quiz_question, quiz_answer)
       -- 미국 1스테이지
VALUES (1, 1, 'OX', '루이지애나 구매로 인해 미국은 캐나다까지 영토를 확장했다.', 'X'),
	   (1, 1, 'OX', '골드러시 동안 캘리포니아의 인구는 크게 증가했다.', 'O'),
       (1, 1, 'OX', '서부 개척 시대에는 인터넷이 사용되었다.', 'X'),
       (1, 2, 'OX', '대륙횡단철도는 동부와 서부를 연결하는 첫 번째 철도였다.', 'O'),
       (1, 2, 'OX', '인디언 전쟁은 주로 동부에서 발생했다.', 'X'),
       (1, 2, 'OX', '서부의 마을에서는 모두가 금광을 찾기 위해 왔다.', 'X'),
       (1, 1, 'SHORT_ANSWER', '금을 최초로 발견한 지역은 어디인가요?', '캘리포니아'),
       (1, 2, 'SHORT_ANSWER', '루이지애나 구매 후 사람들은 주로 _쪽으로 이주하기 시작했다.', '서'),
       (1, 3, 'SHORT_ANSWER', '루이지애나 구매가 이루어진 해는 몇 년도인가요?', '1803'),
       (1, 3, 'SHORT_ANSWER', '대륙횡단철도가 완성된 연도는 몇 년도인가요?', '1869'),
       -- 미국 2스테이지
       (2, 1, 'OX', '남부는 미국 남북 전쟁 전야에 독립을 선언하며 연방에서 탈퇴했다.', 'O'),
       (2, 1, 'OX', '남북 전쟁 초기, 북부의 정치인들은 남부의 탈퇴에 놀라지 않았다.', 'X'),
       (2, 1, 'OX', '남북 전쟁 동안 정부는 전쟁 자금을 마련하기 위해 대량의 화폐를 인쇄했다.', 'O'),
       (2, 2, 'OX', '남부의 경제는 전쟁으로 인해 황폐화되었으며, 많은 농장과 공장이 파괴되었다.', 'X'),
       (2, 2, 'OX', '북부에서는 전쟁 중에도 물가가 안정적이었다.', 'O'),
       (2, 2, 'OX', '전쟁 후 남부와 북부는 경제적 재건을 위해 즉시 협력하기 시작했다.', 'X'),
       (2, 1, 'SHORT_ANSWER', '남부가 연방에서 탈퇴한 것을 공식적으로 선언한 문서는 "_ _" 선언문이라고 한다.', '탈퇴'),
       (2, 2, 'SHORT_ANSWER', '남북 전쟁 초기, 북부 정부가 직면한 주요 경제적 도전은 대규모 "_ _" 자금 도달이었다.', '군사'),
       (2, 3, 'SHORT_ANSWER', '전쟁 중 남부에서 경험한 경제적 현상으로, 화폐 가치가 급격히 하락한 이유는 대량의 "_ _" 발행이다.', '화폐'),
       (2, 3, 'SHORT_ANSWER', '북부 경제에서 전쟁이 가져온 긍정적 변화는 군수품 생산 증가와 "_ _" 노동자 증가이다.', '여성'),
       -- 일본 1스테이지
       (6, 4, 'OX', '메이지 유신은 일본의 근대화를 이끈 중요한 사건이다.', 'O'),
	   (6, 4, 'OX', '페리 제독은 1853년에 일본을 개방하도록 요구한 인물이다.', 'O'),
       (6, 4, 'OX', '일본의 메이지 유신 이후, 황실이 중앙에 권력을 회복했다.', 'O'),
       (6, 5, 'OX', '메이지 유신으로 인해 일본은 서양의 영향을 받아 근대화가 이루어졌다.', 'O'),
       (6, 5, 'OX', '에도 시대 말기에는 다이묘와 사무라이들이 주요한 권력을 가졌다.', 'X'),
       (6, 5, 'OX', '메이지 유신은 에도 시기에 일어났다.', 'X'),
       (6, 4, 'SHORT_ANSWER', '일본의 근대화에 큰 영향을 준 것은 무엇인가요?', '메이지 유신'),
       (6, 5, 'SHORT_ANSWER', '메이지 유신 후 일본에서 가장 중요한 권력을 가진 것은 무엇인가요?', '황실'),
       (6, 6, 'SHORT_ANSWER', '메이지 유신 이후, 일본은 전통적인 ____를 타파하고 중앙집권적 국가로의 전환을 이끌었습니다.', '봉건체제'),
       (6, 6, 'SHORT_ANSWER', '페리 제독이 처음으로 일본을 개방하도록 요구한 해는 몇 년도인가요?', '1853'),
       -- 중국 1스테이지
       (16, 10, 'OX', '아편전쟁은 중국의 근대화를 촉진시켰다.', 'X'),
       (16, 10, 'OX', '아편전쟁은 중국이 영국과의 무역에서 불공평한 조건을 받아들이지 않아 발발하였다.', 'O'),
       (16, 10, 'OX', '아편전쟁에는 영국 외에도 프랑스, 미국, 일본 등이 참전하였다.', 'O'),
       (16, 11, 'OX', '제1차 아편전쟁은 1856년부터 1860년까지 진행되었다.', 'X'),
       (16, 11, 'OX', '아편전쟁 중 중국은 세계 강대국인 영국과 단독으로 대립하였다.', 'X'),
       (16, 11, 'OX', '아편전쟁의 결과로 중국은 홍콩을 영국에게 양도하고, 통상조약을 체결하여 외국과의 무역이 활발해졌다.', 'O'),
       (16, 11, 'SHORT_ANSWER', '아편전쟁 이후 중국은 외국과 어떤 종류의 조약을 체결하였나요?', '무역'),
       (16, 11, 'SHORT_ANSWER', '아편전쟁은 __의 무역사에 의해 시작되었다.', '영국'),
       (16, 12, 'SHORT_ANSWER', '아편전쟁은 __조약을 끝으로 마무리된다.', '난징'),
       (16, 12, 'SHORT_ANSWER', '아편전쟁의 결과로 중국이 영국에게 양도한 지역은 어디인가요?', '홍콩');