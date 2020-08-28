<template>
    <div id="app">
        <ion-app>
                    <ion-split-pane when="md">
                        <ion-menu type="push" side="start" menu-id="start" content-id="main" class="myMenu">
                            <ion-header>
                                <ion-toolbar color="primary">
                                    <ion-title>Menu</ion-title>
                                </ion-toolbar>
                            </ion-header>
                            <ion-content>
                                <ion-list>
                                    <ion-menu-toggle auto-hide="false">
                                        <router-link to="/"><ion-item>Home</ion-item></router-link>
                                        <router-link to="/Test"><ion-item>Test</ion-item></router-link>
                                        <router-link to="/RLWE"><ion-item> RLWE </ion-item></router-link>
                                        <router-link to="/NewHope"><ion-item>NewHope</ion-item></router-link>
                                    </ion-menu-toggle>
                                </ion-list>
                            </ion-content>
                        </ion-menu>  

                        <ion-vue-router main/>
                    </ion-split-pane>
                    <!-- <router-view/> -->
                    <!-- <h1>TESTTESTTESTTESTTESTTESTTESTTESTTEST</h1> -->
        </ion-app>
    </div>
</template>

<script>
export default {
  name: 'App',
  props: {
    
  }
}
</script>

<style>
    ion-menu{
        
        --background: green;
        color: blue;
    }
</style>