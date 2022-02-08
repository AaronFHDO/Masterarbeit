<template>
  <ion-content id="kyberPol">
      <ion-header>
        <ion-toolbar>
          <ion-buttons slot="start">
            <ion-menu-button menu="start"></ion-menu-button>
          </ion-buttons>
          <ion-title>KYBER (Polynom)</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-card>
        <ion-card-header>
          <ion-card-title>Willkommen bei KYBER (Polynom)</ion-card-title>
        </ion-card-header>

        <ion-card-content>
          Das hier ist die Kyber-Komponente. <br>
          <br>
          Nutzern wird hier die Möglichkeit gegeben, Aufgaben zu (Polynom-) Kyber zu generieren,<br>
          selbst zu erstellen und zu berechenen. <br>
          Der Ablauf des Verfahrens wird mit der Verschlüsselung durch Bob und der Entschlüsselung durch Alice dargestellt.<br>
          <br>
          Parameter-Voraussetzungen: q muss eine Primzahl sein, alle anderen Werte müssen zwischen 0 und q-1 liegen, m muss 0 oder 1 sein <br>
          Parameter-Empfehlungen: q sollte mind. 20 sein, in A sollten große Werte (mind. 0,2q) und in 
          <vue-mathjax :formula="vectorS"></vue-mathjax>,
          <vue-mathjax :formula="vectorE"></vue-mathjax>, 
          <vue-mathjax :formula="vectorE1"></vue-mathjax>,
          <vue-mathjax :formula="outputE2"></vue-mathjax> und 
          <vue-mathjax :formula="vectorR"></vue-mathjax> 
          kleine Werte (1-5) verwendet werden<br>
          Alle Voraussetzungen und Empfehlungen sind bei der automatischen Generierung eingehalten. <br>
          Es können bei der Entschlüsselung dennoch Fehler auftreten, da mit kleinen Parametern gerechnet wird. <br>
          In allen Formeln wird implizit (mod q) gerechnet.
        </ion-card-content>
      </ion-card>

      <ion-card> 
        <ion-card-header>     
          <ion-card-title>KYBER (Polynom)</ion-card-title>
          <ion-item-divider></ion-item-divider>
        </ion-card-header>

        <ion-card-content>
          <ion-card-subtitle>Global gegeben:</ion-card-subtitle>
          <ion-grid>
            <ion-row>
              <ion-col>
                <ion-label> q: </ion-label>
                <input class="minput" type="number" v-model.number="q"/>
                <ion-item v-if="!$v.q.isPrime" class="error">
                  q muss eine Primzahl sein
                </ion-item>
              </ion-col>
              <ion-col>                
                <ion-label> N: </ion-label>
                <input class="minput" type="number" v-model.number="N"/>
                <ion-item v-if="!$v.N.validN" class="error">
                  N sollte 2 , 4 oder 8 sein.
                </ion-item>
              </ion-col>
              <ion-col>
                <ion-label> d: </ion-label>
                <input class="minput" type="number" v-model.number="d"/>
                <ion-item v-if="!$v.d.validD" class="error">
                  d muss 2, 3 oder 4 sein
                </ion-item>
              </ion-col>
              <ion-col></ion-col>
            </ion-row>
            <ion-row>
              <ion-col>
                <div class="matrix">
                  <div class="table">
                    <div class="tr">
                       <span class="td">
                        <label for="mvalues" position="fixed"> A = </label>
                      </span>
                       <span class="td">
                        <div class="table mvalues" id="mvalues">
                          <div class="tr">
                              <span class="td"> <input class="minput" v-model="AString[0][0]" @change="AValues[0][0] = parseStringToPol(AString[0][0]);"/></span>
                              <!-- reihenfolge nicht deterministisch. was tun? setzen von values zentralisieren und vor berechnung ausführen? was ist mit anzeige von polynomschreibweise? durch string erzeugen? strings mit computed?-->
                              <span class="td"> <input class="minput" v-model="AString[0][1]" @change="AValues[0][1] = parseStringToPol(AString[0][1]);"/></span>
                              <span v-if="d>=3" class="td"> <input class="minput" v-model="AString[0][2]" @change="AValues[0][2] = parseStringToPol(AString[0][2]);"/></span>
                              <span v-if="d>=4" class="td"> <input class="minput" v-model="AString[0][3]" @change="AValues[0][3] = parseStringToPol(AString[0][3]);"/></span>
                          </div>
                          <div class="tr">
                              <span class="td"> <input class="minput" v-model="AString[1][0]" @change="AValues[1][0] = parseStringToPol(AString[1][0]);"/></span>
                              <span class="td"> <input class="minput" v-model="AString[1][1]" @change="AValues[1][1] = parseStringToPol(AString[1][1]);"/></span>
                              <span v-if="d>=3" class="td"> <input class="minput" v-model="AString[1][2]" @change="AValues[1][2] = parseStringToPol(AString[1][2]);"/></span>
                              <span v-if="d>=4" class="td"> <input class="minput" v-model="AString[1][3]" @change="AValues[1][3] = parseStringToPol(AString[1][3]);"/></span>
                          </div>
                          <div v-if="d>=3" class="tr">
                              <span class="td"> <input class="minput" v-model="AString[2][0]" @change="AValues[2][0] = parseStringToPol(AString[2][0]);"/></span>
                              <span class="td"> <input class="minput" v-model="AString[2][1]" @change="AValues[2][1] = parseStringToPol(AString[2][1]);"/></span>
                              <span class="td"> <input class="minput" v-model="AString[2][2]" @change="AValues[2][2] = parseStringToPol(AString[2][2]);"/></span>
                              <span v-if="d>=4" class="td"> <input class="minput" v-model="AString[2][3]" @change="AValues[2][3] = parseStringToPol(AString[2][3]);"/></span>
                          </div>
                          <div v-if="d>=4" class="tr">
                              <span class="td"> <input class="minput" v-model="AString[3][0]" @change="AValues[3][0] = parseStringToPol(AString[3][0]);"/></span>
                              <span class="td"> <input class="minput" v-model="AString[3][1]" @change="AValues[3][1] = parseStringToPol(AString[3][1]);"/></span>
                              <span class="td"> <input class="minput" v-model="AString[3][2]" @change="AValues[3][2] = parseStringToPol(AString[3][2]);"/></span>
                              <span class="td"> <input class="minput" v-model="AString[3][3]" @change="AValues[3][3] = parseStringToPol(AString[3][3]);"/></span>
                          </div>
                          <!--div class="tr">                               
                               <span class="td"><input class="minput" :value="a01String" @change="a01String = $event.target.value; a01Values = parseStringToPol(a01String); $v.a01.$touch();"/></span>
                               <span class="td"><input class="minput" :value="a11String" @change="a11String = $event.target.value; a11Values = parseStringToPol(a11String); $v.a11.$touch();"/></span>
                           </!--div-->
                        </div>
                      </span>
                     </div>
                   </div>
                   <!--div class="error" v-if="!$v.a00Values.validArrayLength">Anzahl Elemente von a00 stimmt nicht mit d überein.</!--div-->
                </div>
              </ion-col>
            </ion-row>
          </ion-grid>
          <ion-item-divider></ion-item-divider>

          <ion-card-subtitle>Alice</ion-card-subtitle>
          <ion-grid>
            <ion-row>
              <ion-col>
                <div class="matrix">
                  <div class="table">
                    <div class="tr">
                       <span class="td">
                        <label for="mvalues" position="fixed"> <vue-mathjax :formula="vectorS"></vue-mathjax> = </label>
                      </span>
                       <span class="td">
                        <div class="table mvalues" id="mvalues">
                          <div class="tr">
                              <span class="td"> <input class="minput" v-model="sString[0]" @change="sValues[0] = parseStringToPol(sString[0]);"/></span>
                          </div>
                          <div class="tr">
                              <span class="td"> <input class="minput" v-model="sString[1]" @change="sValues[1] = parseStringToPol(sString[1]);"/></span>
                          </div>
                          <div v-if="d>=3" class="tr">
                              <span class="td"> <input class="minput" v-model="sString[2]" @change="sValues[2] = parseStringToPol(sString[2]);"/></span>
                          </div>
                          <div v-if="d>=4" class="tr">
                              <span class="td"> <input class="minput" v-model="sString[3]" @change="sValues[3] = parseStringToPol(sString[3]);"/></span>
                          </div>
                        </div>
                      </span>
                     </div>
                   </div>
                   <!--div class="error" v-if="$v.s.$anyError">Werte müssen >0 und &lt;q sein.</div-->
                </div>
              </ion-col>
              <ion-col>
                <div class="matrix">
                  <div class="table">
                    <div class="tr">
                       <span class="td">
                        <label for="mvalues" position="fixed"> <vue-mathjax :formula="vectorE"></vue-mathjax> = </label>
                      </span>
                       <span class="td">
                        <div class="table mvalues" id="mvalues">
                          <div class="tr">
                              <span class="td"> <input class="minput" v-model="eString[0]" @change="eValues[0] = parseStringToPol(eString[0]);"/></span>
                          </div>
                          <div class="tr">
                              <span class="td"> <input class="minput" v-model="eString[1]" @change="eValues[1] = parseStringToPol(eString[1]);"/></span>
                          </div>
                          <div v-if="d>=3" class="tr">
                              <span class="td"> <input class="minput" v-model="eString[2]" @change="eValues[2] = parseStringToPol(eString[2]);"/></span>
                          </div>
                          <div v-if="d>=4" class="tr">
                              <span class="td"> <input class="minput" v-model="eString[3]" @change="eValues[3] = parseStringToPol(eString[3]);"/></span>
                          </div>
                        </div>
                      </span>
                     </div>
                   </div>
                </div>
              </ion-col>
              <ion-col>
              </ion-col>
              <ion-col> 
              </ion-col>
              <ion-col>
              </ion-col>
            </ion-row>
          </ion-grid>
          <ion-item-divider></ion-item-divider>

          <ion-card-subtitle>Bob</ion-card-subtitle>
          <ion-grid>
            <ion-row>
              <ion-col>
                <div class="matrix">
                  <div class="table">
                    <div class="tr">
                       <span class="td">
                        <label for="mvalues" position="fixed"> <vue-mathjax :formula="vectorE1"></vue-mathjax> = </label>
                      </span>
                       <span class="td">
                        <div class="table mvalues" id="mvalues">
                          <div class="tr">
                              <span class="td"> <input class="minput" v-model="e1String[0]" @change="e1Values[0] = parseStringToPol(e1String[0]);"/></span>
                          </div>
                          <div class="tr">
                              <span class="td"> <input class="minput" v-model="e1String[1]" @change="e1Values[1] = parseStringToPol(e1String[1]);"/></span>
                          </div>
                          <div v-if="d>=3" class="tr">
                              <span class="td"> <input class="minput" v-model="e1String[2]" @change="e1Values[2] = parseStringToPol(e1String[2]);"/></span>
                          </div>
                          <div v-if="d>=4" class="tr">
                              <span class="td"> <input class="minput" v-model="e1String[3]" @change="e1Values[3] = parseStringToPol(e1String[3]);"/></span>
                          </div>
                        </div>
                      </span>
                     </div>
                   </div>
                </div>
              </ion-col>
              <ion-col>
                <div class="matrix">
                  <div class="table">
                    <div class="tr">
                       <span class="td">
                        <label for="mvalues" position="fixed"> <vue-mathjax :formula="vectorR"></vue-mathjax> = </label>
                      </span>
                       <span class="td">
                        <div class="table mvalues" id="mvalues">
                          <div class="tr">
                              <span class="td"> <input class="minput" v-model="rString[0]" @change="rValues[0] = parseStringToPol(rString[0]);"/></span>
                          </div>
                          <div class="tr">
                              <span class="td"> <input class="minput" v-model="rString[1]" @change="rValues[1] = parseStringToPol(rString[1]);"/></span>
                          </div>
                          <div v-if="d>=3" class="tr">
                              <span class="td"> <input class="minput" v-model="rString[2]" @change="rValues[2] = parseStringToPol(rString[2]);"/></span>
                          </div>
                          <div v-if="d>=4" class="tr">
                              <span class="td"> <input class="minput" v-model="rString[3]" @change="rValues[3] = parseStringToPol(rString[3]);"/></span>
                          </div>
                        </div>
                      </span>
                     </div>
                   </div>
                </div>
              </ion-col>
              <ion-col>
              </ion-col>
              <ion-col>
              </ion-col>
              <ion-col>
              </ion-col>
            </ion-row>
            <ion-row>
              <ion-col>          
                <ion-label><vue-mathjax :formula="outputE2"></vue-mathjax> = </ion-label>
                <input class="minput" v-model="e2String" @change=" e2Values = parseStringToPol(e2String); "/>
                <!--ion-item v-if="$v.e2.$anyError" class="error">
                  Wert muss >0 und &lt;q sein.
                </!--ion-item-->
                <!--ion-input :value="e2String" @change="e2String = $event.target.value; e2Values = parseStringToPol(e2String);"></!--ion-input-->             
              </ion-col>
              
              <ion-col>
                <ion-label> m = </ion-label>
                <input class="minput" v-model="mString" @change="mValues = parseStringToPol(mString);"/>
                <!--ion-item v-if="!$v.m.validM" class="error">
                  m muss 0 oder 1 sein
                </!--ion-item-->               
              </ion-col>
              <ion-col>
              </ion-col>
              <ion-col>
              </ion-col>
            </ion-row>
            <ion-item-divider></ion-item-divider>
            <ion-row>
              <ion-col>
                <ion-button v-on:click="generateAll(); calcAll()">Generiere Alles</ion-button>
              </ion-col>
              <ion-col>
                <ion-button v-on:click="generateAfterQ(); calcAll()">Generiere ab A</ion-button>
              </ion-col>
              <ion-col>
              </ion-col>
              <ion-col>
              </ion-col>
              <ion-col>
              </ion-col>
            </ion-row>
          </ion-grid>
        </ion-card-content> 
    </ion-card>   

    <ion-card>
      <ion-card-header> 
        <ion-grid>
          <ion-row>
            <ion-col>
              <ion-card-title>Ergebnisse</ion-card-title>
            </ion-col>
            <ion-col>
              <ion-button v-if="showResults" v-on:click="calcAll();">Ergebnisse aktualisieren</ion-button>
            </ion-col>
            <ion-col>
              <ion-button v-if="showResults && !showFormula" v-on:click=" showFormula=true; buildTexOutputs();">Formeln anzeigen</ion-button>
              <ion-button v-if="showResults && showFormula" v-on:click=" showFormula=false; buildTexOutputs();">Formeln ausblenden</ion-button>
            </ion-col>
            <ion-col>
              <ion-button v-if="!showResults" v-on:click="showResults=true; calcAll(); ">Ergebnisse anzeigen</ion-button>
              <ion-button v-if="showResults" v-on:click="showResults=false">Ergebnisse verbergen</ion-button>
            </ion-col>
            
          </ion-row>
        </ion-grid>
        <div v-if="showResults">
        <ion-card-subtitle>Alice</ion-card-subtitle>
        <ion-grid>
          <ion-row>
            <ion-col>
              <vue-mathjax :formula="outputT">
              </vue-mathjax>
            </ion-col>
          </ion-row>
        </ion-grid>
        <ion-card-subtitle>Bob</ion-card-subtitle>
        <ion-grid>
          <ion-row>
            <ion-col>
              <vue-mathjax :formula="outputU">
              </vue-mathjax>
            </ion-col>
          </ion-row>
          <ion-row>
            <ion-col>
              <vue-mathjax :formula="outputV">
              </vue-mathjax>
            </ion-col>
          </ion-row>
        </ion-grid>
        <ion-card-subtitle>Alice</ion-card-subtitle>
        <ion-grid>
          <ion-row>
          </ion-row>
          <ion-row>
            <ion-col>
              <vue-mathjax :formula="outputM">
              </vue-mathjax>
              <div v-if="decryptIssue" class="center error">
                Entschlüsselungsfehler wegen ungünstiger Parameter
              </div>
            </ion-col>
          </ion-row>
        </ion-grid>
        </div>
      </ion-card-header> 
    </ion-card>    
  </ion-content>
