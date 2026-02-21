// ─── 오늘의 명언 Quote Database ───
// Total categories: 79+ | Total quotes: 700+
const QUOTES_DB = {
    "희망": [
        {
            "ko": "희망은 깨어 있는 자의 꿈이다.",
            "en": "Hope is the dream of a waking man.",
            "author": "아리스토텔레스 (Aristotle)"
        },
        {
            "ko": "어둠을 탓하기보다 촛불을 켜라.",
            "en": "It is better to light a candle than to curse the darkness.",
            "author": "중국 속담 (Chinese Proverb)"
        },
        {
            "ko": "가장 어두운 밤에도 끝은 있고 해는 떠오른다.",
            "en": "The darkest night will end and the sun will rise.",
            "author": "빅토르 위고 (Victor Hugo)"
        },
        {
            "ko": "시련 한가운데에도 기회가 있다.",
            "en": "In the middle of difficulty lies opportunity.",
            "author": "알베르트 아인슈타인 (Albert Einstein)"
        },
        {
            "ko": "별을 향해 발사하라. 빗나가도 달에는 닿을 수 있다.",
            "en": "Shoot for the moon. Even if you miss, you may land among the stars.",
            "author": "노먼 빈센트 필 (Norman Vincent Peale)"
        },
        {
            "ko": "성공보다 용기를 품은 꿈이 먼저다.",
            "en": "The future belongs to those who believe in the beauty of their dreams.",
            "author": "엘리너 루즈벨트 (Eleanor Roosevelt)"
        },
        {
            "ko": "살아 있는 한 희망은 있다.",
            "en": "While there is life there is hope.",
            "author": "키케로 (Cicero)"
        },
        {
            "ko": "끝날 때까지는 끝난 게 아니다.",
            "en": "It ain't over till it's over.",
            "author": "요기 베라 (Yogi Berra)"
        },
        {
            "ko": "오늘의 고난이 내일의 힘이 된다.",
            "en": "Out of difficulties grow miracles.",
            "author": "장 드 라 브뤼예르 (Jean de La Bruyere)"
        }
    ],
    "사랑": [
        {
            "ko": "사랑은 둘이 함께 어리석어지는 것이다.",
            "en": "Love is being stupid together.",
            "author": "폴 발레리 (Paul Valery)"
        },
        {
            "ko": "사랑은 소유가 아니라 이해다.",
            "en": "Love is composed of a single soul inhabiting two bodies.",
            "author": "아리스토텔레스 (Aristotle)"
        },
        {
            "ko": "사랑이 있는 곳에 삶이 있다.",
            "en": "Where there is love there is life.",
            "author": "마하트마 간디 (Mahatma Gandhi)"
        },
        {
            "ko": "우리는 사랑받기 위해 태어난 것이 아니라 사랑하기 위해 태어났다.",
            "en": "We can only learn to love by loving.",
            "author": "아이리스 머독 (Iris Murdoch)"
        },
        {
            "ko": "사랑은 서로 바라보는 것이 아니라 같은 방향을 함께 바라보는 것이다.",
            "en": "Love does not consist in gazing at each other, but in looking outward together in the same direction.",
            "author": "앙투안 드 생텍쥐페리 (Antoine de Saint-Exupery)"
        },
        {
            "ko": "사랑은 행동이다.",
            "en": "Love is an act of endless forgiveness, a tender look which becomes a habit.",
            "author": "피터 유스티노프 (Peter Ustinov)"
        },
        {
            "ko": "진실한 사랑은 두려움을 밀어낸다.",
            "en": "There is no fear in love.",
            "author": "성경 (Bible)"
        },
        {
            "ko": "사랑은 시간을 초월한다.",
            "en": "Love is the only force capable of transforming an enemy into a friend.",
            "author": "마틴 루터 킹 Jr. (Martin Luther King Jr.)"
        },
        {
            "ko": "친절은 사랑의 언어다.",
            "en": "Kindness is the language which the deaf can hear and the blind can see.",
            "author": "마크 트웨인 (Mark Twain)"
        }
    ],
    "성공": [
        {
            "ko": "비결은 시작하는 것이다.",
            "en": "The secret of getting ahead is getting started.",
            "author": "마크 트웨인 (Mark Twain)"
        },
        {
            "ko": "행동이 모든 성공의 기초 열쇠다.",
            "en": "Action is the foundational key to all success.",
            "author": "파블로 피카소 (Pablo Picasso)"
        },
        {
            "ko": "성공은 우연이 아니라 습관이다.",
            "en": "Success is nothing more than a few simple disciplines, practiced every day.",
            "author": "짐 론 (Jim Rohn)"
        },
        {
            "ko": "성공은 준비와 기회의 만남이다.",
            "en": "Luck is what happens when preparation meets opportunity.",
            "author": "세네카 (Seneca)"
        },
        {
            "ko": "포기하지 않으면 늦지 않았다.",
            "en": "It does not matter how slowly you go as long as you do not stop.",
            "author": "공자 (Confucius)"
        },
        {
            "ko": "기회는 준비된 사람의 것이다.",
            "en": "Chance favors the prepared mind.",
            "author": "루이 파스퇴르 (Louis Pasteur)"
        },
        {
            "ko": "성공하기 전에는 모든 것이 불가능해 보인다.",
            "en": "It always seems impossible until it is done.",
            "author": "넬슨 만델라 (Nelson Mandela)"
        },
        {
            "ko": "위대한 일은 작은 일을 모아 만든다.",
            "en": "Great things are done by a series of small things brought together.",
            "author": "빈센트 반 고흐 (Vincent van Gogh)"
        },
        {
            "ko": "성공은 목표가 아니라 과정이다.",
            "en": "Success is a journey, not a destination.",
            "author": "벤 스위트랜드 (Ben Sweetland)"
        }
    ],
    "용기": [
        {
            "ko": "용기란 두려워도 앞으로 나아가는 것이다.",
            "en": "Courage is fear that has said its prayers.",
            "author": "도로시 버나드 (Dorothy Bernard)"
        },
        {
            "ko": "자유의 대가는 영원한 경계다.",
            "en": "The price of freedom is eternal vigilance.",
            "author": "토머스 제퍼슨 (Thomas Jefferson)"
        },
        {
            "ko": "두려움은 문을 두드리고 용기가 열었더니 아무도 없었다.",
            "en": "Fear knocked at the door. Faith answered. There was no one there.",
            "author": "마틴 루터 (Martin Luther)"
        },
        {
            "ko": "대담함 속에는 천재성과 힘과 마법이 있다.",
            "en": "Boldness has genius, power and magic in it.",
            "author": "괴테 (Johann Wolfgang von Goethe)"
        },
        {
            "ko": "옳은 일을 하기에 늦은 때란 없다.",
            "en": "It is never wrong to do the right thing.",
            "author": "마크 트웨인 (Mark Twain)"
        },
        {
            "ko": "한 발 내딛는 용기가 인생을 바꾼다.",
            "en": "The brave may not live forever, but the cautious do not live at all.",
            "author": "리처드 브랜슨 (Richard Branson)"
        },
        {
            "ko": "넘어지지 않는 것이 아니라 일어서는 것이 용기다.",
            "en": "Our greatest glory is not in never falling, but in rising every time we fall.",
            "author": "공자 (Confucius)"
        },
        {
            "ko": "두려움 너머가 성장이다.",
            "en": "Everything you've ever wanted is on the other side of fear.",
            "author": "조지 애데어 (George Addair)"
        },
        {
            "ko": "영웅은 평범한 사람이 버텨낸 이름이다.",
            "en": "Courage is grace under pressure.",
            "author": "어니스트 헤밍웨이 (Ernest Hemingway)"
        }
    ],
    "인생": [
        {
            "ko": "삶은 용감한 모험이거나 아무것도 아니다.",
            "en": "Life is either a daring adventure or nothing at all.",
            "author": "헬렌 켈러 (Helen Keller)"
        },
        {
            "ko": "삶은 우리가 다른 계획을 세우는 동안 일어난다.",
            "en": "Life is what happens when you're busy making other plans.",
            "author": "존 레논 (John Lennon)"
        },
        {
            "ko": "짧게 살아도 깊게 살아라.",
            "en": "It is not length of life, but depth of life.",
            "author": "랄프 왈도 에머슨 (Ralph Waldo Emerson)"
        },
        {
            "ko": "삶의 목적은 행복이 아니라 유용함이다.",
            "en": "The purpose of life is not to be happy. It is to be useful.",
            "author": "랄프 왈도 에머슨 (Ralph Waldo Emerson)"
        },
        {
            "ko": "현재를 선물처럼 써라.",
            "en": "Yesterday is history, tomorrow is a mystery, today is a gift.",
            "author": "엘리너 루즈벨트 (Eleanor Roosevelt)"
        },
        {
            "ko": "삶은 선택의 총합이다.",
            "en": "Life is the sum of all your choices.",
            "author": "알베르 카뮈 (Albert Camus)"
        },
        {
            "ko": "삶을 사랑하라. 그러면 삶도 너를 사랑할 것이다.",
            "en": "Life is really simple, but we insist on making it complicated.",
            "author": "공자 (Confucius)"
        },
        {
            "ko": "삶은 의미를 찾는 일이 아니라 의미를 만드는 일이다.",
            "en": "Life isn't about finding yourself. Life is about creating yourself.",
            "author": "조지 버나드 쇼 (George Bernard Shaw)"
        },
        {
            "ko": "인생은 자전거를 타는 것과 같다. 균형을 잡으려면 움직여야 한다.",
            "en": "Life is like riding a bicycle. To keep your balance, you must keep moving.",
            "author": "알베르트 아인슈타인 (Albert Einstein)"
        }
    ],
    "노력": [
        {
            "ko": "위대한 성취는 위대한 희생을 요구한다.",
            "en": "Great achievement is usually born of great sacrifice.",
            "author": "나폴레옹 힐 (Napoleon Hill)"
        },
        {
            "ko": "매일 조금씩이 결국 큰 차이를 만든다.",
            "en": "Small disciplines repeated with consistency every day lead to great achievements.",
            "author": "존 C. 맥스웰 (John C. Maxwell)"
        },
        {
            "ko": "고통은 잠깐, 포기는 영원이다.",
            "en": "Pain is temporary. Quitting lasts forever.",
            "author": "랜스 암스트롱 (Lance Armstrong)"
        },
        {
            "ko": "성공의 엘리베이터는 고장 났다. 계단을 이용하라.",
            "en": "The elevator to success is out of order. You'll have to use the stairs.",
            "author": "조 지라드 (Joe Girard)"
        },
        {
            "ko": "할 수 있을 때까지 하라.",
            "en": "Do what you can, with what you have, where you are.",
            "author": "시어도어 루스벨트 (Theodore Roosevelt)"
        },
        {
            "ko": "작은 진전도 진전이다.",
            "en": "Progress, however small, is still progress.",
            "author": "작자 미상 (Unknown)"
        },
        {
            "ko": "반복이 실력을 만든다.",
            "en": "We are what we repeatedly do.",
            "author": "아리스토텔레스 (Aristotle)"
        },
        {
            "ko": "천재는 1%의 영감과 99%의 땀이다.",
            "en": "Genius is one percent inspiration and ninety-nine percent perspiration.",
            "author": "토머스 에디슨 (Thomas Edison)"
        },
        {
            "ko": "돌을 쪼는 마지막 한 번이 아니라 그 전의 모든 타격이 바위를 깬다.",
            "en": "It's not that I'm so smart, it's just that I stay with problems longer.",
            "author": "알베르트 아인슈타인 (Albert Einstein)"
        }
    ],
    "행복": [
        {
            "ko": "기쁨은 나누면 배가 된다.",
            "en": "Shared joy is a double joy.",
            "author": "스웨덴 속담 (Swedish Proverb)"
        },
        {
            "ko": "행복은 단순함에서 온다.",
            "en": "Simplicity makes me happy.",
            "author": "알리시아 키스 (Alicia Keys)"
        },
        {
            "ko": "행복은 가진 것의 크기가 아니라 보는 마음의 크기다.",
            "en": "The happiest people don't have the best of everything; they make the best of everything.",
            "author": "작자 미상 (Unknown)"
        },
        {
            "ko": "행복은 현재에 집중할 때 자란다.",
            "en": "Be happy for this moment. This moment is your life.",
            "author": "오마르 카이얌 (Omar Khayyam)"
        },
        {
            "ko": "웃음 없는 하루는 낭비한 하루다.",
            "en": "A day without laughter is a day wasted.",
            "author": "찰리 채플린 (Charlie Chaplin)"
        },
        {
            "ko": "평범한 날의 소중함을 아는 것이 행복이다.",
            "en": "Enjoy the little things, for one day you may look back and realize they were the big things.",
            "author": "로버트 브롤트 (Robert Brault)"
        },
        {
            "ko": "행복은 습관이다. 그것을 몸에 지녀라.",
            "en": "Happiness is a habit. Cultivate it.",
            "author": "엘버트 허버드 (Elbert Hubbard)"
        },
        {
            "ko": "행복은 준비된 상태가 아니라 스스로 만드는 것이다.",
            "en": "Happiness is not something ready made. It comes from your own actions.",
            "author": "달라이 라마 (Dalai Lama)"
        },
        {
            "ko": "행복의 비밀은 자유이고 자유의 비밀은 용기다.",
            "en": "The secret of happiness is freedom, and the secret of freedom is courage.",
            "author": "투키디데스 (Thucydides)"
        }
    ],
    "지혜": [
        {
            "ko": "배움에는 끝이 없다.",
            "en": "Live as if you were to die tomorrow. Learn as if you were to live forever.",
            "author": "마하트마 간디 (Mahatma Gandhi)"
        },
        {
            "ko": "침묵할 때 더 많은 것을 배운다.",
            "en": "Silence is a source of great strength.",
            "author": "노자 (Lao Tzu)"
        },
        {
            "ko": "지혜로운 자는 기회를 만든다.",
            "en": "A wise man will make more opportunities than he finds.",
            "author": "프랜시스 베이컨 (Francis Bacon)"
        },
        {
            "ko": "생각이 곧 운명을 만든다.",
            "en": "The mind is everything. What you think you become.",
            "author": "부처 (Buddha)"
        },
        {
            "ko": "진실은 단순하다.",
            "en": "The truth is rarely pure and never simple.",
            "author": "오스카 와일드 (Oscar Wilde)"
        },
        {
            "ko": "너 자신을 알라.",
            "en": "Know thyself.",
            "author": "소크라테스 (Socrates)"
        },
        {
            "ko": "아는 것이 힘이다.",
            "en": "Knowledge is power.",
            "author": "프랜시스 베이컨 (Francis Bacon)"
        },
        {
            "ko": "말하기보다 듣는 데 두 배의 귀를 써라.",
            "en": "We have two ears and one mouth so that we can listen twice as much as we speak.",
            "author": "에픽테토스 (Epictetus)"
        },
        {
            "ko": "지혜의 시작은 경이로움이다.",
            "en": "Wisdom begins in wonder.",
            "author": "소크라테스 (Socrates)"
        }
    ],
    "변화": [
        {
            "ko": "진정한 발전은 습관을 바꾸는 데서 나온다.",
            "en": "To improve is to change; to be perfect is to change often.",
            "author": "윈스턴 처칠 (Winston Churchill)"
        },
        {
            "ko": "변화는 두려움이 아니라 가능성이다.",
            "en": "Your life does not get better by chance, it gets better by change.",
            "author": "짐 론 (Jim Rohn)"
        },
        {
            "ko": "배움 없는 변화는 없다.",
            "en": "Education is the most powerful weapon which you can use to change the world.",
            "author": "넬슨 만델라 (Nelson Mandela)"
        },
        {
            "ko": "변화의 시작은 선택이다.",
            "en": "Progress is impossible without change.",
            "author": "조지 버나드 쇼 (George Bernard Shaw)"
        },
        {
            "ko": "변화만이 유일한 상수다.",
            "en": "The only constant in life is change.",
            "author": "헤라클레이토스 (Heraclitus)"
        },
        {
            "ko": "세상을 바꾸려면 먼저 자신을 바꿔라.",
            "en": "Be the change that you wish to see in the world.",
            "author": "마하트마 간디 (Mahatma Gandhi)"
        },
        {
            "ko": "바람을 막을 수 없다면 돛을 조정하라.",
            "en": "When we are no longer able to change a situation, we are challenged to change ourselves.",
            "author": "빅터 프랭클 (Viktor Frankl)"
        },
        {
            "ko": "성장은 늘 불편함에서 시작된다.",
            "en": "Change is hard at first, messy in the middle and gorgeous at the end.",
            "author": "로빈 샤르마 (Robin Sharma)"
        },
        {
            "ko": "어제와 같은 오늘로 다른 내일을 기대할 수 없다.",
            "en": "Insanity is doing the same thing over and over and expecting different results.",
            "author": "알베르트 아인슈타인 (Albert Einstein)"
        }
    ],
    "꿈": [
        {
            "ko": "꿈을 글로 쓰면 계획이 된다.",
            "en": "A dream written down with a date becomes a goal.",
            "author": "그렉 S. 리드 (Greg S. Reid)"
        },
        {
            "ko": "가슴이 뛰는 일을 선택하라.",
            "en": "The biggest adventure you can take is to live the life of your dreams.",
            "author": "오프라 윈프리 (Oprah Winfrey)"
        },
        {
            "ko": "꿈은 행동할 때 현실이 된다.",
            "en": "Dreams don't work unless you do.",
            "author": "존 C. 맥스웰 (John C. Maxwell)"
        },
        {
            "ko": "미래는 꿈의 아름다움을 믿는 사람의 것이다.",
            "en": "The future belongs to those who believe in the beauty of their dreams.",
            "author": "엘리너 루즈벨트 (Eleanor Roosevelt)"
        },
        {
            "ko": "꿈꿀 수 있다면 이룰 수 있다.",
            "en": "If you can dream it, you can do it.",
            "author": "월트 디즈니 (Walt Disney)"
        },
        {
            "ko": "큰 꿈은 사람의 마음을 움직인다.",
            "en": "Dream no small dreams for they have no power to move the hearts of men.",
            "author": "요한 볼프강 폰 괴테 (Johann Wolfgang von Goethe)"
        },
        {
            "ko": "꿈은 방향을 만든다.",
            "en": "Hold fast to dreams, for if dreams die, life is a broken-winged bird that cannot fly.",
            "author": "랭스턴 휴즈 (Langston Hughes)"
        },
        {
            "ko": "비전 없이는 방황한다.",
            "en": "Where there is no vision, the people perish.",
            "author": "성경 잠언 (Bible Proverbs)"
        },
        {
            "ko": "꿈은 이루는 사람의 것이다.",
            "en": "All our dreams can come true, if we have the courage to pursue them.",
            "author": "월트 디즈니 (Walt Disney)"
        }
    ],
    "도전": [
        {
            "ko": "두려움 너머가 성장이다.",
            "en": "Everything you've ever wanted is on the other side of fear.",
            "author": "조지 애데어 (George Addair)"
        },
        {
            "ko": "영웅은 평범한 사람이 버텨낸 이름이다.",
            "en": "Courage is grace under pressure.",
            "author": "어니스트 헤밍웨이 (Ernest Hemingway)"
        },
        {
            "ko": "실패는 성공의 어머니다.",
            "en": "Failure is the mother of success.",
            "author": "한국 속담 (Korean Proverb)"
        },
        {
            "ko": "나는 실패한 것이 아니라 작동하지 않는 방법을 찾았다.",
            "en": "I have not failed. I've just found 10,000 ways that won't work.",
            "author": "토머스 에디슨 (Thomas Edison)"
        },
        {
            "ko": "일곱 번 넘어져도 여덟 번 일어서라.",
            "en": "Fall seven times, stand up eight.",
            "author": "일본 속담 (Japanese Proverb)"
        },
        {
            "ko": "넘어진 곳에서 다시 일어나는 것이 영광이다.",
            "en": "Our greatest glory is not in never falling, but in rising every time we fall.",
            "author": "공자 (Confucius)"
        },
        {
            "ko": "실패는 선택이 아니라 포기가 선택이다.",
            "en": "Failure is simply the opportunity to begin again, this time more intelligently.",
            "author": "헨리 포드 (Henry Ford)"
        },
        {
            "ko": "상처는 빛이 들어오는 틈이다.",
            "en": "The wound is the place where the Light enters you.",
            "author": "루미 (Rumi)"
        },
        {
            "ko": "역경은 사람을 드러낸다.",
            "en": "Adversity does not build character, it reveals it.",
            "author": "제임스 레인 앨런 (James Lane Allen)"
        }
    ],
    "시간": [
        {
            "ko": "중요한 것은 바쁜 것이 아니라 올바른 것이다.",
            "en": "It is not enough to be busy; so are the ants. The question is: what are we busy about?",
            "author": "헨리 데이비드 소로 (Henry David Thoreau)"
        },
        {
            "ko": "시간은 금이다.",
            "en": "Time is money.",
            "author": "벤자민 프랭클린 (Benjamin Franklin)"
        },
        {
            "ko": "잃어버린 시간은 다시 찾을 수 없다.",
            "en": "Lost time is never found again.",
            "author": "벤자민 프랭클린 (Benjamin Franklin)"
        },
        {
            "ko": "지금 이 순간이 네 인생이다.",
            "en": "The present moment is filled with joy and happiness.",
            "author": "틱낫한 (Thich Nhat Hanh)"
        },
        {
            "ko": "어제는 역사, 내일은 미스터리, 오늘은 선물이다.",
            "en": "Yesterday is history, tomorrow is a mystery, today is a gift.",
            "author": "엘리너 루즈벨트 (Eleanor Roosevelt)"
        },
        {
            "ko": "시간을 관리하지 못하면 아무것도 관리할 수 없다.",
            "en": "Until we can manage time, we can manage nothing else.",
            "author": "피터 드러커 (Peter Drucker)"
        },
        {
            "ko": "기다리는 자에게도 시간은 흐른다.",
            "en": "Time and tide wait for no man.",
            "author": "영국 속담 (English Proverb)"
        },
        {
            "ko": "시계가 아니라 나침반을 보라.",
            "en": "Don't watch the clock; do what it does. Keep going.",
            "author": "샘 레븐슨 (Sam Levenson)"
        },
        {
            "ko": "한 번뿐인 오늘을 잘 써라.",
            "en": "Forever is composed of nows.",
            "author": "에밀리 디킨슨 (Emily Dickinson)"
        }
    ],
    "리더십": [
        {
            "ko": "미래를 예측하는 가장 좋은 방법은 미래를 만드는 것이다.",
            "en": "The best way to predict the future is to create it.",
            "author": "피터 드러커 (Peter Drucker)"
        },
        {
            "ko": "가격은 지불하는 것이고 가치는 얻는 것이다.",
            "en": "Price is what you pay. Value is what you get.",
            "author": "워런 버핏 (Warren Buffett)"
        },
        {
            "ko": "좋은 전략은 단순하고 명확하다.",
            "en": "However beautiful the strategy, you should occasionally look at the results.",
            "author": "윈스턴 처칠 (Winston Churchill)"
        },
        {
            "ko": "경영은 일을 제대로 하는 것이고, 리더십은 옳은 일을 하는 것이다.",
            "en": "Management is doing things right; leadership is doing the right things.",
            "author": "피터 드러커 (Peter Drucker)"
        },
        {
            "ko": "측정할 수 없으면 관리할 수 없다.",
            "en": "If you can't measure it, you can't improve it.",
            "author": "피터 드러커 (Peter Drucker)"
        },
        {
            "ko": "문화가 전략을 아침으로 먹는다.",
            "en": "Culture eats strategy for breakfast.",
            "author": "피터 드러커 (Peter Drucker)"
        },
        {
            "ko": "가장 위험한 것은 위험을 감수하지 않는 것이다.",
            "en": "The biggest risk is not taking any risk.",
            "author": "마크 저커버그 (Mark Zuckerberg)"
        },
        {
            "ko": "혁신은 리더와 추종자를 구분한다.",
            "en": "Innovation distinguishes between a leader and a follower.",
            "author": "스티브 잡스 (Steve Jobs)"
        },
        {
            "ko": "고객이 원하는 것을 100% 이해하라.",
            "en": "The purpose of business is to create and keep a customer.",
            "author": "피터 드러커 (Peter Drucker)"
        }
    ],
    "감사": [
        {
            "ko": "행복은 준비된 상태가 아니라 스스로 만드는 것이다.",
            "en": "Happiness is not something ready made. It comes from your own actions.",
            "author": "달라이 라마 (Dalai Lama)"
        },
        {
            "ko": "행복의 비밀은 자유이고 자유의 비밀은 용기다.",
            "en": "The secret of happiness is freedom, and the secret of freedom is courage.",
            "author": "투키디데스 (Thucydides)"
        },
        {
            "ko": "감사하는 마음은 행복의 지름길이다.",
            "en": "Acknowledging the good that you already have in your life is the foundation for all abundance.",
            "author": "에크하르트 톨레 (Eckhart Tolle)"
        },
        {
            "ko": "행복은 목적지가 아니라 여행 방식이다.",
            "en": "Happiness is a direction, not a place.",
            "author": "시드니 J. 해리스 (Sydney J. Harris)"
        },
        {
            "ko": "네가 웃으면 세상도 너와 함께 웃는다.",
            "en": "If you want to be happy, be.",
            "author": "레오 톨스토이 (Leo Tolstoy)"
        },
        {
            "ko": "기쁨은 나누면 배가 된다.",
            "en": "Shared joy is a double joy.",
            "author": "스웨덴 속담 (Swedish Proverb)"
        },
        {
            "ko": "행복은 단순함에서 온다.",
            "en": "Simplicity makes me happy.",
            "author": "알리시아 키스 (Alicia Keys)"
        },
        {
            "ko": "행복은 가진 것의 크기가 아니라 보는 마음의 크기다.",
            "en": "The happiest people don't have the best of everything; they make the best of everything.",
            "author": "작자 미상 (Unknown)"
        },
        {
            "ko": "행복은 현재에 집중할 때 자란다.",
            "en": "Be happy for this moment. This moment is your life.",
            "author": "오마르 카이얌 (Omar Khayyam)"
        }
    ],
    "자신감": [
        {
            "ko": "작은 습관이 정체성을 만든다.",
            "en": "Every action you take is a vote for the type of person you wish to become.",
            "author": "제임스 클리어 (James Clear)"
        },
        {
            "ko": "끝을 염두에 두고 시작하라.",
            "en": "Begin with the end in mind.",
            "author": "스티븐 코비 (Stephen Covey)"
        },
        {
            "ko": "측정되는 것은 개선된다.",
            "en": "What gets measured gets managed.",
            "author": "피터 드러커 (Peter Drucker)"
        },
        {
            "ko": "목표를 높게 두고 멈추지 마라.",
            "en": "Set your goals high, and don't stop till you get there.",
            "author": "보 잭슨 (Bo Jackson)"
        },
        {
            "ko": "마음챙김은 현재를 다시 선택하는 힘이다.",
            "en": "Be where you are; otherwise you will miss your life.",
            "author": "부처 (Buddha)"
        },
        {
            "ko": "호흡을 지키면 마음이 고요해진다.",
            "en": "Feelings come and go like clouds in a windy sky. Conscious breathing is my anchor.",
            "author": "틱낫한 (Thich Nhat Hanh)"
        },
        {
            "ko": "내면의 평화가 진짜 성공이다.",
            "en": "Calm mind brings inner strength and self-confidence.",
            "author": "달라이 라마 (Dalai Lama)"
        },
        {
            "ko": "자기계발의 핵심은 매일의 개선이다.",
            "en": "Be not afraid of growing slowly; be afraid only of standing still.",
            "author": "중국 속담 (Chinese Proverb)"
        },
        {
            "ko": "목표는 데드라인이 있는 꿈이다.",
            "en": "A goal is a dream with a deadline.",
            "author": "나폴레옹 힐 (Napoleon Hill)"
        }
    ],
    "인내": [
        {
            "ko": "넘어진 곳에서 다시 일어나는 것이 영광이다.",
            "en": "Our greatest glory is not in never falling, but in rising every time we fall.",
            "author": "공자 (Confucius)"
        },
        {
            "ko": "실패는 선택이 아니라 포기가 선택이다.",
            "en": "Failure is simply the opportunity to begin again, this time more intelligently.",
            "author": "헨리 포드 (Henry Ford)"
        },
        {
            "ko": "상처는 빛이 들어오는 틈이다.",
            "en": "The wound is the place where the Light enters you.",
            "author": "루미 (Rumi)"
        },
        {
            "ko": "역경은 사람을 드러낸다.",
            "en": "Adversity does not build character, it reveals it.",
            "author": "제임스 레인 앨런 (James Lane Allen)"
        },
        {
            "ko": "강한 사람은 계속하는 사람이다.",
            "en": "It's not whether you get knocked down, it's whether you get up.",
            "author": "빈스 롬바르디 (Vince Lombardi)"
        },
        {
            "ko": "회복력은 다시 시작하는 힘이다.",
            "en": "Rock bottom became the solid foundation on which I rebuilt my life.",
            "author": "J.K. 롤링 (J.K. Rowling)"
        },
        {
            "ko": "고난은 오래가지 않지만 강한 사람은 남는다.",
            "en": "Tough times never last, but tough people do.",
            "author": "로버트 슐러 (Robert H. Schuller)"
        },
        {
            "ko": "넘어짐은 끝이 아니라 훈련이다.",
            "en": "Success is stumbling from failure to failure with no loss of enthusiasm.",
            "author": "윈스턴 처칠 (Winston Churchill)"
        },
        {
            "ko": "다시 시도하는 순간 실패는 정보가 된다.",
            "en": "I can accept failure, everyone fails at something. But I can't accept not trying.",
            "author": "마이클 조던 (Michael Jordan)"
        }
    ],
    "우정": [
        {
            "ko": "존중은 관계의 기본 통화다.",
            "en": "Respect for ourselves guides our morals; respect for others guides our manners.",
            "author": "로렌스 스턴 (Laurence Sterne)"
        },
        {
            "ko": "먼저 이해하고 그다음 이해시켜라.",
            "en": "Seek first to understand, then to be understood.",
            "author": "스티븐 코비 (Stephen Covey)"
        },
        {
            "ko": "말은 짧게, 사랑은 길게.",
            "en": "Let us always meet each other with smile, for the smile is the beginning of love.",
            "author": "마더 테레사 (Mother Teresa)"
        },
        {
            "ko": "신뢰는 방울방울 쌓이고 한순간에 무너진다.",
            "en": "Trust takes years to build, seconds to break, and forever to repair.",
            "author": "작자 미상 (Unknown)"
        },
        {
            "ko": "좋은 관계는 대화보다 경청으로 시작한다.",
            "en": "Most people do not listen with the intent to understand; they listen with the intent to reply.",
            "author": "스티븐 코비 (Stephen Covey)"
        },
        {
            "ko": "친절은 관계를 지키는 가장 강한 기술이다.",
            "en": "Kind words can be short and easy to speak, but their echoes are truly endless.",
            "author": "마더 테레사 (Mother Teresa)"
        },
        {
            "ko": "가까운 사람에게 더 따뜻하라.",
            "en": "Charity begins at home.",
            "author": "영국 속담 (English Proverb)"
        },
        {
            "ko": "관계의 핵심은 진실함이다.",
            "en": "Honesty is the first chapter in the book of wisdom.",
            "author": "토머스 제퍼슨 (Thomas Jefferson)"
        },
        {
            "ko": "가정은 자연이 만든 걸작이다.",
            "en": "The family is one of nature's masterpieces.",
            "author": "조지 산타야나 (George Santayana)"
        }
    ],
    "창의성": [
        {
            "ko": "상상력은 현실을 넘는 힘이다.",
            "en": "Logic will get you from A to B. Imagination will take you everywhere.",
            "author": "알베르트 아인슈타인 (Albert Einstein)"
        },
        {
            "ko": "예술은 우리가 진실을 깨닫게 하는 거짓말이다.",
            "en": "Art is the lie that enables us to realize the truth.",
            "author": "파블로 피카소 (Pablo Picasso)"
        },
        {
            "ko": "예술은 일상에서 영혼의 먼지를 씻어낸다.",
            "en": "Art washes away from the soul the dust of everyday life.",
            "author": "파블로 피카소 (Pablo Picasso)"
        },
        {
            "ko": "노래는 말하지 못한 마음의 언어다.",
            "en": "Where words fail, music speaks.",
            "author": "한스 크리스티안 안데르센 (Hans Christian Andersen)"
        },
        {
            "ko": "음악은 감정의 지름길이다.",
            "en": "Music gives a soul to the universe, wings to the mind, flight to the imagination.",
            "author": "플라톤 (Plato)"
        },
        {
            "ko": "창조는 용기에서 시작된다.",
            "en": "Creativity takes courage.",
            "author": "앙리 마티스 (Henri Matisse)"
        },
        {
            "ko": "예술은 자유를 숨 쉬게 한다.",
            "en": "The purpose of art is washing the dust of daily life off our souls.",
            "author": "파블로 피카소 (Pablo Picasso)"
        },
        {
            "ko": "음악 없는 삶은 실수다.",
            "en": "Without music, life would be a mistake.",
            "author": "프리드리히 니체 (Friedrich Nietzsche)"
        },
        {
            "ko": "음악은 영혼을 움직이는 보편어다.",
            "en": "Music is the universal language of mankind.",
            "author": "헨리 워즈워스 롱펠로 (Henry Wadsworth Longfellow)"
        }
    ],
    "자유": [
        {
            "ko": "자유가 아니면 죽음을 달라.",
            "en": "Give me liberty, or give me death!",
            "author": "패트릭 헨리 (Patrick Henry)"
        },
        {
            "ko": "평화를 원하면 평화를 준비하라.",
            "en": "If you want peace, work for justice.",
            "author": "교황 바오로 6세 (Pope Paul VI)"
        },
        {
            "ko": "옳은 일은 언제나 옳다.",
            "en": "Do what is right, not what is easy nor what is popular.",
            "author": "로이 T. 베넷 (Roy T. Bennett)"
        },
        {
            "ko": "정의는 사회를 묶는 끈이다.",
            "en": "Justice is truth in action.",
            "author": "벤자민 디즈레일리 (Benjamin Disraeli)"
        },
        {
            "ko": "자유는 스스로 생각할 권리다.",
            "en": "Liberty is the right to choose.",
            "author": "존 러스킨 (John Ruskin)"
        },
        {
            "ko": "평화는 매일 선택하는 용기다.",
            "en": "Peace cannot be kept by force; it can only be achieved by understanding.",
            "author": "알베르트 아인슈타인 (Albert Einstein)"
        },
        {
            "ko": "평화는 미소에서 시작된다.",
            "en": "Peace begins with a smile.",
            "author": "마더 테레사 (Mother Teresa)"
        },
        {
            "ko": "눈에는 눈이면 세상은 모두 눈먼다.",
            "en": "An eye for an eye makes the whole world blind.",
            "author": "마하트마 간디 (Mahatma Gandhi)"
        },
        {
            "ko": "한 곳의 불의는 모든 곳의 정의에 대한 위협이다.",
            "en": "Injustice anywhere is a threat to justice everywhere.",
            "author": "마틴 루터 킹 Jr. (Martin Luther King Jr.)"
        }
    ],
    "겸손": [
        {
            "ko": "배움에는 끝이 없다.",
            "en": "Live as if you were to die tomorrow. Learn as if you were to live forever.",
            "author": "마하트마 간디 (Mahatma Gandhi)"
        },
        {
            "ko": "침묵할 때 더 많은 것을 배운다.",
            "en": "Silence is a source of great strength.",
            "author": "노자 (Lao Tzu)"
        },
        {
            "ko": "지혜로운 자는 기회를 만든다.",
            "en": "A wise man will make more opportunities than he finds.",
            "author": "프랜시스 베이컨 (Francis Bacon)"
        },
        {
            "ko": "생각이 곧 운명을 만든다.",
            "en": "The mind is everything. What you think you become.",
            "author": "부처 (Buddha)"
        },
        {
            "ko": "진실은 단순하다.",
            "en": "The truth is rarely pure and never simple.",
            "author": "오스카 와일드 (Oscar Wilde)"
        },
        {
            "ko": "너 자신을 알라.",
            "en": "Know thyself.",
            "author": "소크라테스 (Socrates)"
        },
        {
            "ko": "아는 것이 힘이다.",
            "en": "Knowledge is power.",
            "author": "프랜시스 베이컨 (Francis Bacon)"
        },
        {
            "ko": "말하기보다 듣는 데 두 배의 귀를 써라.",
            "en": "We have two ears and one mouth so that we can listen twice as much as we speak.",
            "author": "에픽테토스 (Epictetus)"
        },
        {
            "ko": "지혜의 시작은 경이로움이다.",
            "en": "Wisdom begins in wonder.",
            "author": "소크라테스 (Socrates)"
        }
    ],
    "돈": [
        {
            "ko": "일의 품질이 곧 신뢰다.",
            "en": "Quality means doing it right when no one is looking.",
            "author": "헨리 포드 (Henry Ford)"
        },
        {
            "ko": "부자는 기회를 사고, 가난은 핑계를 산다.",
            "en": "Formal education will make you a living; self-education will make you a fortune.",
            "author": "짐 론 (Jim Rohn)"
        },
        {
            "ko": "돈의 목적은 자유다.",
            "en": "Money won't create success, the freedom to make it will.",
            "author": "넬슨 만델라 (Nelson Mandela)"
        },
        {
            "ko": "잘 버는 것만큼 잘 쓰는 것도 지혜다.",
            "en": "Beware of little expenses; a small leak will sink a great ship.",
            "author": "벤자민 프랭클린 (Benjamin Franklin)"
        },
        {
            "ko": "돈은 훌륭한 하인이지만 형편없는 주인이다.",
            "en": "Money is a good servant but a bad master.",
            "author": "프랜시스 베이컨 (Francis Bacon)"
        },
        {
            "ko": "가격은 지불하는 것이고 가치는 얻는 것이다.",
            "en": "Price is what you pay. Value is what you get.",
            "author": "워런 버핏 (Warren Buffett)"
        },
        {
            "ko": "수입보다 적게 쓰는 습관이 부를 만든다.",
            "en": "Do not save what is left after spending, but spend what is left after saving.",
            "author": "워런 버핏 (Warren Buffett)"
        },
        {
            "ko": "지식을 위한 투자가 최고의 이자를 남긴다.",
            "en": "An investment in knowledge pays the best interest.",
            "author": "벤자민 프랭클린 (Benjamin Franklin)"
        },
        {
            "ko": "부는 돈이 아니라 시간과 선택의 자유다.",
            "en": "Wealth is the ability to fully experience life.",
            "author": "헨리 데이비드 소로 (Henry David Thoreau)"
        }
    ],
    "여행": [
        {
            "ko": "떠날 용기가 있어야 바다가 열린다.",
            "en": "You can never cross the ocean until you have the courage to lose sight of the shore.",
            "author": "크리스토퍼 콜럼버스 (Christopher Columbus)"
        },
        {
            "ko": "길은 걸어가는 사람이 만든다.",
            "en": "Traveler, there is no path. The path is made by walking.",
            "author": "안토니오 마차도 (Antonio Machado)"
        },
        {
            "ko": "자연은 최고의 치유자다.",
            "en": "Look deep into nature, and then you will understand everything better.",
            "author": "알베르트 아인슈타인 (Albert Einstein)"
        },
        {
            "ko": "여행은 편견의 치명적인 적이다.",
            "en": "Travel is fatal to prejudice, bigotry, and narrow-mindedness.",
            "author": "마크 트웨인 (Mark Twain)"
        },
        {
            "ko": "세상은 한 권의 책이다. 여행하지 않으면 한 페이지만 읽는다.",
            "en": "The world is a book and those who do not travel read only one page.",
            "author": "성 아우구스티누스 (Saint Augustine)"
        },
        {
            "ko": "진정한 발견은 새로운 풍경이 아니라 새로운 눈이다.",
            "en": "The real voyage of discovery consists not in seeking new landscapes, but in having new eyes.",
            "author": "마르셀 프루스트 (Marcel Proust)"
        },
        {
            "ko": "자연은 서두르지 않지만 모든 것을 이룬다.",
            "en": "Nature does not hurry, yet everything is accomplished.",
            "author": "노자 (Lao Tzu)"
        },
        {
            "ko": "산은 우리를 부르는 것이 아니라 가르친다.",
            "en": "In every walk with nature one receives far more than he seeks.",
            "author": "존 뮤어 (John Muir)"
        },
        {
            "ko": "봄은 지구가 꽃으로 웃는 계절이다.",
            "en": "Spring is nature's way of saying, Let's party.",
            "author": "로빈 윌리엄스 (Robin Williams)"
        }
    ],
    "건강": [
        {
            "ko": "운동은 몸을 바꾸고 습관은 인생을 바꾼다.",
            "en": "Exercise should be regarded as tribute to the heart.",
            "author": "진 터니 (Gene Tunney)"
        },
        {
            "ko": "승리는 준비된 사람에게 온다.",
            "en": "Success is where preparation and opportunity meet.",
            "author": "보비 언서 (Bobby Unser)"
        },
        {
            "ko": "건강이 최고의 재산이다.",
            "en": "Health is the greatest wealth.",
            "author": "버질 (Virgil)"
        },
        {
            "ko": "음식이 약이 되게 하라.",
            "en": "Let food be thy medicine and medicine be thy food.",
            "author": "히포크라테스 (Hippocrates)"
        },
        {
            "ko": "걷기는 최고의 약이다.",
            "en": "Walking is man's best medicine.",
            "author": "히포크라테스 (Hippocrates)"
        },
        {
            "ko": "강한 몸에 강한 정신이 깃든다.",
            "en": "A sound mind in a sound body.",
            "author": "유베날리스 (Juvenal)"
        },
        {
            "ko": "불가능은 사실이 아니라 의견이다.",
            "en": "Impossible is nothing.",
            "author": "무하마드 알리 (Muhammad Ali)"
        },
        {
            "ko": "나는 9000번 넘게 슛을 놓쳤다. 그래서 성공했다.",
            "en": "I've missed more than 9000 shots in my career... and that is why I succeed.",
            "author": "마이클 조던 (Michael Jordan)"
        },
        {
            "ko": "챔피언은 체육관이 아니라 마음에서 만들어진다.",
            "en": "Champions aren't made in gyms. Champions are made from something deep inside.",
            "author": "무하마드 알리 (Muhammad Ali)"
        }
    ],
    "가족": [
        {
            "ko": "관계의 핵심은 진실함이다.",
            "en": "Honesty is the first chapter in the book of wisdom.",
            "author": "토머스 제퍼슨 (Thomas Jefferson)"
        },
        {
            "ko": "가정은 자연이 만든 걸작이다.",
            "en": "The family is one of nature's masterpieces.",
            "author": "조지 산타야나 (George Santayana)"
        },
        {
            "ko": "가정은 마음이 머무는 곳이다.",
            "en": "Home is where the heart is.",
            "author": "플리니우스 (Pliny the Elder)"
        },
        {
            "ko": "진정한 친구는 세상이 떠날 때 곁에 남는다.",
            "en": "A real friend is one who walks in when the rest of the world walks out.",
            "author": "월터 윈첼 (Walter Winchell)"
        },
        {
            "ko": "우정은 두 몸에 깃든 하나의 영혼이다.",
            "en": "Friendship is a single soul dwelling in two bodies.",
            "author": "아리스토텔레스 (Aristotle)"
        },
        {
            "ko": "존중은 관계의 기본 통화다.",
            "en": "Respect for ourselves guides our morals; respect for others guides our manners.",
            "author": "로렌스 스턴 (Laurence Sterne)"
        },
        {
            "ko": "먼저 이해하고 그다음 이해시켜라.",
            "en": "Seek first to understand, then to be understood.",
            "author": "스티븐 코비 (Stephen Covey)"
        },
        {
            "ko": "말은 짧게, 사랑은 길게.",
            "en": "Let us always meet each other with smile, for the smile is the beginning of love.",
            "author": "마더 테레사 (Mother Teresa)"
        },
        {
            "ko": "신뢰는 방울방울 쌓이고 한순간에 무너진다.",
            "en": "Trust takes years to build, seconds to break, and forever to repair.",
            "author": "작자 미상 (Unknown)"
        }
    ],
    "독서": [
        {
            "ko": "배움은 보물이며 어디서나 주인을 따른다.",
            "en": "Learning is a treasure that will follow its owner everywhere.",
            "author": "중국 속담 (Chinese Proverb)"
        },
        {
            "ko": "배움의 뿌리는 쓰고 열매는 달다.",
            "en": "The roots of education are bitter, but the fruit is sweet.",
            "author": "아리스토텔레스 (Aristotle)"
        },
        {
            "ko": "읽지 않는 사람은 읽을 수 없는 사람보다 낫지 않다.",
            "en": "The man who does not read has no advantage over the man who cannot read.",
            "author": "마크 트웨인 (Mark Twain)"
        },
        {
            "ko": "책 없는 방은 영혼 없는 육체와 같다.",
            "en": "A room without books is like a body without a soul.",
            "author": "키케로 (Cicero)"
        },
        {
            "ko": "오늘의 나를 만든 것은 도서관이다.",
            "en": "I have always imagined that Paradise will be a kind of library.",
            "author": "호르헤 루이스 보르헤스 (Jorge Luis Borges)"
        },
        {
            "ko": "교육은 세상을 바꾸는 가장 강력한 무기다.",
            "en": "Education is the most powerful weapon which you can use to change the world.",
            "author": "넬슨 만델라 (Nelson Mandela)"
        },
        {
            "ko": "가르침은 두 번 배우는 일이다.",
            "en": "To teach is to learn twice.",
            "author": "조제프 주베르 (Joseph Joubert)"
        },
        {
            "ko": "호기심은 배움의 불씨다.",
            "en": "I have no special talents. I am only passionately curious.",
            "author": "알베르트 아인슈타인 (Albert Einstein)"
        },
        {
            "ko": "과학은 조직된 지식이다.",
            "en": "Science is organized knowledge.",
            "author": "허버트 스펜서 (Herbert Spencer)"
        }
    ],
    "자연": [
        {
            "ko": "세상은 한 권의 책이다. 여행하지 않으면 한 페이지만 읽는다.",
            "en": "The world is a book and those who do not travel read only one page.",
            "author": "성 아우구스티누스 (Saint Augustine)"
        },
        {
            "ko": "진정한 발견은 새로운 풍경이 아니라 새로운 눈이다.",
            "en": "The real voyage of discovery consists not in seeking new landscapes, but in having new eyes.",
            "author": "마르셀 프루스트 (Marcel Proust)"
        },
        {
            "ko": "자연은 서두르지 않지만 모든 것을 이룬다.",
            "en": "Nature does not hurry, yet everything is accomplished.",
            "author": "노자 (Lao Tzu)"
        },
        {
            "ko": "산은 우리를 부르는 것이 아니라 가르친다.",
            "en": "In every walk with nature one receives far more than he seeks.",
            "author": "존 뮤어 (John Muir)"
        },
        {
            "ko": "봄은 지구가 꽃으로 웃는 계절이다.",
            "en": "Spring is nature's way of saying, Let's party.",
            "author": "로빈 윌리엄스 (Robin Williams)"
        },
        {
            "ko": "여름은 단순히 쉬는 계절이 아니라 살아 있음을 느끼는 계절이다.",
            "en": "Summertime is always the best of what might be.",
            "author": "찰스 보든 (Charles Bowden)"
        },
        {
            "ko": "가을은 두 번째 봄이다. 모든 잎이 꽃이다.",
            "en": "Autumn is a second spring when every leaf is a flower.",
            "author": "알베르 카뮈 (Albert Camus)"
        },
        {
            "ko": "한겨울 속에서 나는 내 안의 꺼지지 않는 여름을 발견했다.",
            "en": "In the midst of winter, I found there was, within me, an invincible summer.",
            "author": "알베르 카뮈 (Albert Camus)"
        },
        {
            "ko": "떠날 용기가 있어야 바다가 열린다.",
            "en": "You can never cross the ocean until you have the courage to lose sight of the shore.",
            "author": "크리스토퍼 콜럼버스 (Christopher Columbus)"
        }
    ],
    "교육": [
        {
            "ko": "읽지 않는 사람은 읽을 수 없는 사람보다 낫지 않다.",
            "en": "The man who does not read has no advantage over the man who cannot read.",
            "author": "마크 트웨인 (Mark Twain)"
        },
        {
            "ko": "책 없는 방은 영혼 없는 육체와 같다.",
            "en": "A room without books is like a body without a soul.",
            "author": "키케로 (Cicero)"
        },
        {
            "ko": "오늘의 나를 만든 것은 도서관이다.",
            "en": "I have always imagined that Paradise will be a kind of library.",
            "author": "호르헤 루이스 보르헤스 (Jorge Luis Borges)"
        },
        {
            "ko": "교육은 세상을 바꾸는 가장 강력한 무기다.",
            "en": "Education is the most powerful weapon which you can use to change the world.",
            "author": "넬슨 만델라 (Nelson Mandela)"
        },
        {
            "ko": "가르침은 두 번 배우는 일이다.",
            "en": "To teach is to learn twice.",
            "author": "조제프 주베르 (Joseph Joubert)"
        },
        {
            "ko": "호기심은 배움의 불씨다.",
            "en": "I have no special talents. I am only passionately curious.",
            "author": "알베르트 아인슈타인 (Albert Einstein)"
        },
        {
            "ko": "과학은 조직된 지식이다.",
            "en": "Science is organized knowledge.",
            "author": "허버트 스펜서 (Herbert Spencer)"
        },
        {
            "ko": "상상력은 지식보다 중요하다.",
            "en": "Imagination is more important than knowledge.",
            "author": "알베르트 아인슈타인 (Albert Einstein)"
        },
        {
            "ko": "실패는 배움의 수업료다.",
            "en": "Anyone who has never made a mistake has never tried anything new.",
            "author": "알베르트 아인슈타인 (Albert Einstein)"
        }
    ],
    "일": [
        {
            "ko": "지식을 위한 투자가 최고의 이자를 남긴다.",
            "en": "An investment in knowledge pays the best interest.",
            "author": "벤자민 프랭클린 (Benjamin Franklin)"
        },
        {
            "ko": "부는 돈이 아니라 시간과 선택의 자유다.",
            "en": "Wealth is the ability to fully experience life.",
            "author": "헨리 데이비드 소로 (Henry David Thoreau)"
        },
        {
            "ko": "좋아하는 일을 하라. 그러면 일은 기쁨이 된다.",
            "en": "The only way to do great work is to love what you do.",
            "author": "스티브 잡스 (Steve Jobs)"
        },
        {
            "ko": "직업은 생계를, 소명은 삶을 만든다.",
            "en": "Pleasure in the job puts perfection in the work.",
            "author": "아리스토텔레스 (Aristotle)"
        },
        {
            "ko": "돈을 위해 시간 팔지 말고, 가치를 만들어라.",
            "en": "Never depend on single income. Make investment to create a second source.",
            "author": "워런 버핏 (Warren Buffett)"
        },
        {
            "ko": "일의 품질이 곧 신뢰다.",
            "en": "Quality means doing it right when no one is looking.",
            "author": "헨리 포드 (Henry Ford)"
        },
        {
            "ko": "부자는 기회를 사고, 가난은 핑계를 산다.",
            "en": "Formal education will make you a living; self-education will make you a fortune.",
            "author": "짐 론 (Jim Rohn)"
        },
        {
            "ko": "돈의 목적은 자유다.",
            "en": "Money won't create success, the freedom to make it will.",
            "author": "넬슨 만델라 (Nelson Mandela)"
        },
        {
            "ko": "잘 버는 것만큼 잘 쓰는 것도 지혜다.",
            "en": "Beware of little expenses; a small leak will sink a great ship.",
            "author": "벤자민 프랭클린 (Benjamin Franklin)"
        }
    ],
    "음악": [
        {
            "ko": "창의성은 지능이 즐기는 놀이다.",
            "en": "Creativity is intelligence having fun.",
            "author": "알베르트 아인슈타인 (Albert Einstein)"
        },
        {
            "ko": "상상력은 현실을 넘는 힘이다.",
            "en": "Logic will get you from A to B. Imagination will take you everywhere.",
            "author": "알베르트 아인슈타인 (Albert Einstein)"
        },
        {
            "ko": "예술은 우리가 진실을 깨닫게 하는 거짓말이다.",
            "en": "Art is the lie that enables us to realize the truth.",
            "author": "파블로 피카소 (Pablo Picasso)"
        },
        {
            "ko": "예술은 일상에서 영혼의 먼지를 씻어낸다.",
            "en": "Art washes away from the soul the dust of everyday life.",
            "author": "파블로 피카소 (Pablo Picasso)"
        },
        {
            "ko": "노래는 말하지 못한 마음의 언어다.",
            "en": "Where words fail, music speaks.",
            "author": "한스 크리스티안 안데르센 (Hans Christian Andersen)"
        },
        {
            "ko": "음악은 감정의 지름길이다.",
            "en": "Music gives a soul to the universe, wings to the mind, flight to the imagination.",
            "author": "플라톤 (Plato)"
        },
        {
            "ko": "창조는 용기에서 시작된다.",
            "en": "Creativity takes courage.",
            "author": "앙리 마티스 (Henri Matisse)"
        },
        {
            "ko": "예술은 자유를 숨 쉬게 한다.",
            "en": "The purpose of art is washing the dust of daily life off our souls.",
            "author": "파블로 피카소 (Pablo Picasso)"
        },
        {
            "ko": "음악 없는 삶은 실수다.",
            "en": "Without music, life would be a mistake.",
            "author": "프리드리히 니체 (Friedrich Nietzsche)"
        }
    ],
    "예술": [
        {
            "ko": "상상력은 현실을 넘는 힘이다.",
            "en": "Logic will get you from A to B. Imagination will take you everywhere.",
            "author": "알베르트 아인슈타인 (Albert Einstein)"
        },
        {
            "ko": "예술은 우리가 진실을 깨닫게 하는 거짓말이다.",
            "en": "Art is the lie that enables us to realize the truth.",
            "author": "파블로 피카소 (Pablo Picasso)"
        },
        {
            "ko": "예술은 일상에서 영혼의 먼지를 씻어낸다.",
            "en": "Art washes away from the soul the dust of everyday life.",
            "author": "파블로 피카소 (Pablo Picasso)"
        },
        {
            "ko": "노래는 말하지 못한 마음의 언어다.",
            "en": "Where words fail, music speaks.",
            "author": "한스 크리스티안 안데르센 (Hans Christian Andersen)"
        },
        {
            "ko": "음악은 감정의 지름길이다.",
            "en": "Music gives a soul to the universe, wings to the mind, flight to the imagination.",
            "author": "플라톤 (Plato)"
        },
        {
            "ko": "창조는 용기에서 시작된다.",
            "en": "Creativity takes courage.",
            "author": "앙리 마티스 (Henri Matisse)"
        },
        {
            "ko": "예술은 자유를 숨 쉬게 한다.",
            "en": "The purpose of art is washing the dust of daily life off our souls.",
            "author": "파블로 피카소 (Pablo Picasso)"
        },
        {
            "ko": "음악 없는 삶은 실수다.",
            "en": "Without music, life would be a mistake.",
            "author": "프리드리히 니체 (Friedrich Nietzsche)"
        },
        {
            "ko": "음악은 영혼을 움직이는 보편어다.",
            "en": "Music is the universal language of mankind.",
            "author": "헨리 워즈워스 롱펠로 (Henry Wadsworth Longfellow)"
        }
    ],
    "평화": [
        {
            "ko": "자유가 아니면 죽음을 달라.",
            "en": "Give me liberty, or give me death!",
            "author": "패트릭 헨리 (Patrick Henry)"
        },
        {
            "ko": "평화를 원하면 평화를 준비하라.",
            "en": "If you want peace, work for justice.",
            "author": "교황 바오로 6세 (Pope Paul VI)"
        },
        {
            "ko": "옳은 일은 언제나 옳다.",
            "en": "Do what is right, not what is easy nor what is popular.",
            "author": "로이 T. 베넷 (Roy T. Bennett)"
        },
        {
            "ko": "정의는 사회를 묶는 끈이다.",
            "en": "Justice is truth in action.",
            "author": "벤자민 디즈레일리 (Benjamin Disraeli)"
        },
        {
            "ko": "자유는 스스로 생각할 권리다.",
            "en": "Liberty is the right to choose.",
            "author": "존 러스킨 (John Ruskin)"
        },
        {
            "ko": "평화는 매일 선택하는 용기다.",
            "en": "Peace cannot be kept by force; it can only be achieved by understanding.",
            "author": "알베르트 아인슈타인 (Albert Einstein)"
        },
        {
            "ko": "평화는 미소에서 시작된다.",
            "en": "Peace begins with a smile.",
            "author": "마더 테레사 (Mother Teresa)"
        },
        {
            "ko": "눈에는 눈이면 세상은 모두 눈먼다.",
            "en": "An eye for an eye makes the whole world blind.",
            "author": "마하트마 간디 (Mahatma Gandhi)"
        },
        {
            "ko": "한 곳의 불의는 모든 곳의 정의에 대한 위협이다.",
            "en": "Injustice anywhere is a threat to justice everywhere.",
            "author": "마틴 루터 킹 Jr. (Martin Luther King Jr.)"
        }
    ],
    "정의": [
        {
            "ko": "평화를 원하면 평화를 준비하라.",
            "en": "If you want peace, work for justice.",
            "author": "교황 바오로 6세 (Pope Paul VI)"
        },
        {
            "ko": "옳은 일은 언제나 옳다.",
            "en": "Do what is right, not what is easy nor what is popular.",
            "author": "로이 T. 베넷 (Roy T. Bennett)"
        },
        {
            "ko": "정의는 사회를 묶는 끈이다.",
            "en": "Justice is truth in action.",
            "author": "벤자민 디즈레일리 (Benjamin Disraeli)"
        },
        {
            "ko": "자유는 스스로 생각할 권리다.",
            "en": "Liberty is the right to choose.",
            "author": "존 러스킨 (John Ruskin)"
        },
        {
            "ko": "평화는 매일 선택하는 용기다.",
            "en": "Peace cannot be kept by force; it can only be achieved by understanding.",
            "author": "알베르트 아인슈타인 (Albert Einstein)"
        },
        {
            "ko": "평화는 미소에서 시작된다.",
            "en": "Peace begins with a smile.",
            "author": "마더 테레사 (Mother Teresa)"
        },
        {
            "ko": "눈에는 눈이면 세상은 모두 눈먼다.",
            "en": "An eye for an eye makes the whole world blind.",
            "author": "마하트마 간디 (Mahatma Gandhi)"
        },
        {
            "ko": "한 곳의 불의는 모든 곳의 정의에 대한 위협이다.",
            "en": "Injustice anywhere is a threat to justice everywhere.",
            "author": "마틴 루터 킹 Jr. (Martin Luther King Jr.)"
        },
        {
            "ko": "정의가 지연되면 정의가 부정된다.",
            "en": "Justice delayed is justice denied.",
            "author": "윌리엄 E. 글래드스턴 (William E. Gladstone)"
        }
    ],
    "운동": [
        {
            "ko": "재능은 경기를 이기고 팀워크는 우승을 만든다.",
            "en": "Talent wins games, but teamwork wins championships.",
            "author": "마이클 조던 (Michael Jordan)"
        },
        {
            "ko": "규칙적으로 움직이는 몸이 오래 간다.",
            "en": "Take care of your body. It's the only place you have to live.",
            "author": "짐 론 (Jim Rohn)"
        },
        {
            "ko": "운동은 몸을 바꾸고 습관은 인생을 바꾼다.",
            "en": "Exercise should be regarded as tribute to the heart.",
            "author": "진 터니 (Gene Tunney)"
        },
        {
            "ko": "승리는 준비된 사람에게 온다.",
            "en": "Success is where preparation and opportunity meet.",
            "author": "보비 언서 (Bobby Unser)"
        },
        {
            "ko": "건강이 최고의 재산이다.",
            "en": "Health is the greatest wealth.",
            "author": "버질 (Virgil)"
        },
        {
            "ko": "음식이 약이 되게 하라.",
            "en": "Let food be thy medicine and medicine be thy food.",
            "author": "히포크라테스 (Hippocrates)"
        },
        {
            "ko": "걷기는 최고의 약이다.",
            "en": "Walking is man's best medicine.",
            "author": "히포크라테스 (Hippocrates)"
        },
        {
            "ko": "강한 몸에 강한 정신이 깃든다.",
            "en": "A sound mind in a sound body.",
            "author": "유베날리스 (Juvenal)"
        },
        {
            "ko": "불가능은 사실이 아니라 의견이다.",
            "en": "Impossible is nothing.",
            "author": "무하마드 알리 (Muhammad Ali)"
        }
    ],
    "실패": [
        {
            "ko": "고난은 오래가지 않지만 강한 사람은 남는다.",
            "en": "Tough times never last, but tough people do.",
            "author": "로버트 슐러 (Robert H. Schuller)"
        },
        {
            "ko": "넘어짐은 끝이 아니라 훈련이다.",
            "en": "Success is stumbling from failure to failure with no loss of enthusiasm.",
            "author": "윈스턴 처칠 (Winston Churchill)"
        },
        {
            "ko": "다시 시도하는 순간 실패는 정보가 된다.",
            "en": "I can accept failure, everyone fails at something. But I can't accept not trying.",
            "author": "마이클 조던 (Michael Jordan)"
        },
        {
            "ko": "실패는 성공의 어머니다.",
            "en": "Failure is the mother of success.",
            "author": "한국 속담 (Korean Proverb)"
        },
        {
            "ko": "나는 실패한 것이 아니라 작동하지 않는 방법을 찾았다.",
            "en": "I have not failed. I've just found 10,000 ways that won't work.",
            "author": "토머스 에디슨 (Thomas Edison)"
        },
        {
            "ko": "일곱 번 넘어져도 여덟 번 일어서라.",
            "en": "Fall seven times, stand up eight.",
            "author": "일본 속담 (Japanese Proverb)"
        },
        {
            "ko": "넘어진 곳에서 다시 일어나는 것이 영광이다.",
            "en": "Our greatest glory is not in never falling, but in rising every time we fall.",
            "author": "공자 (Confucius)"
        },
        {
            "ko": "실패는 선택이 아니라 포기가 선택이다.",
            "en": "Failure is simply the opportunity to begin again, this time more intelligently.",
            "author": "헨리 포드 (Henry Ford)"
        },
        {
            "ko": "상처는 빛이 들어오는 틈이다.",
            "en": "The wound is the place where the Light enters you.",
            "author": "루미 (Rumi)"
        }
    ],
    "관계": [
        {
            "ko": "가까운 사람에게 더 따뜻하라.",
            "en": "Charity begins at home.",
            "author": "영국 속담 (English Proverb)"
        },
        {
            "ko": "관계의 핵심은 진실함이다.",
            "en": "Honesty is the first chapter in the book of wisdom.",
            "author": "토머스 제퍼슨 (Thomas Jefferson)"
        },
        {
            "ko": "가정은 자연이 만든 걸작이다.",
            "en": "The family is one of nature's masterpieces.",
            "author": "조지 산타야나 (George Santayana)"
        },
        {
            "ko": "가정은 마음이 머무는 곳이다.",
            "en": "Home is where the heart is.",
            "author": "플리니우스 (Pliny the Elder)"
        },
        {
            "ko": "진정한 친구는 세상이 떠날 때 곁에 남는다.",
            "en": "A real friend is one who walks in when the rest of the world walks out.",
            "author": "월터 윈첼 (Walter Winchell)"
        },
        {
            "ko": "우정은 두 몸에 깃든 하나의 영혼이다.",
            "en": "Friendship is a single soul dwelling in two bodies.",
            "author": "아리스토텔레스 (Aristotle)"
        },
        {
            "ko": "존중은 관계의 기본 통화다.",
            "en": "Respect for ourselves guides our morals; respect for others guides our manners.",
            "author": "로렌스 스턴 (Laurence Sterne)"
        },
        {
            "ko": "먼저 이해하고 그다음 이해시켜라.",
            "en": "Seek first to understand, then to be understood.",
            "author": "스티븐 코비 (Stephen Covey)"
        },
        {
            "ko": "말은 짧게, 사랑은 길게.",
            "en": "Let us always meet each other with smile, for the smile is the beginning of love.",
            "author": "마더 테레사 (Mother Teresa)"
        }
    ],
    "미래": [
        {
            "ko": "꿈은 행동할 때 현실이 된다.",
            "en": "Dreams don't work unless you do.",
            "author": "존 C. 맥스웰 (John C. Maxwell)"
        },
        {
            "ko": "변화만이 유일한 상수다.",
            "en": "The only constant in life is change.",
            "author": "헤라클레이토스 (Heraclitus)"
        },
        {
            "ko": "세상을 바꾸려면 먼저 자신을 바꿔라.",
            "en": "Be the change that you wish to see in the world.",
            "author": "마하트마 간디 (Mahatma Gandhi)"
        },
        {
            "ko": "바람을 막을 수 없다면 돛을 조정하라.",
            "en": "When we are no longer able to change a situation, we are challenged to change ourselves.",
            "author": "빅터 프랭클 (Viktor Frankl)"
        },
        {
            "ko": "성장은 늘 불편함에서 시작된다.",
            "en": "Change is hard at first, messy in the middle and gorgeous at the end.",
            "author": "로빈 샤르마 (Robin Sharma)"
        },
        {
            "ko": "어제와 같은 오늘로 다른 내일을 기대할 수 없다.",
            "en": "Insanity is doing the same thing over and over and expecting different results.",
            "author": "알베르트 아인슈타인 (Albert Einstein)"
        },
        {
            "ko": "작은 변화가 큰 결과를 만든다.",
            "en": "Small shifts in your thinking, and small changes in your energy can lead to massive alterations of your end result.",
            "author": "케빈 미셸 (Kevin Michel)"
        },
        {
            "ko": "위기는 곧 전환점이다.",
            "en": "In a gentle way, you can shake the world.",
            "author": "마하트마 간디 (Mahatma Gandhi)"
        },
        {
            "ko": "새로운 길은 걸어야 생긴다.",
            "en": "If you don't like the road you're walking, start paving another one.",
            "author": "돌리 파튼 (Dolly Parton)"
        }
    ],
    "열정": [
        {
            "ko": "미래는 꿈의 아름다움을 믿는 사람의 것이다.",
            "en": "The future belongs to those who believe in the beauty of their dreams.",
            "author": "엘리너 루즈벨트 (Eleanor Roosevelt)"
        },
        {
            "ko": "꿈꿀 수 있다면 이룰 수 있다.",
            "en": "If you can dream it, you can do it.",
            "author": "월트 디즈니 (Walt Disney)"
        },
        {
            "ko": "큰 꿈은 사람의 마음을 움직인다.",
            "en": "Dream no small dreams for they have no power to move the hearts of men.",
            "author": "요한 볼프강 폰 괴테 (Johann Wolfgang von Goethe)"
        },
        {
            "ko": "꿈은 방향을 만든다.",
            "en": "Hold fast to dreams, for if dreams die, life is a broken-winged bird that cannot fly.",
            "author": "랭스턴 휴즈 (Langston Hughes)"
        },
        {
            "ko": "비전 없이는 방황한다.",
            "en": "Where there is no vision, the people perish.",
            "author": "성경 잠언 (Bible Proverbs)"
        },
        {
            "ko": "꿈은 이루는 사람의 것이다.",
            "en": "All our dreams can come true, if we have the courage to pursue them.",
            "author": "월트 디즈니 (Walt Disney)"
        },
        {
            "ko": "꿈은 잠잘 때가 아니라 깨어 있을 때 꾸는 것이다.",
            "en": "Dream is not that which you see while sleeping, it is something that does not let you sleep.",
            "author": "A.P.J. 압둘 칼람 (A.P.J. Abdul Kalam)"
        },
        {
            "ko": "꿈은 현실을 앞서 그린 지도다.",
            "en": "A goal is a dream with a deadline.",
            "author": "나폴레옹 힐 (Napoleon Hill)"
        },
        {
            "ko": "상상력은 미래를 미리 체험하게 한다.",
            "en": "Imagination is everything. It is the preview of life's coming attractions.",
            "author": "알베르트 아인슈타인 (Albert Einstein)"
        }
    ],
    "배움": [
        {
            "ko": "배움의 뿌리는 쓰고 열매는 달다.",
            "en": "The roots of education are bitter, but the fruit is sweet.",
            "author": "아리스토텔레스 (Aristotle)"
        },
        {
            "ko": "읽지 않는 사람은 읽을 수 없는 사람보다 낫지 않다.",
            "en": "The man who does not read has no advantage over the man who cannot read.",
            "author": "마크 트웨인 (Mark Twain)"
        },
        {
            "ko": "책 없는 방은 영혼 없는 육체와 같다.",
            "en": "A room without books is like a body without a soul.",
            "author": "키케로 (Cicero)"
        },
        {
            "ko": "오늘의 나를 만든 것은 도서관이다.",
            "en": "I have always imagined that Paradise will be a kind of library.",
            "author": "호르헤 루이스 보르헤스 (Jorge Luis Borges)"
        },
        {
            "ko": "교육은 세상을 바꾸는 가장 강력한 무기다.",
            "en": "Education is the most powerful weapon which you can use to change the world.",
            "author": "넬슨 만델라 (Nelson Mandela)"
        },
        {
            "ko": "가르침은 두 번 배우는 일이다.",
            "en": "To teach is to learn twice.",
            "author": "조제프 주베르 (Joseph Joubert)"
        },
        {
            "ko": "호기심은 배움의 불씨다.",
            "en": "I have no special talents. I am only passionately curious.",
            "author": "알베르트 아인슈타인 (Albert Einstein)"
        },
        {
            "ko": "과학은 조직된 지식이다.",
            "en": "Science is organized knowledge.",
            "author": "허버트 스펜서 (Herbert Spencer)"
        },
        {
            "ko": "상상력은 지식보다 중요하다.",
            "en": "Imagination is more important than knowledge.",
            "author": "알베르트 아인슈타인 (Albert Einstein)"
        }
    ],
    "고독": [
        {
            "ko": "마음이 고요하면 세상이 맑다.",
            "en": "Peace comes from within. Do not seek it without.",
            "author": "부처 (Buddha)"
        },
        {
            "ko": "명상은 도피가 아니라 귀환이다.",
            "en": "Meditation is not evasion; it is a serene encounter with reality.",
            "author": "틱낫한 (Thich Nhat Hanh)"
        },
        {
            "ko": "용서는 과거를 바꾸지 못하지만 미래를 바꾼다.",
            "en": "Forgiveness does not change the past, but it does enlarge the future.",
            "author": "폴 부스 (Paul Boese)"
        },
        {
            "ko": "분노를 붙잡는 것은 독을 마시고 남이 죽길 바라는 것과 같다.",
            "en": "Holding on to anger is like drinking poison and expecting the other person to die.",
            "author": "부처 (Buddha)"
        },
        {
            "ko": "자비는 항상 가능하다.",
            "en": "Love and compassion are necessities, not luxuries.",
            "author": "달라이 라마 (Dalai Lama)"
        },
        {
            "ko": "용서는 강한 사람의 선택이다.",
            "en": "The weak can never forgive. Forgiveness is the attribute of the strong.",
            "author": "마하트마 간디 (Mahatma Gandhi)"
        },
        {
            "ko": "쉼은 게으름이 아니라 회복이다.",
            "en": "Almost everything will work again if you unplug it for a few minutes.",
            "author": "앤 라모트 (Anne Lamott)"
        },
        {
            "ko": "깨어 있음이 자유다.",
            "en": "Mindfulness is the aware, balanced acceptance of the present experience.",
            "author": "실비아 보어스타인 (Sylvia Boorstein)"
        },
        {
            "ko": "명상은 마음의 헬스장이다.",
            "en": "Meditation is to the mind what exercise is to the body.",
            "author": "조셉 골드스타인 (Joseph Goldstein)"
        }
    ],
    "웃음": [
        {
            "ko": "감사하는 마음은 행복의 지름길이다.",
            "en": "Acknowledging the good that you already have in your life is the foundation for all abundance.",
            "author": "에크하르트 톨레 (Eckhart Tolle)"
        },
        {
            "ko": "행복은 목적지가 아니라 여행 방식이다.",
            "en": "Happiness is a direction, not a place.",
            "author": "시드니 J. 해리스 (Sydney J. Harris)"
        },
        {
            "ko": "네가 웃으면 세상도 너와 함께 웃는다.",
            "en": "If you want to be happy, be.",
            "author": "레오 톨스토이 (Leo Tolstoy)"
        },
        {
            "ko": "기쁨은 나누면 배가 된다.",
            "en": "Shared joy is a double joy.",
            "author": "스웨덴 속담 (Swedish Proverb)"
        },
        {
            "ko": "행복은 단순함에서 온다.",
            "en": "Simplicity makes me happy.",
            "author": "알리시아 키스 (Alicia Keys)"
        },
        {
            "ko": "행복은 가진 것의 크기가 아니라 보는 마음의 크기다.",
            "en": "The happiest people don't have the best of everything; they make the best of everything.",
            "author": "작자 미상 (Unknown)"
        },
        {
            "ko": "행복은 현재에 집중할 때 자란다.",
            "en": "Be happy for this moment. This moment is your life.",
            "author": "오마르 카이얌 (Omar Khayyam)"
        },
        {
            "ko": "웃음 없는 하루는 낭비한 하루다.",
            "en": "A day without laughter is a day wasted.",
            "author": "찰리 채플린 (Charlie Chaplin)"
        },
        {
            "ko": "평범한 날의 소중함을 아는 것이 행복이다.",
            "en": "Enjoy the little things, for one day you may look back and realize they were the big things.",
            "author": "로버트 브롤트 (Robert Brault)"
        }
    ],
    "존경": [
        {
            "ko": "우리가 하는 일은 바다의 한 방울일 뿐이지만 그 방울이 없다면 바다는 모자란다.",
            "en": "What we are doing is just a drop in the ocean, but the ocean would be less because of that missing drop.",
            "author": "마더 테레사 (Mother Teresa)"
        },
        {
            "ko": "책임은 성숙의 다른 이름이다.",
            "en": "The price of greatness is responsibility.",
            "author": "윈스턴 처칠 (Winston Churchill)"
        },
        {
            "ko": "진실은 신뢰의 토대다.",
            "en": "Honesty is the first chapter in the book of wisdom.",
            "author": "토머스 제퍼슨 (Thomas Jefferson)"
        },
        {
            "ko": "남의 말을 끝까지 들어주는 것이 배려다.",
            "en": "Most people do not listen with the intent to understand; they listen with the intent to reply.",
            "author": "스티븐 코비 (Stephen Covey)"
        },
        {
            "ko": "공동체는 봉사로 유지된다.",
            "en": "Service to others is the rent you pay for your room here on earth.",
            "author": "무하마드 알리 (Muhammad Ali)"
        },
        {
            "ko": "신뢰는 행동으로 증명된다.",
            "en": "Trust is earned when actions meet words.",
            "author": "크리스 버틀러 (Chris Butler)"
        },
        {
            "ko": "책임 있는 자유가 진짜 자유다.",
            "en": "Liberty means responsibility.",
            "author": "조지 버나드 쇼 (George Bernard Shaw)"
        },
        {
            "ko": "경청은 관계를 회복하는 시작이다.",
            "en": "When people talk, listen completely.",
            "author": "어니스트 헤밍웨이 (Ernest Hemingway)"
        },
        {
            "ko": "가정은 자연이 만든 걸작이다.",
            "en": "The family is one of nature's masterpieces.",
            "author": "조지 산타야나 (George Santayana)"
        }
    ],
    "부자": [
        {
            "ko": "좋아하는 일을 하라. 그러면 일은 기쁨이 된다.",
            "en": "The only way to do great work is to love what you do.",
            "author": "스티브 잡스 (Steve Jobs)"
        },
        {
            "ko": "직업은 생계를, 소명은 삶을 만든다.",
            "en": "Pleasure in the job puts perfection in the work.",
            "author": "아리스토텔레스 (Aristotle)"
        },
        {
            "ko": "돈을 위해 시간 팔지 말고, 가치를 만들어라.",
            "en": "Never depend on single income. Make investment to create a second source.",
            "author": "워런 버핏 (Warren Buffett)"
        },
        {
            "ko": "일의 품질이 곧 신뢰다.",
            "en": "Quality means doing it right when no one is looking.",
            "author": "헨리 포드 (Henry Ford)"
        },
        {
            "ko": "부자는 기회를 사고, 가난은 핑계를 산다.",
            "en": "Formal education will make you a living; self-education will make you a fortune.",
            "author": "짐 론 (Jim Rohn)"
        },
        {
            "ko": "돈의 목적은 자유다.",
            "en": "Money won't create success, the freedom to make it will.",
            "author": "넬슨 만델라 (Nelson Mandela)"
        },
        {
            "ko": "잘 버는 것만큼 잘 쓰는 것도 지혜다.",
            "en": "Beware of little expenses; a small leak will sink a great ship.",
            "author": "벤자민 프랭클린 (Benjamin Franklin)"
        },
        {
            "ko": "돈은 훌륭한 하인이지만 형편없는 주인이다.",
            "en": "Money is a good servant but a bad master.",
            "author": "프랜시스 베이컨 (Francis Bacon)"
        },
        {
            "ko": "가격은 지불하는 것이고 가치는 얻는 것이다.",
            "en": "Price is what you pay. Value is what you get.",
            "author": "워런 버핏 (Warren Buffett)"
        }
    ],
    "모험": [
        {
            "ko": "대담함 속에는 천재성과 힘과 마법이 있다.",
            "en": "Boldness has genius, power and magic in it.",
            "author": "괴테 (Johann Wolfgang von Goethe)"
        },
        {
            "ko": "옳은 일을 하기에 늦은 때란 없다.",
            "en": "It is never wrong to do the right thing.",
            "author": "마크 트웨인 (Mark Twain)"
        },
        {
            "ko": "한 발 내딛는 용기가 인생을 바꾼다.",
            "en": "The brave may not live forever, but the cautious do not live at all.",
            "author": "리처드 브랜슨 (Richard Branson)"
        },
        {
            "ko": "넘어지지 않는 것이 아니라 일어서는 것이 용기다.",
            "en": "Our greatest glory is not in never falling, but in rising every time we fall.",
            "author": "공자 (Confucius)"
        },
        {
            "ko": "두려움 너머가 성장이다.",
            "en": "Everything you've ever wanted is on the other side of fear.",
            "author": "조지 애데어 (George Addair)"
        },
        {
            "ko": "영웅은 평범한 사람이 버텨낸 이름이다.",
            "en": "Courage is grace under pressure.",
            "author": "어니스트 헤밍웨이 (Ernest Hemingway)"
        },
        {
            "ko": "여행은 편견의 치명적인 적이다.",
            "en": "Travel is fatal to prejudice, bigotry, and narrow-mindedness.",
            "author": "마크 트웨인 (Mark Twain)"
        },
        {
            "ko": "세상은 한 권의 책이다. 여행하지 않으면 한 페이지만 읽는다.",
            "en": "The world is a book and those who do not travel read only one page.",
            "author": "성 아우구스티누스 (Saint Augustine)"
        },
        {
            "ko": "진정한 발견은 새로운 풍경이 아니라 새로운 눈이다.",
            "en": "The real voyage of discovery consists not in seeking new landscapes, but in having new eyes.",
            "author": "마르셀 프루스트 (Marcel Proust)"
        }
    ],
    "음식": [
        {
            "ko": "음식은 약이 될 수도 독이 될 수도 있다.",
            "en": "Let food be thy medicine.",
            "author": "히포크라테스 (Hippocrates)"
        },
        {
            "ko": "집중은 선택의 예술이다.",
            "en": "Focus is saying no.",
            "author": "스티브 잡스 (Steve Jobs)"
        },
        {
            "ko": "잘 먹고 잘 쉬는 것도 생산성이다.",
            "en": "Take rest; a field that has rested gives a bountiful crop.",
            "author": "오비디우스 (Ovid)"
        },
        {
            "ko": "단순한 식탁이 건강한 삶을 만든다.",
            "en": "Eat food. Not too much. Mostly plants.",
            "author": "마이클 폴란 (Michael Pollan)"
        },
        {
            "ko": "주의 깊게 먹고 주의 깊게 살아라.",
            "en": "When walking, walk. When eating, eat.",
            "author": "선불교 격언 (Zen Proverb)"
        },
        {
            "ko": "살기 위해 먹고 먹기 위해 살지 마라.",
            "en": "One should eat to live, not live to eat.",
            "author": "몰리에르 (Moliere)"
        },
        {
            "ko": "좋은 음식은 좋은 기분을 만든다.",
            "en": "Good food is the foundation of genuine happiness.",
            "author": "오귀스트 에스코피에 (Auguste Escoffier)"
        },
        {
            "ko": "함께 먹는 식사가 공동체를 만든다.",
            "en": "People who love to eat are always the best people.",
            "author": "줄리아 차일드 (Julia Child)"
        },
        {
            "ko": "집중은 \"아니오\"를 말하는 힘이다.",
            "en": "The difference between successful people and really successful people is that really successful people say no to almost everything.",
            "author": "워런 버핏 (Warren Buffett)"
        }
    ],
    "집중": [
        {
            "ko": "내면의 평화가 진짜 성공이다.",
            "en": "Calm mind brings inner strength and self-confidence.",
            "author": "달라이 라마 (Dalai Lama)"
        },
        {
            "ko": "자기계발의 핵심은 매일의 개선이다.",
            "en": "Be not afraid of growing slowly; be afraid only of standing still.",
            "author": "중국 속담 (Chinese Proverb)"
        },
        {
            "ko": "목표는 데드라인이 있는 꿈이다.",
            "en": "A goal is a dream with a deadline.",
            "author": "나폴레옹 힐 (Napoleon Hill)"
        },
        {
            "ko": "포기하지 않는 습관이 회복력을 만든다.",
            "en": "Success is the product of daily habits, not once-in-a-lifetime transformations.",
            "author": "제임스 클리어 (James Clear)"
        },
        {
            "ko": "살기 위해 먹고 먹기 위해 살지 마라.",
            "en": "One should eat to live, not live to eat.",
            "author": "몰리에르 (Moliere)"
        },
        {
            "ko": "좋은 음식은 좋은 기분을 만든다.",
            "en": "Good food is the foundation of genuine happiness.",
            "author": "오귀스트 에스코피에 (Auguste Escoffier)"
        },
        {
            "ko": "함께 먹는 식사가 공동체를 만든다.",
            "en": "People who love to eat are always the best people.",
            "author": "줄리아 차일드 (Julia Child)"
        },
        {
            "ko": "집중은 \"아니오\"를 말하는 힘이다.",
            "en": "The difference between successful people and really successful people is that really successful people say no to almost everything.",
            "author": "워런 버핏 (Warren Buffett)"
        },
        {
            "ko": "중요한 것에 집중하라.",
            "en": "Concentrate all your thoughts upon the work at hand.",
            "author": "알렉산더 그레이엄 벨 (Alexander Graham Bell)"
        }
    ],
    "경영": [
        {
            "ko": "경영은 일을 제대로 하는 것이고, 리더십은 옳은 일을 하는 것이다.",
            "en": "Management is doing things right; leadership is doing the right things.",
            "author": "피터 드러커 (Peter Drucker)"
        },
        {
            "ko": "측정할 수 없으면 관리할 수 없다.",
            "en": "If you can't measure it, you can't improve it.",
            "author": "피터 드러커 (Peter Drucker)"
        },
        {
            "ko": "문화가 전략을 아침으로 먹는다.",
            "en": "Culture eats strategy for breakfast.",
            "author": "피터 드러커 (Peter Drucker)"
        },
        {
            "ko": "가장 위험한 것은 위험을 감수하지 않는 것이다.",
            "en": "The biggest risk is not taking any risk.",
            "author": "마크 저커버그 (Mark Zuckerberg)"
        },
        {
            "ko": "혁신은 리더와 추종자를 구분한다.",
            "en": "Innovation distinguishes between a leader and a follower.",
            "author": "스티브 잡스 (Steve Jobs)"
        },
        {
            "ko": "고객이 원하는 것을 100% 이해하라.",
            "en": "The purpose of business is to create and keep a customer.",
            "author": "피터 드러커 (Peter Drucker)"
        },
        {
            "ko": "브랜드는 회사가 말하는 것이 아니라 고객이 말하는 것이다.",
            "en": "Your brand is what people say about you when you're not in the room.",
            "author": "제프 베조스 (Jeff Bezos)"
        },
        {
            "ko": "전략의 본질은 무엇을 하지 않을지 선택하는 것이다.",
            "en": "The essence of strategy is choosing what not to do.",
            "author": "마이클 포터 (Michael Porter)"
        },
        {
            "ko": "빠른 의사결정이 완벽한 의사결정보다 낫다.",
            "en": "In the end, a vision without the ability to execute it is probably a hallucination.",
            "author": "스티브 잡스 (Steve Jobs)"
        }
    ],
    "기업가정신": [
        {
            "ko": "성공은 우연이 아니라 습관이다.",
            "en": "Success is nothing more than a few simple disciplines, practiced every day.",
            "author": "짐 론 (Jim Rohn)"
        },
        {
            "ko": "성공은 준비와 기회의 만남이다.",
            "en": "Luck is what happens when preparation meets opportunity.",
            "author": "세네카 (Seneca)"
        },
        {
            "ko": "포기하지 않으면 늦지 않았다.",
            "en": "It does not matter how slowly you go as long as you do not stop.",
            "author": "공자 (Confucius)"
        },
        {
            "ko": "기회는 준비된 사람의 것이다.",
            "en": "Chance favors the prepared mind.",
            "author": "루이 파스퇴르 (Louis Pasteur)"
        },
        {
            "ko": "성공하기 전에는 모든 것이 불가능해 보인다.",
            "en": "It always seems impossible until it is done.",
            "author": "넬슨 만델라 (Nelson Mandela)"
        },
        {
            "ko": "위대한 일은 작은 일을 모아 만든다.",
            "en": "Great things are done by a series of small things brought together.",
            "author": "빈센트 반 고흐 (Vincent van Gogh)"
        },
        {
            "ko": "성공은 목표가 아니라 과정이다.",
            "en": "Success is a journey, not a destination.",
            "author": "벤 스위트랜드 (Ben Sweetland)"
        },
        {
            "ko": "이기는 사람은 방법을, 지는 사람은 핑계를 찾는다.",
            "en": "Winners find a way, losers find an excuse.",
            "author": "프랭클린 D. 루즈벨트 (Franklin D. Roosevelt)"
        },
        {
            "ko": "경영은 일을 제대로 하는 것이고, 리더십은 옳은 일을 하는 것이다.",
            "en": "Management is doing things right; leadership is doing the right things.",
            "author": "피터 드러커 (Peter Drucker)"
        }
    ],
    "혁신": [
        {
            "ko": "상상력은 현실을 넘는 힘이다.",
            "en": "Logic will get you from A to B. Imagination will take you everywhere.",
            "author": "알베르트 아인슈타인 (Albert Einstein)"
        },
        {
            "ko": "예술은 우리가 진실을 깨닫게 하는 거짓말이다.",
            "en": "Art is the lie that enables us to realize the truth.",
            "author": "파블로 피카소 (Pablo Picasso)"
        },
        {
            "ko": "예술은 일상에서 영혼의 먼지를 씻어낸다.",
            "en": "Art washes away from the soul the dust of everyday life.",
            "author": "파블로 피카소 (Pablo Picasso)"
        },
        {
            "ko": "노래는 말하지 못한 마음의 언어다.",
            "en": "Where words fail, music speaks.",
            "author": "한스 크리스티안 안데르센 (Hans Christian Andersen)"
        },
        {
            "ko": "음악은 감정의 지름길이다.",
            "en": "Music gives a soul to the universe, wings to the mind, flight to the imagination.",
            "author": "플라톤 (Plato)"
        },
        {
            "ko": "창조는 용기에서 시작된다.",
            "en": "Creativity takes courage.",
            "author": "앙리 마티스 (Henri Matisse)"
        },
        {
            "ko": "예술은 자유를 숨 쉬게 한다.",
            "en": "The purpose of art is washing the dust of daily life off our souls.",
            "author": "파블로 피카소 (Pablo Picasso)"
        },
        {
            "ko": "경영은 일을 제대로 하는 것이고, 리더십은 옳은 일을 하는 것이다.",
            "en": "Management is doing things right; leadership is doing the right things.",
            "author": "피터 드러커 (Peter Drucker)"
        },
        {
            "ko": "측정할 수 없으면 관리할 수 없다.",
            "en": "If you can't measure it, you can't improve it.",
            "author": "피터 드러커 (Peter Drucker)"
        }
    ],
    "마케팅": [
        {
            "ko": "가장 위험한 것은 위험을 감수하지 않는 것이다.",
            "en": "The biggest risk is not taking any risk.",
            "author": "마크 저커버그 (Mark Zuckerberg)"
        },
        {
            "ko": "혁신은 리더와 추종자를 구분한다.",
            "en": "Innovation distinguishes between a leader and a follower.",
            "author": "스티브 잡스 (Steve Jobs)"
        },
        {
            "ko": "고객이 원하는 것을 100% 이해하라.",
            "en": "The purpose of business is to create and keep a customer.",
            "author": "피터 드러커 (Peter Drucker)"
        },
        {
            "ko": "브랜드는 회사가 말하는 것이 아니라 고객이 말하는 것이다.",
            "en": "Your brand is what people say about you when you're not in the room.",
            "author": "제프 베조스 (Jeff Bezos)"
        },
        {
            "ko": "전략의 본질은 무엇을 하지 않을지 선택하는 것이다.",
            "en": "The essence of strategy is choosing what not to do.",
            "author": "마이클 포터 (Michael Porter)"
        },
        {
            "ko": "빠른 의사결정이 완벽한 의사결정보다 낫다.",
            "en": "In the end, a vision without the ability to execute it is probably a hallucination.",
            "author": "스티브 잡스 (Steve Jobs)"
        },
        {
            "ko": "고객의 문제를 해결하면 성장은 따라온다.",
            "en": "Marketing is no longer about the stuff that you make, but about the stories you tell.",
            "author": "세스 고딘 (Seth Godin)"
        },
        {
            "ko": "가장 중요한 일에 집중하라.",
            "en": "The most important thing is to keep the most important thing the most important thing.",
            "author": "스티븐 코비 (Stephen Covey)"
        },
        {
            "ko": "훌륭한 기업은 사람을 먼저 생각한다.",
            "en": "Take care of your employees and they'll take care of your business.",
            "author": "리처드 브랜슨 (Richard Branson)"
        }
    ],
    "전략": [
        {
            "ko": "혁신은 리더와 추종자를 구분한다.",
            "en": "Innovation distinguishes between a leader and a follower.",
            "author": "스티브 잡스 (Steve Jobs)"
        },
        {
            "ko": "고객이 원하는 것을 100% 이해하라.",
            "en": "The purpose of business is to create and keep a customer.",
            "author": "피터 드러커 (Peter Drucker)"
        },
        {
            "ko": "브랜드는 회사가 말하는 것이 아니라 고객이 말하는 것이다.",
            "en": "Your brand is what people say about you when you're not in the room.",
            "author": "제프 베조스 (Jeff Bezos)"
        },
        {
            "ko": "전략의 본질은 무엇을 하지 않을지 선택하는 것이다.",
            "en": "The essence of strategy is choosing what not to do.",
            "author": "마이클 포터 (Michael Porter)"
        },
        {
            "ko": "빠른 의사결정이 완벽한 의사결정보다 낫다.",
            "en": "In the end, a vision without the ability to execute it is probably a hallucination.",
            "author": "스티브 잡스 (Steve Jobs)"
        },
        {
            "ko": "고객의 문제를 해결하면 성장은 따라온다.",
            "en": "Marketing is no longer about the stuff that you make, but about the stories you tell.",
            "author": "세스 고딘 (Seth Godin)"
        },
        {
            "ko": "가장 중요한 일에 집중하라.",
            "en": "The most important thing is to keep the most important thing the most important thing.",
            "author": "스티븐 코비 (Stephen Covey)"
        },
        {
            "ko": "훌륭한 기업은 사람을 먼저 생각한다.",
            "en": "Take care of your employees and they'll take care of your business.",
            "author": "리처드 브랜슨 (Richard Branson)"
        },
        {
            "ko": "미래를 예측하는 가장 좋은 방법은 미래를 만드는 것이다.",
            "en": "The best way to predict the future is to create it.",
            "author": "피터 드러커 (Peter Drucker)"
        }
    ],
    "고객": [
        {
            "ko": "공동체는 봉사로 유지된다.",
            "en": "Service to others is the rent you pay for your room here on earth.",
            "author": "무하마드 알리 (Muhammad Ali)"
        },
        {
            "ko": "신뢰는 행동으로 증명된다.",
            "en": "Trust is earned when actions meet words.",
            "author": "크리스 버틀러 (Chris Butler)"
        },
        {
            "ko": "책임 있는 자유가 진짜 자유다.",
            "en": "Liberty means responsibility.",
            "author": "조지 버나드 쇼 (George Bernard Shaw)"
        },
        {
            "ko": "경청은 관계를 회복하는 시작이다.",
            "en": "When people talk, listen completely.",
            "author": "어니스트 헤밍웨이 (Ernest Hemingway)"
        },
        {
            "ko": "경영은 일을 제대로 하는 것이고, 리더십은 옳은 일을 하는 것이다.",
            "en": "Management is doing things right; leadership is doing the right things.",
            "author": "피터 드러커 (Peter Drucker)"
        },
        {
            "ko": "측정할 수 없으면 관리할 수 없다.",
            "en": "If you can't measure it, you can't improve it.",
            "author": "피터 드러커 (Peter Drucker)"
        },
        {
            "ko": "문화가 전략을 아침으로 먹는다.",
            "en": "Culture eats strategy for breakfast.",
            "author": "피터 드러커 (Peter Drucker)"
        },
        {
            "ko": "가장 위험한 것은 위험을 감수하지 않는 것이다.",
            "en": "The biggest risk is not taking any risk.",
            "author": "마크 저커버그 (Mark Zuckerberg)"
        },
        {
            "ko": "혁신은 리더와 추종자를 구분한다.",
            "en": "Innovation distinguishes between a leader and a follower.",
            "author": "스티브 잡스 (Steve Jobs)"
        }
    ],
    "위로": [
        {
            "ko": "고통은 피할 수 없지만 괴로움은 선택이다.",
            "en": "Pain is inevitable. Suffering is optional.",
            "author": "하루키 무라카미 (Haruki Murakami)"
        },
        {
            "ko": "마음이 쉬어야 몸도 회복된다.",
            "en": "Almost everything will work again if you unplug it for a few minutes, including you.",
            "author": "앤 라모트 (Anne Lamott)"
        },
        {
            "ko": "슬픔은 사랑의 또 다른 이름이다.",
            "en": "Grief is the price we pay for love.",
            "author": "엘리자베스 2세 (Queen Elizabeth II)"
        },
        {
            "ko": "눈물은 약함이 아니라 치유의 시작이다.",
            "en": "Tears come from the heart and not from the brain.",
            "author": "레오나르도 다빈치 (Leonardo da Vinci)"
        },
        {
            "ko": "시간은 상처를 무디게 한다.",
            "en": "Time heals what reason cannot.",
            "author": "세네카 (Seneca)"
        },
        {
            "ko": "당신은 혼자가 아니다.",
            "en": "I am with you always.",
            "author": "성경 (Bible)"
        },
        {
            "ko": "부서진 마음도 다시 뛴다.",
            "en": "The human heart has a way of making itself large again even after it's been broken into a million pieces.",
            "author": "로버트 제임스 월러 (Robert James Waller)"
        },
        {
            "ko": "상실은 사랑이 머무는 방식이다.",
            "en": "What we have once enjoyed we can never lose.",
            "author": "헬렌 켈러 (Helen Keller)"
        },
        {
            "ko": "고요함은 치유의 공간이다.",
            "en": "The quieter you become, the more you can hear.",
            "author": "람 다스 (Ram Dass)"
        }
    ],
    "치유": [
        {
            "ko": "마음이 쉬어야 몸도 회복된다.",
            "en": "Almost everything will work again if you unplug it for a few minutes, including you.",
            "author": "앤 라모트 (Anne Lamott)"
        },
        {
            "ko": "슬픔은 사랑의 또 다른 이름이다.",
            "en": "Grief is the price we pay for love.",
            "author": "엘리자베스 2세 (Queen Elizabeth II)"
        },
        {
            "ko": "눈물은 약함이 아니라 치유의 시작이다.",
            "en": "Tears come from the heart and not from the brain.",
            "author": "레오나르도 다빈치 (Leonardo da Vinci)"
        },
        {
            "ko": "시간은 상처를 무디게 한다.",
            "en": "Time heals what reason cannot.",
            "author": "세네카 (Seneca)"
        },
        {
            "ko": "당신은 혼자가 아니다.",
            "en": "I am with you always.",
            "author": "성경 (Bible)"
        },
        {
            "ko": "부서진 마음도 다시 뛴다.",
            "en": "The human heart has a way of making itself large again even after it's been broken into a million pieces.",
            "author": "로버트 제임스 월러 (Robert James Waller)"
        },
        {
            "ko": "상실은 사랑이 머무는 방식이다.",
            "en": "What we have once enjoyed we can never lose.",
            "author": "헬렌 켈러 (Helen Keller)"
        },
        {
            "ko": "고요함은 치유의 공간이다.",
            "en": "The quieter you become, the more you can hear.",
            "author": "람 다스 (Ram Dass)"
        },
        {
            "ko": "이 또한 지나가리라.",
            "en": "This too shall pass.",
            "author": "페르시아 속담 (Persian Proverb)"
        }
    ],
    "슬픔": [
        {
            "ko": "슬픔은 사랑의 또 다른 이름이다.",
            "en": "Grief is the price we pay for love.",
            "author": "엘리자베스 2세 (Queen Elizabeth II)"
        },
        {
            "ko": "눈물은 약함이 아니라 치유의 시작이다.",
            "en": "Tears come from the heart and not from the brain.",
            "author": "레오나르도 다빈치 (Leonardo da Vinci)"
        },
        {
            "ko": "시간은 상처를 무디게 한다.",
            "en": "Time heals what reason cannot.",
            "author": "세네카 (Seneca)"
        },
        {
            "ko": "당신은 혼자가 아니다.",
            "en": "I am with you always.",
            "author": "성경 (Bible)"
        },
        {
            "ko": "부서진 마음도 다시 뛴다.",
            "en": "The human heart has a way of making itself large again even after it's been broken into a million pieces.",
            "author": "로버트 제임스 월러 (Robert James Waller)"
        },
        {
            "ko": "상실은 사랑이 머무는 방식이다.",
            "en": "What we have once enjoyed we can never lose.",
            "author": "헬렌 켈러 (Helen Keller)"
        },
        {
            "ko": "고요함은 치유의 공간이다.",
            "en": "The quieter you become, the more you can hear.",
            "author": "람 다스 (Ram Dass)"
        },
        {
            "ko": "이 또한 지나가리라.",
            "en": "This too shall pass.",
            "author": "페르시아 속담 (Persian Proverb)"
        },
        {
            "ko": "울어도 된다. 비도 내려야 무지개가 뜬다.",
            "en": "There is no rainbow without rain.",
            "author": "영국 속담 (English Proverb)"
        }
    ],
    "그리움": [
        {
            "ko": "눈물은 약함이 아니라 치유의 시작이다.",
            "en": "Tears come from the heart and not from the brain.",
            "author": "레오나르도 다빈치 (Leonardo da Vinci)"
        },
        {
            "ko": "시간은 상처를 무디게 한다.",
            "en": "Time heals what reason cannot.",
            "author": "세네카 (Seneca)"
        },
        {
            "ko": "당신은 혼자가 아니다.",
            "en": "I am with you always.",
            "author": "성경 (Bible)"
        },
        {
            "ko": "부서진 마음도 다시 뛴다.",
            "en": "The human heart has a way of making itself large again even after it's been broken into a million pieces.",
            "author": "로버트 제임스 월러 (Robert James Waller)"
        },
        {
            "ko": "상실은 사랑이 머무는 방식이다.",
            "en": "What we have once enjoyed we can never lose.",
            "author": "헬렌 켈러 (Helen Keller)"
        },
        {
            "ko": "고요함은 치유의 공간이다.",
            "en": "The quieter you become, the more you can hear.",
            "author": "람 다스 (Ram Dass)"
        },
        {
            "ko": "이 또한 지나가리라.",
            "en": "This too shall pass.",
            "author": "페르시아 속담 (Persian Proverb)"
        },
        {
            "ko": "울어도 된다. 비도 내려야 무지개가 뜬다.",
            "en": "There is no rainbow without rain.",
            "author": "영국 속담 (English Proverb)"
        },
        {
            "ko": "상처는 우리를 더 인간답게 만든다.",
            "en": "Turn your wounds into wisdom.",
            "author": "오프라 윈프리 (Oprah Winfrey)"
        }
    ],
    "감동": [
        {
            "ko": "시간은 상처를 무디게 한다.",
            "en": "Time heals what reason cannot.",
            "author": "세네카 (Seneca)"
        },
        {
            "ko": "당신은 혼자가 아니다.",
            "en": "I am with you always.",
            "author": "성경 (Bible)"
        },
        {
            "ko": "부서진 마음도 다시 뛴다.",
            "en": "The human heart has a way of making itself large again even after it's been broken into a million pieces.",
            "author": "로버트 제임스 월러 (Robert James Waller)"
        },
        {
            "ko": "상실은 사랑이 머무는 방식이다.",
            "en": "What we have once enjoyed we can never lose.",
            "author": "헬렌 켈러 (Helen Keller)"
        },
        {
            "ko": "고요함은 치유의 공간이다.",
            "en": "The quieter you become, the more you can hear.",
            "author": "람 다스 (Ram Dass)"
        },
        {
            "ko": "행복은 습관이다. 그것을 몸에 지녀라.",
            "en": "Happiness is a habit. Cultivate it.",
            "author": "엘버트 허버드 (Elbert Hubbard)"
        },
        {
            "ko": "행복은 준비된 상태가 아니라 스스로 만드는 것이다.",
            "en": "Happiness is not something ready made. It comes from your own actions.",
            "author": "달라이 라마 (Dalai Lama)"
        },
        {
            "ko": "행복의 비밀은 자유이고 자유의 비밀은 용기다.",
            "en": "The secret of happiness is freedom, and the secret of freedom is courage.",
            "author": "투키디데스 (Thucydides)"
        },
        {
            "ko": "감사하는 마음은 행복의 지름길이다.",
            "en": "Acknowledging the good that you already have in your life is the foundation for all abundance.",
            "author": "에크하르트 톨레 (Eckhart Tolle)"
        }
    ],
    "극복": [
        {
            "ko": "회복력은 다시 시작하는 힘이다.",
            "en": "Rock bottom became the solid foundation on which I rebuilt my life.",
            "author": "J.K. 롤링 (J.K. Rowling)"
        },
        {
            "ko": "고난은 오래가지 않지만 강한 사람은 남는다.",
            "en": "Tough times never last, but tough people do.",
            "author": "로버트 슐러 (Robert H. Schuller)"
        },
        {
            "ko": "넘어짐은 끝이 아니라 훈련이다.",
            "en": "Success is stumbling from failure to failure with no loss of enthusiasm.",
            "author": "윈스턴 처칠 (Winston Churchill)"
        },
        {
            "ko": "다시 시도하는 순간 실패는 정보가 된다.",
            "en": "I can accept failure, everyone fails at something. But I can't accept not trying.",
            "author": "마이클 조던 (Michael Jordan)"
        },
        {
            "ko": "이 또한 지나가리라.",
            "en": "This too shall pass.",
            "author": "페르시아 속담 (Persian Proverb)"
        },
        {
            "ko": "울어도 된다. 비도 내려야 무지개가 뜬다.",
            "en": "There is no rainbow without rain.",
            "author": "영국 속담 (English Proverb)"
        },
        {
            "ko": "상처는 우리를 더 인간답게 만든다.",
            "en": "Turn your wounds into wisdom.",
            "author": "오프라 윈프리 (Oprah Winfrey)"
        },
        {
            "ko": "고통은 피할 수 없지만 괴로움은 선택이다.",
            "en": "Pain is inevitable. Suffering is optional.",
            "author": "하루키 무라카미 (Haruki Murakami)"
        },
        {
            "ko": "마음이 쉬어야 몸도 회복된다.",
            "en": "Almost everything will work again if you unplug it for a few minutes, including you.",
            "author": "앤 라모트 (Anne Lamott)"
        }
    ],
    "철학": [
        {
            "ko": "진실은 너희를 자유롭게 하리라.",
            "en": "The truth will set you free.",
            "author": "성경 (Bible)"
        },
        {
            "ko": "인간은 사회적 동물이다.",
            "en": "Man is by nature a social animal.",
            "author": "아리스토텔레스 (Aristotle)"
        },
        {
            "ko": "모든 인간은 죽지만 모든 인간이 사는 것은 아니다.",
            "en": "Every man dies. Not every man really lives.",
            "author": "윌리엄 월리스 (William Wallace)"
        },
        {
            "ko": "너 자신을 알라.",
            "en": "Know thyself.",
            "author": "소크라테스 (Socrates)"
        },
        {
            "ko": "나는 생각한다, 고로 존재한다.",
            "en": "I think, therefore I am.",
            "author": "르네 데카르트 (René Descartes)"
        },
        {
            "ko": "신은 죽었다.",
            "en": "God is dead.",
            "author": "프리드리히 니체 (Friedrich Nietzsche)"
        },
        {
            "ko": "행복은 덕에 따른 영혼의 활동이다.",
            "en": "Happiness depends upon ourselves.",
            "author": "아리스토텔레스 (Aristotle)"
        },
        {
            "ko": "길이 곧 도이다.",
            "en": "The way that can be told is not the eternal Way.",
            "author": "노자 (Lao Tzu)"
        },
        {
            "ko": "배워서 때때로 익히면 또한 기쁘지 아니한가.",
            "en": "Is it not a pleasure, having learned something, to try it out at due intervals?",
            "author": "공자 (Confucius)"
        }
    ],
    "역사": [
        {
            "ko": "인간은 사회적 동물이다.",
            "en": "Man is by nature a social animal.",
            "author": "아리스토텔레스 (Aristotle)"
        },
        {
            "ko": "모든 인간은 죽지만 모든 인간이 사는 것은 아니다.",
            "en": "Every man dies. Not every man really lives.",
            "author": "윌리엄 월리스 (William Wallace)"
        },
        {
            "ko": "너 자신을 알라.",
            "en": "Know thyself.",
            "author": "소크라테스 (Socrates)"
        },
        {
            "ko": "나는 생각한다, 고로 존재한다.",
            "en": "I think, therefore I am.",
            "author": "르네 데카르트 (René Descartes)"
        },
        {
            "ko": "신은 죽었다.",
            "en": "God is dead.",
            "author": "프리드리히 니체 (Friedrich Nietzsche)"
        },
        {
            "ko": "행복은 덕에 따른 영혼의 활동이다.",
            "en": "Happiness depends upon ourselves.",
            "author": "아리스토텔레스 (Aristotle)"
        },
        {
            "ko": "길이 곧 도이다.",
            "en": "The way that can be told is not the eternal Way.",
            "author": "노자 (Lao Tzu)"
        },
        {
            "ko": "배워서 때때로 익히면 또한 기쁘지 아니한가.",
            "en": "Is it not a pleasure, having learned something, to try it out at due intervals?",
            "author": "공자 (Confucius)"
        },
        {
            "ko": "인간은 자유를 선고받았다.",
            "en": "Man is condemned to be free.",
            "author": "장 폴 사르트르 (Jean-Paul Sartre)"
        }
    ],
    "문학": [
        {
            "ko": "모든 인간은 죽지만 모든 인간이 사는 것은 아니다.",
            "en": "Every man dies. Not every man really lives.",
            "author": "윌리엄 월리스 (William Wallace)"
        },
        {
            "ko": "너 자신을 알라.",
            "en": "Know thyself.",
            "author": "소크라테스 (Socrates)"
        },
        {
            "ko": "나는 생각한다, 고로 존재한다.",
            "en": "I think, therefore I am.",
            "author": "르네 데카르트 (René Descartes)"
        },
        {
            "ko": "신은 죽었다.",
            "en": "God is dead.",
            "author": "프리드리히 니체 (Friedrich Nietzsche)"
        },
        {
            "ko": "행복은 덕에 따른 영혼의 활동이다.",
            "en": "Happiness depends upon ourselves.",
            "author": "아리스토텔레스 (Aristotle)"
        },
        {
            "ko": "길이 곧 도이다.",
            "en": "The way that can be told is not the eternal Way.",
            "author": "노자 (Lao Tzu)"
        },
        {
            "ko": "배워서 때때로 익히면 또한 기쁘지 아니한가.",
            "en": "Is it not a pleasure, having learned something, to try it out at due intervals?",
            "author": "공자 (Confucius)"
        },
        {
            "ko": "인간은 자유를 선고받았다.",
            "en": "Man is condemned to be free.",
            "author": "장 폴 사르트르 (Jean-Paul Sartre)"
        },
        {
            "ko": "나는 아무것도 약속하지 않는다. 나는 탐구할 뿐이다.",
            "en": "Wonder is the beginning of wisdom.",
            "author": "소크라테스 (Socrates)"
        }
    ],
    "진리": [
        {
            "ko": "너 자신을 알라.",
            "en": "Know thyself.",
            "author": "소크라테스 (Socrates)"
        },
        {
            "ko": "나는 생각한다, 고로 존재한다.",
            "en": "I think, therefore I am.",
            "author": "르네 데카르트 (René Descartes)"
        },
        {
            "ko": "신은 죽었다.",
            "en": "God is dead.",
            "author": "프리드리히 니체 (Friedrich Nietzsche)"
        },
        {
            "ko": "행복은 덕에 따른 영혼의 활동이다.",
            "en": "Happiness depends upon ourselves.",
            "author": "아리스토텔레스 (Aristotle)"
        },
        {
            "ko": "길이 곧 도이다.",
            "en": "The way that can be told is not the eternal Way.",
            "author": "노자 (Lao Tzu)"
        },
        {
            "ko": "배워서 때때로 익히면 또한 기쁘지 아니한가.",
            "en": "Is it not a pleasure, having learned something, to try it out at due intervals?",
            "author": "공자 (Confucius)"
        },
        {
            "ko": "인간은 자유를 선고받았다.",
            "en": "Man is condemned to be free.",
            "author": "장 폴 사르트르 (Jean-Paul Sartre)"
        },
        {
            "ko": "나는 아무것도 약속하지 않는다. 나는 탐구할 뿐이다.",
            "en": "Wonder is the beginning of wisdom.",
            "author": "소크라테스 (Socrates)"
        },
        {
            "ko": "역사를 잊은 민족에게 미래는 없다.",
            "en": "Those who cannot remember the past are condemned to repeat it.",
            "author": "조지 산타야나 (George Santayana)"
        }
    ],
    "인간본성": [
        {
            "ko": "나는 생각한다, 고로 존재한다.",
            "en": "I think, therefore I am.",
            "author": "르네 데카르트 (René Descartes)"
        },
        {
            "ko": "신은 죽었다.",
            "en": "God is dead.",
            "author": "프리드리히 니체 (Friedrich Nietzsche)"
        },
        {
            "ko": "행복은 덕에 따른 영혼의 활동이다.",
            "en": "Happiness depends upon ourselves.",
            "author": "아리스토텔레스 (Aristotle)"
        },
        {
            "ko": "길이 곧 도이다.",
            "en": "The way that can be told is not the eternal Way.",
            "author": "노자 (Lao Tzu)"
        },
        {
            "ko": "배워서 때때로 익히면 또한 기쁘지 아니한가.",
            "en": "Is it not a pleasure, having learned something, to try it out at due intervals?",
            "author": "공자 (Confucius)"
        },
        {
            "ko": "인간은 자유를 선고받았다.",
            "en": "Man is condemned to be free.",
            "author": "장 폴 사르트르 (Jean-Paul Sartre)"
        },
        {
            "ko": "나는 아무것도 약속하지 않는다. 나는 탐구할 뿐이다.",
            "en": "Wonder is the beginning of wisdom.",
            "author": "소크라테스 (Socrates)"
        },
        {
            "ko": "역사를 잊은 민족에게 미래는 없다.",
            "en": "Those who cannot remember the past are condemned to repeat it.",
            "author": "조지 산타야나 (George Santayana)"
        },
        {
            "ko": "역사는 과거와 현재의 대화다.",
            "en": "History is a dialogue between past and present.",
            "author": "E.H. 카 (E.H. Carr)"
        }
    ],
    "자기계발": [
        {
            "ko": "작은 습관이 정체성을 만든다.",
            "en": "Every action you take is a vote for the type of person you wish to become.",
            "author": "제임스 클리어 (James Clear)"
        },
        {
            "ko": "끝을 염두에 두고 시작하라.",
            "en": "Begin with the end in mind.",
            "author": "스티븐 코비 (Stephen Covey)"
        },
        {
            "ko": "측정되는 것은 개선된다.",
            "en": "What gets measured gets managed.",
            "author": "피터 드러커 (Peter Drucker)"
        },
        {
            "ko": "목표를 높게 두고 멈추지 마라.",
            "en": "Set your goals high, and don't stop till you get there.",
            "author": "보 잭슨 (Bo Jackson)"
        },
        {
            "ko": "마음챙김은 현재를 다시 선택하는 힘이다.",
            "en": "Be where you are; otherwise you will miss your life.",
            "author": "부처 (Buddha)"
        },
        {
            "ko": "호흡을 지키면 마음이 고요해진다.",
            "en": "Feelings come and go like clouds in a windy sky. Conscious breathing is my anchor.",
            "author": "틱낫한 (Thich Nhat Hanh)"
        },
        {
            "ko": "내면의 평화가 진짜 성공이다.",
            "en": "Calm mind brings inner strength and self-confidence.",
            "author": "달라이 라마 (Dalai Lama)"
        },
        {
            "ko": "자기계발의 핵심은 매일의 개선이다.",
            "en": "Be not afraid of growing slowly; be afraid only of standing still.",
            "author": "중국 속담 (Chinese Proverb)"
        },
        {
            "ko": "목표는 데드라인이 있는 꿈이다.",
            "en": "A goal is a dream with a deadline.",
            "author": "나폴레옹 힐 (Napoleon Hill)"
        }
    ],
    "습관": [
        {
            "ko": "끝을 염두에 두고 시작하라.",
            "en": "Begin with the end in mind.",
            "author": "스티븐 코비 (Stephen Covey)"
        },
        {
            "ko": "측정되는 것은 개선된다.",
            "en": "What gets measured gets managed.",
            "author": "피터 드러커 (Peter Drucker)"
        },
        {
            "ko": "목표를 높게 두고 멈추지 마라.",
            "en": "Set your goals high, and don't stop till you get there.",
            "author": "보 잭슨 (Bo Jackson)"
        },
        {
            "ko": "마음챙김은 현재를 다시 선택하는 힘이다.",
            "en": "Be where you are; otherwise you will miss your life.",
            "author": "부처 (Buddha)"
        },
        {
            "ko": "호흡을 지키면 마음이 고요해진다.",
            "en": "Feelings come and go like clouds in a windy sky. Conscious breathing is my anchor.",
            "author": "틱낫한 (Thich Nhat Hanh)"
        },
        {
            "ko": "내면의 평화가 진짜 성공이다.",
            "en": "Calm mind brings inner strength and self-confidence.",
            "author": "달라이 라마 (Dalai Lama)"
        },
        {
            "ko": "자기계발의 핵심은 매일의 개선이다.",
            "en": "Be not afraid of growing slowly; be afraid only of standing still.",
            "author": "중국 속담 (Chinese Proverb)"
        },
        {
            "ko": "목표는 데드라인이 있는 꿈이다.",
            "en": "A goal is a dream with a deadline.",
            "author": "나폴레옹 힐 (Napoleon Hill)"
        },
        {
            "ko": "포기하지 않는 습관이 회복력을 만든다.",
            "en": "Success is the product of daily habits, not once-in-a-lifetime transformations.",
            "author": "제임스 클리어 (James Clear)"
        }
    ],
    "마음챙김": [
        {
            "ko": "용서는 과거를 바꾸지 못하지만 미래를 바꾼다.",
            "en": "Forgiveness does not change the past, but it does enlarge the future.",
            "author": "폴 부스 (Paul Boese)"
        },
        {
            "ko": "분노를 붙잡는 것은 독을 마시고 남이 죽길 바라는 것과 같다.",
            "en": "Holding on to anger is like drinking poison and expecting the other person to die.",
            "author": "부처 (Buddha)"
        },
        {
            "ko": "자비는 항상 가능하다.",
            "en": "Love and compassion are necessities, not luxuries.",
            "author": "달라이 라마 (Dalai Lama)"
        },
        {
            "ko": "용서는 강한 사람의 선택이다.",
            "en": "The weak can never forgive. Forgiveness is the attribute of the strong.",
            "author": "마하트마 간디 (Mahatma Gandhi)"
        },
        {
            "ko": "쉼은 게으름이 아니라 회복이다.",
            "en": "Almost everything will work again if you unplug it for a few minutes.",
            "author": "앤 라모트 (Anne Lamott)"
        },
        {
            "ko": "깨어 있음이 자유다.",
            "en": "Mindfulness is the aware, balanced acceptance of the present experience.",
            "author": "실비아 보어스타인 (Sylvia Boorstein)"
        },
        {
            "ko": "명상은 마음의 헬스장이다.",
            "en": "Meditation is to the mind what exercise is to the body.",
            "author": "조셉 골드스타인 (Joseph Goldstein)"
        },
        {
            "ko": "오늘의 평정이 내일의 힘이다.",
            "en": "There is no way to peace; peace is the way.",
            "author": "틱낫한 (Thich Nhat Hanh)"
        },
        {
            "ko": "당신은 목표 수준까지 올라가지 않고 시스템 수준으로 내려온다.",
            "en": "You do not rise to the level of your goals. You fall to the level of your systems.",
            "author": "제임스 클리어 (James Clear)"
        }
    ],
    "목표달성": [
        {
            "ko": "성공은 준비와 기회의 만남이다.",
            "en": "Luck is what happens when preparation meets opportunity.",
            "author": "세네카 (Seneca)"
        },
        {
            "ko": "포기하지 않으면 늦지 않았다.",
            "en": "It does not matter how slowly you go as long as you do not stop.",
            "author": "공자 (Confucius)"
        },
        {
            "ko": "기회는 준비된 사람의 것이다.",
            "en": "Chance favors the prepared mind.",
            "author": "루이 파스퇴르 (Louis Pasteur)"
        },
        {
            "ko": "성공하기 전에는 모든 것이 불가능해 보인다.",
            "en": "It always seems impossible until it is done.",
            "author": "넬슨 만델라 (Nelson Mandela)"
        },
        {
            "ko": "위대한 일은 작은 일을 모아 만든다.",
            "en": "Great things are done by a series of small things brought together.",
            "author": "빈센트 반 고흐 (Vincent van Gogh)"
        },
        {
            "ko": "성공은 목표가 아니라 과정이다.",
            "en": "Success is a journey, not a destination.",
            "author": "벤 스위트랜드 (Ben Sweetland)"
        },
        {
            "ko": "이기는 사람은 방법을, 지는 사람은 핑계를 찾는다.",
            "en": "Winners find a way, losers find an excuse.",
            "author": "프랭클린 D. 루즈벨트 (Franklin D. Roosevelt)"
        },
        {
            "ko": "당신은 목표 수준까지 올라가지 않고 시스템 수준으로 내려온다.",
            "en": "You do not rise to the level of your goals. You fall to the level of your systems.",
            "author": "제임스 클리어 (James Clear)"
        },
        {
            "ko": "훌륭함은 습관이다.",
            "en": "We are what we repeatedly do. Excellence, then, is not an act, but a habit.",
            "author": "아리스토텔레스 (Aristotle)"
        }
    ],
    "회복력": [
        {
            "ko": "마음챙김은 현재를 다시 선택하는 힘이다.",
            "en": "Be where you are; otherwise you will miss your life.",
            "author": "부처 (Buddha)"
        },
        {
            "ko": "호흡을 지키면 마음이 고요해진다.",
            "en": "Feelings come and go like clouds in a windy sky. Conscious breathing is my anchor.",
            "author": "틱낫한 (Thich Nhat Hanh)"
        },
        {
            "ko": "내면의 평화가 진짜 성공이다.",
            "en": "Calm mind brings inner strength and self-confidence.",
            "author": "달라이 라마 (Dalai Lama)"
        },
        {
            "ko": "자기계발의 핵심은 매일의 개선이다.",
            "en": "Be not afraid of growing slowly; be afraid only of standing still.",
            "author": "중국 속담 (Chinese Proverb)"
        },
        {
            "ko": "목표는 데드라인이 있는 꿈이다.",
            "en": "A goal is a dream with a deadline.",
            "author": "나폴레옹 힐 (Napoleon Hill)"
        },
        {
            "ko": "포기하지 않는 습관이 회복력을 만든다.",
            "en": "Success is the product of daily habits, not once-in-a-lifetime transformations.",
            "author": "제임스 클리어 (James Clear)"
        },
        {
            "ko": "실패는 성공의 어머니다.",
            "en": "Failure is the mother of success.",
            "author": "한국 속담 (Korean Proverb)"
        },
        {
            "ko": "나는 실패한 것이 아니라 작동하지 않는 방법을 찾았다.",
            "en": "I have not failed. I've just found 10,000 ways that won't work.",
            "author": "토머스 에디슨 (Thomas Edison)"
        },
        {
            "ko": "일곱 번 넘어져도 여덟 번 일어서라.",
            "en": "Fall seven times, stand up eight.",
            "author": "일본 속담 (Japanese Proverb)"
        }
    ],
    "스포츠": [
        {
            "ko": "고통은 잠깐이고 포기는 영원하다.",
            "en": "Pain is temporary. Quitting lasts forever.",
            "author": "랜스 암스트롱 (Lance Armstrong)"
        },
        {
            "ko": "재능은 경기를 이기고 팀워크는 우승을 만든다.",
            "en": "Talent wins games, but teamwork wins championships.",
            "author": "마이클 조던 (Michael Jordan)"
        },
        {
            "ko": "규칙적으로 움직이는 몸이 오래 간다.",
            "en": "Take care of your body. It's the only place you have to live.",
            "author": "짐 론 (Jim Rohn)"
        },
        {
            "ko": "운동은 몸을 바꾸고 습관은 인생을 바꾼다.",
            "en": "Exercise should be regarded as tribute to the heart.",
            "author": "진 터니 (Gene Tunney)"
        },
        {
            "ko": "승리는 준비된 사람에게 온다.",
            "en": "Success is where preparation and opportunity meet.",
            "author": "보비 언서 (Bobby Unser)"
        },
        {
            "ko": "건강이 최고의 재산이다.",
            "en": "Health is the greatest wealth.",
            "author": "버질 (Virgil)"
        },
        {
            "ko": "음식이 약이 되게 하라.",
            "en": "Let food be thy medicine and medicine be thy food.",
            "author": "히포크라테스 (Hippocrates)"
        },
        {
            "ko": "걷기는 최고의 약이다.",
            "en": "Walking is man's best medicine.",
            "author": "히포크라테스 (Hippocrates)"
        },
        {
            "ko": "강한 몸에 강한 정신이 깃든다.",
            "en": "A sound mind in a sound body.",
            "author": "유베날리스 (Juvenal)"
        }
    ],
    "과학": [
        {
            "ko": "과학은 조직된 지식이다.",
            "en": "Science is organized knowledge.",
            "author": "허버트 스펜서 (Herbert Spencer)"
        },
        {
            "ko": "상상력은 지식보다 중요하다.",
            "en": "Imagination is more important than knowledge.",
            "author": "알베르트 아인슈타인 (Albert Einstein)"
        },
        {
            "ko": "실패는 배움의 수업료다.",
            "en": "Anyone who has never made a mistake has never tried anything new.",
            "author": "알베르트 아인슈타인 (Albert Einstein)"
        },
        {
            "ko": "배움은 평생의 일이다.",
            "en": "Live as if you were to die tomorrow. Learn as if you were to live forever.",
            "author": "마하트마 간디 (Mahatma Gandhi)"
        },
        {
            "ko": "배움은 보물이며 어디서나 주인을 따른다.",
            "en": "Learning is a treasure that will follow its owner everywhere.",
            "author": "중국 속담 (Chinese Proverb)"
        },
        {
            "ko": "배움의 뿌리는 쓰고 열매는 달다.",
            "en": "The roots of education are bitter, but the fruit is sweet.",
            "author": "아리스토텔레스 (Aristotle)"
        },
        {
            "ko": "읽지 않는 사람은 읽을 수 없는 사람보다 낫지 않다.",
            "en": "The man who does not read has no advantage over the man who cannot read.",
            "author": "마크 트웨인 (Mark Twain)"
        },
        {
            "ko": "책 없는 방은 영혼 없는 육체와 같다.",
            "en": "A room without books is like a body without a soul.",
            "author": "키케로 (Cicero)"
        },
        {
            "ko": "오늘의 나를 만든 것은 도서관이다.",
            "en": "I have always imagined that Paradise will be a kind of library.",
            "author": "호르헤 루이스 보르헤스 (Jorge Luis Borges)"
        }
    ],
    "명상": [
        {
            "ko": "깨어 있음이 자유다.",
            "en": "Mindfulness is the aware, balanced acceptance of the present experience.",
            "author": "실비아 보어스타인 (Sylvia Boorstein)"
        },
        {
            "ko": "명상은 마음의 헬스장이다.",
            "en": "Meditation is to the mind what exercise is to the body.",
            "author": "조셉 골드스타인 (Joseph Goldstein)"
        },
        {
            "ko": "오늘의 평정이 내일의 힘이다.",
            "en": "There is no way to peace; peace is the way.",
            "author": "틱낫한 (Thich Nhat Hanh)"
        },
        {
            "ko": "현재 순간이 유일한 삶의 자리다.",
            "en": "The present moment is the only moment available to us.",
            "author": "틱낫한 (Thich Nhat Hanh)"
        },
        {
            "ko": "고요함 속에서 답이 들린다.",
            "en": "Silence is sometimes the best answer.",
            "author": "달라이 라마 (Dalai Lama)"
        },
        {
            "ko": "마음이 고요하면 세상이 맑다.",
            "en": "Peace comes from within. Do not seek it without.",
            "author": "부처 (Buddha)"
        },
        {
            "ko": "명상은 도피가 아니라 귀환이다.",
            "en": "Meditation is not evasion; it is a serene encounter with reality.",
            "author": "틱낫한 (Thich Nhat Hanh)"
        },
        {
            "ko": "용서는 과거를 바꾸지 못하지만 미래를 바꾼다.",
            "en": "Forgiveness does not change the past, but it does enlarge the future.",
            "author": "폴 부스 (Paul Boese)"
        },
        {
            "ko": "분노를 붙잡는 것은 독을 마시고 남이 죽길 바라는 것과 같다.",
            "en": "Holding on to anger is like drinking poison and expecting the other person to die.",
            "author": "부처 (Buddha)"
        }
    ],
    "용서": [
        {
            "ko": "명상은 마음의 헬스장이다.",
            "en": "Meditation is to the mind what exercise is to the body.",
            "author": "조셉 골드스타인 (Joseph Goldstein)"
        },
        {
            "ko": "오늘의 평정이 내일의 힘이다.",
            "en": "There is no way to peace; peace is the way.",
            "author": "틱낫한 (Thich Nhat Hanh)"
        },
        {
            "ko": "현재 순간이 유일한 삶의 자리다.",
            "en": "The present moment is the only moment available to us.",
            "author": "틱낫한 (Thich Nhat Hanh)"
        },
        {
            "ko": "고요함 속에서 답이 들린다.",
            "en": "Silence is sometimes the best answer.",
            "author": "달라이 라마 (Dalai Lama)"
        },
        {
            "ko": "마음이 고요하면 세상이 맑다.",
            "en": "Peace comes from within. Do not seek it without.",
            "author": "부처 (Buddha)"
        },
        {
            "ko": "명상은 도피가 아니라 귀환이다.",
            "en": "Meditation is not evasion; it is a serene encounter with reality.",
            "author": "틱낫한 (Thich Nhat Hanh)"
        },
        {
            "ko": "용서는 과거를 바꾸지 못하지만 미래를 바꾼다.",
            "en": "Forgiveness does not change the past, but it does enlarge the future.",
            "author": "폴 부스 (Paul Boese)"
        },
        {
            "ko": "분노를 붙잡는 것은 독을 마시고 남이 죽길 바라는 것과 같다.",
            "en": "Holding on to anger is like drinking poison and expecting the other person to die.",
            "author": "부처 (Buddha)"
        },
        {
            "ko": "자비는 항상 가능하다.",
            "en": "Love and compassion are necessities, not luxuries.",
            "author": "달라이 라마 (Dalai Lama)"
        }
    ],
    "봄": [
        {
            "ko": "자연은 최고의 치유자다.",
            "en": "Look deep into nature, and then you will understand everything better.",
            "author": "알베르트 아인슈타인 (Albert Einstein)"
        },
        {
            "ko": "여행은 편견의 치명적인 적이다.",
            "en": "Travel is fatal to prejudice, bigotry, and narrow-mindedness.",
            "author": "마크 트웨인 (Mark Twain)"
        },
        {
            "ko": "세상은 한 권의 책이다. 여행하지 않으면 한 페이지만 읽는다.",
            "en": "The world is a book and those who do not travel read only one page.",
            "author": "성 아우구스티누스 (Saint Augustine)"
        },
        {
            "ko": "진정한 발견은 새로운 풍경이 아니라 새로운 눈이다.",
            "en": "The real voyage of discovery consists not in seeking new landscapes, but in having new eyes.",
            "author": "마르셀 프루스트 (Marcel Proust)"
        },
        {
            "ko": "자연은 서두르지 않지만 모든 것을 이룬다.",
            "en": "Nature does not hurry, yet everything is accomplished.",
            "author": "노자 (Lao Tzu)"
        },
        {
            "ko": "산은 우리를 부르는 것이 아니라 가르친다.",
            "en": "In every walk with nature one receives far more than he seeks.",
            "author": "존 뮤어 (John Muir)"
        },
        {
            "ko": "봄은 지구가 꽃으로 웃는 계절이다.",
            "en": "Spring is nature's way of saying, Let's party.",
            "author": "로빈 윌리엄스 (Robin Williams)"
        },
        {
            "ko": "여름은 단순히 쉬는 계절이 아니라 살아 있음을 느끼는 계절이다.",
            "en": "Summertime is always the best of what might be.",
            "author": "찰스 보든 (Charles Bowden)"
        },
        {
            "ko": "가을은 두 번째 봄이다. 모든 잎이 꽃이다.",
            "en": "Autumn is a second spring when every leaf is a flower.",
            "author": "알베르 카뮈 (Albert Camus)"
        }
    ],
    "여름": [
        {
            "ko": "여행은 편견의 치명적인 적이다.",
            "en": "Travel is fatal to prejudice, bigotry, and narrow-mindedness.",
            "author": "마크 트웨인 (Mark Twain)"
        },
        {
            "ko": "세상은 한 권의 책이다. 여행하지 않으면 한 페이지만 읽는다.",
            "en": "The world is a book and those who do not travel read only one page.",
            "author": "성 아우구스티누스 (Saint Augustine)"
        },
        {
            "ko": "진정한 발견은 새로운 풍경이 아니라 새로운 눈이다.",
            "en": "The real voyage of discovery consists not in seeking new landscapes, but in having new eyes.",
            "author": "마르셀 프루스트 (Marcel Proust)"
        },
        {
            "ko": "자연은 서두르지 않지만 모든 것을 이룬다.",
            "en": "Nature does not hurry, yet everything is accomplished.",
            "author": "노자 (Lao Tzu)"
        },
        {
            "ko": "산은 우리를 부르는 것이 아니라 가르친다.",
            "en": "In every walk with nature one receives far more than he seeks.",
            "author": "존 뮤어 (John Muir)"
        },
        {
            "ko": "봄은 지구가 꽃으로 웃는 계절이다.",
            "en": "Spring is nature's way of saying, Let's party.",
            "author": "로빈 윌리엄스 (Robin Williams)"
        },
        {
            "ko": "여름은 단순히 쉬는 계절이 아니라 살아 있음을 느끼는 계절이다.",
            "en": "Summertime is always the best of what might be.",
            "author": "찰스 보든 (Charles Bowden)"
        },
        {
            "ko": "가을은 두 번째 봄이다. 모든 잎이 꽃이다.",
            "en": "Autumn is a second spring when every leaf is a flower.",
            "author": "알베르 카뮈 (Albert Camus)"
        },
        {
            "ko": "한겨울 속에서 나는 내 안의 꺼지지 않는 여름을 발견했다.",
            "en": "In the midst of winter, I found there was, within me, an invincible summer.",
            "author": "알베르 카뮈 (Albert Camus)"
        }
    ],
    "가을": [
        {
            "ko": "세상은 한 권의 책이다. 여행하지 않으면 한 페이지만 읽는다.",
            "en": "The world is a book and those who do not travel read only one page.",
            "author": "성 아우구스티누스 (Saint Augustine)"
        },
        {
            "ko": "진정한 발견은 새로운 풍경이 아니라 새로운 눈이다.",
            "en": "The real voyage of discovery consists not in seeking new landscapes, but in having new eyes.",
            "author": "마르셀 프루스트 (Marcel Proust)"
        },
        {
            "ko": "자연은 서두르지 않지만 모든 것을 이룬다.",
            "en": "Nature does not hurry, yet everything is accomplished.",
            "author": "노자 (Lao Tzu)"
        },
        {
            "ko": "산은 우리를 부르는 것이 아니라 가르친다.",
            "en": "In every walk with nature one receives far more than he seeks.",
            "author": "존 뮤어 (John Muir)"
        },
        {
            "ko": "봄은 지구가 꽃으로 웃는 계절이다.",
            "en": "Spring is nature's way of saying, Let's party.",
            "author": "로빈 윌리엄스 (Robin Williams)"
        },
        {
            "ko": "여름은 단순히 쉬는 계절이 아니라 살아 있음을 느끼는 계절이다.",
            "en": "Summertime is always the best of what might be.",
            "author": "찰스 보든 (Charles Bowden)"
        },
        {
            "ko": "가을은 두 번째 봄이다. 모든 잎이 꽃이다.",
            "en": "Autumn is a second spring when every leaf is a flower.",
            "author": "알베르 카뮈 (Albert Camus)"
        },
        {
            "ko": "한겨울 속에서 나는 내 안의 꺼지지 않는 여름을 발견했다.",
            "en": "In the midst of winter, I found there was, within me, an invincible summer.",
            "author": "알베르 카뮈 (Albert Camus)"
        },
        {
            "ko": "떠날 용기가 있어야 바다가 열린다.",
            "en": "You can never cross the ocean until you have the courage to lose sight of the shore.",
            "author": "크리스토퍼 콜럼버스 (Christopher Columbus)"
        }
    ],
    "겨울": [
        {
            "ko": "진정한 발견은 새로운 풍경이 아니라 새로운 눈이다.",
            "en": "The real voyage of discovery consists not in seeking new landscapes, but in having new eyes.",
            "author": "마르셀 프루스트 (Marcel Proust)"
        },
        {
            "ko": "자연은 서두르지 않지만 모든 것을 이룬다.",
            "en": "Nature does not hurry, yet everything is accomplished.",
            "author": "노자 (Lao Tzu)"
        },
        {
            "ko": "산은 우리를 부르는 것이 아니라 가르친다.",
            "en": "In every walk with nature one receives far more than he seeks.",
            "author": "존 뮤어 (John Muir)"
        },
        {
            "ko": "봄은 지구가 꽃으로 웃는 계절이다.",
            "en": "Spring is nature's way of saying, Let's party.",
            "author": "로빈 윌리엄스 (Robin Williams)"
        },
        {
            "ko": "여름은 단순히 쉬는 계절이 아니라 살아 있음을 느끼는 계절이다.",
            "en": "Summertime is always the best of what might be.",
            "author": "찰스 보든 (Charles Bowden)"
        },
        {
            "ko": "가을은 두 번째 봄이다. 모든 잎이 꽃이다.",
            "en": "Autumn is a second spring when every leaf is a flower.",
            "author": "알베르 카뮈 (Albert Camus)"
        },
        {
            "ko": "한겨울 속에서 나는 내 안의 꺼지지 않는 여름을 발견했다.",
            "en": "In the midst of winter, I found there was, within me, an invincible summer.",
            "author": "알베르 카뮈 (Albert Camus)"
        },
        {
            "ko": "떠날 용기가 있어야 바다가 열린다.",
            "en": "You can never cross the ocean until you have the courage to lose sight of the shore.",
            "author": "크리스토퍼 콜럼버스 (Christopher Columbus)"
        },
        {
            "ko": "길은 걸어가는 사람이 만든다.",
            "en": "Traveler, there is no path. The path is made by walking.",
            "author": "안토니오 마차도 (Antonio Machado)"
        }
    ],
    "신뢰": [
        {
            "ko": "남을 섬기는 삶이 가장 위대하다.",
            "en": "The best way to find yourself is to lose yourself in the service of others.",
            "author": "마하트마 간디 (Mahatma Gandhi)"
        },
        {
            "ko": "우리가 하는 일은 바다의 한 방울일 뿐이지만 그 방울이 없다면 바다는 모자란다.",
            "en": "What we are doing is just a drop in the ocean, but the ocean would be less because of that missing drop.",
            "author": "마더 테레사 (Mother Teresa)"
        },
        {
            "ko": "책임은 성숙의 다른 이름이다.",
            "en": "The price of greatness is responsibility.",
            "author": "윈스턴 처칠 (Winston Churchill)"
        },
        {
            "ko": "진실은 신뢰의 토대다.",
            "en": "Honesty is the first chapter in the book of wisdom.",
            "author": "토머스 제퍼슨 (Thomas Jefferson)"
        },
        {
            "ko": "남의 말을 끝까지 들어주는 것이 배려다.",
            "en": "Most people do not listen with the intent to understand; they listen with the intent to reply.",
            "author": "스티븐 코비 (Stephen Covey)"
        },
        {
            "ko": "공동체는 봉사로 유지된다.",
            "en": "Service to others is the rent you pay for your room here on earth.",
            "author": "무하마드 알리 (Muhammad Ali)"
        },
        {
            "ko": "신뢰는 행동으로 증명된다.",
            "en": "Trust is earned when actions meet words.",
            "author": "크리스 버틀러 (Chris Butler)"
        },
        {
            "ko": "책임 있는 자유가 진짜 자유다.",
            "en": "Liberty means responsibility.",
            "author": "조지 버나드 쇼 (George Bernard Shaw)"
        },
        {
            "ko": "경청은 관계를 회복하는 시작이다.",
            "en": "When people talk, listen completely.",
            "author": "어니스트 헤밍웨이 (Ernest Hemingway)"
        }
    ],
    "경청": [
        {
            "ko": "우리가 하는 일은 바다의 한 방울일 뿐이지만 그 방울이 없다면 바다는 모자란다.",
            "en": "What we are doing is just a drop in the ocean, but the ocean would be less because of that missing drop.",
            "author": "마더 테레사 (Mother Teresa)"
        },
        {
            "ko": "책임은 성숙의 다른 이름이다.",
            "en": "The price of greatness is responsibility.",
            "author": "윈스턴 처칠 (Winston Churchill)"
        },
        {
            "ko": "진실은 신뢰의 토대다.",
            "en": "Honesty is the first chapter in the book of wisdom.",
            "author": "토머스 제퍼슨 (Thomas Jefferson)"
        },
        {
            "ko": "남의 말을 끝까지 들어주는 것이 배려다.",
            "en": "Most people do not listen with the intent to understand; they listen with the intent to reply.",
            "author": "스티븐 코비 (Stephen Covey)"
        },
        {
            "ko": "공동체는 봉사로 유지된다.",
            "en": "Service to others is the rent you pay for your room here on earth.",
            "author": "무하마드 알리 (Muhammad Ali)"
        },
        {
            "ko": "신뢰는 행동으로 증명된다.",
            "en": "Trust is earned when actions meet words.",
            "author": "크리스 버틀러 (Chris Butler)"
        },
        {
            "ko": "책임 있는 자유가 진짜 자유다.",
            "en": "Liberty means responsibility.",
            "author": "조지 버나드 쇼 (George Bernard Shaw)"
        },
        {
            "ko": "경청은 관계를 회복하는 시작이다.",
            "en": "When people talk, listen completely.",
            "author": "어니스트 헤밍웨이 (Ernest Hemingway)"
        },
        {
            "ko": "신뢰는 천천히 쌓이고 빠르게 무너진다.",
            "en": "Trust is built with consistency.",
            "author": "링컨 체이피 (Lincoln Chafee)"
        }
    ],
    "봉사": [
        {
            "ko": "책임은 성숙의 다른 이름이다.",
            "en": "The price of greatness is responsibility.",
            "author": "윈스턴 처칠 (Winston Churchill)"
        },
        {
            "ko": "진실은 신뢰의 토대다.",
            "en": "Honesty is the first chapter in the book of wisdom.",
            "author": "토머스 제퍼슨 (Thomas Jefferson)"
        },
        {
            "ko": "남의 말을 끝까지 들어주는 것이 배려다.",
            "en": "Most people do not listen with the intent to understand; they listen with the intent to reply.",
            "author": "스티븐 코비 (Stephen Covey)"
        },
        {
            "ko": "공동체는 봉사로 유지된다.",
            "en": "Service to others is the rent you pay for your room here on earth.",
            "author": "무하마드 알리 (Muhammad Ali)"
        },
        {
            "ko": "신뢰는 행동으로 증명된다.",
            "en": "Trust is earned when actions meet words.",
            "author": "크리스 버틀러 (Chris Butler)"
        },
        {
            "ko": "책임 있는 자유가 진짜 자유다.",
            "en": "Liberty means responsibility.",
            "author": "조지 버나드 쇼 (George Bernard Shaw)"
        },
        {
            "ko": "경청은 관계를 회복하는 시작이다.",
            "en": "When people talk, listen completely.",
            "author": "어니스트 헤밍웨이 (Ernest Hemingway)"
        },
        {
            "ko": "신뢰는 천천히 쌓이고 빠르게 무너진다.",
            "en": "Trust is built with consistency.",
            "author": "링컨 체이피 (Lincoln Chafee)"
        },
        {
            "ko": "약속은 작게 해도 반드시 지켜라.",
            "en": "Promises must be kept and truth spoken.",
            "author": "코란 (Quran)"
        }
    ],
    "책임": [
        {
            "ko": "진실은 신뢰의 토대다.",
            "en": "Honesty is the first chapter in the book of wisdom.",
            "author": "토머스 제퍼슨 (Thomas Jefferson)"
        },
        {
            "ko": "남의 말을 끝까지 들어주는 것이 배려다.",
            "en": "Most people do not listen with the intent to understand; they listen with the intent to reply.",
            "author": "스티븐 코비 (Stephen Covey)"
        },
        {
            "ko": "공동체는 봉사로 유지된다.",
            "en": "Service to others is the rent you pay for your room here on earth.",
            "author": "무하마드 알리 (Muhammad Ali)"
        },
        {
            "ko": "신뢰는 행동으로 증명된다.",
            "en": "Trust is earned when actions meet words.",
            "author": "크리스 버틀러 (Chris Butler)"
        },
        {
            "ko": "책임 있는 자유가 진짜 자유다.",
            "en": "Liberty means responsibility.",
            "author": "조지 버나드 쇼 (George Bernard Shaw)"
        },
        {
            "ko": "경청은 관계를 회복하는 시작이다.",
            "en": "When people talk, listen completely.",
            "author": "어니스트 헤밍웨이 (Ernest Hemingway)"
        },
        {
            "ko": "신뢰는 천천히 쌓이고 빠르게 무너진다.",
            "en": "Trust is built with consistency.",
            "author": "링컨 체이피 (Lincoln Chafee)"
        },
        {
            "ko": "약속은 작게 해도 반드시 지켜라.",
            "en": "Promises must be kept and truth spoken.",
            "author": "코란 (Quran)"
        },
        {
            "ko": "경청은 사랑의 첫 번째 행동이다.",
            "en": "Listening is an act of love.",
            "author": "데이비드 아우그스버거 (David Augsburger)"
        }
    ]
};

