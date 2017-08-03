const posts = [
   {
      "code":"BAcyDyQwcXX",
      "caption":"Estaba esperando con una ala rota sin saber qué ni porqué, pero ahí estaba...",
      "likes":153,
      "id":"1161022966406956503",
      "display_src":"https://scontent-dft4-3.cdninstagram.com/t51.2885-15/e35/20066476_475133312840565_3900825702093553664_n.jpg"
   },
   {
      "code":"BAcJeJrQca9",
      "caption":"Even colors with no sense at all might be ART..! ",
      "likes":219,
      "id":"1160844458347054781",
      "display_src":"https://scontent-dft4-3.cdninstagram.com/t51.2885-15/e35/19765060_465183207177025_6170831628743475200_n.jpg"
   },
   {
      "code":"BAF_KY4wcRY",
      "caption":"Una sombra que no da sombra.",
      "likes":202,
      "id":"1154606670337393752",
      "display_src":"https://scontent-dft4-3.cdninstagram.com/t51.2885-15/e35/19535354_1285033101622762_1951334282593042432_n.jpg"
   },
   {
      "code":"BAPIPRjQce9",
      "caption":"Detrás de aquellas montañas el sol se pone cada tarde, la luz se apaga y otra noche nace. That's life! ",
      "likes":273,
      "id":"1157179863266871229",
      "display_src":"https://scontent-dft4-3.cdninstagram.com/t51.2885-15/e35/18581229_1372094599545591_4969221636134797312_n.jpg"
   },
   {
      "code":"-hZh6IQcfN",
      "caption":"La perspectiva de la realidad. #thebean #bean #cityscape #fall #claudgate #sky #chicago #usa #us",
      "likes":270,
      "id":"1126293663140399053",
      "display_src":"https://scontent-dft4-3.cdninstagram.com/t51.2885-15/e35/18013571_270703150058104_5981502572618317824_n.jpg"
   },
   {
      "code":"-B3eiIwcYV",
      "caption":"Las sombras definen el contorno, pero las luces la escénica.",
      "likes":224,
      "id":"1117418173361145365",
      "display_src":"https://scontent-dft4-3.cdninstagram.com/t51.2885-15/e35/18161010_288274198278031_7722184918549135360_n.jpg"
   },
   {
      "code":"BAhvZrRwcfu",
      "caption":"Una muestra de lo que las manos del hombre han logrado.",
      "likes":283,
      "id":"1162418651480049646",
      "display_src":"https://scontent-dft4-3.cdninstagram.com/t51.2885-15/e35/17882547_814131575409537_3790689997456146432_n.jpg"
   },
   {
      "code":"BAAJqbOQcW5",
      "caption":"El tan famoso frijolito. Una obra de arte muy simple, pero sorprendente desde cualquier perspectiva.'",
      "likes":301,
      "id":"1152964002473690553",
      "display_src":"https://scontent-dft4-3.cdninstagram.com/t51.2885-15/e35/17817546_1393469074048336_5153333277657923584_n.jpg"
   },
   {
      "code":"_4jHytwcUA",
      "caption":"Allá donde las olas pegan, el viento sopla y la gente observa.",
      "likes":304,
      "id":"1150824171912152320",
      "display_src":"https://scontent-dft4-3.cdninstagram.com/t51.2885-15/e35/17494161_1249592695077537_1052850918388662272_n.jpg"
   },
   {
      "code":"_zbaOlQcbn",
      "caption":"Great ideas",
      "likes":232,
      "id":"1149382879529256679",
      "display_src":"https://scontent-dft4-3.cdninstagram.com/t51.2885-15/e35/15535441_1226698387421563_4306651217657856000_n.jpg"
   },
   {
      "code":"_rmvQfQce8",
      "caption":"Curioso como un lugar puede transportarte a otra época por su apariencia y misticismo.",
      "likes":365,
      "id":"1147180903383025596",
      "display_src":"https://scontent-dft4-3.cdninstagram.com/t51.2885-15/e35/15337317_1828247780762584_7443140983522328576_n.jpg"
   },
   {
      "code":"_ep9kiQcVy",
      "caption":"The classic blue from 1963 ~ still remember when this thing was on the road. #clasico #clasiccar #oldschool #hdr #blue #sunset #memories",
      "likes":345,
      "id":"1143535906423162226",
      "display_src":"https://scontent-dft4-3.cdninstagram.com/t51.2885-15/e35/15624591_536565656541439_9101052162833645568_n.jpg"
   },
   {
      "code":"_XpJcrwcSn",
      "caption":"Un bosque, un lago y un camino que seguir para sentirse feliz..!",
      "likes":386,
      "id":"1141561999742846119",
      "display_src":"https://scontent-dft4-3.cdninstagram.com/t51.2885-15/e35/14590983_198207323960636_5322683902563713024_n.jpg"
   },
   {
      "code":"_KnU7MwceA",
      "caption":"Mother Earth has put wonders like this on the ground so that the human can admire the power of nature..!",
      "likes":391,
      "id":"1137894817632733056",
      "display_src":"https://scontent-dft4-3.cdninstagram.com/t51.2885-15/e35/14712064_1032061390226138_8830047637785804800_n.jpg"
   },
   {
      "code":"_HMejJQcY5",
      "caption":"Toda una obra de arte..!'",
      "likes":360,
      "id":"1136932306813044281",
      "display_src":"https://scontent-dft4-3.cdninstagram.com/t51.2885-15/e35/14719655_688037531371574_8888126590744002560_n.jpg"
   },
   {
      "code":"_Fq2zmwcaz",
      "caption":"Un laberinto no significa el final de nuestros ideales.",
      "likes":343,
      "id":"1136502965197194931",
      "display_src":"https://scontent-dft4-3.cdninstagram.com/t51.2885-15/e35/14607164_340411519631852_8763895168513343488_n.jpg"
   },
   {
      "code":"_A2r0aQcfD",
      "caption":"Darkness Fears",
      "likes":312,
      "id":"1135147611821557699",
      "display_src":"https://scontent-dft4-3.cdninstagram.com/t51.2885-15/e35/14026527_995468790566560_1984984226_n.jpg"
   },
   {
      "code":"-1rhFawccs",
      "caption":"Una puerta abierta no siempre indica que podemos pasar, hay que esperar hasta que su amo nos lo permita..!",
      "likes":382,
      "id":"1132002270913873708",
      "display_src":"https://scontent-dft4-3.cdninstagram.com/t51.2885-15/e35/13706873_640981752727809_144557083_n.jpg"
   },
   {
      "code":"-pjx-gQcVi",
      "caption":"Un mundo adyacente al que vivimos..!",
      "likes":371,
      "id":"1128590547628442978",
      "display_src":"https://scontent-dft4-3.cdninstagram.com/t51.2885-15/e35/13706851_1750585348488869_810216488_n.jpg"
   },
   {
      "code":"-oTZ0zQcWt",
      "caption":"No rules, no explanations. Nature forces are always more powerful than anything else..!",
      "likes":353,
      "id":"1128237044221461933",
      "display_src":"https://scontent-dft4-3.cdninstagram.com/t51.2885-15/e35/13734400_303075263373164_630711643_n.jpg"
   },
   {
      "code":"-mxKQoQcQh",
      "caption":"Caminar por éstas calles... Un verdadero viaje en el tiempo. ⌛️",
      "likes":379,
      "id":"1127804966031967265",
      "display_src":"https://scontent-dft4-3.cdninstagram.com/t51.2885-15/e35/13642944_127065587724767_1739032878_n.jpg"
   },
   {
      "code":"-fasqlQceO",
      "caption":"He's definitely up to something..!",
      "likes":274,
      "id":"1125735850454402958",
      "display_src":"https://scontent-dft4-3.cdninstagram.com/t51.2885-15/e35/13408721_1720311878181506_345543046_n.jpg"
   },
   {
      "code":"-VBgtGQcSf",
      "caption":"Donde cae un meteorito no siempre se extingue la vida, también se crea..! Aquí les dejo un ejemplo. #lake #laguna #santamariadeloro #life #meteorite",
      "likes":395,
      "id":"1122810327591928991",
      "display_src":"https://scontent-dft4-3.cdninstagram.com/t51.2885-15/e35/13385691_1152740468091158_687878800_n.jpg"
   },
   {
      "code":"-FpTyHQcau",
      "caption":"En el mar la vida es más sabrosa..! ⛵️🔆🎷🎶🍸🇲🇽 #beach #sunset #sea #party #mexico #riu",
      "likes":427,
      "id":"1118481761857291950",
      "display_src":"https://scontent-dft4-3.cdninstagram.com/t51.2885-15/e35/13126810_1530570733917713_1839885802_n.jpg"
   }
];


export default posts;
