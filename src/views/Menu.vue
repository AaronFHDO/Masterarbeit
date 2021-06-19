<template>
    <div id="app">
        <ion-app>
                    <ion-split-pane content-id="main">
                        <ion-menu type="overlay" side="start" menu-id="start" content-id="main" class="myMenu">
                            <ion-header>
                                <ion-toolbar color="primary">
                                    <ion-title>Menu</ion-title>
                                </ion-toolbar>
                            </ion-header>
                            <ion-content id="main">
                                <ion-list>
                                    <ion-menu-toggle auto-hide="false">
                                        <router-link to="/"><ion-item>Home</ion-item></router-link>
                                        <router-link to="/Test"><ion-item>Test</ion-item></router-link>
                                        <!--router-link to="/RLWE"><ion-item> RLWE </ion-item></router-link-->
                                        <router-link to="/KyberInt"><ion-item>Kyber (2x2 Integer)</ion-item></router-link>
                                        <router-link to="/Settings"><ion-item>Einstellungen</ion-item></router-link>
                                        
                                    </ion-menu-toggle>
                                </ion-list>
                            </ion-content>
                        </ion-menu>  
                        <ion-vue-router id="main"/>
                    </ion-split-pane>
                    
                    <!-- <router-view/> -->
                    <!-- <h1>TESTTESTTESTTESTTESTTESTTESTTESTTEST</h1> -->
        </ion-app>
    </div>
</template>

<script>
/*import { 
  IonContent, 
  IonHeader, 
  IonItem, 
  IonList, 
  IonMenu, 
  IonRouterOutlet,
  IonTitle, 
  IonToolbar,
  mentController
} from '@ionic/vue';
import { defineComponent } from 'vue';*/


export default /*defineComponent(*/{
    /*components: {
        IonContent, 
        IonHeader, 
        IonItem, 
        IonList, 
        IonMenu, 
        IonRouterOutlet,
        IonTitle, 
        IonToolbar
    },*/
    name: 'App',
    /*methods: {
        openFirst() {
        mentController.enable(true, 'start');
        mentController.open('start');
        }
    }*/
}/*)*/;
</script>

<style>
    ion-menu{
        
        --background: black;
        color:white;
    }
</style>