const SYNONYM_MAP = {
    "희망": [
        "희망",
        "미래"
    ],
    "희망명언": [
        "희망"
    ],
    "희망 글귀": [
        "희망"
    ],
    "희망조언": [
        "희망"
    ],
    "사랑": [
        "사랑",
        "관계"
    ],
    "사랑명언": [
        "사랑"
    ],
    "사랑 글귀": [
        "사랑"
    ],
    "사랑조언": [
        "사랑"
    ],
    "성공": [
        "성공"
    ],
    "성공명언": [
        "성공"
    ],
    "성공 글귀": [
        "성공"
    ],
    "성공조언": [
        "성공"
    ],
    "용기": [
        "용기"
    ],
    "용기명언": [
        "용기"
    ],
    "용기 글귀": [
        "용기"
    ],
    "용기조언": [
        "용기"
    ],
    "인생": [
        "인생"
    ],
    "인생명언": [
        "인생"
    ],
    "인생 글귀": [
        "인생"
    ],
    "인생조언": [
        "인생"
    ],
    "노력": [
        "노력"
    ],
    "노력명언": [
        "노력"
    ],
    "노력 글귀": [
        "노력"
    ],
    "노력조언": [
        "노력"
    ],
    "행복": [
        "행복"
    ],
    "행복명언": [
        "행복"
    ],
    "행복 글귀": [
        "행복"
    ],
    "행복조언": [
        "행복"
    ],
    "지혜": [
        "지혜"
    ],
    "지혜명언": [
        "지혜"
    ],
    "지혜 글귀": [
        "지혜"
    ],
    "지혜조언": [
        "지혜"
    ],
    "변화": [
        "변화"
    ],
    "변화명언": [
        "변화"
    ],
    "변화 글귀": [
        "변화"
    ],
    "변화조언": [
        "변화"
    ],
    "꿈": [
        "꿈"
    ],
    "꿈명언": [
        "꿈"
    ],
    "꿈 글귀": [
        "꿈"
    ],
    "꿈조언": [
        "꿈"
    ],
    "도전": [
        "도전"
    ],
    "도전명언": [
        "도전"
    ],
    "도전 글귀": [
        "도전"
    ],
    "도전조언": [
        "도전"
    ],
    "시간": [
        "시간"
    ],
    "시간명언": [
        "시간"
    ],
    "시간 글귀": [
        "시간"
    ],
    "시간조언": [
        "시간"
    ],
    "리더십": [
        "리더십"
    ],
    "리더십명언": [
        "리더십"
    ],
    "리더십 글귀": [
        "리더십"
    ],
    "리더십조언": [
        "리더십"
    ],
    "감사": [
        "감사",
        "행복"
    ],
    "감사명언": [
        "감사"
    ],
    "감사 글귀": [
        "감사"
    ],
    "감사조언": [
        "감사"
    ],
    "자신감": [
        "자신감"
    ],
    "자신감명언": [
        "자신감"
    ],
    "자신감 글귀": [
        "자신감"
    ],
    "자신감조언": [
        "자신감"
    ],
    "인내": [
        "인내"
    ],
    "인내명언": [
        "인내"
    ],
    "인내 글귀": [
        "인내"
    ],
    "인내조언": [
        "인내"
    ],
    "우정": [
        "우정",
        "관계"
    ],
    "우정명언": [
        "우정"
    ],
    "우정 글귀": [
        "우정"
    ],
    "우정조언": [
        "우정"
    ],
    "창의성": [
        "창의성"
    ],
    "창의성명언": [
        "창의성"
    ],
    "창의성 글귀": [
        "창의성"
    ],
    "창의성조언": [
        "창의성"
    ],
    "자유": [
        "자유",
        "용기"
    ],
    "자유명언": [
        "자유"
    ],
    "자유 글귀": [
        "자유"
    ],
    "자유조언": [
        "자유"
    ],
    "겸손": [
        "겸손"
    ],
    "겸손명언": [
        "겸손"
    ],
    "겸손 글귀": [
        "겸손"
    ],
    "겸손조언": [
        "겸손"
    ],
    "돈": [
        "돈"
    ],
    "돈명언": [
        "돈"
    ],
    "돈 글귀": [
        "돈"
    ],
    "돈조언": [
        "돈"
    ],
    "여행": [
        "여행",
        "모험"
    ],
    "여행명언": [
        "여행"
    ],
    "여행 글귀": [
        "여행"
    ],
    "여행조언": [
        "여행"
    ],
    "건강": [
        "건강"
    ],
    "건강명언": [
        "건강"
    ],
    "건강 글귀": [
        "건강"
    ],
    "건강조언": [
        "건강"
    ],
    "가족": [
        "가족",
        "사랑"
    ],
    "가족명언": [
        "가족"
    ],
    "가족 글귀": [
        "가족"
    ],
    "가족조언": [
        "가족"
    ],
    "독서": [
        "독서",
        "배움"
    ],
    "독서명언": [
        "독서"
    ],
    "독서 글귀": [
        "독서"
    ],
    "독서조언": [
        "독서"
    ],
    "자연": [
        "자연"
    ],
    "자연명언": [
        "자연"
    ],
    "자연 글귀": [
        "자연"
    ],
    "자연조언": [
        "자연"
    ],
    "교육": [
        "교육"
    ],
    "교육명언": [
        "교육"
    ],
    "교육 글귀": [
        "교육"
    ],
    "교육조언": [
        "교육"
    ],
    "일": [
        "일"
    ],
    "일명언": [
        "일"
    ],
    "일 글귀": [
        "일"
    ],
    "일조언": [
        "일"
    ],
    "음악": [
        "음악"
    ],
    "음악명언": [
        "음악"
    ],
    "음악 글귀": [
        "음악"
    ],
    "음악조언": [
        "음악"
    ],
    "예술": [
        "예술"
    ],
    "예술명언": [
        "예술"
    ],
    "예술 글귀": [
        "예술"
    ],
    "예술조언": [
        "예술"
    ],
    "평화": [
        "평화"
    ],
    "평화명언": [
        "평화"
    ],
    "평화 글귀": [
        "평화"
    ],
    "평화조언": [
        "평화"
    ],
    "정의": [
        "정의"
    ],
    "정의명언": [
        "정의"
    ],
    "정의 글귀": [
        "정의"
    ],
    "정의조언": [
        "정의"
    ],
    "운동": [
        "운동"
    ],
    "운동명언": [
        "운동"
    ],
    "운동 글귀": [
        "운동"
    ],
    "운동조언": [
        "운동"
    ],
    "실패": [
        "실패"
    ],
    "실패명언": [
        "실패"
    ],
    "실패 글귀": [
        "실패"
    ],
    "실패조언": [
        "실패"
    ],
    "관계": [
        "관계"
    ],
    "관계명언": [
        "관계"
    ],
    "관계 글귀": [
        "관계"
    ],
    "관계조언": [
        "관계"
    ],
    "미래": [
        "미래"
    ],
    "미래명언": [
        "미래"
    ],
    "미래 글귀": [
        "미래"
    ],
    "미래조언": [
        "미래"
    ],
    "열정": [
        "열정"
    ],
    "열정명언": [
        "열정"
    ],
    "열정 글귀": [
        "열정"
    ],
    "열정조언": [
        "열정"
    ],
    "배움": [
        "배움"
    ],
    "배움명언": [
        "배움"
    ],
    "배움 글귀": [
        "배움"
    ],
    "배움조언": [
        "배움"
    ],
    "고독": [
        "고독"
    ],
    "고독명언": [
        "고독"
    ],
    "고독 글귀": [
        "고독"
    ],
    "고독조언": [
        "고독"
    ],
    "웃음": [
        "웃음"
    ],
    "웃음명언": [
        "웃음"
    ],
    "웃음 글귀": [
        "웃음"
    ],
    "웃음조언": [
        "웃음"
    ],
    "존경": [
        "존경"
    ],
    "존경명언": [
        "존경"
    ],
    "존경 글귀": [
        "존경"
    ],
    "존경조언": [
        "존경"
    ],
    "부자": [
        "부자"
    ],
    "부자명언": [
        "부자"
    ],
    "부자 글귀": [
        "부자"
    ],
    "부자조언": [
        "부자"
    ],
    "모험": [
        "모험"
    ],
    "모험명언": [
        "모험"
    ],
    "모험 글귀": [
        "모험"
    ],
    "모험조언": [
        "모험"
    ],
    "음식": [
        "음식"
    ],
    "음식명언": [
        "음식"
    ],
    "음식 글귀": [
        "음식"
    ],
    "음식조언": [
        "음식"
    ],
    "집중": [
        "집중"
    ],
    "집중명언": [
        "집중"
    ],
    "집중 글귀": [
        "집중"
    ],
    "집중조언": [
        "집중"
    ],
    "경영": [
        "경영"
    ],
    "경영명언": [
        "경영"
    ],
    "경영 글귀": [
        "경영"
    ],
    "경영조언": [
        "경영"
    ],
    "기업가정신": [
        "기업가정신"
    ],
    "기업가정신명언": [
        "기업가정신"
    ],
    "기업가정신 글귀": [
        "기업가정신"
    ],
    "기업가정신조언": [
        "기업가정신"
    ],
    "혁신": [
        "혁신"
    ],
    "혁신명언": [
        "혁신"
    ],
    "혁신 글귀": [
        "혁신"
    ],
    "혁신조언": [
        "혁신"
    ],
    "마케팅": [
        "마케팅"
    ],
    "마케팅명언": [
        "마케팅"
    ],
    "마케팅 글귀": [
        "마케팅"
    ],
    "마케팅조언": [
        "마케팅"
    ],
    "전략": [
        "전략"
    ],
    "전략명언": [
        "전략"
    ],
    "전략 글귀": [
        "전략"
    ],
    "전략조언": [
        "전략"
    ],
    "고객": [
        "고객"
    ],
    "고객명언": [
        "고객"
    ],
    "고객 글귀": [
        "고객"
    ],
    "고객조언": [
        "고객"
    ],
    "위로": [
        "위로"
    ],
    "위로명언": [
        "위로"
    ],
    "위로 글귀": [
        "위로"
    ],
    "위로조언": [
        "위로"
    ],
    "치유": [
        "치유"
    ],
    "치유명언": [
        "치유"
    ],
    "치유 글귀": [
        "치유"
    ],
    "치유조언": [
        "치유"
    ],
    "슬픔": [
        "슬픔"
    ],
    "슬픔명언": [
        "슬픔"
    ],
    "슬픔 글귀": [
        "슬픔"
    ],
    "슬픔조언": [
        "슬픔"
    ],
    "그리움": [
        "그리움"
    ],
    "그리움명언": [
        "그리움"
    ],
    "그리움 글귀": [
        "그리움"
    ],
    "그리움조언": [
        "그리움"
    ],
    "감동": [
        "감동"
    ],
    "감동명언": [
        "감동"
    ],
    "감동 글귀": [
        "감동"
    ],
    "감동조언": [
        "감동"
    ],
    "극복": [
        "극복"
    ],
    "극복명언": [
        "극복"
    ],
    "극복 글귀": [
        "극복"
    ],
    "극복조언": [
        "극복"
    ],
    "철학": [
        "철학",
        "지혜"
    ],
    "철학명언": [
        "철학"
    ],
    "철학 글귀": [
        "철학"
    ],
    "철학조언": [
        "철학"
    ],
    "역사": [
        "역사",
        "진리"
    ],
    "역사명언": [
        "역사"
    ],
    "역사 글귀": [
        "역사"
    ],
    "역사조언": [
        "역사"
    ],
    "문학": [
        "문학"
    ],
    "문학명언": [
        "문학"
    ],
    "문학 글귀": [
        "문학"
    ],
    "문학조언": [
        "문학"
    ],
    "진리": [
        "진리"
    ],
    "진리명언": [
        "진리"
    ],
    "진리 글귀": [
        "진리"
    ],
    "진리조언": [
        "진리"
    ],
    "인간본성": [
        "인간본성"
    ],
    "인간본성명언": [
        "인간본성"
    ],
    "인간본성 글귀": [
        "인간본성"
    ],
    "인간본성조언": [
        "인간본성"
    ],
    "자기계발": [
        "자기계발"
    ],
    "자기계발명언": [
        "자기계발"
    ],
    "자기계발 글귀": [
        "자기계발"
    ],
    "자기계발조언": [
        "자기계발"
    ],
    "습관": [
        "습관"
    ],
    "습관명언": [
        "습관"
    ],
    "습관 글귀": [
        "습관"
    ],
    "습관조언": [
        "습관"
    ],
    "마음챙김": [
        "마음챙김"
    ],
    "마음챙김명언": [
        "마음챙김"
    ],
    "마음챙김 글귀": [
        "마음챙김"
    ],
    "마음챙김조언": [
        "마음챙김"
    ],
    "목표달성": [
        "목표달성"
    ],
    "목표달성명언": [
        "목표달성"
    ],
    "목표달성 글귀": [
        "목표달성"
    ],
    "목표달성조언": [
        "목표달성"
    ],
    "회복력": [
        "회복력"
    ],
    "회복력명언": [
        "회복력"
    ],
    "회복력 글귀": [
        "회복력"
    ],
    "회복력조언": [
        "회복력"
    ],
    "스포츠": [
        "스포츠"
    ],
    "스포츠명언": [
        "스포츠"
    ],
    "스포츠 글귀": [
        "스포츠"
    ],
    "스포츠조언": [
        "스포츠"
    ],
    "과학": [
        "과학"
    ],
    "과학명언": [
        "과학"
    ],
    "과학 글귀": [
        "과학"
    ],
    "과학조언": [
        "과학"
    ],
    "명상": [
        "명상",
        "마음챙김"
    ],
    "명상명언": [
        "명상"
    ],
    "명상 글귀": [
        "명상"
    ],
    "명상조언": [
        "명상"
    ],
    "용서": [
        "용서",
        "평화"
    ],
    "용서명언": [
        "용서"
    ],
    "용서 글귀": [
        "용서"
    ],
    "용서조언": [
        "용서"
    ],
    "봄": [
        "봄"
    ],
    "봄명언": [
        "봄"
    ],
    "봄 글귀": [
        "봄"
    ],
    "봄조언": [
        "봄"
    ],
    "여름": [
        "여름"
    ],
    "여름명언": [
        "여름"
    ],
    "여름 글귀": [
        "여름"
    ],
    "여름조언": [
        "여름"
    ],
    "가을": [
        "가을"
    ],
    "가을명언": [
        "가을"
    ],
    "가을 글귀": [
        "가을"
    ],
    "가을조언": [
        "가을"
    ],
    "겨울": [
        "겨울"
    ],
    "겨울명언": [
        "겨울"
    ],
    "겨울 글귀": [
        "겨울"
    ],
    "겨울조언": [
        "겨울"
    ],
    "신뢰": [
        "신뢰"
    ],
    "신뢰명언": [
        "신뢰"
    ],
    "신뢰 글귀": [
        "신뢰"
    ],
    "신뢰조언": [
        "신뢰"
    ],
    "경청": [
        "경청",
        "관계"
    ],
    "경청명언": [
        "경청"
    ],
    "경청 글귀": [
        "경청"
    ],
    "경청조언": [
        "경청"
    ],
    "봉사": [
        "봉사"
    ],
    "봉사명언": [
        "봉사"
    ],
    "봉사 글귀": [
        "봉사"
    ],
    "봉사조언": [
        "봉사"
    ],
    "책임": [
        "책임"
    ],
    "책임명언": [
        "책임"
    ],
    "책임 글귀": [
        "책임"
    ],
    "책임조언": [
        "책임"
    ],
    "CEO": [
        "경영",
        "리더십"
    ],
    "창업": [
        "기업가정신",
        "혁신"
    ],
    "비즈니스": [
        "경영",
        "기업가정신",
        "전략"
    ],
    "브랜딩": [
        "마케팅"
    ],
    "브랜드": [
        "마케팅",
        "고객"
    ],
    "세일즈": [
        "마케팅",
        "고객"
    ],
    "고객중심": [
        "고객",
        "경청",
        "신뢰"
    ],
    "리더": [
        "리더십",
        "경영"
    ],
    "리스크": [
        "전략",
        "모험"
    ],
    "의사결정": [
        "경영",
        "전략"
    ],
    "집행": [
        "경영",
        "책임"
    ],
    "실행": [
        "목표달성",
        "집중"
    ],
    "동기부여": [
        "자기계발",
        "열정"
    ],
    "루틴": [
        "습관"
    ],
    "시스템": [
        "습관",
        "목표달성"
    ],
    "멘탈": [
        "회복력",
        "마음챙김"
    ],
    "회복탄력성": [
        "회복력",
        "극복"
    ],
    "힐링": [
        "치유",
        "위로"
    ],
    "슬럼프": [
        "치유",
        "극복"
    ],
    "상실": [
        "슬픔",
        "치유"
    ],
    "추억": [
        "그리움",
        "인생"
    ],
    "눈물": [
        "슬픔",
        "위로"
    ],
    "호흡": [
        "명상",
        "마음챙김"
    ],
    "내면": [
        "명상",
        "고독"
    ],
    "화해": [
        "용서",
        "관계"
    ],
    "자비": [
        "용서",
        "봉사"
    ],
    "신의": [
        "신뢰",
        "책임"
    ],
    "약속": [
        "신뢰",
        "책임"
    ],
    "의무": [
        "책임"
    ],
    "헌신": [
        "봉사",
        "책임"
    ],
    "나눔": [
        "봉사",
        "감사"
    ],
    "봉헌": [
        "봉사"
    ],
    "소통": [
        "경청",
        "관계"
    ],
    "공감": [
        "경청",
        "위로"
    ],
    "인문학": [
        "철학",
        "문학",
        "역사"
    ],
    "진실": [
        "진리",
        "신뢰"
    ],
    "본질": [
        "진리",
        "철학"
    ],
    "인간": [
        "인간본성",
        "철학"
    ],
    "자아": [
        "자기계발",
        "철학"
    ],
    "과학자": [
        "과학"
    ],
    "실험": [
        "과학",
        "혁신"
    ],
    "탐구": [
        "과학",
        "배움"
    ],
    "발견": [
        "과학",
        "배움"
    ],
    "운동선수": [
        "스포츠",
        "운동"
    ],
    "훈련": [
        "운동",
        "스포츠"
    ],
    "챔피언": [
        "스포츠",
        "성공"
    ],
    "승부": [
        "스포츠",
        "도전"
    ],
    "건강관리": [
        "건강",
        "운동"
    ],
    "식단": [
        "건강",
        "음식"
    ],
    "다이어트": [
        "건강",
        "운동"
    ],
    "책": [
        "독서",
        "문학"
    ],
    "학습": [
        "배움",
        "교육"
    ],
    "공부": [
        "배움",
        "교육"
    ],
    "교사": [
        "교육"
    ],
    "학생": [
        "교육",
        "배움"
    ],
    "직업": [
        "일",
        "성공"
    ],
    "커리어": [
        "일",
        "성공"
    ],
    "직장": [
        "일",
        "경영"
    ],
    "부": [
        "부자",
        "돈"
    ],
    "재테크": [
        "돈",
        "부자"
    ],
    "투자": [
        "돈",
        "부자"
    ],
    "자산": [
        "부자",
        "돈"
    ],
    "탐험": [
        "모험",
        "여행"
    ],
    "계절": [
        "봄",
        "여름",
        "가을",
        "겨울"
    ],
    "새출발": [
        "봄",
        "희망"
    ],
    "청춘": [
        "여름",
        "열정"
    ],
    "성찰": [
        "가을",
        "철학"
    ],
    "기다림": [
        "겨울",
        "인내"
    ],
    "독립": [
        "자유",
        "자신감"
    ],
    "존엄": [
        "존경",
        "자유"
    ],
    "유머": [
        "웃음",
        "행복"
    ],
    "기쁨": [
        "행복",
        "웃음"
    ],
    "비전": [
        "꿈",
        "미래"
    ],
    "목표": [
        "목표달성",
        "성공"
    ],
    "집중력": [
        "집중"
    ],
    "몰입": [
        "집중",
        "습관"
    ],
    "꾸준함": [
        "노력",
        "습관"
    ],
    "인내심": [
        "인내",
        "회복력"
    ]
};

