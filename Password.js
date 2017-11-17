import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import FontAwesome  from 'react-fontawesome';
import Header from './Header'


/* Component for generation of passwords (loaded after first screen) */


@inject('WordStore')
// messy hack
@observer
class ButtonWatcher extends Component {
    constructor(){
      super();

      /* Generate password and save to this.state */
      this.state = {
        view:"password",
        password: [],
        word:"",
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
    }



    /* Functions in component */
    resetPass = () => {
      console.log(this.state)
      // this.props.WordStore.resetWord();
      var word = this.state.word.substr(0,5).split('');
      console.log(word);
      var newPassword = [];
      for (var i = 0; i < word.length; ++i) {
        var usefulWords = [];
        console.log(this.state);
        var wordClass = this.state.combos[word.length][i];
        for (var counter = 0; counter < this.state.wordLists[ wordClass ].length; ++counter) {
          if(this.state.wordLists[ wordClass ][counter][0] === word[i].toLowerCase()){
            usefulWords.push(this.state.wordLists[ wordClass ][counter]);
          }
        }
        usefulWords.sort(function() {
          return .5 - Math.random();
        });
       console.log(usefulWords);
       if(usefulWords.length === 0){
         usefulWords.push("MANGLER-ORD")
       }
       function capitalizeFirstLetter(string) {
            return string.charAt(0).toUpperCase() + string.slice(1);
       }
       newPassword.push(capitalizeFirstLetter(usefulWords[0]));

      }
      this.setState({password:newPassword});
      console.log(this.state);
    };

    /* Button handlers (affects view-state) */
    thankyou  = () => {
      this.setState({view:"tak"});
        this.props.WordStore.changeView("tak");
    };       
    how = () => {
      this.setState({view:"how"});
        this.props.WordStore.changeView("how");
    };
    /* Clearing of password (method exists in WordStore) */
    clearPassword  = () => {
      this.props.WordStore.changeView(" ");
      this.props.WordStore.resetWord();
    };


    /* Conditional resetting of state */
    back  = () => {
      if(this.state.view === "password")
        this.clearPassword()
      if(this.state.view === "how")
        this.setState({view:"password"});
        this.props.WordStore.changeView("password");
      if(this.state.view === "tak")
        this.setState({view:"password"});
        this.props.WordStore.changeView("password");
    };    



    /* Create password on load of component */
    componentWillMount(){
      this.setState({word:this.props.WordStore.getWord}, this.resetPass);
      
    }





    /* Spaghetti rendering */
    render() {
      if(this.state.view === "password"){
        return (
          <div>
            <Header onClick={this.back} backButton="true" title="HER ER DIT KODEORD" subtitle="[det er kun et eksempel]" />
            

            <div className="disclaimer">
              Husk, det er kun et eksempel
            </div>
            <div className="whiteBox">
              <div className="thenewPassword">{this.state.password.join('')}</div>
            </div>
            <div className="pwWords">
              {this.state.password.map(word => <span key={word}>{word}</span>)}
            </div>
            <div className="buttonBox">

              <button className="hackerWidget secondScreenButton" onClick={this.how}>Hvorfor?</button>
              <button className="hackerWidget secondScreenButton" onClick={this.resetPass}><FontAwesome name='refresh' /></button>
              <button className="hackerWidget secondScreenButton" onClick={this.thankyou}>Ok, tak!</button>
            </div>
          </div>
        );
      }
      else if(this.state.view === "how"){
        return (
          <div>
              <Header onClick={this.back} backButton="true" title="HVORFOR?" subtitle="[hvorfor er det et godt kodeord?]" />
              <div className="explainerText">
                    <p>Vi har sammensat en sætning med udgangspunkt i op til fem bogstaver fra dit ord.</p>
                    <p>Ved at lave en sætning, der giver et absurd eller specifikt scenarie, en situation eller et billede i din hukommelse, så er det lettere at huske.</p>
                    <p>Derudover bruger vi både store og små bogstaver her for at øge styrken. </p>
                    <p>Sætningen bør du dog selv lave. Det her er blot et eksempel. </p>
              </div>

           
          </div>
        );
      }
      else if(this.state.view === "tak"){
        return (
          <div>
            <Header onClick={this.back} backButton="true" title="S37V T4K" subtitle="[SELV TAK]" />
            <div className="buttonBox" style={{textAlign:'center'}}>
                <button className="hackerWidget secondScreenButton" onClick={this.clearPassword} style={{marginLeft:0}}>Forfra</button>
            </div>
          </div>
        );
      }
    }
}
@observer
export default class Words extends Component {

  render() {
    return <ButtonWatcher />
  }
}


// WEBPACK FOOTER //
// ./src/Password.js