<template>
  <div class="about">
    <h1>Øving 2 - Kalkulator i Vue</h1>
    <p id="description">
      I denne øvingen ønsker vi at dere skal se på hvordan lage en kalkulator i Vue.js. Dere skal
      altså lage et prosjekt med en enkelt side, der dere implementerer et brukergrensesnitt for å
      utføre enkle regnestykker.<br /><br />
      Et godt tips er å ta i bruk enten CSS Grid eller Flexbox for formen på kalkulatoren. I tillegg
      til dette ønsker vi ha en logg over de siste regnestykkene dere har utført. <br /><br />
      Dette kan plasseres i for eksempel en col- lapsible eller boks under kalkulatoren, men dere
      står fritt til å lage det som for dere virker mest hensiktsmessig. Liste over reg- nestykkene
      skal oppdateres for hver kalku- lasjon som utføres. <br /><br />
      Et tips her er å se på conditional rendering og state. Vi ønsker gjerne at man implementerer
      en enkel form for feilhåndtering, f.eks at man ikke kan skrive inn bokstaver og ikke får feil
      med komma. <br /><br />
      Dersom dere synes dette gikk greit, kan en bonusoppgave være å se på sidens responsivitet,
      altså hvordan den ser ut på ulike skjermstørrelser, f.eks en mobil. Dette er ingen krav, men
      kan være god tren- ing for videre arbeid.
    </p>
  </div>
</template>

<style>
#description {
  margin-top: 20px;
}

.about {
  padding: 20px;
  margin: 25px auto;
  display: flex;
  flex-direction: column;
  border-left: 1px solid var(--color-border);
  max-width: 100%;
}

@media (min-width: 1024px) {
  .about {
    min-height: 50vh;
    display: flex;
    align-items: center;
  }
}
</style>