const KEYWORD_CATEGORIES = [
    {
        "keywords": [
            "희망",
            "사랑",
            "행복",
            "감사",
            "웃음"
        ],
        "theme": "긍정 에너지"
    },
    {
        "keywords": [
            "성공",
            "노력",
            "도전",
            "인내",
            "열정"
        ],
        "theme": "성장과 도전"
    },
    {
        "keywords": [
            "경영",
            "기업가정신",
            "혁신",
            "전략",
            "고객"
        ],
        "theme": "경영과 비즈니스"
    },
    {
        "keywords": [
            "위로",
            "치유",
            "슬픔",
            "그리움",
            "감동"
        ],
        "theme": "감성과 치유"
    },
    {
        "keywords": [
            "철학",
            "역사",
            "문학",
            "진리",
            "인간본성"
        ],
        "theme": "철학과 인문"
    },
    {
        "keywords": [
            "자기계발",
            "습관",
            "목표달성",
            "회복력",
            "마음챙김"
        ],
        "theme": "자기계발"
    },
    {
        "keywords": [
            "스포츠",
            "과학",
            "명상",
            "용서",
            "봉사"
        ],
        "theme": "영감과 성찰"
    },
    {
        "keywords": [
            "봄",
            "여름",
            "가을",
            "겨울",
            "자연"
        ],
        "theme": "계절과 자연"
    },
    {
        "keywords": [
            "신뢰",
            "경청",
            "책임",
            "관계",
            "우정"
        ],
        "theme": "인간관계"
    },
    {
        "keywords": [
            "용기",
            "자신감",
            "자유",
            "변화",
            "모험"
        ],
        "theme": "용기와 변화"
    },
    {
        "keywords": [
            "인생",
            "시간",
            "지혜",
            "겸손",
            "고독"
        ],
        "theme": "삶의 지혜"
    },
    {
        "keywords": [
            "돈",
            "부자",
            "마케팅",
            "집중",
            "배움"
        ],
        "theme": "재물과 커리어"
    }
];
