<template>
  <!--div class="MainHome"-->
  <ion-content>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button menu="start"></ion-menu-button>
        </ion-buttons>
        <ion-title>Kyber Überblick</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-card>
      <ion-card-header>
        <ion-card-title>Willkommen beim Kyber-Überblick</ion-card-title>
      </ion-card-header>
      <ion-card-content>
        Auf dieser Seite wird ein Überblick über das Kyber-Ver- und Entschlüsselungsverfahren gegeben. <br>
        Dazu gehören der generelle Ablauf, die zu setzenden Parameter und eine kurze Erläuterung bestimmter Rechenschritte.<br>
        Außerdem werden weiter unten auf dieser Seite Links zu verschiedenen Informations-Materialien <br>
        zum Thema Post-Quanten-Verschlüsselung und Kyber bereitgestellt. <br>  
      </ion-card-content>
    </ion-card>
    <ion-card>
      <ion-card-header>
        <ion-card-title>Ablauf</ion-card-title>
      </ion-card-header>
      <ion-card-content>
        Die folgende Abbildung zeigt den Ablauf der Kyber-Ver- und Entschlüsselung. <br>
        Dabei möchte Bob eine verschlüsselte Nachricht an Alice senden. <br>
        <br>
        <img src="../../public/img/KyberAblauf.png">
      </ion-card-content>
    </ion-card>
    <ion-card>
      <ion-card-header>
        <ion-card-title>Kyber-Parameter-Erläuterung</ion-card-title>
      </ion-card-header>
      <ion-card-content>
        Bei dem Kyber-Verfahren kommen viele Parameter zum Einsatz. Hier gibt es einen kurzen Überblick über diese Parameter: <br>
        Bei Integer-Kyber sind zunächst die Primzahl q, die Dimension d und die von der Dimension abhängige quadratische Matrix A öffentlich gegeben. <br>
        Alice verfügt außerdem über ihren privaten Schlüssel s und den von ihr generierten Fehler e. <br>
        Bob verfügt über die von ihm generierten Fehler e1 und e2 sowie r und seine zu verschlüsselnde Nachricht m, die an Alice gesendet werden soll.<br>
        Alice berechnet sich zunächst ihren öffentlichen Schlüssel t. Diesen verwendet Bob um seinen öffentlichen Schlüssel u zu berechnen. <br>
        Außerdem verschlüsselt er mit t auch seine Nachricht m zum dem Cipher v. Diesen kann Alice dann mit Hilfe von Bobs u und ihrem s entschüsseln. <br>
        <br> 
        Bei Polynom-Kyber kommt noch der Polynomgrad N hinzu. Dieser bestimmt den maximalen Grad aller Polynome, die hier anstelle der Integerwerte verwendet werden.<br>
        Für N = 4 besteht e2 also z. B. nicht mehr aus einem einzigen Integerwert, sondern aus einem Polynom vom Grad 3, also mit 4 verschiedenen Koeffizienten vom Grad 3 bis 0.
      </ion-card-content>
    </ion-card>
    <ion-card>
      <ion-card-header>
        <ion-card-title>Paramter-Voraussetzungen</ion-card-title>
      </ion-card-header>
      <ion-card-content>
        Die Parameter des Kyberverfahrens können natürlich nicht einfach beliebig gewählt werden, sondern unterliegen bestimmten Vorraussetzungen. <br>
        Außerdem ist es ratsam die Parameter in bestimmten Bereichen zu wählen, um ein erfolgreiches Verfahren zu gewährleisten. <br>
        Im Folgenden sind alle Parametervoraussetzungen und -empfehlungen aufgelistet. (Beim Generieren von Aufgaben sind diese immer erfüllt.) <br>
        <br>
        Voraussetzungen: q muss eine Primzahl sein. Alle Werte der Matrix, der Vektoren und e2 müssen >(-q/2) und &lt;(q/2) sein (um 0 zentrierte Schreibweise). <br>
        m bzw. alle Koeffizienten von m müssen Bitwerte (0 oder 1) sein. Alle Polynome müssen N Koeffzienten haben (auch Nullen müssen geschrieben werden). <br>
        N ist als 2 , 4 oder 8 wählbar. d ist als 2 ,3 oder 4 wählbar. <br>
        <br>
        Empfehlungen: q sollte zwischen 20 und 300 liegen. Alle beträge der Werte in A sollten zwischen 10% und 50% von q liegen. Alle Werte der Vektoren und von e2 sollten &ge; -2 und &le; 2 sein.
      </ion-card-content>
    </ion-card>
    <ion-card>
      <ion-card-header>
        <ion-card-title>Encryption und Decryption</ion-card-title>
      </ion-card-header>
      <ion-card-content>
        Bei dem Integer-Kyber-Verfahren sind Encryption und Decryption (Enc und Dec) realtiv simpel und können durch die anzeigbaren Formeln berechnet werden. <br>  
        Bei dem Polynom-Kyber-Verfahren ist jedoch zu beachten, dass Enc und Dec Koeffizienten-weise auszuführen sind. <br>
        Das bedeutet, dass Enc bspw. mit q = 11, N = 4 und m = 1,0,1,0 mit <vue-mathjax :formula="encOutput"></vue-mathjax> für jeden Koeffizienten einzeln berechnet wird, abhängig von m an diesem Koeffizienten. <br>
        Mit den beschriebenen Parametern ist also Enc(1,0,1,0) = (6,0,6,0) ={{encResultOutput}} <br>
        Dementsprechend wird bei Dec die Entscheidung nach 0 oder 1 für jeden Koeffizienten von m einzeln getroffen.
      </ion-card-content>
    </ion-card>
    <ion-card>
      <ion-card-header>
        <ion-card-title>Informationsmaterial</ion-card-title>
      </ion-card-header>
      <ion-card-content>
        Unterlagen des BSI (Bundesinstitut für Sicherheit in der Informationstechnik): <br>
        Migration zu Post-Quanten-Kryptografie, Handlungsempfehlungen des BSI, August 2020: <a href="https://www.bsi.bund.de/SharedDocs/Downloads/DE/BSI/Krypto/Post-Quanten-Kryptografie.pdf?__blob=publicationFile&v=1#:~:text=Die%20Aktivit%C3%A4ten%20des%20NIST%20zur,im%20Bereich%20Kryptografie%20international%20vernetzt.">Migration zu Post-Quanten-Kryptografie</a><br>
        Entwicklungsstand Quantencomputer Zusammenfassung, Juni 2020: <a href="https://www.bsi.bund.de/SharedDocs/Downloads/DE/BSI/Publikationen/Studien/Quantencomputer/P283_QC_Zusammenfassung-V_1_2.pdf;jsessionid=29FF940CCF50AC5E98D11976188C8DA9.internet472?__blob=publicationFile&v=1">Entwicklungsstand Quantencomputer (kurz)</a> <br>
        Entwicklungsstand Quantencomputer, Juni 2020: <a href="https://www.bsi.bund.de/SharedDocs/Downloads/DE/BSI/Publikationen/Studien/Quantencomputer/P283_QC_Studie-V_1_2.pdf;jsessionid=29FF940CCF50AC5E98D11976188C8DA9.internet472?__blob=publicationFile&v=1">Entwicklungsstand Quantencomputer (lang)</a> <br>
        Technische Richtlinie, Kryptographische Verfahren: Empfehlungen und Schlüssellängen, März 2020: <a href="https://www.bsi.bund.de/SharedDocs/Downloads/DE/BSI/Publikationen/TechnischeRichtlinien/TR02102/BSI-TR-02102.pdf;jsessionid=89E3BF2C827A65640203B701186F20BD.internet082?__blob=publicationFile&v=2">BSI TR-02102-1</a><br>
        <br>
        Unterlagen zu Kyber:<br>
        Kyber Original Paper, 2018: <a href="https://repository.ubn.ru.nl/bitstream/handle/2066/195423/195423pre.pdf?sequence=1&isAllowed=y">CRYSTALS Kyber</a><br>
        Kyber Vorstellungs-Folien: <a href="https://cryptojedi.org/peter/data/nistpqc-20190823.pdf">Kyber-Folien</a><br>
        Kyber Spezifikation: <a href="https://pq-crystals.org/kyber/data/kyber-specification-round3-20210131.pdf">Algorithm Specifications And Supporting Documentation</a><br>
      </ion-card-content>
    </ion-card>
  </ion-content>
</template>

<script>
export default {
  name: 'KyberOverview',
  data(){
    return{
      encOutput: '$\\bigg \\lfloor \\frac{q}{2} * m \\bigg \\rceil$',
      encResultOutput: ' 6X\u00B3 + 6X '
    }
  }
}

</script>
<style scoped>
img{
    width:100%;
    max-width:900px;
    border: 4px solid #555;
}
ion-card-content{
  font-size: 13pt;
  color: black;
}
</style>
