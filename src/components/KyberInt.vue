<template>
  <ion-content id="kyber2x2">
      <ion-header>
        <ion-toolbar>
          <ion-buttons slot="start">
            <ion-menu-button menu="start"></ion-menu-button>
          </ion-buttons>
          <ion-title>KYBER (2x2 Integer)</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-card>
        <ion-card-header>
          <ion-card-title>Willkommen bei KYBER (2x2 Integer)</ion-card-title>
        </ion-card-header>

        <ion-card-content>
          Das hier ist die Kyber-Komponente. <br>
          <br>
          Nutzern wird hier die Möglichkeit gegeben, Aufgaben zu (2x2-Integer-Matirx)-Kyber zu generieren,<br>
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
          <ion-card-title>KYBER (2x2 Integer)</ion-card-title>
        </ion-card-header>

        <ion-card-content>
          <ion-card-subtitle>Global gegeben:</ion-card-subtitle>
          <ion-grid>
            <ion-row>
              <ion-col>
                <ion-item>
                  <ion-label> q: </ion-label>
                  <ion-input type="number" :value="q" 
                  @change="q = +$event.target.value; "></ion-input>
                </ion-item>
                <ion-item v-if="!$v.q.isPrime" class="error">
                  q muss eine Primzahl sein
                </ion-item>
              </ion-col>
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
                              <span class="td"> <input class="minput" type="number" :value="a00" @change="a00 = +$event.target.value; $v.a00.$touch();"/></span>
                              <span class="td"> <input class="minput" type="number" :value="a10" @change="a10 = +$event.target.value; $v.a10.$touch();"/></span>
                          </div>
                          <div class="tr">                               
                               <span class="td"><input class="minput" type="number" :value="a01" @change="a01 = +$event.target.value; $v.a01.$touch();"/></span>
                               <span class="td"><input class="minput" type="number" :value="a11" @change="a11 = +$event.target.value; $v.a11.$touch();"/></span>
                           </div>
                        </div>
                      </span>
                     </div>
                   </div>
                   <div class="error" v-if="$v.matrixGroup.$anyError">Werte müssen >0 und &lt;q sein.</div>
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
                              <span class="td"><input class="minput" type="number" :value="s[0]" @change="updateArray(s, 0, +$event.target.value); $v.s.$touch();"/></span>
                          </div>
                          <div class="tr">
                              <span class="td"><input class="minput" type="number" :value="s[1]" @change="updateArray(s, 1, +$event.target.value); $v.s.$touch();"/></span>                               
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
                              <span class="td"><input class="minput" type="number" :value="e[0]" @change="updateArray(e, 0, +$event.target.value);"/></span>
                          </div>
                          <div class="tr">
                               <span class="td"><input class="minput" type="number" :value="e[1]" @change="updateArray(e, 1, +$event.target.value);"/></span>                               
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
                              <span class="td"><input class="minput" type="number" :value="e1[0]" @change="updateArray(e1, 0, +$event.target.value);"/></span>
                          </div>
                          <div class="tr">
                               <span class="td"><input class="minput" type="number" :value="e1[1]" @change="updateArray(e1, 1, +$event.target.value);"/></span>                               
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
                              <span class="td"><input class="minput" type="number" :value="r[0]" @change="updateArray(r, 0, +$event.target.value);"/></span>
                          </div>
                          <div class="tr">
                               <span class="td"><input class="minput" type="number" :value="r[1]" @change="updateArray(r, 1, +$event.target.value);"/></span>                               
                           </div>
                        </div>
                      </span>
                     </div>
                   </div>
                </div>
              </ion-col>
              <!--ion-col>
                <ion-item>
                  <ion-label position="fixed"> e1[0]: </ion-label>
                  <ion-input type="number" :value="e1[0]" @change="updateArray(e1, 0, +$event.target.value);"></ion-input>
                </ion-item>
              </ion-col>
              <ion-col>
                <ion-item>
                  <ion-label position="fixed"> e1[1]: </ion-label>
                  <ion-input type="number" :value="e1[1]" @change="updateArray(e1, 1, +$event.target.value);"></ion-input>
                </ion-item>
              </ion-col>
              <ion-col>
                <ion-item>
                  <ion-label position="fixed"> r[0]: </ion-label>
                  <ion-input type="number" :value="r[0]" @change="updateArray(r, 0, +$event.target.value);"></ion-input>
                </ion-item>
              </ion-col>
              <ion-col>
                <ion-item>
                  <ion-label position="fixed"> r[1]: </ion-label>
                  <ion-input type="number" :value="r[1]" @change="updateArray(r, 1, +$event.target.value);"></ion-input>
                </ion-item>
              </ion-col-->
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
                  <ion-input type="number" :value="e2" @change="e2 = +$event.target.value;"></ion-input>
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
            <ion-row>
              <ion-col>
                <ion-button v-on:click="generateAll(); calcAll()">Generiere Alles</ion-button>
              </ion-col>
              <ion-col>
                <ion-button v-on:click="generateAfterQ(); calcAll()">Generiere nach q</ion-button>
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

function isPrime(num) {
    for(var i = 2; i < num; i++)
        if(num % i === 0) return false;
      return true;
}

export default {
  components: {
    "vue-mathjax": VueMathjax
  },
  name: 'MainRLWE',
  el: '#kyber2x2',
  props: {
  },
  data() {
    return {
      q: 97 ,
      a00: 42 ,
      a01: 43 ,
      a10: 44 ,
      a11: 45 ,
      s: [1,2] ,
      e: [4,5] , 
      e1: [3,4] , 
      e2: 3 ,
      r: [1,2] ,
      t: [] ,
      u: [] ,
      v: 0 ,
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
    }
  },

  validations() {
    return{
      q: {required, isPrime},
      a00: {required, between: between(0, this.q-1) },
      a01: {required, between: between(0, this.q-1) },
      a10: {required, between: between(0, this.q-1) },
      a11: {required, between: between(0, this.q-1) },
      matrixGroup: [ 'a00', 'a01', 'a10', 'a11'],
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
      var randomValue = Math.ceil(20+Math.random()*80);
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
    updateArray: function(arr, index, value){
      Vue.set(arr, index, value);
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
  width: 45px;
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