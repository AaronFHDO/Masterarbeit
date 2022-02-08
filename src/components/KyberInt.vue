<template>
  <ion-content id="kyberInt">
      <ion-header>
        <ion-toolbar>
          <ion-buttons slot="start">
            <ion-menu-button menu="start"></ion-menu-button>
          </ion-buttons>
          <ion-title>KYBER (Integer)</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-card>
        <ion-card-header>
          <ion-card-title>Willkommen bei KYBER (Integer)</ion-card-title>
        </ion-card-header>

        <ion-card-content>
          Das hier ist die Kyber-Komponente. <br>
          <br>
          Nutzern wird hier die Möglichkeit gegeben, Aufgaben zu (Integer-) Kyber zu generieren,<br>
          selbst zu erstellen und zu berechenen. <br>
          Der Ablauf des Verfahrens wird mit der Verschlüsselung durch Bob und der Entschlüsselung durch Alice dargestellt.<br>
          <br>
          Parameter-Voraussetzungen: q muss eine Primzahl sein, d muss 2, 3 oder 4 sein, m muss 0 oder 1 sein, alle anderen Werte müssen zwischen 0 und q-1 liegen<br>
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
          <ion-card-title>KYBER (Integer)</ion-card-title>
          <ion-item-divider></ion-item-divider>
        </ion-card-header>
        
        <ion-card-content>
          <ion-card-subtitle>Global gegeben:</ion-card-subtitle>
          <ion-grid>
            <ion-row>
              <ion-col>
                
                  <ion-label> q: </ion-label>
                  <input class="minput" type="number" v-model.number="q" @focus="$v.q.$touch();"/>
                  <!--ion-item>
                  <ion-input type="number" :value="q" 
                  @change="q = +$event.target.value; "></ion-input>
                </ion-item-->
                <ion-item v-if="!$v.q.isPrime" class="error">
                  q muss eine Primzahl sein
                </ion-item>
              </ion-col>
              <ion-col>
                <ion-label> d: </ion-label>
                <input class="minput" type="number" v-model.number="d" @focus="$v.d.$touch();" @change="updateValidators();"/>
                <!--ion-item>
                  <ion-input type="number" :value="d" 
                  @change="d = +$event.target.value; "></ion-input>
                </ion-item-->
                <ion-item v-if="!$v.d.validD" class="error">
                  d muss 2, 3 oder 4 sein
                </ion-item>
              </ion-col>
              <ion-col>
              </ion-col>
              <ion-col>
              </ion-col>
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
                              <span class="td"> <input class="minput" type="number" v-model.number="A[0][0]" @focus="$v.A.$each[0].$each[0].$touch();"/></span>
                              <span class="td"> <input class="minput" type="number" v-model.number="A[0][1]" @focus="$v.A.$each[0].$each[1].$touch();"/></span>
                              <span v-if="d>=3" class="td"> <input class="minput" type="number" v-model.number="A[0][2]" @focus="$v.A.$each[0].$each[2].$touch();"/></span>
                              <span v-if="d>=4" class="td"> <input class="minput" type="number" v-model.number="A[0][3]" @focus="$v.A.$each[0].$each[3].$touch();"/></span>
                              <!--span v-if="d>=4" class="td"> <input class="minput" type="number" :value="A[0][3]" @change="A[0][3] = +$event.target.value; $v.a10.$touch();"/></span-->
                          </div>
                          <div class="tr">
                              <span class="td"> <input class="minput" type="number" v-model.number="A[1][0]" @focus="$v.A.$each[1].$each[0].$touch();"/></span>
                              <span class="td"> <input class="minput" type="number" v-model.number="A[1][1]" @focus="$v.A.$each[1].$each[1].$touch();"/></span>
                              <span v-if="d>=3" class="td"> <input class="minput" type="number" v-model.number="A[1][2]" @focus="$v.A.$each[1].$each[2].$touch();"/></span>
                              <span v-if="d>=4" class="td"> <input class="minput" type="number" v-model.number="A[1][3]" @focus="$v.A.$each[1].$each[3].$touch();"/></span>
                          </div>
                          <div v-if="d>=3" class="tr">
                              <span class="td"> <input class="minput" type="number" v-model.number="A[2][0]" @focus="$v.A.$each[2].$each[0].$touch();"/></span>
                              <span class="td"> <input class="minput" type="number" v-model.number="A[2][1]" @focus="$v.A.$each[2].$each[1].$touch();"/></span>
                              <span class="td"> <input class="minput" type="number" v-model.number="A[2][2]" @focus="$v.A.$each[2].$each[2].$touch();"/></span>
                              <span v-if="d>=4" class="td"> <input class="minput" type="number" v-model.number="A[2][3]" @focus="$v.A.$each[2].$each[3].$touch();"/></span>
                          </div>
                          <div v-if="d>=4" class="tr">
                              <span class="td"> <input class="minput" type="number" v-model.number="A[3][0]" @focus="$v.A.$each[3].$each[0].$touch();"/></span>
                              <span class="td"> <input class="minput" type="number" v-model.number="A[3][1]" @focus="$v.A.$each[3].$each[1].$touch();"/></span>
                              <span class="td"> <input class="minput" type="number" v-model.number="A[3][2]" @focus="$v.A.$each[3].$each[2].$touch();"/></span>
                              <span class="td"> <input class="minput" type="number" v-model.number="A[3][3]" @focus="$v.A.$each[3].$each[3].$touch();"/></span>
                          </div>
                        </div>
                      </span>
                    </div>
                  </div>
                  <div class="error" v-if="$v.A.$anyError">Werte müssen >0 und &lt;q sein.</div>
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
                              <span class="td"><input class="minput" type="number" v-model.number="s[0]" @focus="$v.s.$each[0].$touch();"/></span>
                          </div>
                          <div class="tr">
                              <span class="td"><input class="minput" type="number" v-model.number="s[1]" @focus="$v.s.$each[1].$touch();"/></span>                               
                           </div>
                           <div v-if="d>=3" class="tr">
                              <span class="td"><input class="minput" type="number" v-model.number="s[2]" @focus="$v.s.$each[2].$touch();"/></span>                               
                           </div>
                           <div v-if="d>=4" class="tr">
                              <span class="td"><input class="minput" type="number" v-model.number="s[3]" @focus="$v.s.$each[3].$touch();"/></span>                               
                           </div>
                           <!--span class="td"><input class="minput" type="number" :value="s[3]" @change="updateArray(s, 3, +$event.target.value); $v.s.$touch();"/></!--span-->
                        </div>
                      </span>
                     </div>
                   </div>
                   <div class="error" v-if="$v.s.$anyError">Werte müssen >0 und &lt;q sein.</div>
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
                              <span class="td"><input class="minput" type="number" v-model.number="e[0]" @focus="$v.e.$each[0].$touch();"/></span>
                          </div>
                          <div class="tr">
                              <span class="td"><input class="minput" type="number" v-model.number="e[1]" @focus="$v.e.$each[1].$touch();"/></span>                               
                           </div>
                           <div v-if="d>=3" class="tr">
                              <span class="td"><input class="minput" type="number" v-model.number="e[2]" @focus="$v.e.$each[2].$touch();"/></span>                               
                           </div>
                           <div v-if="d>=4" class="tr">
                              <span class="td"><input class="minput" type="number" v-model.number="e[3]" @focus="$v.e.$each[3].$touch();"/></span>                               
                           </div>
                        </div>
                      </span>
                     </div>
                   </div>
                   <div class="error" v-if="$v.e.$anyError">Werte müssen >0 und &lt;q sein.</div>
                </div>
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
                              <span class="td"><input class="minput" type="number" v-model.number="e1[0]" @focus="$v.e1.$each[0].$touch();"/></span>
                          </div>
                          <div class="tr">
                              <span class="td"><input class="minput" type="number" v-model.number="e1[1]" @focus="$v.e1.$each[1].$touch();"/></span>                               
                           </div>
                           <div v-if="d>=3" class="tr">
                              <span class="td"><input class="minput" type="number" v-model.number="e1[2]" @focus="$v.e1.$each[2].$touch();"/></span>                               
                           </div>
                           <div v-if="d>=4" class="tr">
                              <span class="td"><input class="minput" type="number" v-model.number="e1[3]" @focus="$v.e1.$each[3].$touch();"/></span>                               
                           </div>
                        </div>
                      </span>
                     </div>
                   </div>
                   <div class="error" v-if="$v.e1.$anyError">Werte müssen >0 und &lt;q sein.</div>
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
                              <span class="td"><input class="minput" type="number" v-model.number="r[0]" @focus="$v.r.$each[0].$touch();"/></span>
                          </div>
                          <div class="tr">
                               <span class="td"><input class="minput" type="number" v-model.number="r[1]" @focus="$v.r.$each[1].$touch();"/></span>                               
                           </div>
                           <div v-if="d>=3" class="tr">
                               <span class="td"><input class="minput" type="number" v-model.number="r[2]" @focus="$v.r.$each[2].$touch();"/></span>                               
                           </div>
                           <div v-if="d>=4" class="tr">
                               <span class="td"><input class="minput" type="number" v-model.number="r[3]" @focus="$v.r.$each[3].$touch();"/></span>                               
                           </div>
                        </div>
                      </span>
                     </div>
                   </div>
                   <div class="error" v-if="$v.r.$anyError">Werte müssen >0 und &lt;q sein.</div>
                </div>
              </ion-col>
              <ion-col>
              </ion-col>
              <ion-col>
              </ion-col>
            </ion-row>
            <ion-row>
              <ion-col>
                <ion-label><vue-mathjax :formula="outputE2"></vue-mathjax> = </ion-label>
                <input class="minput" type="number" v-model.number="e2" @focus="$v.e2.$touch();"/>
                <ion-item v-if="$v.e2.$anyError" class="error">
                  Wert muss >0 und &lt;q sein.
                </ion-item>
                <!--ion-item>
                  
                  <ion-input type="number" :value="e2" @change="e2 = +$event.target.value;"></ion-input>
                </ion-item-->
              </ion-col>
              
              <ion-col>
                <ion-label> m: </ion-label>
                <input class="minput" type="number" v-model.number="m" @focus="$v.m.$touch();"/>
                <ion-item v-if="!$v.m.validM" class="error">
                  m muss 0 oder 1 sein
                </ion-item>
                <!--ion-item>
                  
                  <ion-input type="number" :value="m" @change="m = +$event.target.value;"></ion-input>
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
                <ion-button v-on:click="generateAfterQ(); calcAll(); q += 1; q-= 1;">Generiere ab A</ion-button>
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
        <ion-item-divider></ion-item-divider>
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

