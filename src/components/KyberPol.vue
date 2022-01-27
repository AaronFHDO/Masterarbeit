<template>
  <ion-content id="kyber2x2">
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
                              <span class="td"> <input class="minput" :value="a00String" @change="a00String = $event.target.value; a00Values = parseStringToPol(a00String); $v.a00Values.$touch();"/></span>
                              <span class="td"> <input class="minput" :value="a10String" @change="a10String = $event.target.value; a10Values = parseStringToPol(a10String); $v.a10.$touch();"/></span>
                          </div>
                          <div class="tr">                               
                               <span class="td"><input class="minput" :value="a01String" @change="a01String = $event.target.value; a01Values = parseStringToPol(a01String); $v.a01.$touch();"/></span>
                               <span class="td"><input class="minput" :value="a11String" @change="a11String = $event.target.value; a11Values = parseStringToPol(a11String); $v.a11.$touch();"/></span>
                           </div>
                        </div>
                      </span>
                     </div>
                   </div>
                   <div class="error" v-if="!$v.a00Values.validArrayLength">Anzahl Elemente von a00 stimmt nicht mit d überein.</div>
                   <div class="error" v-if="!$v.a00Values.validArrayValues">Nicht alle Werte der Elemente von a00 sind gültig.</div>
                   <div class="error" v-if="!$v.a10Values.validArrayLength">Anzahl Elemente von a10 stimmt nicht mit d überein.</div>
                   <div class="error" v-if="!$v.a10Values.validArrayValues">Nicht alle Werte der Elemente von a10 sind gültig.</div>
                   <div class="error" v-if="!$v.a01Values.validArrayLength">Anzahl Elemente von a01 stimmt nicht mit d überein.</div>
                   <div class="error" v-if="!$v.a01Values.validArrayValues">Nicht alle Werte der Elemente von a01 sind gültig.</div>
                   <div class="error" v-if="!$v.a11Values.validArrayLength">Anzahl Elemente von a11 stimmt nicht mit d überein.</div>
                   <div class="error" v-if="!$v.a11Values.validArrayValues">Nicht alle Werte der Elemente von a11 sind gültig.</div>
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
                              <span class="td"><input class="vinput" :value="s0String" @change="s0String = $event.target.value; s0Values = parseStringToPol(s0String); $v.s.$touch();"/></span>
                          </div>
                          <div class="tr">
                              <span class="td"><input class="vinput" :value="s1String" @change="s1String = $event.target.value; s1Values = parseStringToPol(s1String); $v.s.$touch();"/></span>                               
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
                              <span class="td"><input class="vinput" :value="e_0String" @change="e_0String = $event.target.value; e_0Values = parseStringToPol(e_0String);"/></span>
                          </div>
                          <div class="tr">
                               <span class="td"><input class="vinput" :value="e_1String" @change="e_1String = $event.target.value; e_1Values = parseStringToPol(e_1String);"/></span>                               
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
                              <span class="td"><input class="vinput" :value="e1_0String" @change="e1_0String = $event.target.value; e1_0Values = parseStringToPol(e1_0String);"/></span>
                          </div>
                          <div class="tr">
                               <span class="td"><input class="vinput" :value="e1_1String" @change="e1_1String = $event.target.value; e1_1Values = parseStringToPol(e1_1String);"/></span>                               
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
                              <span class="td"><input class="vinput" :value="r_0String" @change="r_0String = $event.target.value; r_0Values = parseStringToPol(r_0String);"/></span>
                          </div>
                          <div class="tr">
                               <span class="td"><input class="vinput" :value="r_1String" @change="r_1String = $event.target.value; r_1Values = parseStringToPol(r_1String);"/></span>                               
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
                <ion-item>
                  <ion-label> e2= </ion-label>
                  <ion-input :value="e2String" @change="e2String = $event.target.value; e2Values = parseStringToPol(e2String);"></ion-input>
                </ion-item>
              </ion-col>
              
              <ion-col>
                <ion-item>
                  <ion-label> m: </ion-label>
                  <ion-input type="number" :value="m" @change="m = +$event.target.value;"></ion-input>
                </ion-item>
              </ion-col>
              <ion-col>
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
                <ion-button v-on:click="generateAfterQ(); calcAll()">Generiere nach q und N</ion-button>
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
import Vue from 'vue';
import { VueMathjax } from "vue-mathjax";
import { required, between } from 'vuelidate/lib/validators'
//import { helpers } from 'vuelidate/lib/validators'

function isPrime(num) {
    for(var i = 2; i < num; i++)
        if(num % i === 0) return false;
      return true;
}

