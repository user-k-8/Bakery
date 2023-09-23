
import pastry1 from './img/pastry1.jpg'
import pastry2 from './img/pastry2.jpg'
import pastry3 from './img/pastry3.jpg'
import pastry4 from './img/pastry4.jpg'
import pastry5 from './img/pastry5.png'
import pastry6 from './img/pastry6.jpg'
import pastry7 from './img/p1.jpg'
import card1 from './img/card1.jpg'
import card2 from './img/card2.jpg'
import card3 from './img/card3.jpg'


 const recipeItemsList=[

    {
        title:'Chocolate Fudge Cake',
        id:'chocolateFudgeCake',
        shortDescription:'Indulge in the rich and velvety goodness of our Classic Chocolate Fudge Cake. Layers of moist chocolate cake are generously coated in luscious fudge frosting, making every bite a heavenly chocolate experience.',
        img: pastry1
    , slicePrice:'R15', cakePrice:'R75'},
    {
        title:'Red Velvet Romance',
        id:'redVelvetRomance',
        shortDescription:"Fall in love with our Red Velvet Romance. This classic southern beauty boasts layers of velvety red cocoa cake, complemented by a silky cream cheese frosting. It's a true symbol of love and luxury.",
        img: pastry2
    , slicePrice:'R15', cakePrice:'R75'},

    {
        title:'Vanilla Bean Dream',
        id:'vanillaBeanDream',
        shortDescription:'For a timeless treat, savor our Vanilla Bean Dream. Moist vanilla bean cake layers are stacked high and frosted with a velvety vanilla buttercream, delivering a pure and comforting taste of nostalgia.',
        img: pastry3
    , slicePrice:'R15', cakePrice:'R75'},

    {
        title:'Triple Chocolate Truffle Torte',
        id:'tripleChocolateTruffleTorte',
        shortDescription:'  For the ultimate chocolate lover, our Triple Chocolate Truffle Torte is pure bliss. This decadent creation features layers of dark, milk, and white chocolate cake, coated in a glossy chocolate ganache and adorned with truffle accents.',
        img: pastry4
    , slicePrice:'R15', cakePrice:'R75'},

    {
        title:'Coconut Pineapple Paradise',
        id:'coconutPineappleParadise',
        shortDescription:'Transport yourself to a tropical paradise with our Coconut Pineapple Paradise. Moist coconut cake layers are filled with luscious pineapple compote and topped with a fluffy coconut cream frosting, delivering a taste of the islands in every bite.',
        img: pastry5
    , slicePrice:'R15', cakePrice:'R75'},

    {
        title:'Strawberry Shortcake Bliss',
        id:'strawberryShortcakeBliss',
        shortDescription:'Experience the essence of summer with our Strawberry Shortcake Bliss. Tender layers of vanilla sponge cake are layered with fresh, ripe strawberries and billowy whipped cream for a light and refreshing dessert.',
        img: pastry7
    , slicePrice:'R15', cakePrice:'R75'},

    {
        title:'Lemon Raspberry Delight',
        id:'lemonRaspberryDelight',
        shortDescription:' Brighten your day with our Lemon Raspberry Delight. This zesty lemon cake is filled with a sweet raspberry compote and topped with a tangy lemon glaze, creating a perfect blend of tart and sweet flavors.',
        img: pastry6
    , slicePrice:'R15', cakePrice:'R75'}
]




 const cards =[

    {heading:'New Menu',
     img:card1,
     description:`At Homemade Bakery, we take pride in offering an array of mouthwatering treats to satisfy your every craving. Our freshly baked bread, from 
     crusty artisan loaves to soft, aromatic baguettes, will elevate your sandwich game to a whole new level. `,
    footer:'See our new menu'},

    {heading:'Order now',
    img: card2,
    description:`Step into our bakery and be greeted by the aroma of savory delights that are sure to tantalize your taste buds. From flaky spinach and feta stuffed croissants 
    to hearty quiches brimming with fresh vegetables and cheese, our savory pastry selection is perfect for breakfast, brunch, or dinner.`,
   footer:'Make an order now'},

   {heading:'Opening hours',
   img: card3,
   description:` Celebrate life's special moments with a custom cake from Homemade Bakery. Our skilled cake artists can turn your vision into a delectable reality, 
   whether it's a whimsical birthday cake, an elegant wedding masterpiece, or a themed cake for any occasion. `,
  footer:'Mon - Sat : 9am - 10pm'}
]

export {recipeItemsList, cards}