function validD(){
  if(this.d == 2 || this.d == 3 || this.d == 4){
    return true;
  }
  return false;
}

function validM(){
  if(this.m == 0 || this.m == 1){
    return true;
  }
  return false;
}



export default {
  components: {
    "vue-mathjax": VueMathjax
  },
  name: 'MainKyberInt',
  el: '#kyberInt',
  data() {
    return {
      q: 97 ,
      d: 2 , 
      A: [
        [1,2,3,4],
        [5,6,7,8],
        [9,10,11,12],
        [13,14,15,16]
      ],
      s: [1,2,3,4] ,
      e: [4,5,6,7] , 
      e1: [3,4,5,6] , 
      e2: 3 ,
      r: [1,2,3,4] ,
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
      d: {required, validD},
      m: {required, validM},
      A: {
        $each:{
          $each:{
            required, between: between(-this.q/2, this.q/2)
          }
        }
      },
      s:{$each:{required, between: between(-this.q/2, this.q/2)}},
      e:{$each:{required, between: between(-this.q/2, this.q/2)}},
      e1:{$each:{required, between: between(-this.q/2, this.q/2)}},
      e2:{required, between: between(-this.q/2, this.q/2)},
      r:{$each:{required, between: between(-this.q/2, this.q/2)}},
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
          this.A[i][j] = this.modCenterX(Math.floor(Math.random()*(this.q*0.8)+this.q*0.2));
        }
      }
    },
    generateS: function(){
      for(let i=0; i<4; i++){
        this.s[i] = Math.ceil(Math.random()*5) - 3;
      }
    },
    generateE: function(){
      for(let i=0; i<4; i++){
        this.e[i] = Math.ceil(Math.random()*5) - 3;
      }
    },
    generateR: function(){
      for(let i=0; i<4; i++){
        this.r[i] = Math.ceil(Math.random()*5) - 3;
      }
    },
    generateE1: function(){
      for(let i=0; i<4; i++){
        this.e1[i] = Math.ceil(Math.random()*5) - 3;
      }
    },
    generateE2: function(){
      this.e2 = Math.ceil(Math.random()*5) - 3;
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
      for(let i=0; i<this.d; i++){
        let result = 0;
        for(let j=0; j<this.d; j++){
          result += this.A[i][j] * this.s[j];
        }
        result += this.e[i];
        result = this.modCenterX(result);
        this.t[i]= result;
      }
    },
    calcU: function(){
      for(let i=0; i<this.d; i++){
        let result = 0;
        for(let j=0; j<this.d; j++){
          result += this.A[j][i] * this.r[j];
        }
        result += this.e1[i];
        result = this.modCenterX(result);
        this.u[i]= result;
      }
    },
    calcV: function(){
      let result = 0;
      for(let i=0; i<this.d; i++){
        result += this.t[i] * this.r[i];
      }
      result += this.e2;
      result += Math.round((this.q/2)*this.m)
      result = this.modCenterX(result);
      this.v = result;
    },
    calcM: function(){
      let result = 0;
      for(let i=0; i<this.d; i++){
        result += this.s[i] * this.u[i];
      }
      result = this.modCenterX(this.v-result)
      
      if (result>(-this.q/4) && result<(this.q*1/4)){ //comp ist im obersten oder untersten Viertel, also um 0 herum 
        this.mResult = 0;
      }
      else if(result>=(this.q*1/4) || result<=(-this.q/4)){ // comp ist mittig, also um q/2 herum
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
      this.outputT +=  "\\begin{pmatrix}" + this.t[0];
      for(let i=1; i<this.d; i++){
        this.outputT += " \\cr " + this.t[i];
      }
      this.outputT += " \\end{pmatrix}$"
      /*if(!this.showFormula){
        this.outputT= "$\\vec{t} = \\begin{pmatrix} " + this.t[0] + " \\cr " + this.t[1] +" \\end{pmatrix}$";
      } else {
        this.outputT= "$\\vec{t} = A*\\vec{s}+\\vec{e} = \\begin{pmatrix} " + this.t[0] + " \\cr " + this.t[1] + " \\end{pmatrix}$";
      }*/
    },
    buildOutputU: function(){
      this.outputU= "$\\vec{u} = ";
      if(this.showFormula){
        this.outputU += "A^{T} * \\vec{r} + \\vec{e_1} ";
      }
      this.outputU +=  "\\begin{pmatrix}" + this.u[0];
      for(let i=1; i<this.d; i++){
        this.outputU += " \\cr " + this.u[i];
      }
      this.outputU += " \\end{pmatrix}$"
    },
    buildOutputV: function(){
      this.outputV= "$v = ";
      if(this.showFormula){
        this.outputV += "\\vec{t}^T * \\vec{r} + e_2 + \\bigg \\lfloor \\frac{q}{2} * m \\bigg \\rceil = ";
      }
      this.outputV += this.v +"$";
    },
    buildOutputM: function(){
      this.outputM= "$m = ";
      if(this.showFormula){
        this.outputM += "Dec(v-\\vec{s}^T * \\vec{u}) = \\begin{cases}  0 & \\text{für $-\\frac{q}{4}\\leq (v-\\vec{s}^T * \\vec{u}) \\leq \\frac{q}{4} $} \\newline 1 & \\text{für $\\frac{q}{4}\\lt (v-\\vec{s}^T * \\vec{u}) \\lt \\frac{3q}{4} $} \\end{cases}\\Bigg\\} = ";
      }
      this.outputM += this.mResult +"$";
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
    updateValidators: function(){
      this.$v.$reset();
      this.$v.q.$touch(); this.$v.d.$touch(); this.$v.e2.$touch(); this.$v.m.$touch();
      for(let i = 0; i < this.d; i++){
        for(let j = 0; j < this.d; j++){
          this.$v.A.$each[i].$each[j].$touch();
        }
        this.$v.s.$each[i].$touch();
        this.$v.e.$each[i].$touch();
        this.$v.e1.$each[i].$touch();
        this.$v.r.$each[i].$touch();
      }  
    },
  },
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