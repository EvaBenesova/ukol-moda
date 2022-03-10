import React from 'react';
import Product from '../Product';
import './style.css'

const Accessories = ({ image, name, description, price }) => {
   return (
      <section className='accessories'>
         <h2>Doplňky</h2>
         <div className='products'>
            <Product image='assets/blue-handbag.jpg' name='Modrá kabelka' description='Efektní kožená kabelka v krásné modré barvě poskytne dostatek prostoru pro váš mobil, peněženku a další nezbytnosti.' price='3590 Kč' />
            <Product image='assets/grey-scarf.jpg' name='Šedá vlněná šála' description='Stylová unisexová šála vyrobená ze 100% extra jemné merino vlny. Moderní, jednoduché a věčné.' price='970 Kč' />
            <Product image='assets/glasses.jpg' name='Brýle' description='Kvalitní, stylové a nevšední brýle, které se hodí na každou příležitost.' price='1620 Kč' />
         </div>
      </section>
   )
}

export default Accessories;
