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
                  <!--IonInputVue v-model="a00" /-->
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
                                <!--input class="minput" type="number" :value="a00" @change="a00 = +$event.target.value"/-->
                                <!-- (funktionierend für normale inputs in matrix)-->
                                <input class="minput" type="number" v-model="$v.a00.$model"/>
                                <span class="error" v-if="!$v.a00.required">Field is required</span>
                              </span>
                              <span class="td">
                                <input class="minput" type="number" :value="a01" @change="a01 = +$event.target.value; $v.a01.$touch();"/>
                                <!--span class="error" v-if="!$v.a01.required">Field is required</span-->
                                <!--span class="error" v-if="!$v.a01.between">Wert zwischen 1 und 100</span-->
                              </span>
                          </div>
                          <div class="tr">
                              <span class="td"><input class="minput" type="number" :value="a10" @change="a10 = +$event.target.value"/></span>
                              <span class="td"><input class="minput" type="number" :value="a11" @change="a11 = +$event.target.value"/></span>
                          </div>
                        </div>
                      </span>
                    </div>
                  </div>
                  <div class="error" v-if="$v.matrixGroup.$anyError">Werte müssen >0 und &lt;q sein.</div>
                  <!--div class="error" v-if="!$v.matrix.nested.required">Matrix ungültig</div-->
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

<script >

import Vue from 'vue';
import { VueMathjax } from "vue-mathjax";
import { required, between, numeric } from 'vuelidate/lib/validators'


export default Vue.extend({
  components: {
    "vue-mathjax": VueMathjax
  },
  name: 'MainTest',
  
  data: function () {
    return {
    wert1: 2 ,
    wert2: 3 ,
    ergebnis: 0 ,
    textest: "$$x = {-b \\pm \\sqrt{b^2-4ac} \\over 2a}.$$" ,
    textest2: "TexTest2" ,
    //matrix: {nested: ''},
    a00: 42 ,
    a01: 43 ,
    a10: 44 ,
    a11: 45 ,
    q: 7 ,
    qCheck: '' ,
    }
  },
  validations: {
    a00: {
      required,
      numeric,
    },
    a01: {
      between: between(1, 100),
      numeric,
    },
    matrixGroup: [ 'a01', 'a00'],
  },
  methods: {
    getQ: function() {
      return this.q;
    },
    addW1W2: function() {
      this.ergebnis= this.wert1 + this.wert2 ;
    },
    buildTexTest: function() {
      this.textest2 = "$$x = \\begin{bmatrix} " + this.wert1 + " \\cr " + this.wert2 +" \\end{bmatrix}.$$";
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
    isPrime: function(num){
      for(var i = 2; i < num; i++)
        if(num % i === 0) return false;
      return true;
    },
    between1andQ: function(value){
      if(value>=1 && value<this.q) 
        {return true;}
      else return false;
    }

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
