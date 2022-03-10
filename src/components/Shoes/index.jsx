import React from 'react';
import Product from '../Product';
import './style.css'

const Shoes = ({ image, name, description, price }) => {
   return (
      <section className='shoes'>
         <h2>Boty</h2>
         <div className='products'>
            <Product image='assets/running-shoes.jpg' name='Běhací tenisky' description='Růžová s kontrastními šedými a bílými detaily? Veliká paráda! Tyhle tenisky jsou další srdcová záležitost.' price='1790 Kč' />
            <Product image='assets/shiny-shoes.jpg' name='Třpytivé lodičky' description='Elegantní třpyticé lodičky, které padnou skoro ke každému outfitu. Toto nesmí ve vašem šatníku chybět.' price='2950 Kč' />
            <Product image='assets/red-shoes.jpg' name='Červené botičky' description='Extravagantní červené boty s vysokým šnerováním. V těchto botách se zá vámi budou všichni otáčet.' price='6200 Kč' />
         </div>
      </section>
   )
}

export default Shoes;
