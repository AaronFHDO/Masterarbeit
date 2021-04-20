<template>
  <ion-content>
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
        Das hier ist die Startseite meines Vue/Ionic-Prototypen der später für mein Masterseminar, <br>
        meine F&E-Arbeit und meine Masterarbeit verwendet werden soll. <br>
        <br>
        Nutzern wird hier die Möglichkeit gegeben, sich mit den Grundlage zu Ring-based Learning With Errors (RLWE) und <br>
        dem Postquanten-Verschlüsselungsalgorithmus NewHope auseinander zu setzen.<br>
      </ion-card-content>
    </ion-card>

    <ion-card>
      
        <ion-card-header>     
          <ion-card-title>KYBER (2x2 Integer)</ion-card-title>
          <ion-card-subtitle>Global gegeben:</ion-card-subtitle>
          <ion-grid>
            <ion-row>
              <ion-col>
                <ion-item>
                  <ion-label position="fixed"> q: </ion-label>
                  <ion-input type="number" :value="q" @change="q = +$event.target.value"></ion-input>
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
          </ion-grid>

          <ion-card-subtitle>Alice</ion-card-subtitle>
          <ion-grid>
            <ion-row>
              <ion-col>
                <ion-item>
                  <ion-label position="fixed"> s[0]: </ion-label>
                  <ion-input type="number" :value="s[0]" @change="s[0] = +$event.target.value"></ion-input>
                </ion-item>
              </ion-col>
              <ion-col>
                <ion-item>
                  <ion-label position="fixed"> s[1]: </ion-label>
                  <ion-input type="number" :value="s[1]" @change="s[1] = +$event.target.value"></ion-input>
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
                  <ion-input type="number" :value="e[0]" @change="e[0] = +$event.target.value"></ion-input>
                </ion-item>
              </ion-col>
              <ion-col>
                <ion-item>
                  <ion-label position="fixed"> e[1]: </ion-label>
                  <ion-input type="number" :value="e[1]" @change="e[1] = +$event.target.value"></ion-input>
                </ion-item>
              </ion-col>
              <ion-col>
                <button v-on:click="calcT">Berechne t</button>
                <div>Ergebnis: {{t}} </div>
              </ion-col>
              <ion-col>
              </ion-col>
              <ion-col>
              </ion-col>
            </ion-row>
          </ion-grid>

          <ion-card-subtitle>Bob</ion-card-subtitle>
          <ion-grid>


          </ion-grid>
        </ion-card-header> 
    </ion-card>       
  </ion-content>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  name: 'MainRLWE',
  props: {
  },
  data: function () {
    return {
      q: 97 as number,
      a: [] as number[],
      a00: 42 as number,
      a01: 43 as number,
      a10: 44 as number,
      a11: 45 as number,
      s: [1,2] as number[],
      e: [4,5] as number[],
      t: [] as number[],
      m: 0 as number,
      r: [1,2] as number[], 
      e1: [3,4] as  number[], 
      e2: 0 as number, 
      u: [] as number[],
      v: 0 as number,
    }
  },
  methods: {
    isPrime: function(num: number){
      for(var i = 2; i < num; i++)
        if(num % i === 0) return false;
      return true;
    },
    calcT: function(){
      var erg0 = +(this.a00 * this.s[0] + this.a10 * this.s[1] + this.e[0]);
      this.t[0] = this.modX(erg0, this.q);
      var erg1 = +(this.a01 * this.s[0] + this.a11 * this.s[1] + this.e[1]);
      this.t[1] = this.modX(erg1, this.q);
    },
    calcU: function(){
      var erg0 = +(this.a00 * this.r[0] + this.a01 * this.r[1] + this.e1[0]);
      this.u[0] = this.modX(erg0, this.q);
      var erg1 = +(this.a10 * this.r[0] + this.a11 * this.r[1] + this.e1[1]);
      this.u[1] = this.modX(erg1, this.q);
    },
    calcv: function(){
      


    },
    modX: function(value:number, mod: number){
      while(value>mod){
        value-=mod;
      }
      while(value<0){
        value+=mod;
      }
      return value;
    }
  }
})
</script>
