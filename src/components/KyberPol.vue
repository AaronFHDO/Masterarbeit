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
        Hier können Sie Aufgaben zu (Integer-) Kyber zu generieren, selbst erstellen und berechenen. <br>
        Der Ablauf des Verfahrens wird mit der Verschlüsselung durch Bob und der Entschlüsselung durch Alice dargestellt.<br>
        <br>
        Alle Parameter-Voraussetzungen und Empfehlungen sind auf der Überblick-Seite zu finden und werden bei der automatischen Generierung eingehalten. <br>
        Es können bei der Entschlüsselung dennoch Fehler auftreten, da mit kleinen Parametern gerechnet wird. <br>
        In allen Formeln wird implizit (mod q) mit um 0 zentrierter Schreibweise gerechnet.
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
              <select class="ninput" v-model.number="N" @change="generateAfterQ(); N += 1, N-=1; calcAll()">
                <option value="2">2</option>              
                <option value="4">4</option>
                <option value="8">8</option>
              </select>
            </ion-col>
            <ion-col>
              <ion-label> d = </ion-label>
              <select class="ninput" v-model.number="d" @change="calcAll()">
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
                              @focus="$v.AValues.$each[0].$each[0].$touch();"
                          /></span>
                          <span class="td">
                            <input
                              class="minput"
                              v-model="AString[0][1]"
                              @focus="$v.AValues.$each[0].$each[1].$touch();"
                          /></span>
                          <span v-if="d >= 3" class="td">
                            <input
                              class="minput"
                              v-model="AString[0][2]"
                              @focus="$v.AValues.$each[0].$each[2].$touch();"
                          /></span>
                          <span v-if="d >= 4" class="td">
                            <input
                              class="minput"
                              v-model="AString[0][3]"
                              @focus="$v.AValues.$each[0].$each[3].$touch();"
                          /></span>
                        </div>
                        <div class="tr">
                          <span class="td">
                            <input
                              class="minput"
                              v-model="AString[1][0]"
                              @focus="$v.AValues.$each[1].$each[0].$touch();"
                          /></span>
                          <span class="td">
                            <input
                              class="minput"
                              v-model="AString[1][1]"
                              @focus="$v.AValues.$each[1].$each[1].$touch();"
                          /></span>
                          <span v-if="d >= 3" class="td">
                            <input
                              class="minput"
                              v-model="AString[1][2]"
                              @focus="$v.AValues.$each[1].$each[2].$touch();"
                          /></span>
                          <span v-if="d >= 4" class="td">
                            <input
                              class="minput"
                              v-model="AString[1][3]"
                              @focus="$v.AValues.$each[1].$each[3].$touch();"
                          /></span>
                        </div>
                        <div v-if="d >= 3" class="tr">
                          <span class="td">
                            <input
                              class="minput"
                              v-model="AString[2][0]"
                              @focus="$v.AValues.$each[2].$each[0].$touch();"
                          /></span>
                          <span class="td">
                            <input
                              class="minput"
                              v-model="AString[2][1]"
                              @focus="$v.AValues.$each[2].$each[1].$touch();"
                          /></span>
                          <span class="td">
                            <input
                              class="minput"
                              v-model="AString[2][2]"
                              @focus="$v.AValues.$each[2].$each[2].$touch();"
                          /></span>
                          <span v-if="d >= 4" class="td">
                            <input
                              class="minput"
                              v-model="AString[2][3]"
                              @focus="$v.AValues.$each[2].$each[3].$touch();"
                          /></span>
                        </div>
                        <div v-if="d >= 4" class="tr">
                          <span class="td">
                            <input
                              class="minput"
                              v-model="AString[3][0]"
                              @focus="$v.AValues.$each[3].$each[0].$touch();"
                          /></span>
                          <span class="td">
                            <input
                              class="minput"
                              v-model="AString[3][1]"
                              @focus="$v.AValues.$each[3].$each[1].$touch();"
                          /></span>
                          <span class="td">
                            <input
                              class="minput"
                              v-model="AString[3][2]"
                              @focus="$v.AValues.$each[3].$each[2].$touch();"
                          /></span>
                          <span class="td">
                            <input
                              class="minput"
                              v-model="AString[3][3]"
                              @focus="$v.AValues.$each[3].$each[3].$touch();"
                          /></span> 
                        </div>
                      </div>
                    </span>
                    <div v-if="d == 2">
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
                                    {{APolOutput[0][0]}}
                                  </div>
                                </span>
                                <span class="td">
                                  <div class="polOutput">
                                    ,
                                  </div>
                                </span>
                                <span class="td">
                                  <div class="polOutput">
                                    {{APolOutput[0][1]}}
                                  </div>
                                </span>
                              </div>
                              


                              <div class="tr">
                                <span class="td">
                                  <div class="polOutput">
                                    {{APolOutput[1][0]}}
                                  </div>
                                </span>
                                <span class="td">
                                  <div class="polOutput">
                                    ,
                                  </div>
                                </span>
                                <span class="td">
                                  <div class="polOutput">
                                    {{APolOutput[1][1]}}
                                  </div>
                                </span>
                              </div>
                            </div>
                          </span>
                    </div>
                  </div>
                </div>
                
                <div class="error" v-if="!$v.AValues.$each[0].$each[0].validArrayLength">Polynom muss N Koeffizienten haben. (A11)</div>
                <div class="error" v-else-if="!$v.AValues.$each[0].$each[1].validArrayLength">Polynom muss N Koeffizienten haben. (A12)</div>
                <div class="error" v-else-if="!$v.AValues.$each[0].$each[2].validArrayLength">Polynom muss N Koeffizienten haben. (A13)</div>
                <div class="error" v-else-if="!$v.AValues.$each[0].$each[3].validArrayLength">Polynom muss N Koeffizienten haben. (A14)</div>
                <div class="error" v-else-if="!$v.AValues.$each[1].$each[0].validArrayLength">Polynom muss N Koeffizienten haben. (A21)</div>
                <div class="error" v-else-if="!$v.AValues.$each[1].$each[1].validArrayLength">Polynom muss N Koeffizienten haben. (A22)</div>
                <div class="error" v-else-if="!$v.AValues.$each[1].$each[2].validArrayLength">Polynom muss N Koeffizienten haben. (A23)</div>
                <div class="error" v-else-if="!$v.AValues.$each[1].$each[3].validArrayLength">Polynom muss N Koeffizienten haben. (A24)</div>
                <div class="error" v-else-if="!$v.AValues.$each[2].$each[0].validArrayLength">Polynom muss N Koeffizienten haben. (A31)</div>
                <div class="error" v-else-if="!$v.AValues.$each[2].$each[1].validArrayLength">Polynom muss N Koeffizienten haben. (A32)</div>
                <div class="error" v-else-if="!$v.AValues.$each[2].$each[2].validArrayLength">Polynom muss N Koeffizienten haben. (A33)</div>
                <div class="error" v-else-if="!$v.AValues.$each[2].$each[3].validArrayLength">Polynom muss N Koeffizienten haben. (A34)</div>
                <div class="error" v-else-if="!$v.AValues.$each[3].$each[0].validArrayLength">Polynom muss N Koeffizienten haben. (A41)</div>
                <div class="error" v-else-if="!$v.AValues.$each[3].$each[1].validArrayLength">Polynom muss N Koeffizienten haben. (A42)</div>
                <div class="error" v-else-if="!$v.AValues.$each[3].$each[2].validArrayLength">Polynom muss N Koeffizienten haben. (A43)</div>
                <div class="error" v-else-if="!$v.AValues.$each[3].$each[3].validArrayLength">Polynom muss N Koeffizienten haben. (A44)</div>

                <div class="error" v-else-if="!$v.AValues.$each[0].$each[0].validArrayValues">Koeffizienten müssen >(-q/2) und &lt;(q/2) sein. (A11)</div>
                <div class="error" v-else-if="!$v.AValues.$each[0].$each[1].validArrayValues">Koeffizienten müssen >(-q/2) und &lt;(q/2) sein. (A12)</div>
                <div class="error" v-else-if="!$v.AValues.$each[0].$each[2].validArrayValues">Koeffizienten müssen >(-q/2) und &lt;(q/2) sein. (A13)</div>
                <div class="error" v-else-if="!$v.AValues.$each[0].$each[3].validArrayValues">Koeffizienten müssen >(-q/2) und &lt;(q/2) sein. (A14)</div>
                <div class="error" v-else-if="!$v.AValues.$each[1].$each[0].validArrayValues">Koeffizienten müssen >(-q/2) und &lt;(q/2) sein. (A21)</div>
                <div class="error" v-else-if="!$v.AValues.$each[1].$each[1].validArrayValues">Koeffizienten müssen >(-q/2) und &lt;(q/2) sein. (A22)</div>
                <div class="error" v-else-if="!$v.AValues.$each[1].$each[2].validArrayValues">Koeffizienten müssen >(-q/2) und &lt;(q/2) sein. (A23)</div>
                <div class="error" v-else-if="!$v.AValues.$each[1].$each[3].validArrayValues">Koeffizienten müssen >(-q/2) und &lt;(q/2) sein. (A24)</div>
                <div class="error" v-else-if="!$v.AValues.$each[2].$each[0].validArrayValues">Koeffizienten müssen >(-q/2) und &lt;(q/2) sein. (A31)</div>
                <div class="error" v-else-if="!$v.AValues.$each[2].$each[1].validArrayValues">Koeffizienten müssen >(-q/2) und &lt;(q/2) sein. (A32)</div>
                <div class="error" v-else-if="!$v.AValues.$each[2].$each[2].validArrayValues">Koeffizienten müssen >(-q/2) und &lt;(q/2) sein. (A33)</div>
                <div class="error" v-else-if="!$v.AValues.$each[2].$each[3].validArrayValues">Koeffizienten müssen >(-q/2) und &lt;(q/2) sein. (A34)</div>
                <div class="error" v-else-if="!$v.AValues.$each[3].$each[0].validArrayValues">Koeffizienten müssen >(-q/2) und &lt;(q/2) sein. (A41)</div>
                <div class="error" v-else-if="!$v.AValues.$each[3].$each[1].validArrayValues">Koeffizienten müssen >(-q/2) und &lt;(q/2) sein. (A42)</div>
                <div class="error" v-else-if="!$v.AValues.$each[3].$each[2].validArrayValues">Koeffizienten müssen >(-q/2) und &lt;(q/2) sein. (A43)</div>
                <div class="error" v-else-if="!$v.AValues.$each[3].$each[3].validArrayValues">Koeffizienten müssen >(-q/2) und &lt;(q/2) sein. (A44)</div>
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
                <div class="error" v-if="!$v.sValues.$each[0].validArrayLength">Polynom muss N Koeffizienten haben. (s1)</div>
                <div class="error" v-else-if="!$v.sValues.$each[1].validArrayLength">Polynom muss N Koeffizienten haben. (s2)</div>
                <div class="error" v-else-if="!$v.sValues.$each[2].validArrayLength">Polynom muss N Koeffizienten haben. (s3)</div>
                <div class="error" v-else-if="!$v.sValues.$each[3].validArrayLength">Polynom muss N Koeffizienten haben. (s4)</div>

                <div class="error" v-else-if="!$v.sValues.$each[0].validArrayValues">Koeffizienten müssen >(-q/2) und &lt;(q/2) sein. (s1)</div>
                <div class="error" v-else-if="!$v.sValues.$each[1].validArrayValues">Koeffizienten müssen >(-q/2) und &lt;(q/2) sein. (s2)</div>
                <div class="error" v-else-if="!$v.sValues.$each[2].validArrayValues">Koeffizienten müssen >(-q/2) und &lt;(q/2) sein. (s3)</div>
                <div class="error" v-else-if="!$v.sValues.$each[3].validArrayValues">Koeffizienten müssen >(-q/2) und &lt;(q/2) sein. (s4)</div>
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
                <div class="error" v-if="!$v.eValues.$each[0].validArrayLength">Polynom muss N Koeffizienten haben. (e1)</div>
                <div class="error" v-else-if="!$v.eValues.$each[1].validArrayLength">Polynom muss N Koeffizienten haben. (e2)</div>
                <div class="error" v-else-if="!$v.eValues.$each[2].validArrayLength">Polynom muss N Koeffizienten haben. (e3)</div>
                <div class="error" v-else-if="!$v.eValues.$each[3].validArrayLength">Polynom muss N Koeffizienten haben. (e4)</div>

                <div class="error" v-else-if="!$v.eValues.$each[0].validArrayValues">Koeffizienten müssen >(-q/2) und &lt;(q/2) sein. (e1)</div>
                <div class="error" v-else-if="!$v.eValues.$each[1].validArrayValues">Koeffizienten müssen >(-q/2) und &lt;(q/2) sein. (e2)</div>
                <div class="error" v-else-if="!$v.eValues.$each[2].validArrayValues">Koeffizienten müssen >(-q/2) und &lt;(q/2) sein. (e3)</div>
                <div class="error" v-else-if="!$v.eValues.$each[3].validArrayValues">Koeffizienten müssen >(-q/2) und &lt;(q/2) sein. (e4)</div>
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
                <div class="error" v-if="!$v.e1Values.$each[0].validArrayLength">Polynom muss N Koeffizienten haben. (e1)</div>
                <div class="error" v-else-if="!$v.e1Values.$each[1].validArrayLength">Polynom muss N Koeffizienten haben. (e2)</div>
                <div class="error" v-else-if="!$v.e1Values.$each[2].validArrayLength">Polynom muss N Koeffizienten haben. (e3)</div>
                <div class="error" v-else-if="!$v.e1Values.$each[3].validArrayLength">Polynom muss N Koeffizienten haben. (e4)</div>

                <div class="error" v-else-if="!$v.e1Values.$each[0].validArrayValues">Koeffizienten müssen >(-q/2) und &lt;(q/2) sein. (e1)</div>
                <div class="error" v-else-if="!$v.e1Values.$each[1].validArrayValues">Koeffizienten müssen >(-q/2) und &lt;(q/2) sein. (e2)</div>
                <div class="error" v-else-if="!$v.e1Values.$each[2].validArrayValues">Koeffizienten müssen >(-q/2) und &lt;(q/2) sein. (e3)</div>
                <div class="error" v-else-if="!$v.e1Values.$each[3].validArrayValues">Koeffizienten müssen >(-q/2) und &lt;(q/2) sein. (e4)</div>
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
                <div class="error" v-if="!$v.rValues.$each[0].validArrayLength">Polynom muss N Koeffizienten haben. (r1)</div>
                <div class="error" v-else-if="!$v.rValues.$each[1].validArrayLength">Polynom muss N Koeffizienten haben. (r2)</div>
                <div class="error" v-else-if="!$v.rValues.$each[2].validArrayLength">Polynom muss N Koeffizienten haben. (r3)</div>
                <div class="error" v-else-if="!$v.rValues.$each[3].validArrayLength">Polynom muss N Koeffizienten haben. (r4)</div>

                <div class="error" v-else-if="!$v.rValues.$each[0].validArrayValues">Koeffizienten müssen >(-q/2) und &lt;(q/2) sein. (r1)</div>
                <div class="error" v-else-if="!$v.rValues.$each[1].validArrayValues">Koeffizienten müssen >(-q/2) und &lt;(q/2) sein. (r2)</div>
                <div class="error" v-else-if="!$v.rValues.$each[2].validArrayValues">Koeffizienten müssen >(-q/2) und &lt;(q/2) sein. (r3)</div>
                <div class="error" v-else-if="!$v.rValues.$each[3].validArrayValues">Koeffizienten müssen >(-q/2) und &lt;(q/2) sein. (r4)</div>
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
                <div class="error" v-if="!$v.e2Values.validArrayLength">Polynom muss N Koeffizienten haben.</div>
                <div class="error" v-else-if="!$v.e2Values.validArrayValues">Koeffizienten müssen >(-q/2) und &lt;(q/2) sein.</div>
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
              <div class="error" v-if="!$v.mValues.validArrayLength">m muss N Bitwerte haben.</div>
              <div class="error" v-else-if="!$v.mValues.validM">Koeffizienten von m müssen Bitwerte sein. (0 oder 1)</div>
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
          <ion-card-content>
          <ion-grid>
            <ion-row>
              <ion-col>
                <ion-card-subtitle>Alice</ion-card-subtitle>  
              </ion-col>
              <ion-col>
                <ion-card-subtitle>Öffentlich</ion-card-subtitle>
              </ion-col>
              <ion-col>
                <ion-card-subtitle>Bob</ion-card-subtitle>
              </ion-col>
            </ion-row>
            <ion-item-divider></ion-item-divider>
            <ion-row>
              <ion-col>
                Alice berechnet 
                <vue-mathjax :formula="outputT"></vue-mathjax>
              </ion-col>
              <ion-col>
                <vue-mathjax :formula="sendT"> </vue-mathjax>
              </ion-col>
              <ion-col>
              </ion-col>
            </ion-row>
            <ion-item-divider></ion-item-divider>
            <ion-row>
              <ion-col>
              </ion-col>
              <ion-col>
              </ion-col>
              <ion-col>
                <ion-col>
                  Bob berechnet 
                </ion-col>
                <ion-col>
                  <vue-mathjax :formula="outputU"> </vue-mathjax>
                </ion-col>
              </ion-col>
            </ion-row>
            <ion-row>
              <ion-col>
              </ion-col>
              <ion-col>
                <vue-mathjax :formula="sendUV"> </vue-mathjax>
              </ion-col>
              <ion-col>
                <ion-col>
                  und
                </ion-col>
                <ion-col>
                  <vue-mathjax :formula="outputV"> </vue-mathjax>
                </ion-col>
              </ion-col>
            </ion-row>
            <ion-item-divider></ion-item-divider>
            <ion-row>
              <ion-col>
                Alice berechnet Bobs Nachricht
                <vue-mathjax :formula="outputM"></vue-mathjax>
                <div v-if="!$v.mResultValues.correctM" class="error">
                  Entschlüsselungsfehler wegen ungünstiger Parameter
                </div>
              </ion-col>
              <ion-col>
              </ion-col>
              <ion-col>
              </ion-col>
            </ion-row>
          </ion-grid>
          </ion-card-content>
        </div>
      </ion-card-header>
      
    </ion-card>
  </ion-content>
