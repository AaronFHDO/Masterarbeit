<template>
<!-- <ion-app> -->
  <ion-content>
    <ion-header>
      <ion-toolbar>    
        <ion-buttons slot="start">
            <ion-menu-button menu="start"></ion-menu-button>
        </ion-buttons>
        <ion-title>Test</ion-title>
      </ion-toolbar>
    </ion-header>
  
  
    <ion-card>
      <ion-card-header>
        <ion-card-title>Willkommen bei Test</ion-card-title>
      </ion-card-header>

      <ion-card-content>
        Das hier ist die Testseite meines Vue/Ionic-Prototypen der später für mein Masterseminar, <br>
        meine F&E-Arbeit und meine Masterarbeit verwendet werden soll. <br>
        <br>
        In diesem Bereich werden bestimmte Komponenten der Webseite getestet, bevor sie auf den tatsächlichen Seiten verwendet werden. 
        <br>
      </ion-card-content>
    </ion-card>

    <ion-card>
      <ion-card-header>
        <ion-card-title>Addiere mir etwas</ion-card-title>
      </ion-card-header>
      <ion-card-content>
        <ion-label position="floating">Wert 1</ion-label>
        <!--ion-input maxlength="5" inputmode="numeric" color="primary" backgroundcolor="red" type="number" ></ion-input-->
        <ion-input :value="wert1" @change="wert1 = +$event.target.value" type="number" placeholder="Wert 1 eintragen"></ion-input>
        <br>
        <ion-label position="floating">Wert 2</ion-label>
        <ion-input :value="wert2" @change="wert2 = +$event.target.value" type="number" placeholder="Wert 2 eintragen"></ion-input>
        <button v-on:click="addW1W2">Addiere</button>
        <div>Ergebnis: {{ergebnis}} </div>
      </ion-card-content>
    </ion-card>

    <ion-card>
      <ion-card-header>
        <ion-card-title>Willkommen bei Test</ion-card-title>
      </ion-card-header>

      <ion-card-content>
        <vue-mathjax :formula="textest"> 
        </vue-mathjax>
        <vue-mathjax :formula="textest2"> 
        </vue-mathjax>
        
        
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
                  @change="q = +$event.target.value; validateQ($event.target.value)"
                  ></ion-input>
                  
                  
                  
                </ion-item>
              </ion-col>
              <ion-col>
                <ion-item>
                  <ion-label position="fixed"> q: </ion-label>
                  <IonInputVue v-model="a00" />
                </ion-item>
              </ion-col>
              <ion-col>
                <div class="matrix">
                  <div class="table">
                    <div class="tr">
                      <span class="td">
                        <label for="mvalues" position="fixed"> A= </label>
                      </span>
                      <span class="td">
                        <div class="table mvalues" id="mvalues">
                          <div class="tr">
                              <span class="td">
                                <div>
                                  <input class="minput" type="number" :value="a00" @change="a00 = +$event.target.value"/>
                                  <!--div class="error" v-if="!$v.a00.required">Field is required</div-->
                                </div>
                              </span>
                              <span class="td">
                                <div>
                                  <input class="minput" type="number" v-model="state.a01"/>
                                  <!--div class="error" v-if="!$v.a01.required">Field is required</div-->
                                  <!--span v-if="$v.a01.$error">
                                    {{$v.a01.$errors[0].$message}}
                                  </span-->
                                </div>
                              </span>
                          </div>
                          <div class="tr">
                              <span class="td"><input class="minput" type="number" :value="a00" @change="a00 = +$event.target.value"/></span>
                              <span class="td"><input class="minput" type="number" :value="a01" @change="a01 = +$event.target.value"/></span>
                          </div>
                        </div>
                      </span>
                    </div>
                  </div>
                </div>
              </ion-col>
              <ion-col>  
              </ion-col>
            </ion-row>
          </ion-grid>
        </ion-card-content>
      </ion-card>

  </ion-content>
  <!-- </ion-app> -->
</template>

<script lang="ts" >

import Vue from 'vue';
import { VueMathjax } from "vue-mathjax";
import useVuelidate from '@vuelidate/core'
import { required } from '@vuelidate/validators'
import {reactive, computed} from '@vue/composition-api'

//const mustBePrime = (value) => value.isPrime(this.q);

export default Vue.extend({
  components: {
    "vue-mathjax": VueMathjax
  },
  name: 'MainTest',
  
 setup () {//Vuelidate 2 Setup
    const state = reactive({
      a00: 42 as number,
      a01: 45 as number,
      q: 7 as number,
      qCheck: '' as String,
    })

    const rules = computed(() => {
      return {
        a00: {
          required,
        },
      }
      
    })
    
    const v$ = useVuelidate(rules, state)

    return {state, v$};
  },
  data: function () {
    return {
    wert1: 2 as number,
    wert2: 3 as number,
    ergebnis: 0 as number,
    textest: "$$x = {-b \\pm \\sqrt{b^2-4ac} \\over 2a}.$$" as String,
    textest2: "TexTest2" as String,
    a00: 42 as number,
    a01: 43 as number,
    q: 7 as number,
    qCheck: '' as String,
    }
  },
  methods: {
    addW1W2: function() {
      this.ergebnis= this.wert1 + this.wert2 ;
    },
    buildTexTest: function() {
      this.textest2 = "$$x = \\begin{bmatrix} " + this.wert1 + " \\cr " + this.wert2 +" \\end{bmatrix}.$$";
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
    isPrime: function(num: number){
      for(var i = 2; i < num; i++)
        if(num % i === 0) return false;
      return true;
    },

  },
  beforeMount() {
    this.buildTexTest();
  },

});
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

.matrix * {
  vertical-align: middle;
}

.mvalues {
  border-left: 2px solid #000;
  border-right: 2px solid #000;
  border-top-left-radius: 1em;
  border-top-right-radius: 1em;
  border-bottom-left-radius: 1em;
  border-bottom-right-radius: 1em;
}

.error {
  color: red;
}

</style>
