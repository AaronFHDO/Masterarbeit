<template>
<!-- <ion-app> -->
  <div class="MainTest">
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
        <ion-card-title>Berechne mir etwas</ion-card-title>
      </ion-card-header>
      <ion-card-content>
        <ion-label position="floating">Wert 1</ion-label>
        <ion-input maxlength="5" inputmode="numeric" color="primary" backgroundcolor="red" type="number" ></ion-input>
      </ion-card-content>
    </ion-card>
  </div>
  <!-- </ion-app> -->
</template>

<script>
//import { IonLabel, IonInput, IonItem } from '@ionic/vue';
//import { defineComponent } from 'vue';
//import {menuController} from '@ionic/core';
export default /*defineComponent*/({
  name: 'MainTest',
  //components: { IonLabel, IonInput, IonItem }
});
</script>