function validN(){
  if(this.N == 2 || this.N==4 || this.N==8){
    return true;
  }
  else{
    return false;
  }
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
  el: '#kyber2x2',
  props: {
  },
  data() {
    return {
      q: 97 ,
      N: 4 ,
      d: 2 ,
      a00: 42,
      a01: 43 ,
      a10: 44 ,
      a11: 45 ,
      a00String: "1,1,1,1" ,
      a00Values: [1,1,1,1], //a00[0]= 1x^0, 
      a01String: "2,2,2,2" ,
      a01Values: [2,2,2,2],
      a10String: "3,3,3,3" ,
      a10Values: [3,3,3,3],
      a11String: "4,4,4,4" ,
      a11Values: [4,4,4,4],
      AString: [
        ["1,1,1,1", "2,2,2,2", "3,3,3,3", "4,4,4,4"],
        ["1,2,1,1", "2,2,2,2", "3,3,3,3", "4,4,4,4"],
        ["1,3,1,1", "2,2,2,2", "3,3,3,3", "4,4,4,4"],
        ["1,4,1,1", "2,2,2,2", "3,3,3,3", "4,4,4,4"]
      ],
      AValues: [
        [
          [1,1,1,1] , [2,2,2,2] , [3,3,3,3] , 4,4,4,4
        ],
        [

        ],
        [

        ],
        [

        ],
      ],
      s: [1,2] ,
      s0String: "1,2,3,4",
      s0Values: [1,2,3,4],
      s1String: "1,2,3,4",
      s1Values: [1,2,3,4],
      e: [4,5] , 
      e_0String: "1,2,3,4",
      e_0Values: [1,2,3,4],
      e_1String: "1,2,3,4",
      e_1Values: [1,2,3,4],
      e1: [3,4] ,
      e1_0String: "1,2,3,4",
      e1_0Values: [1,2,3,4],
      e1_1String: "1,2,3,4",
      e1_1Values: [1,2,3,4], 
      e2: 3 ,
      e2String: "1,2,3,4",
      e2Values: [1,2,3,4],
      r: [1,2] ,
      r_0String: "1,2,3,4",
      r_0Values: [1,2,3,4],
      r_1String: "1,2,3,4",
      r_1Values: [1,2,3,4],
      t: [] ,
      t_0Values: [] ,
      t_1Values: [] ,
      u: [] ,
      u_0Values: [] ,
      u_1Values: [] ,
      v: 0 ,
      vValues: [] ,
      m: 0 ,
      mResult: 0 ,
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
      a00: {required, between: between(0, this.q-1) },
      a10: {required, between: between(0, this.q-1) },
      a01: {required, between: between(0, this.q-1) },
      a11: {required, between: between(0, this.q-1) },
      a00Values: {required, validArrayLength, validArrayValues},
      a10Values: {required, validArrayLength, validArrayValues},
      a01Values: {required, validArrayLength, validArrayValues},
      a11Values: {required, validArrayLength, validArrayValues},
      matrixGroup: [ 'a00Values', 'a01Values', 'a10Values', 'a11Values'],
      /*s: {$each: between(0, this.q-1)}*/
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
    validateQ: function(num){
      if(num>100){
        //q ist größer als 350 (unerwünscht)
        this.qCheck='q ist größer als 350 (unerwünscht)';
      }
      else if(!this.isPrime(num)){
        //q muss eine Primzahl sein
        this.qCheck='q muss eine Primzahl sein';
      }
      else {
        //q ist okay 
        this.qCheck='';
      }
    },
    validateParam: function(param){
      if(param<0){
        //param muss positiv sein
      } 
      else if(param>=this.q){
        //param muss kleiner als q sein 
      }
      else {
        //param ist okay
      }
    },
    generateA: function(){
      this.a00= Math.floor(Math.random()*(this.q*0.8)+this.q*0.2);
      this.a01= Math.floor(Math.random()*(this.q*0.8)+this.q*0.2);
      this.a10= Math.floor(Math.random()*(this.q*0.8)+this.q*0.2);
      this.a11= Math.floor(Math.random()*(this.q*0.8)+this.q*0.2);
    },
    generateS: function(){
      this.updateArray(this.s, 0, Math.ceil(Math.random()*4));
      this.updateArray(this.s, 1, Math.ceil(Math.random()*4));
    },
    generateE: function(){
      this.updateArray(this.e, 0, Math.ceil(Math.random()*4));
      this.updateArray(this.e, 1, Math.ceil(Math.random()*4));
    },
    generateR: function(){
      this.updateArray(this.r, 0, Math.ceil(Math.random()*4));
      this.updateArray(this.r, 1, Math.ceil(Math.random()*4));
    },
    generateE1: function(){
      this.updateArray(this.e1, 0, Math.ceil(Math.random()*4));
      this.updateArray(this.e1, 1, Math.ceil(Math.random()*4));
    },
    generateE2: function(){
      this.e2 = Math.ceil(Math.random()*4);
    },
    generateM: function(){
      this.m = Math.floor(Math.random()*2);
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
      let erg0 = +(this.a00 * this.s[0] + this.a10 * this.s[1] + this.e[0]);
      this.updateArray(this.t, 0, this.modX(erg0, this.q));
      var erg1 = +(this.a01 * this.s[0] + this.a11 * this.s[1] + this.e[1]);
      this.updateArray(this.t, 1, this.modX(erg1, this.q));
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
      if(!this.showFormula){
        this.outputT= "$\\vec{t} = \\begin{pmatrix} " + this.t[0] + " \\cr " + this.t[1] +" \\end{pmatrix}$";
      } else {
        this.outputT= "$\\vec{t} = A*\\vec{s}+\\vec{e} = \\begin{pmatrix} " + this.t[0] + " \\cr " + this.t[1] + " \\end{pmatrix}$";
      }
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
      return array;
    },
    updateArray: function(arr, index, value){
      Vue.set(arr, index, value);
    },
    mulPolWithModD: function(pol1, pol2){
      let result = [];
      for(let i=0; i<this.d; i++){
        for(let j=0; j<this.d; j++){
          if(i+j<this.d){
            result[i+j]+=pol1[i]*pol2[j];
          }
          else if(i+j>=this.d){
            result[i+j-this.d]-=pol1[i]*pol2[j];
          }
        }
      }
      return result;
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
  width: 70px;
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