</template>

<script>
import { VueMathjax } from "vue-mathjax";
import { required, between } from 'vuelidate/lib/validators'

function isPrime(num) {
    for(var i = 2; i < num; i++){
        if(num % i === 0) {return false;}
    }
    return true;
}

function validN(){
  if(this.N == 2 || this.N==4 || this.N==8){
    return true;
  }
  return false;
}

function validD(){
  if(this.d == 2 || this.d == 3 || this.d == 4){
    return true;
  }
  return false;
}

function validArrayLength(array){
  if(array.length != this.N){
    return false;
  }
  return true;
}

function validArrayValues(array){
  for(let elem of array){
    if(isNaN(elem)){
      return false;
    }
    else if(elem < 0 || elem>= this.q){
      return false;
    }
  }
  return true;
}

export default {
  components: {
    "vue-mathjax": VueMathjax
  },
  name: 'MainKyberPol',
  el: '#kyberPol',
  data() {
    return {
      q: 97 ,
      N: 4 ,
      d: 2 ,
      AString: [
        ["1,1,1,1", "2,2,2,2", "3,3,3,3", "4,4,4,4"],
        ["1,2,1,1", "2,2,2,2", "3,3,3,3", "4,4,4,4"],
        ["1,3,1,1", "2,2,2,2", "3,3,3,3", "4,4,4,4"],
        ["1,4,1,1", "2,2,2,2", "3,3,3,3", "4,4,4,4"]
      ],
      AValues: [
        [
          [1,1,1,1] , [2,2,2,2] , [3,3,3,3] , [4,4,4,4]
        ],
        [
          [1,1,1,1] , [2,2,2,2] , [3,3,3,3] , [4,4,4,4]
        ],
        [
          [1,1,1,1] , [2,2,2,2] , [3,3,3,3] , [4,4,4,4]
        ],
        [
          [1,1,1,1] , [2,2,2,2] , [3,3,3,3] , [4,4,4,4]
        ],
      ],
      sString: ["1,1,1,1", "2,2,2,2", "3,3,3,3", "4,4,4,4"],
      sValues: [
        [1,1,1,1] , [2,2,2,2] , [3,3,3,3] , [4,4,4,4],
      ],
      e: [4,5] , 
      eString: ["1,1,1,1", "2,2,2,2", "3,3,3,3", "4,4,4,4"],
      eValues: [
        [1,1,1,1] , [2,2,2,2] , [3,3,3,3] , [4,4,4,4],
      ],
      e1String: ["1,1,1,1", "2,2,2,2", "3,3,3,3", "4,4,4,4"],
      e1Values: [
        [1,1,1,1] , [2,2,2,2] , [3,3,3,3] , [4,4,4,4],
      ],
      e2String: "1,2,3,4",
      e2Values: [1,2,3,4],
      rString: ["1,1,1,1", "2,2,2,2", "3,3,3,3", "4,4,4,4"],
      rValues: [
        [1,1,1,1] , [2,2,2,2] , [3,3,3,3] , [4,4,4,4],
      ],
      tValues: [[1,2,3,4],[5,6,7,8],[1,2,3,4],[5,6,7,8]] ,
      uValues: [[],[],[],[]] ,
      vValues: [] ,
      mString: "1, 0, 0, 1" , 
      mValues: [] ,
      mResultValues: [] ,
      outputT: 'outputTtest' ,
      outputU: 'outputUtest' ,
      outputV: 'outputVtest' ,
      outputM: 'outputMtest' ,
      vectorS: '$\\vec{s}$',
      vectorE: '$\\vec{e}$',
      vectorE1: '$\\vec{e_1}$',
      outputE2: '$e_2$',
      vectorR: '$\\vec{r}$',
      showResults: false ,
      showFormula: false ,
      decryptIssue: false ,
      //polRegex: '/[0-9]*(,[0-9]*){3}$/',
    }
  },

  validations() {
    return{
      q: {required, isPrime},
      N: {required, validN},
      d: {required, validD},
      AValues: {required, validArrayLength, validArrayValues, between: between(0, this.q-1)},
    }
  },
  methods: {
    generateAll: function(){
      this.generateQ();
      this.generateAfterQ();
    },
    generateAfterQ: function(){
      this.generateA();
      this.generateS();
      this.generateE();
      this.generateR();
      this.generateE1();
      this.generateE2();
      this.generateM();
    },
    generateQ: function(){
      var randomValue = Math.ceil(20+Math.random()*280);
      if(this.isPrime(randomValue)){
        this.q=randomValue;
        return;
      } 
      else this.generateQ();
    },
    generateA: function(){
      for(let i=0; i<4; i++){
        for(let j=0; j<4; j++){
          for(let k=0; k<this.N; k++){
            this.AValues[i][j][k] = this.modCenterX(Math.floor(Math.random()*(this.q*0.8)+this.q*0.2));
          }
          this.AString[i][j] = this.parsePolToString(this.AValues[i][j]);
        }
      }
    },
    generateS: function(){
      for(let i=0; i<4; i++){
        for(let j=0; j<this.N; j++){
          this.sValues[i][j] = (Math.ceil(Math.random()*5) - 3);
        }
        this.sString[i] = this.parsePolToString(this.sValues[i]);
      }
    },
    generateE: function(){
      for(let i=0; i<4; i++){
        for(let j=0; j<this.N; j++){
          this.eValues[i][j] = (Math.ceil(Math.random()*5) - 3);
        }
        this.eString[i] = this.parsePolToString(this.eValues[i]);
      }
    },
    generateR: function(){
      for(let i=0; i<4; i++){
        for(let j=0; j<this.N; j++){
          this.rValues[i][j] = (Math.ceil(Math.random()*5) - 3);
        }
        this.rString[i] = this.parsePolToString(this.rValues[i]);
      }
    },
    generateE1: function(){
      for(let i=0; i<4; i++){
        for(let j=0; j<this.N; j++){
          this.e1Values[i][j] = (Math.ceil(Math.random()*5) - 3);
        }
        this.e1String[i] = this.parsePolToString(this.e1Values[i]);
      }
    },
    generateE2: function(){
      for(let i=0; i<this.N; i++){
        this.e2Values[i] = (Math.ceil(Math.random()*5) - 3);
      }
      this.e2String = this.parsePolToString(this.e2Values);
    },
    generateM: function(){
      for(let i=0; i<this.N; i++){
        this.mValues[i] = Math.floor(Math.random()*2);
      }
      this.mString = this.parsePolToString(this.mValues);
    },
    calcAll: function(){
      this.calcT();
      this.calcU();
      this.calcV();
      this.calcM();
      this.checkDecryptIssues();
      this.buildTexOutputs();
    },
    buildTexOutputs: function(){
      this.buildOutputT();
      this.buildOutputU();
      this.buildOutputV();
      this.buildOutputM();
    },
    calcT: function(){
      for(let i=0; i<this.d; i++){
        let result = []; //Ist result im richtigen format?
        for(let j=0; j<this.d; j++){
          result = this.addPol( this.mulPolWithModN(this.AValues[i][j],this.sValues[j]) , result);
        }
        result = this.addPol(this.eValues[i], result);
        result = this.modCenterX(result);
        this.tValues[i]= result;
      }
    },
    calcU: function(){
      var erg0 = +(this.a00 * this.r[0] + this.a01 * this.r[1] + this.e1[0]);
      this.updateArray(this.u, 0, this.modX(erg0, this.q));
      var erg1 = +(this.a10 * this.r[0] + this.a11 * this.r[1] + this.e1[1]);
      this.updateArray(this.u, 1, this.modX(erg1, this.q));
    },
    calcV: function(){
      var erg0 = +(this.t[0] * this.r[0] + this.t[1] * this.r[1] + this.e2+ Math.round((this.q/2)*this.m));
      this.v = this.modX(erg0, this.q);
    },
    calcM: function(){
      var comp = this.modX(this.v - (this.s[0]*this.u[0] + this.s[1]* this.u[1]), this.q);
      if(comp>=(this.q*3/4) || comp<=(this.q/4)){ //comp ist im obersten oder untersten Viertel, also um 0 herum 
        this.mResult = 0;
      }
      else if (comp>(this.q/4) && comp<(this.q*3/4)){ // comp ist mittig, also um q/2 herum
        this.mResult = 1;
      }
      else { //Kontrollausgabe für Unzulässige Ergebnisse
        this.mResult = 2; 
      }
    },
    checkDecryptIssues: function(){
      if(this.mResult!=this.m){
        this.decryptIssue=true;
      }
      else{
        this.decryptIssue=false;
      }
    },
    buildOutputT: function(){
      this.outputT= "$\\vec{t} = ";
      if(this.showFormula){
        this.outputT += "A*\\vec{s}+\\vec{e} = ";
      }
      this.outputT +=  "\\begin{pmatrix}";
      this.outputT += this.parsePolToString(this.tValues[0]);
      for(let i=1; i<this.d; i++){
        this.outputT += " \\cr " + this.parsePolToString(this.tValues[i]);
      }
      this.outputT += " \\end{pmatrix}$"
    },
    buildOutputU: function(){
      if(!this.showFormula){
        this.outputU= "$\\vec{u} = \\begin{pmatrix} " + 
        this.u[0] + " \\cr " + this.u[1] +" \\end{pmatrix}$";
      } else {
        this.outputU= "$\\vec{u} = A^{T} * \\vec{r} + \\vec{e_1} =\\begin{pmatrix} " + 
        this.u[0] + " \\cr " + this.u[1] +" \\end{pmatrix}$";
      }
      
    },
    buildOutputV: function(){
      if(!this.showFormula){
        this.outputV= "$v = " + this.v +"$";
      } else {
        this.outputV= "$v = \\vec{t}^T * \\vec{r} + e_2 + \\bigg \\lfloor \\frac{q}{2} * m \\bigg \\rceil =" + this.v +"$";
      }
    },
    buildOutputM: function(){
      if(!this.showFormula){
        this.outputM= "$m = " + this.mResult +"$";
      } else {
        this.outputM= "$m = Dec(v-\\vec{s}^T * \\vec{u}) = \\begin{cases}  0 & \\text{für $-\\frac{q}{4}\\leq (v-\\vec{s}^T * \\vec{u}) \\leq \\frac{q}{4} $} \\newline 1 & \\text{für $\\frac{q}{4}\\lt (v-\\vec{s}^T * \\vec{u}) \\lt \\frac{3q}{4} $} \\end{cases}\\Bigg\\} = " 
        + this.mResult +"$";
      }
    },
    buildPolRegex: function(){
      this.polRegex= "/[0-9]*(,[0-9]*){" + this.d-1 + "}$/"
    },
    parseStringToPol: function(string){
      let array = string.split(',').map(Number);
      array.reverse();
      return array;
    },
    parsePolToString: function(array){
      array.reverse();
      let ret="" + array[0];
      for(let i=1; i<this.N; i++){
        ret += ", " + array[i];
      }
      return ret;
    },
    mulPolWithModN: function(pol1, pol2){
      let ret = [];
      for(let i=0; i<this.N; i++){
        for(let j=0; j<this.N; j++){
          if(i+j<this.N){
            ret[i+j]+=pol1[i]*pol2[j];
          }
          else if(i+j>=this.N){
            ret[i+j-this.N]-=pol1[i]*pol2[j];
          }
        }
      }
      return ret;
    },
    addPol: function(pol1, pol2){
      let ret=[];
      for(let i=0; i<this.N; i++){
        ret[i]=pol1[i]+ pol2[i];
      }
      return ret;
    },
    modX: function(value, mod){
      while(value>=mod){
        value-=mod;
      }
      while(value<0){
        value+=mod;
      }
      return value;
    },
    modCenterX: function(value){
      while(value>(this.q/2)){
        value-=this.q;
      }
      while(value<(-this.q/2)){
        value+=this.q;
      }
      return value;
    },
    isPrime: function(num){
      for(var i = 2; i < num; i++)
        if(num % i === 0) return false;
      return true;
    },
  }

}
</script>



<style scoped>
label{margin-right: 8px;}
input{margin:8px;}

DIV.table 
{
    display:table;
}
FORM.tr, DIV.tr
{
    display:table-row;
}
SPAN.td
{ display:table-cell; width: 10px;}

.minput{
  width: 90px;
}

.vinput{
  width: 70px;
}
input{
  border-color: gray;
}
input:focus{
  outline: none ;
  border-color: rgb(0, 140, 255);
  box-shadow: 0 0 5px rgb(0, 140, 255);
}

.matrix * {/*Zentrierung des Labels der Matrix*/ 
  vertical-align: middle; 
  white-space: nowrap;
  overflow: hidden;
}

.mvalues {/*Klammern um die Matrix*/ 
  border-left: 2px solid #000;
  border-right: 2px solid #000;
  border-top-left-radius: 1em;
  border-top-right-radius: 1em;
  border-bottom-left-radius: 1em;
  border-bottom-right-radius: 1em;
}

.center {
  margin: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}

.error {
  color: red;
}
</style>