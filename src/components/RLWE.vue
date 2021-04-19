<template>
    <ion-content>
      <ion-header >
        <ion-toolbar>
          <ion-buttons slot="start">
            <ion-menu-button menu="start"></ion-menu-button>
          </ion-buttons>
          <ion-title>RLWE</ion-title>
        </ion-toolbar>
      </ion-header>
   
     
      <ion-card>
      <ion-card-header>
        <ion-card-title>Willkommen bei RLWE</ion-card-title>
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
          <ion-card-subtitle>Alice</ion-card-subtitle>
          <ion-grid>
            <ion-row>
              <ion-col>
                <ion-item>
                  <ion-label position="fixed"> N: </ion-label>
                  <ion-input type="number" :value="N" @change="N = +$event.target.value"></ion-input>
                </ion-item>
                <span v-if="msg[1]">{{msg[1]}}</span>
              </ion-col>
              <ion-col>
                <ion-item>
                  <ion-label position="fixed"> p: </ion-label>
                  <ion-input type="number" :value="p" @change="p = +$event.target.value"></ion-input>
                </ion-item>
              </ion-col>
              <ion-col>
                <ion-item>
                  <ion-label position="fixed"> t: </ion-label>
                  <ion-input type="number" :value="t" @change="t = +$event.target.value"></ion-input>
                </ion-item>
              </ion-col>
              <ion-col>
              </ion-col>
            </ion-row>
            <ion-row>
              <ion-col>
                <ion-item>
                  <ion-label position="stacked"> a(X): </ion-label>
                  <ion-input required="true" placeholder="Koeffizienten eintragen: 1,2,1,2"
                    :value="axInput" 
                    @change="axInput = $event.target.value; 
                    valdiatePolynom($event.target.value)">
                  </ion-input>
                </ion-item>
                <span v-if="msg[4]">{{msg[4]}}</span>
              </ion-col>
              <ion-col>
              </ion-col>
            </ion-row>
            <ion-row>
              <ion-col>
                <ion-item>
                  <ion-label position="stacked"> s(X): </ion-label>
                  <ion-input required="true" placeholder="Koeffizienten eintragen: 1,2,1,2"
                  >
                  </ion-input>
                </ion-item>
              </ion-col>
              <ion-col>
                <ion-item>
                  <ion-label position="stacked"> e(X): </ion-label>
                  <ion-input required="true" placeholder="Koeffizienten eintragen: 1,2,1,2"
                  ></ion-input>
                </ion-item>
              </ion-col>
            </ion-row>
          </ion-grid>


          <ion-card-subtitle>Bob</ion-card-subtitle>
          <ion-grid>
            <ion-row>
              <ion-col>
                <ion-item>
                  <ion-label position="stacked"> u(X): </ion-label>
                  <ion-input></ion-input>
                </ion-item>
              </ion-col>
              <ion-col>
                <ion-item>
                  <ion-label position="stacked"> g(X): </ion-label>
                  <ion-input></ion-input>
                </ion-item>
              </ion-col>
            </ion-row>
            <ion-row>
              <ion-col>
                <ion-item>
                  <ion-label position="stacked"> h(X): </ion-label>
                  <ion-input></ion-input>
                </ion-item>
              </ion-col>
              <ion-col>
                <ion-item>
                  <ion-label position="stacked"> msg(X): </ion-label>
                  <ion-input></ion-input>
                </ion-item>
              </ion-col>
            </ion-row>
          </ion-grid>
        </ion-card-header>
        <ion-item>
        </ion-item>
      
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
      N: 2 as number,
      p: 2 as number,
      t: 1 as number,
      msg: [] as String[], //1. N, 2. p, 3. t, 4. ax
      polyRegex: new RegExp("/[1-9](,[0-9]){,3}"),
      axInput: '' as String,
      ax: [] as number[],
    }
  },
  methods: {
    isPrime: function(num: number){
      for(var i = 2; i < num; i++)
        if(num % i === 0) return false;
      return true;
    },
    validateN: function(num: number){
      if(num>350){
        this.msg[1] = 'N is to big';
      }
      else if(!this.isPrime(num)){
        this.msg[1] = 'Not a Prime Number'
      }
      else {
        this.msg[1]= ''
      }
    },
    valdiatePolynom: function(input: string){

      if(!this.polyRegex.test(input)){//Wenn nicht der Regex entsprechend
        this.msg[4]= 'Entspricht nicht der From "..., a2, a1, a0"';
      }
      /*else if(input!==''){//Wenn zu lang
        this.msg[4]= 'Polynom zu lang';
      }*/
      else{
        this.msg[4]= 'Polynom angenommen';
      }
    },
    polyInputToArray: function(input: String){
      this.ax[0] = +input[0]; //Todo
    }
  },
  /*watch: {
    N(value){
      this.N=value;
      this.validateN(value);

    }
  }*/
})
</script>
