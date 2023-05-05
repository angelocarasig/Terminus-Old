import { UserNovel } from './shared/models/UserNovel';

export const LOGIN_MODES: Array<string> = ['Basic', 'Auth'];

export const USER_PERMISSIONS: Array<string> = ['listread', 'listwrite'];

export enum VN_RELEASE_STATUS {
  'Unknown',
  'Pending',
  'Obtained',
  'On Loan',
  'Deleted',
}

export const VN_PROPS: Array<string> = [
  'vn.id',
  'vn.title',
  'vn.alttitle',
  'vn.titles.lang',
  'vn.titles.title',
  'vn.titles.latin',
  'vn.titles.official',
  'vn.titles.main',
  'vn.aliases',
  'vn.olang',
  'vn.devstatus',
  'vn.released',
  'vn.languages',
  'vn.platforms',
  'vn.image.id',
  'vn.image.url',
  'vn.image.dims',
  'vn.image.sexual',
  'vn.image.violence',
  'vn.image.votecount',
  'vn.length',
  'vn.length_minutes',
  'vn.length_votes',
  'vn.description',
  'vn.rating',
  'vn.popularity',
  'vn.votecount',
  'vn.screenshots.thumbnail',
  'vn.screenshots.thumbnail_dims',
  'vn.tags.rating',
  'vn.tags.spoiler',
  'vn.tags.lie',
];

export const ULIST_PROPS: Array<string> = [
  // User Novel Stuff
  'id',
  'added',
  'voted',
  'lastmod',
  'vote',
  'started',
  'finished',
  'notes',

  // Visual Novel Stuff
  ...VN_PROPS,
];

export const SAMPLE_NOVEL: Array<UserNovel> = [
    {
      notes: "RINS DEVELOPMENT IS CRAZY GOOD WTH",
      finished: null,
      added: 1642219844,
      voted: 1648558316,
      vn: {
        length_votes: 154,
        image: {
          votecount: 12,
          url: "https://s2.vndb.org/cv/17/42017.jpg",
          violence: 0,
          id: "cv42017",
          sexual: 0,
          dims: [
            251,
            350
          ]
        },
        length_minutes: 5018,
        devstatus: 0,
        tags: [
          {
            rating: 2.7428572,
            spoiler: 0,
            lie: false,
            id: "g32"
          },
          {
            lie: false,
            id: "g186",
            spoiler: 0,
            rating: 1.2173913
          },
          {
            id: "g279",
            lie: false,
            rating: 1.7777778,
            spoiler: 0
          },
          {
            rating: 2.0333333,
            spoiler: 0,
            lie: false,
            id: "g194"
          },
          {
            id: "g201",
            lie: false,
            spoiler: 0,
            rating: 2.8055556
          },
          {
            id: "g222",
            lie: false,
            spoiler: 0,
            rating: 2.8125
          },
          {
            lie: false,
            id: "g44",
            spoiler: 0,
            rating: 1.52
          },
          {
            spoiler: 0,
            rating: 2,
            id: "g681",
            lie: false
          },
          {
            id: "g1001",
            lie: false,
            spoiler: 2,
            rating: 0.33333334
          },
          {
            spoiler: 0,
            rating: 1,
            lie: false,
            id: "g599"
          },
          {
            id: "g820",
            lie: false,
            spoiler: 0,
            rating: 2.7741935
          },
          {
            rating: 1.1304348,
            spoiler: 0,
            lie: false,
            id: "g1336"
          },
          {
            rating: 2,
            spoiler: 0,
            id: "g3155",
            lie: false
          },
          {
            lie: false,
            id: "g1558",
            rating: 1.5,
            spoiler: 0
          },
          {
            lie: false,
            id: "g691",
            rating: 2.16,
            spoiler: 1
          },
          {
            spoiler: 0,
            rating: 1.5,
            lie: false,
            id: "g726"
          },
          {
            id: "g743",
            lie: false,
            spoiler: 0,
            rating: 2.4166667
          },
          {
            spoiler: 0,
            rating: 2,
            lie: false,
            id: "g631"
          },
          {
            spoiler: 0,
            rating: 2,
            lie: false,
            id: "g1581"
          },
          {
            spoiler: 1,
            rating: 2,
            lie: false,
            id: "g1472"
          },
          {
            rating: 1.7857143,
            spoiler: 1,
            lie: false,
            id: "g276"
          },
          {
            spoiler: 2,
            rating: 1.6888889,
            lie: false,
            id: "g181"
          },
          {
            id: "g151",
            lie: false,
            spoiler: 0,
            rating: 2.9069767
          },
          {
            lie: false,
            id: "g96",
            spoiler: 0,
            rating: 2.6818182
          },
          {
            rating: 2,
            spoiler: 0,
            id: "g3140",
            lie: false
          },
          {
            lie: false,
            id: "g2033",
            spoiler: 0,
            rating: 3
          },
          {
            spoiler: 0,
            rating: 2,
            lie: false,
            id: "g3415"
          },
          {
            spoiler: 0,
            rating: 2,
            id: "g1246",
            lie: false
          },
          {
            id: "g3138",
            lie: false,
            spoiler: 0,
            rating: 2
          },
          {
            lie: false,
            id: "g737",
            rating: 1.3333334,
            spoiler: 0
          },
          {
            spoiler: 0,
            rating: 2,
            id: "g1256",
            lie: false
          },
          {
            spoiler: 0,
            rating: 3,
            lie: false,
            id: "g3171"
          },
          {
            lie: false,
            id: "g461",
            spoiler: 0,
            rating: 2
          },
          {
            lie: false,
            id: "g2086",
            spoiler: 1,
            rating: 2.5
          },
          {
            id: "g195",
            lie: false,
            spoiler: 1,
            rating: 2
          },
          {
            lie: false,
            id: "g190",
            spoiler: 0,
            rating: 2.4594595
          },
          {
            lie: false,
            id: "g152",
            spoiler: 2,
            rating: 1.9473684
          },
          {
            id: "g3147",
            lie: false,
            spoiler: 0,
            rating: 2
          },
          {
            lie: false,
            id: "g1376",
            spoiler: 0,
            rating: 2.5263157
          },
          {
            rating: 2.4545455,
            spoiler: 0,
            lie: false,
            id: "g1903"
          },
          {
            id: "g497",
            lie: false,
            spoiler: 1,
            rating: 1.5
          },
          {
            id: "g876",
            lie: false,
            spoiler: 0,
            rating: 2.3333333
          },
          {
            lie: false,
            id: "g79",
            spoiler: 0,
            rating: 1.8709677
          },
          {
            id: "g133",
            lie: false,
            spoiler: 0,
            rating: 2.9333334
          },
          {
            spoiler: 0,
            rating: 2,
            lie: false,
            id: "g188"
          },
          {
            lie: false,
            id: "g111",
            spoiler: 0,
            rating: 2.1875
          },
          {
            id: "g164",
            lie: false,
            spoiler: 2,
            rating: 1.3888888
          },
          {
            id: "g633",
            lie: false,
            spoiler: 1,
            rating: 2.5757575
          },
          {
            rating: 2.9333334,
            spoiler: 0,
            lie: false,
            id: "g1403"
          },
          {
            spoiler: 0,
            rating: 3,
            id: "g1541",
            lie: false
          },
          {
            spoiler: 0,
            rating: 2.2903225,
            id: "g603",
            lie: false
          },
          {
            id: "g715",
            lie: false,
            spoiler: 0,
            rating: 1
          },
          {
            spoiler: 0,
            rating: 2.5,
            lie: false,
            id: "g1025"
          },
          {
            spoiler: 0,
            rating: 2,
            lie: false,
            id: "g756"
          },
          {
            lie: false,
            id: "g451",
            spoiler: 0,
            rating: 3
          },
          {
            lie: false,
            id: "g1165",
            spoiler: 2,
            rating: 1
          },
          {
            lie: false,
            id: "g1736",
            spoiler: 0,
            rating: 2
          },
          {
            id: "g1738",
            lie: false,
            rating: 2,
            spoiler: 0
          },
          {
            spoiler: 0,
            rating: 2,
            id: "g566",
            lie: false
          },
          {
            spoiler: 0,
            rating: 2.2857144,
            lie: false,
            id: "g272"
          },
          {
            lie: false,
            id: "g343",
            spoiler: 0,
            rating: 2.6666667
          },
          {
            rating: 2,
            spoiler: 0,
            id: "g108",
            lie: false
          },
          {
            lie: false,
            id: "g168",
            spoiler: 2,
            rating: 0.8055556
          },
          {
            lie: false,
            id: "g236",
            rating: 2.4545455,
            spoiler: 0
          },
          {
            rating: 2.8709676,
            spoiler: 0,
            lie: false,
            id: "g851"
          },
          {
            id: "g728",
            lie: false,
            spoiler: 0,
            rating: 2.6956522
          },
          {
            spoiler: 0,
            rating: 2,
            lie: false,
            id: "g1168"
          },
          {
            id: "g878",
            lie: false,
            rating: 2,
            spoiler: 0
          },
          {
            lie: false,
            id: "g811",
            spoiler: 0,
            rating: 2.9268293
          },
          {
            spoiler: 0,
            rating: 2.25,
            id: "g607",
            lie: false
          },
          {
            lie: false,
            id: "g2016",
            spoiler: 0,
            rating: 1.5
          },
          {
            lie: false,
            id: "g459",
            spoiler: 0,
            rating: 2.8
          },
          {
            id: "g2466",
            lie: false,
            spoiler: 0,
            rating: 1.25
          },
          {
            spoiler: 1,
            rating: 2,
            lie: false,
            id: "g1701"
          },
          {
            rating: 1.5384616,
            spoiler: 0,
            id: "g175",
            lie: false
          },
          {
            lie: false,
            id: "g163",
            spoiler: 1,
            rating: 2.6666667
          },
          {
            lie: false,
            id: "g176",
            spoiler: 0,
            rating: 2.7142856
          },
          {
            spoiler: 0,
            rating: 1.875,
            lie: true,
            id: "g273"
          },
          {
            lie: false,
            id: "g148",
            spoiler: 0,
            rating: 3
          },
          {
            rating: 2.590909,
            spoiler: 0,
            lie: false,
            id: "g278"
          },
          {
            lie: false,
            id: "g193",
            spoiler: 0,
            rating: 2.107143
          },
          {
            spoiler: 2,
            rating: 2.8181818,
            id: "g349",
            lie: false
          },
          {
            spoiler: 0,
            rating: 2.72,
            id: "g271",
            lie: false
          },
          {
            lie: false,
            id: "g1447",
            spoiler: 0,
            rating: 1.2666667
          },
          {
            id: "g1735",
            lie: false,
            spoiler: 0,
            rating: 2
          },
          {
            spoiler: 0,
            rating: 2,
            lie: false,
            id: "g1196"
          },
          {
            spoiler: 0,
            rating: 2.1818182,
            id: "g627",
            lie: false
          },
          {
            lie: false,
            id: "g1309",
            spoiler: 2,
            rating: 2.5
          },
          {
            id: "g710",
            lie: false,
            spoiler: 0,
            rating: 3
          },
          {
            spoiler: 0,
            rating: 1.0769231,
            id: "g530",
            lie: false
          },
          {
            spoiler: 0,
            rating: 1.5,
            lie: false,
            id: "g3159"
          },
          {
            lie: false,
            id: "g874",
            spoiler: 2,
            rating: 2
          },
          {
            lie: false,
            id: "g733",
            spoiler: 0,
            rating: 2
          },
          {
            lie: false,
            id: "g38",
            spoiler: 0,
            rating: 2
          },
          {
            lie: false,
            id: "g218",
            spoiler: 1,
            rating: 1.44
          },
          {
            spoiler: 0,
            rating: 3,
            id: "g3423",
            lie: false
          },
          {
            spoiler: 1,
            rating: 2.0769231,
            id: "g1335",
            lie: false
          },
          {
            spoiler: 0,
            rating: 2.7058823,
            id: "g774",
            lie: false
          },
          {
            spoiler: 0,
            rating: 2.75,
            lie: false,
            id: "g1234"
          },
          {
            spoiler: 0,
            rating: 2,
            id: "g1053",
            lie: false
          },
          {
            lie: false,
            id: "g2083",
            rating: 3,
            spoiler: 2
          },
          {
            spoiler: 0,
            rating: 2.625,
            id: "g454",
            lie: false
          },
          {
            rating: 1.8181819,
            spoiler: 2,
            id: "g848",
            lie: false
          },
          {
            lie: false,
            id: "g180",
            spoiler: 0,
            rating: 1.3125
          },
          {
            spoiler: 0,
            rating: 2.1944444,
            id: "g78",
            lie: false
          },
          {
            rating: 2.3703704,
            spoiler: 0,
            lie: false,
            id: "g275"
          },
          {
            rating: 1.9117647,
            spoiler: 0,
            lie: false,
            id: "g149"
          },
          {
            lie: false,
            id: "g48",
            spoiler: 0,
            rating: 2.9534883
          },
          {
            lie: false,
            id: "g553",
            spoiler: 2,
            rating: 1.75
          },
          {
            spoiler: 0,
            rating: 2.7272727,
            id: "g1005",
            lie: false
          },
          {
            id: "g839",
            lie: false,
            spoiler: 0,
            rating: 2.34375
          },
          {
            id: "g355",
            lie: false,
            spoiler: 0,
            rating: 1
          },
          {
            spoiler: 0,
            rating: 2,
            lie: false,
            id: "g3204"
          },
          {
            spoiler: 0,
            rating: 2,
            id: "g1393",
            lie: false
          },
          {
            id: "g3600",
            lie: false,
            spoiler: 0,
            rating: 2.5
          },
          {
            spoiler: 2,
            rating: 2,
            lie: false,
            id: "g2542"
          },
          {
            lie: false,
            id: "g3437",
            spoiler: 0,
            rating: 2.5
          },
          {
            lie: false,
            id: "g3172",
            spoiler: 0,
            rating: 2
          },
          {
            spoiler: 1,
            rating: 2,
            id: "g1188",
            lie: false
          },
          {
            spoiler: 0,
            rating: 3,
            id: "g2159",
            lie: false
          },
          {
            spoiler: 0,
            rating: 3,
            lie: false,
            id: "g1251"
          },
          {
            spoiler: 0,
            rating: 2.310345,
            lie: false,
            id: "g883"
          },
          {
            lie: false,
            id: "g258",
            rating: 2.825,
            spoiler: 0
          },
          {
            id: "g389",
            lie: false,
            spoiler: 0,
            rating: 2.5
          },
          {
            spoiler: 0,
            rating: 2.825,
            id: "g147",
            lie: false
          },
          {
            spoiler: 0,
            rating: 1.5,
            id: "g2252",
            lie: false
          },
          {
            spoiler: 0,
            rating: 0.8181818,
            lie: false,
            id: "g964"
          },
          {
            spoiler: 0,
            rating: 1.7674419,
            id: "g154",
            lie: false
          },
          {
            lie: false,
            id: "g676",
            spoiler: 0,
            rating: 2.5714285
          },
          {
            spoiler: 0,
            rating: 1.5,
            lie: false,
            id: "g215"
          },
          {
            spoiler: 1,
            rating: 1.5454545,
            id: "g2",
            lie: false
          },
          {
            lie: false,
            id: "g570",
            rating: 2.5142858,
            spoiler: 0
          },
          {
            spoiler: 0,
            rating: 2.5882354,
            lie: false,
            id: "g1646"
          },
          {
            spoiler: 0,
            rating: 2.368421,
            lie: false,
            id: "g522"
          },
          {
            spoiler: 0,
            rating: 2.5,
            id: "g1642",
            lie: false
          },
          {
            id: "g677",
            lie: false,
            rating: 2.7428572,
            spoiler: 0
          },
          {
            id: "g450",
            lie: false,
            spoiler: 0,
            rating: 2.6774194
          },
          {
            spoiler: 0,
            rating: 0.33333334,
            lie: false,
            id: "g12"
          },
          {
            rating: 2,
            spoiler: 0,
            id: "g3326",
            lie: false
          },
          {
            id: "g1184",
            lie: false,
            spoiler: 0,
            rating: 2
          },
          {
            spoiler: 0,
            rating: 1.5,
            lie: false,
            id: "g875"
          },
          {
            lie: false,
            id: "g274",
            spoiler: 0,
            rating: 0.05882353
          },
          {
            lie: false,
            id: "g3108",
            spoiler: 0,
            rating: 2
          },
          {
            lie: false,
            id: "g596",
            rating: 2.8888888,
            spoiler: 0
          },
          {
            id: "g3109",
            lie: false,
            spoiler: 0,
            rating: 2
          },
          {
            id: "g1373",
            lie: false,
            spoiler: 0,
            rating: 1.4
          },
          {
            lie: false,
            id: "g250",
            rating: 2.5641026,
            spoiler: 2
          },
          {
            spoiler: 0,
            rating: 2.096774,
            lie: false,
            id: "g1178"
          }
        ],
        rating: 85.9,
        description: "Riki was a child when his parents died, leaving him hopeless and depressed. What saved him was a group of four kids calling themselves the Little Busters. They took Riki out and played with him during his time of need. He really enjoyed being together with them, and his grief gradually faded away. Now in his second year of high school they still hang out, fight and live together, and enjoy their school life.\n\nLittle Busters! contains several mini-games, including a baseball practice game and a duel battle system.",
        title: "Little Busters!",
        olang: "ja",
        screenshots: [
          {
            thumbnail: "https://s2.vndb.org/st/10/310.jpg",
            thumbnail_dims: [
              136,
              102
            ]
          },
          {
            thumbnail: "https://s2.vndb.org/st/11/311.jpg",
            thumbnail_dims: [
              136,
              102
            ]
          },
          {
            thumbnail: "https://s2.vndb.org/st/46/346.jpg",
            thumbnail_dims: [
              136,
              102
            ]
          },
          {
            thumbnail: "https://s2.vndb.org/st/54/554.jpg",
            thumbnail_dims: [
              136,
              102
            ]
          },
          {
            thumbnail_dims: [
              136,
              102
            ],
            thumbnail: "https://s2.vndb.org/st/47/1147.jpg"
          },
          {
            thumbnail: "https://s2.vndb.org/st/48/1148.jpg",
            thumbnail_dims: [
              136,
              102
            ]
          },
          {
            thumbnail_dims: [
              136,
              102
            ],
            thumbnail: "https://s2.vndb.org/st/03/27103.jpg"
          },
          {
            thumbnail: "https://s2.vndb.org/st/04/27104.jpg",
            thumbnail_dims: [
              136,
              102
            ]
          },
          {
            thumbnail_dims: [
              136,
              102
            ],
            thumbnail: "https://s2.vndb.org/st/05/27105.jpg"
          },
          {
            thumbnail: "https://s2.vndb.org/st/98/121098.jpg",
            thumbnail_dims: [
              136,
              77
            ]
          }
        ],
        languages: [
          "en",
          "es",
          "ja",
          "ko",
          "pt-br",
          "ru",
          "zh-Hans"
        ],
        aliases: [
          "LB!",
          "リトバス！",
          "ritobasu",
          "LB-EX"
        ],
        released: "2007-07-27",
        alttitle: "リトルバスターズ！",
        platforms: [
          "win",
          "and",
          "psp",
          "ps2",
          "ps3",
          "psv",
          "swi"
        ],
        titles: [
          {
            latin: null,
            official: true,
            lang: "en",
            main: false,
            title: "Little Busters!"
          },
          {
            main: false,
            title: "Little Busters!",
            lang: "es",
            latin: null,
            official: false
          },
          {
            lang: "ja",
            title: "リトルバスターズ！",
            main: true,
            official: true,
            latin: "Little Busters!"
          },
          {
            lang: "ko",
            main: false,
            title: "리틀 버스터즈!",
            official: false,
            latin: "Little Busters!"
          },
          {
            latin: "Malen'kie prokazniki!",
            official: false,
            title: "Маленькие проказники!",
            main: false,
            lang: "ru"
          }
        ],
        length: 5,
        popularity: 57.45,
        votecount: 7366
      },
      id: "v5",
      vote: 90,
      started: null,
      lastmod: 1648558336
    },
    {
      lastmod: 1665840699,
      started: null,
      vote: 90,
      id: "v24",
      vn: {
        platforms: [
          "win",
          "lin",
          "mac",
          "ios",
          "and",
          "psp",
          "ps3",
          "ps4",
          "swi",
          "vnd",
          "web"
        ],
        alttitle: "うみねこのなく頃に",
        aliases: [
          "When They Cry 3",
          "When The Seagulls Cry"
        ],
        released: "2007-08-17",
        screenshots: [
          {
            thumbnail_dims: [
              136,
              102
            ],
            thumbnail: "https://s2.vndb.org/st/58/2658.jpg"
          },
          {
            thumbnail: "https://s2.vndb.org/st/60/2660.jpg",
            thumbnail_dims: [
              136,
              102
            ]
          },
          {
            thumbnail: "https://s2.vndb.org/st/03/118303.jpg",
            thumbnail_dims: [
              136,
              102
            ]
          },
          {
            thumbnail_dims: [
              136,
              77
            ],
            thumbnail: "https://s2.vndb.org/st/53/118553.jpg"
          },
          {
            thumbnail_dims: [
              136,
              77
            ],
            thumbnail: "https://s2.vndb.org/st/74/118674.jpg"
          },
          {
            thumbnail: "https://s2.vndb.org/st/82/118682.jpg",
            thumbnail_dims: [
              136,
              77
            ]
          },
          {
            thumbnail: "https://s2.vndb.org/st/00/119300.jpg",
            thumbnail_dims: [
              136,
              77
            ]
          },
          {
            thumbnail_dims: [
              136,
              77
            ],
            thumbnail: "https://s2.vndb.org/st/02/119302.jpg"
          },
          {
            thumbnail: "https://s2.vndb.org/st/11/157311.jpg",
            thumbnail_dims: [
              136,
              77
            ]
          }
        ],
        languages: [
          "en",
          "es",
          "fr",
          "it",
          "ja",
          "ko",
          "pt-br",
          "ru",
          "tr",
          "uk",
          "zh-Hans",
          "zh-Hant"
        ],
        votecount: 9154,
        popularity: 66.41,
        titles: [
          {
            main: false,
            title: "Umineko When They Cry - Question Arcs",
            lang: "en",
            official: true,
            latin: null
          },
          {
            title: "うみねこのなく頃に",
            main: true,
            lang: "ja",
            latin: "Umineko no Naku Koro ni",
            official: true
          },
          {
            title: "Когда плачут чайки",
            main: false,
            lang: "ru",
            official: true,
            latin: null
          },
          {
            official: false,
            latin: "Haimao Mingqi zhi Shi",
            title: "海猫鸣泣之时",
            main: false,
            lang: "zh-Hans"
          }
        ],
        length: 5,
        olang: "ja",
        title: "Umineko no Naku Koro ni",
        description: "Umineko no Naku Koro ni takes place in 1986 on October 4 and 5 on a secluded island called Rokkenjima (六軒島). The head of a wealthy family named [url=/c200]Ushiromiya Kinzou[/url], who lives on and owns Rokkenjima, is near death, and eleven of his family members arrive on the island to discuss how Kinzou's assets will be divided once he is dead. Also on the island are five of Kinzou's servants and his physician. After the eleven family members arrive, a typhoon traps them on the island and shortly after, people get mysteriously murdered.\n\n[Edited from [url=http://witch-hunt.com/]The Witch Hunt[/url]]",
        rating: 88.3,
        length_minutes: 4560,
        image: {
          url: "https://s2.vndb.org/cv/76/26976.jpg",
          votecount: 12,
          dims: [
            256,
            361
          ],
          sexual: 0,
          id: "cv26976",
          violence: 0
        },
        tags: [
          {
            spoiler: 0,
            rating: 3,
            id: "g2",
            lie: false
          },
          {
            lie: false,
            id: "g32",
            spoiler: 0,
            rating: 2.8
          },
          {
            lie: false,
            id: "g4",
            spoiler: 1,
            rating: 2.7727273
          },
          {
            spoiler: 1,
            rating: 2.6341465,
            lie: false,
            id: "g8"
          },
          {
            spoiler: 0,
            rating: 1.4888889,
            lie: false,
            id: "g7"
          },
          {
            id: "g157",
            lie: false,
            rating: 2.5641026,
            spoiler: 0
          },
          {
            id: "g164",
            lie: false,
            rating: 1.3181819,
            spoiler: 1
          },
          {
            spoiler: 0,
            rating: 3,
            id: "g325",
            lie: false
          },
          {
            id: "g133",
            lie: false,
            spoiler: 0,
            rating: 2.5555556
          },
          {
            rating: 3,
            spoiler: 0,
            lie: false,
            id: "g153"
          },
          {
            id: "g2390",
            lie: false,
            spoiler: 1,
            rating: 2
          },
          {
            lie: false,
            id: "g603",
            spoiler: 1,
            rating: 0.09090909
          },
          {
            rating: 2.75,
            spoiler: 2,
            lie: false,
            id: "g2765"
          },
          {
            lie: false,
            id: "g1252",
            spoiler: 2,
            rating: 2.0769231
          },
          {
            spoiler: 0,
            rating: 2,
            lie: false,
            id: "g2967"
          },
          {
            id: "g824",
            lie: false,
            spoiler: 1,
            rating: 1.4444444
          },
          {
            id: "g2150",
            lie: false,
            spoiler: 2,
            rating: 0.44444445
          },
          {
            spoiler: 0,
            rating: 2.5,
            lie: false,
            id: "g324"
          },
          {
            spoiler: 2,
            rating: 2.5681818,
            id: "g250",
            lie: false
          },
          {
            lie: false,
            id: "g1759",
            spoiler: 0,
            rating: 2
          },
          {
            lie: false,
            id: "g1154",
            spoiler: 0,
            rating: 2.7222223
          },
          {
            rating: 1.3571428,
            spoiler: 0,
            id: "g771",
            lie: false
          },
          {
            lie: false,
            id: "g3608",
            rating: 3,
            spoiler: 0
          },
          {
            spoiler: 0,
            rating: 2.4848485,
            lie: false,
            id: "g433"
          },
          {
            lie: false,
            id: "g874",
            spoiler: 2,
            rating: 1.9130435
          },
          {
            spoiler: 0,
            rating: 1.9,
            id: "g676",
            lie: false
          },
          {
            spoiler: 0,
            rating: 2.2333333,
            lie: false,
            id: "g1173"
          },
          {
            lie: false,
            id: "g795",
            spoiler: 0,
            rating: 2.2857144
          },
          {
            spoiler: 0,
            rating: 2.6666667,
            lie: false,
            id: "g598"
          },
          {
            rating: 2.6,
            spoiler: 0,
            id: "g789",
            lie: false
          },
          {
            lie: false,
            id: "g2542",
            rating: 1.8571428,
            spoiler: 0
          },
          {
            lie: false,
            id: "g3401",
            spoiler: 1,
            rating: 2.75
          },
          {
            spoiler: 2,
            rating: 2.2432432,
            lie: false,
            id: "g691"
          },
          {
            id: "g2616",
            lie: false,
            spoiler: 0,
            rating: 3
          },
          {
            id: "g728",
            lie: false,
            rating: 2.7631578,
            spoiler: 0
          },
          {
            lie: false,
            id: "g709",
            spoiler: 0,
            rating: 2.9268293
          },
          {
            id: "g1889",
            lie: false,
            spoiler: 0,
            rating: 2.7058823
          },
          {
            id: "g3322",
            lie: false,
            spoiler: 0,
            rating: 2.3333333
          },
          {
            id: "g309",
            lie: false,
            spoiler: 0,
            rating: 2.8636363
          },
          {
            id: "g136",
            lie: false,
            spoiler: 0,
            rating: 2.2432432
          },
          {
            rating: 2.0277777,
            spoiler: 1,
            id: "g80",
            lie: false
          },
          {
            spoiler: 2,
            rating: 3,
            lie: false,
            id: "g333"
          },
          {
            rating: 2.952381,
            spoiler: 0,
            id: "g146",
            lie: false
          },
          {
            id: "g633",
            lie: false,
            spoiler: 0,
            rating: 1.25
          },
          {
            spoiler: 2,
            rating: 2.6764705,
            lie: false,
            id: "g848"
          },
          {
            spoiler: 1,
            rating: 2,
            lie: false,
            id: "g1789"
          },
          {
            rating: 1.3888888,
            spoiler: 0,
            lie: false,
            id: "g1624"
          },
          {
            lie: false,
            id: "g1398",
            spoiler: 1,
            rating: 2.2
          },
          {
            spoiler: 0,
            rating: 3,
            id: "g3005",
            lie: false
          },
          {
            spoiler: 0,
            rating: 3,
            id: "g617",
            lie: false
          },
          {
            spoiler: 0,
            rating: 1.0526316,
            id: "g158",
            lie: false
          },
          {
            id: "g293",
            lie: false,
            spoiler: 1,
            rating: 2.8043478
          },
          {
            spoiler: 0,
            rating: 2.6666667,
            lie: false,
            id: "g135"
          },
          {
            spoiler: 1,
            rating: 1.4210526,
            id: "g163",
            lie: false
          },
          {
            rating: 1.7333333,
            spoiler: 1,
            lie: false,
            id: "g96"
          },
          {
            spoiler: 0,
            rating: 2.8444445,
            id: "g235",
            lie: false
          },
          {
            id: "g1001",
            lie: false,
            spoiler: 2,
            rating: 2.7586207
          },
          {
            id: "g741",
            lie: false,
            spoiler: 0,
            rating: 2.55
          },
          {
            spoiler: 1,
            rating: 1.25,
            id: "g580",
            lie: false
          },
          {
            id: "g614",
            lie: false,
            rating: 1,
            spoiler: 0
          },
          {
            lie: false,
            id: "g852",
            spoiler: 0,
            rating: 1.6666666
          },
          {
            spoiler: 0,
            rating: 2.4285715,
            id: "g1903",
            lie: false
          },
          {
            rating: 2.8181818,
            spoiler: 1,
            lie: false,
            id: "g1431"
          },
          {
            lie: false,
            id: "g1646",
            spoiler: 0,
            rating: 2.4545455
          },
          {
            lie: false,
            id: "g1097",
            spoiler: 1,
            rating: 2.724138
          },
          {
            spoiler: 0,
            rating: 2.392857,
            id: "g218",
            lie: false
          },
          {
            spoiler: 2,
            rating: 2.8,
            lie: false,
            id: "g349"
          },
          {
            id: "g43",
            lie: false,
            rating: 2.878049,
            spoiler: 0
          },
          {
            lie: false,
            id: "g779",
            spoiler: 2,
            rating: 2.974359
          },
          {
            spoiler: 0,
            rating: 1.125,
            lie: false,
            id: "g1195"
          },
          {
            id: "g902",
            lie: false,
            spoiler: 0,
            rating: 1.4
          },
          {
            lie: false,
            id: "g993",
            spoiler: 0,
            rating: 2
          },
          {
            spoiler: 1,
            rating: 2.8,
            id: "g1059",
            lie: false
          },
          {
            rating: 3,
            spoiler: 0,
            id: "g1564",
            lie: false
          },
          {
            spoiler: 2,
            rating: 2.5,
            lie: false,
            id: "g481"
          },
          {
            id: "g3137",
            lie: false,
            spoiler: 1,
            rating: 2
          },
          {
            lie: false,
            id: "g1856",
            spoiler: 0,
            rating: 2.8333333
          },
          {
            rating: 2.6666667,
            spoiler: 0,
            lie: false,
            id: "g873"
          },
          {
            id: "g323",
            lie: false,
            rating: 2.7777777,
            spoiler: 0
          },
          {
            id: "g147",
            lie: false,
            spoiler: 0,
            rating: 2.425
          },
          {
            spoiler: 0,
            rating: 2,
            lie: false,
            id: "g1464"
          },
          {
            spoiler: 0,
            rating: 2.75,
            id: "g692",
            lie: false
          },
          {
            spoiler: 1,
            rating: 2.75,
            id: "g488",
            lie: false
          },
          {
            rating: 2,
            spoiler: 0,
            id: "g851",
            lie: false
          },
          {
            spoiler: 0,
            rating: 2.3181818,
            id: "g1246",
            lie: false
          },
          {
            spoiler: 2,
            rating: 3,
            lie: false,
            id: "g252"
          },
          {
            spoiler: 0,
            rating: 2.3777778,
            lie: false,
            id: "g160"
          },
          {
            spoiler: 1,
            rating: 1.6944444,
            lie: false,
            id: "g63"
          },
          {
            id: "g215",
            lie: false,
            spoiler: 0,
            rating: 2.8043478
          },
          {
            spoiler: 1,
            rating: 1.5945946,
            id: "g36",
            lie: false
          },
          {
            lie: false,
            id: "g145",
            spoiler: 0,
            rating: 2.675
          },
          {
            rating: 2.2307692,
            spoiler: 1,
            lie: false,
            id: "g1004"
          },
          {
            lie: false,
            id: "g2147",
            spoiler: 2,
            rating: 1.5
          },
          {
            id: "g2440",
            lie: false,
            rating: 1.75,
            spoiler: 0
          },
          {
            rating: 2.0232558,
            spoiler: 0,
            id: "g469",
            lie: false
          },
          {
            lie: false,
            id: "g159",
            spoiler: 0,
            rating: 2.6410255
          },
          {
            id: "g112",
            lie: false,
            rating: 1.6969697,
            spoiler: 0
          },
          {
            id: "g172",
            lie: false,
            rating: 1,
            spoiler: 0
          },
          {
            rating: 2.8181818,
            spoiler: 0,
            id: "g424",
            lie: false
          },
          {
            id: "g980",
            lie: false,
            spoiler: 2,
            rating: 2.7058823
          },
          {
            rating: 2.142857,
            spoiler: 1,
            lie: false,
            id: "g2441"
          },
          {
            spoiler: 1,
            rating: 2,
            lie: false,
            id: "g2133"
          },
          {
            spoiler: 0,
            rating: 1.5909091,
            id: "g1299",
            lie: false
          },
          {
            spoiler: 0,
            rating: 1.625,
            id: "g373",
            lie: false
          },
          {
            id: "g2071",
            lie: false,
            rating: 2,
            spoiler: 0
          }
        ],
        devstatus: 0,
        length_votes: 334
      },
      voted: 1634273062,
      added: 1569731921,
      finished: null,
      notes: "when 6 people die in a single night but the soundtrack is bumpin"
    },
    {
      lastmod: 1665853071,
      started: null,
      vote: null,
      voted: null,
      vn: {
        title: "AIR",
        olang: "ja",
        description: "Kunisaki Yukito's deceased mother left him with the doll and her last wish that Yukito look for the \"girl in the skies\" because it is his destiny to save her. Only half-understanding what his mother meant, Yukito has been traveling across Japan, vainly searching for this myth-like girl his mother told him about. His latest destination is a small, sleepy town where summer has just arrived; and his encounter with a young girl named Misuzu there sets the wheels of destiny turning....\n\n[From [url=http://www.freetype.net/reviews/review.php?sid=00,000119,20010430]FREETYPE[/url]]",
        rating: 76.6,
        votecount: 1841,
        popularity: 14.81,
        length: 3,
        titles: [
          {
            official: false,
            latin: null,
            main: false,
            title: "AIR",
            lang: "en"
          },
          {
            lang: "es",
            title: "AIR",
            main: false,
            latin: null,
            official: false
          },
          {
            main: true,
            title: "AIR",
            lang: "ja",
            latin: null,
            official: true
          },
          {
            main: false,
            title: "Air",
            lang: "ko",
            latin: null,
            official: false
          },
          {
            lang: "ru",
            title: "Высь",
            main: false,
            latin: "Vys'",
            official: false
          },
          {
            lang: "zh-Hans",
            main: false,
            title: "AIR",
            latin: null,
            official: false
          }
        ],
        alttitle: null,
        platforms: [
          "win",
          "ios",
          "and",
          "gba",
          "gbc",
          "psp",
          "ps2",
          "psv",
          "drc",
          "swi",
          "mob"
        ],
        released: "2000-09-08",
        aliases: [],
        screenshots: [
          {
            thumbnail_dims: [
              136,
              102
            ],
            thumbnail: "https://s2.vndb.org/st/24/6824.jpg"
          },
          {
            thumbnail: "https://s2.vndb.org/st/27/6827.jpg",
            thumbnail_dims: [
              136,
              102
            ]
          },
          {
            thumbnail: "https://s2.vndb.org/st/29/6829.jpg",
            thumbnail_dims: [
              136,
              102
            ]
          },
          {
            thumbnail: "https://s2.vndb.org/st/30/6830.jpg",
            thumbnail_dims: [
              136,
              102
            ]
          },
          {
            thumbnail_dims: [
              136,
              102
            ],
            thumbnail: "https://s2.vndb.org/st/31/6831.jpg"
          },
          {
            thumbnail_dims: [
              136,
              102
            ],
            thumbnail: "https://s2.vndb.org/st/32/6832.jpg"
          },
          {
            thumbnail_dims: [
              136,
              102
            ],
            thumbnail: "https://s2.vndb.org/st/82/9082.jpg"
          },
          {
            thumbnail: "https://s2.vndb.org/st/46/97646.jpg",
            thumbnail_dims: [
              136,
              77
            ]
          },
          {
            thumbnail: "https://s2.vndb.org/st/49/112049.jpg",
            thumbnail_dims: [
              136,
              77
            ]
          },
          {
            thumbnail_dims: [
              136,
              77
            ],
            thumbnail: "https://s2.vndb.org/st/97/154897.jpg"
          }
        ],
        languages: [
          "en",
          "es",
          "ja",
          "ko",
          "ru",
          "zh-Hans"
        ],
        length_votes: 60,
        tags: [
          {
            spoiler: 1,
            rating: 1.75,
            lie: false,
            id: "g4"
          },
          {
            lie: false,
            id: "g32",
            spoiler: 0,
            rating: 2.3076923
          },
          {
            spoiler: 0,
            rating: 2.2,
            lie: false,
            id: "g222"
          },
          {
            lie: false,
            id: "g96",
            spoiler: 0,
            rating: 2.235294
          },
          {
            lie: false,
            id: "g2117",
            spoiler: 0,
            rating: 2.5
          },
          {
            id: "g878",
            lie: false,
            spoiler: 0,
            rating: 2
          },
          {
            lie: false,
            id: "g281",
            spoiler: 2,
            rating: 2.6153846
          },
          {
            lie: false,
            id: "g141",
            rating: 2.0769231,
            spoiler: 1
          },
          {
            spoiler: 2,
            rating: 2,
            id: "g633",
            lie: false
          },
          {
            rating: 2.5,
            spoiler: 2,
            lie: false,
            id: "g2093"
          },
          {
            spoiler: 2,
            rating: 2.5,
            id: "g1591",
            lie: false
          },
          {
            id: "g933",
            lie: false,
            spoiler: 0,
            rating: 1.6
          },
          {
            id: "g677",
            lie: false,
            spoiler: 0,
            rating: 1.6666666
          },
          {
            lie: false,
            id: "g2147",
            spoiler: 2,
            rating: 3
          },
          {
            lie: false,
            id: "g170",
            spoiler: 2,
            rating: 0.6666667
          },
          {
            lie: false,
            id: "g282",
            rating: 2.6875,
            spoiler: 2
          },
          {
            spoiler: 0,
            rating: 3,
            lie: false,
            id: "g133"
          },
          {
            rating: 1.1428572,
            spoiler: 0,
            id: "g1035",
            lie: false
          },
          {
            lie: false,
            id: "g553",
            rating: 2,
            spoiler: 1
          },
          {
            spoiler: 0,
            rating: 2,
            id: "g2387",
            lie: false
          },
          {
            spoiler: 2,
            rating: 3,
            id: "g980",
            lie: false
          },
          {
            spoiler: 1,
            rating: 2.5,
            lie: false,
            id: "g756"
          },
          {
            id: "g432",
            lie: false,
            spoiler: 2,
            rating: 2.8125
          },
          {
            spoiler: 2,
            rating: 2.5,
            id: "g548",
            lie: false
          },
          {
            spoiler: 0,
            rating: 0.42857143,
            lie: false,
            id: "g786"
          },
          {
            lie: false,
            id: "g1510",
            spoiler: 0,
            rating: 2.4
          },
          {
            lie: false,
            id: "g136",
            rating: 2,
            spoiler: 1
          },
          {
            id: "g148",
            lie: false,
            spoiler: 0,
            rating: 2.5
          },
          {
            lie: false,
            id: "g1111",
            spoiler: 0,
            rating: 2.8333333
          },
          {
            spoiler: 0,
            rating: 3,
            id: "g3172",
            lie: false
          },
          {
            spoiler: 0,
            rating: 2.8666666,
            lie: false,
            id: "g1005"
          },
          {
            lie: false,
            id: "g681",
            spoiler: 0,
            rating: 1.8
          },
          {
            spoiler: 1,
            rating: 3,
            lie: false,
            id: "g1309"
          },
          {
            id: "g775",
            lie: false,
            rating: 2.6666667,
            spoiler: 0
          },
          {
            rating: 2,
            spoiler: 0,
            id: "g2461",
            lie: false
          },
          {
            lie: false,
            id: "g676",
            spoiler: 0,
            rating: 2.1666667
          },
          {
            spoiler: 2,
            rating: 2.5625,
            lie: false,
            id: "g848"
          },
          {
            spoiler: 0,
            rating: 1.6,
            lie: false,
            id: "g1212"
          },
          {
            spoiler: 0,
            rating: 3,
            id: "g181",
            lie: false
          },
          {
            rating: 2.1875,
            spoiler: 0,
            id: "g236",
            lie: false
          },
          {
            rating: 2.625,
            spoiler: 0,
            lie: false,
            id: "g173"
          },
          {
            lie: false,
            id: "g373",
            spoiler: 0,
            rating: 2.6363637
          },
          {
            spoiler: 0,
            rating: 2.9,
            id: "g760",
            lie: false
          },
          {
            lie: false,
            id: "g966",
            rating: 2.6666667,
            spoiler: 2
          },
          {
            lie: false,
            id: "g494",
            spoiler: 2,
            rating: 2
          },
          {
            spoiler: 0,
            rating: 2.8,
            id: "g1025",
            lie: false
          },
          {
            id: "g420",
            lie: false,
            spoiler: 0,
            rating: 2.5
          },
          {
            lie: false,
            id: "g3171",
            spoiler: 0,
            rating: 3
          },
          {
            lie: false,
            id: "g149",
            rating: 2.6666667,
            spoiler: 0
          },
          {
            spoiler: 1,
            rating: 1.9230769,
            lie: false,
            id: "g152"
          },
          {
            lie: false,
            id: "g203",
            spoiler: 0,
            rating: 3
          },
          {
            id: "g215",
            lie: false,
            spoiler: 0,
            rating: 2.75
          },
          {
            spoiler: 0,
            rating: 2,
            id: "g195",
            lie: false
          },
          {
            lie: false,
            id: "g598",
            rating: 2,
            spoiler: 0
          },
          {
            id: "g596",
            lie: false,
            rating: 2.8333333,
            spoiler: 0
          },
          {
            spoiler: 0,
            rating: 2,
            lie: false,
            id: "g851"
          },
          {
            id: "g733",
            lie: false,
            rating: 2,
            spoiler: 0
          },
          {
            lie: false,
            id: "g454",
            spoiler: 0,
            rating: 2.5
          },
          {
            id: "g820",
            lie: false,
            spoiler: 0,
            rating: 2.8333333
          },
          {
            id: "g550",
            lie: false,
            spoiler: 0,
            rating: 2.5
          },
          {
            id: "g876",
            lie: false,
            rating: 1.5,
            spoiler: 1
          },
          {
            rating: 2.090909,
            spoiler: 2,
            id: "g872",
            lie: false
          },
          {
            spoiler: 0,
            rating: 1.7142857,
            lie: false,
            id: "g279"
          },
          {
            id: "g135",
            lie: false,
            spoiler: 0,
            rating: 2.8
          },
          {
            spoiler: 1,
            rating: 1.5,
            id: "g2293",
            lie: false
          },
          {
            spoiler: 0,
            rating: 2.875,
            id: "g459",
            lie: false
          },
          {
            lie: false,
            id: "g728",
            spoiler: 0,
            rating: 2.4375
          },
          {
            id: "g606",
            lie: false,
            spoiler: 0,
            rating: 2.6666667
          },
          {
            rating: 2.857143,
            spoiler: 0,
            id: "g1646",
            lie: false
          },
          {
            spoiler: 2,
            rating: 2.0769231,
            id: "g346",
            lie: false
          },
          {
            spoiler: 0,
            rating: 1.5,
            id: "g1735",
            lie: false
          }
        ],
        devstatus: 0,
        length_minutes: 1710,
        image: {
          votecount: 12,
          url: "https://s2.vndb.org/cv/53/24253.jpg",
          id: "cv24253",
          violence: 0,
          sexual: 0,
          dims: [
            256,
            374
          ]
        }
      },
      id: "v36",
      notes: null,
      added: 1665853065,
      finished: null
    },
    {
      notes: null,
      added: 1569731994,
      finished: null,
      vn: {
        length_votes: 30,
        devstatus: 0,
        tags: [
          {
            id: "g32",
            lie: false,
            spoiler: 0,
            rating: 2.7692308
          },
          {
            rating: 2.2142856,
            spoiler: 1,
            id: "g8",
            lie: false
          },
          {
            spoiler: 0,
            rating: 2.6153846,
            lie: false,
            id: "g23"
          },
          {
            spoiler: 0,
            rating: 1.6190476,
            lie: false,
            id: "g154"
          },
          {
            spoiler: 0,
            rating: 2.4390244,
            lie: false,
            id: "g180"
          },
          {
            rating: 1,
            spoiler: 0,
            id: "g750",
            lie: false
          },
          {
            id: "g580",
            lie: false,
            spoiler: 0,
            rating: 1.5172414
          },
          {
            id: "g254",
            lie: false,
            spoiler: 0,
            rating: 1.6153846
          },
          {
            lie: false,
            id: "g173",
            spoiler: 0,
            rating: 1
          },
          {
            id: "g148",
            lie: false,
            spoiler: 0,
            rating: 2.8235295
          },
          {
            lie: false,
            id: "g728",
            spoiler: 0,
            rating: 2.4
          },
          {
            spoiler: 0,
            rating: 2,
            id: "g3159",
            lie: false
          },
          {
            lie: false,
            id: "g876",
            rating: 2,
            spoiler: 0
          },
          {
            rating: 2.8947368,
            spoiler: 0,
            lie: false,
            id: "g453"
          },
          {
            lie: false,
            id: "g3171",
            spoiler: 0,
            rating: 3
          },
          {
            spoiler: 0,
            rating: 1.8181819,
            lie: false,
            id: "g215"
          },
          {
            id: "g257",
            lie: false,
            spoiler: 0,
            rating: 2.511628
          },
          {
            id: "g1829",
            lie: false,
            spoiler: 0,
            rating: 1.1666666
          },
          {
            lie: false,
            id: "g1214",
            spoiler: 1,
            rating: 2
          },
          {
            id: "g1689",
            lie: false,
            spoiler: 0,
            rating: 1.5
          },
          {
            id: "g1735",
            lie: false,
            spoiler: 0,
            rating: 1.875
          },
          {
            id: "g920",
            lie: false,
            spoiler: 0,
            rating: 2.6666667
          },
          {
            spoiler: 0,
            rating: 1.32,
            id: "g760",
            lie: false
          },
          {
            rating: 2.6511629,
            spoiler: 0,
            lie: false,
            id: "g48"
          },
          {
            rating: 2.682927,
            spoiler: 0,
            lie: false,
            id: "g169"
          },
          {
            rating: 2.6153846,
            spoiler: 0,
            lie: false,
            id: "g221"
          },
          {
            rating: 2.148148,
            spoiler: 2,
            lie: false,
            id: "g170"
          },
          {
            id: "g290",
            lie: false,
            spoiler: 2,
            rating: 2.2307692
          },
          {
            id: "g2461",
            lie: false,
            spoiler: 0,
            rating: 3
          },
          {
            spoiler: 2,
            rating: 2.875,
            id: "g1453",
            lie: false
          },
          {
            lie: false,
            id: "g878",
            rating: 2.142857,
            spoiler: 0
          },
          {
            spoiler: 0,
            rating: 2.25,
            lie: false,
            id: "g733"
          },
          {
            spoiler: 0,
            rating: 2.0357144,
            lie: false,
            id: "g735"
          },
          {
            spoiler: 0,
            rating: 1.8333334,
            lie: false,
            id: "g1190"
          },
          {
            lie: false,
            id: "g197",
            spoiler: 0,
            rating: 1.7027028
          },
          {
            lie: false,
            id: "g113",
            spoiler: 0,
            rating: 2.6818182
          },
          {
            spoiler: 0,
            rating: 0.77272725,
            lie: false,
            id: "g142"
          },
          {
            spoiler: 0,
            rating: 0.61290324,
            lie: false,
            id: "g784"
          },
          {
            lie: false,
            id: "g921",
            spoiler: 1,
            rating: 2
          },
          {
            spoiler: 0,
            rating: 2.4,
            id: "g1446",
            lie: false
          },
          {
            spoiler: 2,
            rating: 2.375,
            lie: false,
            id: "g394"
          },
          {
            spoiler: 0,
            rating: 2,
            lie: false,
            id: "g3151"
          },
          {
            spoiler: 0,
            rating: 2.375,
            lie: false,
            id: "g672"
          },
          {
            spoiler: 0,
            rating: 0.6875,
            lie: false,
            id: "g783"
          },
          {
            id: "g1676",
            lie: false,
            rating: 2.1666667,
            spoiler: 0
          },
          {
            rating: 2.5,
            spoiler: 0,
            id: "g3172",
            lie: false
          },
          {
            id: "g1094",
            lie: false,
            spoiler: 0,
            rating: 1.1666666
          },
          {
            lie: false,
            id: "g163",
            spoiler: 1,
            rating: 2.9615386
          },
          {
            rating: 2.8076923,
            spoiler: 1,
            id: "g165",
            lie: false
          },
          {
            spoiler: 0,
            rating: 2.8095238,
            lie: false,
            id: "g96"
          },
          {
            id: "g133",
            lie: false,
            spoiler: 0,
            rating: 2.8510637
          },
          {
            id: "g207",
            lie: false,
            rating: 2,
            spoiler: 2
          },
          {
            spoiler: 0,
            rating: 1.6666666,
            lie: false,
            id: "g1736"
          },
          {
            spoiler: 0,
            rating: 1.6363636,
            lie: false,
            id: "g1795"
          },
          {
            spoiler: 2,
            rating: 2,
            lie: false,
            id: "g978"
          },
          {
            spoiler: 0,
            rating: 1.6666666,
            lie: false,
            id: "g1581"
          },
          {
            id: "g1629",
            lie: false,
            spoiler: 0,
            rating: 2.142857
          },
          {
            spoiler: 0,
            rating: 1.8888888,
            lie: false,
            id: "g1393"
          },
          {
            spoiler: 0,
            rating: 2.4545455,
            id: "g1555",
            lie: false
          },
          {
            lie: false,
            id: "g3415",
            rating: 2.5,
            spoiler: 0
          },
          {
            spoiler: 0,
            rating: 2.5333333,
            lie: false,
            id: "g461"
          },
          {
            lie: false,
            id: "g855",
            spoiler: 0,
            rating: 1.8888888
          },
          {
            spoiler: 0,
            rating: 2,
            lie: false,
            id: "g3204"
          },
          {
            id: "g749",
            lie: false,
            rating: 1.3714286,
            spoiler: 0
          },
          {
            lie: false,
            id: "g253",
            rating: 2.8666666,
            spoiler: 1
          },
          {
            lie: false,
            id: "g256",
            rating: 2.92,
            spoiler: 2
          },
          {
            id: "g1288",
            lie: false,
            spoiler: 0,
            rating: 1.76
          },
          {
            id: "g756",
            lie: false,
            rating: 2.7714286,
            spoiler: 1
          },
          {
            id: "g1445",
            lie: false,
            spoiler: 1,
            rating: 1
          },
          {
            id: "g516",
            lie: false,
            spoiler: 1,
            rating: 2.580645
          },
          {
            spoiler: 0,
            rating: 1.7941177,
            id: "g596",
            lie: false
          },
          {
            lie: false,
            id: "g916",
            spoiler: 0,
            rating: 0.96153843
          },
          {
            id: "g1713",
            lie: false,
            spoiler: 2,
            rating: 1.5
          },
          {
            spoiler: 0,
            rating: 2,
            id: "g1378",
            lie: false
          },
          {
            spoiler: 0,
            rating: 1.7804878,
            id: "g252",
            lie: false
          },
          {
            spoiler: 0,
            rating: 1.1111112,
            lie: false,
            id: "g172"
          },
          {
            lie: false,
            id: "g251",
            spoiler: 0,
            rating: 1.3809524
          },
          {
            id: "g315",
            lie: false,
            spoiler: 1,
            rating: 0.7368421
          },
          {
            id: "g373",
            lie: false,
            spoiler: 0,
            rating: 2.7931035
          },
          {
            lie: false,
            id: "g894",
            spoiler: 0,
            rating: 1.3846154
          },
          {
            id: "g2926",
            lie: false,
            spoiler: 0,
            rating: 2
          },
          {
            id: "g1297",
            lie: false,
            rating: 1.7142857,
            spoiler: 0
          },
          {
            lie: false,
            id: "g751",
            rating: 1.1333333,
            spoiler: 0
          },
          {
            rating: 2.4285715,
            spoiler: 0,
            lie: false,
            id: "g1196"
          },
          {
            id: "g1642",
            lie: false,
            spoiler: 0,
            rating: 1.125
          },
          {
            id: "g627",
            lie: false,
            spoiler: 1,
            rating: 1.8666667
          },
          {
            spoiler: 0,
            rating: 1,
            lie: false,
            id: "g3139"
          }
        ],
        image: {
          url: "https://s2.vndb.org/cv/58/458.jpg",
          votecount: 14,
          sexual: 0,
          dims: [
            256,
            361
          ],
          id: "cv458",
          violence: 0
        },
        length_minutes: 950,
        rating: 73.7,
        description: "I am just an average student, living an average, colorless life. I study, I work my part-time job, I get through my day just like everyone else, trying not to stand out from the crowd. But suddenly, almost before I realize it, the winds of change have blown into my life. They come in the form of three girls, girls who have been around me for some time, but who I never noticed in this way before. They are most definitely not living a colorless life like everyone else in postmodern Japan. They seem to float above society, strangely unaffected by it. Instinctively I know I should avoid getting involved with them, and yet before I know it, my destiny is bound with theirs. Where will it all lead?\n\n[From [url=http://www.peachprincess.com/Merchant2/merchant.mv?Screen=PROD&Store_Code=PP&Product_Code=P014&Category_Code=BG]PeachPrincess[/url]]",
        title: "Yume Miru Kusuri",
        olang: "ja",
        titles: [
          {
            latin: null,
            official: true,
            lang: "en",
            main: false,
            title: "Yume Miru Kusuri - A Drug That Makes You Dream"
          },
          {
            latin: "Yume Miru Kusuri",
            official: true,
            title: "ユメミルクスリ",
            main: true,
            lang: "ja"
          },
          {
            latin: "Mengjian zhi Yao",
            official: true,
            lang: "zh-Hant",
            main: false,
            title: "夢見之藥"
          }
        ],
        length: 3,
        popularity: 36.26,
        votecount: 5596,
        screenshots: [
          {
            thumbnail: "https://s2.vndb.org/st/48/248.jpg",
            thumbnail_dims: [
              136,
              102
            ]
          },
          {
            thumbnail: "https://s2.vndb.org/st/50/250.jpg",
            thumbnail_dims: [
              136,
              102
            ]
          },
          {
            thumbnail: "https://s2.vndb.org/st/51/251.jpg",
            thumbnail_dims: [
              136,
              102
            ]
          },
          {
            thumbnail: "https://s2.vndb.org/st/81/14781.jpg",
            thumbnail_dims: [
              136,
              102
            ]
          },
          {
            thumbnail_dims: [
              136,
              102
            ],
            thumbnail: "https://s2.vndb.org/st/82/14782.jpg"
          },
          {
            thumbnail_dims: [
              136,
              102
            ],
            thumbnail: "https://s2.vndb.org/st/83/14783.jpg"
          },
          {
            thumbnail: "https://s2.vndb.org/st/84/14784.jpg",
            thumbnail_dims: [
              136,
              102
            ]
          },
          {
            thumbnail: "https://s2.vndb.org/st/85/14785.jpg",
            thumbnail_dims: [
              136,
              102
            ]
          },
          {
            thumbnail_dims: [
              136,
              102
            ],
            thumbnail: "https://s2.vndb.org/st/86/14786.jpg"
          },
          {
            thumbnail_dims: [
              136,
              102
            ],
            thumbnail: "https://s2.vndb.org/st/87/14787.jpg"
          }
        ],
        languages: [
          "en",
          "es",
          "ja",
          "ko",
          "ru",
          "zh-Hant"
        ],
        aliases: [
          "YMK",
          "ユメミルクスリ ～Drug x Bullying x Interpersonal relationship～",
          "梦见之药"
        ],
        released: "2005-12-22",
        alttitle: "ユメミルクスリ",
        platforms: [
          "win",
          "and",
          "psp",
          "vnd"
        ]
      },
      voted: 1634273074,
      id: "v44",
      vote: 95,
      started: null,
      lastmod: 1634273074
    },
    {
      started: null,
      lastmod: 1638938660,
      vn: {
        devstatus: 0,
        tags: [
          {
            rating: 2.7931035,
            spoiler: 0,
            id: "g32",
            lie: false
          },
          {
            id: "g147",
            lie: false,
            spoiler: 0,
            rating: 2.897436
          },
          {
            id: "g175",
            lie: false,
            spoiler: 0,
            rating: 2.6190476
          },
          {
            spoiler: 0,
            rating: 1.9583334,
            id: "g236",
            lie: false
          },
          {
            spoiler: 0,
            rating: 0.22413793,
            lie: false,
            id: "g176"
          },
          {
            lie: false,
            id: "g612",
            rating: 0.33333334,
            spoiler: 1
          },
          {
            lie: false,
            id: "g873",
            spoiler: 1,
            rating: 2.8163266
          },
          {
            rating: 2.5,
            spoiler: 0,
            id: "g3005",
            lie: false
          },
          {
            spoiler: 0,
            rating: 3,
            lie: false,
            id: "g2016"
          },
          {
            spoiler: 0,
            rating: 2.7547169,
            lie: false,
            id: "g710"
          },
          {
            id: "g756",
            lie: false,
            spoiler: 1,
            rating: 2.5
          },
          {
            spoiler: 1,
            rating: 2,
            lie: false,
            id: "g2086"
          },
          {
            spoiler: 0,
            rating: 2.4,
            id: "g173",
            lie: false
          },
          {
            spoiler: 0,
            rating: 2.7719297,
            id: "g328",
            lie: false
          },
          {
            lie: false,
            id: "g145",
            spoiler: 0,
            rating: 2.7666667
          },
          {
            lie: false,
            id: "g104",
            spoiler: 0,
            rating: 1.5555556
          },
          {
            rating: 2.6666667,
            spoiler: 0,
            id: "g168",
            lie: false
          },
          {
            id: "g182",
            lie: false,
            spoiler: 0,
            rating: 2.25
          },
          {
            spoiler: 2,
            rating: 2.5,
            lie: false,
            id: "g2982"
          },
          {
            id: "g420",
            lie: false,
            spoiler: 0,
            rating: 2.6470587
          },
          {
            lie: false,
            id: "g520",
            spoiler: 0,
            rating: 0.35714287
          },
          {
            spoiler: 0,
            rating: 2,
            id: "g1733",
            lie: false
          },
          {
            lie: false,
            id: "g698",
            spoiler: 1,
            rating: 2.27451
          },
          {
            spoiler: 2,
            rating: 2.7307692,
            lie: false,
            id: "g779"
          },
          {
            lie: false,
            id: "g955",
            spoiler: 2,
            rating: 2.48
          },
          {
            id: "g974",
            lie: false,
            spoiler: 0,
            rating: 2.4418604
          },
          {
            rating: 2.1617646,
            spoiler: 0,
            id: "g325",
            lie: false
          },
          {
            rating: 2.6136363,
            spoiler: 1,
            id: "g201",
            lie: false
          },
          {
            spoiler: 0,
            rating: 2.6285715,
            lie: false,
            id: "g676"
          },
          {
            id: "g851",
            lie: false,
            spoiler: 0,
            rating: 2
          },
          {
            spoiler: 0,
            rating: 2,
            lie: false,
            id: "g3139"
          },
          {
            spoiler: 0,
            rating: 2,
            id: "g1759",
            lie: false
          },
          {
            spoiler: 0,
            rating: 2.5490196,
            lie: false,
            id: "g681"
          },
          {
            id: "g1646",
            lie: false,
            rating: 2.4,
            spoiler: 0
          },
          {
            spoiler: 0,
            rating: 1.75,
            lie: false,
            id: "g1429"
          },
          {
            id: "g541",
            lie: false,
            spoiler: 0,
            rating: 1.6415094
          },
          {
            rating: 2.3207548,
            spoiler: 0,
            lie: false,
            id: "g598"
          },
          {
            lie: false,
            id: "g772",
            spoiler: 1,
            rating: 2.8
          },
          {
            rating: 1.5,
            spoiler: 0,
            lie: false,
            id: "g596"
          },
          {
            id: "g894",
            lie: false,
            spoiler: 0,
            rating: 1.8947369
          },
          {
            spoiler: 1,
            rating: 2.8695652,
            lie: false,
            id: "g497"
          },
          {
            lie: false,
            id: "g957",
            spoiler: 0,
            rating: 2.34
          },
          {
            id: "g459",
            lie: false,
            spoiler: 0,
            rating: 1
          },
          {
            id: "g3172",
            lie: false,
            spoiler: 0,
            rating: 2
          },
          {
            spoiler: 0,
            rating: 2.673913,
            id: "g302",
            lie: false
          },
          {
            id: "g228",
            lie: false,
            spoiler: 2,
            rating: 2.581818
          },
          {
            lie: false,
            id: "g1569",
            spoiler: 0,
            rating: 2.9047618
          },
          {
            rating: 2.8064516,
            spoiler: 2,
            id: "g1366",
            lie: false
          },
          {
            id: "g418",
            lie: false,
            rating: 2.5714285,
            spoiler: 1
          },
          {
            spoiler: 0,
            rating: 2,
            lie: false,
            id: "g1552"
          },
          {
            lie: false,
            id: "g878",
            rating: 2.3809524,
            spoiler: 0
          },
          {
            id: "g660",
            lie: false,
            rating: 2.557377,
            spoiler: 1
          },
          {
            lie: false,
            id: "g672",
            spoiler: 0,
            rating: 1.9583334
          },
          {
            id: "g580",
            lie: false,
            spoiler: 1,
            rating: 0.7413793
          },
          {
            spoiler: 0,
            rating: 2.4375,
            lie: false,
            id: "g677"
          },
          {
            id: "g512",
            lie: false,
            spoiler: 0,
            rating: 2.1162791
          },
          {
            lie: false,
            id: "g1467",
            spoiler: 0,
            rating: 1.8421053
          },
          {
            id: "g262",
            lie: false,
            spoiler: 1,
            rating: 2.1777778
          },
          {
            id: "g148",
            lie: false,
            spoiler: 0,
            rating: 2.4464285
          },
          {
            lie: false,
            id: "g95",
            spoiler: 2,
            rating: 2.18
          },
          {
            spoiler: 0,
            rating: 2,
            lie: false,
            id: "g3251"
          },
          {
            rating: 2.7413793,
            spoiler: 0,
            id: "g728",
            lie: false
          },
          {
            spoiler: 0,
            rating: 2,
            id: "g565",
            lie: false
          },
          {
            spoiler: 1,
            rating: 2.5925925,
            id: "g778",
            lie: false
          },
          {
            id: "g1251",
            lie: false,
            spoiler: 0,
            rating: 2
          },
          {
            id: "g636",
            lie: false,
            spoiler: 1,
            rating: 1.6
          },
          {
            spoiler: 0,
            rating: 2.7,
            id: "g766",
            lie: false
          },
          {
            id: "g821",
            lie: false,
            rating: 2.1956522,
            spoiler: 2
          },
          {
            rating: 2,
            spoiler: 1,
            lie: false,
            id: "g321"
          },
          {
            spoiler: 2,
            rating: 2.4186046,
            id: "g111",
            lie: false
          },
          {
            spoiler: 0,
            rating: 2.6571429,
            lie: false,
            id: "g326"
          },
          {
            spoiler: 0,
            rating: 2.3333333,
            lie: false,
            id: "g193"
          },
          {
            id: "g1154",
            lie: false,
            spoiler: 0,
            rating: 1.4615384
          },
          {
            id: "g1204",
            lie: false,
            spoiler: 1,
            rating: 2.3125
          },
          {
            spoiler: 0,
            rating: 1.7647059,
            id: "g544",
            lie: false
          },
          {
            spoiler: 0,
            rating: 3,
            lie: false,
            id: "g3171"
          },
          {
            lie: false,
            id: "g942",
            spoiler: 2,
            rating: 2.2391305
          },
          {
            lie: false,
            id: "g1053",
            spoiler: 0,
            rating: 2.0357144
          },
          {
            spoiler: 1,
            rating: 1.5151515,
            id: "g1175",
            lie: false
          },
          {
            lie: false,
            id: "g785",
            spoiler: 0,
            rating: 2.074074
          },
          {
            spoiler: 1,
            rating: 0.09615385,
            id: "g456",
            lie: false
          },
          {
            spoiler: 0,
            rating: 2,
            id: "g258",
            lie: false
          },
          {
            spoiler: 0,
            rating: 2,
            lie: false,
            id: "g3147"
          },
          {
            spoiler: 0,
            rating: 2.640625,
            lie: false,
            id: "g692"
          },
          {
            lie: false,
            id: "g2635",
            spoiler: 0,
            rating: 1.5
          },
          {
            id: "g760",
            lie: false,
            spoiler: 0,
            rating: 2.6875
          },
          {
            lie: false,
            id: "g1796",
            spoiler: 0,
            rating: 2
          },
          {
            lie: false,
            id: "g733",
            spoiler: 1,
            rating: 2.5384614
          },
          {
            spoiler: 1,
            rating: 1.4090909,
            id: "g434",
            lie: false
          },
          {
            lie: false,
            id: "g47",
            spoiler: 0,
            rating: 1.462963
          },
          {
            lie: false,
            id: "g215",
            spoiler: 0,
            rating: 2.0833333
          },
          {
            lie: false,
            id: "g165",
            spoiler: 1,
            rating: 0.41666666
          },
          {
            spoiler: 1,
            rating: 1.1111112,
            id: "g46",
            lie: false
          },
          {
            spoiler: 0,
            rating: 2.0172415,
            id: "g96",
            lie: false
          },
          {
            id: "g133",
            lie: false,
            spoiler: 0,
            rating: 2.7868853
          },
          {
            rating: 2,
            spoiler: 0,
            id: "g3140",
            lie: false
          },
          {
            lie: false,
            id: "g904",
            spoiler: 0,
            rating: 1.8055556
          },
          {
            rating: 2.5,
            spoiler: 0,
            lie: false,
            id: "g876"
          },
          {
            spoiler: 0,
            rating: 0.24,
            id: "g683",
            lie: false
          },
          {
            lie: false,
            id: "g389",
            spoiler: 0,
            rating: 1.3333334
          },
          {
            id: "g373",
            lie: false,
            spoiler: 0,
            rating: 2.6909091
          },
          {
            id: "g355",
            lie: false,
            rating: 2.4791667,
            spoiler: 0
          },
          {
            spoiler: 0,
            rating: 2.375,
            id: "g461",
            lie: false
          },
          {
            lie: false,
            id: "g3132",
            spoiler: 0,
            rating: 2
          }
        ],
        image: {
          votecount: 11,
          url: "https://s2.vndb.org/cv/86/42886.jpg",
          violence: 0,
          id: "cv42886",
          dims: [
            256,
            363
          ],
          sexual: 0
        },
        length_minutes: 1800,
        length_votes: 46,
        length: 3,
        titles: [
          {
            title: "Sharin no Kuni: The Girl Among the Sunflowers",
            main: false,
            lang: "en",
            official: true,
            latin: null
          },
          {
            main: true,
            title: "車輪の国、向日葵の少女",
            lang: "ja",
            latin: "Sharin no Kuni, Himawari no Shoujo",
            official: true
          },
          {
            lang: "ko",
            title: "차륜의 나라, 해바라기의 소녀",
            main: false,
            latin: "Charyun-ui Nara, Haebaragi-ui Sonyeo",
            official: false
          },
          {
            latin: "Strana Koljos, Devochka-Podsolnuh",
            official: false,
            main: false,
            title: "Страна Колес, Девочка-Подсолнух",
            lang: "ru"
          },
          {
            official: false,
            latin: "Chelun zhi Guo, Xiangrikui de Shaonv",
            lang: "zh-Hans",
            title: "车轮之国，向日葵的少女",
            main: false
          }
        ],
        popularity: 49.72,
        votecount: 6196,
        languages: [
          "de",
          "en",
          "es",
          "ja",
          "ko",
          "pt-br",
          "ru",
          "vi",
          "zh-Hans"
        ],
        screenshots: [
          {
            thumbnail_dims: [
              136,
              102
            ],
            thumbnail: "https://s2.vndb.org/st/27/727.jpg"
          },
          {
            thumbnail: "https://s2.vndb.org/st/28/728.jpg",
            thumbnail_dims: [
              136,
              102
            ]
          },
          {
            thumbnail: "https://s2.vndb.org/st/29/729.jpg",
            thumbnail_dims: [
              136,
              102
            ]
          },
          {
            thumbnail_dims: [
              136,
              102
            ],
            thumbnail: "https://s2.vndb.org/st/64/9364.jpg"
          },
          {
            thumbnail: "https://s2.vndb.org/st/65/9365.jpg",
            thumbnail_dims: [
              136,
              102
            ]
          },
          {
            thumbnail: "https://s2.vndb.org/st/75/128775.jpg",
            thumbnail_dims: [
              136,
              102
            ]
          },
          {
            thumbnail: "https://s2.vndb.org/st/50/138450.jpg",
            thumbnail_dims: [
              136,
              102
            ]
          }
        ],
        aliases: [
          "Syarin"
        ],
        released: "2005-11-25",
        alttitle: "車輪の国、向日葵の少女",
        platforms: [
          "win",
          "and",
          "psp",
          "ps3",
          "xb3"
        ],
        rating: 81.5,
        description: "Early summer.  \n\nA society which imposes special \"Duties\" upon everyone who breaks the law.  \n\nThe individuals who oversee these criminals' rehabilitation are the \"Special Elite\"ーa rank the protagonist, Kenichi Morita, hopes to attain. To do that, he must pass his final exam, for which he arrives at a certain country town.  \n\nAt the school Kenichi attends, he encounters girls bound by various “Duties.” Those obligated \"to observe a 12-hour day\" are forbidden from being awake for more than 12 hours per day, and those obligated \"to remain in infancy\" cannot grow up. It is meeting Natsumi Hinata, the girl who \"cannot fall in love,\" that throws him out of gear.  \n\nSoon, Kenichi makes a series of odd discoveries… his own grave, erected secretly on a clifftop; his patrimony, hidden deep inside a cavern. Kenichi finds that he must search for his own atonement in this dystopian society. What is the truth behind the Land of the Spinning Wheel? Discover for yourself through Kenichi's eyes!  \n\n[From [url=https://www.kickstarter.com/projects/tokyootakumode/re-sharin-no-kuni-project/description] Kickstarter[/url]]",
        title: "Sharin no Kuni, Himawari no Shoujo",
        olang: "ja"
      },
      voted: null,
      id: "v57",
      notes: null,
      added: 1638938660,
      finished: null,
      vote: null
    },
    {
      vote: null,
      added: 1569912949,
      finished: null,
      notes: null,
      id: "v66",
      voted: null,
      vn: {
        olang: "ja",
        title: "CROSS†CHANNEL",
        description: "Gunjo Academy is a facility designed to gather and isolate those students who got a high score on an adaptation exam (scoring high on this exam indicates that the student is less likely to be able to be adapted to the society) mandated by the government.\n\nAfter a failed summer vacation with other members of the school's broadcasting club, Kurosu Taichi and some of the other club members return to the city, only to find that the world had completely changed.\n\n[Edited from [url=https://en.wikipedia.org/wiki/Cross_Channel_%28visual_novel%29]Wikipedia[/url]]",
        rating: 77.9,
        platforms: [
          "win",
          "lin",
          "mac",
          "ios",
          "and",
          "gba",
          "psp",
          "ps2",
          "ps3",
          "psv",
          "swi",
          "vnd",
          "xb3",
          "web"
        ],
        alttitle: null,
        released: "2003-09-26",
        aliases: [
          "CC",
          "クロスチャンネル"
        ],
        screenshots: [
          {
            thumbnail: "https://s2.vndb.org/st/14/914.jpg",
            thumbnail_dims: [
              136,
              102
            ]
          },
          {
            thumbnail_dims: [
              136,
              102
            ],
            thumbnail: "https://s2.vndb.org/st/15/915.jpg"
          },
          {
            thumbnail: "https://s2.vndb.org/st/16/916.jpg",
            thumbnail_dims: [
              136,
              102
            ]
          },
          {
            thumbnail_dims: [
              136,
              102
            ],
            thumbnail: "https://s2.vndb.org/st/16/3016.jpg"
          },
          {
            thumbnail_dims: [
              136,
              102
            ],
            thumbnail: "https://s2.vndb.org/st/17/3017.jpg"
          },
          {
            thumbnail: "https://s2.vndb.org/st/34/3034.jpg",
            thumbnail_dims: [
              136,
              102
            ]
          },
          {
            thumbnail: "https://s2.vndb.org/st/35/3035.jpg",
            thumbnail_dims: [
              136,
              102
            ]
          },
          {
            thumbnail_dims: [
              136,
              102
            ],
            thumbnail: "https://s2.vndb.org/st/36/3036.jpg"
          },
          {
            thumbnail: "https://s2.vndb.org/st/66/70066.jpg",
            thumbnail_dims: [
              136,
              102
            ]
          },
          {
            thumbnail_dims: [
              136,
              77
            ],
            thumbnail: "https://s2.vndb.org/st/91/86091.jpg"
          }
        ],
        languages: [
          "en",
          "ja",
          "ko",
          "ru",
          "zh-Hans"
        ],
        votecount: 4032,
        popularity: 32.25,
        titles: [
          {
            title: "CROSS†CHANNEL",
            main: false,
            lang: "en",
            latin: null,
            official: true
          },
          {
            title: "CROSS†CHANNEL",
            main: true,
            lang: "ja",
            latin: null,
            official: true
          },
          {
            lang: "zh-Hans",
            title: "CROSS†CHANNEL",
            main: false,
            official: false,
            latin: null
          }
        ],
        length: 4,
        length_votes: 58,
        length_minutes: 1908,
        image: {
          dims: [
            256,
            368
          ],
          sexual: 0,
          id: "cv16904",
          violence: 0,
          url: "https://s2.vndb.org/cv/04/16904.jpg",
          votecount: 12
        },
        tags: [
          {
            lie: false,
            id: "g25",
            spoiler: 1,
            rating: 1.4871795
          },
          {
            id: "g19",
            lie: false,
            spoiler: 1,
            rating: 2.531915
          },
          {
            spoiler: 0,
            rating: 2.8444445,
            id: "g32",
            lie: false
          },
          {
            spoiler: 0,
            rating: 1.925,
            id: "g23",
            lie: false
          },
          {
            id: "g207",
            lie: false,
            spoiler: 1,
            rating: 2.0869565
          },
          {
            spoiler: 1,
            rating: 1.5517242,
            id: "g319",
            lie: false
          },
          {
            spoiler: 2,
            rating: 1.5869565,
            id: "g261",
            lie: false
          },
          {
            lie: false,
            id: "g110",
            rating: 2,
            spoiler: 0
          },
          {
            spoiler: 2,
            rating: 1.5476191,
            id: "g173",
            lie: false
          },
          {
            rating: 1.1333333,
            spoiler: 1,
            id: "g1375",
            lie: false
          },
          {
            id: "g461",
            lie: false,
            spoiler: 0,
            rating: 2.1904762
          },
          {
            lie: false,
            id: "g2040",
            rating: 0.6666667,
            spoiler: 0
          },
          {
            spoiler: 0,
            rating: 1.6551725,
            id: "g916",
            lie: false
          },
          {
            spoiler: 0,
            rating: 2,
            lie: false,
            id: "g933"
          },
          {
            spoiler: 0,
            rating: 2.090909,
            id: "g602",
            lie: false
          },
          {
            id: "g692",
            lie: false,
            rating: 1.8387097,
            spoiler: 0
          },
          {
            spoiler: 0,
            rating: 2.5,
            lie: false,
            id: "g1184"
          },
          {
            lie: false,
            id: "g352",
            rating: 2.4166667,
            spoiler: 1
          },
          {
            lie: false,
            id: "g113",
            rating: 2.3666666,
            spoiler: 0
          },
          {
            lie: false,
            id: "g349",
            rating: 2.9682539,
            spoiler: 2
          },
          {
            spoiler: 0,
            rating: 2.7234042,
            id: "g133",
            lie: false
          },
          {
            spoiler: 1,
            rating: 1.6341463,
            lie: false,
            id: "g158"
          },
          {
            lie: false,
            id: "g1398",
            spoiler: 1,
            rating: 1.5416666
          },
          {
            rating: 2.0263157,
            spoiler: 0,
            lie: false,
            id: "g760"
          },
          {
            rating: 2.5897436,
            spoiler: 2,
            id: "g501",
            lie: false
          },
          {
            lie: false,
            id: "g820",
            spoiler: 1,
            rating: 2.625
          },
          {
            spoiler: 2,
            rating: 1.6842105,
            id: "g1337",
            lie: false
          },
          {
            lie: false,
            id: "g3615",
            spoiler: 0,
            rating: 1
          },
          {
            spoiler: 0,
            rating: 2.764706,
            lie: false,
            id: "g520"
          },
          {
            lie: false,
            id: "g1292",
            spoiler: 2,
            rating: 0.3125
          },
          {
            spoiler: 0,
            rating: 1,
            lie: false,
            id: "g1564"
          },
          {
            lie: false,
            id: "g151",
            rating: 2.1333334,
            spoiler: 0
          },
          {
            lie: false,
            id: "g253",
            spoiler: 1,
            rating: 2.7777777
          },
          {
            lie: false,
            id: "g627",
            spoiler: 1,
            rating: 2.060606
          },
          {
            id: "g845",
            lie: false,
            spoiler: 0,
            rating: 2.2413793
          },
          {
            spoiler: 2,
            rating: 2.1666667,
            id: "g1343",
            lie: false
          },
          {
            id: "g1378",
            lie: false,
            spoiler: 0,
            rating: 2.25
          },
          {
            lie: false,
            id: "g497",
            spoiler: 1,
            rating: 3
          },
          {
            id: "g976",
            lie: false,
            spoiler: 0,
            rating: 1.7586207
          },
          {
            id: "g1175",
            lie: false,
            spoiler: 1,
            rating: 2.2727273
          },
          {
            spoiler: 0,
            rating: 2.3,
            lie: false,
            id: "g670"
          },
          {
            lie: false,
            id: "g550",
            spoiler: 0,
            rating: 1.8571428
          },
          {
            spoiler: 1,
            rating: 2.12,
            id: "g733",
            lie: false
          },
          {
            id: "g1212",
            lie: false,
            spoiler: 0,
            rating: 2.3333333
          },
          {
            lie: false,
            id: "g874",
            spoiler: 2,
            rating: 2.3333333
          },
          {
            spoiler: 0,
            rating: 1.6666666,
            id: "g1069",
            lie: false
          },
          {
            lie: false,
            id: "g848",
            rating: 2.375,
            spoiler: 2
          },
          {
            lie: false,
            id: "g47",
            spoiler: 0,
            rating: 2.1463416
          },
          {
            id: "g146",
            lie: false,
            spoiler: 1,
            rating: 2.5142858
          },
          {
            lie: false,
            id: "g373",
            spoiler: 0,
            rating: 2.516129
          },
          {
            lie: false,
            id: "g111",
            spoiler: 0,
            rating: 2
          },
          {
            spoiler: 1,
            rating: 1.8837209,
            id: "g160",
            lie: false
          },
          {
            lie: false,
            id: "g107",
            spoiler: 0,
            rating: 2.121212
          },
          {
            spoiler: 0,
            rating: 1.4666667,
            id: "g869",
            lie: false
          },
          {
            spoiler: 0,
            rating: 1.7058823,
            lie: false,
            id: "g832"
          },
          {
            id: "g728",
            lie: false,
            rating: 2.4545455,
            spoiler: 0
          },
          {
            id: "g587",
            lie: false,
            spoiler: 0,
            rating: 1.6551725
          },
          {
            id: "g676",
            lie: false,
            spoiler: 0,
            rating: 2.847826
          },
          {
            rating: 0.125,
            spoiler: 0,
            id: "g1515",
            lie: false
          },
          {
            spoiler: 1,
            rating: 2.9545455,
            id: "g500",
            lie: false
          },
          {
            spoiler: 2,
            rating: 2.75,
            lie: false,
            id: "g1954"
          },
          {
            rating: 2.711111,
            spoiler: 0,
            lie: false,
            id: "g811"
          },
          {
            spoiler: 0,
            rating: 2,
            id: "g1190",
            lie: false
          },
          {
            lie: false,
            id: "g553",
            spoiler: 1,
            rating: 2
          },
          {
            lie: false,
            id: "g631",
            spoiler: 1,
            rating: 1.75
          },
          {
            id: "g2452",
            lie: false,
            spoiler: 0,
            rating: 2.6
          },
          {
            spoiler: 0,
            rating: 2.2727273,
            id: "g857",
            lie: false
          },
          {
            spoiler: 2,
            rating: 2.8333333,
            lie: false,
            id: "g250"
          },
          {
            id: "g77",
            lie: false,
            spoiler: 1,
            rating: 1.9354838
          },
          {
            lie: false,
            id: "g194",
            rating: 2.4318182,
            spoiler: 0
          },
          {
            spoiler: 0,
            rating: 2.9444444,
            id: "g615",
            lie: false
          },
          {
            spoiler: 0,
            rating: 1,
            lie: false,
            id: "g878"
          },
          {
            lie: false,
            id: "g2016",
            spoiler: 0,
            rating: 3
          },
          {
            spoiler: 1,
            rating: 1.1428572,
            id: "g457",
            lie: false
          },
          {
            rating: 1.8571428,
            spoiler: 2,
            lie: false,
            id: "g980"
          },
          {
            id: "g1521",
            lie: false,
            spoiler: 0,
            rating: 2.7142856
          },
          {
            spoiler: 2,
            rating: 0.7407407,
            lie: false,
            id: "g420"
          },
          {
            id: "g681",
            lie: false,
            spoiler: 0,
            rating: 2.2258065
          },
          {
            spoiler: 0,
            rating: 2.2903225,
            id: "g904",
            lie: false
          },
          {
            spoiler: 2,
            rating: 1.4761904,
            lie: false,
            id: "g727"
          },
          {
            id: "g464",
            lie: false,
            spoiler: 1,
            rating: 2.1666667
          },
          {
            spoiler: 0,
            rating: 2,
            lie: false,
            id: "g3415"
          },
          {
            spoiler: 0,
            rating: 1.625,
            id: "g1154",
            lie: false
          },
          {
            rating: 2.2,
            spoiler: 2,
            lie: false,
            id: "g192"
          },
          {
            spoiler: 0,
            rating: 2.7608695,
            lie: false,
            id: "g48"
          },
          {
            spoiler: 1,
            rating: 2.375,
            id: "g181",
            lie: false
          },
          {
            id: "g186",
            lie: false,
            spoiler: 0,
            rating: 2.2333333
          },
          {
            id: "g288",
            lie: false,
            spoiler: 1,
            rating: 2.7307692
          },
          {
            lie: false,
            id: "g149",
            spoiler: 1,
            rating: 2.7179487
          },
          {
            spoiler: 1,
            rating: 2.5,
            id: "g201",
            lie: false
          },
          {
            lie: false,
            id: "g96",
            spoiler: 0,
            rating: 0.8
          },
          {
            id: "g170",
            lie: false,
            rating: 1.6,
            spoiler: 2
          },
          {
            id: "g1478",
            lie: false,
            rating: 2,
            spoiler: 1
          },
          {
            id: "g1453",
            lie: false,
            spoiler: 2,
            rating: 1.75
          },
          {
            spoiler: 0,
            rating: 2.25,
            id: "g2394",
            lie: false
          },
          {
            spoiler: 0,
            rating: 0.7777778,
            lie: false,
            id: "g2101"
          },
          {
            lie: false,
            id: "g3022",
            spoiler: 0,
            rating: 2
          },
          {
            spoiler: 0,
            rating: 2,
            id: "g1320",
            lie: false
          },
          {
            lie: false,
            id: "g459",
            spoiler: 1,
            rating: 2.75
          },
          {
            lie: false,
            id: "g779",
            spoiler: 1,
            rating: 0.06451613
          },
          {
            lie: false,
            id: "g1306",
            rating: 2.1538463,
            spoiler: 1
          },
          {
            id: "g719",
            lie: false,
            rating: 2.4285715,
            spoiler: 0
          },
          {
            spoiler: 1,
            rating: 3,
            lie: false,
            id: "g2159"
          },
          {
            spoiler: 0,
            rating: 2.1666667,
            id: "g1213",
            lie: false
          },
          {
            spoiler: 0,
            rating: 2.483871,
            id: "g544",
            lie: false
          },
          {
            rating: 2.392857,
            spoiler: 2,
            id: "g790",
            lie: false
          },
          {
            spoiler: 0,
            rating: 2,
            lie: false,
            id: "g2228"
          },
          {
            spoiler: 1,
            rating: 2.1666667,
            lie: false,
            id: "g603"
          },
          {
            lie: false,
            id: "g120",
            rating: 1.3095238,
            spoiler: 1
          },
          {
            id: "g164",
            lie: false,
            rating: 2.2826087,
            spoiler: 2
          },
          {
            id: "g176",
            lie: false,
            spoiler: 0,
            rating: 2.0285714
          },
          {
            spoiler: 0,
            rating: 1.75,
            lie: false,
            id: "g1737"
          },
          {
            rating: 1,
            spoiler: 2,
            lie: false,
            id: "g1199"
          },
          {
            spoiler: 0,
            rating: 2.5,
            id: "g3171",
            lie: false
          },
          {
            spoiler: 1,
            rating: 1.3636364,
            id: "g596",
            lie: false
          },
          {
            lie: false,
            id: "g578",
            spoiler: 0,
            rating: 2.4814816
          },
          {
            spoiler: 0,
            rating: 1.3809524,
            id: "g735",
            lie: false
          },
          {
            id: "g691",
            lie: false,
            spoiler: 1,
            rating: 1.6578947
          },
          {
            id: "g580",
            lie: false,
            spoiler: 1,
            rating: 1.9142857
          },
          {
            spoiler: 0,
            rating: 1.8695652,
            id: "g953",
            lie: false
          },
          {
            spoiler: 0,
            rating: 2.1,
            lie: false,
            id: "g221"
          },
          {
            spoiler: 0,
            rating: 2.357143,
            id: "g191",
            lie: false
          },
          {
            spoiler: 0,
            rating: 1.25,
            id: "g1389",
            lie: false
          },
          {
            id: "g3037",
            lie: false,
            spoiler: 0,
            rating: 3
          },
          {
            lie: false,
            id: "g710",
            spoiler: 0,
            rating: 2.5652175
          },
          {
            spoiler: 0,
            rating: 1.4054054,
            lie: false,
            id: "g751"
          },
          {
            spoiler: 0,
            rating: 1.1818181,
            lie: false,
            id: "g1336"
          },
          {
            lie: false,
            id: "g715",
            spoiler: 0,
            rating: 2.4871795
          },
          {
            lie: false,
            id: "g872",
            spoiler: 0,
            rating: 2.2727273
          },
          {
            id: "g1510",
            lie: false,
            spoiler: 0,
            rating: 2.5
          },
          {
            rating: 2.3,
            spoiler: 0,
            id: "g1388",
            lie: false
          }
        ],
        devstatus: 0
      },
      lastmod: 1634272910,
      started: null
    },
    {
      vote: null,
      id: "v87",
      vn: {
        olang: "ja",
        title: "FORTUNE ARTERIAL",
        rating: 73.7,
        description: "Hasekura Kouhei transfers into Shuchikan Academy, a prestigious public school in the style of an English six-year school encompassing junior-high and high school students. The school is on an island named Tamatsu Island off-shore from mainland Japan, and the only way to get there is by boat. Soon after transferring, he discovers that Sendou Erika, one of the students in the class next to his, is in fact a type of vampire.\n\n[Edited from [url=http://en.wikipedia.org/wiki/Fortune_Arterial]Wikipedia[/url]]",
        popularity: 6.77,
        votecount: 731,
        length: 4,
        titles: [
          {
            lang: "ja",
            main: true,
            title: "FORTUNE ARTERIAL",
            official: true,
            latin: null
          }
        ],
        platforms: [
          "win"
        ],
        alttitle: null,
        languages: [
          "en",
          "ja",
          "ko",
          "zh-Hans"
        ],
        screenshots: [
          {
            thumbnail_dims: [
              136,
              102
            ],
            thumbnail: "https://s2.vndb.org/st/94/94.jpg"
          },
          {
            thumbnail: "https://s2.vndb.org/st/89/2689.jpg",
            thumbnail_dims: [
              136,
              102
            ]
          },
          {
            thumbnail_dims: [
              136,
              102
            ],
            thumbnail: "https://s2.vndb.org/st/90/2690.jpg"
          },
          {
            thumbnail_dims: [
              136,
              102
            ],
            thumbnail: "https://s2.vndb.org/st/91/2691.jpg"
          },
          {
            thumbnail: "https://s2.vndb.org/st/82/2782.jpg",
            thumbnail_dims: [
              136,
              102
            ]
          },
          {
            thumbnail: "https://s2.vndb.org/st/19/77019.jpg",
            thumbnail_dims: [
              136,
              102
            ]
          },
          {
            thumbnail_dims: [
              136,
              102
            ],
            thumbnail: "https://s2.vndb.org/st/20/77020.jpg"
          },
          {
            thumbnail_dims: [
              136,
              102
            ],
            thumbnail: "https://s2.vndb.org/st/21/77021.jpg"
          },
          {
            thumbnail: "https://s2.vndb.org/st/22/77022.jpg",
            thumbnail_dims: [
              136,
              102
            ]
          },
          {
            thumbnail: "https://s2.vndb.org/st/23/77023.jpg",
            thumbnail_dims: [
              136,
              102
            ]
          }
        ],
        released: "2008-01-25",
        aliases: [
          "fa",
          "フォアテリ",
          "フォーチュンアテリアル"
        ],
        length_votes: 5,
        tags: [
          {
            lie: false,
            id: "g23",
            spoiler: 0,
            rating: 0.6
          },
          {
            lie: false,
            id: "g32",
            spoiler: 0,
            rating: 3
          },
          {
            spoiler: 0,
            rating: 2.3333333,
            lie: false,
            id: "g96"
          },
          {
            lie: false,
            id: "g130",
            rating: 2.7777777,
            spoiler: 0
          },
          {
            spoiler: 2,
            rating: 3,
            lie: false,
            id: "g173"
          },
          {
            lie: false,
            id: "g297",
            spoiler: 0,
            rating: 2.6
          },
          {
            spoiler: 0,
            rating: 2,
            id: "g1053",
            lie: false
          },
          {
            spoiler: 0,
            rating: 2,
            id: "g3404",
            lie: false
          },
          {
            spoiler: 0,
            rating: 2,
            id: "g851",
            lie: false
          },
          {
            lie: false,
            id: "g527",
            spoiler: 0,
            rating: 2
          },
          {
            spoiler: 2,
            rating: 3,
            lie: false,
            id: "g870"
          },
          {
            rating: 2.3333333,
            spoiler: 0,
            lie: false,
            id: "g107"
          },
          {
            lie: false,
            id: "g257",
            spoiler: 0,
            rating: 2
          },
          {
            spoiler: 0,
            rating: 2,
            id: "g3204",
            lie: false
          },
          {
            spoiler: 0,
            rating: 3,
            lie: false,
            id: "g692"
          },
          {
            rating: 2.2,
            spoiler: 0,
            id: "g1196",
            lie: false
          },
          {
            spoiler: 0,
            rating: 2,
            id: "g154",
            lie: false
          },
          {
            spoiler: 0,
            rating: 2.25,
            id: "g151",
            lie: false
          },
          {
            spoiler: 0,
            rating: 2,
            id: "g111",
            lie: false
          },
          {
            lie: false,
            id: "g2099",
            rating: 2.3333333,
            spoiler: 0
          },
          {
            spoiler: 0,
            rating: 2.3333333,
            id: "g418",
            lie: false
          },
          {
            spoiler: 2,
            rating: 2,
            lie: false,
            id: "g1236"
          },
          {
            id: "g1366",
            lie: false,
            spoiler: 0,
            rating: 3
          },
          {
            spoiler: 0,
            rating: 2.2857144,
            id: "g197",
            lie: false
          },
          {
            id: "g113",
            lie: false,
            rating: 2.1666667,
            spoiler: 0
          },
          {
            lie: false,
            id: "g48",
            spoiler: 0,
            rating: 2.4285715
          },
          {
            spoiler: 0,
            rating: 1,
            id: "g300",
            lie: false
          },
          {
            spoiler: 1,
            rating: 2.5,
            lie: false,
            id: "g181"
          },
          {
            rating: 3,
            spoiler: 0,
            id: "g292",
            lie: false
          },
          {
            lie: false,
            id: "g2252",
            spoiler: 0,
            rating: 2
          },
          {
            spoiler: 0,
            rating: 2,
            id: "g3172",
            lie: false
          },
          {
            id: "g1382",
            lie: false,
            spoiler: 0,
            rating: 3
          },
          {
            id: "g389",
            lie: false,
            spoiler: 0,
            rating: 3
          },
          {
            id: "g534",
            lie: false,
            spoiler: 0,
            rating: 3
          },
          {
            lie: false,
            id: "g737",
            spoiler: 0,
            rating: 2.3333333
          },
          {
            id: "g174",
            lie: false,
            spoiler: 0,
            rating: 2
          },
          {
            lie: false,
            id: "g373",
            spoiler: 0,
            rating: 2
          },
          {
            id: "g633",
            lie: false,
            spoiler: 0,
            rating: 1
          },
          {
            id: "g2513",
            lie: false,
            spoiler: 0,
            rating: 3
          },
          {
            lie: false,
            id: "g1478",
            spoiler: 0,
            rating: 2.6666667
          },
          {
            lie: false,
            id: "g538",
            spoiler: 0,
            rating: 2.3333333
          },
          {
            id: "g975",
            lie: false,
            rating: 1,
            spoiler: 0
          },
          {
            id: "g182",
            lie: false,
            spoiler: 0,
            rating: 0.85714287
          },
          {
            spoiler: 0,
            rating: 2,
            id: "g133",
            lie: false
          },
          {
            id: "g3171",
            lie: false,
            spoiler: 0,
            rating: 2
          },
          {
            spoiler: 0,
            rating: 3,
            id: "g1335",
            lie: false
          },
          {
            rating: 2,
            spoiler: 0,
            id: "g3437",
            lie: false
          },
          {
            id: "g3415",
            lie: false,
            spoiler: 0,
            rating: 2
          },
          {
            spoiler: 0,
            rating: 3,
            lie: false,
            id: "g1299"
          },
          {
            spoiler: 0,
            rating: 3,
            lie: false,
            id: "g1184"
          },
          {
            spoiler: 0,
            rating: 2,
            id: "g1058",
            lie: false
          },
          {
            id: "g201",
            lie: false,
            spoiler: 0,
            rating: 2.3333333
          },
          {
            lie: false,
            id: "g148",
            spoiler: 0,
            rating: 3
          },
          {
            lie: false,
            id: "g676",
            spoiler: 0,
            rating: 3
          },
          {
            lie: false,
            id: "g875",
            spoiler: 0,
            rating: 2
          },
          {
            lie: false,
            id: "g874",
            spoiler: 0,
            rating: 2
          },
          {
            id: "g258",
            lie: false,
            rating: 2,
            spoiler: 0
          },
          {
            lie: false,
            id: "g186",
            spoiler: 0,
            rating: 3
          },
          {
            spoiler: 0,
            rating: 2.142857,
            lie: false,
            id: "g424"
          },
          {
            lie: false,
            id: "g726",
            rating: 3,
            spoiler: 0
          },
          {
            spoiler: 0,
            rating: 3,
            id: "g681",
            lie: false
          }
        ],
        devstatus: 0,
        length_minutes: 2070,
        image: {
          url: "https://s2.vndb.org/cv/25/50725.jpg",
          votecount: 11,
          sexual: 0,
          dims: [
            256,
            349
          ],
          id: "cv50725",
          violence: 0
        }
      },
      voted: null,
      finished: null,
      added: 1634273720,
      notes: null,
      lastmod: 1634273720,
      started: null
    },
    {
      id: "v97",
      vn: {
        length_votes: 307,
        tags: [
          {
            lie: false,
            id: "g23",
            spoiler: 0,
            rating: 2.0675676
          },
          {
            lie: false,
            id: "g8",
            spoiler: 0,
            rating: 1.6865672
          },
          {
            lie: false,
            id: "g19",
            spoiler: 0,
            rating: 1.9324324
          },
          {
            spoiler: 2,
            rating: 2.5769231,
            id: "g117",
            lie: false
          },
          {
            lie: false,
            id: "g156",
            spoiler: 0,
            rating: 1.5657895
          },
          {
            id: "g633",
            lie: false,
            rating: 2.590909,
            spoiler: 0
          },
          {
            spoiler: 0,
            rating: 2.016129,
            lie: false,
            id: "g420"
          },
          {
            lie: false,
            id: "g1897",
            spoiler: 0,
            rating: 2
          },
          {
            id: "g457",
            lie: false,
            spoiler: 2,
            rating: 1.4303797
          },
          {
            lie: false,
            id: "g627",
            spoiler: 0,
            rating: 2.3428571
          },
          {
            lie: false,
            id: "g751",
            spoiler: 1,
            rating: 1.0645162
          },
          {
            id: "g794",
            lie: false,
            spoiler: 0,
            rating: 0.37254903
          },
          {
            spoiler: 1,
            rating: 2.0735295,
            lie: false,
            id: "g202"
          },
          {
            id: "g44",
            lie: false,
            spoiler: 2,
            rating: 0.5714286
          },
          {
            spoiler: 2,
            rating: 1.4571428,
            id: "g170",
            lie: false
          },
          {
            id: "g96",
            lie: false,
            spoiler: 0,
            rating: 2.1309524
          },
          {
            spoiler: 0,
            rating: 1.375,
            lie: false,
            id: "g2063"
          },
          {
            spoiler: 2,
            rating: 1.9019607,
            id: "g988",
            lie: false
          },
          {
            id: "g902",
            lie: false,
            rating: 2.5,
            spoiler: 0
          },
          {
            spoiler: 1,
            rating: 1.8,
            lie: false,
            id: "g2589"
          },
          {
            spoiler: 0,
            rating: 2.323077,
            id: "g544",
            lie: false
          },
          {
            spoiler: 0,
            rating: 2.2419355,
            lie: false,
            id: "g380"
          },
          {
            spoiler: 2,
            rating: 2.7837837,
            lie: false,
            id: "g509"
          },
          {
            spoiler: 2,
            rating: 2.7142856,
            id: "g2962",
            lie: false
          },
          {
            spoiler: 2,
            rating: 0.33333334,
            id: "g3418",
            lie: false
          },
          {
            id: "g433",
            lie: false,
            spoiler: 0,
            rating: 1.0196079
          },
          {
            lie: false,
            id: "g108",
            spoiler: 1,
            rating: 1.7014925
          },
          {
            spoiler: 0,
            rating: 2.6666667,
            id: "g154",
            lie: false
          },
          {
            spoiler: 2,
            rating: 2.759036,
            id: "g123",
            lie: false
          },
          {
            lie: false,
            id: "g148",
            spoiler: 0,
            rating: 2.1973684
          },
          {
            spoiler: 1,
            rating: 2.142857,
            id: "g3005",
            lie: false
          },
          {
            spoiler: 2,
            rating: 2.8533332,
            lie: false,
            id: "g892"
          },
          {
            id: "g916",
            lie: false,
            rating: 1.6666666,
            spoiler: 0
          },
          {
            id: "g587",
            lie: false,
            spoiler: 0,
            rating: 0.7619048
          },
          {
            lie: false,
            id: "g3520",
            spoiler: 0,
            rating: 3
          },
          {
            spoiler: 2,
            rating: 0.375,
            lie: false,
            id: "g2916"
          },
          {
            id: "g960",
            lie: false,
            spoiler: 0,
            rating: 1.5769231
          },
          {
            lie: false,
            id: "g1059",
            spoiler: 2,
            rating: 0.64
          },
          {
            lie: false,
            id: "g2529",
            spoiler: 0,
            rating: 2.2307692
          },
          {
            rating: 2,
            spoiler: 0,
            id: "g3138",
            lie: false
          },
          {
            spoiler: 2,
            rating: 2.2173913,
            id: "g574",
            lie: false
          },
          {
            spoiler: 1,
            rating: 2.5,
            lie: false,
            id: "g1398"
          },
          {
            id: "g1822",
            lie: false,
            spoiler: 1,
            rating: 1.8333334
          },
          {
            lie: false,
            id: "g996",
            spoiler: 1,
            rating: 1.9230769
          },
          {
            rating: 0.44262296,
            spoiler: 0,
            id: "g273",
            lie: false
          },
          {
            spoiler: 0,
            rating: 2.4,
            id: "g601",
            lie: false
          },
          {
            id: "g799",
            lie: false,
            rating: 2.6021504,
            spoiler: 2
          },
          {
            spoiler: 0,
            rating: 2,
            id: "g3147",
            lie: false
          },
          {
            spoiler: 2,
            rating: 2.75,
            id: "g2142",
            lie: false
          },
          {
            spoiler: 0,
            rating: 2,
            lie: false,
            id: "g905"
          },
          {
            id: "g833",
            lie: false,
            rating: 1.7222222,
            spoiler: 0
          },
          {
            lie: false,
            id: "g1581",
            rating: 2,
            spoiler: 0
          },
          {
            lie: false,
            id: "g288",
            spoiler: 1,
            rating: 2.8351648
          },
          {
            lie: false,
            id: "g352",
            spoiler: 1,
            rating: 2.5945945
          },
          {
            id: "g178",
            lie: false,
            spoiler: 1,
            rating: 1.5
          },
          {
            rating: 2.7,
            spoiler: 0,
            lie: false,
            id: "g133"
          },
          {
            id: "g3324",
            lie: false,
            rating: 2.142857,
            spoiler: 0
          },
          {
            id: "g1437",
            lie: false,
            spoiler: 0,
            rating: 2.7857144
          },
          {
            spoiler: 0,
            rating: 2.5,
            id: "g2407",
            lie: false
          },
          {
            spoiler: 0,
            rating: 2.7361112,
            lie: false,
            id: "g728"
          },
          {
            lie: false,
            id: "g1097",
            spoiler: 2,
            rating: 1.8225807
          },
          {
            rating: 1.7101449,
            spoiler: 1,
            lie: false,
            id: "g219"
          },
          {
            rating: 2.9041095,
            spoiler: 0,
            lie: false,
            id: "g43"
          },
          {
            rating: 2.4615386,
            spoiler: 1,
            id: "g525",
            lie: false
          },
          {
            lie: false,
            id: "g623",
            spoiler: 1,
            rating: 2
          },
          {
            spoiler: 0,
            rating: 2.0555556,
            id: "g672",
            lie: false
          },
          {
            lie: false,
            id: "g1823",
            spoiler: 1,
            rating: 0.5555556
          },
          {
            lie: false,
            id: "g1403",
            rating: 2.44,
            spoiler: 0
          },
          {
            lie: false,
            id: "g2055",
            spoiler: 0,
            rating: 2.4444444
          },
          {
            spoiler: 0,
            rating: 2.1,
            id: "g2749",
            lie: false
          },
          {
            spoiler: 0,
            rating: 1.4444444,
            lie: false,
            id: "g3159"
          },
          {
            id: "g308",
            lie: false,
            spoiler: 0,
            rating: 1.7460318
          },
          {
            rating: 2.8,
            spoiler: 0,
            lie: false,
            id: "g135"
          },
          {
            lie: false,
            id: "g84",
            spoiler: 1,
            rating: 1.1428572
          },
          {
            spoiler: 0,
            rating: 1.9183674,
            lie: false,
            id: "g606"
          },
          {
            id: "g2452",
            lie: false,
            spoiler: 0,
            rating: 2.2727273
          },
          {
            id: "g3280",
            lie: false,
            spoiler: 1,
            rating: 2
          },
          {
            spoiler: 0,
            rating: 2.2,
            lie: false,
            id: "g789"
          },
          {
            id: "g693",
            lie: false,
            spoiler: 1,
            rating: 1.768116
          },
          {
            lie: false,
            id: "g975",
            spoiler: 0,
            rating: 2
          },
          {
            lie: false,
            id: "g502",
            spoiler: 2,
            rating: 2.25
          },
          {
            spoiler: 0,
            rating: 0.23809524,
            lie: false,
            id: "g246"
          },
          {
            lie: false,
            id: "g49",
            spoiler: 0,
            rating: 1.1639345
          },
          {
            id: "g2768",
            lie: false,
            spoiler: 1,
            rating: 2.1538463
          },
          {
            rating: 2.0689654,
            spoiler: 0,
            id: "g820",
            lie: false
          },
          {
            id: "g534",
            lie: false,
            spoiler: 1,
            rating: 2.0384614
          },
          {
            rating: 1.882353,
            spoiler: 0,
            lie: false,
            id: "g2425"
          },
          {
            spoiler: 2,
            rating: 2.7682927,
            id: "g848",
            lie: false
          },
          {
            lie: false,
            id: "g500",
            spoiler: 0,
            rating: 3
          },
          {
            id: "g876",
            lie: false,
            spoiler: 0,
            rating: 2.75
          },
          {
            lie: false,
            id: "g1903",
            rating: 1.6666666,
            spoiler: 0
          },
          {
            id: "g357",
            lie: false,
            spoiler: 1,
            rating: 1.8
          },
          {
            spoiler: 0,
            rating: 2.1,
            id: "g2619",
            lie: false
          },
          {
            spoiler: 0,
            rating: 1,
            id: "g3251",
            lie: false
          },
          {
            id: "g7",
            lie: false,
            spoiler: 0,
            rating: 2.8915663
          },
          {
            spoiler: 1,
            rating: 2.4324324,
            id: "g10",
            lie: false
          },
          {
            lie: false,
            id: "g25",
            rating: 1.3692307,
            spoiler: 1
          },
          {
            lie: false,
            id: "g55",
            spoiler: 1,
            rating: 1.9726027
          },
          {
            rating: 1.2105263,
            spoiler: 1,
            lie: false,
            id: "g71"
          },
          {
            rating: 0.875,
            spoiler: 1,
            lie: false,
            id: "g76"
          },
          {
            id: "g158",
            lie: false,
            spoiler: 0,
            rating: 2.5411766
          },
          {
            spoiler: 0,
            rating: 2.7261906,
            id: "g159",
            lie: false
          },
          {
            spoiler: 0,
            rating: 2.5934067,
            id: "g160",
            lie: false
          },
          {
            spoiler: 0,
            rating: 2.8297873,
            id: "g161",
            lie: false
          },
          {
            lie: false,
            id: "g221",
            spoiler: 0,
            rating: 2.6493506
          },
          {
            id: "g250",
            lie: false,
            spoiler: 2,
            rating: 0.3472222
          },
          {
            spoiler: 0,
            rating: 2.7142856,
            id: "g253",
            lie: false
          },
          {
            spoiler: 0,
            rating: 1.9240507,
            lie: false,
            id: "g268"
          },
          {
            spoiler: 0,
            rating: 1.2105263,
            id: "g270",
            lie: false
          },
          {
            lie: false,
            id: "g323",
            spoiler: 0,
            rating: 1.4246576
          },
          {
            lie: false,
            id: "g325",
            spoiler: 1,
            rating: 0.925
          },
          {
            lie: false,
            id: "g345",
            rating: 2.6666667,
            spoiler: 2
          },
          {
            spoiler: 2,
            rating: 2.3956044,
            id: "g354",
            lie: false
          },
          {
            rating: 2.1176472,
            spoiler: 0,
            lie: false,
            id: "g1185"
          },
          {
            spoiler: 2,
            rating: 2.6,
            id: "g1314",
            lie: false
          },
          {
            lie: false,
            id: "g2631",
            spoiler: 0,
            rating: 0.3125
          },
          {
            spoiler: 1,
            rating: 2.5555556,
            lie: false,
            id: "g2679"
          }
        ],
        devstatus: 0,
        length_minutes: 375,
        image: {
          votecount: 12,
          url: "https://s2.vndb.org/cv/66/49766.jpg",
          violence: 0,
          id: "cv49766",
          dims: [
            256,
            363
          ],
          sexual: 0.42
        },
        title: "Saya no Uta",
        olang: "ja",
        rating: 80.1,
        description: "The story centers around Fuminori Sakisaka, a medical school student involved in a vehicle accident that claimed the lives of both his parents and left him with critical injuries. \nHe was rescued by experimental brain surgery that coincidentally altered his perception of the world dramatically. \n\nEverything now seems to be composed of slimy intestines and gore to him. In addition, the rest of his senses: touch, hearing, smell, and taste, are also impaired, similar to his sight, further damaging his mental health.\n\nFuminori's desire to live dwindles, and one night, while still in the hospital, he contemplates suicide. However, a girl in a white dress named Saya appears before him. Compared to the horrible surroundings, she looks completely normal, if not downright gorgeous. Fuminori soon falls in love with Saya, and she becomes his raison d'être.\n\nAs time passes, Fuminori gets increasingly secluded from the rest of his normal life as he embarks on a mission to find a specific person Saya is looking for. Fuminori's friends and doctor get more concerned as he acts strangely over time. Nonetheless, they will soon cross paths, for better or worse...",
        popularity: 91.08,
        votecount: 15080,
        titles: [
          {
            official: false,
            latin: null,
            lang: "de",
            title: "Saya no Uta",
            main: false
          },
          {
            official: true,
            latin: null,
            lang: "en",
            title: "Saya no Uta ~ The Song of Saya",
            main: false
          },
          {
            lang: "es",
            main: false,
            title: "La canción de Saya",
            official: false,
            latin: null
          },
          {
            latin: null,
            official: false,
            title: "Saya no Uta",
            main: false,
            lang: "fr"
          },
          {
            official: false,
            latin: null,
            lang: "it",
            main: false,
            title: "Saya no Uta"
          },
          {
            official: true,
            latin: "Saya no Uta",
            main: true,
            title: "沙耶の唄",
            lang: "ja"
          },
          {
            lang: "ko",
            title: "사야의 노래",
            main: false,
            official: false,
            latin: "Sayaui Norae"
          },
          {
            latin: null,
            official: false,
            title: "Saya no Uta",
            main: false,
            lang: "pt-br"
          },
          {
            main: false,
            title: "Песнь Сайи",
            lang: "ru",
            latin: "Pesn' Saji",
            official: false
          },
          {
            latin: null,
            official: false,
            lang: "tr",
            main: false,
            title: "Saya’nın Şarkısı"
          },
          {
            main: false,
            title: "Khúc ca của Saya",
            lang: "vi",
            latin: null,
            official: false
          },
          {
            lang: "zh-Hans",
            title: "沙耶之歌",
            main: false,
            latin: "Shaye zhi Ge",
            official: true
          }
        ],
        length: 2,
        alttitle: "沙耶の唄",
        platforms: [
          "win",
          "lin",
          "mac",
          "and",
          "bdp",
          "nds",
          "psp",
          "vnd",
          "web",
          "oth"
        ],
        screenshots: [
          {
            thumbnail: "https://s2.vndb.org/st/63/263.jpg",
            thumbnail_dims: [
              136,
              102
            ]
          },
          {
            thumbnail: "https://s2.vndb.org/st/65/265.jpg",
            thumbnail_dims: [
              136,
              102
            ]
          },
          {
            thumbnail: "https://s2.vndb.org/st/66/266.jpg",
            thumbnail_dims: [
              136,
              102
            ]
          },
          {
            thumbnail: "https://s2.vndb.org/st/67/267.jpg",
            thumbnail_dims: [
              136,
              102
            ]
          },
          {
            thumbnail_dims: [
              136,
              102
            ],
            thumbnail: "https://s2.vndb.org/st/80/123280.jpg"
          },
          {
            thumbnail_dims: [
              136,
              102
            ],
            thumbnail: "https://s2.vndb.org/st/81/123281.jpg"
          },
          {
            thumbnail: "https://s2.vndb.org/st/82/123282.jpg",
            thumbnail_dims: [
              136,
              102
            ]
          },
          {
            thumbnail_dims: [
              136,
              102
            ],
            thumbnail: "https://s2.vndb.org/st/83/123283.jpg"
          },
          {
            thumbnail: "https://s2.vndb.org/st/84/123284.jpg",
            thumbnail_dims: [
              136,
              102
            ]
          },
          {
            thumbnail_dims: [
              136,
              102
            ],
            thumbnail: "https://s2.vndb.org/st/54/158254.jpg"
          }
        ],
        languages: [
          "de",
          "en",
          "es",
          "fr",
          "it",
          "ja",
          "ko",
          "pl",
          "pt-br",
          "ru",
          "tr",
          "vi",
          "zh-Hans"
        ],
        released: "2003-12-26",
        aliases: [
          "Saya's Song"
        ]
      },
      voted: 1634273579,
      added: 1634273576,
      finished: null,
      notes: null,
      vote: 80,
      started: null,
      lastmod: 1634753244
    },
    {
      lastmod: 1666457170,
      started: null,
      vote: null,
      id: "v100",
      voted: null,
      vn: {
        screenshots: [
          {
            thumbnail: "https://s2.vndb.org/st/21/9421.jpg",
            thumbnail_dims: [
              136,
              102
            ]
          },
          {
            thumbnail: "https://s2.vndb.org/st/22/9422.jpg",
            thumbnail_dims: [
              136,
              102
            ]
          },
          {
            thumbnail: "https://s2.vndb.org/st/23/9423.jpg",
            thumbnail_dims: [
              136,
              102
            ]
          },
          {
            thumbnail_dims: [
              136,
              102
            ],
            thumbnail: "https://s2.vndb.org/st/24/9424.jpg"
          },
          {
            thumbnail_dims: [
              136,
              102
            ],
            thumbnail: "https://s2.vndb.org/st/25/9425.jpg"
          },
          {
            thumbnail: "https://s2.vndb.org/st/26/9426.jpg",
            thumbnail_dims: [
              136,
              102
            ]
          },
          {
            thumbnail_dims: [
              136,
              102
            ],
            thumbnail: "https://s2.vndb.org/st/18/13218.jpg"
          },
          {
            thumbnail: "https://s2.vndb.org/st/19/13219.jpg",
            thumbnail_dims: [
              136,
              102
            ]
          },
          {
            thumbnail: "https://s2.vndb.org/st/20/13220.jpg",
            thumbnail_dims: [
              136,
              102
            ]
          },
          {
            thumbnail_dims: [
              136,
              102
            ],
            thumbnail: "https://s2.vndb.org/st/21/13221.jpg"
          }
        ],
        languages: [
          "ja",
          "ko",
          "zh-Hans"
        ],
        released: "2006-02-24",
        aliases: [
          "もしらば",
          "moshiraba",
          "If it is Clear Weather Tomorrow (literal translation)"
        ],
        platforms: [
          "win"
        ],
        alttitle: "もしも明日が晴れならば",
        length: 3,
        titles: [
          {
            main: true,
            title: "もしも明日が晴れならば",
            lang: "ja",
            latin: "Moshimo Ashita ga Hare Naraba",
            official: true
          }
        ],
        popularity: 1.58,
        votecount: 124,
        rating: 71.8,
        description: "To Hatoba Kazuki, Nonosaki Akiho had been an irreplaceable being. For as far as when she and her sister, after the loss of their parents, were taken in long ago, she had taken the role of his big sister, his mother, his sweetheart. To him, the loss of her figure meant the world had crumbled down, for him who had managed to gather up courage and confess, days before summer break.\n\nA couple of months later, as the pain of parting still remained vivid, the ghost of Akiho appears before his eyes, save little for warning. \"I still had memories left here\", she said softly, a soft smile attached to her face.\n\n[Adapted from [url=http://www.h5.dion.ne.jp/~jade/]jadeの小部屋[/url]]",
        olang: "ja",
        title: "Moshimo Ashita ga Hare Naraba",
        image: {
          votecount: 12,
          url: "https://s2.vndb.org/cv/18/26218.jpg",
          violence: 0,
          id: "cv26218",
          sexual: 0,
          dims: [
            256,
            348
          ]
        },
        length_minutes: 1406,
        devstatus: 0,
        tags: [
          {
            lie: false,
            id: "g32",
            rating: 2.857143,
            spoiler: 0
          },
          {
            id: "g23",
            lie: false,
            spoiler: 0,
            rating: 0.5
          },
          {
            spoiler: 0,
            rating: 3,
            id: "g95",
            lie: false
          },
          {
            id: "g598",
            lie: false,
            rating: 2.8,
            spoiler: 0
          },
          {
            id: "g1464",
            lie: false,
            spoiler: 1,
            rating: 2
          },
          {
            lie: false,
            id: "g3147",
            spoiler: 0,
            rating: 2
          },
          {
            lie: false,
            id: "g880",
            rating: 2.6666667,
            spoiler: 0
          },
          {
            id: "g168",
            lie: false,
            rating: 2.875,
            spoiler: 0
          },
          {
            spoiler: 0,
            rating: 2,
            lie: false,
            id: "g1229"
          },
          {
            spoiler: 0,
            rating: 2.8,
            id: "g606",
            lie: false
          },
          {
            id: "g692",
            lie: false,
            spoiler: 0,
            rating: 2.4
          },
          {
            id: "g228",
            lie: false,
            spoiler: 0,
            rating: 3
          },
          {
            id: "g728",
            lie: false,
            spoiler: 0,
            rating: 2.4
          },
          {
            spoiler: 0,
            rating: 3,
            lie: false,
            id: "g1000"
          },
          {
            spoiler: 0,
            rating: 2,
            id: "g1269",
            lie: false
          },
          {
            id: "g185",
            lie: false,
            rating: 2.875,
            spoiler: 0
          },
          {
            lie: false,
            id: "g96",
            spoiler: 0,
            rating: 2.75
          },
          {
            spoiler: 0,
            rating: 2.5,
            lie: false,
            id: "g567"
          },
          {
            lie: false,
            id: "g596",
            rating: 2.5714285,
            spoiler: 0
          },
          {
            spoiler: 0,
            rating: 2,
            lie: false,
            id: "g602"
          },
          {
            lie: false,
            id: "g148",
            spoiler: 0,
            rating: 2.8333333
          },
          {
            rating: 2.8333333,
            spoiler: 0,
            id: "g147",
            lie: false
          },
          {
            lie: false,
            id: "g878",
            spoiler: 0,
            rating: 1.2
          },
          {
            id: "g548",
            lie: false,
            spoiler: 1,
            rating: 2
          },
          {
            spoiler: 0,
            rating: 3,
            id: "g634",
            lie: false
          },
          {
            lie: false,
            id: "g3172",
            spoiler: 0,
            rating: 2
          },
          {
            id: "g48",
            lie: false,
            spoiler: 0,
            rating: 2.4
          },
          {
            lie: false,
            id: "g133",
            spoiler: 0,
            rating: 2.6666667
          },
          {
            id: "g104",
            lie: false,
            spoiler: 0,
            rating: 2.8
          },
          {
            id: "g337",
            lie: false,
            spoiler: 0,
            rating: 2.8
          },
          {
            id: "g115",
            lie: false,
            spoiler: 0,
            rating: 2.5
          },
          {
            spoiler: 2,
            rating: 3,
            lie: false,
            id: "g1055"
          },
          {
            spoiler: 0,
            rating: 2,
            id: "g3203",
            lie: false
          },
          {
            lie: false,
            id: "g100",
            spoiler: 0,
            rating: 3
          },
          {
            lie: false,
            id: "g983",
            rating: 2.2,
            spoiler: 0
          },
          {
            spoiler: 0,
            rating: 2.6666667,
            id: "g1333",
            lie: false
          },
          {
            rating: 1,
            spoiler: 0,
            lie: false,
            id: "g766"
          }
        ],
        length_votes: 2
      },
      finished: null,
      added: 1666457170,
      notes: null
    },
    {
      vote: null,
      id: "v198",
      voted: null,
      vn: {
        description: "The story takes place in a medieval world. The protagonist, Cliff Cloud, comes back to his hometown of Symphonia Kingdom after 3 years of wandering through the lands as a travelling bard. The very day he arrives in town, he has a chance meeting with a girl who's pursued by soldiers. He rescues her, and since she's searching for a place to accommodate for a while, he introduces her to his family and friends at the Korogaru Ringo Tei (= Rolling Apple Pavilion) inn. \n\nThat girl, who named herself Leticia Apple, quickly turns out to be the Princess of Symphonia Kingdom, Leticia la mew Symphonia. She slipped out of the castle in order to see the outside world and the lives of common people. After a few discussions with the protagonists, her father, the benevolent King Worsel, allows her to stay and work at Rolling Apple for a few weeks, as a training as the future Queen.\n\nAnd thus starts the story, as you'll see the lives of the people of Rolling Apple. As Cliff, will you follow Leticia's training and form a relationship with her, or will you interact with the other girls? Choose you own \nadventure, and get to discover their stories, as well as the mysterious background behind Cliff, and the secrets around Symphonia Kingdom!\n\n[From [url=http://www.gamefaqs.com/ps2/921043-princess-holiday-korogaru-ringo-tei-senya-ichiya/faqs]GameFAQs[/url]]",
        rating: 62.7,
        title: "Princess Holiday ~Korogaru Ringotei Sen'ya Ichiya~",
        olang: "ja",
        aliases: [
          "プリホリ",
          "puriholi"
        ],
        released: "2002-09-27",
        languages: [
          "ja",
          "zh-Hans"
        ],
        screenshots: [
          {
            thumbnail: "https://s2.vndb.org/st/99/48699.jpg",
            thumbnail_dims: [
              136,
              102
            ]
          },
          {
            thumbnail_dims: [
              136,
              102
            ],
            thumbnail: "https://s2.vndb.org/st/00/48700.jpg"
          },
          {
            thumbnail_dims: [
              136,
              102
            ],
            thumbnail: "https://s2.vndb.org/st/01/48701.jpg"
          },
          {
            thumbnail_dims: [
              136,
              102
            ],
            thumbnail: "https://s2.vndb.org/st/02/48702.jpg"
          },
          {
            thumbnail_dims: [
              136,
              102
            ],
            thumbnail: "https://s2.vndb.org/st/03/48703.jpg"
          },
          {
            thumbnail: "https://s2.vndb.org/st/04/48704.jpg",
            thumbnail_dims: [
              136,
              102
            ]
          },
          {
            thumbnail_dims: [
              136,
              102
            ],
            thumbnail: "https://s2.vndb.org/st/05/48705.jpg"
          },
          {
            thumbnail: "https://s2.vndb.org/st/06/48706.jpg",
            thumbnail_dims: [
              136,
              102
            ]
          },
          {
            thumbnail_dims: [
              136,
              102
            ],
            thumbnail: "https://s2.vndb.org/st/07/48707.jpg"
          },
          {
            thumbnail_dims: [
              136,
              102
            ],
            thumbnail: "https://s2.vndb.org/st/08/48708.jpg"
          }
        ],
        alttitle: "Princess Holiday～転がるりんご亭千夜一夜～",
        platforms: [
          "win",
          "ps2",
          "drc"
        ],
        length: 3,
        titles: [
          {
            lang: "ja",
            main: true,
            title: "Princess Holiday～転がるりんご亭千夜一夜～",
            latin: "Princess Holiday ~Korogaru Ringotei Sen'ya Ichiya~",
            official: true
          },
          {
            official: false,
            latin: "Princess Holiday ~Huizhuanpingguoting de Yiqianlingyiye~",
            lang: "zh-Hans",
            title: "Princess Holiday～回转苹果亭的一千零一夜～",
            main: false
          }
        ],
        votecount: 20,
        popularity: 0.22,
        length_votes: 0,
        image: {
          violence: 0,
          id: "cv51876",
          dims: [
            256,
            362
          ],
          sexual: 0,
          votecount: 11,
          url: "https://s2.vndb.org/cv/76/51876.jpg"
        },
        length_minutes: null,
        devstatus: 0,
        tags: [
          {
            id: "g12",
            lie: false,
            spoiler: 0,
            rating: 2.3333333
          },
          {
            id: "g2",
            lie: false,
            rating: 3,
            spoiler: 0
          },
          {
            lie: false,
            id: "g32",
            spoiler: 0,
            rating: 2.75
          },
          {
            rating: 1.25,
            spoiler: 0,
            id: "g23",
            lie: false
          },
          {
            id: "g862",
            lie: false,
            spoiler: 0,
            rating: 2.6666667
          },
          {
            lie: false,
            id: "g1005",
            spoiler: 0,
            rating: 3
          },
          {
            lie: false,
            id: "g1251",
            spoiler: 0,
            rating: 3
          },
          {
            id: "g770",
            lie: false,
            spoiler: 0,
            rating: 1.6666666
          },
          {
            spoiler: 2,
            rating: 2.6666667,
            lie: false,
            id: "g1210"
          },
          {
            spoiler: 0,
            rating: 2.6666667,
            id: "g257",
            lie: false
          },
          {
            spoiler: 2,
            rating: 2.6666667,
            lie: false,
            id: "g228"
          },
          {
            lie: false,
            id: "g95",
            spoiler: 0,
            rating: 2.5
          },
          {
            lie: false,
            id: "g96",
            spoiler: 0,
            rating: 3
          },
          {
            rating: 3,
            spoiler: 0,
            id: "g294",
            lie: false
          },
          {
            lie: false,
            id: "g567",
            spoiler: 0,
            rating: 2.6666667
          },
          {
            spoiler: 2,
            rating: 2.6666667,
            lie: false,
            id: "g644"
          },
          {
            spoiler: 2,
            rating: 1,
            lie: false,
            id: "g394"
          },
          {
            lie: false,
            id: "g865",
            spoiler: 2,
            rating: 2.6666667
          },
          {
            id: "g459",
            lie: false,
            rating: 2.3333333,
            spoiler: 0
          },
          {
            rating: 2.6666667,
            spoiler: 0,
            lie: false,
            id: "g201"
          },
          {
            spoiler: 0,
            rating: 2.5,
            lie: false,
            id: "g259"
          },
          {
            id: "g258",
            lie: false,
            spoiler: 0,
            rating: 2.6666667
          },
          {
            lie: false,
            id: "g133",
            spoiler: 0,
            rating: 2.5
          },
          {
            spoiler: 0,
            rating: 1.6666666,
            id: "g302",
            lie: false
          },
          {
            rating: 2.6666667,
            spoiler: 0,
            id: "g695",
            lie: false
          },
          {
            spoiler: 0,
            rating: 2.6666667,
            lie: false,
            id: "g488"
          },
          {
            spoiler: 0,
            rating: 2.6666667,
            id: "g1478",
            lie: false
          },
          {
            id: "g111",
            lie: false,
            spoiler: 0,
            rating: 2.6666667
          },
          {
            id: "g172",
            lie: false,
            rating: 2.6666667,
            spoiler: 0
          },
          {
            spoiler: 2,
            rating: 1.3333334,
            lie: false,
            id: "g103"
          },
          {
            spoiler: 0,
            rating: 2.6666667,
            lie: false,
            id: "g118"
          },
          {
            id: "g641",
            lie: false,
            spoiler: 0,
            rating: 2.6666667
          },
          {
            id: "g606",
            lie: false,
            spoiler: 0,
            rating: 2.5
          },
          {
            id: "g1269",
            lie: false,
            spoiler: 0,
            rating: 2.6666667
          },
          {
            spoiler: 2,
            rating: 2.6666667,
            lie: false,
            id: "g822"
          },
          {
            lie: false,
            id: "g517",
            spoiler: 0,
            rating: 2.3333333
          },
          {
            spoiler: 0,
            rating: 2,
            lie: false,
            id: "g278"
          },
          {
            lie: false,
            id: "g138",
            rating: 2.6666667,
            spoiler: 0
          },
          {
            spoiler: 0,
            rating: 2.6666667,
            id: "g186",
            lie: false
          },
          {
            id: "g140",
            lie: false,
            spoiler: 2,
            rating: 2.6666667
          },
          {
            id: "g415",
            lie: false,
            spoiler: 2,
            rating: 2.6666667
          },
          {
            id: "g3203",
            lie: false,
            rating: 2,
            spoiler: 0
          },
          {
            spoiler: 0,
            rating: 2.6666667,
            id: "g522",
            lie: false
          },
          {
            id: "g92",
            lie: false,
            rating: 1,
            spoiler: 2
          },
          {
            lie: false,
            id: "g327",
            spoiler: 0,
            rating: 3
          },
          {
            rating: 0.75,
            spoiler: 0,
            id: "g89",
            lie: false
          },
          {
            rating: 2.6666667,
            spoiler: 0,
            lie: false,
            id: "g318"
          },
          {
            spoiler: 1,
            rating: 3,
            id: "g149",
            lie: false
          },
          {
            spoiler: 2,
            rating: 2,
            lie: false,
            id: "g1265"
          },
          {
            rating: 2.6666667,
            spoiler: 0,
            id: "g985",
            lie: false
          },
          {
            id: "g224",
            lie: false,
            rating: 2.6666667,
            spoiler: 0
          },
          {
            rating: 2.6666667,
            spoiler: 2,
            id: "g287",
            lie: false
          },
          {
            spoiler: 0,
            rating: 2.6,
            lie: false,
            id: "g737"
          },
          {
            rating: 2.3333333,
            spoiler: 0,
            lie: false,
            id: "g994"
          },
          {
            id: "g636",
            lie: false,
            spoiler: 0,
            rating: 2.6666667
          },
          {
            rating: 2.6666667,
            spoiler: 2,
            lie: false,
            id: "g416"
          },
          {
            spoiler: 0,
            rating: 2.5,
            id: "g414",
            lie: false
          },
          {
            spoiler: 0,
            rating: 2,
            id: "g3172",
            lie: false
          },
          {
            rating: 2,
            spoiler: 0,
            lie: false,
            id: "g728"
          },
          {
            spoiler: 0,
            rating: 1.6666666,
            lie: false,
            id: "g957"
          },
          {
            lie: false,
            id: "g123",
            spoiler: 2,
            rating: 2.6666667
          },
          {
            id: "g195",
            lie: false,
            rating: 2,
            spoiler: 0
          },
          {
            id: "g306",
            lie: false,
            spoiler: 0,
            rating: 2.6666667
          },
          {
            spoiler: 0,
            rating: 1.6666666,
            lie: false,
            id: "g519"
          },
          {
            id: "g3162",
            lie: false,
            spoiler: 2,
            rating: 1
          },
          {
            lie: false,
            id: "g923",
            spoiler: 2,
            rating: 1
          }
        ]
      },
      finished: null,
      added: 1671859271,
      notes: null,
      lastmod: 1671859271,
      started: null
    },
    {
      lastmod: 1648474602,
      started: null,
      vote: null,
      notes: null,
      added: 1648474602,
      finished: null,
      vn: {
        length_votes: 130,
        devstatus: 0,
        tags: [
          {
            id: "g23",
            lie: false,
            spoiler: 0,
            rating: 1.5972222
          },
          {
            spoiler: 0,
            rating: 2.8666666,
            lie: false,
            id: "g19"
          },
          {
            lie: false,
            id: "g32",
            spoiler: 0,
            rating: 2.84375
          },
          {
            id: "g48",
            lie: false,
            spoiler: 0,
            rating: 2.2463768
          },
          {
            spoiler: 0,
            rating: 2.8108108,
            id: "g598",
            lie: false
          },
          {
            spoiler: 0,
            rating: 2.7358491,
            id: "g1335",
            lie: false
          },
          {
            spoiler: 0,
            rating: 2.1960785,
            id: "g698",
            lie: false
          },
          {
            id: "g2390",
            lie: false,
            spoiler: 0,
            rating: 0.14285715
          },
          {
            spoiler: 2,
            rating: 1.5,
            lie: false,
            id: "g865"
          },
          {
            lie: false,
            id: "g876",
            spoiler: 0,
            rating: 2.2142856
          },
          {
            rating: 2.1917808,
            spoiler: 0,
            id: "g45",
            lie: false
          },
          {
            lie: false,
            id: "g325",
            spoiler: 0,
            rating: 2.9302325
          },
          {
            lie: false,
            id: "g110",
            spoiler: 0,
            rating: 1.7647059
          },
          {
            id: "g190",
            lie: false,
            spoiler: 0,
            rating: 1.5151515
          },
          {
            rating: 2.4305556,
            spoiler: 0,
            id: "g215",
            lie: false
          },
          {
            rating: 2,
            spoiler: 0,
            lie: false,
            id: "g3155"
          },
          {
            spoiler: 0,
            rating: 2.2857144,
            id: "g878",
            lie: false
          },
          {
            id: "g3597",
            lie: false,
            spoiler: 2,
            rating: 1
          },
          {
            spoiler: 0,
            rating: 2,
            lie: false,
            id: "g3099"
          },
          {
            spoiler: 2,
            rating: 2.6666667,
            lie: false,
            id: "g445"
          },
          {
            lie: false,
            id: "g875",
            spoiler: 0,
            rating: 2.25
          },
          {
            lie: false,
            id: "g3117",
            spoiler: 2,
            rating: 2
          },
          {
            spoiler: 0,
            rating: 2,
            lie: false,
            id: "g3438"
          },
          {
            id: "g444",
            lie: false,
            spoiler: 2,
            rating: 2.8765433
          },
          {
            spoiler: 0,
            rating: 2,
            lie: false,
            id: "g3140"
          },
          {
            spoiler: 1,
            rating: 2.6956522,
            lie: false,
            id: "g1347"
          },
          {
            lie: false,
            id: "g601",
            spoiler: 0,
            rating: 2.3
          },
          {
            lie: false,
            id: "g168",
            spoiler: 1,
            rating: 2.3333333
          },
          {
            lie: false,
            id: "g201",
            spoiler: 2,
            rating: 2.8125
          },
          {
            lie: false,
            id: "g322",
            rating: 2.7831326,
            spoiler: 0
          },
          {
            lie: false,
            id: "g508",
            spoiler: 2,
            rating: 2.512195
          },
          {
            id: "g1558",
            lie: false,
            spoiler: 0,
            rating: 2.5454545
          },
          {
            id: "g580",
            lie: false,
            spoiler: 0,
            rating: 0.35849056
          },
          {
            spoiler: 0,
            rating: 2.6029413,
            id: "g692",
            lie: false
          },
          {
            spoiler: 0,
            rating: 2.0185184,
            lie: false,
            id: "g672"
          },
          {
            spoiler: 0,
            rating: 1.8421053,
            id: "g373",
            lie: false
          },
          {
            rating: 2.7142856,
            spoiler: 1,
            id: "g3106",
            lie: false
          },
          {
            lie: false,
            id: "g1343",
            rating: 2.7368422,
            spoiler: 1
          },
          {
            lie: false,
            id: "g1403",
            spoiler: 0,
            rating: 2.4166667
          },
          {
            lie: false,
            id: "g194",
            spoiler: 0,
            rating: 1.6575342
          },
          {
            spoiler: 0,
            rating: 2.6956522,
            lie: false,
            id: "g324"
          },
          {
            spoiler: 0,
            rating: 2.5,
            lie: false,
            id: "g2387"
          },
          {
            id: "g677",
            lie: false,
            rating: 2.2666667,
            spoiler: 0
          },
          {
            id: "g525",
            lie: false,
            spoiler: 0,
            rating: 2.5365853
          },
          {
            id: "g871",
            lie: false,
            spoiler: 0,
            rating: 1.9583334
          },
          {
            spoiler: 0,
            rating: 2.6206896,
            lie: false,
            id: "g1431"
          },
          {
            spoiler: 0,
            rating: 2.4925373,
            lie: false,
            id: "g756"
          },
          {
            spoiler: 0,
            rating: 1.6901408,
            lie: false,
            id: "g236"
          },
          {
            lie: false,
            id: "g96",
            spoiler: 0,
            rating: 1.9577465
          },
          {
            spoiler: 0,
            rating: 2.8095238,
            lie: false,
            id: "g133"
          },
          {
            rating: 2.4788733,
            spoiler: 0,
            id: "g228",
            lie: false
          },
          {
            id: "g355",
            lie: false,
            spoiler: 0,
            rating: 2.672131
          },
          {
            id: "g1204",
            lie: false,
            spoiler: 2,
            rating: 1.9607843
          },
          {
            id: "g2407",
            lie: false,
            spoiler: 0,
            rating: 2.6363637
          },
          {
            lie: false,
            id: "g676",
            spoiler: 0,
            rating: 2.6666667
          },
          {
            lie: false,
            id: "g1955",
            spoiler: 1,
            rating: 2
          },
          {
            spoiler: 0,
            rating: 2.4081633,
            lie: false,
            id: "g851"
          },
          {
            lie: false,
            id: "g431",
            rating: 1.1428572,
            spoiler: 1
          },
          {
            id: "g606",
            lie: false,
            spoiler: 0,
            rating: 1
          },
          {
            spoiler: 0,
            rating: 2.536232,
            lie: false,
            id: "g172"
          },
          {
            id: "g181",
            lie: false,
            rating: 3,
            spoiler: 0
          },
          {
            id: "g180",
            lie: false,
            spoiler: 0,
            rating: 1.625
          },
          {
            spoiler: 0,
            rating: 3,
            id: "g320",
            lie: true
          },
          {
            rating: 2.6111112,
            spoiler: 0,
            id: "g776",
            lie: false
          },
          {
            rating: 2.0714285,
            spoiler: 0,
            lie: false,
            id: "g1426"
          },
          {
            spoiler: 1,
            rating: 2.5555556,
            lie: false,
            id: "g659"
          },
          {
            spoiler: 0,
            rating: 2.0666666,
            id: "g1288",
            lie: false
          },
          {
            id: "g955",
            lie: false,
            rating: 1.5,
            spoiler: 2
          },
          {
            id: "g779",
            lie: false,
            rating: 1.6811594,
            spoiler: 2
          },
          {
            id: "g775",
            lie: false,
            spoiler: 2,
            rating: 2.475
          },
          {
            spoiler: 0,
            rating: 2.5151515,
            lie: false,
            id: "g564"
          },
          {
            id: "g1175",
            lie: false,
            spoiler: 2,
            rating: 1.9824561
          },
          {
            rating: 2,
            spoiler: 0,
            id: "g683",
            lie: false
          },
          {
            lie: false,
            id: "g2008",
            rating: 2.25,
            spoiler: 2
          },
          {
            lie: false,
            id: "g1676",
            rating: 1,
            spoiler: 0
          },
          {
            spoiler: 0,
            rating: 1.9523809,
            id: "g216",
            lie: false
          },
          {
            lie: false,
            id: "g100",
            rating: 2.1666667,
            spoiler: 0
          },
          {
            lie: false,
            id: "g1184",
            spoiler: 0,
            rating: 2.5
          },
          {
            id: "g1581",
            lie: false,
            spoiler: 0,
            rating: 2.142857
          },
          {
            lie: false,
            id: "g1344",
            spoiler: 0,
            rating: 2.5428572
          },
          {
            lie: false,
            id: "g789",
            rating: 2.4210527,
            spoiler: 0
          },
          {
            rating: 2.5,
            spoiler: 0,
            lie: false,
            id: "g2331"
          },
          {
            spoiler: 0,
            rating: 2.5185184,
            id: "g1646",
            lie: false
          },
          {
            id: "g3005",
            lie: false,
            spoiler: 0,
            rating: 2.7272727
          },
          {
            spoiler: 0,
            rating: 2.2931035,
            id: "g1196",
            lie: false
          },
          {
            lie: false,
            id: "g443",
            spoiler: 1,
            rating: 3
          },
          {
            rating: 1.3181819,
            spoiler: 1,
            lie: false,
            id: "g1607"
          },
          {
            id: "g633",
            lie: false,
            rating: 2.6666667,
            spoiler: 1
          },
          {
            rating: 2.2,
            spoiler: 0,
            id: "g961",
            lie: false
          },
          {
            lie: false,
            id: "g108",
            spoiler: 0,
            rating: 2.7228916
          },
          {
            rating: 1.2,
            spoiler: 1,
            id: "g137",
            lie: false
          },
          {
            lie: false,
            id: "g326",
            spoiler: 0,
            rating: 2.180723
          },
          {
            id: "g323",
            lie: false,
            rating: 2.8289473,
            spoiler: 0
          },
          {
            spoiler: 0,
            rating: 2.2537313,
            lie: false,
            id: "g95"
          },
          {
            spoiler: 0,
            rating: 2.875,
            lie: false,
            id: "g321"
          },
          {
            spoiler: 2,
            rating: 2.6133332,
            lie: false,
            id: "g174"
          },
          {
            spoiler: 0,
            rating: 2.7777777,
            lie: false,
            id: "g3172"
          },
          {
            spoiler: 2,
            rating: 2.8333333,
            lie: false,
            id: "g1366"
          },
          {
            spoiler: 2,
            rating: 2.3333333,
            id: "g3246",
            lie: false
          },
          {
            id: "g728",
            lie: false,
            rating: 1.0166667,
            spoiler: 1
          },
          {
            spoiler: 0,
            rating: 2,
            id: "g2452",
            lie: false
          },
          {
            id: "g1393",
            lie: false,
            spoiler: 0,
            rating: 1.75
          },
          {
            lie: false,
            id: "g2529",
            spoiler: 1,
            rating: 2.8
          },
          {
            lie: false,
            id: "g3203",
            spoiler: 0,
            rating: 2.25
          },
          {
            lie: false,
            id: "g3147",
            rating: 2.25,
            spoiler: 0
          },
          {
            lie: false,
            id: "g733",
            spoiler: 0,
            rating: 2.2407408
          },
          {
            spoiler: 0,
            rating: 1.9333333,
            lie: false,
            id: "g565"
          },
          {
            spoiler: 0,
            rating: 2.469697,
            id: "g222",
            lie: false
          },
          {
            id: "g1467",
            lie: false,
            rating: 1.3333334,
            spoiler: 0
          },
          {
            spoiler: 0,
            rating: 2.75,
            id: "g3171",
            lie: false
          },
          {
            lie: false,
            id: "g217",
            spoiler: 0,
            rating: 2.8901098
          },
          {
            spoiler: 0,
            rating: 2.2972972,
            lie: false,
            id: "g176"
          },
          {
            id: "g2849",
            lie: false,
            spoiler: 0,
            rating: 2.9230769
          },
          {
            lie: false,
            id: "g544",
            spoiler: 0,
            rating: 1.7894737
          },
          {
            lie: false,
            id: "g737",
            spoiler: 0,
            rating: 2.3148148
          },
          {
            id: "g221",
            lie: false,
            spoiler: 0,
            rating: 2.2063491
          },
          {
            spoiler: 0,
            rating: 2.2666667,
            lie: false,
            id: "g159"
          },
          {
            id: "g1265",
            lie: false,
            spoiler: 2,
            rating: 2.8823528
          },
          {
            spoiler: 0,
            rating: 2.6875,
            id: "g1053",
            lie: false
          },
          {
            spoiler: 0,
            rating: 1.6785715,
            id: "g894",
            lie: false
          },
          {
            lie: false,
            id: "g1569",
            spoiler: 0,
            rating: 2.8666666
          },
          {
            id: "g500",
            lie: false,
            spoiler: 1,
            rating: 2.7
          },
          {
            spoiler: 0,
            rating: 1,
            lie: false,
            id: "g1796"
          },
          {
            id: "g2086",
            lie: false,
            spoiler: 1,
            rating: 1.8571428
          },
          {
            spoiler: 0,
            rating: 2.220339,
            id: "g757",
            lie: false
          },
          {
            id: "g3306",
            lie: false,
            spoiler: 0,
            rating: 0.33333334
          },
          {
            rating: 2.5064936,
            spoiler: 0,
            id: "g148",
            lie: false
          },
          {
            id: "g2523",
            lie: false,
            rating: 2.4285715,
            spoiler: 0
          },
          {
            lie: false,
            id: "g778",
            spoiler: 0,
            rating: 2.421875
          },
          {
            lie: false,
            id: "g855",
            rating: 1.6153846,
            spoiler: 0
          },
          {
            spoiler: 0,
            rating: 1.8571428,
            lie: false,
            id: "g1190"
          },
          {
            spoiler: 0,
            rating: 2.7692308,
            lie: false,
            id: "g873"
          },
          {
            id: "g151",
            lie: false,
            rating: 1.6349206,
            spoiler: 0
          }
        ],
        image: {
          dims: [
            256,
            348
          ],
          sexual: 0,
          id: "cv26442",
          violence: 0,
          url: "https://s2.vndb.org/cv/42/26442.jpg",
          votecount: 11
        },
        length_minutes: 2100,
        description: "You play the role of Azai Kyousuke, the son of a legendary gangster infamous in the underworld. You spend your time listening to Bach, playing God at school and covertly working for your stepfather, a ruthless financial heavyweight. This idyllic existence is broken when two individuals appear in the city - a beautiful girl named Usami Haru with hair you could get lost in for days, and a powerful international gangster known only as \"Maou\". Almost without delay, the two begin a deadly cat-and-mouse game, bringing you and your friends into the crossfire. Plotting, political intrigue and layer upon layer of interlocking traps are the weapons in this epic battle of wits.\n\n[Edited from the description by [url=http://forums.novelnews.net/showpost.php?p=57492&postcount=1]Asceai[/url]]",
        rating: 83,
        title: "G-senjou no Maou",
        olang: "ja",
        length: 3,
        titles: [
          {
            lang: "ar",
            main: false,
            title: "G-senjou no Maou",
            official: false,
            latin: null
          },
          {
            title: "G-senjou no Maou - The Devil on G-String",
            main: false,
            lang: "en",
            official: true,
            latin: null
          },
          {
            lang: "es",
            title: "G-senjou no Maou",
            main: false,
            official: false,
            latin: null
          },
          {
            lang: "hu",
            title: "Az Ördög a G-húron",
            main: false,
            latin: null,
            official: false
          },
          {
            title: "G-senjou no Maou",
            main: false,
            lang: "it",
            latin: null,
            official: false
          },
          {
            official: true,
            latin: "G-senjou no Maou",
            lang: "ja",
            main: true,
            title: "G線上の魔王"
          },
          {
            lang: "ko",
            main: false,
            title: "G선상의 마왕",
            official: false,
            latin: "G-Seonsangui Mawang"
          },
          {
            main: false,
            title: "Diabeł na strunie G",
            lang: "pl",
            official: false,
            latin: null
          },
          {
            latin: null,
            official: false,
            lang: "pt-br",
            title: "O Diabo na Corda Sol",
            main: false
          },
          {
            latin: null,
            official: false,
            main: false,
            title: "G-senjou no Maou - The Devil on G-String",
            lang: "ru"
          },
          {
            lang: "vi",
            title: "G-senjou no Maou",
            main: false,
            latin: null,
            official: false
          },
          {
            main: false,
            title: "G弦上的魔王",
            lang: "zh-Hans",
            official: false,
            latin: "G-xian Shang de Mowang"
          }
        ],
        votecount: 10726,
        popularity: 78.93,
        aliases: [],
        released: "2008-05-29",
        screenshots: [
          {
            thumbnail_dims: [
              136,
              102
            ],
            thumbnail: "https://s2.vndb.org/st/40/17140.jpg"
          },
          {
            thumbnail_dims: [
              136,
              102
            ],
            thumbnail: "https://s2.vndb.org/st/42/17142.jpg"
          },
          {
            thumbnail_dims: [
              136,
              102
            ],
            thumbnail: "https://s2.vndb.org/st/44/17144.jpg"
          },
          {
            thumbnail_dims: [
              136,
              102
            ],
            thumbnail: "https://s2.vndb.org/st/46/17146.jpg"
          },
          {
            thumbnail: "https://s2.vndb.org/st/75/128475.jpg",
            thumbnail_dims: [
              136,
              77
            ]
          },
          {
            thumbnail: "https://s2.vndb.org/st/76/128476.jpg",
            thumbnail_dims: [
              136,
              77
            ]
          },
          {
            thumbnail_dims: [
              136,
              77
            ],
            thumbnail: "https://s2.vndb.org/st/77/128477.jpg"
          },
          {
            thumbnail: "https://s2.vndb.org/st/78/128478.jpg",
            thumbnail_dims: [
              136,
              77
            ]
          },
          {
            thumbnail: "https://s2.vndb.org/st/79/128479.jpg",
            thumbnail_dims: [
              136,
              77
            ]
          },
          {
            thumbnail_dims: [
              136,
              77
            ],
            thumbnail: "https://s2.vndb.org/st/80/128480.jpg"
          }
        ],
        languages: [
          "ar",
          "en",
          "es",
          "hu",
          "it",
          "ja",
          "ko",
          "pl",
          "pt-br",
          "vi",
          "zh-Hans"
        ],
        alttitle: "G線上の魔王",
        platforms: [
          "win",
          "psp",
          "vnd"
        ]
      },
      voted: null,
      id: "v211"
    },
    {
      vote: 90,
      vn: {
        title: "Yoake Mae yori Ruri Iro na",
        olang: "ja",
        rating: 73.4,
        description: "The story is set in very distant future, in a time when mankind is just recovering from decades of war fought between Earth and a terraformed Moon. The war was so devastating that it set technological progress back by decades if not centuries, which is why the settings don’t look futuristic. Although the world is now at peace, there continues to be distrust between the Sphere Kingdom (Moon) and the Earth Federation. Travel between the two is restricted for diplomatic purposes and confined to a single spaceport on Earth.\n\nSo anyway, one day the lunar princess, Feena fam Earthlight, comes to the protagonist’s house for home stay…\n\n[From [url=http://www.darkmirage.com/2006/10/23/yoake-mae-yori-ruriiro-na/]Dark Mirage[/url]]",
        popularity: 5.07,
        votecount: 498,
        titles: [
          {
            lang: "ja",
            title: "夜明け前より瑠璃色な",
            main: true,
            official: true,
            latin: "Yoake Mae yori Ruri Iro na"
          },
          {
            latin: "Saebyeoknyeokboda Yurisaegin -Brighter than Dawning Blue-",
            official: true,
            title: "새벽녘보다 유리색인 -Brighter than Dawning Blue-",
            main: false,
            lang: "ko"
          },
          {
            official: false,
            latin: "Gengsheng Limingqian de Liulise",
            main: false,
            title: "更胜黎明前的琉璃色",
            lang: "zh-Hans"
          }
        ],
        length: 4,
        alttitle: "夜明け前より瑠璃色な",
        platforms: [
          "win",
          "psp",
          "ps2"
        ],
        screenshots: [
          {
            thumbnail: "https://s2.vndb.org/st/77/11577.jpg",
            thumbnail_dims: [
              136,
              102
            ]
          },
          {
            thumbnail: "https://s2.vndb.org/st/78/11578.jpg",
            thumbnail_dims: [
              136,
              102
            ]
          },
          {
            thumbnail: "https://s2.vndb.org/st/79/11579.jpg",
            thumbnail_dims: [
              136,
              102
            ]
          },
          {
            thumbnail_dims: [
              136,
              102
            ],
            thumbnail: "https://s2.vndb.org/st/80/11580.jpg"
          },
          {
            thumbnail: "https://s2.vndb.org/st/81/11581.jpg",
            thumbnail_dims: [
              136,
              102
            ]
          },
          {
            thumbnail_dims: [
              136,
              102
            ],
            thumbnail: "https://s2.vndb.org/st/82/11582.jpg"
          },
          {
            thumbnail: "https://s2.vndb.org/st/83/11583.jpg",
            thumbnail_dims: [
              136,
              102
            ]
          },
          {
            thumbnail_dims: [
              136,
              102
            ],
            thumbnail: "https://s2.vndb.org/st/84/11584.jpg"
          },
          {
            thumbnail: "https://s2.vndb.org/st/85/11585.jpg",
            thumbnail_dims: [
              136,
              102
            ]
          },
          {
            thumbnail: "https://s2.vndb.org/st/86/11586.jpg",
            thumbnail_dims: [
              136,
              102
            ]
          }
        ],
        languages: [
          "en",
          "ja",
          "ko",
          "zh-Hans"
        ],
        released: "2005-09-22",
        aliases: [
          "Brighter than Dawning Blue",
          "yoakena",
          "keyorina",
          "akeruri",
          "yoriruri",
          "yoaruri",
          "ruriiro",
          "amaeruna",
          "夜明けな",
          "けよりな",
          "あけるり",
          "明け瑠璃",
          "よりるり",
          "よあるり",
          "瑠璃色",
          "あまえるな",
          "夜明前的琉璃色",
          "Yoake Mae yori Ruriiro na"
        ],
        length_votes: 10,
        tags: [
          {
            lie: false,
            id: "g32",
            spoiler: 0,
            rating: 2.4444444
          },
          {
            id: "g292",
            lie: false,
            spoiler: 0,
            rating: 2
          },
          {
            rating: 2,
            spoiler: 0,
            lie: false,
            id: "g302"
          },
          {
            lie: false,
            id: "g100",
            spoiler: 0,
            rating: 2
          },
          {
            id: "g193",
            lie: false,
            rating: 2,
            spoiler: 0
          },
          {
            spoiler: 0,
            rating: 2,
            lie: false,
            id: "g246"
          },
          {
            id: "g1478",
            lie: false,
            rating: 2,
            spoiler: 0
          },
          {
            spoiler: 0,
            rating: 2,
            id: "g1599",
            lie: false
          },
          {
            lie: false,
            id: "g676",
            rating: 2,
            spoiler: 0
          },
          {
            lie: false,
            id: "g1048",
            spoiler: 0,
            rating: 2.1666667
          },
          {
            id: "g603",
            lie: false,
            spoiler: 0,
            rating: 2
          },
          {
            id: "g147",
            lie: false,
            spoiler: 0,
            rating: 1.5
          },
          {
            lie: false,
            id: "g355",
            spoiler: 0,
            rating: 2.3333333
          },
          {
            spoiler: 0,
            rating: 2.3333333,
            id: "g151",
            lie: false
          },
          {
            spoiler: 0,
            rating: 2.2857144,
            lie: false,
            id: "g53"
          },
          {
            spoiler: 0,
            rating: 2.6666667,
            lie: false,
            id: "g215"
          },
          {
            lie: false,
            id: "g47",
            spoiler: 0,
            rating: 2.2222223
          },
          {
            lie: false,
            id: "g181",
            spoiler: 0,
            rating: 3
          },
          {
            spoiler: 0,
            rating: 2,
            lie: false,
            id: "g1603"
          },
          {
            spoiler: 0,
            rating: 2.2,
            id: "g461",
            lie: false
          },
          {
            id: "g453",
            lie: false,
            spoiler: 0,
            rating: 3
          },
          {
            spoiler: 0,
            rating: 2,
            lie: false,
            id: "g3172"
          },
          {
            lie: false,
            id: "g1267",
            spoiler: 0,
            rating: 2
          },
          {
            spoiler: 0,
            rating: 1,
            id: "g517",
            lie: false
          },
          {
            rating: 3,
            spoiler: 0,
            lie: false,
            id: "g1483"
          },
          {
            spoiler: 0,
            rating: 2.375,
            lie: false,
            id: "g373"
          },
          {
            id: "g294",
            lie: false,
            spoiler: 0,
            rating: 2.5555556
          },
          {
            lie: false,
            id: "g110",
            spoiler: 0,
            rating: 2
          },
          {
            spoiler: 0,
            rating: 2,
            id: "g186",
            lie: false
          },
          {
            id: "g201",
            lie: false,
            spoiler: 0,
            rating: 2.1666667
          },
          {
            id: "g508",
            lie: false,
            spoiler: 2,
            rating: 2.5
          },
          {
            rating: 2.5,
            spoiler: 2,
            lie: false,
            id: "g1366"
          },
          {
            spoiler: 0,
            rating: 3,
            lie: false,
            id: "g2075"
          },
          {
            id: "g465",
            lie: false,
            spoiler: 0,
            rating: 2.5
          },
          {
            spoiler: 0,
            rating: 2,
            lie: false,
            id: "g509"
          },
          {
            id: "g681",
            lie: false,
            spoiler: 0,
            rating: 2
          },
          {
            lie: false,
            id: "g420",
            spoiler: 0,
            rating: 2.75
          },
          {
            spoiler: 0,
            rating: 2,
            id: "g829",
            lie: false
          },
          {
            id: "g1335",
            lie: false,
            spoiler: 0,
            rating: 2
          },
          {
            rating: 2,
            spoiler: 0,
            id: "g677",
            lie: false
          },
          {
            spoiler: 0,
            rating: 2,
            lie: false,
            id: "g414"
          },
          {
            id: "g95",
            lie: false,
            spoiler: 1,
            rating: 2
          },
          {
            spoiler: 0,
            rating: 2.5,
            id: "g182",
            lie: false
          },
          {
            spoiler: 1,
            rating: 1,
            id: "g337",
            lie: false
          },
          {
            spoiler: 0,
            rating: 2.75,
            id: "g133",
            lie: false
          },
          {
            spoiler: 0,
            rating: 1,
            id: "g279",
            lie: false
          },
          {
            spoiler: 0,
            rating: 2.3333333,
            lie: false,
            id: "g416"
          },
          {
            lie: false,
            id: "g683",
            spoiler: 0,
            rating: 2
          },
          {
            spoiler: 0,
            rating: 2,
            lie: false,
            id: "g728"
          },
          {
            id: "g2544",
            lie: false,
            rating: 3,
            spoiler: 1
          },
          {
            lie: false,
            id: "g2133",
            rating: 1,
            spoiler: 0
          },
          {
            rating: 2,
            spoiler: 0,
            lie: false,
            id: "g1234"
          },
          {
            lie: false,
            id: "g1954",
            spoiler: 2,
            rating: 2
          },
          {
            spoiler: 0,
            rating: 3,
            id: "g692",
            lie: false
          },
          {
            id: "g606",
            lie: false,
            spoiler: 0,
            rating: 2
          },
          {
            rating: 2,
            spoiler: 0,
            lie: false,
            id: "g633"
          },
          {
            spoiler: 2,
            rating: 2,
            id: "g287",
            lie: false
          },
          {
            spoiler: 0,
            rating: 1,
            lie: false,
            id: "g174"
          },
          {
            lie: false,
            id: "g172",
            rating: 3,
            spoiler: 0
          },
          {
            id: "g107",
            lie: false,
            spoiler: 0,
            rating: 2
          },
          {
            lie: false,
            id: "g3415",
            spoiler: 0,
            rating: 2
          },
          {
            lie: false,
            id: "g659",
            spoiler: 0,
            rating: 2
          },
          {
            spoiler: 0,
            rating: 2,
            lie: false,
            id: "g1661"
          },
          {
            spoiler: 0,
            rating: 2,
            id: "g3171",
            lie: false
          },
          {
            id: "g415",
            lie: false,
            spoiler: 0,
            rating: 2
          },
          {
            id: "g737",
            lie: false,
            spoiler: 0,
            rating: 2
          },
          {
            spoiler: 0,
            rating: 1.6666666,
            lie: false,
            id: "g1715"
          },
          {
            spoiler: 0,
            rating: 2,
            id: "g2033",
            lie: false
          },
          {
            lie: false,
            id: "g1184",
            spoiler: 0,
            rating: 3
          },
          {
            spoiler: 0,
            rating: 2,
            lie: false,
            id: "g195"
          },
          {
            rating: 2.857143,
            spoiler: 0,
            lie: false,
            id: "g148"
          },
          {
            lie: false,
            id: "g112",
            rating: 2.142857,
            spoiler: 0
          },
          {
            spoiler: 0,
            rating: 3,
            lie: false,
            id: "g149"
          },
          {
            lie: false,
            id: "g726",
            rating: 2,
            spoiler: 0
          },
          {
            id: "g3159",
            lie: false,
            spoiler: 0,
            rating: 2
          },
          {
            lie: false,
            id: "g904",
            rating: 2,
            spoiler: 0
          },
          {
            spoiler: 0,
            rating: 2.5,
            id: "g1733",
            lie: false
          },
          {
            rating: 2,
            spoiler: 2,
            lie: false,
            id: "g1701"
          },
          {
            spoiler: 1,
            rating: 2.3333333,
            lie: false,
            id: "g228"
          },
          {
            rating: 1.5,
            spoiler: 0,
            id: "g62",
            lie: false
          },
          {
            id: "g820",
            lie: false,
            rating: 2,
            spoiler: 0
          },
          {
            spoiler: 0,
            rating: 2,
            id: "g710",
            lie: false
          },
          {
            spoiler: 0,
            rating: 2,
            id: "g599",
            lie: false
          },
          {
            lie: false,
            id: "g459",
            spoiler: 0,
            rating: 2.6666667
          },
          {
            spoiler: 0,
            rating: 1,
            lie: false,
            id: "g3147"
          },
          {
            lie: false,
            id: "g2159",
            spoiler: 0,
            rating: 2
          },
          {
            spoiler: 0,
            rating: 2.4444444,
            id: "g96",
            lie: false
          },
          {
            id: "g194",
            lie: false,
            spoiler: 0,
            rating: 2
          },
          {
            spoiler: 0,
            rating: 2.2,
            id: "g154",
            lie: false
          },
          {
            spoiler: 0,
            rating: 2.5,
            id: "g743",
            lie: false
          },
          {
            lie: false,
            id: "g454",
            spoiler: 0,
            rating: 2.1666667
          },
          {
            rating: 1.8,
            spoiler: 0,
            lie: false,
            id: "g602"
          },
          {
            spoiler: 0,
            rating: 2,
            id: "g3203",
            lie: false
          },
          {
            id: "g553",
            lie: false,
            spoiler: 0,
            rating: 1.5
          },
          {
            lie: false,
            id: "g875",
            spoiler: 0,
            rating: 2
          }
        ],
        devstatus: 0,
        length_minutes: 2250,
        image: {
          violence: 0,
          id: "cv32615",
          dims: [
            256,
            348
          ],
          sexual: 0,
          votecount: 13,
          url: "https://s2.vndb.org/cv/15/32615.jpg"
        }
      },
      voted: 1634273210,
      id: "v232",
      notes: "finished feena + estel route",
      added: 1634273208,
      finished: null,
      lastmod: 1647945837,
      started: null
    },
    {
      added: 1570018238,
      finished: null,
      notes: null,
      id: "v414",
      vn: {
        popularity: 21.94,
        votecount: 2840,
        titles: [
          {
            title: "Kira Kira",
            main: false,
            lang: "en",
            official: true,
            latin: null
          },
          {
            official: true,
            latin: "KIRA☆KIRA",
            main: true,
            title: "キラ☆キラ",
            lang: "ja"
          }
        ],
        length: 3,
        platforms: [
          "win",
          "ios",
          "and",
          "bdp",
          "ps2",
          "vnd"
        ],
        alttitle: "キラ☆キラ",
        screenshots: [
          {
            thumbnail: "https://s2.vndb.org/st/32/3132.jpg",
            thumbnail_dims: [
              136,
              102
            ]
          },
          {
            thumbnail: "https://s2.vndb.org/st/33/3133.jpg",
            thumbnail_dims: [
              136,
              102
            ]
          },
          {
            thumbnail_dims: [
              136,
              102
            ],
            thumbnail: "https://s2.vndb.org/st/34/3134.jpg"
          },
          {
            thumbnail_dims: [
              136,
              102
            ],
            thumbnail: "https://s2.vndb.org/st/35/3135.jpg"
          },
          {
            thumbnail_dims: [
              136,
              102
            ],
            thumbnail: "https://s2.vndb.org/st/36/3136.jpg"
          },
          {
            thumbnail_dims: [
              136,
              102
            ],
            thumbnail: "https://s2.vndb.org/st/37/3137.jpg"
          },
          {
            thumbnail: "https://s2.vndb.org/st/42/3642.jpg",
            thumbnail_dims: [
              136,
              102
            ]
          },
          {
            thumbnail_dims: [
              136,
              102
            ],
            thumbnail: "https://s2.vndb.org/st/43/3643.jpg"
          },
          {
            thumbnail: "https://s2.vndb.org/st/44/3644.jpg",
            thumbnail_dims: [
              136,
              102
            ]
          },
          {
            thumbnail: "https://s2.vndb.org/st/45/3645.jpg",
            thumbnail_dims: [
              136,
              102
            ]
          }
        ],
        languages: [
          "en",
          "es",
          "ja",
          "zh-Hans"
        ],
        aliases: [
          "KiraKira"
        ],
        released: "2007-11-22",
        olang: "ja",
        title: "KIRA☆KIRA",
        rating: 75.1,
        description: "Shikanosuke Maejima is a student at the Missionary school, Oubi Academy. He doesn't attend his club, he doesn't put much effort in his studies, all he does is show up at his part time job; in short, his life could be better. One day, he meets a strange girl, Kirari Shiino, at work and before he knows it, they've formed a punk band.\n\nThe band consists of Shikanosuke, Kirari, his childhood friend Chie Isurugi, and a rich but weak young lady by the name of Sarina Kashiwara. The four of them are members of the Second Literature Club, which has hardly any active members and is already scheduled to be disbanded. This band is their chance to stand out and give one final farewell at the Culture Festival.\n\nThe challenge was foolhardy, but after eccentric training they managed to succeed and rock out the peaceful Oubi Academy with their debut performance. That should have been it.\nThey were satisfied.\nThey should have returned to their normal lives.\nHowever, their final performance at a local Live House became a hit on the Internet and requests for their performance start flying in from far and wide.\n\nOne problem: exams are coming up and their parents are opposed to the band!\n\nWho cares!\n\nThe four of them embark on their final adventure, a long tour of Japan, armed with their dreams and their instruments, all aboard a rickety van that could fall apart at any moment.\n\n\"First stop, Nagoya!\"\n\n[From [url=http://www.mangagamer.com/r18/Titles/Details/2609C708-8684-42E1-92F0-17ED568F3CED/kirakira]Mangagamer[/url]]",
        tags: [
          {
            spoiler: 0,
            rating: 0.6,
            id: "g23",
            lie: false
          },
          {
            rating: 2.5757575,
            spoiler: 0,
            id: "g300",
            lie: false
          },
          {
            spoiler: 1,
            rating: 2.2222223,
            lie: false,
            id: "g196"
          },
          {
            lie: false,
            id: "g1297",
            spoiler: 0,
            rating: 1.7142857
          },
          {
            spoiler: 0,
            rating: 2,
            id: "g1053",
            lie: false
          },
          {
            spoiler: 0,
            rating: 1,
            lie: false,
            id: "g3435"
          },
          {
            id: "g695",
            lie: false,
            spoiler: 0,
            rating: 2.8529413
          },
          {
            spoiler: 0,
            rating: 2.1111112,
            id: "g459",
            lie: false
          },
          {
            spoiler: 0,
            rating: 2.0689654,
            lie: false,
            id: "g186"
          },
          {
            id: "g1442",
            lie: false,
            rating: 1.6666666,
            spoiler: 0
          },
          {
            id: "g670",
            lie: false,
            spoiler: 0,
            rating: 2
          },
          {
            spoiler: 0,
            rating: 2.875,
            lie: false,
            id: "g659"
          },
          {
            rating: 2.0588236,
            spoiler: 2,
            id: "g168",
            lie: false
          },
          {
            spoiler: 0,
            rating: 1.925926,
            lie: false,
            id: "g284"
          },
          {
            rating: 2.7333333,
            spoiler: 2,
            lie: false,
            id: "g848"
          },
          {
            spoiler: 0,
            rating: 1.5714285,
            id: "g1023",
            lie: false
          },
          {
            lie: false,
            id: "g1733",
            spoiler: 0,
            rating: 2
          },
          {
            id: "g606",
            lie: false,
            spoiler: 0,
            rating: 1.875
          },
          {
            id: "g421",
            lie: false,
            spoiler: 1,
            rating: 2.1764705
          },
          {
            id: "g1222",
            lie: false,
            rating: 1.6,
            spoiler: 0
          },
          {
            spoiler: 1,
            rating: 2.6875,
            id: "g1344",
            lie: false
          },
          {
            id: "g733",
            lie: false,
            spoiler: 0,
            rating: 2
          },
          {
            rating: 1.4615384,
            spoiler: 0,
            lie: false,
            id: "g441"
          },
          {
            spoiler: 0,
            rating: 2.8333333,
            id: "g96",
            lie: false
          },
          {
            lie: false,
            id: "g148",
            rating: 2.764706,
            spoiler: 0
          },
          {
            lie: false,
            id: "g151",
            spoiler: 0,
            rating: 1.7741935
          },
          {
            spoiler: 1,
            rating: 1.4137931,
            id: "g292",
            lie: false
          },
          {
            spoiler: 0,
            rating: 2.0294118,
            id: "g236",
            lie: false
          },
          {
            spoiler: 2,
            rating: 1.7,
            lie: false,
            id: "g170"
          },
          {
            id: "g1796",
            lie: false,
            rating: 1.7142857,
            spoiler: 0
          },
          {
            spoiler: 0,
            rating: 1.1304348,
            lie: false,
            id: "g677"
          },
          {
            spoiler: 0,
            rating: 3,
            id: "g3212",
            lie: false
          },
          {
            spoiler: 1,
            rating: 1.5,
            id: "g997",
            lie: false
          },
          {
            spoiler: 0,
            rating: 2.689655,
            id: "g728",
            lie: false
          },
          {
            lie: false,
            id: "g387",
            spoiler: 0,
            rating: 2
          },
          {
            rating: 1.6,
            spoiler: 0,
            lie: false,
            id: "g878"
          },
          {
            spoiler: 0,
            rating: 2.5294118,
            lie: false,
            id: "g104"
          },
          {
            lie: false,
            id: "g201",
            spoiler: 0,
            rating: 2.2142856
          },
          {
            id: "g627",
            lie: false,
            spoiler: 0,
            rating: 2
          },
          {
            id: "g756",
            lie: false,
            spoiler: 0,
            rating: 2.4375
          },
          {
            lie: false,
            id: "g48",
            spoiler: 0,
            rating: 1.8333334
          },
          {
            id: "g147",
            lie: false,
            rating: 2.8235295,
            spoiler: 1
          },
          {
            spoiler: 1,
            rating: 1.882353,
            id: "g181",
            lie: false
          },
          {
            lie: false,
            id: "g108",
            spoiler: 0,
            rating: 2
          },
          {
            spoiler: 0,
            rating: 1.9565217,
            id: "g215",
            lie: false
          },
          {
            rating: 2.8695652,
            spoiler: 0,
            id: "g428",
            lie: false
          },
          {
            lie: false,
            id: "g693",
            spoiler: 2,
            rating: 1.4
          },
          {
            spoiler: 0,
            rating: 2.5,
            id: "g1376",
            lie: false
          },
          {
            lie: false,
            id: "g1190",
            spoiler: 0,
            rating: 1.9
          },
          {
            spoiler: 0,
            rating: 2,
            lie: false,
            id: "g3172"
          },
          {
            lie: false,
            id: "g1024",
            spoiler: 0,
            rating: 2.1923077
          },
          {
            id: "g43",
            lie: false,
            spoiler: 0,
            rating: 2.7096775
          },
          {
            rating: 1.3461539,
            spoiler: 1,
            id: "g786",
            lie: false
          },
          {
            spoiler: 0,
            rating: 1.1428572,
            lie: false,
            id: "g1856"
          },
          {
            spoiler: 0,
            rating: 2.25,
            lie: false,
            id: "g760"
          },
          {
            lie: false,
            id: "g596",
            spoiler: 1,
            rating: 2.5172415
          },
          {
            id: "g454",
            lie: false,
            spoiler: 0,
            rating: 2.6451614
          },
          {
            lie: false,
            id: "g3171",
            rating: 2,
            spoiler: 0
          },
          {
            spoiler: 0,
            rating: 2.6666667,
            id: "g3003",
            lie: false
          },
          {
            spoiler: 0,
            rating: 1.5862069,
            id: "g182",
            lie: false
          },
          {
            spoiler: 0,
            rating: 2.9310346,
            lie: false,
            id: "g286"
          },
          {
            spoiler: 1,
            rating: 0.23529412,
            lie: false,
            id: "g359"
          },
          {
            rating: 2.9230769,
            spoiler: 0,
            lie: false,
            id: "g1403"
          },
          {
            spoiler: 0,
            rating: 2.8846154,
            id: "g851",
            lie: false
          },
          {
            id: "g672",
            lie: false,
            rating: 2.5,
            spoiler: 0
          },
          {
            rating: 2.7948718,
            spoiler: 0,
            lie: false,
            id: "g368"
          }
        ],
        devstatus: 0,
        length_minutes: 2100,
        image: {
          url: "https://s2.vndb.org/cv/09/22609.jpg",
          votecount: 11,
          sexual: 0,
          dims: [
            256,
            365
          ],
          id: "cv22609",
          violence: 0
        },
        length_votes: 20
      },
      voted: null,
      vote: null,
      started: null,
      lastmod: 1634272949
    },
    {
      id: "v481",
      vn: {
        image: {
          sexual: 0,
          dims: [
            256,
            348
          ],
          id: "cv28487",
          violence: 0,
          url: "https://s2.vndb.org/cv/87/28487.jpg",
          votecount: 15
        },
        length_minutes: 2333,
        devstatus: 0,
        tags: [
          {
            spoiler: 0,
            rating: 1,
            id: "g23",
            lie: false
          },
          {
            spoiler: 0,
            rating: 2.6666667,
            id: "g32",
            lie: false
          },
          {
            spoiler: 0,
            rating: 2,
            lie: false,
            id: "g195"
          },
          {
            spoiler: 0,
            rating: 3,
            lie: false,
            id: "g148"
          },
          {
            spoiler: 0,
            rating: 3,
            lie: false,
            id: "g149"
          },
          {
            spoiler: 0,
            rating: 2.5,
            lie: false,
            id: "g151"
          },
          {
            spoiler: 0,
            rating: 2,
            lie: false,
            id: "g876"
          },
          {
            lie: false,
            id: "g719",
            spoiler: 0,
            rating: 2
          },
          {
            id: "g1554",
            lie: false,
            spoiler: 0,
            rating: 2.5
          },
          {
            rating: 2,
            spoiler: 0,
            lie: false,
            id: "g1491"
          },
          {
            lie: false,
            id: "g1382",
            spoiler: 0,
            rating: 3
          },
          {
            rating: 3,
            spoiler: 0,
            lie: false,
            id: "g1903"
          },
          {
            spoiler: 0,
            rating: 3,
            id: "g658",
            lie: false
          },
          {
            lie: false,
            id: "g2527",
            spoiler: 0,
            rating: 3
          },
          {
            rating: 3,
            spoiler: 0,
            lie: false,
            id: "g142"
          },
          {
            spoiler: 0,
            rating: 3,
            id: "g177",
            lie: false
          },
          {
            rating: 2.6666667,
            spoiler: 0,
            id: "g133",
            lie: false
          },
          {
            spoiler: 1,
            rating: 2.5,
            id: "g136",
            lie: false
          },
          {
            id: "g2635",
            lie: false,
            spoiler: 1,
            rating: 3
          },
          {
            spoiler: 0,
            rating: 3,
            id: "g1646",
            lie: false
          },
          {
            spoiler: 0,
            rating: 2.6666667,
            id: "g606",
            lie: false
          },
          {
            id: "g3171",
            lie: false,
            spoiler: 0,
            rating: 2
          },
          {
            spoiler: 0,
            rating: 2.6666667,
            lie: false,
            id: "g1564"
          },
          {
            rating: 2.6666667,
            spoiler: 0,
            lie: false,
            id: "g297"
          },
          {
            lie: false,
            id: "g3182",
            spoiler: 0,
            rating: 2
          },
          {
            id: "g2093",
            lie: false,
            rating: 3,
            spoiler: 0
          },
          {
            id: "g615",
            lie: false,
            spoiler: 0,
            rating: 3
          },
          {
            id: "g1284",
            lie: false,
            spoiler: 0,
            rating: 2
          },
          {
            spoiler: 0,
            rating: 2.5,
            lie: false,
            id: "g420"
          },
          {
            id: "g188",
            lie: false,
            spoiler: 0,
            rating: 2
          },
          {
            spoiler: 0,
            rating: 3,
            lie: false,
            id: "g96"
          },
          {
            spoiler: 0,
            rating: 1,
            id: "g398",
            lie: false
          },
          {
            rating: 2,
            spoiler: 0,
            id: "g756",
            lie: false
          },
          {
            spoiler: 0,
            rating: 2,
            lie: false,
            id: "g1832"
          },
          {
            id: "g143",
            lie: false,
            spoiler: 0,
            rating: 2
          },
          {
            spoiler: 0,
            rating: 2.6,
            lie: false,
            id: "g336"
          },
          {
            rating: 3,
            spoiler: 0,
            lie: false,
            id: "g465"
          },
          {
            spoiler: 0,
            rating: 3,
            lie: false,
            id: "g2033"
          },
          {
            id: "g599",
            lie: false,
            spoiler: 0,
            rating: 2
          },
          {
            lie: false,
            id: "g534",
            spoiler: 0,
            rating: 3
          },
          {
            rating: 2,
            spoiler: 0,
            id: "g2016",
            lie: false
          },
          {
            rating: 1,
            spoiler: 1,
            lie: false,
            id: "g981"
          },
          {
            lie: false,
            id: "g976",
            spoiler: 0,
            rating: 3
          },
          {
            id: "g559",
            lie: false,
            spoiler: 0,
            rating: 3
          },
          {
            id: "g737",
            lie: false,
            rating: 2,
            spoiler: 0
          },
          {
            lie: false,
            id: "g191",
            spoiler: 0,
            rating: 2
          },
          {
            lie: false,
            id: "g373",
            rating: 2,
            spoiler: 0
          },
          {
            spoiler: 0,
            rating: 2,
            lie: false,
            id: "g107"
          },
          {
            id: "g733",
            lie: false,
            spoiler: 0,
            rating: 2
          },
          {
            spoiler: 0,
            rating: 2.3333333,
            id: "g961",
            lie: false
          },
          {
            id: "g728",
            lie: false,
            rating: 3,
            spoiler: 0
          },
          {
            id: "g2449",
            lie: false,
            rating: 3,
            spoiler: 0
          },
          {
            lie: false,
            id: "g2071",
            spoiler: 0,
            rating: 2.6666667
          },
          {
            spoiler: 1,
            rating: 2,
            id: "g163",
            lie: false
          },
          {
            spoiler: 0,
            rating: 0.5,
            id: "g1251",
            lie: false
          },
          {
            lie: false,
            id: "g1005",
            spoiler: 0,
            rating: 2
          },
          {
            lie: false,
            id: "g1025",
            spoiler: 0,
            rating: 3
          },
          {
            id: "g1478",
            lie: false,
            spoiler: 0,
            rating: 2
          },
          {
            lie: false,
            id: "g459",
            rating: 3,
            spoiler: 0
          }
        ],
        length_votes: 2,
        screenshots: [
          {
            thumbnail_dims: [
              136,
              77
            ],
            thumbnail: "https://s2.vndb.org/st/77/57977.jpg"
          },
          {
            thumbnail_dims: [
              136,
              77
            ],
            thumbnail: "https://s2.vndb.org/st/79/57979.jpg"
          },
          {
            thumbnail: "https://s2.vndb.org/st/80/57980.jpg",
            thumbnail_dims: [
              136,
              77
            ]
          },
          {
            thumbnail: "https://s2.vndb.org/st/81/57981.jpg",
            thumbnail_dims: [
              136,
              77
            ]
          },
          {
            thumbnail: "https://s2.vndb.org/st/82/57982.jpg",
            thumbnail_dims: [
              136,
              77
            ]
          },
          {
            thumbnail: "https://s2.vndb.org/st/83/57983.jpg",
            thumbnail_dims: [
              136,
              77
            ]
          },
          {
            thumbnail_dims: [
              136,
              77
            ],
            thumbnail: "https://s2.vndb.org/st/84/57984.jpg"
          },
          {
            thumbnail: "https://s2.vndb.org/st/16/72716.jpg",
            thumbnail_dims: [
              136,
              102
            ]
          },
          {
            thumbnail_dims: [
              136,
              102
            ],
            thumbnail: "https://s2.vndb.org/st/17/72717.jpg"
          },
          {
            thumbnail_dims: [
              136,
              102
            ],
            thumbnail: "https://s2.vndb.org/st/18/72718.jpg"
          }
        ],
        languages: [
          "en",
          "ja"
        ],
        aliases: [],
        released: "2009-06-26",
        platforms: [
          "win",
          "psp",
          "ps4",
          "psv"
        ],
        alttitle: "さくらさくら",
        titles: [
          {
            official: true,
            latin: null,
            lang: "en",
            title: "Sakura Sakura",
            main: false
          },
          {
            latin: "Sakura Sakura",
            official: true,
            lang: "ja",
            main: true,
            title: "さくらさくら"
          }
        ],
        length: 3,
        popularity: 4.58,
        votecount: 534,
        rating: 70.8,
        description: "The Dorm Guardian vs. The School Guardian\nInaba Tooru has always dreamed of living a co-ed life. That’s why, when he finally managed to transfer into the renowned Rintoku Academy, he immediately fell head over heels for two Sakuras!\n\nSakura Nanako’s classes are strict, but at home, she turns into an overbearing mother.\n\nKirishima Sakura may seem cold and unfriendly, but she is always ready to lend a helping hand as the class representative.\n\nThese two girls are outwardly indifferent to Tooru, but put the three of them together and sparks begin to fly.\n\nIn the sakura-colored season of spring, two fussy Sakuras have been caught in a light-hearted love triangle.\n\n\nThe Internet Friend vs. The Childhood Friend\n\"You know how romance games always give the main character that best friend who tells him about the girls? I want to be that guy.\"\n\nFuse Naoki, the self-proclaimed best friend, is always ready to tease Tooru about his situation with the two Sakuras.\n\nBut, unbeknownst to him, he is one side of yet another light-hearted love triangle.\n\nNitta Akira has been Naoki's friend since before they could read and write, and is now finally living under the same (dorm) roof as him.\n\nTachibana Kurumi used to be Naoki's MMO raiding partner, but they were separated before she ever got a chance to meet him in real life or tell him how she felt.\n\n\"I understand him better than anyone else.\"\n\nAkira and Kurumi have Naoki stumped for the first time in his life. And so, Tooru finally gets a chance to see things from the other side.\n\nThe curtains rise on this desolate showdown for love.\n\n[Edited From [url=https://solpress.co/product/21/sakura-sakura] Sol Press[/url]]",
        olang: "ja",
        title: "Sakura Sakura"
      },
      voted: null,
      added: 1666485958,
      finished: null,
      notes: null,
      vote: null,
      started: null,
      lastmod: 1666485958
    },
    {
      started: null,
      lastmod: 1636067351,
      notes: null,
      finished: null,
      added: 1636067351,
      vn: {
        devstatus: 0,
        tags: [
          {
            rating: 2.25,
            spoiler: 0,
            id: "g32",
            lie: false
          },
          {
            lie: false,
            id: "g733",
            spoiler: 0,
            rating: 2
          },
          {
            id: "g578",
            lie: false,
            spoiler: 0,
            rating: 2
          },
          {
            id: "g3155",
            lie: false,
            spoiler: 0,
            rating: 2
          },
          {
            id: "g737",
            lie: false,
            spoiler: 0,
            rating: 2
          },
          {
            spoiler: 0,
            rating: 2,
            lie: false,
            id: "g659"
          },
          {
            id: "g133",
            lie: false,
            rating: 1.875,
            spoiler: 0
          },
          {
            lie: false,
            id: "g1184",
            spoiler: 0,
            rating: 2
          },
          {
            id: "g1581",
            lie: false,
            rating: 2,
            spoiler: 0
          },
          {
            id: "g872",
            lie: false,
            spoiler: 0,
            rating: 2
          },
          {
            rating: 2.4444444,
            spoiler: 0,
            lie: false,
            id: "g148"
          },
          {
            spoiler: 0,
            rating: 2,
            id: "g2851",
            lie: false
          },
          {
            lie: false,
            id: "g524",
            spoiler: 0,
            rating: 2
          },
          {
            spoiler: 0,
            rating: 2,
            lie: false,
            id: "g186"
          },
          {
            spoiler: 0,
            rating: 2.1111112,
            id: "g201",
            lie: false
          },
          {
            spoiler: 0,
            rating: 2.142857,
            lie: false,
            id: "g428"
          },
          {
            spoiler: 0,
            rating: 2,
            lie: false,
            id: "g3159"
          },
          {
            lie: false,
            id: "g602",
            spoiler: 0,
            rating: 2
          },
          {
            id: "g728",
            lie: false,
            spoiler: 0,
            rating: 1
          },
          {
            id: "g272",
            lie: false,
            spoiler: 0,
            rating: 1.25
          },
          {
            rating: 2,
            spoiler: 0,
            lie: false,
            id: "g191"
          },
          {
            spoiler: 0,
            rating: 2,
            id: "g3204",
            lie: false
          },
          {
            rating: 2,
            spoiler: 0,
            lie: false,
            id: "g3132"
          },
          {
            lie: false,
            id: "g203",
            rating: 2,
            spoiler: 0
          },
          {
            spoiler: 0,
            rating: 1.5,
            lie: false,
            id: "g48"
          },
          {
            rating: 2,
            spoiler: 0,
            lie: false,
            id: "g3171"
          },
          {
            id: "g904",
            lie: false,
            spoiler: 0,
            rating: 2
          },
          {
            lie: false,
            id: "g505",
            spoiler: 0,
            rating: 2
          },
          {
            id: "g257",
            lie: false,
            spoiler: 0,
            rating: 2
          },
          {
            id: "g194",
            lie: false,
            rating: 2,
            spoiler: 0
          },
          {
            lie: false,
            id: "g368",
            spoiler: 0,
            rating: 2.75
          },
          {
            rating: 2.1,
            spoiler: 0,
            lie: false,
            id: "g756"
          },
          {
            spoiler: 0,
            rating: 2,
            id: "g104",
            lie: false
          },
          {
            id: "g154",
            lie: false,
            spoiler: 0,
            rating: 1.8571428
          },
          {
            rating: 2.4,
            spoiler: 0,
            id: "g297",
            lie: false
          },
          {
            id: "g3139",
            lie: false,
            spoiler: 0,
            rating: 2
          },
          {
            id: "g373",
            lie: false,
            spoiler: 0,
            rating: 2
          },
          {
            id: "g695",
            lie: false,
            spoiler: 0,
            rating: 2
          },
          {
            id: "g3172",
            lie: false,
            spoiler: 0,
            rating: 2
          },
          {
            spoiler: 0,
            rating: 2,
            id: "g275",
            lie: false
          }
        ],
        image: {
          votecount: 11,
          url: "https://s2.vndb.org/cv/14/27814.jpg",
          id: "cv27814",
          violence: 0,
          sexual: 0,
          dims: [
            256,
            368
          ]
        },
        length_minutes: 1431,
        length_votes: 4,
        length: 3,
        titles: [
          {
            lang: "ja",
            main: true,
            title: "ぶらばん！",
            latin: "Bra-Ban!",
            official: true
          },
          {
            official: false,
            latin: "Guanyue Lianqu!",
            lang: "zh-Hans",
            title: "管乐恋曲！",
            main: false
          }
        ],
        votecount: 112,
        popularity: 1.13,
        released: "2006-07-28",
        aliases: [
          "Braban!",
          "BRA-BAN! ~the bonds of melody~",
          "ぶらばん!～The bonds of melody～"
        ],
        languages: [
          "ja",
          "zh-Hans"
        ],
        screenshots: [
          {
            thumbnail: "https://s2.vndb.org/st/47/7247.jpg",
            thumbnail_dims: [
              136,
              102
            ]
          },
          {
            thumbnail: "https://s2.vndb.org/st/48/7248.jpg",
            thumbnail_dims: [
              136,
              102
            ]
          },
          {
            thumbnail_dims: [
              136,
              102
            ],
            thumbnail: "https://s2.vndb.org/st/49/7249.jpg"
          },
          {
            thumbnail: "https://s2.vndb.org/st/50/7250.jpg",
            thumbnail_dims: [
              136,
              102
            ]
          },
          {
            thumbnail: "https://s2.vndb.org/st/51/7251.jpg",
            thumbnail_dims: [
              136,
              102
            ]
          },
          {
            thumbnail_dims: [
              136,
              102
            ],
            thumbnail: "https://s2.vndb.org/st/52/7252.jpg"
          },
          {
            thumbnail: "https://s2.vndb.org/st/53/7253.jpg",
            thumbnail_dims: [
              136,
              102
            ]
          },
          {
            thumbnail: "https://s2.vndb.org/st/54/7254.jpg",
            thumbnail_dims: [
              136,
              102
            ]
          },
          {
            thumbnail: "https://s2.vndb.org/st/55/7255.jpg",
            thumbnail_dims: [
              136,
              102
            ]
          },
          {
            thumbnail_dims: [
              136,
              102
            ],
            thumbnail: "https://s2.vndb.org/st/56/7256.jpg"
          }
        ],
        alttitle: "ぶらばん！",
        platforms: [
          "win"
        ],
        description: "You play as part of the brass section of the school band. However, they have closed your school due to low student population and have redistricted all who went there to another school. That school's brass band has already been well established there, and your new school cannot have two brass bands. Not only that, but they ridicule you and your classmates and consider the lot of you untalented. To remedy this situation, the two bands have been issued a contest--judged by the student body--to see who is truly better and who will be the formal brass band. You only have a month to practice and be the best.\n\n[From White Masq]",
        rating: 67.4,
        title: "Bra-Ban!",
        olang: "ja"
      },
      voted: null,
      id: "v532",
      vote: null
    },
    {
      vote: 80,
      voted: 1638937951,
      vn: {
        devstatus: 0,
        tags: [
          {
            rating: 1.125,
            spoiler: 0,
            lie: false,
            id: "g23"
          },
          {
            spoiler: 0,
            rating: 2.4166667,
            lie: false,
            id: "g32"
          },
          {
            spoiler: 0,
            rating: 2.0833333,
            id: "g47",
            lie: false
          },
          {
            id: "g525",
            lie: false,
            rating: 3,
            spoiler: 0
          },
          {
            id: "g3172",
            lie: false,
            rating: 2,
            spoiler: 0
          },
          {
            id: "g133",
            lie: false,
            spoiler: 0,
            rating: 2.8461537
          },
          {
            spoiler: 0,
            rating: 2.3333333,
            lie: false,
            id: "g728"
          },
          {
            id: "g3171",
            lie: false,
            spoiler: 0,
            rating: 2
          },
          {
            lie: false,
            id: "g772",
            rating: 3,
            spoiler: 0
          },
          {
            lie: false,
            id: "g112",
            spoiler: 0,
            rating: 2.2142856
          },
          {
            spoiler: 0,
            rating: 2.8333333,
            id: "g104",
            lie: false
          },
          {
            id: "g258",
            lie: false,
            spoiler: 0,
            rating: 2.090909
          },
          {
            id: "g670",
            lie: false,
            spoiler: 0,
            rating: 3
          },
          {
            rating: 2.5882354,
            spoiler: 0,
            id: "g425",
            lie: false
          },
          {
            lie: false,
            id: "g1604",
            spoiler: 0,
            rating: 2
          },
          {
            spoiler: 0,
            rating: 1,
            lie: false,
            id: "g1297"
          },
          {
            id: "g894",
            lie: false,
            spoiler: 0,
            rating: 1.4
          },
          {
            lie: false,
            id: "g733",
            spoiler: 0,
            rating: 2
          },
          {
            lie: false,
            id: "g1474",
            spoiler: 0,
            rating: 2
          },
          {
            spoiler: 0,
            rating: 2.2222223,
            lie: false,
            id: "g544"
          },
          {
            spoiler: 0,
            rating: 2.125,
            id: "g875",
            lie: false
          },
          {
            lie: false,
            id: "g2529",
            spoiler: 1,
            rating: 1
          },
          {
            rating: 3,
            spoiler: 0,
            lie: false,
            id: "g1059"
          },
          {
            rating: 0.46153846,
            spoiler: 0,
            lie: false,
            id: "g409"
          },
          {
            id: "g606",
            lie: false,
            spoiler: 0,
            rating: 2.5
          },
          {
            lie: false,
            id: "g186",
            spoiler: 0,
            rating: 2.5333333
          },
          {
            spoiler: 0,
            rating: 1,
            id: "g190",
            lie: false
          },
          {
            id: "g96",
            lie: false,
            spoiler: 0,
            rating: 2
          },
          {
            id: "g751",
            lie: false,
            spoiler: 0,
            rating: 0.375
          },
          {
            rating: 2,
            spoiler: 0,
            lie: false,
            id: "g461"
          },
          {
            lie: false,
            id: "g580",
            spoiler: 0,
            rating: 1
          },
          {
            spoiler: 0,
            rating: 1,
            lie: false,
            id: "g1660"
          },
          {
            id: "g756",
            lie: false,
            spoiler: 0,
            rating: 2.3333333
          },
          {
            id: "g501",
            lie: false,
            spoiler: 2,
            rating: 2
          },
          {
            spoiler: 0,
            rating: 2.2727273,
            lie: false,
            id: "g148"
          },
          {
            id: "g193",
            lie: false,
            spoiler: 0,
            rating: 1.8
          },
          {
            lie: false,
            id: "g139",
            rating: 2.7692308,
            spoiler: 0
          },
          {
            id: "g916",
            lie: false,
            spoiler: 0,
            rating: 0.375
          },
          {
            lie: false,
            id: "g1086",
            rating: 1,
            spoiler: 0
          },
          {
            id: "g2245",
            lie: false,
            spoiler: 0,
            rating: 2.3333333
          },
          {
            rating: 1.6,
            spoiler: 0,
            lie: false,
            id: "g1581"
          },
          {
            spoiler: 0,
            rating: 2.3333333,
            lie: false,
            id: "g1759"
          },
          {
            rating: 2.4,
            spoiler: 0,
            id: "g373",
            lie: false
          },
          {
            lie: false,
            id: "g975",
            spoiler: 0,
            rating: 3
          },
          {
            id: "g300",
            lie: false,
            spoiler: 0,
            rating: 3
          },
          {
            spoiler: 0,
            rating: 2.4166667,
            lie: false,
            id: "g343"
          },
          {
            id: "g1190",
            lie: false,
            spoiler: 0,
            rating: 1
          },
          {
            spoiler: 2,
            rating: 2,
            lie: false,
            id: "g3610"
          },
          {
            rating: 2.2857144,
            spoiler: 0,
            id: "g692",
            lie: false
          }
        ],
        image: {
          sexual: 0,
          dims: [
            256,
            368
          ],
          violence: 0,
          id: "cv28532",
          url: "https://s2.vndb.org/cv/32/28532.jpg",
          votecount: 12
        },
        length_minutes: 1482,
        length_votes: 22,
        length: 3,
        titles: [
          {
            latin: null,
            official: false,
            lang: "en",
            title: "Guardians of Daybreak",
            main: false
          },
          {
            lang: "ja",
            title: "暁の護衛",
            main: true,
            official: true,
            latin: "Akatsuki no Goei"
          },
          {
            lang: "ko",
            main: false,
            title: "새벽의 호위 준",
            official: false,
            latin: "Saebyeogui Howi Jun"
          },
          {
            lang: "zh-Hans",
            main: false,
            title: "晓之护卫",
            official: false,
            latin: "Xiao zhi Huwei"
          }
        ],
        votecount: 873,
        popularity: 8.47,
        aliases: [
          "AkaGoei",
          "Guard of Daybreak",
          "曉之護衛"
        ],
        released: "2008-03-27",
        languages: [
          "en",
          "hu",
          "ja",
          "ko",
          "ru",
          "vi",
          "zh-Hans"
        ],
        screenshots: [
          {
            thumbnail: "https://s2.vndb.org/st/16/12216.jpg",
            thumbnail_dims: [
              136,
              102
            ]
          },
          {
            thumbnail_dims: [
              136,
              102
            ],
            thumbnail: "https://s2.vndb.org/st/17/12217.jpg"
          },
          {
            thumbnail_dims: [
              136,
              102
            ],
            thumbnail: "https://s2.vndb.org/st/18/12218.jpg"
          },
          {
            thumbnail_dims: [
              136,
              102
            ],
            thumbnail: "https://s2.vndb.org/st/19/12219.jpg"
          },
          {
            thumbnail: "https://s2.vndb.org/st/21/12221.jpg",
            thumbnail_dims: [
              136,
              102
            ]
          },
          {
            thumbnail_dims: [
              136,
              102
            ],
            thumbnail: "https://s2.vndb.org/st/29/12229.jpg"
          },
          {
            thumbnail: "https://s2.vndb.org/st/89/68989.jpg",
            thumbnail_dims: [
              136,
              77
            ]
          },
          {
            thumbnail: "https://s2.vndb.org/st/90/68990.jpg",
            thumbnail_dims: [
              136,
              77
            ]
          }
        ],
        platforms: [
          "win",
          "psp",
          "ps3"
        ],
        alttitle: "暁の護衛",
        description: "We find ourselves in Japan, in the not too distant future.\n\nCrime runs rampant as an impotent police force looks on, powerless to effect change.\n\nEnter Ren’ou Academy. Within these walls, first-class bodyguards are reared alongside the daughters of the nation’s richest families.\n\nIt is here that we meet our protagonist, Kaito Asagiri. After completing a year of intense training, he is to be awarded with the right to act as a bodyguard for one of the Ladies that attend Ren’ou.\n\nHowever, as the new school year is beginning, Kaito finds that his feelings differ from those of his peers, who are all ready to embrace their new lives.\n\nOn the day of the opening ceremony, he, reticent as always, attempts to leave by delivering a letter notifying the school of his withdrawal.\n\nAnd all is going according to plan… that is, until he meets one particular girl. \n\nThe winds of change are beginning to blow. \n\n“I’ve taken an interest in you. I’ll let you revel in that for a moment,” she said, not caring to hear his opinion on the matter.\n\n“What about this am I supposed to ‘revel’ in, exactly?”\n\nThere’s a quiet passion in his words, a passion that his deliberately indignant tone can’t quite conceal.\n\nHe hadn’t thought it possible, but she has charmed him. He wants to protect her.\n\n[Translated from [url=http://www.akabeesoft3.com/products/goei/story.html]Official Website[/url]]",
        rating: 73.9,
        olang: "ja",
        title: "Akatsuki no Goei"
      },
      id: "v629",
      notes: "tsuki + reika + aya ~ tae",
      finished: null,
      added: 1638891195,
      lastmod: 1656595277,
      started: null
    },
    {
      vote: null,
      added: 1569913304,
      finished: null,
      notes: null,
      id: "v683",
      voted: null,
      vn: {
        length_votes: 8,
        tags: [
          {
            lie: false,
            id: "g32",
            spoiler: 0,
            rating: 3
          },
          {
            spoiler: 0,
            rating: 2,
            lie: false,
            id: "g194"
          },
          {
            spoiler: 2,
            rating: 1.6666666,
            lie: false,
            id: "g192"
          },
          {
            id: "g373",
            lie: false,
            spoiler: 0,
            rating: 2
          },
          {
            lie: false,
            id: "g1431",
            spoiler: 0,
            rating: 3
          },
          {
            id: "g416",
            lie: false,
            rating: 2,
            spoiler: 0
          },
          {
            lie: false,
            id: "g263",
            spoiler: 0,
            rating: 2
          },
          {
            lie: false,
            id: "g218",
            spoiler: 0,
            rating: 1.5714285
          },
          {
            lie: false,
            id: "g636",
            spoiler: 0,
            rating: 2.4545455
          },
          {
            rating: 1.8571428,
            spoiler: 2,
            id: "g874",
            lie: false
          },
          {
            lie: false,
            id: "g3172",
            rating: 2,
            spoiler: 0
          },
          {
            spoiler: 0,
            rating: 2,
            lie: false,
            id: "g415"
          },
          {
            lie: false,
            id: "g659",
            rating: 2,
            spoiler: 0
          },
          {
            id: "g191",
            lie: false,
            spoiler: 0,
            rating: 1.1111112
          },
          {
            lie: false,
            id: "g3151",
            rating: 1,
            spoiler: 0
          },
          {
            spoiler: 0,
            rating: 3,
            id: "g1434",
            lie: false
          },
          {
            lie: false,
            id: "g1269",
            rating: 2,
            spoiler: 0
          },
          {
            spoiler: 0,
            rating: 1.6,
            id: "g414",
            lie: false
          },
          {
            id: "g549",
            lie: false,
            spoiler: 0,
            rating: 2
          },
          {
            id: "g112",
            lie: false,
            rating: 2.9230769,
            spoiler: 0
          },
          {
            lie: false,
            id: "g100",
            spoiler: 0,
            rating: 2
          },
          {
            id: "g733",
            lie: false,
            rating: 2,
            spoiler: 0
          },
          {
            spoiler: 0,
            rating: 2,
            id: "g726",
            lie: false
          },
          {
            lie: false,
            id: "g871",
            spoiler: 0,
            rating: 2.75
          },
          {
            spoiler: 0,
            rating: 2,
            lie: false,
            id: "g1168"
          },
          {
            spoiler: 0,
            rating: 2.0833333,
            lie: false,
            id: "g676"
          },
          {
            id: "g530",
            lie: false,
            spoiler: 0,
            rating: 1
          },
          {
            id: "g756",
            lie: false,
            spoiler: 0,
            rating: 2.7
          },
          {
            spoiler: 0,
            rating: 2.5,
            lie: false,
            id: "g133"
          },
          {
            lie: false,
            id: "g190",
            spoiler: 0,
            rating: 2.0769231
          },
          {
            id: "g297",
            lie: false,
            rating: 3,
            spoiler: 0
          },
          {
            spoiler: 0,
            rating: 2,
            lie: false,
            id: "g108"
          },
          {
            id: "g879",
            lie: false,
            spoiler: 0,
            rating: 2
          },
          {
            lie: false,
            id: "g2982",
            spoiler: 0,
            rating: 2
          },
          {
            spoiler: 0,
            rating: 2,
            id: "g656",
            lie: false
          },
          {
            id: "g587",
            lie: false,
            spoiler: 0,
            rating: 0.2
          },
          {
            spoiler: 0,
            rating: 2,
            id: "g111",
            lie: false
          },
          {
            spoiler: 0,
            rating: 2,
            lie: false,
            id: "g275"
          },
          {
            spoiler: 0,
            rating: 2.5,
            lie: false,
            id: "g96"
          },
          {
            spoiler: 0,
            rating: 2,
            id: "g104",
            lie: false
          },
          {
            lie: false,
            id: "g737",
            spoiler: 0,
            rating: 2.1111112
          },
          {
            lie: false,
            id: "g785",
            spoiler: 0,
            rating: 1.2
          },
          {
            lie: false,
            id: "g1157",
            spoiler: 0,
            rating: 2
          },
          {
            lie: false,
            id: "g872",
            spoiler: 0,
            rating: 1
          },
          {
            lie: false,
            id: "g1185",
            spoiler: 0,
            rating: 2.2222223
          },
          {
            id: "g452",
            lie: false,
            spoiler: 0,
            rating: 2.25
          },
          {
            id: "g1005",
            lie: false,
            spoiler: 0,
            rating: 2.75
          },
          {
            spoiler: 0,
            rating: 2.1,
            lie: false,
            id: "g875"
          },
          {
            id: "g247",
            lie: false,
            rating: 2,
            spoiler: 2
          },
          {
            spoiler: 0,
            rating: 3,
            id: "g148",
            lie: false
          },
          {
            spoiler: 0,
            rating: 2.5714285,
            lie: false,
            id: "g300"
          },
          {
            id: "g1478",
            lie: false,
            spoiler: 0,
            rating: 1
          },
          {
            lie: false,
            id: "g602",
            spoiler: 0,
            rating: 2.090909
          },
          {
            spoiler: 0,
            rating: 2.142857,
            lie: false,
            id: "g1312"
          },
          {
            id: "g829",
            lie: false,
            rating: 2.6153846,
            spoiler: 0
          },
          {
            lie: false,
            id: "g517",
            spoiler: 0,
            rating: 2.9333334
          },
          {
            id: "g228",
            lie: false,
            spoiler: 0,
            rating: 2
          },
          {
            spoiler: 0,
            rating: 2,
            id: "g95",
            lie: false
          },
          {
            rating: 2,
            spoiler: 0,
            id: "g505",
            lie: false
          },
          {
            id: "g757",
            lie: false,
            spoiler: 0,
            rating: 2
          },
          {
            spoiler: 0,
            rating: 1,
            id: "g3147",
            lie: false
          },
          {
            spoiler: 0,
            rating: 1.1111112,
            lie: false,
            id: "g475"
          },
          {
            id: "g1554",
            lie: false,
            spoiler: 0,
            rating: 1.75
          },
          {
            spoiler: 0,
            rating: 2,
            lie: false,
            id: "g678"
          }
        ],
        devstatus: 0,
        length_minutes: 1650,
        image: {
          url: "https://s2.vndb.org/cv/02/22602.jpg",
          votecount: 12,
          sexual: 0,
          dims: [
            256,
            353
          ],
          id: "cv22602",
          violence: 0
        },
        olang: "ja",
        title: "Parfait ~Chocolat Second Brew~",
        description: "Six months ago, Takamura Hitoshi watched Famille, the cafe his deceased brother established, go up in smoke. The employees and the memories they shared might have survived, but without a building there can be no cafe; Hitoshi and co. are left with no choice but to abandon Famille.\n\nBut as luck - or perhaps fate - would have it, Hitoshi gets a second chance when he receives a phone call from a new mall asking him to open a branch of Famille inside their building. Hitoshi can't refuse the offer to carry on his brother's will, and after a few twists and turns a new Famille is born with Hitoshi as the manager. \n\nOf course, life never quite goes that smoothly. Things are a mess both in the kitchen and on the floor because two key staff members refused to return. Hitoshi himself had to take a break from college in order to make opening the new cafe a reality. But perhaps the biggest problem of all is staring Famille right in the face - Curio, the popular cafe that Famille was \"inspired\" by in the first place, happened to open a branch in the same shopping center directly across from Famille... \n\nAnd thus the new Famille's battle for survival begins.",
        rating: 74.2,
        votecount: 305,
        popularity: 3.83,
        titles: [
          {
            title: "パルフェ ～ショコラ second brew～",
            main: true,
            lang: "ja",
            official: true,
            latin: "Parfait ~Chocolat Second Brew~"
          },
          {
            official: false,
            latin: "Nvpu Kafei Parfait",
            lang: "zh-Hans",
            main: false,
            title: "女仆咖啡帕露菲"
          }
        ],
        length: 3,
        platforms: [
          "win",
          "psp",
          "ps2",
          "ps4",
          "psv",
          "swi"
        ],
        alttitle: "パルフェ ～ショコラ second brew～",
        released: "2005-03-25",
        aliases: [],
        screenshots: [
          {
            thumbnail_dims: [
              136,
              102
            ],
            thumbnail: "https://s2.vndb.org/st/23/19423.jpg"
          },
          {
            thumbnail: "https://s2.vndb.org/st/24/19424.jpg",
            thumbnail_dims: [
              136,
              102
            ]
          },
          {
            thumbnail_dims: [
              136,
              102
            ],
            thumbnail: "https://s2.vndb.org/st/19/40019.jpg"
          },
          {
            thumbnail: "https://s2.vndb.org/st/20/40020.jpg",
            thumbnail_dims: [
              136,
              102
            ]
          },
          {
            thumbnail: "https://s2.vndb.org/st/81/72481.jpg",
            thumbnail_dims: [
              136,
              102
            ]
          },
          {
            thumbnail_dims: [
              136,
              102
            ],
            thumbnail: "https://s2.vndb.org/st/82/72482.jpg"
          },
          {
            thumbnail: "https://s2.vndb.org/st/83/72483.jpg",
            thumbnail_dims: [
              136,
              102
            ]
          },
          {
            thumbnail_dims: [
              136,
              102
            ],
            thumbnail: "https://s2.vndb.org/st/84/72484.jpg"
          },
          {
            thumbnail_dims: [
              136,
              102
            ],
            thumbnail: "https://s2.vndb.org/st/85/72485.jpg"
          },
          {
            thumbnail: "https://s2.vndb.org/st/86/72486.jpg",
            thumbnail_dims: [
              136,
              102
            ]
          }
        ],
        languages: [
          "ja",
          "ko",
          "zh-Hans"
        ]
      },
      lastmod: 1634272977,
      started: null
    },
    {
      lastmod: 1657297374,
      started: null,
      vote: null,
      finished: null,
      added: 1657297374,
      notes: null,
      id: "v751",
      voted: null,
      vn: {
        length_votes: 126,
        tags: [
          {
            lie: false,
            id: "g6",
            spoiler: 1,
            rating: 3
          },
          {
            rating: 2.5,
            spoiler: 1,
            lie: false,
            id: "g10"
          },
          {
            spoiler: 1,
            rating: 2.0701754,
            id: "g12",
            lie: false
          },
          {
            lie: false,
            id: "g25",
            rating: 2.6086957,
            spoiler: 1
          },
          {
            spoiler: 1,
            rating: 2.7380953,
            lie: false,
            id: "g4"
          },
          {
            spoiler: 0,
            rating: 2.5208333,
            lie: false,
            id: "g19"
          },
          {
            lie: false,
            id: "g194",
            spoiler: 0,
            rating: 2.5555556
          },
          {
            lie: false,
            id: "g175",
            spoiler: 1,
            rating: 2.1724138
          },
          {
            spoiler: 0,
            rating: 2.487805,
            lie: false,
            id: "g113"
          },
          {
            rating: 1.8571428,
            spoiler: 1,
            id: "g570",
            lie: false
          },
          {
            id: "g828",
            lie: false,
            spoiler: 2,
            rating: 2.108108
          },
          {
            spoiler: 2,
            rating: 1.4615384,
            lie: false,
            id: "g980"
          },
          {
            lie: false,
            id: "g1275",
            spoiler: 0,
            rating: 2.375
          },
          {
            spoiler: 1,
            rating: 2.6333334,
            id: "g1154",
            lie: false
          },
          {
            lie: false,
            id: "g222",
            spoiler: 0,
            rating: 2.868421
          },
          {
            rating: 2.1176472,
            spoiler: 0,
            id: "g176",
            lie: false
          },
          {
            id: "g3598",
            lie: false,
            spoiler: 1,
            rating: 2.6666667
          },
          {
            id: "g875",
            lie: false,
            spoiler: 0,
            rating: 2.2
          },
          {
            lie: false,
            id: "g1373",
            rating: 2.0714285,
            spoiler: 0
          },
          {
            spoiler: 2,
            rating: 1.3157895,
            lie: false,
            id: "g1188"
          },
          {
            id: "g485",
            lie: false,
            spoiler: 1,
            rating: 2.4130435
          },
          {
            spoiler: 1,
            rating: 2.8823528,
            id: "g553",
            lie: false
          },
          {
            rating: 2.7567568,
            spoiler: 0,
            lie: false,
            id: "g1246"
          },
          {
            rating: 2,
            spoiler: 0,
            lie: false,
            id: "g1251"
          },
          {
            spoiler: 2,
            rating: 2.75,
            lie: false,
            id: "g2544"
          },
          {
            id: "g2159",
            lie: false,
            spoiler: 0,
            rating: 1.2857143
          },
          {
            id: "g1403",
            lie: false,
            rating: 2.8536584,
            spoiler: 0
          },
          {
            spoiler: 2,
            rating: 2.5,
            id: "g223",
            lie: false
          },
          {
            rating: 2,
            spoiler: 0,
            lie: false,
            id: "g3437"
          },
          {
            lie: false,
            id: "g852",
            rating: 2.2,
            spoiler: 0
          },
          {
            spoiler: 1,
            rating: 1.2941177,
            id: "g766",
            lie: false
          },
          {
            id: "g824",
            lie: false,
            spoiler: 2,
            rating: 2.25
          },
          {
            spoiler: 0,
            rating: 2.2,
            id: "g1196",
            lie: false
          },
          {
            id: "g523",
            lie: false,
            spoiler: 0,
            rating: 2.0357144
          },
          {
            spoiler: 2,
            rating: 1.7142857,
            id: "g823",
            lie: false
          },
          {
            rating: 2.6111112,
            spoiler: 1,
            id: "g775",
            lie: false
          },
          {
            lie: false,
            id: "g1664",
            spoiler: 0,
            rating: 2.9302325
          },
          {
            id: "g462",
            lie: false,
            rating: 2.5106382,
            spoiler: 0
          },
          {
            rating: 2.7555556,
            spoiler: 0,
            id: "g147",
            lie: false
          },
          {
            lie: false,
            id: "g151",
            spoiler: 0,
            rating: 2.6304348
          },
          {
            spoiler: 1,
            rating: 2.2777777,
            lie: false,
            id: "g676"
          },
          {
            spoiler: 0,
            rating: 2.5,
            lie: false,
            id: "g1184"
          },
          {
            lie: false,
            id: "g1646",
            spoiler: 1,
            rating: 2.8181818
          },
          {
            spoiler: 2,
            rating: 1.5625,
            lie: false,
            id: "g848"
          },
          {
            rating: 1.7142857,
            spoiler: 0,
            id: "g2411",
            lie: false
          },
          {
            id: "g691",
            lie: false,
            spoiler: 1,
            rating: 2.7058823
          },
          {
            spoiler: 0,
            rating: 2.390244,
            lie: false,
            id: "g578"
          },
          {
            lie: false,
            id: "g693",
            spoiler: 2,
            rating: 0.30769232
          },
          {
            spoiler: 2,
            rating: 1.6923077,
            lie: false,
            id: "g1141"
          },
          {
            lie: false,
            id: "g334",
            rating: 2.8285713,
            spoiler: 1
          },
          {
            rating: 1.5641025,
            spoiler: 0,
            id: "g43",
            lie: false
          },
          {
            lie: false,
            id: "g63",
            spoiler: 1,
            rating: 2.4473684
          },
          {
            id: "g133",
            lie: false,
            spoiler: 0,
            rating: 2.9473684
          },
          {
            lie: false,
            id: "g333",
            rating: 2.847826,
            spoiler: 2
          },
          {
            lie: false,
            id: "g1054",
            spoiler: 2,
            rating: 1.2
          },
          {
            id: "g457",
            lie: false,
            spoiler: 2,
            rating: 2.607143
          },
          {
            spoiler: 2,
            rating: 2.5609756,
            id: "g981",
            lie: false
          },
          {
            spoiler: 0,
            rating: 2.8333333,
            id: "g774",
            lie: false
          },
          {
            spoiler: 1,
            rating: 0.71428573,
            id: "g580",
            lie: false
          },
          {
            lie: false,
            id: "g1335",
            rating: 1.4,
            spoiler: 2
          },
          {
            lie: false,
            id: "g601",
            spoiler: 0,
            rating: 2.837838
          },
          {
            lie: false,
            id: "g152",
            spoiler: 2,
            rating: 2.509434
          },
          {
            lie: false,
            id: "g258",
            rating: 2.4210527,
            spoiler: 0
          },
          {
            spoiler: 0,
            rating: 2.2708333,
            id: "g297",
            lie: false
          },
          {
            rating: 2,
            spoiler: 0,
            lie: false,
            id: "g148"
          },
          {
            id: "g181",
            lie: false,
            spoiler: 1,
            rating: 2.8979592
          },
          {
            id: "g420",
            lie: false,
            spoiler: 1,
            rating: 0.6363636
          },
          {
            id: "g1230",
            lie: false,
            spoiler: 0,
            rating: 1
          },
          {
            rating: 2.5,
            spoiler: 2,
            lie: false,
            id: "g1261"
          },
          {
            id: "g876",
            lie: false,
            rating: 1.6666666,
            spoiler: 1
          },
          {
            id: "g837",
            lie: false,
            spoiler: 2,
            rating: 2.75
          },
          {
            id: "g3131",
            lie: false,
            spoiler: 0,
            rating: 1.5
          },
          {
            id: "g1897",
            lie: false,
            spoiler: 2,
            rating: 2.2857144
          },
          {
            spoiler: 0,
            rating: 2.7692308,
            lie: false,
            id: "g1733"
          },
          {
            lie: false,
            id: "g561",
            rating: 1.6333333,
            spoiler: 1
          },
          {
            lie: false,
            id: "g596",
            spoiler: 0,
            rating: 1
          },
          {
            rating: 2.3333333,
            spoiler: 0,
            id: "g3171",
            lie: false
          },
          {
            lie: false,
            id: "g1097",
            spoiler: 2,
            rating: 1.88
          },
          {
            lie: false,
            id: "g607",
            spoiler: 0,
            rating: 1.8837209
          },
          {
            rating: 2.2222223,
            spoiler: 0,
            id: "g1467",
            lie: false
          },
          {
            spoiler: 1,
            rating: 0.6,
            id: "g1480",
            lie: false
          },
          {
            spoiler: 0,
            rating: 2.6363637,
            id: "g606",
            lie: false
          },
          {
            rating: 2.909091,
            spoiler: 0,
            id: "g459",
            lie: false
          },
          {
            spoiler: 1,
            rating: 1.8,
            lie: false,
            id: "g1642"
          },
          {
            spoiler: 1,
            rating: 2,
            lie: false,
            id: "g159"
          },
          {
            id: "g96",
            lie: false,
            spoiler: 0,
            rating: 2.1176472
          },
          {
            rating: 2.8,
            spoiler: 1,
            lie: false,
            id: "g202"
          },
          {
            id: "g302",
            lie: false,
            spoiler: 1,
            rating: 1.4
          },
          {
            spoiler: 0,
            rating: 1.5,
            id: "g454",
            lie: false
          },
          {
            spoiler: 0,
            rating: 2.7727273,
            id: "g1212",
            lie: false
          },
          {
            spoiler: 1,
            rating: 2,
            id: "g719",
            lie: false
          },
          {
            spoiler: 0,
            rating: 2.8,
            lie: false,
            id: "g519"
          },
          {
            id: "g2400",
            lie: false,
            spoiler: 0,
            rating: 2.857143
          },
          {
            id: "g954",
            lie: false,
            rating: 2.627907,
            spoiler: 1
          },
          {
            id: "g810",
            lie: false,
            spoiler: 2,
            rating: 2.7826087
          },
          {
            lie: false,
            id: "g996",
            spoiler: 1,
            rating: 2.8275862
          },
          {
            spoiler: 0,
            rating: 2,
            lie: false,
            id: "g1234"
          },
          {
            spoiler: 1,
            rating: 2.6052632,
            id: "g3",
            lie: false
          },
          {
            spoiler: 0,
            rating: 2.8222222,
            lie: false,
            id: "g32"
          },
          {
            id: "g190",
            lie: false,
            spoiler: 0,
            rating: 2.2040815
          },
          {
            id: "g108",
            lie: false,
            rating: 1.5,
            spoiler: 1
          },
          {
            spoiler: 0,
            rating: 2.6818182,
            lie: false,
            id: "g1213"
          },
          {
            rating: 2.5294118,
            spoiler: 0,
            lie: false,
            id: "g565"
          },
          {
            id: "g469",
            lie: false,
            rating: 2.0588236,
            spoiler: 0
          },
          {
            spoiler: 0,
            rating: 2.025641,
            lie: false,
            id: "g633"
          },
          {
            id: "g107",
            lie: false,
            rating: 2.1304348,
            spoiler: 1
          },
          {
            lie: false,
            id: "g677",
            spoiler: 0,
            rating: 2.4473684
          },
          {
            spoiler: 1,
            rating: 2.131579,
            id: "g627",
            lie: false
          },
          {
            spoiler: 1,
            rating: 1.8571428,
            id: "g1398",
            lie: false
          },
          {
            rating: 2.3939395,
            spoiler: 0,
            lie: false,
            id: "g461"
          },
          {
            spoiler: 0,
            rating: 2.7567568,
            lie: false,
            id: "g851"
          },
          {
            spoiler: 2,
            rating: 2.4634147,
            lie: false,
            id: "g209"
          },
          {
            id: "g250",
            lie: false,
            rating: 2.6904762,
            spoiler: 2
          },
          {
            id: "g564",
            lie: false,
            spoiler: 0,
            rating: 2.3076923
          },
          {
            id: "g1005",
            lie: false,
            spoiler: 0,
            rating: 2.6818182
          },
          {
            spoiler: 1,
            rating: 1.2333333,
            id: "g779",
            lie: false
          },
          {
            rating: 1.8857143,
            spoiler: 2,
            id: "g276",
            lie: false
          },
          {
            rating: 1.3333334,
            spoiler: 2,
            lie: false,
            id: "g525"
          },
          {
            lie: false,
            id: "g811",
            spoiler: 0,
            rating: 2.7173913
          },
          {
            id: "g1053",
            lie: false,
            spoiler: 0,
            rating: 2.387097
          },
          {
            spoiler: 0,
            rating: 2.2307692,
            id: "g1069",
            lie: false
          },
          {
            id: "g36",
            lie: false,
            spoiler: 1,
            rating: 2.1818182
          },
          {
            lie: false,
            id: "g481",
            spoiler: 1,
            rating: 1.1162791
          },
          {
            spoiler: 0,
            rating: 1.5882353,
            lie: false,
            id: "g737"
          },
          {
            lie: false,
            id: "g2033",
            spoiler: 0,
            rating: 1.75
          },
          {
            spoiler: 0,
            rating: 2.6410255,
            lie: false,
            id: "g201"
          },
          {
            spoiler: 2,
            rating: 0.47826087,
            id: "g354",
            lie: false
          },
          {
            spoiler: 0,
            rating: 2.6818182,
            lie: false,
            id: "g933"
          },
          {
            rating: 1.4705882,
            spoiler: 1,
            id: "g534",
            lie: false
          },
          {
            spoiler: 2,
            rating: 2.6037736,
            id: "g456",
            lie: false
          },
          {
            rating: 1.2272727,
            spoiler: 0,
            id: "g355",
            lie: false
          },
          {
            lie: false,
            id: "g235",
            spoiler: 0,
            rating: 2.8852458
          },
          {
            lie: false,
            id: "g48",
            spoiler: 0,
            rating: 2.7045455
          },
          {
            spoiler: 0,
            rating: 2.3333333,
            id: "g193",
            lie: false
          },
          {
            id: "g1376",
            lie: false,
            rating: 1.125,
            spoiler: 0
          },
          {
            lie: false,
            id: "g672",
            spoiler: 1,
            rating: 1.6666666
          },
          {
            spoiler: 0,
            rating: 0.7,
            lie: false,
            id: "g599"
          },
          {
            id: "g149",
            lie: false,
            spoiler: 0,
            rating: 1.25
          },
          {
            spoiler: 0,
            rating: 1.9090909,
            id: "g603",
            lie: false
          },
          {
            rating: 2.631579,
            spoiler: 0,
            id: "g728",
            lie: false
          },
          {
            lie: false,
            id: "g1278",
            spoiler: 0,
            rating: 2.862745
          }
        ],
        devstatus: 0,
        length_minutes: 4605,
        image: {
          violence: 0,
          id: "cv57866",
          sexual: 0,
          dims: [
            256,
            356
          ],
          votecount: 10,
          url: "https://s2.vndb.org/cv/66/57866.jpg"
        },
        olang: "ja",
        title: "Rewrite",
        rating: 85.1,
        description: "Rewrite is set in the fictional city Kazamatsuri where treeplanting and afforestation have caused the city to become overgrown with trees and flowers in much the same way that other cities are filled by buildings. However, while most of the city appears to be rural, there are many traditional city elements as well. While set in a modern setting, the city also gives off a strange sense of nostalgia. \n\nTennouji Kotarou lives here. He's a high school student who has the ability to rewrite his own body; he can become stronger and faster at any time he chooses. He investigates supernatural mysteries with five girls from his school.\n\n[Partially taken from [url=http://en.wikipedia.org/wiki/Rewrite_(visual_novel)]Wikipedia[/url]]",
        popularity: 52.43,
        votecount: 6731,
        length: 5,
        titles: [
          {
            main: false,
            title: "Rewrite",
            lang: "en",
            latin: null,
            official: true
          },
          {
            official: true,
            latin: null,
            main: true,
            title: "Rewrite",
            lang: "ja"
          },
          {
            main: false,
            title: "Перезапись",
            lang: "ru",
            official: false,
            latin: "Perezapis'"
          }
        ],
        platforms: [
          "win",
          "psp",
          "ps3",
          "ps4",
          "psv"
        ],
        alttitle: null,
        screenshots: [
          {
            thumbnail: "https://s2.vndb.org/st/73/21073.jpg",
            thumbnail_dims: [
              136,
              77
            ]
          },
          {
            thumbnail_dims: [
              136,
              77
            ],
            thumbnail: "https://s2.vndb.org/st/74/21074.jpg"
          },
          {
            thumbnail_dims: [
              136,
              77
            ],
            thumbnail: "https://s2.vndb.org/st/75/21075.jpg"
          },
          {
            thumbnail: "https://s2.vndb.org/st/40/33640.jpg",
            thumbnail_dims: [
              136,
              77
            ]
          },
          {
            thumbnail: "https://s2.vndb.org/st/41/33641.jpg",
            thumbnail_dims: [
              136,
              77
            ]
          },
          {
            thumbnail_dims: [
              136,
              77
            ],
            thumbnail: "https://s2.vndb.org/st/42/33642.jpg"
          },
          {
            thumbnail_dims: [
              136,
              77
            ],
            thumbnail: "https://s2.vndb.org/st/53/89753.jpg"
          },
          {
            thumbnail_dims: [
              136,
              77
            ],
            thumbnail: "https://s2.vndb.org/st/54/89754.jpg"
          },
          {
            thumbnail_dims: [
              136,
              77
            ],
            thumbnail: "https://s2.vndb.org/st/71/93371.jpg"
          }
        ],
        languages: [
          "de",
          "en",
          "it",
          "ja",
          "ko",
          "pt-br",
          "ru",
          "vi",
          "zh-Hans"
        ],
        released: "2011-06-24",
        aliases: [
          "リライト",
          "Riraito",
          "改写"
        ]
      }
    },
    {
      vn: {
        tags: [
          {
            rating: 2.857143,
            spoiler: 0,
            id: "g19",
            lie: false
          },
          {
            rating: 2.3636363,
            spoiler: 0,
            lie: false,
            id: "g32"
          },
          {
            spoiler: 0,
            rating: 0.33333334,
            id: "g7",
            lie: false
          },
          {
            spoiler: 1,
            rating: 2.2,
            id: "g6",
            lie: false
          },
          {
            id: "g8",
            lie: false,
            rating: 2.4285715,
            spoiler: 0
          },
          {
            id: "g1168",
            lie: false,
            spoiler: 0,
            rating: 2
          },
          {
            spoiler: 0,
            rating: 1.5714285,
            id: "g733",
            lie: false
          },
          {
            lie: false,
            id: "g454",
            spoiler: 0,
            rating: 1.375
          },
          {
            lie: false,
            id: "g236",
            spoiler: 0,
            rating: 2
          },
          {
            lie: false,
            id: "g300",
            spoiler: 0,
            rating: 1.9090909
          },
          {
            rating: 2.6666667,
            spoiler: 0,
            id: "g715",
            lie: false
          },
          {
            id: "g356",
            lie: false,
            spoiler: 0,
            rating: 1.2857143
          },
          {
            lie: false,
            id: "g237",
            rating: 2.7692308,
            spoiler: 1
          },
          {
            spoiler: 0,
            rating: 2.9,
            id: "g904",
            lie: false
          },
          {
            id: "g142",
            lie: false,
            spoiler: 0,
            rating: 1.5555556
          },
          {
            id: "g633",
            lie: false,
            spoiler: 0,
            rating: 1.25
          },
          {
            spoiler: 0,
            rating: 0.75,
            id: "g587",
            lie: false
          },
          {
            spoiler: 0,
            rating: 1.8,
            lie: false,
            id: "g191"
          },
          {
            id: "g154",
            lie: false,
            spoiler: 0,
            rating: 2
          },
          {
            id: "g533",
            lie: false,
            rating: 1,
            spoiler: 0
          },
          {
            id: "g548",
            lie: false,
            spoiler: 0,
            rating: 2.9333334
          },
          {
            lie: false,
            id: "g96",
            spoiler: 0,
            rating: 2
          },
          {
            id: "g728",
            lie: false,
            spoiler: 0,
            rating: 2.8888888
          },
          {
            rating: 2.6666667,
            spoiler: 1,
            lie: false,
            id: "g168"
          },
          {
            id: "g710",
            lie: false,
            spoiler: 0,
            rating: 3
          },
          {
            rating: 1,
            spoiler: 0,
            lie: false,
            id: "g659"
          },
          {
            lie: false,
            id: "g719",
            spoiler: 0,
            rating: 1
          },
          {
            spoiler: 0,
            rating: 2,
            lie: false,
            id: "g3172"
          },
          {
            spoiler: 0,
            rating: 2,
            id: "g2619",
            lie: false
          },
          {
            rating: 2.5,
            spoiler: 1,
            lie: false,
            id: "g1785"
          },
          {
            rating: 2.3333333,
            spoiler: 0,
            lie: false,
            id: "g1897"
          },
          {
            lie: false,
            id: "g133",
            spoiler: 0,
            rating: 2
          },
          {
            id: "g149",
            lie: false,
            spoiler: 0,
            rating: 2.857143
          },
          {
            spoiler: 0,
            rating: 3,
            id: "g135",
            lie: false
          },
          {
            spoiler: 0,
            rating: 1.5555556,
            lie: false,
            id: "g453"
          },
          {
            lie: false,
            id: "g3171",
            spoiler: 0,
            rating: 2
          },
          {
            spoiler: 0,
            rating: 1.8,
            lie: false,
            id: "g461"
          },
          {
            rating: 2,
            spoiler: 0,
            lie: false,
            id: "g2252"
          },
          {
            id: "g756",
            lie: false,
            spoiler: 0,
            rating: 1.875
          },
          {
            spoiler: 0,
            rating: 2.1666667,
            id: "g490",
            lie: false
          },
          {
            lie: false,
            id: "g459",
            spoiler: 0,
            rating: 3
          },
          {
            lie: false,
            id: "g421",
            spoiler: 0,
            rating: 2.9
          },
          {
            spoiler: 0,
            rating: 3,
            lie: false,
            id: "g553"
          },
          {
            spoiler: 0,
            rating: 2.9,
            id: "g811",
            lie: false
          },
          {
            spoiler: 0,
            rating: 2,
            id: "g3657",
            lie: false
          }
        ],
        devstatus: 0,
        length_minutes: 2025,
        image: {
          url: "https://s2.vndb.org/cv/53/27753.jpg",
          votecount: 12,
          dims: [
            256,
            368
          ],
          sexual: 0,
          violence: 0,
          id: "cv27753"
        },
        length_votes: 3,
        votecount: 269,
        popularity: 3.58,
        titles: [
          {
            lang: "ja",
            main: true,
            title: "るいは智を呼ぶ",
            latin: "Rui wa Tomo o Yobu",
            official: true
          }
        ],
        length: 4,
        platforms: [
          "win",
          "ps3",
          "psv"
        ],
        alttitle: "るいは智を呼ぶ",
        aliases: [
          "るい智",
          "ruitomo",
          "智以类聚"
        ],
        released: "2008-06-26",
        screenshots: [
          {
            thumbnail: "https://s2.vndb.org/st/21/2921.jpg",
            thumbnail_dims: [
              136,
              102
            ]
          },
          {
            thumbnail: "https://s2.vndb.org/st/16/13916.jpg",
            thumbnail_dims: [
              136,
              102
            ]
          },
          {
            thumbnail: "https://s2.vndb.org/st/17/13917.jpg",
            thumbnail_dims: [
              136,
              102
            ]
          },
          {
            thumbnail: "https://s2.vndb.org/st/18/13918.jpg",
            thumbnail_dims: [
              136,
              102
            ]
          },
          {
            thumbnail: "https://s2.vndb.org/st/19/13919.jpg",
            thumbnail_dims: [
              136,
              102
            ]
          },
          {
            thumbnail: "https://s2.vndb.org/st/20/13920.jpg",
            thumbnail_dims: [
              136,
              102
            ]
          },
          {
            thumbnail: "https://s2.vndb.org/st/21/13921.jpg",
            thumbnail_dims: [
              136,
              102
            ]
          },
          {
            thumbnail_dims: [
              136,
              102
            ],
            thumbnail: "https://s2.vndb.org/st/22/13922.jpg"
          }
        ],
        languages: [
          "ja"
        ],
        olang: "ja",
        title: "Rui wa Tomo o Yobu",
        description: "Wakutsu Tomo was brought up by his mother as a girl due to a small mark he has on his body. After his mother's death, he discovers via her will that she emphasizes Tomo continue to live as a female, and following this, Tomo starts to go through more troubles in his life. Tomo soon discovers that he is linked with five girls who are around his age as a second year high school student. These girls happen to have the same mark he has, and also have been going through hardships in their lives. Tomo and these five girls decide to form a pact to stay together and support each other to solve each of their problems and to bring peace to their lives.\n\nThe title Rui wa Tomo o Yobu is also a Japanese proverb equivalent to the English proverb \"birds of a feather flock together\" when written with the kanji and kana 類は友を呼ぶ.\n\n[From [url=http://en.wikipedia.org/wiki/Rui_wa_Tomo_o_Yobu]Wikipedia[/url]]",
        rating: 78.1
      },
      voted: null,
      id: "v776",
      notes: null,
      added: 1666193927,
      finished: null,
      vote: null,
      started: null,
      lastmod: 1666193927
    },
    {
      vote: null,
      id: "v810",
      voted: null,
      vn: {
        released: "2008-07-04",
        aliases: [
          "Girl in the Shell",
          "Kara no Shoujo - The First Episode",
          "KnS1"
        ],
        languages: [
          "en",
          "es",
          "ja",
          "ko",
          "ru",
          "vi",
          "zh-Hans"
        ],
        screenshots: [
          {
            thumbnail_dims: [
              136,
              102
            ],
            thumbnail: "https://s2.vndb.org/st/05/6905.jpg"
          },
          {
            thumbnail_dims: [
              136,
              102
            ],
            thumbnail: "https://s2.vndb.org/st/06/6906.jpg"
          },
          {
            thumbnail_dims: [
              136,
              102
            ],
            thumbnail: "https://s2.vndb.org/st/08/6908.jpg"
          },
          {
            thumbnail_dims: [
              136,
              102
            ],
            thumbnail: "https://s2.vndb.org/st/10/6910.jpg"
          },
          {
            thumbnail_dims: [
              136,
              102
            ],
            thumbnail: "https://s2.vndb.org/st/78/20278.jpg"
          },
          {
            thumbnail: "https://s2.vndb.org/st/79/20279.jpg",
            thumbnail_dims: [
              136,
              102
            ]
          },
          {
            thumbnail: "https://s2.vndb.org/st/80/20280.jpg",
            thumbnail_dims: [
              136,
              102
            ]
          },
          {
            thumbnail: "https://s2.vndb.org/st/92/131892.jpg",
            thumbnail_dims: [
              136,
              77
            ]
          },
          {
            thumbnail_dims: [
              136,
              77
            ],
            thumbnail: "https://s2.vndb.org/st/90/131990.jpg"
          },
          {
            thumbnail_dims: [
              136,
              76
            ],
            thumbnail: "https://s2.vndb.org/st/14/160914.jpg"
          }
        ],
        alttitle: "殻ノ少女",
        platforms: [
          "win",
          "and",
          "dvd"
        ],
        titles: [
          {
            latin: null,
            official: true,
            lang: "en",
            title: "Kara no Shojo",
            main: false
          },
          {
            lang: "ja",
            main: true,
            title: "殻ノ少女",
            official: true,
            latin: "Kara no Shoujo"
          },
          {
            official: false,
            latin: null,
            title: "Thiếu Nữ Trong Vỏ Trứng",
            main: false,
            lang: "vi"
          },
          {
            latin: "Ke zhi Shaonü",
            official: false,
            lang: "zh-Hans",
            main: false,
            title: "壳之少女"
          }
        ],
        length: 3,
        votecount: 5544,
        popularity: 43.05,
        description: "March 1956.\nTokyo, a metropolis finally starting to recover ten long years after Japan's defeat in the War. Private eye Tokisaka Reiji accepts a strange request from a girl in Inokashira Park.\n\n\"I want you to look for something. Me. My true self.\"\n\nMeanwhile, a series of bizarre murders plagues the area, where young women disappear, only to turn up dead and maimed with their wombs torn out. Seeking assistance on the case, Detective Uozumi Kyozo called up his old friend and former coworker, Reiji. \n\nReiji's little sister attends Ouba Girls Academy, a school on the outskirts of Hoya City, where two young women have mysteriously vanished. Saeki Tokio, the vice-principal, calls Reiji to investigate their disappearance, giving him his third case.\n\nReiji infiltrates the academy as a substitute teacher to glean more information - that's when he meets the girl once again.\n\nKuchiki Toko - his first client, the girl who asked him to search for her true self. Her manner is distinctly boyish as she remarks: \n\n\"Heya -  so we meet again, Mr. Detective.\"\n\nThe body count continues to rise. What should be a simple search for some students is starting to grow out of control. For some reason, the number of missing people and unidentified bodies don't match up.\n\nWho will be chosen as the next victim?\n\nAs the endless cycle of tragedy continues, what mysteries lie behind these new cases? Behind a similar series of murders from six years ago?\n\nPerhaps one girl's smile might await beneath the shell of tragedy...\n\n[Modified from [url=https://www.mangagamer.com/detail.php?goods_type=1&product_code=79]MangaGamer[/url]]",
        rating: 80,
        title: "Kara no Shoujo",
        olang: "ja",
        image: {
          url: "https://s2.vndb.org/cv/87/26087.jpg",
          votecount: 13,
          dims: [
            256,
            368
          ],
          sexual: 0.77,
          violence: 0,
          id: "cv26087"
        },
        length_minutes: 1500,
        devstatus: 0,
        tags: [
          {
            rating: 1.3913044,
            spoiler: 0,
            lie: false,
            id: "g23"
          },
          {
            lie: false,
            id: "g9",
            spoiler: 1,
            rating: 2.2962964
          },
          {
            spoiler: 0,
            rating: 2.7586207,
            id: "g19",
            lie: false
          },
          {
            id: "g32",
            lie: false,
            rating: 2.5652175,
            spoiler: 0
          },
          {
            lie: false,
            id: "g7",
            spoiler: 0,
            rating: 2.2727273
          },
          {
            spoiler: 0,
            rating: 2.7948718,
            lie: false,
            id: "g161"
          },
          {
            id: "g261",
            lie: false,
            spoiler: 2,
            rating: 2
          },
          {
            lie: false,
            id: "g96",
            spoiler: 0,
            rating: 1.6153846
          },
          {
            rating: 2.75,
            spoiler: 0,
            lie: false,
            id: "g148"
          },
          {
            spoiler: 0,
            rating: 2.8,
            lie: false,
            id: "g159"
          },
          {
            lie: false,
            id: "g181",
            spoiler: 1,
            rating: 2.516129
          },
          {
            spoiler: 0,
            rating: 2.8461537,
            lie: false,
            id: "g1246"
          },
          {
            id: "g497",
            lie: false,
            spoiler: 1,
            rating: 2.409091
          },
          {
            id: "g465",
            lie: false,
            rating: 2.142857,
            spoiler: 0
          },
          {
            spoiler: 0,
            rating: 1,
            lie: false,
            id: "g1736"
          },
          {
            lie: false,
            id: "g693",
            rating: 2.4242425,
            spoiler: 0
          },
          {
            id: "g2159",
            lie: false,
            rating: 2.2,
            spoiler: 0
          },
          {
            lie: false,
            id: "g726",
            rating: 1.882353,
            spoiler: 0
          },
          {
            rating: 1.5,
            spoiler: 0,
            id: "g3139",
            lie: false
          },
          {
            spoiler: 2,
            rating: 2,
            lie: false,
            id: "g192"
          },
          {
            id: "g196",
            lie: false,
            spoiler: 1,
            rating: 2.3333333
          },
          {
            lie: false,
            id: "g733",
            spoiler: 0,
            rating: 1.8888888
          },
          {
            lie: false,
            id: "g1182",
            rating: 2.4166667,
            spoiler: 0
          },
          {
            spoiler: 0,
            rating: 2.1538463,
            lie: false,
            id: "g1442"
          },
          {
            lie: false,
            id: "g959",
            spoiler: 0,
            rating: 2.9512196
          },
          {
            spoiler: 0,
            rating: 2,
            id: "g878",
            lie: false
          },
          {
            lie: false,
            id: "g3138",
            rating: 1.5,
            spoiler: 0
          },
          {
            lie: false,
            id: "g1229",
            spoiler: 0,
            rating: 2.3636363
          },
          {
            id: "g654",
            lie: false,
            rating: 1.7391304,
            spoiler: 0
          },
          {
            rating: 2.7272727,
            spoiler: 0,
            lie: false,
            id: "g672"
          },
          {
            rating: 2.6571429,
            spoiler: 0,
            lie: false,
            id: "g322"
          },
          {
            spoiler: 1,
            rating: 2.3333333,
            id: "g253",
            lie: false
          },
          {
            id: "g848",
            lie: false,
            rating: 2.8055556,
            spoiler: 2
          },
          {
            rating: 1.0909091,
            spoiler: 1,
            id: "g1112",
            lie: false
          },
          {
            spoiler: 0,
            rating: 1.5,
            id: "g3151",
            lie: false
          },
          {
            lie: false,
            id: "g633",
            spoiler: 0,
            rating: 2.642857
          },
          {
            spoiler: 0,
            rating: 1.8,
            id: "g1796",
            lie: false
          },
          {
            lie: false,
            id: "g1005",
            rating: 2.8461537,
            spoiler: 0
          },
          {
            lie: false,
            id: "g591",
            spoiler: 0,
            rating: 3
          },
          {
            spoiler: 0,
            rating: 2.5,
            lie: false,
            id: "g1356"
          },
          {
            id: "g2364",
            lie: false,
            spoiler: 0,
            rating: 2.0833333
          },
          {
            spoiler: 1,
            rating: 2.32,
            lie: false,
            id: "g502"
          },
          {
            lie: false,
            id: "g1135",
            spoiler: 0,
            rating: 2
          },
          {
            lie: false,
            id: "g916",
            spoiler: 0,
            rating: 1.2608696
          },
          {
            lie: false,
            id: "g346",
            spoiler: 2,
            rating: 2.5714285
          },
          {
            id: "g517",
            lie: false,
            rating: 1.8181819,
            spoiler: 0
          },
          {
            spoiler: 1,
            rating: 0.27272728,
            lie: false,
            id: "g747"
          },
          {
            spoiler: 1,
            rating: 2,
            lie: false,
            id: "g873"
          },
          {
            id: "g1080",
            lie: false,
            rating: 2,
            spoiler: 0
          },
          {
            lie: false,
            id: "g813",
            spoiler: 0,
            rating: 2.15
          },
          {
            lie: false,
            id: "g692",
            spoiler: 0,
            rating: 2.689655
          },
          {
            spoiler: 0,
            rating: 1.9166666,
            id: "g606",
            lie: false
          },
          {
            spoiler: 0,
            rating: 2.1875,
            id: "g975",
            lie: false
          },
          {
            spoiler: 0,
            rating: 1,
            lie: false,
            id: "g1324"
          },
          {
            lie: false,
            id: "g1471",
            spoiler: 0,
            rating: 2.8461537
          },
          {
            id: "g829",
            lie: false,
            rating: 2.090909,
            spoiler: 0
          },
          {
            lie: false,
            id: "g1967",
            spoiler: 0,
            rating: 2.6923077
          },
          {
            id: "g1581",
            lie: false,
            spoiler: 0,
            rating: 1
          },
          {
            spoiler: 0,
            rating: 1.125,
            lie: false,
            id: "g751"
          },
          {
            spoiler: 0,
            rating: 2,
            lie: false,
            id: "g2512"
          },
          {
            id: "g3147",
            lie: false,
            rating: 1.5,
            spoiler: 0
          },
          {
            id: "g1025",
            lie: false,
            rating: 2.25,
            spoiler: 0
          },
          {
            spoiler: 0,
            rating: 2.6666667,
            id: "g147",
            lie: false
          },
          {
            lie: false,
            id: "g168",
            spoiler: 1,
            rating: 3
          },
          {
            id: "g323",
            lie: false,
            spoiler: 0,
            rating: 2.9166667
          },
          {
            rating: 1.92,
            spoiler: 0,
            id: "g299",
            lie: false
          },
          {
            lie: false,
            id: "g270",
            rating: 2,
            spoiler: 0
          },
          {
            id: "g373",
            lie: false,
            spoiler: 0,
            rating: 2.7916667
          },
          {
            id: "g297",
            lie: false,
            spoiler: 0,
            rating: 2.419355
          },
          {
            lie: false,
            id: "g236",
            rating: 1.1818181,
            spoiler: 0
          },
          {
            rating: 2.6666667,
            spoiler: 1,
            id: "g288",
            lie: false
          },
          {
            lie: false,
            id: "g3179",
            rating: 2.2,
            spoiler: 1
          },
          {
            spoiler: 0,
            rating: 2.1764705,
            id: "g983",
            lie: false
          },
          {
            lie: false,
            id: "g530",
            rating: 2,
            spoiler: 0
          },
          {
            rating: 2.2857144,
            spoiler: 0,
            lie: false,
            id: "g464"
          },
          {
            rating: 1,
            spoiler: 0,
            lie: false,
            id: "g1297"
          },
          {
            id: "g2466",
            lie: false,
            spoiler: 0,
            rating: 2.3333333
          },
          {
            id: "g541",
            lie: false,
            spoiler: 0,
            rating: 2.689655
          },
          {
            lie: false,
            id: "g1955",
            spoiler: 0,
            rating: 2
          },
          {
            id: "g3171",
            lie: false,
            spoiler: 0,
            rating: 2
          },
          {
            id: "g2874",
            lie: false,
            spoiler: 0,
            rating: 2
          },
          {
            spoiler: 0,
            rating: 1.2857143,
            lie: false,
            id: "g397"
          },
          {
            spoiler: 1,
            rating: 2,
            id: "g1234",
            lie: false
          },
          {
            id: "g920",
            lie: false,
            rating: 1.9473684,
            spoiler: 0
          },
          {
            lie: false,
            id: "g784",
            spoiler: 0,
            rating: 1.8888888
          },
          {
            lie: false,
            id: "g728",
            spoiler: 0,
            rating: 1.862069
          },
          {
            spoiler: 0,
            rating: 2.5555556,
            id: "g785",
            lie: false
          },
          {
            rating: 2,
            spoiler: 2,
            id: "g2036",
            lie: false
          },
          {
            rating: 2.8666666,
            spoiler: 0,
            lie: false,
            id: "g133"
          },
          {
            rating: 2.8648648,
            spoiler: 0,
            id: "g137",
            lie: false
          },
          {
            id: "g350",
            lie: false,
            spoiler: 0,
            rating: 2.6
          },
          {
            id: "g1393",
            lie: false,
            spoiler: 0,
            rating: 2
          },
          {
            id: "g394",
            lie: false,
            spoiler: 1,
            rating: 1.6818181
          },
          {
            spoiler: 0,
            rating: 2,
            lie: false,
            id: "g2056"
          },
          {
            spoiler: 0,
            rating: 1.4090909,
            lie: false,
            id: "g533"
          },
          {
            lie: false,
            id: "g2836",
            spoiler: 2,
            rating: 2.6
          },
          {
            lie: false,
            id: "g670",
            rating: 2.25,
            spoiler: 1
          },
          {
            lie: false,
            id: "g1206",
            rating: 2.9285715,
            spoiler: 0
          },
          {
            lie: false,
            id: "g2651",
            spoiler: 0,
            rating: 2
          },
          {
            id: "g3248",
            lie: false,
            rating: 3,
            spoiler: 2
          },
          {
            id: "g3324",
            lie: false,
            spoiler: 0,
            rating: 1.5
          },
          {
            id: "g3148",
            lie: false,
            spoiler: 0,
            rating: 1
          },
          {
            id: "g1595",
            lie: false,
            spoiler: 0,
            rating: 1
          },
          {
            rating: 1.6666666,
            spoiler: 0,
            lie: false,
            id: "g3204"
          },
          {
            spoiler: 0,
            rating: 2.4,
            id: "g660",
            lie: false
          },
          {
            id: "g355",
            lie: false,
            spoiler: 0,
            rating: 2.6666667
          },
          {
            spoiler: 0,
            rating: 2.9189188,
            id: "g153",
            lie: false
          },
          {
            id: "g186",
            lie: false,
            rating: 1.6470588,
            spoiler: 0
          },
          {
            id: "g165",
            lie: false,
            spoiler: 0,
            rating: 1.826087
          },
          {
            id: "g387",
            lie: false,
            spoiler: 1,
            rating: 1.15625
          },
          {
            rating: 2.5,
            spoiler: 1,
            id: "g1059",
            lie: false
          },
          {
            spoiler: 0,
            rating: 1,
            id: "g1650",
            lie: false
          },
          {
            spoiler: 0,
            rating: 2,
            id: "g794",
            lie: false
          },
          {
            id: "g423",
            lie: false,
            spoiler: 0,
            rating: 2.5405405
          },
          {
            spoiler: 0,
            rating: 1,
            lie: false,
            id: "g750"
          },
          {
            spoiler: 0,
            rating: 1,
            lie: false,
            id: "g2138"
          },
          {
            lie: false,
            id: "g876",
            rating: 2.9722223,
            spoiler: 0
          },
          {
            rating: 3,
            spoiler: 0,
            id: "g3520",
            lie: false
          },
          {
            lie: false,
            id: "g735",
            rating: 1.6363636,
            spoiler: 0
          },
          {
            id: "g152",
            lie: false,
            spoiler: 1,
            rating: 1.8333334
          },
          {
            spoiler: 0,
            rating: 1.8421053,
            lie: false,
            id: "g208"
          },
          {
            id: "g252",
            lie: false,
            spoiler: 0,
            rating: 2.6666667
          },
          {
            spoiler: 0,
            rating: 1.8,
            lie: false,
            id: "g149"
          },
          {
            id: "g942",
            lie: false,
            spoiler: 1,
            rating: 2.2413793
          },
          {
            lie: false,
            id: "g1251",
            spoiler: 0,
            rating: 2.3333333
          },
          {
            spoiler: 0,
            rating: 0.95454544,
            lie: false,
            id: "g749"
          },
          {
            lie: false,
            id: "g553",
            spoiler: 0,
            rating: 2.7
          },
          {
            spoiler: 0,
            rating: 2.5769231,
            lie: false,
            id: "g877"
          },
          {
            spoiler: 2,
            rating: 2.2142856,
            lie: false,
            id: "g444"
          },
          {
            spoiler: 0,
            rating: 2.75,
            lie: false,
            id: "g789"
          },
          {
            id: "g459",
            lie: false,
            rating: 2.2,
            spoiler: 0
          },
          {
            spoiler: 0,
            rating: 2.5,
            lie: false,
            id: "g1643"
          }
        ],
        length_votes: 112
      },
      added: 1634273283,
      finished: null,
      notes: "idek",
      lastmod: 1648558348,
      started: null
    },
    {
      vote: null,
      added: 1671319359,
      finished: null,
      notes: null,
      id: "v933",
      voted: null,
      vn: {
        length_votes: 34,
        length_minutes: 1956,
        image: {
          dims: [
            256,
            368
          ],
          sexual: 0,
          id: "cv16848",
          violence: 0,
          url: "https://s2.vndb.org/cv/48/16848.jpg",
          votecount: 12
        },
        tags: [
          {
            spoiler: 0,
            rating: 2.3333333,
            id: "g32",
            lie: false
          },
          {
            id: "g12",
            lie: false,
            spoiler: 0,
            rating: 1.25
          },
          {
            lie: false,
            id: "g7",
            spoiler: 0,
            rating: 2.6
          },
          {
            spoiler: 0,
            rating: 2.142857,
            id: "g160",
            lie: false
          },
          {
            id: "g304",
            lie: false,
            spoiler: 1,
            rating: 1.5714285
          },
          {
            lie: false,
            id: "g178",
            spoiler: 1,
            rating: 2.2857144
          },
          {
            lie: false,
            id: "g355",
            spoiler: 0,
            rating: 1
          },
          {
            lie: false,
            id: "g1422",
            spoiler: 1,
            rating: 1.5
          },
          {
            spoiler: 2,
            rating: 2,
            id: "g1204",
            lie: false
          },
          {
            lie: false,
            id: "g1297",
            spoiler: 0,
            rating: 2
          },
          {
            spoiler: 1,
            rating: 2.6666667,
            lie: false,
            id: "g2920"
          },
          {
            rating: 1.4,
            spoiler: 2,
            id: "g237",
            lie: false
          },
          {
            lie: false,
            id: "g44",
            rating: 1,
            spoiler: 0
          },
          {
            lie: false,
            id: "g3324",
            spoiler: 0,
            rating: 2
          },
          {
            spoiler: 0,
            rating: 2,
            id: "g459",
            lie: false
          },
          {
            spoiler: 0,
            rating: 2,
            lie: false,
            id: "g672"
          },
          {
            id: "g1393",
            lie: false,
            spoiler: 0,
            rating: 2
          },
          {
            spoiler: 0,
            rating: 2,
            id: "g173",
            lie: false
          },
          {
            lie: false,
            id: "g162",
            spoiler: 1,
            rating: 2.4
          },
          {
            lie: false,
            id: "g358",
            rating: 1.8333334,
            spoiler: 1
          },
          {
            id: "g192",
            lie: false,
            spoiler: 0,
            rating: 2.6666667
          },
          {
            lie: false,
            id: "g1734",
            spoiler: 0,
            rating: 1
          },
          {
            spoiler: 0,
            rating: 2.25,
            id: "g863",
            lie: false
          },
          {
            lie: false,
            id: "g1323",
            rating: 2,
            spoiler: 1
          },
          {
            id: "g553",
            lie: false,
            spoiler: 0,
            rating: 2.5714285
          },
          {
            lie: false,
            id: "g2437",
            spoiler: 0,
            rating: 3
          },
          {
            spoiler: 0,
            rating: 2,
            id: "g1292",
            lie: false
          },
          {
            lie: false,
            id: "g133",
            spoiler: 0,
            rating: 1.6666666
          },
          {
            lie: false,
            id: "g300",
            spoiler: 0,
            rating: 1.25
          },
          {
            lie: false,
            id: "g84",
            spoiler: 1,
            rating: 2.5
          },
          {
            spoiler: 0,
            rating: 1.8333334,
            lie: false,
            id: "g201"
          },
          {
            id: "g905",
            lie: false,
            spoiler: 0,
            rating: 0.6666667
          },
          {
            lie: false,
            id: "g902",
            spoiler: 0,
            rating: 2.75
          },
          {
            lie: false,
            id: "g1085",
            spoiler: 0,
            rating: 2
          },
          {
            id: "g1582",
            lie: false,
            spoiler: 0,
            rating: 1.6666666
          },
          {
            lie: false,
            id: "g1454",
            rating: 2,
            spoiler: 0
          },
          {
            spoiler: 0,
            rating: 2,
            id: "g721",
            lie: false
          },
          {
            lie: false,
            id: "g3520",
            spoiler: 0,
            rating: 3
          },
          {
            spoiler: 0,
            rating: 2,
            lie: false,
            id: "g2005"
          },
          {
            spoiler: 0,
            rating: 2,
            id: "g1581",
            lie: false
          },
          {
            spoiler: 0,
            rating: 1.6666666,
            lie: false,
            id: "g894"
          },
          {
            id: "g220",
            lie: false,
            rating: 2,
            spoiler: 0
          },
          {
            rating: 2.142857,
            spoiler: 0,
            id: "g158",
            lie: false
          },
          {
            spoiler: 0,
            rating: 2,
            id: "g154",
            lie: false
          },
          {
            rating: 1,
            spoiler: 0,
            lie: false,
            id: "g82"
          },
          {
            id: "g3148",
            lie: false,
            spoiler: 0,
            rating: 2
          },
          {
            id: "g3171",
            lie: false,
            spoiler: 0,
            rating: 2
          },
          {
            spoiler: 0,
            rating: 2,
            lie: false,
            id: "g733"
          },
          {
            spoiler: 0,
            rating: 1,
            lie: false,
            id: "g357"
          },
          {
            id: "g148",
            lie: false,
            spoiler: 0,
            rating: 3
          },
          {
            id: "g288",
            lie: false,
            rating: 2.8,
            spoiler: 1
          },
          {
            lie: false,
            id: "g161",
            spoiler: 1,
            rating: 2.2
          },
          {
            spoiler: 0,
            rating: 2.5,
            lie: false,
            id: "g2063"
          },
          {
            spoiler: 0,
            rating: 1.5,
            id: "g960",
            lie: false
          },
          {
            spoiler: 1,
            rating: 2.25,
            lie: false,
            id: "g1041"
          },
          {
            id: "g1570",
            lie: false,
            spoiler: 0,
            rating: 2
          },
          {
            id: "g878",
            lie: false,
            spoiler: 0,
            rating: 2
          },
          {
            spoiler: 0,
            rating: 1,
            id: "g965",
            lie: false
          },
          {
            spoiler: 0,
            rating: 2,
            lie: false,
            id: "g1263"
          },
          {
            spoiler: 0,
            rating: 1.5,
            lie: false,
            id: "g1559"
          },
          {
            id: "g163",
            lie: false,
            spoiler: 0,
            rating: 1.2
          },
          {
            spoiler: 0,
            rating: 1.75,
            id: "g60",
            lie: false
          },
          {
            spoiler: 0,
            rating: 2,
            id: "g1168",
            lie: false
          },
          {
            id: "g511",
            lie: false,
            spoiler: 1,
            rating: 2.4
          },
          {
            spoiler: 0,
            rating: 2,
            id: "g1184",
            lie: false
          },
          {
            id: "g788",
            lie: false,
            spoiler: 2,
            rating: 1
          },
          {
            spoiler: 0,
            rating: 2.75,
            id: "g2749",
            lie: false
          },
          {
            lie: false,
            id: "g3159",
            spoiler: 0,
            rating: 2
          },
          {
            spoiler: 0,
            rating: 2,
            id: "g897",
            lie: false
          },
          {
            id: "g986",
            lie: false,
            spoiler: 0,
            rating: 1
          },
          {
            spoiler: 0,
            rating: 1,
            id: "g530",
            lie: false
          },
          {
            spoiler: 0,
            rating: 1,
            lie: false,
            id: "g2078"
          },
          {
            spoiler: 0,
            rating: 3,
            id: "g1676",
            lie: false
          },
          {
            spoiler: 0,
            rating: 3,
            lie: false,
            id: "g3005"
          },
          {
            lie: false,
            id: "g1097",
            spoiler: 2,
            rating: 2.4
          },
          {
            rating: 2,
            spoiler: 0,
            lie: false,
            id: "g502"
          },
          {
            id: "g418",
            lie: false,
            spoiler: 0,
            rating: 2.3333333
          },
          {
            lie: false,
            id: "g3204",
            spoiler: 0,
            rating: 2
          },
          {
            lie: false,
            id: "g464",
            spoiler: 0,
            rating: 2
          },
          {
            rating: 2,
            spoiler: 0,
            id: "g309",
            lie: false
          },
          {
            rating: 2,
            spoiler: 0,
            id: "g1382",
            lie: false
          },
          {
            rating: 1.6,
            spoiler: 0,
            lie: false,
            id: "g47"
          },
          {
            spoiler: 0,
            rating: 2,
            id: "g544",
            lie: false
          }
        ],
        devstatus: 0,
        title: "Gore Screaming Show",
        olang: "ja",
        rating: 73.2,
        description: "With his parents moving to America for work, Jinno Kyouji returns to his hometown, Kurehito City, after several years of absence to live with his mother's cousin, the free-spirited Saitama Yamiko. There, he encounters several girls he shares a history with. \n\nKazuyagi Akane, the strong-spirited tomboy he grew up with.\nNamiki Aoi, a gloomy girl who's Akane's best friend.\nMisono Kiika, a graceful, good-natured classmate of his from his old school.\n\nIn three years of absence, his hometown and its people have changed ever so slightly. Despite some hiccups, Kyouji's peaceful days in his hometown begin.\n\nAt least until he meets a mysterious girl on his way to his first day at school. Violet hair. Large, striking eyes. Skin that's paler than the driven snow.\n\n\"Welcome home,\" she says. \"My name is Yuka. Remember it.\"\n\nAnd wherever Yuka is, one mysterious, inexplicable figure is always nearby—a monstrous man by the name of Gore Screaming Show.\n\nKyouji's encounter with these two figures marks the end of his peaceful days—as they bring madness and despair into this world. Will Kyouji and the girl he loves be able to escape and return to their peaceful days? Or will they—\n\n[Edited from [url=https://jastusa.com/games/jast051/gore-screaming-show-pre-order]JAST USA[/url]]",
        alttitle: "ゴア・スクリーミング・ショウ",
        platforms: [
          "win",
          "dvd",
          "psp"
        ],
        screenshots: [
          {
            thumbnail: "https://s2.vndb.org/st/57/100657.jpg",
            thumbnail_dims: [
              136,
              102
            ]
          },
          {
            thumbnail_dims: [
              136,
              102
            ],
            thumbnail: "https://s2.vndb.org/st/58/100658.jpg"
          },
          {
            thumbnail: "https://s2.vndb.org/st/60/100660.jpg",
            thumbnail_dims: [
              136,
              102
            ]
          },
          {
            thumbnail_dims: [
              136,
              102
            ],
            thumbnail: "https://s2.vndb.org/st/61/100661.jpg"
          },
          {
            thumbnail_dims: [
              136,
              102
            ],
            thumbnail: "https://s2.vndb.org/st/62/100662.jpg"
          },
          {
            thumbnail_dims: [
              136,
              102
            ],
            thumbnail: "https://s2.vndb.org/st/63/100663.jpg"
          },
          {
            thumbnail: "https://s2.vndb.org/st/64/100664.jpg",
            thumbnail_dims: [
              136,
              102
            ]
          },
          {
            thumbnail_dims: [
              136,
              102
            ],
            thumbnail: "https://s2.vndb.org/st/66/100666.jpg"
          },
          {
            thumbnail_dims: [
              136,
              102
            ],
            thumbnail: "https://s2.vndb.org/st/00/172200.jpg"
          },
          {
            thumbnail: "https://s2.vndb.org/st/01/172201.jpg",
            thumbnail_dims: [
              136,
              102
            ]
          }
        ],
        languages: [
          "en",
          "ja",
          "zh-Hans"
        ],
        aliases: [
          "GSS",
          "ゴアスク"
        ],
        released: "2006-01-20",
        popularity: 5.49,
        votecount: 567,
        length: 4,
        titles: [
          {
            official: true,
            latin: "Gore Screaming Show",
            lang: "ja",
            title: "ゴア・スクリーミング・ショウ",
            main: true
          }
        ]
      },
      lastmod: 1671319359,
      started: null
    },
    {
      started: null,
      lastmod: 1667194748,
      finished: null,
      added: 1648471224,
      notes: null,
      id: "v945",
      vn: {
        title: "Katawa Shoujo",
        olang: "en",
        rating: 78.6,
        description: "Hisao Nakai is a normal high school student, currently in his final year of high school. One day Hisao finds an anonymous letter  in his math textbook, directing him to meet the sender at a given location. The sender turns out to be his crush, however, as she confesses to him, he suddenly collapses. He awakes in a hospital bed, and is told by the doctors that the reason he collapsed is due to arrhythmia, a rare heart condition that causes his heartbeat to sometimes become irregular. Due to this, his parents have enrolled him in Yamaku, a school for (physically) disabled students.",
        popularity: 77.27,
        votecount: 14712,
        titles: [
          {
            latin: null,
            official: true,
            lang: "en",
            title: "Katawa Shoujo",
            main: true
          },
          {
            title: "かたわ少女",
            main: false,
            lang: "ja",
            official: true,
            latin: "Katawa Shoujo"
          },
          {
            main: false,
            title: "장애소녀",
            lang: "ko",
            latin: "Jangae Sonyeo",
            official: false
          },
          {
            main: false,
            title: "Khiếm Khuyết Thiếu Nữ",
            lang: "vi",
            latin: null,
            official: true
          },
          {
            official: false,
            latin: "Pianlun Shaonv",
            main: false,
            title: "片轮少女",
            lang: "zh-Hans"
          }
        ],
        length: 3,
        alttitle: null,
        platforms: [
          "win",
          "lin",
          "mac",
          "ios",
          "and",
          "swi",
          "web"
        ],
        languages: [
          "ca",
          "de",
          "en",
          "es",
          "fr",
          "hu",
          "it",
          "ja",
          "ko",
          "pl",
          "pt-br",
          "ru",
          "tr",
          "zh-Hans",
          "zh-Hant"
        ],
        screenshots: [
          {
            thumbnail_dims: [
              136,
              102
            ],
            thumbnail: "https://s2.vndb.org/st/28/1728.jpg"
          },
          {
            thumbnail_dims: [
              136,
              102
            ],
            thumbnail: "https://s2.vndb.org/st/29/1729.jpg"
          },
          {
            thumbnail_dims: [
              136,
              102
            ],
            thumbnail: "https://s2.vndb.org/st/30/1730.jpg"
          },
          {
            thumbnail_dims: [
              136,
              102
            ],
            thumbnail: "https://s2.vndb.org/st/31/1731.jpg"
          },
          {
            thumbnail: "https://s2.vndb.org/st/60/28560.jpg",
            thumbnail_dims: [
              136,
              102
            ]
          },
          {
            thumbnail: "https://s2.vndb.org/st/61/28561.jpg",
            thumbnail_dims: [
              136,
              102
            ]
          },
          {
            thumbnail_dims: [
              136,
              102
            ],
            thumbnail: "https://s2.vndb.org/st/87/52587.jpg"
          },
          {
            thumbnail_dims: [
              136,
              102
            ],
            thumbnail: "https://s2.vndb.org/st/88/52588.jpg"
          },
          {
            thumbnail_dims: [
              136,
              102
            ],
            thumbnail: "https://s2.vndb.org/st/89/52589.jpg"
          },
          {
            thumbnail: "https://s2.vndb.org/st/60/134060.jpg",
            thumbnail_dims: [
              136,
              102
            ]
          }
        ],
        aliases: [
          "Disability Girls"
        ],
        released: "2009-04-29",
        length_votes: 92,
        tags: [
          {
            rating: 2.8387096,
            spoiler: 0,
            id: "g32",
            lie: false
          },
          {
            lie: false,
            id: "g23",
            rating: 1.8253968,
            spoiler: 0
          },
          {
            lie: false,
            id: "g300",
            spoiler: 0,
            rating: 2.6842105
          },
          {
            lie: false,
            id: "g176",
            spoiler: 0,
            rating: 1.88
          },
          {
            lie: false,
            id: "g148",
            rating: 2.8076923,
            spoiler: 0
          },
          {
            id: "g174",
            lie: false,
            rating: 1,
            spoiler: 1
          },
          {
            spoiler: 2,
            rating: 0.5,
            lie: false,
            id: "g251"
          },
          {
            spoiler: 0,
            rating: 2.819277,
            id: "g248",
            lie: false
          },
          {
            spoiler: 0,
            rating: 2.85,
            lie: false,
            id: "g48"
          },
          {
            spoiler: 0,
            rating: 2.5633802,
            id: "g197",
            lie: false
          },
          {
            lie: false,
            id: "g172",
            spoiler: 1,
            rating: 1
          },
          {
            id: "g728",
            lie: false,
            spoiler: 0,
            rating: 2.6944444
          },
          {
            spoiler: 0,
            rating: 2.8032787,
            lie: false,
            id: "g1275"
          },
          {
            lie: false,
            id: "g1251",
            spoiler: 0,
            rating: 2.6969697
          },
          {
            rating: 2.7049181,
            spoiler: 0,
            id: "g975",
            lie: false
          },
          {
            spoiler: 0,
            rating: 2.8082192,
            id: "g961",
            lie: false
          },
          {
            id: "g760",
            lie: false,
            rating: 1.8571428,
            spoiler: 0
          },
          {
            spoiler: 1,
            rating: 2,
            lie: false,
            id: "g1446"
          },
          {
            lie: false,
            id: "g2411",
            spoiler: 1,
            rating: 1.8181819
          },
          {
            id: "g275",
            lie: false,
            spoiler: 0,
            rating: 1.7741935
          },
          {
            id: "g273",
            lie: false,
            spoiler: 0,
            rating: 2.879518
          },
          {
            rating: 1.9130435,
            spoiler: 0,
            lie: false,
            id: "g151"
          },
          {
            lie: false,
            id: "g191",
            spoiler: 0,
            rating: 2.6538463
          },
          {
            id: "g3171",
            lie: false,
            spoiler: 0,
            rating: 2.7142856
          },
          {
            id: "g3168",
            lie: false,
            spoiler: 1,
            rating: 1.8
          },
          {
            rating: 2.7142856,
            spoiler: 0,
            lie: false,
            id: "g681"
          },
          {
            spoiler: 0,
            rating: 2.2545455,
            id: "g1058",
            lie: false
          },
          {
            lie: false,
            id: "g2186",
            spoiler: 0,
            rating: 2.1666667
          },
          {
            id: "g1087",
            lie: false,
            spoiler: 0,
            rating: 1.4102564
          },
          {
            spoiler: 0,
            rating: 2.7804878,
            lie: false,
            id: "g389"
          },
          {
            rating: 2.857143,
            spoiler: 0,
            lie: false,
            id: "g257"
          },
          {
            lie: false,
            id: "g96",
            rating: 2.9761906,
            spoiler: 0
          },
          {
            spoiler: 1,
            rating: 2.8059702,
            lie: false,
            id: "g876"
          },
          {
            spoiler: 0,
            rating: 2.25,
            lie: false,
            id: "g2394"
          },
          {
            spoiler: 0,
            rating: 2.6153846,
            lie: false,
            id: "g369"
          },
          {
            id: "g3155",
            lie: false,
            spoiler: 0,
            rating: 1
          },
          {
            rating: 2.5522387,
            spoiler: 0,
            id: "g677",
            lie: false
          },
          {
            id: "g875",
            lie: false,
            spoiler: 0,
            rating: 2.7121212
          },
          {
            spoiler: 0,
            rating: 1.25,
            id: "g1856",
            lie: false
          },
          {
            rating: 1,
            spoiler: 0,
            lie: false,
            id: "g3148"
          },
          {
            spoiler: 0,
            rating: 2.764706,
            lie: false,
            id: "g565"
          },
          {
            lie: false,
            id: "g2415",
            spoiler: 0,
            rating: 1.1111112
          },
          {
            spoiler: 0,
            rating: 2.2,
            lie: false,
            id: "g878"
          },
          {
            spoiler: 0,
            rating: 2.6666667,
            lie: false,
            id: "g355"
          },
          {
            spoiler: 0,
            rating: 2.8441558,
            lie: false,
            id: "g258"
          },
          {
            lie: false,
            id: "g337",
            spoiler: 2,
            rating: 1.6833333
          },
          {
            id: "g133",
            lie: false,
            spoiler: 0,
            rating: 2.8888888
          },
          {
            rating: 0.8666667,
            spoiler: 2,
            lie: false,
            id: "g1313"
          },
          {
            rating: 2.1206896,
            spoiler: 0,
            id: "g867",
            lie: false
          },
          {
            spoiler: 0,
            rating: 2.7419355,
            lie: false,
            id: "g920"
          },
          {
            rating: 2.6891892,
            spoiler: 0,
            id: "g566",
            lie: false
          },
          {
            spoiler: 0,
            rating: 2.95,
            id: "g454",
            lie: false
          },
          {
            spoiler: 0,
            rating: 2.55,
            lie: false,
            id: "g596"
          },
          {
            rating: 2.1506848,
            spoiler: 0,
            id: "g895",
            lie: false
          },
          {
            rating: 3,
            spoiler: 0,
            lie: false,
            id: "g1491"
          },
          {
            lie: false,
            id: "g749",
            rating: 1.704918,
            spoiler: 1
          },
          {
            id: "g265",
            lie: false,
            spoiler: 0,
            rating: 2.8636363
          },
          {
            spoiler: 0,
            rating: 2.8026316,
            id: "g222",
            lie: false
          },
          {
            spoiler: 0,
            rating: 2.5,
            id: "g453",
            lie: false
          },
          {
            lie: false,
            id: "g1471",
            spoiler: 0,
            rating: 2.4615386
          },
          {
            id: "g775",
            lie: false,
            spoiler: 2,
            rating: 2
          },
          {
            lie: false,
            id: "g433",
            rating: 2.8181818,
            spoiler: 0
          },
          {
            spoiler: 1,
            rating: 1.5,
            id: "g2228",
            lie: false
          },
          {
            spoiler: 0,
            rating: 2.8333333,
            lie: false,
            id: "g1382"
          },
          {
            rating: 2.5657895,
            spoiler: 0,
            id: "g538",
            lie: false
          },
          {
            spoiler: 0,
            rating: 1.5909091,
            lie: false,
            id: "g1320"
          },
          {
            spoiler: 0,
            rating: 1.8846154,
            id: "g1736",
            lie: false
          },
          {
            lie: false,
            id: "g1184",
            rating: 2.8,
            spoiler: 0
          },
          {
            id: "g731",
            lie: false,
            spoiler: 0,
            rating: 1.8723404
          },
          {
            spoiler: 0,
            rating: 0.96153843,
            lie: false,
            id: "g735"
          },
          {
            spoiler: 1,
            rating: 1,
            id: "g173",
            lie: false
          },
          {
            rating: 1,
            spoiler: 1,
            lie: false,
            id: "g165"
          },
          {
            spoiler: 0,
            rating: 2.106383,
            id: "g236",
            lie: false
          },
          {
            lie: false,
            id: "g606",
            rating: 2.4285715,
            spoiler: 0
          },
          {
            spoiler: 2,
            rating: 2,
            id: "g627",
            lie: false
          },
          {
            id: "g1467",
            lie: false,
            spoiler: 0,
            rating: 1.326087
          },
          {
            spoiler: 0,
            rating: 2.5833333,
            lie: false,
            id: "g2512"
          },
          {
            id: "g1581",
            lie: false,
            rating: 1.9615384,
            spoiler: 0
          },
          {
            rating: 2,
            spoiler: 0,
            id: "g3415",
            lie: false
          },
          {
            spoiler: 0,
            rating: 2.7368422,
            lie: false,
            id: "g2353"
          },
          {
            lie: false,
            id: "g871",
            rating: 2,
            spoiler: 0
          },
          {
            spoiler: 1,
            rating: 2.5238094,
            lie: false,
            id: "g733"
          },
          {
            id: "g215",
            lie: false,
            spoiler: 0,
            rating: 1.25
          },
          {
            id: "g180",
            lie: false,
            rating: 2.7096775,
            spoiler: 0
          },
          {
            spoiler: 0,
            rating: 2.7951808,
            id: "g346",
            lie: false
          },
          {
            id: "g3172",
            lie: false,
            rating: 2.75,
            spoiler: 1
          },
          {
            lie: false,
            id: "g1762",
            rating: 2,
            spoiler: 2
          },
          {
            lie: false,
            id: "g1380",
            spoiler: 2,
            rating: 0.375
          },
          {
            lie: false,
            id: "g544",
            spoiler: 0,
            rating: 2.84
          },
          {
            spoiler: 1,
            rating: 2,
            id: "g1776",
            lie: false
          },
          {
            id: "g660",
            lie: false,
            spoiler: 0,
            rating: 2.8292682
          },
          {
            rating: 2.75,
            spoiler: 0,
            id: "g1434",
            lie: false
          },
          {
            spoiler: 1,
            rating: 1.25,
            lie: false,
            id: "g3151"
          },
          {
            spoiler: 0,
            rating: 2.724138,
            id: "g1079",
            lie: false
          },
          {
            rating: 2,
            spoiler: 0,
            lie: false,
            id: "g299"
          },
          {
            id: "g247",
            lie: false,
            spoiler: 0,
            rating: 2.9780219
          },
          {
            id: "g220",
            lie: false,
            spoiler: 1,
            rating: 0.9607843
          },
          {
            spoiler: 2,
            rating: 0.974359,
            id: "g980",
            lie: false
          },
          {
            spoiler: 0,
            rating: 2.7777777,
            lie: false,
            id: "g1646"
          },
          {
            rating: 1.4230769,
            spoiler: 0,
            lie: false,
            id: "g1515"
          },
          {
            lie: false,
            id: "g522",
            spoiler: 0,
            rating: 2.5081968
          },
          {
            lie: false,
            id: "g552",
            spoiler: 0,
            rating: 3
          },
          {
            spoiler: 1,
            rating: 1.75,
            id: "g1297",
            lie: false
          },
          {
            spoiler: 0,
            rating: 2.75,
            id: "g2708",
            lie: false
          },
          {
            id: "g598",
            lie: false,
            spoiler: 0,
            rating: 2.574074
          },
          {
            lie: false,
            id: "g1168",
            spoiler: 0,
            rating: 2.75
          },
          {
            lie: false,
            id: "g1796",
            spoiler: 1,
            rating: 1.6296296
          },
          {
            spoiler: 0,
            rating: 2.0285714,
            id: "g1190",
            lie: false
          },
          {
            spoiler: 1,
            rating: 2,
            id: "g530",
            lie: false
          },
          {
            spoiler: 0,
            rating: 2.641791,
            lie: false,
            id: "g461"
          },
          {
            id: "g1555",
            lie: false,
            rating: 2.3846154,
            spoiler: 0
          },
          {
            id: "g868",
            lie: false,
            spoiler: 0,
            rating: 2.6904762
          }
        ],
        devstatus: 0,
        length_minutes: 1955,
        image: {
          dims: [
            256,
            368
          ],
          sexual: 0,
          id: "cv51227",
          violence: 0,
          url: "https://s2.vndb.org/cv/27/51227.jpg",
          votecount: 11
        }
      },
      voted: null,
      vote: null
    },
    {
      vote: 90,
      notes: null,
      finished: null,
      added: 1455225673,
      voted: 1634272895,
      vn: {
        description: "――It began with a single envelope.\n\nOne day, an admission pamphlet to a famous academy arrived, containing an “all-you-can-eat” cafeteria pass. That alone was enough to lure our hero into visiting the super-prestigious Otori Ryouran College Community, home to students who excel in a variety of fields. Offbeat and unique students like a robot seem natural at Otori Ryouran. Organizing this odd student body is the responsibility of two groups ―― the Student Council and the Ryouran Society.\n\nI was so happy to change schools, so why is a fortuneteller saying ominous things the moment I step out the door!\n\nWhy did all the fireworks explode on the bridge!!\n\nAnd why was the only available room in the women’s dorm!!!\n\n“Be wary, boy who carries an exceptional fate. Misfortune awaits you beyond here.”\n\n[From [url=http://umikazetranslations.wordpress.com/projects/]Umikaze Translations[/url]]",
        rating: 73.8,
        olang: "ja",
        title: "Flyable Heart",
        aliases: [
          "The future has already begun.",
          "フライアブルハート"
        ],
        released: "2009-03-19",
        languages: [
          "ja",
          "zh-Hans"
        ],
        screenshots: [
          {
            thumbnail: "https://s2.vndb.org/st/93/6893.jpg",
            thumbnail_dims: [
              136,
              102
            ]
          },
          {
            thumbnail_dims: [
              136,
              102
            ],
            thumbnail: "https://s2.vndb.org/st/96/6896.jpg"
          },
          {
            thumbnail_dims: [
              136,
              102
            ],
            thumbnail: "https://s2.vndb.org/st/98/6898.jpg"
          },
          {
            thumbnail: "https://s2.vndb.org/st/99/6899.jpg",
            thumbnail_dims: [
              136,
              102
            ]
          },
          {
            thumbnail_dims: [
              136,
              102
            ],
            thumbnail: "https://s2.vndb.org/st/00/6900.jpg"
          },
          {
            thumbnail_dims: [
              136,
              102
            ],
            thumbnail: "https://s2.vndb.org/st/01/6901.jpg"
          },
          {
            thumbnail: "https://s2.vndb.org/st/91/71091.jpg",
            thumbnail_dims: [
              136,
              102
            ]
          },
          {
            thumbnail_dims: [
              136,
              102
            ],
            thumbnail: "https://s2.vndb.org/st/25/94125.jpg"
          },
          {
            thumbnail: "https://s2.vndb.org/st/26/94126.jpg",
            thumbnail_dims: [
              136,
              102
            ]
          },
          {
            thumbnail: "https://s2.vndb.org/st/27/94127.jpg",
            thumbnail_dims: [
              136,
              102
            ]
          }
        ],
        platforms: [
          "win"
        ],
        alttitle: null,
        titles: [
          {
            latin: null,
            official: true,
            title: "Flyable Heart",
            main: true,
            lang: "ja"
          }
        ],
        length: 3,
        votecount: 600,
        popularity: 5.52,
        length_votes: 5,
        image: {
          url: "https://s2.vndb.org/cv/29/28429.jpg",
          votecount: 11,
          dims: [
            256,
            358
          ],
          sexual: 0,
          violence: 0,
          id: "cv28429"
        },
        length_minutes: 2025,
        devstatus: 0,
        tags: [
          {
            id: "g32",
            lie: false,
            spoiler: 0,
            rating: 2.4444444
          },
          {
            spoiler: 0,
            rating: 2.2222223,
            id: "g48",
            lie: false
          },
          {
            spoiler: 0,
            rating: 2.5714285,
            id: "g258",
            lie: false
          },
          {
            id: "g149",
            lie: false,
            spoiler: 0,
            rating: 1
          },
          {
            spoiler: 0,
            rating: 3,
            lie: false,
            id: "g534"
          },
          {
            spoiler: 0,
            rating: 3,
            lie: false,
            id: "g1889"
          },
          {
            spoiler: 0,
            rating: 2,
            lie: false,
            id: "g1234"
          },
          {
            spoiler: 0,
            rating: 3,
            lie: false,
            id: "g596"
          },
          {
            spoiler: 0,
            rating: 2.25,
            id: "g1053",
            lie: false
          },
          {
            spoiler: 0,
            rating: 2.5,
            id: "g1378",
            lie: false
          },
          {
            spoiler: 2,
            rating: 2,
            id: "g1335",
            lie: false
          },
          {
            id: "g894",
            lie: false,
            spoiler: 0,
            rating: 2.3333333
          },
          {
            id: "g874",
            lie: false,
            spoiler: 2,
            rating: 2.125
          },
          {
            id: "g2045",
            lie: false,
            rating: 2,
            spoiler: 2
          },
          {
            lie: false,
            id: "g1211",
            spoiler: 0,
            rating: 3
          },
          {
            rating: 2,
            spoiler: 1,
            id: "g336",
            lie: false
          },
          {
            spoiler: 0,
            rating: 2,
            lie: false,
            id: "g237"
          },
          {
            rating: 1.7142857,
            spoiler: 0,
            id: "g181",
            lie: false
          },
          {
            lie: false,
            id: "g154",
            spoiler: 0,
            rating: 2.5
          },
          {
            spoiler: 2,
            rating: 2.2857144,
            lie: false,
            id: "g250"
          },
          {
            id: "g133",
            lie: false,
            rating: 2.375,
            spoiler: 0
          },
          {
            id: "g728",
            lie: false,
            spoiler: 0,
            rating: 2.4444444
          },
          {
            lie: false,
            id: "g190",
            spoiler: 0,
            rating: 2.5
          },
          {
            lie: false,
            id: "g2033",
            rating: 3,
            spoiler: 0
          },
          {
            spoiler: 0,
            rating: 2.625,
            id: "g373",
            lie: false
          },
          {
            rating: 3,
            spoiler: 2,
            lie: false,
            id: "g1181"
          },
          {
            spoiler: 1,
            rating: 0.5,
            id: "g900",
            lie: true
          },
          {
            spoiler: 0,
            rating: 2,
            id: "g64",
            lie: false
          },
          {
            lie: false,
            id: "g726",
            spoiler: 0,
            rating: 2.25
          },
          {
            lie: false,
            id: "g733",
            spoiler: 0,
            rating: 2
          },
          {
            spoiler: 0,
            rating: 2.5,
            lie: false,
            id: "g904"
          },
          {
            lie: false,
            id: "g151",
            spoiler: 0,
            rating: 2.5714285
          },
          {
            lie: false,
            id: "g916",
            spoiler: 0,
            rating: 1.2
          },
          {
            lie: false,
            id: "g1214",
            spoiler: 0,
            rating: 2
          },
          {
            rating: 2.6666667,
            spoiler: 0,
            id: "g1646",
            lie: false
          },
          {
            spoiler: 2,
            rating: 2,
            id: "g172",
            lie: false
          },
          {
            rating: 2,
            spoiler: 0,
            lie: false,
            id: "g2159"
          },
          {
            spoiler: 0,
            rating: 2.25,
            lie: false,
            id: "g389"
          },
          {
            rating: 0.6666667,
            spoiler: 0,
            lie: false,
            id: "g185"
          },
          {
            id: "g1393",
            lie: false,
            spoiler: 0,
            rating: 1
          },
          {
            lie: false,
            id: "g788",
            spoiler: 2,
            rating: 2
          },
          {
            id: "g692",
            lie: false,
            spoiler: 0,
            rating: 2.1666667
          },
          {
            spoiler: 0,
            rating: 2.2857144,
            lie: false,
            id: "g756"
          },
          {
            lie: false,
            id: "g186",
            spoiler: 0,
            rating: 2.142857
          },
          {
            spoiler: 0,
            rating: 2.5,
            id: "g148",
            lie: false
          },
          {
            spoiler: 0,
            rating: 2.4,
            lie: false,
            id: "g176"
          },
          {
            lie: false,
            id: "g681",
            spoiler: 0,
            rating: 2
          },
          {
            id: "g3171",
            lie: false,
            spoiler: 0,
            rating: 3
          },
          {
            spoiler: 0,
            rating: 2.25,
            id: "g878",
            lie: false
          },
          {
            lie: false,
            id: "g1182",
            spoiler: 0,
            rating: 0.16666667
          },
          {
            id: "g1595",
            lie: false,
            spoiler: 0,
            rating: 1
          },
          {
            spoiler: 1,
            rating: 1,
            id: "g140",
            lie: false
          },
          {
            spoiler: 0,
            rating: 2.5,
            lie: false,
            id: "g236"
          },
          {
            spoiler: 0,
            rating: 2.1666667,
            lie: false,
            id: "g193"
          },
          {
            id: "g599",
            lie: false,
            spoiler: 0,
            rating: 2.4285715
          },
          {
            spoiler: 0,
            rating: 1,
            lie: false,
            id: "g497"
          },
          {
            rating: 2.1666667,
            spoiler: 0,
            lie: false,
            id: "g420"
          },
          {
            rating: 3,
            spoiler: 0,
            lie: false,
            id: "g2635"
          },
          {
            lie: false,
            id: "g1434",
            spoiler: 0,
            rating: 3
          },
          {
            spoiler: 0,
            rating: 2.5,
            id: "g107",
            lie: false
          },
          {
            rating: 2,
            spoiler: 0,
            id: "g602",
            lie: false
          },
          {
            spoiler: 0,
            rating: 2,
            id: "g3147",
            lie: false
          },
          {
            spoiler: 0,
            rating: 1,
            id: "g676",
            lie: false
          },
          {
            lie: false,
            id: "g1431",
            spoiler: 0,
            rating: 3
          },
          {
            spoiler: 0,
            rating: 1,
            id: "g735",
            lie: false
          },
          {
            lie: true,
            id: "g1296",
            spoiler: 1,
            rating: 0.5
          },
          {
            lie: false,
            id: "g147",
            rating: 2.5,
            spoiler: 0
          },
          {
            rating: 2.2222223,
            spoiler: 0,
            lie: false,
            id: "g197"
          },
          {
            spoiler: 2,
            rating: 2.2857144,
            lie: false,
            id: "g196"
          },
          {
            lie: false,
            id: "g96",
            spoiler: 0,
            rating: 3
          },
          {
            lie: false,
            id: "g249",
            spoiler: 2,
            rating: 2.4
          },
          {
            spoiler: 0,
            rating: 2.375,
            lie: false,
            id: "g108"
          },
          {
            id: "g173",
            lie: false,
            rating: 1,
            spoiler: 0
          },
          {
            spoiler: 0,
            rating: 3,
            id: "g1382",
            lie: false
          },
          {
            id: "g152",
            lie: false,
            spoiler: 0,
            rating: 3
          },
          {
            id: "g459",
            lie: false,
            spoiler: 0,
            rating: 2.6666667
          },
          {
            spoiler: 2,
            rating: 1,
            lie: false,
            id: "g966"
          },
          {
            spoiler: 0,
            rating: 2,
            id: "g1058",
            lie: false
          },
          {
            spoiler: 0,
            rating: 2.5,
            id: "g538",
            lie: false
          },
          {
            id: "g105",
            lie: false,
            spoiler: 0,
            rating: 1
          },
          {
            id: "g553",
            lie: false,
            rating: 2.6666667,
            spoiler: 0
          }
        ]
      },
      id: "v1179",
      lastmod: 1665840726,
      started: null
    },
    {
      vn: {
        description: "Reika and Kyouka\n\nKyouka Kokudou makes a sudden appearance at the Nikaidou estate one day, demanding that Kaito become her new bodyguard. This kickstarts a series of events which results in Kaito and Kyouka spending more time together. How will things end up between Reika and Kaito while Kyouka plays her game?\n\n\nTsuki\n\nTsuki and Kaito have something in common: neither of them can sleep in the dark. One day, Reika commands Kaito to help Tsuki, so she can eventually sleep with the lights off.\n\nWill Tsuki be able to conquer her fears?\n\n\nAya\n\nAs Aya’s and Kaito’s relationship becomes known in the Nikaidou estate, her father Genzou quickly tries to have them both give up on it. Aya convinces him to put off the idea, but neither she nor Kaito can find a way to convince him otherwise.\n\nIt’s right then and there when Aya starts thinking about something that could maybe convince Genzou to accept Kaito once and for all.\n\n\nMoe\n\nKaito begins his life at the Kanzaki estate, with Moe and her family. That’s when Kaito starts pondering: Moe is one year older than him, and she’ll graduate soon. What does she want to do in the future? \n\nThough she looked like she had no goals to him, once Kaito asks her, the answer Moe gives to him is something most unexpected…\n\n\nTae\n\nThe story picks up after Tae resolves herself to fix her lifelong partner Yuuki, who has stopped working altogether.\n\nHer resolve is strong at first, but soon enough it begins to wane, the reason being one: Tae hates studying. Seeing this, Kaito decides to start studying more seriously to motivate her, and soon enough both will face a wall that they’ll need to climb together if they are to continue on their journey to save their friend.\n\n[Translated from [url=http://www.akabeesoft3.com/products/goei_fd/story.html] Official Fandisk Website[/url]]",
        rating: 71.6,
        olang: "ja",
        title: "Akatsuki no Goei ~Principal-tachi no Kyuujitsu~",
        length: 3,
        titles: [
          {
            lang: "en",
            title: "Guardians of Daybreak: A Day in the Life of the Ladies.",
            main: false,
            latin: null,
            official: false
          },
          {
            main: true,
            title: "暁の護衛～プリンシパルたちの休日～",
            lang: "ja",
            official: true,
            latin: "Akatsuki no Goei ~Principal-tachi no Kyuujitsu~"
          },
          {
            latin: null,
            official: false,
            title: "晓之护卫～主角们的休息日～",
            main: false,
            lang: "zh-Hans"
          }
        ],
        votecount: 409,
        popularity: 4.23,
        aliases: [],
        released: "2008-12-25",
        languages: [
          "en",
          "hu",
          "ja",
          "vi",
          "zh-Hans"
        ],
        screenshots: [
          {
            thumbnail: "https://s2.vndb.org/st/15/6815.jpg",
            thumbnail_dims: [
              136,
              102
            ]
          },
          {
            thumbnail: "https://s2.vndb.org/st/16/6816.jpg",
            thumbnail_dims: [
              136,
              102
            ]
          },
          {
            thumbnail: "https://s2.vndb.org/st/17/6817.jpg",
            thumbnail_dims: [
              136,
              102
            ]
          },
          {
            thumbnail: "https://s2.vndb.org/st/18/6818.jpg",
            thumbnail_dims: [
              136,
              102
            ]
          },
          {
            thumbnail: "https://s2.vndb.org/st/19/6819.jpg",
            thumbnail_dims: [
              136,
              102
            ]
          },
          {
            thumbnail: "https://s2.vndb.org/st/20/6820.jpg",
            thumbnail_dims: [
              136,
              102
            ]
          },
          {
            thumbnail_dims: [
              136,
              102
            ],
            thumbnail: "https://s2.vndb.org/st/21/6821.jpg"
          },
          {
            thumbnail: "https://s2.vndb.org/st/22/6822.jpg",
            thumbnail_dims: [
              136,
              102
            ]
          },
          {
            thumbnail: "https://s2.vndb.org/st/23/6823.jpg",
            thumbnail_dims: [
              136,
              102
            ]
          },
          {
            thumbnail_dims: [
              136,
              102
            ],
            thumbnail: "https://s2.vndb.org/st/28/12228.jpg"
          }
        ],
        platforms: [
          "win",
          "psp",
          "ps3"
        ],
        alttitle: "暁の護衛～プリンシパルたちの休日～",
        length_votes: 6,
        devstatus: 0,
        tags: [
          {
            rating: 2,
            spoiler: 0,
            id: "g23",
            lie: false
          },
          {
            id: "g32",
            lie: false,
            spoiler: 0,
            rating: 2
          },
          {
            id: "g12",
            lie: false,
            rating: 2,
            spoiler: 0
          },
          {
            spoiler: 0,
            rating: 2,
            lie: false,
            id: "g186"
          },
          {
            lie: false,
            id: "g343",
            rating: 2,
            spoiler: 0
          },
          {
            rating: 1,
            spoiler: 0,
            lie: false,
            id: "g670"
          },
          {
            id: "g676",
            lie: false,
            spoiler: 0,
            rating: 2
          },
          {
            id: "g1660",
            lie: false,
            spoiler: 0,
            rating: 1
          },
          {
            id: "g425",
            lie: false,
            rating: 2.4,
            spoiler: 0
          },
          {
            id: "g602",
            lie: false,
            spoiler: 0,
            rating: 2
          },
          {
            lie: false,
            id: "g1581",
            spoiler: 0,
            rating: 2
          },
          {
            spoiler: 0,
            rating: 2.6,
            lie: false,
            id: "g104"
          },
          {
            spoiler: 0,
            rating: 2,
            id: "g148",
            lie: false
          },
          {
            spoiler: 0,
            rating: 2,
            id: "g1474",
            lie: false
          },
          {
            id: "g112",
            lie: false,
            spoiler: 0,
            rating: 2
          },
          {
            spoiler: 0,
            rating: 2,
            lie: false,
            id: "g140"
          },
          {
            lie: false,
            id: "g133",
            spoiler: 0,
            rating: 2.25
          },
          {
            spoiler: 0,
            rating: 1,
            id: "g1297",
            lie: false
          },
          {
            lie: false,
            id: "g751",
            rating: 2,
            spoiler: 0
          },
          {
            lie: false,
            id: "g147",
            rating: 2.3333333,
            spoiler: 0
          },
          {
            id: "g96",
            lie: false,
            spoiler: 0,
            rating: 2
          },
          {
            spoiler: 0,
            rating: 2,
            id: "g1691",
            lie: false
          },
          {
            rating: 2,
            spoiler: 0,
            lie: false,
            id: "g3171"
          },
          {
            id: "g1582",
            lie: false,
            spoiler: 0,
            rating: 1
          },
          {
            id: "g1759",
            lie: false,
            spoiler: 0,
            rating: 2
          },
          {
            id: "g2245",
            lie: false,
            rating: 1,
            spoiler: 0
          },
          {
            spoiler: 0,
            rating: 1,
            lie: false,
            id: "g580"
          },
          {
            spoiler: 0,
            rating: 2,
            id: "g875",
            lie: false
          },
          {
            rating: 2,
            spoiler: 0,
            id: "g459",
            lie: false
          },
          {
            spoiler: 0,
            rating: 2.3333333,
            lie: false,
            id: "g47"
          },
          {
            lie: false,
            id: "g2529",
            spoiler: 1,
            rating: 1
          },
          {
            lie: false,
            id: "g1595",
            spoiler: 0,
            rating: 1
          },
          {
            spoiler: 0,
            rating: 1,
            id: "g894",
            lie: false
          },
          {
            spoiler: 0,
            rating: 2,
            lie: false,
            id: "g606"
          },
          {
            spoiler: 0,
            rating: 2,
            lie: false,
            id: "g1229"
          },
          {
            lie: false,
            id: "g916",
            spoiler: 0,
            rating: 2
          },
          {
            id: "g454",
            lie: false,
            spoiler: 0,
            rating: 3
          },
          {
            lie: false,
            id: "g1059",
            spoiler: 0,
            rating: 3
          }
        ],
        image: {
          votecount: 19,
          url: "https://s2.vndb.org/cv/10/25910.jpg",
          id: "cv25910",
          violence: 0,
          sexual: 0.47,
          dims: [
            256,
            362
          ]
        },
        length_minutes: 900
      },
      voted: null,
      id: "v1307",
      notes: "aya route - feels like this shouldve been in the main game honestly like tf\nreika+kyouka - idk",
      added: 1655655041,
      finished: null,
      vote: null,
      started: null,
      lastmod: 1655656163
    },
    {
      started: null,
      lastmod: 1647945906,
      notes: "eventual translation copium",
      added: 1647945899,
      finished: null,
      voted: null,
      vn: {
        length: 3,
        titles: [
          {
            main: true,
            title: "夜明け前より瑠璃色な -Moonlight Cradle-",
            lang: "ja",
            latin: "Yoake Mae yori Ruri Iro na -Moonlight Cradle-",
            official: true
          },
          {
            title: "更胜黎明前的琉璃色 -Moonlight Cradle-",
            main: false,
            lang: "zh-Hans",
            official: false,
            latin: "Gengsheng Limingqian de Liulise -Moonlight Cradle-"
          }
        ],
        votecount: 122,
        popularity: 1.53,
        aliases: [],
        released: "2009-02-27",
        languages: [
          "ja",
          "zh-Hans"
        ],
        screenshots: [
          {
            thumbnail: "https://s2.vndb.org/st/33/36933.jpg",
            thumbnail_dims: [
              136,
              102
            ]
          },
          {
            thumbnail: "https://s2.vndb.org/st/34/36934.jpg",
            thumbnail_dims: [
              136,
              102
            ]
          },
          {
            thumbnail: "https://s2.vndb.org/st/35/36935.jpg",
            thumbnail_dims: [
              136,
              102
            ]
          },
          {
            thumbnail_dims: [
              136,
              102
            ],
            thumbnail: "https://s2.vndb.org/st/36/36936.jpg"
          },
          {
            thumbnail: "https://s2.vndb.org/st/37/36937.jpg",
            thumbnail_dims: [
              136,
              102
            ]
          },
          {
            thumbnail_dims: [
              136,
              102
            ],
            thumbnail: "https://s2.vndb.org/st/38/36938.jpg"
          },
          {
            thumbnail_dims: [
              136,
              102
            ],
            thumbnail: "https://s2.vndb.org/st/39/36939.jpg"
          },
          {
            thumbnail: "https://s2.vndb.org/st/40/36940.jpg",
            thumbnail_dims: [
              136,
              102
            ]
          },
          {
            thumbnail_dims: [
              136,
              102
            ],
            thumbnail: "https://s2.vndb.org/st/41/36941.jpg"
          },
          {
            thumbnail_dims: [
              136,
              102
            ],
            thumbnail: "https://s2.vndb.org/st/42/36942.jpg"
          }
        ],
        alttitle: "夜明け前より瑠璃色な -Moonlight Cradle-",
        platforms: [
          "win"
        ],
        description: "Called the last part of the Yoake Mae yori Ruri Iro na story; -Moonlight Cradle- follows the ending of the expanded storyline of the PS2 version Yoake Mae yori Ruri Iro na -Brighter than dawning blue-.\n\nIt tells of a new story involving all the heroines from the original as well as Estel Freesia and Tooyama Midori who made their first appearance on the PS2 version. Also included is a brand new heroine Cynthia Marguerite.",
        rating: 72.5,
        title: "Yoake Mae yori Ruri Iro na -Moonlight Cradle-",
        olang: "ja",
        devstatus: 0,
        tags: [
          {
            rating: 2.6,
            spoiler: 0,
            id: "g32",
            lie: false
          },
          {
            id: "g23",
            lie: false,
            rating: 2.2,
            spoiler: 0
          },
          {
            lie: false,
            id: "g194",
            spoiler: 0,
            rating: 2
          },
          {
            lie: false,
            id: "g96",
            rating: 2.4,
            spoiler: 0
          },
          {
            id: "g465",
            lie: false,
            rating: 2.25,
            spoiler: 0
          },
          {
            rating: 2.5,
            spoiler: 0,
            id: "g606",
            lie: false
          },
          {
            spoiler: 0,
            rating: 2,
            lie: false,
            id: "g2159"
          },
          {
            lie: false,
            id: "g95",
            rating: 2,
            spoiler: 0
          },
          {
            lie: false,
            id: "g201",
            spoiler: 0,
            rating: 2.25
          },
          {
            lie: false,
            id: "g107",
            spoiler: 0,
            rating: 2
          },
          {
            spoiler: 0,
            rating: 2.75,
            lie: false,
            id: "g140"
          },
          {
            spoiler: 0,
            rating: 2.25,
            lie: false,
            id: "g420"
          },
          {
            lie: false,
            id: "g743",
            spoiler: 0,
            rating: 2.5
          },
          {
            id: "g415",
            lie: false,
            rating: 2,
            spoiler: 0
          },
          {
            spoiler: 0,
            rating: 2,
            id: "g414",
            lie: false
          },
          {
            rating: 1.5,
            spoiler: 0,
            id: "g100",
            lie: false
          },
          {
            rating: 2.6666667,
            spoiler: 0,
            id: "g1483",
            lie: false
          },
          {
            spoiler: 0,
            rating: 2,
            id: "g737",
            lie: false
          },
          {
            lie: false,
            id: "g3171",
            spoiler: 0,
            rating: 2
          },
          {
            lie: false,
            id: "g53",
            spoiler: 0,
            rating: 2
          },
          {
            spoiler: 0,
            rating: 2.8,
            id: "g148",
            lie: false
          },
          {
            spoiler: 0,
            rating: 2,
            lie: false,
            id: "g3159"
          },
          {
            id: "g1478",
            lie: false,
            spoiler: 0,
            rating: 2
          },
          {
            rating: 2,
            spoiler: 0,
            id: "g1234",
            lie: false
          },
          {
            lie: false,
            id: "g461",
            spoiler: 0,
            rating: 2
          },
          {
            id: "g105",
            lie: false,
            rating: 2.4,
            spoiler: 0
          },
          {
            spoiler: 0,
            rating: 2,
            id: "g228",
            lie: false
          },
          {
            lie: false,
            id: "g517",
            spoiler: 0,
            rating: 2
          },
          {
            spoiler: 0,
            rating: 2.5,
            lie: false,
            id: "g528"
          },
          {
            spoiler: 0,
            rating: 2,
            lie: false,
            id: "g2033"
          },
          {
            id: "g728",
            lie: false,
            spoiler: 0,
            rating: 1
          },
          {
            rating: 2,
            spoiler: 0,
            id: "g416",
            lie: false
          },
          {
            lie: false,
            id: "g294",
            spoiler: 0,
            rating: 2.25
          },
          {
            id: "g459",
            lie: false,
            spoiler: 0,
            rating: 2
          },
          {
            spoiler: 0,
            rating: 2,
            id: "g149",
            lie: false
          },
          {
            spoiler: 0,
            rating: 2,
            lie: false,
            id: "g193"
          },
          {
            id: "g154",
            lie: false,
            rating: 2.2,
            spoiler: 0
          },
          {
            id: "g454",
            lie: false,
            spoiler: 0,
            rating: 2
          },
          {
            id: "g509",
            lie: false,
            spoiler: 0,
            rating: 2
          },
          {
            rating: 2.25,
            spoiler: 0,
            id: "g112",
            lie: false
          },
          {
            spoiler: 0,
            rating: 1.25,
            lie: false,
            id: "g147"
          },
          {
            lie: false,
            id: "g104",
            spoiler: 0,
            rating: 2
          },
          {
            spoiler: 0,
            rating: 2.4,
            id: "g133",
            lie: false
          },
          {
            spoiler: 0,
            rating: 2,
            id: "g1251",
            lie: false
          },
          {
            spoiler: 0,
            rating: 2,
            lie: false,
            id: "g3415"
          },
          {
            id: "g3203",
            lie: false,
            spoiler: 0,
            rating: 2
          }
        ],
        image: {
          violence: 0,
          id: "cv27895",
          sexual: 0,
          dims: [
            256,
            348
          ],
          votecount: 13,
          url: "https://s2.vndb.org/cv/95/27895.jpg"
        },
        length_minutes: 1642,
        length_votes: 2
      },
      id: "v1398",
      vote: null
    },
    {
      lastmod: 1648558453,
      started: null,
      vote: 100,
      id: "v1474",
      voted: 1642133980,
      vn: {
        olang: "ja",
        title: "Hoshizora no Memoria -Wish Upon a Shooting Star-",
        description: "After their mother passes away, Kogasaka You and his younger sister, Chinami, pack up and move out of the city back to their hometown of Hibarigasaki to live with their aunt Shino. Before making the move to the city, You spent almost every single day after school playing with a girl up at the town observation lookout; she was You's first true friend. And when she learns of You’s upcoming relocation to the city she becomes very upset…so much so that she makes him promise to her that one day he must return to Hibarigasaki to marry her. And with a final departure she kisses You on the forehead.\n\nYears later, upon returning to Hibarigasaki, You comes across a now abandoned, fenced-off observatory lookout. It is at this lookout where he encounters a mysterious scythe-wielding girl named Mare who looks strangely like his childhood friend from years past. But as You's life back in his hometown progresses, he is able to make new friends both in the astronomy club at school and while working at a local restaurant, all while still attempting to seek out his childhood friend. Intrigued, he continues to visit with this mysterious girl at the lookout, but who is she really, and will he ever be able to find his childhood friend and make good on his promise?",
        rating: 77.8,
        votecount: 5110,
        popularity: 37.59,
        length: 4,
        titles: [
          {
            lang: "en",
            title: "Hoshizora no Memoria -Wish upon a Shooting Star-",
            main: false,
            official: true,
            latin: null
          },
          {
            official: true,
            latin: "Hoshizora no Memoria -Wish Upon a Shooting Star-",
            lang: "ja",
            main: true,
            title: "星空のメモリア-Wish upon a shooting star-"
          },
          {
            latin: "Byeolhaneurui Memoria -Wish upon a shooting star-",
            official: false,
            title: "별하늘의 메모리아 -Wish upon a shooting star-",
            main: false,
            lang: "ko"
          },
          {
            official: true,
            latin: "Xingkong de Jiyi -Wish upon a shooting star",
            lang: "zh-Hans",
            title: "星空的记忆 -Wish upon a shooting star",
            main: false
          }
        ],
        platforms: [
          "win"
        ],
        alttitle: "星空のメモリア-Wish upon a shooting star-",
        released: "2009-03-27",
        aliases: [
          "Hoshimemo, Memoria of a Starry Sky"
        ],
        languages: [
          "en",
          "es",
          "ja",
          "ko",
          "zh-Hans"
        ],
        screenshots: [
          {
            thumbnail: "https://s2.vndb.org/st/34/1334.jpg",
            thumbnail_dims: [
              136,
              102
            ]
          },
          {
            thumbnail: "https://s2.vndb.org/st/35/1335.jpg",
            thumbnail_dims: [
              136,
              102
            ]
          },
          {
            thumbnail_dims: [
              136,
              102
            ],
            thumbnail: "https://s2.vndb.org/st/36/1336.jpg"
          },
          {
            thumbnail: "https://s2.vndb.org/st/37/1337.jpg",
            thumbnail_dims: [
              136,
              102
            ]
          },
          {
            thumbnail: "https://s2.vndb.org/st/39/1339.jpg",
            thumbnail_dims: [
              136,
              102
            ]
          },
          {
            thumbnail: "https://s2.vndb.org/st/24/12224.jpg",
            thumbnail_dims: [
              136,
              102
            ]
          },
          {
            thumbnail: "https://s2.vndb.org/st/25/12225.jpg",
            thumbnail_dims: [
              136,
              102
            ]
          },
          {
            thumbnail: "https://s2.vndb.org/st/63/117663.jpg",
            thumbnail_dims: [
              136,
              102
            ]
          },
          {
            thumbnail_dims: [
              136,
              102
            ],
            thumbnail: "https://s2.vndb.org/st/64/117664.jpg"
          },
          {
            thumbnail: "https://s2.vndb.org/st/59/133259.jpg",
            thumbnail_dims: [
              136,
              77
            ]
          }
        ],
        length_votes: 35,
        tags: [
          {
            id: "g2",
            lie: false,
            spoiler: 0,
            rating: 2.1111112
          },
          {
            rating: 2.878788,
            spoiler: 0,
            id: "g32",
            lie: false
          },
          {
            lie: false,
            id: "g133",
            spoiler: 0,
            rating: 2.88
          },
          {
            spoiler: 2,
            rating: 1.8846154,
            id: "g181",
            lie: false
          },
          {
            id: "g100",
            lie: false,
            spoiler: 0,
            rating: 2.6666667
          },
          {
            id: "g2686",
            lie: false,
            spoiler: 0,
            rating: 1
          },
          {
            lie: false,
            id: "g459",
            spoiler: 0,
            rating: 2.7142856
          },
          {
            id: "g494",
            lie: false,
            spoiler: 1,
            rating: 0.15789473
          },
          {
            spoiler: 0,
            rating: 1.3571428,
            lie: false,
            id: "g1378"
          },
          {
            spoiler: 1,
            rating: 2.7586207,
            lie: false,
            id: "g1196"
          },
          {
            spoiler: 0,
            rating: 1.9565217,
            id: "g603",
            lie: false
          },
          {
            lie: false,
            id: "g710",
            rating: 1.85,
            spoiler: 0
          },
          {
            lie: false,
            id: "g3251",
            rating: 1,
            spoiler: 0
          },
          {
            id: "g1184",
            lie: false,
            spoiler: 0,
            rating: 2.9565217
          },
          {
            spoiler: 0,
            rating: 2,
            lie: false,
            id: "g3415"
          },
          {
            spoiler: 0,
            rating: 1.2,
            id: "g735",
            lie: false
          },
          {
            lie: false,
            id: "g236",
            spoiler: 0,
            rating: 2.2272727
          },
          {
            rating: 2.5172415,
            spoiler: 0,
            id: "g148",
            lie: false
          },
          {
            id: "g196",
            lie: false,
            spoiler: 2,
            rating: 2.6296296
          },
          {
            spoiler: 2,
            rating: 2.586207,
            lie: false,
            id: "g168"
          },
          {
            rating: 2.7083333,
            spoiler: 1,
            lie: false,
            id: "g201"
          },
          {
            lie: false,
            id: "g1190",
            spoiler: 0,
            rating: 1
          },
          {
            lie: false,
            id: "g3003",
            spoiler: 0,
            rating: 2
          },
          {
            spoiler: 0,
            rating: 2.3181818,
            id: "g454",
            lie: false
          },
          {
            id: "g1335",
            lie: false,
            rating: 1.6363636,
            spoiler: 2
          },
          {
            id: "g733",
            lie: false,
            spoiler: 0,
            rating: 2.6
          },
          {
            id: "g2138",
            lie: false,
            rating: 1.5,
            spoiler: 0
          },
          {
            lie: false,
            id: "g1181",
            rating: 2.7142856,
            spoiler: 1
          },
          {
            id: "g1715",
            lie: false,
            spoiler: 0,
            rating: 1.6666666
          },
          {
            spoiler: 0,
            rating: 2.3636363,
            id: "g2033",
            lie: false
          },
          {
            lie: false,
            id: "g1366",
            spoiler: 2,
            rating: 2.9230769
          },
          {
            rating: 2.6956522,
            spoiler: 0,
            lie: false,
            id: "g48"
          },
          {
            rating: 1.5,
            spoiler: 1,
            lie: false,
            id: "g337"
          },
          {
            spoiler: 0,
            rating: 2.451613,
            id: "g195",
            lie: false
          },
          {
            id: "g92",
            lie: false,
            spoiler: 1,
            rating: 2.2083333
          },
          {
            spoiler: 0,
            rating: 2.3461537,
            lie: false,
            id: "g676"
          },
          {
            lie: false,
            id: "g894",
            rating: 1.9333333,
            spoiler: 0
          },
          {
            spoiler: 1,
            rating: 2.6153846,
            lie: false,
            id: "g1309"
          },
          {
            rating: 2.939394,
            spoiler: 0,
            lie: false,
            id: "g1035"
          },
          {
            spoiler: 0,
            rating: 1,
            id: "g3176",
            lie: false
          },
          {
            rating: 2.7,
            spoiler: 0,
            lie: false,
            id: "g1431"
          },
          {
            lie: false,
            id: "g979",
            spoiler: 1,
            rating: 1.0833334
          },
          {
            id: "g2957",
            lie: false,
            rating: 1,
            spoiler: 0
          },
          {
            lie: false,
            id: "g3584",
            spoiler: 0,
            rating: 1
          },
          {
            id: "g193",
            lie: false,
            rating: 1.8636364,
            spoiler: 0
          },
          {
            id: "g151",
            lie: false,
            spoiler: 0,
            rating: 2.7096775
          },
          {
            rating: 2.4285715,
            spoiler: 0,
            lie: false,
            id: "g343"
          },
          {
            id: "g222",
            lie: false,
            spoiler: 0,
            rating: 2.5789473
          },
          {
            id: "g1733",
            lie: false,
            rating: 2.2941177,
            spoiler: 0
          },
          {
            lie: false,
            id: "g2252",
            spoiler: 0,
            rating: 2
          },
          {
            lie: false,
            id: "g1595",
            spoiler: 0,
            rating: 1.5
          },
          {
            id: "g553",
            lie: false,
            spoiler: 0,
            rating: 2.2916667
          },
          {
            lie: false,
            id: "g3204",
            rating: 2,
            spoiler: 0
          },
          {
            spoiler: 0,
            rating: 2.6363637,
            id: "g728",
            lie: false
          },
          {
            spoiler: 0,
            rating: 1.8888888,
            id: "g692",
            lie: false
          },
          {
            lie: false,
            id: "g1234",
            spoiler: 0,
            rating: 2.5833333
          },
          {
            spoiler: 0,
            rating: 1.5,
            id: "g2331",
            lie: false
          },
          {
            spoiler: 0,
            rating: 2,
            lie: false,
            id: "g1646"
          },
          {
            id: "g69",
            lie: false,
            spoiler: 1,
            rating: 1.0909091
          },
          {
            spoiler: 0,
            rating: 1.5185186,
            id: "g47",
            lie: false
          },
          {
            id: "g110",
            lie: false,
            spoiler: 0,
            rating: 1.3529412
          },
          {
            spoiler: 0,
            rating: 1.9473684,
            lie: false,
            id: "g1297"
          },
          {
            rating: 2.8181818,
            spoiler: 0,
            id: "g534",
            lie: false
          },
          {
            rating: 2,
            spoiler: 0,
            id: "g461",
            lie: false
          },
          {
            id: "g418",
            lie: false,
            rating: 2.7692308,
            spoiler: 0
          },
          {
            lie: false,
            id: "g3147",
            spoiler: 0,
            rating: 2
          },
          {
            rating: 2.4166667,
            spoiler: 2,
            lie: false,
            id: "g873"
          },
          {
            spoiler: 0,
            rating: 3,
            id: "g3171",
            lie: false
          },
          {
            lie: false,
            id: "g115",
            spoiler: 0,
            rating: 2.2222223
          },
          {
            lie: false,
            id: "g89",
            rating: 1.8611112,
            spoiler: 1
          },
          {
            spoiler: 0,
            rating: 2.047619,
            id: "g215",
            lie: false
          },
          {
            id: "g319",
            lie: false,
            spoiler: 0,
            rating: 2.6666667
          },
          {
            rating: 2.1153846,
            spoiler: 1,
            lie: false,
            id: "g152"
          },
          {
            rating: 2.6,
            spoiler: 0,
            lie: false,
            id: "g96"
          },
          {
            spoiler: 1,
            rating: 1.7619047,
            lie: false,
            id: "g111"
          },
          {
            id: "g681",
            lie: false,
            spoiler: 0,
            rating: 2.4814816
          },
          {
            lie: false,
            id: "g3172",
            spoiler: 0,
            rating: 3
          },
          {
            spoiler: 0,
            rating: 2.5428572,
            lie: false,
            id: "g904"
          },
          {
            spoiler: 0,
            rating: 2.1111112,
            id: "g878",
            lie: false
          },
          {
            spoiler: 0,
            rating: 1.5,
            id: "g2390",
            lie: false
          },
          {
            lie: false,
            id: "g1138",
            rating: 1.6538461,
            spoiler: 1
          },
          {
            lie: false,
            id: "g602",
            spoiler: 0,
            rating: 2.1785715
          },
          {
            id: "g1269",
            lie: false,
            rating: 2.3913043,
            spoiler: 0
          },
          {
            spoiler: 0,
            rating: 2,
            lie: false,
            id: "g3138"
          },
          {
            id: "g633",
            lie: false,
            spoiler: 0,
            rating: 2.2727273
          },
          {
            spoiler: 0,
            rating: 1.9565217,
            lie: false,
            id: "g565"
          },
          {
            spoiler: 0,
            rating: 2,
            id: "g1580",
            lie: false
          },
          {
            spoiler: 2,
            rating: 2.2666667,
            id: "g837",
            lie: false
          },
          {
            id: "g2407",
            lie: false,
            rating: 1.75,
            spoiler: 0
          },
          {
            rating: 0.35714287,
            spoiler: 0,
            lie: false,
            id: "g961"
          },
          {
            lie: false,
            id: "g336",
            spoiler: 2,
            rating: 1.625
          },
          {
            id: "g182",
            lie: false,
            spoiler: 0,
            rating: 1.6551725
          },
          {
            id: "g194",
            lie: false,
            spoiler: 0,
            rating: 2
          },
          {
            id: "g2005",
            lie: false,
            spoiler: 0,
            rating: 2.4444444
          },
          {
            lie: false,
            id: "g1393",
            rating: 2.15,
            spoiler: 0
          },
          {
            lie: false,
            id: "g872",
            spoiler: 0,
            rating: 2.5
          },
          {
            id: "g1211",
            lie: false,
            spoiler: 0,
            rating: 1.826087
          },
          {
            lie: false,
            id: "g3121",
            spoiler: 1,
            rating: 2
          },
          {
            spoiler: 0,
            rating: 2.7142856,
            id: "g1434",
            lie: false
          },
          {
            rating: 2,
            spoiler: 0,
            lie: false,
            id: "g3159"
          },
          {
            rating: 2.590909,
            spoiler: 0,
            lie: false,
            id: "g373"
          },
          {
            spoiler: 0,
            rating: 2.837838,
            id: "g756",
            lie: false
          },
          {
            spoiler: 0,
            rating: 2.5714285,
            lie: false,
            id: "g578"
          },
          {
            id: "g2159",
            lie: false,
            spoiler: 0,
            rating: 2
          },
          {
            lie: false,
            id: "g3203",
            spoiler: 0,
            rating: 2.5
          },
          {
            rating: 1,
            spoiler: 0,
            id: "g208",
            lie: false
          },
          {
            id: "g190",
            lie: false,
            spoiler: 0,
            rating: 2.48
          },
          {
            spoiler: 0,
            rating: 2.5,
            id: "g107",
            lie: false
          },
          {
            lie: false,
            id: "g154",
            spoiler: 0,
            rating: 2.5217392
          },
          {
            id: "g300",
            lie: false,
            rating: 2.7692308,
            spoiler: 0
          },
          {
            id: "g149",
            lie: false,
            rating: 2.1351352,
            spoiler: 0
          },
          {
            lie: false,
            id: "g99",
            rating: 1.6,
            spoiler: 1
          },
          {
            lie: false,
            id: "g185",
            spoiler: 2,
            rating: 1.0416666
          },
          {
            spoiler: 2,
            rating: 2.5652175,
            lie: false,
            id: "g269"
          },
          {
            id: "g1816",
            lie: false,
            spoiler: 0,
            rating: 2.7272727
          },
          {
            spoiler: 0,
            rating: 1.68,
            lie: false,
            id: "g517"
          },
          {
            spoiler: 2,
            rating: 1,
            id: "g249",
            lie: false
          },
          {
            spoiler: 0,
            rating: 1.5,
            lie: false,
            id: "g1463"
          },
          {
            lie: false,
            id: "g508",
            spoiler: 0,
            rating: 2.9615386
          },
          {
            lie: false,
            id: "g554",
            spoiler: 1,
            rating: 2.1875
          },
          {
            spoiler: 0,
            rating: 2,
            lie: false,
            id: "g3108"
          },
          {
            rating: 3,
            spoiler: 0,
            lie: false,
            id: "g3212"
          },
          {
            lie: false,
            id: "g546",
            spoiler: 0,
            rating: 2.413793
          },
          {
            lie: false,
            id: "g580",
            spoiler: 0,
            rating: 1
          },
          {
            spoiler: 0,
            rating: 1,
            id: "g1445",
            lie: false
          },
          {
            spoiler: 0,
            rating: 2.142857,
            lie: false,
            id: "g596"
          }
        ],
        devstatus: 0,
        length_minutes: 3536,
        image: {
          votecount: 12,
          url: "https://s2.vndb.org/cv/13/32613.jpg",
          violence: 0,
          id: "cv32613",
          sexual: 0,
          dims: [
            256,
            348
          ]
        }
      },
      finished: null,
      added: 1635459006,
      notes: "what the fuck yumes route HURT"
    },
    {
      started: null,
      lastmod: 1638679365,
      id: "v1647",
      voted: null,
      vn: {
        length: 2,
        titles: [
          {
            lang: "ja",
            title: "少女剣士秋月蓮の押しかけ孕嫁生活～子作りは我が使命…受精するまで離さぬぞ！～",
            main: true,
            latin: "Shoujo Kenshi Akizuki Ren no Oshikake Harayome Seikatsu ~Kozukuri wa Waga Shimei... Jusei Suru made Hanasanu zo!~",
            official: true
          }
        ],
        popularity: 0.17,
        votecount: 10,
        languages: [
          "ja"
        ],
        screenshots: [
          {
            thumbnail_dims: [
              136,
              102
            ],
            thumbnail: "https://s2.vndb.org/st/05/61205.jpg"
          },
          {
            thumbnail_dims: [
              136,
              102
            ],
            thumbnail: "https://s2.vndb.org/st/06/61206.jpg"
          },
          {
            thumbnail_dims: [
              136,
              102
            ],
            thumbnail: "https://s2.vndb.org/st/08/61208.jpg"
          },
          {
            thumbnail_dims: [
              136,
              102
            ],
            thumbnail: "https://s2.vndb.org/st/09/61209.jpg"
          },
          {
            thumbnail: "https://s2.vndb.org/st/11/61211.jpg",
            thumbnail_dims: [
              136,
              102
            ]
          },
          {
            thumbnail_dims: [
              136,
              102
            ],
            thumbnail: "https://s2.vndb.org/st/13/61213.jpg"
          },
          {
            thumbnail_dims: [
              136,
              102
            ],
            thumbnail: "https://s2.vndb.org/st/14/61214.jpg"
          },
          {
            thumbnail_dims: [
              136,
              102
            ],
            thumbnail: "https://s2.vndb.org/st/15/61215.jpg"
          }
        ],
        released: "2009-05-01",
        aliases: [
          "Ren, the girl blade's impregnation life"
        ],
        alttitle: "少女剣士秋月蓮の押しかけ孕嫁生活～子作りは我が使命…受精するまで離さぬぞ！～",
        platforms: [
          "win",
          "dvd"
        ],
        rating: 62.8,
        description: "Masaaki is an expert in swordplay, but he is disliked by girls because of his pervert behavior. One day, he takes part in a swordplay competition. His opponent is Ren, a cool and beautiful girl, and he somehow beats her. This is the first time for Ren to lose and tells him she will marry Masaaki to give birth to offspring with Masaaki's strong gene. Masaaki's father soon accepts it and Masaaki and Ren start living together...\n\n[From ErogeShop]",
        title: "Shoujo Kenshi Akizuki Ren no Oshikake Harayome Seikatsu ~Kozukuri wa Waga Shimei... Jusei Suru made Hanasanu zo!~",
        olang: "ja",
        devstatus: 0,
        tags: [
          {
            spoiler: 0,
            rating: 2,
            id: "g1581",
            lie: false
          },
          {
            lie: false,
            id: "g677",
            rating: 2,
            spoiler: 0
          },
          {
            rating: 2,
            spoiler: 0,
            lie: false,
            id: "g1370"
          },
          {
            lie: false,
            id: "g268",
            spoiler: 0,
            rating: 3
          },
          {
            lie: false,
            id: "g133",
            spoiler: 0,
            rating: 3
          },
          {
            spoiler: 0,
            rating: 2,
            lie: false,
            id: "g570"
          },
          {
            id: "g1138",
            lie: false,
            spoiler: 0,
            rating: 2
          },
          {
            rating: 2,
            spoiler: 0,
            lie: false,
            id: "g894"
          },
          {
            spoiler: 0,
            rating: 2,
            id: "g733",
            lie: false
          },
          {
            spoiler: 0,
            rating: 2,
            id: "g1297",
            lie: false
          },
          {
            lie: false,
            id: "g214",
            rating: 3,
            spoiler: 0
          },
          {
            spoiler: 0,
            rating: 3,
            lie: false,
            id: "g47"
          },
          {
            spoiler: 0,
            rating: 2,
            lie: false,
            id: "g1079"
          },
          {
            id: "g1117",
            lie: false,
            spoiler: 0,
            rating: 1
          },
          {
            spoiler: 0,
            rating: 2,
            lie: false,
            id: "g3172"
          },
          {
            spoiler: 0,
            rating: 3,
            id: "g96",
            lie: false
          },
          {
            spoiler: 0,
            rating: 2,
            lie: false,
            id: "g756"
          },
          {
            id: "g373",
            lie: false,
            spoiler: 0,
            rating: 2
          },
          {
            lie: false,
            id: "g1190",
            rating: 2,
            spoiler: 0
          },
          {
            lie: false,
            id: "g32",
            spoiler: 0,
            rating: 2
          }
        ],
        image: {
          url: "https://s2.vndb.org/cv/06/2006.jpg",
          votecount: 13,
          dims: [
            256,
            368
          ],
          sexual: 2,
          violence: 0,
          id: "cv2006"
        },
        length_minutes: null,
        length_votes: 0
      },
      finished: null,
      added: 1638679363,
      notes: null,
      vote: null
    },
    {
      added: 1666194248,
      finished: null,
      notes: "such an old vn I wanted to play back then",
      id: "v1660",
      vn: {
        olang: "ja",
        title: "Shinigami no Kiss wa Wakare no Aji",
        description: "\"Is there something you want to leave behind for your loved one?\"\n\nA young boy and girl lived in a small seaside town. One day, the boy invited the girl to the sea to convey his feelings to her. However, she lost her life in an unforeseen accident. Months and years later, the boy continues to live in the place where his memories with her remain. He can't forget her, yet he must.\n\nOur protagonist, Amamiya Makoto, spends a peaceful everyday life with his younger sister, Shizuku. One day, he meets a mysterious girl, Kohaku, who has deep blue eyes and carries a giant scythe. \"Can you see me?\" she asks. None of the people around him notice her. \"Oh. You'll die very soon, then.\" \n\nShe is a shinigami.\n\n[Summarized from [url=http://www.h-comb.biz/product/02/index.html]Official Site[/url]]",
        rating: 68.8,
        platforms: [
          "win"
        ],
        alttitle: "死神の接吻は別離の味",
        aliases: [
          "Reaper's Kiss is the Taste of Parting, Shinikiss",
          "しにがみのきすはわかれのあじ"
        ],
        released: "2009-04-24",
        screenshots: [
          {
            thumbnail_dims: [
              136,
              102
            ],
            thumbnail: "https://s2.vndb.org/st/17/1917.jpg"
          },
          {
            thumbnail_dims: [
              136,
              102
            ],
            thumbnail: "https://s2.vndb.org/st/19/1919.jpg"
          },
          {
            thumbnail_dims: [
              136,
              102
            ],
            thumbnail: "https://s2.vndb.org/st/20/1920.jpg"
          },
          {
            thumbnail_dims: [
              136,
              102
            ],
            thumbnail: "https://s2.vndb.org/st/21/1921.jpg"
          },
          {
            thumbnail: "https://s2.vndb.org/st/22/1922.jpg",
            thumbnail_dims: [
              136,
              102
            ]
          },
          {
            thumbnail_dims: [
              136,
              102
            ],
            thumbnail: "https://s2.vndb.org/st/57/51457.jpg"
          },
          {
            thumbnail: "https://s2.vndb.org/st/58/51458.jpg",
            thumbnail_dims: [
              136,
              102
            ]
          },
          {
            thumbnail: "https://s2.vndb.org/st/59/51459.jpg",
            thumbnail_dims: [
              136,
              102
            ]
          },
          {
            thumbnail_dims: [
              136,
              102
            ],
            thumbnail: "https://s2.vndb.org/st/61/60161.jpg"
          },
          {
            thumbnail: "https://s2.vndb.org/st/82/94082.jpg",
            thumbnail_dims: [
              136,
              102
            ]
          }
        ],
        languages: [
          "en",
          "ja",
          "zh-Hans"
        ],
        votecount: 1474,
        popularity: 10.79,
        length: 3,
        titles: [
          {
            latin: null,
            official: false,
            lang: "en",
            main: false,
            title: "Shinigami no Kiss wa Wakare no Aji ~ A Reaper's Kiss Tastes Like Farewell"
          },
          {
            latin: "Shinigami no Kiss wa Wakare no Aji",
            official: true,
            title: "死神の接吻は別離の味",
            main: true,
            lang: "ja"
          },
          {
            lang: "zh-Hans",
            title: "死神之吻乃离别之味",
            main: false,
            latin: "Sishen zhi Wen nai Libie zhi Wei",
            official: false
          }
        ],
        length_votes: 10,
        length_minutes: 900,
        image: {
          id: "cv32621",
          violence: 0,
          dims: [
            256,
            360
          ],
          sexual: 1,
          votecount: 14,
          url: "https://s2.vndb.org/cv/21/32621.jpg"
        },
        tags: [
          {
            spoiler: 0,
            rating: 2.8333333,
            lie: false,
            id: "g32"
          },
          {
            spoiler: 0,
            rating: 2.5,
            lie: false,
            id: "g133"
          },
          {
            spoiler: 0,
            rating: 1.5,
            lie: false,
            id: "g1229"
          },
          {
            id: "g156",
            lie: false,
            spoiler: 0,
            rating: 0.6363636
          },
          {
            spoiler: 0,
            rating: 2.25,
            lie: false,
            id: "g107"
          },
          {
            spoiler: 0,
            rating: 2.25,
            id: "g596",
            lie: false
          },
          {
            lie: false,
            id: "g676",
            spoiler: 0,
            rating: 2.1818182
          },
          {
            spoiler: 0,
            rating: 1.9,
            lie: false,
            id: "g627"
          },
          {
            id: "g565",
            lie: false,
            spoiler: 0,
            rating: 2.25
          },
          {
            spoiler: 0,
            rating: 2.5,
            lie: false,
            id: "g3203"
          },
          {
            lie: false,
            id: "g756",
            rating: 2.6923077,
            spoiler: 0
          },
          {
            spoiler: 0,
            rating: 2.5,
            lie: false,
            id: "g3172"
          },
          {
            spoiler: 0,
            rating: 0.11111111,
            id: "g505",
            lie: false
          },
          {
            spoiler: 0,
            rating: 2.8333333,
            id: "g554",
            lie: false
          },
          {
            lie: false,
            id: "g733",
            rating: 2.125,
            spoiler: 0
          },
          {
            id: "g228",
            lie: false,
            spoiler: 0,
            rating: 2.625
          },
          {
            id: "g278",
            lie: false,
            rating: 2.0833333,
            spoiler: 0
          },
          {
            spoiler: 0,
            rating: 1.7333333,
            lie: false,
            id: "g110"
          },
          {
            lie: false,
            id: "g872",
            rating: 2.3,
            spoiler: 0
          },
          {
            lie: false,
            id: "g1335",
            spoiler: 0,
            rating: 2.7777777
          },
          {
            spoiler: 0,
            rating: 2.4444444,
            id: "g461",
            lie: false
          },
          {
            id: "g1297",
            lie: false,
            rating: 2.125,
            spoiler: 0
          },
          {
            spoiler: 0,
            rating: 1.2857143,
            id: "g1377",
            lie: false
          },
          {
            lie: false,
            id: "g633",
            rating: 2.125,
            spoiler: 0
          },
          {
            id: "g602",
            lie: false,
            spoiler: 0,
            rating: 2.25
          },
          {
            spoiler: 0,
            rating: 0.8333333,
            lie: false,
            id: "g1059"
          },
          {
            lie: false,
            id: "g194",
            spoiler: 0,
            rating: 2
          },
          {
            lie: false,
            id: "g89",
            rating: 1.1666666,
            spoiler: 1
          },
          {
            spoiler: 0,
            rating: 2.2,
            lie: false,
            id: "g195"
          },
          {
            spoiler: 0,
            rating: 2.4666667,
            lie: false,
            id: "g154"
          },
          {
            spoiler: 0,
            rating: 2.3333333,
            id: "g148",
            lie: false
          },
          {
            id: "g3171",
            lie: false,
            spoiler: 0,
            rating: 2
          },
          {
            spoiler: 1,
            rating: 2.142857,
            id: "g1195",
            lie: false
          },
          {
            spoiler: 2,
            rating: 3,
            id: "g1265",
            lie: false
          },
          {
            spoiler: 0,
            rating: 2.4285715,
            id: "g1196",
            lie: false
          },
          {
            lie: false,
            id: "g373",
            spoiler: 0,
            rating: 2.6363637
          },
          {
            rating: 2.7272727,
            spoiler: 0,
            lie: false,
            id: "g96"
          },
          {
            rating: 1.3571428,
            spoiler: 1,
            id: "g292",
            lie: false
          },
          {
            spoiler: 0,
            rating: 2.3529413,
            id: "g168",
            lie: false
          },
          {
            lie: false,
            id: "g728",
            spoiler: 0,
            rating: 1.875
          },
          {
            lie: false,
            id: "g607",
            spoiler: 0,
            rating: 2
          },
          {
            rating: 2,
            spoiler: 0,
            lie: false,
            id: "g606"
          },
          {
            lie: false,
            id: "g1437",
            rating: 3,
            spoiler: 0
          },
          {
            id: "g1349",
            lie: false,
            spoiler: 0,
            rating: 2.6
          },
          {
            spoiler: 0,
            rating: 1.5714285,
            lie: false,
            id: "g832"
          },
          {
            lie: false,
            id: "g976",
            spoiler: 0,
            rating: 0.6666667
          },
          {
            lie: false,
            id: "g95",
            spoiler: 0,
            rating: 2.25
          },
          {
            lie: false,
            id: "g201",
            spoiler: 2,
            rating: 2.5
          },
          {
            id: "g534",
            lie: false,
            spoiler: 0,
            rating: 2.75
          },
          {
            rating: 2.75,
            spoiler: 0,
            lie: false,
            id: "g420"
          },
          {
            lie: false,
            id: "g459",
            spoiler: 0,
            rating: 2.8
          },
          {
            lie: false,
            id: "g2033",
            spoiler: 0,
            rating: 2
          },
          {
            lie: false,
            id: "g180",
            spoiler: 0,
            rating: 1.4545455
          },
          {
            spoiler: 0,
            rating: 2,
            id: "g149",
            lie: false
          },
          {
            id: "g1366",
            lie: false,
            spoiler: 2,
            rating: 2.75
          },
          {
            lie: false,
            id: "g719",
            spoiler: 0,
            rating: 2.2857144
          },
          {
            lie: false,
            id: "g2390",
            spoiler: 0,
            rating: 2
          },
          {
            lie: false,
            id: "g220",
            spoiler: 0,
            rating: 1.75
          },
          {
            rating: 1.3333334,
            spoiler: 0,
            id: "g172",
            lie: false
          },
          {
            id: "g181",
            lie: false,
            rating: 2.357143,
            spoiler: 0
          },
          {
            rating: 2,
            spoiler: 0,
            lie: false,
            id: "g3159"
          },
          {
            spoiler: 0,
            rating: 2.7272727,
            lie: false,
            id: "g544"
          },
          {
            spoiler: 2,
            rating: 1,
            lie: false,
            id: "g980"
          },
          {
            id: "g1037",
            lie: false,
            spoiler: 0,
            rating: 1.5
          },
          {
            spoiler: 1,
            rating: 2,
            id: "g337",
            lie: false
          },
          {
            rating: 3,
            spoiler: 0,
            id: "g1646",
            lie: false
          },
          {
            lie: false,
            id: "g1078",
            spoiler: 0,
            rating: 1.2727273
          },
          {
            spoiler: 0,
            rating: 2,
            lie: false,
            id: "g2446"
          },
          {
            spoiler: 0,
            rating: 2,
            id: "g3147",
            lie: false
          }
        ],
        devstatus: 0
      },
      voted: null,
      vote: null,
      started: null,
      lastmod: 1666194258
    },
    {
      id: "v1896",
      voted: null,
      vn: {
        titles: [
          {
            latin: null,
            official: false,
            lang: "en",
            main: false,
            title: "Coμ -Black Dragon in a Gentle Kingdom-"
          },
          {
            official: true,
            latin: "Coμ - Kuroi Ryuu to Yasashii Oukoku -",
            main: true,
            title: "コミュ - 黒い竜と優しい王国 -",
            lang: "ja"
          }
        ],
        length: 4,
        votecount: 2044,
        popularity: 16.84,
        released: "2009-10-22",
        aliases: [
          "comyu",
          "Co:mu",
          "Komyu"
        ],
        languages: [
          "en",
          "ja"
        ],
        screenshots: [
          {
            thumbnail_dims: [
              136,
              102
            ],
            thumbnail: "https://s2.vndb.org/st/28/3828.jpg"
          },
          {
            thumbnail_dims: [
              136,
              102
            ],
            thumbnail: "https://s2.vndb.org/st/29/3829.jpg"
          },
          {
            thumbnail: "https://s2.vndb.org/st/30/3830.jpg",
            thumbnail_dims: [
              136,
              102
            ]
          },
          {
            thumbnail_dims: [
              136,
              102
            ],
            thumbnail: "https://s2.vndb.org/st/36/3836.jpg"
          },
          {
            thumbnail_dims: [
              136,
              102
            ],
            thumbnail: "https://s2.vndb.org/st/52/5452.jpg"
          },
          {
            thumbnail_dims: [
              136,
              102
            ],
            thumbnail: "https://s2.vndb.org/st/53/5453.jpg"
          },
          {
            thumbnail_dims: [
              136,
              102
            ],
            thumbnail: "https://s2.vndb.org/st/54/5454.jpg"
          },
          {
            thumbnail: "https://s2.vndb.org/st/46/5846.jpg",
            thumbnail_dims: [
              136,
              102
            ]
          },
          {
            thumbnail: "https://s2.vndb.org/st/85/93785.jpg",
            thumbnail_dims: [
              136,
              102
            ]
          },
          {
            thumbnail_dims: [
              136,
              102
            ],
            thumbnail: "https://s2.vndb.org/st/90/94490.jpg"
          }
        ],
        platforms: [
          "win"
        ],
        alttitle: "コミュ - 黒い竜と優しい王国 -",
        description: "\"We are a team. No, a community...\"\n\nLegends tell of a mysterious woman known only as \"Girl A\", who makes herself known to special individuals in a certain city and sings all throughout the night. One such night, Akihito meets four strangers as if guided by her beautiful voice...\n\nThere are no feelings of friendship nor any trust between the five individuals, yet they are able to control a huge monster -- a steel black dragon -- by combining their wills and cooperating with one another. Now, on the night they obtain this power, their extraordinary life begins...\n\nAkihito later learns that a terrible price comes with the use of this power: If the monster should be destroyed, their \"community\" shall disappear along with it...\n\nFive strangers brought together by destiny, they decide to enter the secret world of the \"Coμnet\" with the help of Kagome, a black witch...\n\n[Edited from ErogeShop]",
        rating: 74.2,
        olang: "ja",
        title: "Coμ - Kuroi Ryuu to Yasashii Oukoku -",
        devstatus: 0,
        tags: [
          {
            lie: false,
            id: "g32",
            spoiler: 0,
            rating: 2.5384614
          },
          {
            id: "g12",
            lie: false,
            spoiler: 0,
            rating: 2.875
          },
          {
            id: "g8",
            lie: false,
            spoiler: 0,
            rating: 1.6842105
          },
          {
            id: "g10",
            lie: false,
            spoiler: 0,
            rating: 2.3125
          },
          {
            lie: false,
            id: "g23",
            spoiler: 0,
            rating: 1.6875
          },
          {
            lie: false,
            id: "g189",
            spoiler: 1,
            rating: 2.1111112
          },
          {
            spoiler: 0,
            rating: 2.6,
            lie: false,
            id: "g148"
          },
          {
            spoiler: 0,
            rating: 2.5882354,
            lie: false,
            id: "g133"
          },
          {
            spoiler: 0,
            rating: 2.0526316,
            lie: false,
            id: "g96"
          },
          {
            id: "g578",
            lie: false,
            spoiler: 0,
            rating: 2.0625
          },
          {
            spoiler: 0,
            rating: 0.5263158,
            id: "g756",
            lie: false
          },
          {
            spoiler: 1,
            rating: 2.7142856,
            lie: false,
            id: "g1335"
          },
          {
            spoiler: 0,
            rating: 2.375,
            id: "g676",
            lie: false
          },
          {
            spoiler: 0,
            rating: 1.1666666,
            lie: false,
            id: "g735"
          },
          {
            spoiler: 2,
            rating: 2.2,
            lie: false,
            id: "g508"
          },
          {
            id: "g72",
            lie: false,
            spoiler: 0,
            rating: 1.1428572
          },
          {
            spoiler: 2,
            rating: 2.9,
            id: "g181",
            lie: false
          },
          {
            lie: false,
            id: "g321",
            spoiler: 0,
            rating: 2.2307692
          },
          {
            id: "g154",
            lie: false,
            spoiler: 0,
            rating: 2.1
          },
          {
            spoiler: 0,
            rating: 2,
            lie: false,
            id: "g208"
          },
          {
            id: "g1897",
            lie: false,
            spoiler: 0,
            rating: 2.909091
          },
          {
            spoiler: 0,
            rating: 0.875,
            id: "g1515",
            lie: false
          },
          {
            spoiler: 0,
            rating: 1.8235294,
            lie: false,
            id: "g564"
          },
          {
            lie: false,
            id: "g459",
            spoiler: 0,
            rating: 2.2
          },
          {
            spoiler: 0,
            rating: 2.25,
            id: "g2159",
            lie: false
          },
          {
            spoiler: 0,
            rating: 3,
            lie: false,
            id: "g561"
          },
          {
            id: "g107",
            lie: false,
            spoiler: 0,
            rating: 2.2631578
          },
          {
            lie: false,
            id: "g258",
            rating: 1.2666667,
            spoiler: 0
          },
          {
            lie: false,
            id: "g719",
            spoiler: 0,
            rating: 1.8
          },
          {
            lie: false,
            id: "g570",
            spoiler: 0,
            rating: 2.9473684
          },
          {
            rating: 2.5555556,
            spoiler: 0,
            id: "g544",
            lie: false
          },
          {
            id: "g792",
            lie: false,
            spoiler: 0,
            rating: 1.2857143
          },
          {
            rating: 1.1666666,
            spoiler: 0,
            id: "g1796",
            lie: false
          },
          {
            spoiler: 0,
            rating: 2.1538463,
            id: "g670",
            lie: false
          },
          {
            lie: false,
            id: "g165",
            spoiler: 1,
            rating: 1.3333334
          },
          {
            spoiler: 0,
            rating: 2.7222223,
            lie: false,
            id: "g80"
          },
          {
            rating: 2.7368422,
            spoiler: 0,
            lie: false,
            id: "g149"
          },
          {
            spoiler: 0,
            rating: 2.0833333,
            lie: false,
            id: "g191"
          },
          {
            id: "g322",
            lie: false,
            spoiler: 0,
            rating: 2.235294
          },
          {
            rating: 0.9375,
            spoiler: 0,
            lie: false,
            id: "g323"
          },
          {
            lie: false,
            id: "g168",
            spoiler: 0,
            rating: 2.9444444
          },
          {
            spoiler: 0,
            rating: 2.235294,
            id: "g420",
            lie: false
          },
          {
            id: "g2407",
            lie: false,
            spoiler: 0,
            rating: 2
          },
          {
            lie: false,
            id: "g1835",
            rating: 1.1,
            spoiler: 0
          },
          {
            id: "g502",
            lie: false,
            spoiler: 0,
            rating: 2.7894738
          },
          {
            lie: false,
            id: "g1275",
            spoiler: 0,
            rating: 2
          },
          {
            id: "g1555",
            lie: false,
            spoiler: 0,
            rating: 2.75
          },
          {
            spoiler: 0,
            rating: 0.375,
            id: "g916",
            lie: false
          },
          {
            lie: false,
            id: "g2030",
            spoiler: 0,
            rating: 1.5
          },
          {
            spoiler: 0,
            rating: 2,
            id: "g1667",
            lie: false
          },
          {
            id: "g672",
            lie: false,
            spoiler: 0,
            rating: 1.9473684
          },
          {
            spoiler: 2,
            rating: 2.8181818,
            id: "g1097",
            lie: false
          },
          {
            id: "g903",
            lie: false,
            rating: 2,
            spoiler: 0
          },
          {
            spoiler: 0,
            rating: 2.3125,
            id: "g445",
            lie: false
          },
          {
            spoiler: 0,
            rating: 1.5882353,
            lie: false,
            id: "g195"
          },
          {
            lie: false,
            id: "g156",
            spoiler: 0,
            rating: 1.2666667
          },
          {
            lie: false,
            id: "g188",
            spoiler: 0,
            rating: 2.1764705
          },
          {
            spoiler: 2,
            rating: 2.1666667,
            lie: false,
            id: "g237"
          },
          {
            id: "g325",
            lie: false,
            spoiler: 0,
            rating: 1.4736842
          },
          {
            spoiler: 0,
            rating: 0.9285714,
            lie: false,
            id: "g82"
          },
          {
            spoiler: 0,
            rating: 1,
            lie: false,
            id: "g243"
          },
          {
            spoiler: 0,
            rating: 1.75,
            lie: false,
            id: "g1446"
          },
          {
            lie: false,
            id: "g1393",
            spoiler: 0,
            rating: 1.4
          },
          {
            spoiler: 0,
            rating: 2,
            id: "g3251",
            lie: false
          },
          {
            id: "g3415",
            lie: false,
            spoiler: 0,
            rating: 2
          },
          {
            rating: 2,
            spoiler: 0,
            lie: false,
            id: "g2253"
          },
          {
            spoiler: 0,
            rating: 0.33333334,
            lie: false,
            id: "g2101"
          },
          {
            lie: false,
            id: "g553",
            spoiler: 0,
            rating: 2.5714285
          },
          {
            spoiler: 0,
            rating: 3,
            lie: false,
            id: "g2033"
          },
          {
            spoiler: 2,
            rating: 0.6923077,
            lie: false,
            id: "g1252"
          },
          {
            id: "g1366",
            lie: false,
            spoiler: 0,
            rating: 1.5454545
          },
          {
            spoiler: 0,
            rating: 2.8,
            id: "g334",
            lie: false
          },
          {
            id: "g46",
            lie: false,
            spoiler: 0,
            rating: 1
          },
          {
            id: "g104",
            lie: false,
            spoiler: 0,
            rating: 1.8421053
          },
          {
            id: "g452",
            lie: false,
            spoiler: 0,
            rating: 2
          },
          {
            id: "g1154",
            lie: false,
            spoiler: 0,
            rating: 1.4166666
          },
          {
            lie: false,
            id: "g2619",
            rating: 2,
            spoiler: 0
          },
          {
            rating: 2.3636363,
            spoiler: 0,
            lie: false,
            id: "g733"
          },
          {
            spoiler: 0,
            rating: 2.7368422,
            lie: false,
            id: "g692"
          },
          {
            lie: false,
            id: "g878",
            spoiler: 0,
            rating: 1.75
          },
          {
            spoiler: 0,
            rating: 2,
            id: "g456",
            lie: false
          },
          {
            spoiler: 2,
            rating: 2.5,
            lie: false,
            id: "g874"
          },
          {
            rating: 2,
            spoiler: 0,
            id: "g2252",
            lie: false
          },
          {
            id: "g1676",
            lie: false,
            rating: 1.3333334,
            spoiler: 0
          },
          {
            spoiler: 0,
            rating: 2.7,
            lie: false,
            id: "g201"
          },
          {
            id: "g216",
            lie: false,
            rating: 0.14285715,
            spoiler: 1
          },
          {
            spoiler: 0,
            rating: 2.2777777,
            lie: false,
            id: "g222"
          },
          {
            lie: false,
            id: "g202",
            spoiler: 0,
            rating: 2.2941177
          },
          {
            id: "g373",
            lie: false,
            spoiler: 0,
            rating: 2.7777777
          },
          {
            lie: false,
            id: "g751",
            rating: 0.125,
            spoiler: 0
          },
          {
            spoiler: 0,
            rating: 2.8421052,
            id: "g710",
            lie: false
          },
          {
            spoiler: 0,
            rating: 1,
            lie: false,
            id: "g1059"
          },
          {
            lie: false,
            id: "g3204",
            rating: 2,
            spoiler: 0
          },
          {
            spoiler: 0,
            rating: 2,
            lie: false,
            id: "g728"
          },
          {
            spoiler: 0,
            rating: 1.2857143,
            id: "g1735",
            lie: false
          },
          {
            spoiler: 0,
            rating: 1.8888888,
            lie: false,
            id: "g742"
          },
          {
            id: "g251",
            lie: false,
            rating: 0.7058824,
            spoiler: 0
          },
          {
            id: "g333",
            lie: false,
            spoiler: 0,
            rating: 3
          },
          {
            rating: 1.625,
            spoiler: 0,
            id: "g580",
            lie: false
          },
          {
            rating: 2.1,
            spoiler: 0,
            lie: false,
            id: "g1234"
          },
          {
            spoiler: 0,
            rating: 1.1666666,
            lie: false,
            id: "g1595"
          },
          {
            spoiler: 0,
            rating: 1.3333334,
            id: "g1004",
            lie: false
          },
          {
            lie: false,
            id: "g3171",
            spoiler: 0,
            rating: 2
          }
        ],
        image: {
          violence: 0,
          id: "cv27755",
          sexual: 0,
          dims: [
            256,
            368
          ],
          votecount: 12,
          url: "https://s2.vndb.org/cv/55/27755.jpg"
        },
        length_minutes: 3018,
        length_votes: 12
      },
      finished: null,
      added: 1634610526,
      notes: null,
      vote: null,
      started: null,
      lastmod: 1634610526
    },
    {
      lastmod: 1648904513,
      started: null,
      vote: null,
      vn: {
        released: "2009-11-27",
        aliases: [
          "バルドスカイ ダイブ2 レコルダーレ",
          "BSD2",
          "Baldrsky 2"
        ],
        screenshots: [
          {
            thumbnail_dims: [
              136,
              102
            ],
            thumbnail: "https://s2.vndb.org/st/76/6876.jpg"
          },
          {
            thumbnail: "https://s2.vndb.org/st/77/6877.jpg",
            thumbnail_dims: [
              136,
              102
            ]
          },
          {
            thumbnail: "https://s2.vndb.org/st/78/6878.jpg",
            thumbnail_dims: [
              136,
              102
            ]
          },
          {
            thumbnail_dims: [
              136,
              102
            ],
            thumbnail: "https://s2.vndb.org/st/80/6880.jpg"
          },
          {
            thumbnail_dims: [
              136,
              102
            ],
            thumbnail: "https://s2.vndb.org/st/54/9354.jpg"
          },
          {
            thumbnail: "https://s2.vndb.org/st/88/94288.jpg",
            thumbnail_dims: [
              136,
              102
            ]
          },
          {
            thumbnail_dims: [
              136,
              102
            ],
            thumbnail: "https://s2.vndb.org/st/60/138160.jpg"
          },
          {
            thumbnail_dims: [
              136,
              102
            ],
            thumbnail: "https://s2.vndb.org/st/61/138161.jpg"
          },
          {
            thumbnail_dims: [
              136,
              102
            ],
            thumbnail: "https://s2.vndb.org/st/62/138162.jpg"
          },
          {
            thumbnail: "https://s2.vndb.org/st/63/138163.jpg",
            thumbnail_dims: [
              136,
              102
            ]
          }
        ],
        languages: [
          "en",
          "ja",
          "ko",
          "zh-Hans"
        ],
        alttitle: null,
        platforms: [
          "win"
        ],
        titles: [
          {
            lang: "ja",
            main: true,
            title: "BALDR SKY Dive2 \"RECORDARE\"",
            official: true,
            latin: null
          }
        ],
        length: 5,
        votecount: 1969,
        popularity: 19.9,
        description: "One day, Kadokura Kou awakes in a virtual battlefield. He, who is a skilled Simulacrum user, soon remembers that he was pursuing someone with Rain, his partner. \n\nKou and Rain investigate the incident that ruined his peaceful school life known as \"Gray Christmas\", but various mysteries stand in the way of the truth. As time passes, he gradually regains his lost memories and re-unites with his friends.\n\nWhen all of the mysteries congregate, the door of truth opens...\n\n[Edited from ErogeShop]",
        rating: 86.3,
        title: "BALDR SKY Dive2 \"RECORDARE\"",
        olang: "ja",
        image: {
          sexual: 0,
          dims: [
            256,
            352
          ],
          id: "cv25808",
          violence: 0,
          url: "https://s2.vndb.org/cv/08/25808.jpg",
          votecount: 12
        },
        length_minutes: 3375,
        devstatus: 0,
        tags: [
          {
            spoiler: 0,
            rating: 2.4615386,
            id: "g14",
            lie: false
          },
          {
            spoiler: 0,
            rating: 2.8,
            lie: false,
            id: "g31"
          },
          {
            id: "g32",
            lie: false,
            rating: 2.5333333,
            spoiler: 0
          },
          {
            rating: 2.6923077,
            spoiler: 0,
            lie: false,
            id: "g19"
          },
          {
            spoiler: 0,
            rating: 0.90909094,
            lie: false,
            id: "g23"
          },
          {
            id: "g152",
            lie: false,
            spoiler: 0,
            rating: 2.4166667
          },
          {
            spoiler: 0,
            rating: 3,
            lie: false,
            id: "g105"
          },
          {
            id: "g321",
            lie: false,
            spoiler: 0,
            rating: 2
          },
          {
            spoiler: 0,
            rating: 2.1666667,
            lie: false,
            id: "g288"
          },
          {
            id: "g196",
            lie: false,
            rating: 2,
            spoiler: 0
          },
          {
            id: "g444",
            lie: false,
            spoiler: 0,
            rating: 1.8181819
          },
          {
            lie: false,
            id: "g827",
            spoiler: 2,
            rating: 2.2666667
          },
          {
            lie: false,
            id: "g530",
            spoiler: 0,
            rating: 2
          },
          {
            rating: 2.0714285,
            spoiler: 0,
            lie: false,
            id: "g452"
          },
          {
            spoiler: 0,
            rating: 1,
            id: "g722",
            lie: false
          },
          {
            rating: 2,
            spoiler: 0,
            id: "g1581",
            lie: false
          },
          {
            spoiler: 0,
            rating: 2,
            id: "g873",
            lie: false
          },
          {
            spoiler: 0,
            rating: 2,
            lie: false,
            id: "g789"
          },
          {
            spoiler: 0,
            rating: 2,
            lie: false,
            id: "g733"
          },
          {
            id: "g1898",
            lie: false,
            spoiler: 0,
            rating: 3
          },
          {
            lie: false,
            id: "g682",
            rating: 2.875,
            spoiler: 0
          },
          {
            spoiler: 0,
            rating: 2.4615386,
            id: "g558",
            lie: false
          },
          {
            spoiler: 2,
            rating: 2.5,
            lie: false,
            id: "g980"
          },
          {
            lie: false,
            id: "g1236",
            spoiler: 2,
            rating: 2.75
          },
          {
            id: "g3151",
            lie: false,
            spoiler: 0,
            rating: 2
          },
          {
            spoiler: 2,
            rating: 2.4615386,
            lie: false,
            id: "g848"
          },
          {
            lie: false,
            id: "g1448",
            rating: 1.8888888,
            spoiler: 0
          },
          {
            id: "g1416",
            lie: false,
            spoiler: 0,
            rating: 2.375
          },
          {
            id: "g3349",
            lie: false,
            spoiler: 2,
            rating: 2
          },
          {
            id: "g653",
            lie: false,
            spoiler: 1,
            rating: 1.75
          },
          {
            spoiler: 0,
            rating: 2.3,
            id: "g578",
            lie: false
          },
          {
            lie: false,
            id: "g502",
            spoiler: 0,
            rating: 2.3333333
          },
          {
            lie: false,
            id: "g1579",
            spoiler: 0,
            rating: 1
          },
          {
            spoiler: 0,
            rating: 2.142857,
            lie: false,
            id: "g302"
          },
          {
            lie: false,
            id: "g244",
            spoiler: 0,
            rating: 2.7142856
          },
          {
            spoiler: 0,
            rating: 2.6923077,
            id: "g149",
            lie: false
          },
          {
            spoiler: 0,
            rating: 2.5,
            lie: false,
            id: "g181"
          },
          {
            id: "g168",
            lie: false,
            spoiler: 0,
            rating: 1
          },
          {
            id: "g1031",
            lie: false,
            spoiler: 2,
            rating: 2.1176472
          },
          {
            spoiler: 0,
            rating: 2.3,
            id: "g1054",
            lie: false
          },
          {
            spoiler: 0,
            rating: 1.6666666,
            id: "g1154",
            lie: false
          },
          {
            lie: false,
            id: "g755",
            spoiler: 0,
            rating: 2.8333333
          },
          {
            lie: false,
            id: "g991",
            rating: 2.6153846,
            spoiler: 0
          },
          {
            lie: false,
            id: "g1483",
            spoiler: 2,
            rating: 2
          },
          {
            spoiler: 0,
            rating: 2.3636363,
            id: "g737",
            lie: false
          },
          {
            id: "g416",
            lie: false,
            spoiler: 1,
            rating: 2.2307692
          },
          {
            lie: false,
            id: "g1055",
            spoiler: 1,
            rating: 1.7
          },
          {
            spoiler: 2,
            rating: 2,
            lie: false,
            id: "g2083"
          },
          {
            id: "g454",
            lie: false,
            spoiler: 0,
            rating: 2
          },
          {
            rating: 2.875,
            spoiler: 0,
            lie: false,
            id: "g1555"
          },
          {
            spoiler: 2,
            rating: 3,
            id: "g2274",
            lie: false
          },
          {
            id: "g710",
            lie: false,
            rating: 2,
            spoiler: 0
          },
          {
            rating: 2.2857144,
            spoiler: 0,
            lie: false,
            id: "g257"
          },
          {
            spoiler: 0,
            rating: 1.8333334,
            lie: false,
            id: "g154"
          },
          {
            id: "g125",
            lie: false,
            spoiler: 0,
            rating: 1.6666666
          },
          {
            spoiler: 0,
            rating: 2,
            lie: false,
            id: "g106"
          },
          {
            lie: false,
            id: "g96",
            spoiler: 0,
            rating: 2.357143
          },
          {
            lie: false,
            id: "g108",
            rating: 2.3,
            spoiler: 0
          },
          {
            lie: false,
            id: "g148",
            spoiler: 0,
            rating: 2.8461537
          },
          {
            spoiler: 0,
            rating: 2.6666667,
            lie: false,
            id: "g761"
          },
          {
            lie: false,
            id: "g534",
            spoiler: 0,
            rating: 1.6923077
          },
          {
            id: "g1234",
            lie: false,
            rating: 2.75,
            spoiler: 0
          },
          {
            id: "g764",
            lie: false,
            spoiler: 0,
            rating: 2.7272727
          },
          {
            lie: false,
            id: "g1735",
            rating: 2,
            spoiler: 0
          },
          {
            spoiler: 1,
            rating: 1.9166666,
            id: "g415",
            lie: false
          },
          {
            id: "g596",
            lie: false,
            spoiler: 0,
            rating: 1.5
          },
          {
            rating: 2.6666667,
            spoiler: 1,
            lie: false,
            id: "g826"
          },
          {
            id: "g1582",
            lie: false,
            rating: 2,
            spoiler: 0
          },
          {
            spoiler: 2,
            rating: 0.53846157,
            id: "g400",
            lie: false
          },
          {
            lie: false,
            id: "g2619",
            rating: 2.5,
            spoiler: 0
          },
          {
            spoiler: 0,
            rating: 0.45454547,
            id: "g749",
            lie: false
          },
          {
            spoiler: 0,
            rating: 2.7,
            lie: false,
            id: "g692"
          },
          {
            lie: false,
            id: "g357",
            rating: 1.3333334,
            spoiler: 1
          },
          {
            spoiler: 0,
            rating: 2.4615386,
            id: "g38",
            lie: false
          },
          {
            id: "g156",
            lie: false,
            spoiler: 0,
            rating: 0.78571427
          },
          {
            spoiler: 2,
            rating: 2,
            lie: false,
            id: "g68"
          },
          {
            id: "g2704",
            lie: false,
            spoiler: 0,
            rating: 2.6
          },
          {
            lie: false,
            id: "g2283",
            spoiler: 0,
            rating: 1
          },
          {
            id: "g676",
            lie: false,
            rating: 2.6,
            spoiler: 0
          },
          {
            lie: false,
            id: "g602",
            spoiler: 0,
            rating: 2
          },
          {
            lie: false,
            id: "g1204",
            rating: 2,
            spoiler: 0
          },
          {
            id: "g728",
            lie: false,
            spoiler: 0,
            rating: 2.7692308
          },
          {
            spoiler: 0,
            rating: 2.6666667,
            id: "g456",
            lie: false
          },
          {
            id: "g448",
            lie: false,
            spoiler: 0,
            rating: 2.909091
          },
          {
            spoiler: 0,
            rating: 2.3333333,
            lie: false,
            id: "g868"
          },
          {
            id: "g2454",
            lie: false,
            spoiler: 0,
            rating: 2.8
          },
          {
            spoiler: 0,
            rating: 1.5714285,
            lie: false,
            id: "g541"
          },
          {
            spoiler: 0,
            rating: 2,
            id: "g451",
            lie: false
          },
          {
            id: "g796",
            lie: false,
            spoiler: 0,
            rating: 2.4545455
          },
          {
            id: "g1190",
            lie: false,
            spoiler: 0,
            rating: 2
          },
          {
            spoiler: 0,
            rating: 2.2222223,
            id: "g875",
            lie: false
          },
          {
            lie: false,
            id: "g2099",
            spoiler: 0,
            rating: 2
          },
          {
            id: "g180",
            lie: false,
            spoiler: 0,
            rating: 2.9230769
          },
          {
            lie: false,
            id: "g262",
            rating: 2.6666667,
            spoiler: 0
          },
          {
            spoiler: 0,
            rating: 2.4166667,
            lie: false,
            id: "g121"
          },
          {
            spoiler: 0,
            rating: 2.1538463,
            id: "g223",
            lie: false
          },
          {
            id: "g1478",
            lie: false,
            spoiler: 0,
            rating: 2.2307692
          },
          {
            spoiler: 0,
            rating: 3,
            id: "g1246",
            lie: false
          },
          {
            lie: false,
            id: "g601",
            spoiler: 0,
            rating: 2.0714285
          },
          {
            id: "g678",
            lie: false,
            spoiler: 0,
            rating: 2
          },
          {
            spoiler: 1,
            rating: 1.3571428,
            lie: false,
            id: "g414"
          },
          {
            id: "g3139",
            lie: false,
            spoiler: 0,
            rating: 1
          },
          {
            spoiler: 2,
            rating: 2.2,
            lie: false,
            id: "g1265"
          },
          {
            spoiler: 0,
            rating: 2.25,
            lie: false,
            id: "g871"
          },
          {
            spoiler: 0,
            rating: 2.4166667,
            id: "g876",
            lie: false
          },
          {
            lie: false,
            id: "g553",
            rating: 2.857143,
            spoiler: 0
          },
          {
            spoiler: 0,
            rating: 2,
            id: "g172",
            lie: false
          },
          {
            id: "g300",
            lie: false,
            spoiler: 0,
            rating: 2.5
          },
          {
            id: "g99",
            lie: false,
            spoiler: 1,
            rating: 2.3333333
          },
          {
            id: "g135",
            lie: false,
            spoiler: 0,
            rating: 2.7333333
          },
          {
            spoiler: 0,
            rating: 2.5,
            id: "g46",
            lie: false
          },
          {
            id: "g133",
            lie: false,
            spoiler: 0,
            rating: 2.7692308
          },
          {
            id: "g683",
            lie: false,
            spoiler: 0,
            rating: 2
          },
          {
            spoiler: 0,
            rating: 1.6,
            id: "g972",
            lie: false
          },
          {
            spoiler: 0,
            rating: 2,
            id: "g1297",
            lie: false
          },
          {
            rating: 2,
            spoiler: 0,
            id: "g464",
            lie: false
          },
          {
            rating: 2,
            spoiler: 0,
            lie: false,
            id: "g1324"
          },
          {
            rating: 1.6666666,
            spoiler: 1,
            id: "g1195",
            lie: false
          },
          {
            lie: false,
            id: "g937",
            spoiler: 1,
            rating: 2.1666667
          },
          {
            lie: false,
            id: "g1437",
            rating: 3,
            spoiler: 0
          },
          {
            lie: false,
            id: "g250",
            spoiler: 2,
            rating: 2.4666667
          },
          {
            spoiler: 0,
            rating: 2.357143,
            id: "g45",
            lie: false
          },
          {
            lie: false,
            id: "g215",
            spoiler: 0,
            rating: 1.5
          },
          {
            lie: false,
            id: "g127",
            spoiler: 1,
            rating: 1.25
          },
          {
            id: "g670",
            lie: false,
            spoiler: 0,
            rating: 2.1818182
          },
          {
            lie: false,
            id: "g442",
            spoiler: 0,
            rating: 2.857143
          },
          {
            id: "g334",
            lie: false,
            spoiler: 0,
            rating: 2.5
          },
          {
            spoiler: 2,
            rating: 2,
            lie: false,
            id: "g3005"
          },
          {
            spoiler: 0,
            rating: 0.8888889,
            id: "g689",
            lie: false
          },
          {
            rating: 1.6666666,
            spoiler: 0,
            id: "g965",
            lie: false
          },
          {
            spoiler: 0,
            rating: 2.25,
            lie: false,
            id: "g2149"
          },
          {
            lie: false,
            id: "g457",
            rating: 2.3846154,
            spoiler: 2
          },
          {
            lie: false,
            id: "g377",
            spoiler: 0,
            rating: 2.3846154
          },
          {
            lie: false,
            id: "g1335",
            spoiler: 0,
            rating: 2.8181818
          },
          {
            rating: 2.3636363,
            spoiler: 0,
            id: "g352",
            lie: false
          },
          {
            spoiler: 2,
            rating: 2,
            id: "g2617",
            lie: false
          },
          {
            lie: false,
            id: "g1569",
            spoiler: 0,
            rating: 1
          },
          {
            spoiler: 0,
            rating: 2.4,
            id: "g1102",
            lie: false
          },
          {
            rating: 2,
            spoiler: 0,
            lie: false,
            id: "g3159"
          },
          {
            lie: false,
            id: "g1659",
            spoiler: 0,
            rating: 2.4285715
          }
        ],
        length_votes: 83
      },
      voted: null,
      id: "v1913",
      notes: null,
      finished: null,
      added: 1648904513
    }
  ]