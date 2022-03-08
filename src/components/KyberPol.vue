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
        Das hier ist die Kyber-Komponente. <br />
        <br />
        Nutzern wird hier die Möglichkeit gegeben, Aufgaben zu (Polynom-) Kyber
        zu generieren,<br />
        selbst zu erstellen und zu berechenen. <br />
        Der Ablauf des Verfahrens wird mit der Verschlüsselung durch Bob und der
        Entschlüsselung durch Alice dargestellt.<br />
        <br />
        Parameter-Voraussetzungen: q muss eine Primzahl sein, alle anderen Werte
        müssen zwischen 0 und q-1 liegen, m muss 0 oder 1 sein <br />
        Parameter-Empfehlungen: q sollte mind. 20 sein, in A sollten große Werte
        (mind. 0,2q) und in
        <vue-mathjax :formula="vectorS"></vue-mathjax>,
        <vue-mathjax :formula="vectorE"></vue-mathjax>,
        <vue-mathjax :formula="vectorE1"></vue-mathjax>,
        <vue-mathjax :formula="outputE2"></vue-mathjax> und
        <vue-mathjax :formula="vectorR"></vue-mathjax>
        kleine Werte (1-5) verwendet werden<br />
        Alle Voraussetzungen und Empfehlungen sind bei der automatischen
        Generierung eingehalten. <br />
        Es können bei der Entschlüsselung dennoch Fehler auftreten, da mit
        kleinen Parametern gerechnet wird. <br />
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
              <ion-label> q =</ion-label>
              <input class="ninput" type="number" v-model.number="q" />
              <ion-item v-if="!$v.q.isPrime" class="error">
                q muss eine Primzahl sein
              </ion-item>
            </ion-col>
            <ion-col>
              <ion-label> N = </ion-label>
              <select class="ninput" v-model.number="N" @change="generateAfterQ(); N += 1, N-=1;">
                <option value="2">2</option>              
                <option value="4">4</option>
                <option value="8">8</option>
              </select>
            </ion-col>
            <ion-col>
              <ion-label> d = </ion-label>
              <select class="ninput" v-model.number="d">
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
              </select>
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
                          <span class="td">
                            <input
                              class="minput"
                              v-model="AString[0][0]"
                          /></span>
                          <span class="td">
                            <input
                              class="minput"
                              v-model="AString[0][1]"
                          /></span>
                          <span v-if="d >= 3" class="td">
                            <input
                              class="minput"
                              v-model="AString[0][2]"
                          /></span>
                          <span v-if="d >= 4" class="td">
                            <input
                              class="minput"
                              v-model="AString[0][3]"
                          /></span>
                        </div>
                        <div class="tr">
                          <span class="td">
                            <input
                              class="minput"
                              v-model="AString[1][0]"
                          /></span>
                          <span class="td">
                            <input
                              class="minput"
                              v-model="AString[1][1]"
                          /></span>
                          <span v-if="d >= 3" class="td">
                            <input
                              class="minput"
                              v-model="AString[1][2]"
                          /></span>
                          <span v-if="d >= 4" class="td">
                            <input
                              class="minput"
                              v-model="AString[1][3]"
                          /></span>
                        </div>
                        <div v-if="d >= 3" class="tr">
                          <span class="td">
                            <input
                              class="minput"
                              v-model="AString[2][0]"
                          /></span>
                          <span class="td">
                            <input
                              class="minput"
                              v-model="AString[2][1]"
                          /></span>
                          <span class="td">
                            <input
                              class="minput"
                              v-model="AString[2][2]"
                          /></span>
                          <span v-if="d >= 4" class="td">
                            <input
                              class="minput"
                              v-model="AString[2][3]"
                          /></span>
                        </div>
                        <div v-if="d >= 4" class="tr">
                          <span class="td">
                            <input
                              class="minput"
                              v-model="AString[3][0]"
                          /></span>
                          <span class="td">
                            <input
                              class="minput"
                              v-model="AString[3][1]"
                          /></span>
                          <span class="td">
                            <input
                              class="minput"
                              v-model="AString[3][2]"
                          /></span>
                          <span class="td">
                            <input
                              class="minput"
                              v-model="AString[3][3]"
                          /></span>
                        </div>
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
                      <label for="mvalues" position="fixed">
                        <vue-mathjax :formula="vectorS"></vue-mathjax> =
                      </label>
                    </span>
                    <span class="td">
                      <div class="table mvalues" id="mvalues">
                        <div class="tr">
                          <span class="td">
                            <input
                              class="vinput"
                              v-model="sString[0]"                              
                          /></span>
                        </div>
                        <div class="tr">
                          <span class="td">
                            <input
                              class="vinput"
                              v-model="sString[1]"
                          /></span>
                        </div>
                        <div v-if="d >= 3" class="tr">
                          <span class="td">
                            <input
                              class="vinput"
                              v-model="sString[2]"
                          /></span>
                        </div>
                        <div v-if="d >= 4" class="tr">
                          <span class="td">
                            <input
                              class="vinput"
                              v-model="sString[3]"
                          /></span>                          
                        </div>
                      </div>
                    </span>  
                    <span class="td">
                      <label for="mvalues" position="fixed">
                        =
                      </label>
                    </span>
                    <span class="td">
                      <div class="table mvalues" id="mvalues">
                        <div class="tr">
                          <span class="td">
                            <div class="polOutput">
                              {{sPolOutput[0]}}
                            </div>
                          </span>
                        </div>
                        <div class="tr">
                          <span class="td">
                            <div class="polOutput">
                              {{sPolOutput[1]}}
                            </div>
                          </span>
                        </div>
                        <div v-if="d >= 3" class="tr">
                          <span class="td">
                            <div class="polOutput">
                              {{sPolOutput[2]}}
                            </div>
                          </span>
                        </div>
                        <div v-if="d >= 4" class="tr">
                          <span class="td">
                            <div class="polOutput">
                              {{sPolOutput[3]}}
                            </div>
                          </span>
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
                      <label for="mvalues" position="fixed">
                        <vue-mathjax :formula="vectorE"></vue-mathjax> =
                      </label>
                    </span>
                    <span class="td">
                      <div class="table mvalues" id="mvalues">
                        <div class="tr">
                          <span class="td">
                            <input
                              class="vinput"
                              v-model="eString[0]"
                          /></span>
                        </div>
                        <div class="tr">
                          <span class="td">
                            <input
                              class="vinput"
                              v-model="eString[1]"
                          /></span>
                        </div>
                        <div v-if="d >= 3" class="tr">
                          <span class="td">
                            <input
                              class="vinput"
                              v-model="eString[2]"
                          /></span>
                        </div>
                        <div v-if="d >= 4" class="tr">
                          <span class="td">
                            <input
                              class="vinput"
                              v-model="eString[3]"
                          /></span>
                        </div>
                      </div>
                    </span>
                    <span class="td">
                      <label for="mvalues" position="fixed">
                        =
                      </label>
                    </span>
                    <span class="td">
                      <div class="table mvalues" id="mvalues">
                        <div class="tr">
                          <span class="td">
                            <div class="polOutput">
                              {{ePolOutput[0]}}
                            </div>
                          </span>
                        </div>
                        <div class="tr">
                          <span class="td">
                            <div class="polOutput">
                              {{ePolOutput[1]}}
                            </div>
                          </span>
                        </div>
                        <div v-if="d >= 3" class="tr">
                          <span class="td">
                            <div class="polOutput">
                              {{ePolOutput[2]}}
                            </div>
                          </span>
                        </div>
                        <div v-if="d >= 4" class="tr">
                          <span class="td">
                            <div class="polOutput">
                              {{ePolOutput[3]}}
                            </div>
                          </span>
                        </div>
                      </div>
                    </span> 
                  </div>
                </div>
              </div>
            </ion-col>
            <ion-col> </ion-col>
            <ion-col> </ion-col>
            <ion-col> </ion-col>
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
                      <label for="mvalues" position="fixed">
                        <vue-mathjax :formula="vectorE1"></vue-mathjax> =
                      </label>
                    </span>
                    <span class="td">
                      <div class="table mvalues" id="mvalues">
                        <div class="tr">
                          <span class="td">
                            <input
                              class="vinput"
                              v-model="e1String[0]"
                          /></span>
                        </div>
                        <div class="tr">
                          <span class="td">
                            <input
                              class="vinput"
                              v-model="e1String[1]"
                          /></span>
                        </div>
                        <div v-if="d >= 3" class="tr">
                          <span class="td">
                            <input
                              class="vinput"
                              v-model="e1String[2]"
                          /></span>
                        </div>
                        <div v-if="d >= 4" class="tr">
                          <span class="td">
                            <input
                              class="vinput"
                              v-model="e1String[3]"
                          /></span>
                        </div>
                      </div>
                    </span>
                    <span class="td">
                      <label for="mvalues" position="fixed">
                        =
                      </label>
                    </span>
                    <span class="td">
                      <div class="table mvalues" id="mvalues">
                        <div class="tr">
                          <span class="td">
                            <div class="polOutput">
                              {{e1PolOutput[0]}}
                            </div>
                          </span>
                        </div>
                        <div class="tr">
                          <span class="td">
                            <div class="polOutput">
                              {{e1PolOutput[1]}}
                            </div>
                          </span>
                        </div>
                        <div v-if="d >= 3" class="tr">
                          <span class="td">
                            <div class="polOutput">
                              {{e1PolOutput[2]}}
                            </div>
                          </span>
                        </div>
                        <div v-if="d >= 4" class="tr">
                          <span class="td">
                            <div class="polOutput">
                              {{e1PolOutput[3]}}
                            </div>
                          </span>
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
                      <label for="mvalues" position="fixed">
                        <vue-mathjax :formula="vectorR"></vue-mathjax> =
                      </label>
                    </span>
                    <span class="td">
                      <div class="table mvalues" id="values">
                        <div class="tr">
                          <span class="td">
                            <input
                              class="vinput"
                              v-model="rString[0]"
                          /></span>
                        </div>
                        <div class="tr">
                          <span class="td">
                            <input
                              class="vinput"
                              v-model="rString[1]"
                          /></span>
                        </div>
                        <div v-if="d >= 3" class="tr">
                          <span class="td">
                            <input
                              class="vinput"
                              v-model="rString[2]"
                          /></span>
                        </div>
                        <div v-if="d >= 4" class="tr">
                          <span class="td">
                            <input
                              class="vinput"
                              v-model="rString[3]"
                          /></span>
                        </div>
                      </div>
                    </span>
                    <span class="td">
                      <label for="mvalues" position="fixed">
                        =
                      </label>
                    </span>
                    <span class="td">
                      <div class="table mvalues" id="mvalues">
                        <div class="tr">
                          <span class="td">
                            <div class="polOutput">
                              {{rPolOutput[0]}}
                            </div>
                          </span>
                        </div>
                        <div class="tr">
                          <span class="td">
                            <div class="polOutput">
                              {{rPolOutput[1]}}
                            </div>
                          </span>
                        </div>
                        <div v-if="d >= 3" class="tr">
                          <span class="td">
                            <div class="polOutput">
                              {{rPolOutput[2]}}
                            </div>
                          </span>
                        </div>
                        <div v-if="d >= 4" class="tr">
                          <span class="td">
                            <div class="polOutput">
                              {{rPolOutput[3]}}
                            </div>
                          </span>
                        </div>
                      </div>
                    </span> 
                  </div>
                </div>
              </div>
            </ion-col>
            <ion-col> </ion-col>
            <ion-col> </ion-col>
            <ion-col> </ion-col>
          </ion-row>
          <ion-row>
            <ion-col>
              <div class="matrix">
                <div class="table">
                  <div class="tr">
                    <span class="td">
                    <ion-label
                      ><vue-mathjax :formula="outputE2"></vue-mathjax> =
                    </ion-label>
                    <input
                      class="vinput"
                      v-model="e2String"
                    />
                    </span>
                    <span class="td">
                      <label for="mvalues" position="fixed">
                        =
                      </label>
                    </span>
                    <span class="td">
                      <div class="table" id="mvalues">
                        <div class="tr">
                          <span class="td">
                            <div class="polOutput">
                              {{e2PolOutput[0]}}
                            </div>
                          </span>
                        </div>
                      </div>
                    </span>
                  </div>
                </div>
              </div>
              <!--ion-item v-if="$v.e2.$anyError" class="error">
                  Wert muss >0 und &lt;q sein.
                </!--ion-item-->
              <!--ion-input :value="e2String" @change="e2String = $event.target.value; e2Values = parseStringToPol(e2String);"></!--ion-input-->
            </ion-col>

            <ion-col>
              <div class="matrix">
                <div class="table">
                  <div class="tr">
                    <span class="td">
                    <ion-label> m = </ion-label>
                    <input
                      class="vinput"
                      v-model="mString"
                    />
                    </span>
                    <span class="td">
                      <label for="mvalues" position="fixed">
                        =
                      </label>
                    </span>
                    <span class="td">
                      <div class="table" id="mvalues">
                        <div class="tr">
                          <span class="td">
                            <div class="polOutput">
                              {{mPolOutput[0]}}
                            </div>
                          </span>
                        </div>
                      </div>
                    </span>
                  </div>
                </div>
              </div>
              <!--ion-item v-if="!$v.m.validM" class="error">
                  m muss 0 oder 1 sein
                </!--ion-item-->
            </ion-col>
            <ion-col> </ion-col>
            <ion-col> </ion-col>
          </ion-row>
          <ion-item-divider></ion-item-divider>
          <ion-row>
            <ion-col>
              <ion-button
                v-on:click="
                  generateAll();
                  calcAll();
                "
                >Generiere Alles</ion-button
              >
            </ion-col>
            <ion-col>
              <ion-button
                v-on:click="
                  generateAfterQ();
                  calcAll();
                "
                >Generiere ab A</ion-button
              >
            </ion-col>
            <ion-col> </ion-col>
            <ion-col> </ion-col>
            <ion-col> </ion-col>
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
              <ion-button v-if="showResults" v-on:click="calcAll()"
                >Ergebnisse aktualisieren</ion-button
              >
            </ion-col>
            <ion-col>
              <ion-button
                v-if="showResults && !showFormula"
                v-on:click="
                  showFormula = true;
                  buildTexOutputs();
                "
                >Formeln anzeigen</ion-button
              >
              <ion-button
                v-if="showResults && showFormula"
                v-on:click="
                  showFormula = false;
                  buildTexOutputs();
                "
                >Formeln ausblenden</ion-button
              >
            </ion-col>
            <ion-col>
              <ion-button
                v-if="!showResults"
                v-on:click="
                  showResults = true;
                  calcAll();
                "
                >Ergebnisse anzeigen</ion-button
              >
              <ion-button v-if="showResults" v-on:click="showResults = false"
                >Ergebnisse verbergen</ion-button
              >
            </ion-col>
          </ion-row>
        </ion-grid>
        <div v-if="showResults">
          <ion-card-subtitle>Alice</ion-card-subtitle>
          <ion-grid>
            <ion-row>
              <ion-col>
                <vue-mathjax :formula="outputT"> </vue-mathjax>
              </ion-col>
            </ion-row>
          </ion-grid>
          <ion-card-subtitle>Bob</ion-card-subtitle>
          <ion-grid>
            <ion-row>
              <ion-col>
                <vue-mathjax :formula="outputU"> </vue-mathjax>
              </ion-col>
            </ion-row>
            <ion-row>
              <ion-col>
                <vue-mathjax :formula="outputV"> </vue-mathjax>
              </ion-col>
            </ion-row>
          </ion-grid>
          <ion-card-subtitle>Alice</ion-card-subtitle>
          <ion-grid>
            <ion-row> </ion-row>
            <ion-row>
              <ion-col>
                <vue-mathjax :formula="outputM"> </vue-mathjax>
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
import { required, between } from "vuelidate/lib/validators";

