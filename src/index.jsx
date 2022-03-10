import React from 'react';
import { render } from 'react-dom';
import './style.css';

import Header from './components/Header';
import Footer from './components/Footer';
import Dresses from './components/Dresses';
import Shoes from './components/Shoes';
import Accessories from './components/Accessories';

const App = () => (
  <div className='container'>
    <Header title='Móda' />
    <section className='dresses'>
      <h2>Šaty</h2>
      <div className='products'>
        <Dresses image='/assets/red-dress.jpg' name='Červené šaty' description='V barvě jahod! Krátké šaty v sytě červeném odstínu Váš šatník nekompromisně nabijí energií.' price= '2290 Kč'/>
        <Dresses image='assets/flower-dress.jpg' name='Květované šaty' description='Vzdušné, rozevláté a především velmi pohodlné! Tyhle šaty od dánské značky zkrátka nebudete chtít sundat.' price= '3100 Kč'/>
        <Dresses image='assets/yellow-dress.jpg' name='Žluté šaty' description='Žluté jako slunce! Volnější plátěné šaty s vypasovanou siluetou mají potenciál slušet opravdu každé postavě.' price= '4250 Kč'/>
      </div>
    </section>

    <section className='shoes'>
      <h2>Boty</h2>
      <div className='products'>
        <Shoes image='assets/running-shoes.jpg' name='Běhací tenisky' description='Růžová s kontrastními šedými a bílými detaily? Veliká paráda! Tyhle tenisky jsou další srdcová záležitost.' price= '1790 Kč'/>
        <Shoes image='assets/shiny-shoes.jpg' name='Třpytivé lodičky' description='Elegantní třpyticé lodičky, které padnou skoro ke každému outfitu. Toto nesmí ve vašem šatníku chybět.' price= '2950 Kč'/>
        <Shoes image='assets/red-shoes.jpg' name='Červené botičky' description='Extravagantní červené boty s vysokým šnerováním. V těchto botách se zá vámi budou všichni otáčet.' price= '6200 Kč'/>
      </div>
    </section>
    <section className='accessories'>
      <h2>Doplňky</h2>
      <div className='products'>
        <Accessories image='assets/blue-handbag.jpg' name='Modrá kabelka' description='Efektní kožená kabelka v krásné modré barvě poskytne dostatek prostoru pro váš mobil, peněženku a další nezbytnosti.' price= '3590 Kč'/>
        <Accessories image='assets/grey-scarf.jpg' name='Šedá vlněná šála' description='Stylová unisexová šála vyrobená ze 100% extra jemné merino vlny. Moderní, jednoduché a věčné.' price= '970 Kč'/>
        <Accessories image='assets/glasses.jpg' name='Brýle' description='Kvalitní, stylové a nevšední brýle, které se hodí na každou příležitost.' price= '1620 Kč'/>
      </div>
    </section>
    <Footer year='2022' author='Czechitas' />
  </div>
);

render(<App />, document.querySelector('#app'));
