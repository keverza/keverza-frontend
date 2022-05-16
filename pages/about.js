import Layout from '../components/layout'
import Footer from '../components/Footer'
import HeaderStatic from '../components/HeaderStatic'

const About = () => {
  return (
    <div className="flex min-h-screen flex-col items-start justify-center py-2">
      <HeaderStatic />
      <div className="h-20"></div>
      <div className="mx-auto">
        <section className="prose ">
          <h3 className="">Trumpai apie Kevérzos šokolado gamybą</h3>
          <p>
            <ol className="">
              <li>
                Šokoladą gaminame nuo pradžių pradžios atrinkdami geriausias
                kakavos pupelių rūšis. Ne visos rūšys yra tinkamos geram
                šokoladui, dėl to atsirinkti skaniausią rūšį ir regioną yra
                begalo atsakingas žingsnis.
              </li>
              <li>
                Kiekvienas derlius turi savitus aromatus ir skonį, kiekvieną
                rūšis turi begalę stebuklingų skonio niuansų: vaisiniai,
                citrusiniai, riešutiniai, karameliniai... Gamindami šokoladą nuo
                pupelės iki plytelės turime nuostabią galimybę išgryninti šias
                gamtos dovanas.
              </li>
              <li>
                Siekiant sukurti tobulą produktą atsirenkame labiausiai
                patyrusius ūkius. Vien kakavos nuskynimas yra nepaprastas
                iššukis. Kakava turi būti nuskinta tinkamu brandos momentu, o
                tam reikalinga gili ūkininkavimo patirtis ir tradicijos.
                Nuskynus sunokusį vaisių pupelės yra išimamos ir fermentuojamos
                mažiausiai savaitę ir kiekvieną diena apverčiamos, kad būtų
                išlaisvinti aromatai.
              </li>
              <li>
                Gavę pupeles mes - kevérzos - ilgai eksperimentuojame tol kol
                pasiekiame trokštamus rezultatus. Pupeles skrudiname
                išlaisvindami aromatus, malame kol pasiekiame norimą tekstūrą,
                končiuojame kai norime sušvelninti. Galiausiai temperuojame, kad
                jūsų namus pasiektų traškus ir blizgus šokoladas.
              </li>
              <li>
                Viską užbaigiame atsakingai supakuodami šokolado plyteles į
                rankų darbo pakuotes.
              </li>
            </ol>
          </p>
        </section>
        <section className="prose prose-slate">
          <h3 className="">Kaip ragauti Kevérzos šokoladą</h3>
          <p className="">
            Valgyti ir ragauti šokoladą tai du skirtingi dalykai. Su šokolado
            gabalėliu nereikia skubėti. Tikslas iš lėto ragaujant susitelkti į
            pojūčius ir subjektyviai apibūdinti šokoladą. Kiekvienas pojūtis
            sukurs naujų asociacijų, kurios padės palyginti šokoladus
            tarpusavyje, atrasti mylimiausią rūšį ir pažinti naujus skonio
            subtilumus. Ragaudami šokoladą atkreipkite dėmesį į:
          </p>
          <p>
            <ul className="">
              <li>jo spalvą ir jos intensyvumą,</li>
              <li>į pojūtį rankose, jo tirpimas ar kietumas, tvirtumą,</li>
              <li>į garso skardumą ar duslumą atlaužus gabalėlį,</li>
              <li>į kvapo intensyvumą ar kompleksiškumą,</li>
              <li>ir galiausiai į skonį.</li>
            </ul>
          </p>
          <blockquote>
            <h4>
              "Jei paskubėsite suvalgyti šokoladą pastebėsite tik grubiausias
              skonio natas jo saldumą ar kartumą. Tačiau leisdami šokoladui
              tirpti burnoje atsiskleis platesnė skonių paletė."
            </h4>
          </blockquote>

          <p>
            Kalbant apie šokolado skonį, paėmus gabalėlį reiktų išsitraukt
            užrašinę ir apibūdinti šokoladą:
            <ul className="">
              <li>
                <strong>koks skonis?</strong> - tai šokolado pamatas (sūru,
                saldu, kartu, rūgštu ir umami),
              </li>
              <li>
                <strong>koks poskonis?</strong>- tai subtilesnė šokolado dalis,
                kurią jaučiame naudodamiesi uosle ir nuriję maistą. Poskoniui
                apibūdinti ne visada randame tinkamus žodžius ir dažnai
                pasitelkiame spalvas ar kitas asociacijas. Pabandykite paragauti
                šokolado užspaudę nosį - tai padės suvokti skonio ir poskonio
                skirtumus. Užsikimšę nosį pastebėsite tik grubiausias skonio
                natas - saldumą ir turbūt nieko daugiau, o atkimšus atsikleis
                visą šokolado paletė. Šokoladas kaip ir kava turi šimtus
                aromatinių dalelių, kurias galime pajusti, bet nevisada randame
                tinkamų žodžių joms apibūdinti - žalias, vaisinis, šviesus?!
              </li>
              <li>
                <strong>kokia tekstūrą?</strong>- paprastai apibūdinama kaip
                švelni, rūpi ar lipni,
              </li>
              <li>
                <strong>koks pojūtis burnoje?</strong>- tai subtilesnes
                tekstūros dalis (intensyvi, sodri, kreminė, švari). Smulkiau
                sumaltas šokoladas gali veltis burnoje, o daug sviesto turintis
                tirps švariai.
              </li>
            </ul>
          </p>
          <p>
            Degustuojant naudinga turėti kelis skirtingus šokoladus, nes
            lygindami juos galime atrasti naujus pojūčius. Tikimės kad tai padės
            jums įvertinti šokoladą ir įžvelgsite daugiau skirtumų tarp
            skirtingų rūšių.
          </p>
        </section>
      </div>
      <Footer />
    </div>
  )
}

export default About