function isPrime(num) {
  for (var i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

function validN() {
  if (this.N == 2 || this.N == 4 || this.N == 8) {
    return true;
  }
  return false;
}

function validD() {
  if (this.d == 2 || this.d == 3 || this.d == 4) {
    return true;
  }
  return false;
}

function validArrayLength(array) {
  if (array.length != this.N) {
    return false;
  }
  return true;
}

function validArrayValues(array) {
  for (let elem of array) {
    if (isNaN(elem)) {
      return false;
    } else if (elem < 0 || elem >= this.q) {
      return false;
    }
  }
  return true;
}

export default {
  components: {
    "vue-mathjax": VueMathjax,
  },
  name: "MainKyberPol",
  el: "#kyberPol",
  data() {
    return {
      q: 97,
      N: 4,
      d: 2,
      AString: [
        ["1,1,1,1", "2,2,2,2", "3,3,3,3", "4,4,4,4"],
        ["1,2,1,1", "2,2,2,2", "3,3,3,3", "4,4,4,4"],
        ["1,3,1,1", "2,2,2,2", "3,3,3,3", "4,4,4,4"],
        ["1,4,1,1", "2,2,2,2", "3,3,3,3", "4,4,4,4"],
      ],
      /*AValues: [
        [
          [1, 1, 1, 1],
          [2, 2, 2, 2],
          [3, 3, 3, 3],
          [4, 4, 4, 4],
        ],
        [
          [1, 1, 1, 1],
          [2, 2, 2, 2],
          [3, 3, 3, 3],
          [4, 4, 4, 4],
        ],
        [
          [1, 1, 1, 1],
          [2, 2, 2, 2],
          [3, 3, 3, 3],
          [4, 4, 4, 4],
        ],
        [
          [1, 1, 1, 1],
          [2, 2, 2, 2],
          [3, 3, 3, 3],
          [4, 4, 4, 4],
        ],
      ],*/
      sString: ["1,1,1,1", "2,2,2,2", "3,3,3,3", "4,4,4,4"],
      eString: ["1,1,1,1", "2,2,2,2", "3,3,3,3", "4,4,4,4"],
      e1String: ["1,1,1,1", "2,2,2,2", "3,3,3,3", "4,4,4,4"],
      e2String: "1,2,3,4",
      rString: ["1,1,1,1", "2,2,2,2", "3,3,3,3", "4,4,4,4"],
      tValues: [[], [], [], []],
      uValues: [[], [], [], []],
      vValues: [],
      mString: "1, 0, 0, 1",
      mResultValues: [],
      outputT: "outputTtest",
      outputU: "outputUtest",
      outputV: "outputVtest",
      outputM: "outputMtest",
      vectorS: "$\\vec{s}$",
      vectorE: "$\\vec{e}$",
      vectorE1: "$\\vec{e_1}$",
      outputE2: "$e_2$",
      vectorR: "$\\vec{r}$",
      showResults: false,
      showFormula: false,
      decryptIssue: false,
    };
  },

  computed: {
    AValues: function(){return this.parseStringMatrixToPolMatrix(this.AString);},
    sValues: function(){return this.parseStringVectorToPolVector(this.sString);},
    eValues: function(){return this.parseStringVectorToPolVector(this.eString);},
    e1Values: function(){return this.parseStringVectorToPolVector(this.e1String);},
    rValues: function(){return this.parseStringVectorToPolVector(this.rString);},
    e2Values: function(){return this.parseStringToPol(this.e2String);},
    mValues: function(){return this.parseStringToPol(this.mString);},

    sPolOutput: function(){return this.parsePolVectortoPolOutputVector(this.sValues);},
    ePolOutput: function(){return this.parsePolVectortoPolOutputVector(this.eValues);},
    e1PolOutput: function(){return this.parsePolVectortoPolOutputVector(this.e1Values);},
    rPolOutput: function(){return this.parsePolVectortoPolOutputVector(this.rValues);},

    e2PolOutput: function(){return this.parseSinglePoltoPolOutputVector(this.e2Values);},
    mPolOutput: function(){return this.parseSinglePoltoPolOutputVector(this.mValues);},
  },

  validations() {
    return {
      q: { required, isPrime },
      N: { required, validN },
      d: { required, validD },
      AValues: {
        required,
        validArrayLength,
        validArrayValues,
        between: between(0, this.q - 1),
      },
    };
  },
  methods: {
    generateAll: function () {
      this.generateQ();
      this.generateAfterQ();
    },
    generateAfterQ: function () {
      this.generateA();
      this.generateS();
      this.generateE();
      this.generateR();
      this.generateE1();
      this.generateE2();
      this.generateM();
      this.updatePolOutputs();
    },
    generateQ: function () {
      var randomValue = Math.ceil(20 + Math.random() * 280);
      if (this.isPrime(randomValue)) {
        this.q = randomValue;
        return;
      } else this.generateQ();
    },
    generateA: function () {
      for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
          for (let k = 0; k < this.N; k++) {
            this.AValues[i][j][k] = this.modCenterX(
              Math.floor(Math.random() * (this.q * 0.8) + this.q * 0.2)
             );
          }
          this.AString[i][j] = this.parsePolToString(this.AValues[i][j]);
        }
      }
    },
    generateS: function () {
      this.sValues=Array(4).fill(Array(this.N).fill(0));
      for (let i = 0; i < 4; i++) {
        //do{
          for (let j = 0; j < this.N; j++) {
            this.sValues[i][j] = Math.ceil(Math.random() * 5) - 3;
          }
        //} while (this.checkZeroPol(this.sValues[i]));
        this.sString[i] = this.parsePolToString(this.sValues[i]);
        console.log("s parsen an stelle " + i + " aus " + this.sValues[i]);
      }
    },
    generateE: function () {
      for (let i = 0; i < 4; i++) {
        for (let j = 0; j < this.N; j++) {
          this.eValues[i][j] = Math.ceil(Math.random() * 5) - 3;
        }
        this.eString[i] = this.parsePolToString(this.eValues[i]);
      }
    },
    generateR: function () {
      for (let i = 0; i < 4; i++) {
        for (let j = 0; j < this.N; j++) {
          this.rValues[i][j] = Math.ceil(Math.random() * 5) - 3;
        }
        this.rString[i] = this.parsePolToString(this.rValues[i]);
      }
    },
    generateE1: function () {
      for (let i = 0; i < 4; i++) {
        for (let j = 0; j < this.N; j++) {
          this.e1Values[i][j] = Math.ceil(Math.random() * 5) - 3;
        }
        this.e1String[i] = this.parsePolToString(this.e1Values[i]);
      }
    },
    generateE2: function () {
      for (let i = 0; i < this.N; i++) {
        this.e2Values[i] = Math.ceil(Math.random() * 5) - 3;
      }
      this.e2String = this.parsePolToString(this.e2Values);
    },
    generateM: function () {
      for (let i = 0; i < this.N; i++) {
        this.mValues[i] = Math.floor(Math.random() * 2);
      }
      this.mString = this.parsePolToString(this.mValues);
    },
    calcAll: function () {
      this.calcT();
      this.calcU();
      this.calcV();
      this.calcM();
      this.checkDecryptIssues();
      this.buildTexOutputs();
    },
    buildTexOutputs: function () {
      this.buildOutputT();
      this.buildOutputU();
      this.buildOutputV();
      this.buildOutputM();
    },
    calcT: function () {
      for (let i = 0; i < this.d; i++) {
        let result = Array(this.N).fill(0);
        for (let j = 0; j < this.d; j++) {
          result = this.addPol(
            this.mulPolWithModN(this.AValues[i][j], this.sValues[j]),
            result
          );
        }
        result = this.addPol(this.eValues[i], result);
        for (let k = 0; k < this.N; k++) {
          result[k] = this.modCenterX(result[k]);
        }
        this.tValues[i] = result;
      }
    },
    calcU: function () {
      for (let i = 0; i < this.d; i++) {
        let result = Array(this.N).fill(0);
        for (let j = 0; j < this.d; j++) {
          result = this.addPol(this.mulPolWithModN(this.AValues[j][i], this.rValues[j]),result);
        }
        result = this.addPol(this.e1Values[i], result);
        for (let k = 0; k < this.N; k++) {
          result[k] = this.modCenterX(result[k]);
        }
        this.uValues[i] = result;
      }
    },
    calcV: function () {
      let result = Array(this.N).fill(0);
      for (let j = 0; j < this.d; j++) {
        result = this.addPol(this.mulPolWithModN(this.tValues[j], this.rValues[j]),result);
      }
      result = this.addPol(this.e2Values, result);
      result = this.addPol(this.enc(), result);
      for (let k = 0; k < this.N; k++) {
        result[k] = this.modCenterX(result[k]);
      }
      this.vValues = result;
    },
    calcM: function () {
      let result = Array(this.N).fill(0);
      result = this.addPol(this.vValues, result);
      let calc = Array(this.N).fill(0);
      for (let i = 0; i < this.d; i++) {
        calc = this.addPol(this.mulPolWithModN(this.sValues[i], this.uValues[i]),calc);
      }
      this.mResultValues = Array(this.N).fill(0);
      for (let i = 0; i < this.N; i++) {       
        result[i]= this.modCenterX(result[i] - calc[i]);
        if (result[i] >(-this.q/4) && result[i]<(this.q*1/4)) {
          //result[j] ist im obersten oder untersten Viertel, also um 0 herum
          this.mResultValues[i] = 0;
        } else if (result[i] >=(this.q*1/4) || result[i] <=(-this.q/4)) {
          // result[j] ist mittig, also um q/2 herum
          this.mResultValues[i] = 1;
        } else {
          //Kontrollausgabe für Unzulässige Ergebnisse
          this.mResultValues[i] = 2;
        }
      }
    },
    checkDecryptIssues: function () {
      if (this.mResult != this.m) {
        this.decryptIssue = true;
      } else {
        this.decryptIssue = false;
      }
    },
    buildOutputT: function () {
      this.outputT = "$\\vec{t} = ";
      if (this.showFormula) {
        this.outputT += "A*\\vec{s}+\\vec{e} = ";
      }
      this.outputT += "\\begin{pmatrix}";
      this.outputT += this.parsePolToString(this.tValues[0]);
      for (let i = 1; i < this.d; i++) {
        this.outputT += " \\cr " + this.parsePolToString(this.tValues[i]);
      }
      this.outputT += " \\end{pmatrix}";
      this.outputT += this.addPolVectorOutput(this.tValues);
    },
    buildOutputU: function () {
      this.outputU = "$\\vec{u} = ";
      if (this.showFormula) {
        this.outputU += "A^{T} * \\vec{r} + \\vec{e_1} = ";
      }
      this.outputU += "\\begin{pmatrix}";
      this.outputU += this.parsePolToString(this.uValues[0]);
      for (let i = 1; i < this.d; i++) {
        this.outputU += " \\cr " + this.parsePolToString(this.uValues[i]);
      }
      this.outputU += " \\end{pmatrix}";
      this.outputU += this.addPolVectorOutput(this.uValues);
    },
    buildOutputV: function () {
      this.outputV = "$v = ";
      if (this.showFormula) {
        this.outputV += "\\vec{t}^T * \\vec{r} + e_2 + \\bigg \\lfloor \\frac{q}{2} * m \\bigg \\rceil = ";
      }
      this.outputV += "\\begin{pmatrix}";
      this.outputV += this.parsePolToString(this.vValues);
      this.outputV += " \\end{pmatrix}  = \\begin{pmatrix}";
      this.outputV += this.addPolOutput(this.vValues);
      this.outputV += " \\end{pmatrix}$"

    },
    buildOutputM: function () {
      this.outputM = "$m = ";
      if (this.showFormula) {
        this.outputM += "Dec(v-\\vec{s}^T * \\vec{u}) = \\begin{cases}  0 & \\text{für $-\\frac{q}{4}\\leq (v-\\vec{s}^T * \\vec{u}) \\leq \\frac{q}{4} $} \\newline 1 & \\text{für $\\frac{q}{4}\\lt (v-\\vec{s}^T * \\vec{u}) \\lt \\frac{3q}{4} $} \\end{cases}\\Bigg\\} = ";
      }
      this.outputM += "\\begin{pmatrix}";
      this.outputM += this.parsePolToString(this.mResultValues);
      this.outputM += " \\end{pmatrix} = \\begin{pmatrix}";
      let setPlus = false;
      for(let j=this.N-1; j>=0; j--){
        if(this.mResultValues[j]==1 && j>0){
          if(j>0){this.outputM += "X"}
          if(j>1){this.outputM += "^{" + j + "}"}
          setPlus=true;
        }
        if(this.mResultValues[j]==1 && j==0){
          this.outputM += "1";
        }
        if(j>0 && this.mResultValues[j-1]>0 && setPlus){
          this.outputM += "+";
        }
      }
      this.outputM += "\\end{pmatrix}$";
    },
    addPolOutput: function(pol){
      let ret="";
      for(let j=this.N-1; j>=0; j--){
        ret+= pol[j];
        if(j>0){ret+= "X"}
        if(j>1){ret+= "^{" + j + "}"}
        if(j>0 && pol[j-1]>0){
          ret+= "+"
        }
      }
      return ret;
    },
    addPolVectorOutput: function(polVec){
      let ret= "";
      ret += " = \\begin{pmatrix}"
      ret += this.addPolOutput(polVec[0]);
      for (let i = 1; i < this.d; i++) {
        ret += " \\cr ";
        ret += this.addPolOutput(polVec[i]);
      }
      ret += " \\end{pmatrix}$"
      return ret;
    },
    parseStringToPol: function (string) {
      let array = string.split(",").map(Number);
      array.reverse();
      return array;
    },
    parsePolToString: function (array) {
      array.reverse(); //Array drehen für konventierung (Call by reference)
      let ret = "" + array[0];
      for (let i = 1; i < this.N; i++) {
        ret += "," + array[i];
      }
      array.reverse(); //Ursprungsarray wieder herstellen
      return ret;
    },
    parsePolToPolOutput: function(pol){
      let ret= "";
      let setPlus=false;
        for(let i=this.N-1; i>=0; i--){
          if(pol[i]!=0){
            ret += " " + pol[i];
            setPlus=true;
            if(i!=0){ret += "X"}
            switch(i){
              case 7: ret += " \u2077";break;
              case 6: ret += " \u2076";break;
              case 5: ret += " \u2075";break;
              case 4: ret += " \u2074";break;
              case 3: ret += " \u00B3";break;
              case 2: ret += " \u00B2";break;
            }
          } 
          if(pol[i-1]==0){ret+= "    "}
          if(i>0 && pol[i-1]>0 && setPlus){ret+= " +"}
          if(pol[i-1]<0){ret+= " "}
        }
      
      return ret;
    },
    parseSinglePoltoPolOutputVector: function(singlePol){//wrapper um computed setter zu umgehen
      let ret = Array(1).fill("")
      ret[0] = this.parsePolToPolOutput(singlePol);
      return ret;
    },
    parsePolVectortoPolOutputVector: function(polVector){
      let ret = Array(4).fill("")
      for(let i=0; i<this.d; i++){
        ret[i] = this.parsePolToPolOutput(polVector[i]);
      }
      return ret;
    },
    parsePolVectorToStringVector: function (polVec, stringVec){
      for(let i=0; i<this.d; i++){
        stringVec[i] = this.parsePolToString(polVec[i]);
      }
      return stringVec;
    },
    parseStringVectorToPolVector: function (stringVec){
      let polVec = Array(4).fill(Array(this.N).fill(0));
      for(let i=0; i<this.d; i++){
        polVec[i] = this.parseStringToPol(stringVec[i]);
      }
      return polVec;
    },
    parseStringMatrixToPolMatrix: function(stringMatrix){
      let polMatrix = Array(4).fill(Array(4).fill(Array(this.N).fill(0)));
      for(let i=0; i<this.d; i++){
        polMatrix[i] = this.parseStringVectorToPolVector(stringMatrix[i]);
      }
      return polMatrix;
    },

    updatePolOutputs: function(){
      for(let i=0; i<4; i++){
        this.sPolOutput[i]= this.parsePolToPolOutput(this.sValues[i]);
        this.ePolOutput[i]= this.parsePolToPolOutput(this.eValues[i]);
        this.e1PolOutput[i]= this.parsePolToPolOutput(this.e1Values[i]);
        this.rPolOutput[i]= this.parsePolToPolOutput(this.rValues[i]);
      }
      this.e2PolOutput = this.parsePolToPolOutput(this.e2Values);
      this.mPolOutput = this.parsePolToPolOutput(this.mValues);
    },

    mulPolWithModN: function (pol1, pol2) {
      let ret = Array(this.N).fill(0);
      for (let i = 0; i < this.N; i++) {
        for (let j = 0; j < this.N; j++) {
          if (i + j < this.N) {
            ret[i + j] += pol1[i] * pol2[j];
          } else if (i + j >= this.N) {
            ret[i + j - this.N] -= pol1[i] * pol2[j];
          }
        }
      }
      return ret;
    },
    addPol: function (pol1, pol2) {
      let ret = Array(this.N).fill(0);
      for (let i = 0; i < this.N; i++) {
        ret[i] = pol1[i] + pol2[i];
      }
      return ret;
    },
    modX: function (value, mod) {
      while (value >= mod) {
        value -= mod;
      }
      while (value < 0) {
        value += mod;
      }
      return value;
    },
    modCenterX: function (value) {
      while (value > this.q / 2) {
        value -= this.q;
      }
      while (value < -this.q / 2) {
        value += this.q;
      }
      return value;
    },
    enc: function (){
      let ret = Array(this.N).fill(0);
      for(let i=0; i<this.N; i++){
        if(this.mValues[i]==0){
          ret[i] = 0;
        }
        else if(this.mValues[i]==1){
          ret[i] = Math.round(this.q/2);
        }
      }
      return ret;
    },
    isPrime: function (num) {
      for (var i = 2; i < num; i++) if (num % i === 0) return false;
      return true;
    },
    checkZeroPol: function(pol){
      let allZero=true;
      for(let i=0; i<this.N; i++){
        if(pol[i]!=0){
          allZero=false;
        }
      }
      return allZero;
    },
  },
};
</script>



<style scoped>
label {
  margin-right: 8px;
  margin-left: 8px;
}

DIV.table {
  display: table;
}
FORM.tr,
DIV.tr {
  display: table-row;
}
FORM.tc,
DIV.tc {
  display: table-column;
}
SPAN.td {
  display: table-cell;
  width: 10px;
}

.minput {
  width: 120px;
}
.ninput {
  width: 50px;
}

.vinput {
  width: 110px;
}

.polOutput {
  margin: 8px;
  
}

input {
  border-color: gray;
  margin: 8px;
}
input:focus {
  outline: none;
  border-color: rgb(0, 140, 255);
  box-shadow: 0 0 5px rgb(0, 140, 255);
}

.matrix * {
  /*Zentrierung des Labels der Matrix*/
  vertical-align: middle;
  white-space: nowrap;
  overflow: hidden;
}

.mvalues {
  /*Klammern um die Matrix*/
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