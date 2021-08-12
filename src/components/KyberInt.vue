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
                  <ion-label position="fixed"> q: </ion-label>
                  <ion-input type="number" :value="q" 
                  @change="q = +$event.target.value;
                  validateQ($event.target.value)"></ion-input>
                </ion-item>
              </ion-col>
              <ion-col>
                <ion-item>
                  <ion-label position="fixed"> a00: </ion-label>
                  <ion-input type="number" :value="a00" @change="a00 = +$event.target.value"></ion-input>
                </ion-item>
              </ion-col>
              <ion-col>
                <ion-item>
                  <ion-label position="fixed"> a01: </ion-label>
                  <ion-input type="number" :value="a01" @change="a01 = +$event.target.value"></ion-input>
                </ion-item>
              </ion-col>
              <ion-col>
                <ion-item>
                  <ion-label position="fixed"> a10: </ion-label>
                  <ion-input type="number" :value="a10" @change="a10 = +$event.target.value"></ion-input>
                </ion-item>
              </ion-col>
              <ion-col>
                <ion-item>
                  <ion-label position="fixed"> a11: </ion-label>
                  <ion-input type="number" :value="a11" @change="a11 = +$event.target.value"></ion-input>
                </ion-item>            
              </ion-col>
            </ion-row>
            <ion-row>
              <ion-col>
                <ion-label position="fixed"> A= </ion-label>
                
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
                <ion-item>
                  <ion-label position="fixed"> s[0]: </ion-label>
                  <ion-input type="number" :value="s[0]" @change="updateArray(s, 0, +$event.target.value);"></ion-input>
                </ion-item>
              </ion-col>
              <ion-col>
                <ion-item>
                  <ion-label position="fixed"> s[1]: </ion-label>
                  <ion-input type="number" :value="s[1]" @change="updateArray(s, 1, +$event.target.value);" ></ion-input>
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
                <ion-item>
                  <ion-label position="fixed"> e[0]: </ion-label>
                  <ion-input type="number" :value="e[0]" @change="updateArray(e, 0, +$event.target.value);"></ion-input>
                </ion-item>
              </ion-col>
              <ion-col>
                <ion-item>
                  <ion-label position="fixed"> e[1]: </ion-label>
                  <ion-input type="number" :value="e[1]" @change="updateArray(e, 1, +$event.target.value);"></ion-input>
                </ion-item>
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
                  <ion-label position="fixed"> e2: </ion-label>
                  <ion-input type="number" :value="e2" @change="e2 = +$event.target.value;"></ion-input>
                </ion-item>
              </ion-col>
              <ion-col>
              </ion-col>
              <ion-col>
              </ion-col>
            </ion-row>
            <ion-row>
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
              </ion-col>
              <ion-col>
                <ion-item>
                  <ion-label position="fixed"> m: </ion-label>
                  <ion-input type="number" :value="m" @change="m = +$event.target.value;"></ion-input>
                </ion-item>
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
                <vue-mathjax :formula="outputU">
                </vue-mathjax>
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
              t = {{t}}
            </ion-col>
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
            <ion-col>
              v = {{v}}
            </ion-col>
          </ion-row>
        </ion-grid>
        <ion-card-subtitle>Alice</ion-card-subtitle>
        <ion-grid>
          <ion-row>
            <ion-col>
              m = {{mResult}}
            </ion-col>
            <ion-col>
            </ion-col>
          </ion-row>
        </ion-grid>
        </div>
      </ion-card-header> 
    </ion-card>    
  </ion-content>
</template>

<script lang="ts">
import Vue from 'vue';
import { VueMathjax } from "vue-mathjax";
export default Vue.extend({
  components: {
    "vue-mathjax": VueMathjax
  },
  name: 'MainRLWE',
  el: '#kyber2x2',
  props: {
  },
  data: function () {
    return {
      q: 97 as number,
      qCheck: '' as String,
      a: [] as number[],
      a00: 42 as number,
      a01: 43 as number,
      a10: 44 as number,
      a11: 45 as number,
      s: [1,2] as number[],
      e: [4,5] as number[],
      t: [] as number[],
      m: 0 as number,
      mResult: 0 as number,
      r: [1,2] as number[], 
      e1: [3,4] as  number[], 
      e2: 3 as number, 
      u: [] as number[],
      v: 0 as number,
      outputT: 'outputTtest' as String,
      outputU: 'outputUtest' as String,
      showResults: false as boolean,
    }
  },
  
  methods: {
    generateAll: function(){
      this.generateQ();
      this.generateA();
      this.generateS();
      this.generateE();
      this.generateR();
      this.generateE1();
      this.generateE2();
      this.generateM();
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
      var randomValue = Math.ceil(Math.random()*100);
      if(this.isPrime(randomValue)){
        this.q=randomValue;
        return;
      } 
      else this.generateQ();
    },
    validateQ: function(num: number){
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
    validateParam: function(param: number){
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
      this.buildOutputT();
      this.buildOutputU();
    },
    calcT: function(){
      let erg0:number = +(this.a00 * this.s[0] + this.a10 * this.s[1] + this.e[0]);
      this.updateArray(this.t, 0, this.modX(erg0, this.q));
      //this.t[0] = erg0;
      var erg1 = +(this.a01 * this.s[0] + this.a11 * this.s[1] + this.e[1]);
      this.updateArray(this.t, 1, this.modX(erg1, this.q));
    },
    calcU: function(){
      var erg0 = +(this.a00 * this.r[0] + this.a01 * this.r[1] + this.e1[0]);
      //this.u[0] = this.modX(erg0, this.q);
      this.updateArray(this.u, 0, this.modX(erg0, this.q));
      var erg1 = +(this.a10 * this.r[0] + this.a11 * this.r[1] + this.e1[1]);
      this.updateArray(this.u, 1, this.modX(erg1, this.q));
    },
    calcV: function(){
      var erg0 = +(this.t[0] * this.r[0] + this.t[1] * this.r[1] + this.e2+ Math.round((this.q/2)*this.m));
      this.v = this.modX(erg0, this.q);
    },
    calcM: function(){
      var comp: number = this.modX(this.v - (this.s[0]*this.u[0] + this.s[1]* this.u[1]), this.q);
      if(comp>=(this.q*3/4) || comp<=(this.q/4)){ //comp ist im obersten oder untersten viertel, also um 0 herum 
        this.mResult = 0;
      }
      else if (comp>(this.q/4) && comp<(this.q*3/4)){ // comp ist mittig, also um q/2 herum
        this.mResult = 1;
      }
      else {
        this.mResult = 2;
      }
    },
    buildOutputT: function(){
      this.outputT= "$$t = \\begin{pmatrix} " + this.t[0] + " \\cr " + this.t[1] +" \\end{pmatrix}$$";
    },
    buildOutputU: function(){
      this.outputU= "$$u = \\begin{pmatrix} " + this.u[0] + " \\cr " + this.u[1] +" \\end{pmatrix}$$";
    },
    updateArray: function(arr: number[], index: number, value: number){
      Vue.set(arr, index, value);
    },
    modX: function(value:number, mod: number){
      while(value>=mod){
        value-=mod;
      }
      while(value<0){
        value+=mod;
      }
      return value;
    },
    isPrime: function(num: number){
      for(var i = 2; i < num; i++)
        if(num % i === 0) return false;
      return true;
    },
  }

})
</script>
