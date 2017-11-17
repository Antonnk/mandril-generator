<template>
  <div class="container">
    <div id="program-overview">
      <ul>
        <li v-for="entry in output">
          {{ entry.msg }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Generator',
    data () {
      return {
        output : [],
        usefullWords : [],
        combos: {
          3:['adjektiver', 'navneord', 'udsagnsord'],
          4:['adjektiver', 'navneord', 'udsagnsord', 'navneord2'],
          5:['adjektiver', 'navneord', 'udsagnsord', 'adjektiver2', 'navneord2']
        },
        wordLists: {
          'adjektiver': ['afhængig','aktiv','almindelig','alvorlig','anderledes','bange','berømt','bestemt','billig','blød','chauvinistisk','chik','cirkelrund','citrongul','cool','dårlig','dejlig','demokratisk','dyr','dårlig','effektiv','enkel','enorm','europæisk','evig','fantastisk','fast','fattig','flot','forkert','frisk','gal','glad','gratis','grov','grundig','halv','hellig','hurtig','hård','historisk','ildrød','interessant','indfødt','infernalsk','ivrig','japansk','jaloux','jomfruelig','jysk','jægergrøn','kendt','klar','klassisk','klog','kulturel','langsom','lav','let','lille','lykkelig','mager','menneskelig','moderne','mærkelig','mørk','naturlig','norsk','nordisk','normal','ny','offentlig','ond','opmærksom','oprindelig','ordentlig','panisk','passiv','pervers','pigeglad','pestramt','queer','radikal','rar','ren','rig','rolig','seksuel','sjov','smuk','slem','syg','talblind','tigerstribet','tilfreds','torskedum','tung','ukendt','umiddelbar','umulig','ung','utrolig','varm','venlig','vestlig','vanskelig','voldsom','webbaseret','xenofobisk','yderlig','ynkelig','zulunesisk','ædru','ægte','ængstelig','ærlig','ærmeløs','ødelagt','ømtålelig','ønskværdig','østasiatisk','østjysk','åndeløs','årvågen'],
          'navneord': ['abe','abrikos','adelsdame','admiral','appelsin','barn','blender','blomst','bog','brevvægt','callgirl','campist','cement','censor','charmør','daddel','danser','datter','doktor','dybfryser','emballage','edderkop','egern','eksaminator','elorgel','fjerkræ','fjernsyn','flyttemappe','frimærke','frugt','føl','gaffel','gardin','girokort','glas','gris','hane','hest','hund','hundehvalp','hvidløg','ibis','idealist','idiot','idol','indpisker','jagerfly','jazzband','jernlady','jordbunke','julegås','kagedåse','kartoffel','kat','kaffedåse','kedel','lampe','landdyr','lænestol','løg','langelænder','mad','mand','mink','mikrobølgeovn','mælk','nabokone','nar','naturelsker','netdater','nonne','officer','ogginok','oldsag','oksekød','oligark','pacifist','pakhest','panser','portner','postbud','quizmaster','rabbiner','racekat','racekører','radiovært','revolvermand','sabotør','sabelsluger','sagnkonge','sanger','saxofonist','taktiker','talent','teknokrat','teoritiker','tyr','ubryder','udlejer','udlænding','udstiller','ulvehund','vaffel','vagabond','vagt','vampyr','verdensborger','wannabe','xylofon','yuppie','yeti','zebra','ædedolk','ægtefælle','ældreråd','æresborger','ærkebisp','økolog','økonom','øksemorder','øldrikker','ørelæge','ågerkarl','ånd'],
          'udsagnsord': ['advarer','afbryder','afkræver','afslører','angriber','bader','bagtaler','banker','beføler','begærer','camouflerer','charmerer','chokerer','citerer','censurerer','dasker','dater','driller','dræber','dunker','efteraber','ejer','elsker','endevender','erstatter','fanger','farserer','flår','flænser','frister','forhekser','gennempløjer','gokker','gratulerer','guffer','griller','headhunter','halshugger','hapser','humper','hypnotiserer','imiterer','indlogerer','indånder','indgnider','invaliderer','jagter','jerner','jonglerer','justerer','jævner','kanøfler','klasker','karseklipper','kærtegner','kølhaler','lammetæver','lemlæster','ledsager','lufter','lugter','maler','masserer','modtager','møder','mørbanker','narrer','nedkøler','nedskyder','nusser','nævner','ombygger','omringer','opildner','opsuger','oversmører','pantsætter','passer','pimper','pirker','pynter','quizzer','rapper','redder','renser','rister','ryger','ser','slår','spiser','stormer','sælger','taber','tager','takker','tegner','tipper','udfordrer','udbener','udnytter','udstøder','undergraver','vandaliserer','vejer','vejleder','visiterer','vugger','windsurfer','xerograferer','yngler','ynker','zapper','æder','ælter','ændrer','ærer','ætser','ødelægger','ødsler','øjner','ønsker','øver','åbner','årelader'],
          'adjektiver2': ['abnorm','adræt','akademisk','anspændt','arrig','barmfager','barnlig','beskidt','bitchy','bovlam','catalansk','champagnefarvet','chokoladebrun','civil','cylindrisk','damet','deform','dekadent','dramatisk','dybsinding','eftertænksom','eksotisk','emsig','erfaren','excentrisk','faglært','famøs','fed','feminin','fjendtlig','forfalden','gammel','gavmild','glat','glohed','grusom','hadfyldt','havesyg','herredum','hårfager','hævnlysten','ihærdig','imbecil','inkompetent','iskold','intetsigende','jadegrøn','jusuitisk','jordfarvet','jordskælvsramt','julet','kamplysten','kanonflot','kappeklædt','klarsynet','knotten','laber','lasket','lattermild','liderlig','lummer','mandlig','mathvid','melankolsk','mellemblond','mindeværdig','naiv','naturinteresseret','negativ','nidkær','nuttet','obskur','oldgræsk','opstemt','overlegen','overvægtig','paternalistisk','papirtynd','parringslysten','pilrådden','plaskvåd','queer','rask','rasende','revolutionær','rumlig','røvsyg','saftig','sart','selvdød','sjælden','skamfuld','talentløs','tiliset','tiptop','turistet','tørstig','udenlandsk','udmærket','usædvanlig','ubehagelig','usexet','vild','vis','voksen','vred','væsentlig','westernagtig','xylografisk','ypperlig','yppig','zigzagget','æblegrøn','ærgerlig','ældrevenlig','ærkedum','ærværdig','økumenisk','østberlinsk','østerlandsk','østlig','øvet','åndsformørket','århusiansk'],
          'navneord2': ['afløser','agent','akrobat','anus','arier','babs','bagmand','ballon','barbar','bigamist','cafégæst','cancanpige','centralafrikaner','champagne','culottesteg','dagpengemodtager','dalmatiner','damesko','denimjakke','direktør','ekskone','elektriker','elev','elskovsrede','etnolog','fadøl','familie','fanden','filet','fimrehår','firmabil','gryde','gorilla','grøntsag','gulerod','gård','hacker','haj','herrecykel','hjørnesofa','høne','indvandrer','inspektør','intimmassageklinik','isfugl','iværksætter','jakkemand','jernhest','jurist','jærv','jøde','ko','konvolut','kvinde','kylling','køleskab','labyrint','laksefisker','landkrabbe','landsbytosse','lasagne','machotype','madmor','majroe','missekat','morbror','narkoselæge','natble','nordjyde','nougat','næbdyr','oase','odder','optiker','olietanker','organ','panda','pangfarve','papsøn','pariserbøf','pygmæ','qatar','ridefoged','roligan','rosenbusk','rudekuvert','røremaskine','sandbanke','student','superstjerne','syvsover','sølvræv','testpilot','tigerhaj','tilskuer','tissemyre','torso','ubåd','ufo','ukulele','undermåler','urokse','veteran','vidunderbarn','voldsmand','vovehals','vårflue','weekendafløser','xenon','yogi','ymerdrys','zombie','æseldriver','æstetiker','æblekage','ægtebarn','ægtemand','ørebrusk','øfgris','øgle','ønskebarn','ørnenæse','ålefisk','ådselsbille']
        }
      }
    },
    methods : {
      addEntry(word) {
        var word = word.substr(0,5).split('')
        var program = [];
        for (var i = 0; i < word.length; ++i) {
          var usefullWords = []
          var wordClass = this.combos[word.length][i];
          for (var counter = 0; counter < this.wordLists[ wordClass ].length; ++counter) {
            if(this.wordLists[ wordClass ][counter][0] === word[i].toLowerCase()){
              usefullWords.push(this.wordLists[ wordClass ][counter]);
            }
          }

          usefullWords.sort(function() {
            return .5 - Math.random();
          });
          program.push(usefullWords[0])
        }

        this.output.push({
          time : '22:00',
          msg : program.join(' ')
        })
      }
    },
    mounted() {
      this.addEntry('aklsdkajsd');
      this.addEntry('ælpofd');
      this.addEntry('mcxmcxc');
      this.addEntry('ithcsd');
    }
  }
</script>