</template>

<script>
import { VueMathjax } from "vue-mathjax";
import { required } from "vuelidate/lib/validators";

function isPrime(num) {
  for (var i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
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
    } else if (elem < -this.q/2 || elem >= this.q/2) {
      return false;
    } else if (elem == undefined){
      return false;
    }
  }
  return true;
}

function validM(){
  for(let i= 0; i<this.N; i++){
    if(this.mValues[i]!= 0 && this.mValues[i]!= 1){
      return false;
    }
  }
  return true;
}

function correctM(){
  for(let i=0; i<this.N; i++){
    if (this.mResultValues[i] != this.mValues[i]){
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
      sendT: '$\\vec{t} \\Longrightarrow$',
      sendUV: '$\\Longleftarrow \\vec{u}, v $',
      showResults: false,
      showFormula: false,
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

    APolOutput: function(){return this.parsePolMatrixtoPolOutputMatrix(this.AValues);},
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
      AValues: {
        $each:{
          $each:{
            validArrayValues,
            validArrayLength,
          }
        }
      },
      sValues: {
        $each:{
          validArrayValues,
          validArrayLength,
        }
      },
      eValues: {
        $each:{
          validArrayValues,
          validArrayLength,
        }
      },
      e1Values: {
        $each:{
          validArrayValues,
          validArrayLength,
        }
      },
      rValues: {
        $each:{
          validArrayValues,
          validArrayLength,
        }
      },
      e2Values: {
        validArrayValues,
        validArrayLength,
      },
      mValues:{validArrayLength, validM},
      mResultValues: {correctM},
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
              Math.floor(Math.random() * (this.q * 0.8) + this.q * 0.1)
             );
          }
          this.AString[i][j] = this.parsePolToString(this.AValues[i][j]);
        }
      }
    },
    generateS: function () {
      this.sValues=Array(4).fill(Array(this.N).fill(0));
      for (let i = 0; i < 4; i++) {
        do{
          for (let j = 0; j < this.N; j++) {
            this.sValues[i][j] = Math.ceil(Math.random() * 5) - 3;
          }
        } while (this.checkZeroPol(this.sValues[i]));
        this.sString[i] = this.parsePolToString(this.sValues[i]);
        console.log("s parsen an stelle " + i + " aus " + this.sValues[i]);
      }
    },
    generateE: function () {
      for (let i = 0; i < 4; i++) {
        do{
          for (let j = 0; j < this.N; j++) {
            this.eValues[i][j] = Math.ceil(Math.random() * 5) - 3;
          }
        } while (this.checkZeroPol(this.eValues[i]));
        this.eString[i] = this.parsePolToString(this.eValues[i]);
      }
    },
    generateR: function () {
      for (let i = 0; i < 4; i++) {
        do{
          for (let j = 0; j < this.N; j++) {
            this.rValues[i][j] = Math.ceil(Math.random() * 5) - 3;
          }
        } while (this.checkZeroPol(this.rValues[i]));
        this.rString[i] = this.parsePolToString(this.rValues[i]);
      }
    },
    generateE1: function () {
      for (let i = 0; i < 4; i++) {
        do{
          for (let j = 0; j < this.N; j++) {
            this.e1Values[i][j] = Math.ceil(Math.random() * 5) - 3;
          }
        } while (this.checkZeroPol(this.e1Values[i]));
        this.e1String[i] = this.parsePolToString(this.e1Values[i]);
      }
    },
    generateE2: function () {
      do{
        for (let i = 0; i < this.N; i++) {
          this.e2Values[i] = Math.ceil(Math.random() * 5) - 3;
        }
      } while (this.checkZeroPol(this.e2Values));
      this.e2String = this.parsePolToString(this.e2Values);
    },
    generateM: function () {
      do{
        for (let i = 0; i < this.N; i++) {
          this.mValues[i] = Math.floor(Math.random() * 2);
        }
      } while (this.checkZeroPol(this.mValues));
      this.mString = this.parsePolToString(this.mValues);
    },
    calcAll: function () {
      this.calcT();
      this.calcU();
      this.calcV();
      this.calcM();
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
        this.outputV += "\\vec{t}^T * \\vec{r} + e_2 +  Enc(m)  = ";
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
        this.outputM += "Dec(v-\\vec{s}^T * \\vec{u}) = \\begin{cases} 0 & \\text{für $-\\frac{q}{4}\\leq (v-\\vec{s}^T * \\vec{u}) \\leq \\frac{q}{4} $} \\newline 1 & \\text{für $\\frac{q}{4}\\lt (v-\\vec{s}^T * \\vec{u}) \\lt \\frac{3q}{4} $} \\end{cases}\\Bigg\\} = ";
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
      let array = string.split(' ').join('').split(",").filter(element => element).map(Number);
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
          if(pol[i]!=0 && pol[i]!= undefined){
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
      let ret = Array(1).fill("");
      ret[0] = this.parsePolToPolOutput(singlePol);
      return ret;
    },
    parsePolVectortoPolOutputVector: function(polVector){
      let ret = Array(4).fill("");
      for(let i=0; i<this.d; i++){
        ret[i] = this.parsePolToPolOutput(polVector[i]);
      }
      return ret;
    },
    parsePolMatrixtoPolOutputMatrix: function(polMatrix){
      let ret = Array(2).fill(Array(2).fill(""));
      for(let i=0; i<2; i++){
        ret[i] = this.parsePolVectortoPolOutputVector(polMatrix[i]);
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
      for(let i=0; i<2; i++){
        for(let j=0; j<2; j++){
            this.APolOutput[i][j]= this.parsePolToPolOutput(this.AValues[i][j]);
        }
      }
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
  margin: 7px;
  
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

ion-card-content, ion-col, ion-card-subtitle{
  font-size: 13pt;
  color: black;
}
.polOutput{
  font-size: 12pt;
  color: black;}
</style>