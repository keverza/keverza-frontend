const Products = [
  {
    id: 1,
    name: 'Madagascar Sambirano',
    href: 'madagascar-sambirano',
    price: '2.2 eur',
    imageSrc: '/img/amirali-mirhashemian-RCVIlSXhYI0-unsplash.jpg',
    imageAlt: 'Ripe bunches of cocoa',
    story:
      'Giliai Madagascaro džiunglėse, ūkininkų kooperatyvuose auginamos ne tik kakavos pupelės, bet ir mangai, bananai, vanilė, kava. Dėl to kakava įgauna ypatingai vaisinį skonio profilį su subtiliais jazminų bei vanilės, citrinų aromato užuominom. ',
    features: [
      { name: 'Kilmės šalis', description: 'Madagascar Sambirano' },
      {
        name: 'Porūšis',
        description: 'Trinitario, Criollo ir Forastero mišinys',
      },
      {
        name: 'Sudėtis',
        description: 'Kakavos pupelės, kakavos sviestas, cukrus.',
      },
      {
        name: 'Skonio natos',
        description: 'Raudonieji obuoliai, vyšnios, razinos',
      },
      {
        name: 'Apdorojimo būdas',
        description: 'Fermentuota medinėse dėžese 4-5 d.',
      },
      {
        name: 'Galimi kakavos kiekio variantai',
        description: '92%, 85%, 70%',
      },
    ],
  },
  {
    id: 2,
    name: 'Tanzania Kokoa Kamily',
    href: 'tanzania-kokoa-kamily',
    price: '2.2 eur',
    imageSrc: '/img/kyle-hinkson-fuuhb86A-tE-unsplash.jpg',
    imageAlt:
      'Olive drab green insulated bottle with flared screw lid and flat top.',
    story:
      'Kilombero slėnyje, greta Udzungwa kalno nacionalinio parko smulkieji ūkininkai augina nuostabią pilnos skonių paletės kakavą. Saulėje džiovinta ir atidžiai stebima. Kakava Tanzanijoe turi ilgą istoriją ir didelią kakavos auginimo patirtį nuo pat 1880 kai buvo atplukdytos pirmosios pupelės.',
    features: [
      { name: 'Kilmės šalis', description: 'Tanzania Kilombero Udzungwa' },
      {
        name: 'Porūšis',
        description: 'Trinitario ir Forastero',
      },
      {
        name: 'Sudėtis',
        description: 'Kakavos pupelės, kakavos sviestas, cukrus.',
      },
      {
        name: 'Skonio natos',
        description: 'Uogos, riešutai, obuoliai',
      },
      {
        name: 'Apdorojimo būdas',
        description: 'Fermentuota medinėse dėžese 6 d., džiovinta 5-7 dienas.',
      },
      {
        name: 'Galimi kakavos kiekio variantai',
        description: '92%, 85%, 70%',
      },
    ],
  },
  {
    id: 3,
    name: 'India Idukki',
    href: 'india-idukki',
    price: '2.2 eur',
    imageSrc: '/img/tetiana-bykovets-wcH1vEjwmL8-unsplash.jpg',
    imageAlt:
      'Person using a pen to cross a task off a productivity paper card.',
    story:
      'Žaliasis Idukki slėnis garsus aromatingais prieskoniais ir idealiomis sąlygomis auginti kakavą. Pupelės pasižymi švelnia kremine tekstūra ir turtingais prieskonių ir vaisių aromatais.',
    features: [
      { name: 'Kilmės šalis', description: 'India Idukki' },
      {
        name: 'Porūšis',
        description: 'Trinitario ir Criollo',
      },
      {
        name: 'Sudėtis',
        description: 'Kakavos pupelės, kakavos sviestas, cukranendrių cukrus.',
      },
      {
        name: 'Skonio natos',
        description: 'Vyšnios, vanilė, jazminai',
      },
      {
        name: 'Apdorojimo būdas',
        description: 'Fermentuota medinėse dėžese 5 d.',
      },
      {
        name: 'Galimi kakavos kiekio variantai',
        description: '92%, 85%, 70%',
      },
    ],
  },
  {
    id: 4,
    name: 'Guatemala Cahabón',
    href: 'guatemala-cahabon',
    price: '2.2 eur',
    imageSrc: '/img/tetiana-bykovets-7LKpstdOad0-unsplash.jpg',
    imageAlt:
      'Hand holding black machined steel mechanical pencil with brass tip and top.',
    story:
      'Cahabón regiono kalvose auginamas kardamonas, cinamonas, čili pipirai ir kakava įgyjanti intensyvius prieskoninius aromatus. Cahabón kakavos pupelės yra intensyvios ir nors nėra labai kompleksiško skonio profilio jos maloniai nustebina vaisine rūgštele, riešutiniu kartumu ir viską užbaiginačiomis karamelės užuominomus.',
    features: [
      { name: 'Kilmės šalis', description: 'Guatemala Cahabón' },
      {
        name: 'Porūšis',
        description: 'Trinitario, UF-667 ',
      },
      {
        name: 'Sudėtis',
        description: 'Kakavos pupelės, kakavos sviestas, cukranendrių cukrus.',
      },
      {
        name: 'Skonio natos',
        description: 'Serbentai, kardamonas, karamelė',
      },
      {
        name: 'Apdorojimo būdas',
        description: 'Fermentuota medinėse dėžese 4-5 d.',
      },
      {
        name: 'Galimi kakavos kiekio variantai',
        description: '92%, 85%, 70%',
      },
    ],
  },
  {
    id: 5,
    name: 'São tome Felis Cacao',
    href: 'sao-tome-felis-cacao',
    price: '2.2 eur',
    imageSrc: '/img/michele-blackwell-evRB-x0TJkM-unsplash.jpg',
    imageAlt:
      'Hand holding black machined steel mechanical pencil with brass tip and top.',
    story:
      'São Tomé dar vadinama šokolado sala Afrikoje, kurioje buvo pradėtata auginti ir iki šių dienų išsaugoti autentiški pupelių porūšiai. Šiame regione vyrauja amelonado, trinitario ir forastero pupelių porūšiai pupelėms. Jiems būdingas intensyvus kakavos skonis su vaisinėmis natomis pabaigoje.',
    features: [
      { name: 'Kilmės šalis', description: 'São Tome' },
      {
        name: 'Porūšis',
        description: 'Amelonado, trinitario',
      },
      {
        name: 'Sudėtis',
        description:
          'kakavos pupelės (Trinitario ir Amelonado), kakavos sviestas, cukranendrių cukrus.',
      },
      {
        name: 'Skonio natos',
        description: 'Kakava, vaisiai, uogos',
      },
      {
        name: 'Apdorojimo būdas',
        description: 'Fermentuota medinėse dėžese 6 d.',
      },
      {
        name: 'Galimi kakavos kiekio variantai',
        description: '92%, 85%, 70%, 55%',
      },
    ],
  },
  {
    id: 6,
    name: 'Baltasis Aviečių Šokoladas',
    href: 'white-raspberry',
    price: '2.2 eur',
    imageSrc: '/img/emy-Rx3QSrG1coc-unsplash.jpg',
    imageAlt:
      'Hand holding black machined steel mechanical pencil with brass tip and top.',
    story: 'Baltasis šokoladas su vaisiais.',
    features: [
      { name: 'Kilmės šalis', description: '???' },
      {
        name: 'Porūšis',
        description: '???',
      },
      {
        name: 'Sudėtis',
        description:
          'Kakavos sviestas, cukranendrių cukrus, pieno milteliai, liofilizuotų aviečių milteliai',
      },
      {
        name: 'Skonio natos',
        description: 'Vaisiai, uogos, pienas',
      },
      {
        name: 'Apdorojimo būdas',
        description: 'Fermentuota medinėse dėžese 6 d.',
      },
      {
        name: 'Galimi cukraus kiekio variantai',
        description: '30%, 10%',
      },
    ],
  },
]

export default Products
