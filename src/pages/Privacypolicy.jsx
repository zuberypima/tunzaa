import React, { useEffect } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { useLanguageContext } from "../LanguageContext";
const Privacypolicy = () => {
  const { lang } = useLanguageContext();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="min-h-screen bg-[#2F56A1]">
      <Navbar />
      {lang == "en" ? (
        <section className="bg-white">
          <div className="lg:pb-13 container mx-auto flex max-w-screen-xl flex-col px-4 pb-8 sm:px-12 ">
            <p className="pt-6 font-poppins text-sm font-light  text-gray-500 sm:text-base ">
              Tunzaa Fintech ("us", "we", or "our") operates the tunzaa.co.tz
              website (the "Service").
            </p>
            <p className="pt-3 font-poppins text-sm font-light  text-gray-500 sm:text-base ">
              This page informs you of our policies regarding the collection,
              use, and disclosure of personal data when you use our Service and
              the choices you have associated with that data.
            </p>
            <p className="pt-3 font-poppins text-sm font-light  text-gray-500 sm:text-base ">
              We use your data to provide and improve the Service. By using the
              Service, you agree to the collection and use of information in
              accordance with this policy. Unless otherwise defined in this
              Privacy Policy, terms used in this Privacy Policy have the same
              meanings as in our
              <a
                className="text-blue-500 hover:cursor-pointer"
                href="https://tunzaa.co.tz/en/terms-of-service"
              >
                Terms and Conditions
              </a>
              Terms and Conditions, accessible from tunzaa.co.tz.
            </p>
            <p className="pt-6 text-start font-poppins text-xl font-bold uppercase sm:text-3xl">
              INFORMATION COLLECTION AND USE
            </p>
            <p className="pt-3 font-poppins text-sm font-light  text-gray-500 sm:text-base ">
              We collect several different types of information for various
              purposes to provide and improve our Service to you.
            </p>
            <p className="pt-6 text-start font-poppins text-xl  font-bold sm:text-2xl">
              Types of Data Collected
            </p>
            <p className="sm:xl pt-3 font-poppins text-lg  font-bold text-black ">
              Personal Data
            </p>{" "}
            <p className="pt-6 font-poppins text-sm font-light  text-gray-500 sm:text-base ">
              While using our Service, we may ask you to provide us with certain
              personally identifiable information that can be used to contact or
              identify you ("Personal Data"). Personally identifiable
              information may include, but is not limited to:
            </p>
            <ul className="list-disc pl-11 font-poppins text-sm font-light  text-gray-500 sm:text-base ">
              <li>Email address</li>
              <li>First name and last name</li>
              <li>Phone number</li>
              <li>Cookies and Usage Data</li>
            </ul>
            <p className="sm:xl pt-6 font-poppins text-lg  font-bold text-black ">
              Usage Data
            </p>{" "}
            <p className="pt-3 font-poppins text-sm font-light  text-gray-500 sm:text-base ">
              We may also collect information how the Service is accessed and
              used ("Usage Data"). This Usage Data may include information such
              as your computer's Internet Protocol address (e.g. IP address),
              browser type, browser version, the pages of our Service that you
              visit, the time and date of your visit, the time spent on those
              pages, unique device identifiers and other diagnostic data.
            </p>
            <p className="sm:xl pt-6 font-poppins text-lg  font-bold text-black ">
              Tracking & Cookies Data
            </p>
            <p className="pt-3 font-poppins text-sm font-light  text-gray-500 sm:text-base ">
              We use cookies and similar tracking technologies to track the
              activity on our Service and hold certain information.
            </p>
            <p className="pt-3 font-poppins text-sm font-light  text-gray-500 sm:text-base ">
              Cookies are files with small amount of data which may include an
              anonymous unique identifier. Cookies are sent to your browser from
              a website and stored on your device. Tracking technologies also
              used are beacons, tags, and scripts to collect and track
              information and to improve and analyze our Service.
            </p>
            <p className="pt-3 font-poppins text-sm font-light  text-gray-500 sm:text-base ">
              You can instruct your browser to refuse all cookies or to indicate
              when a cookie is being sent. However, if you do not accept
              cookies, you may not be able to use some portions of our Service.
            </p>
            <p className="pt-3 font-poppins text-sm font-light  text-gray-500 sm:text-base ">
              Examples of Cookies we use:
            </p>
            <ul className="list-disc pl-11 font-poppins text-sm font-light  text-gray-500 sm:text-base ">
              <li>
                <span className="font-bold">Session Cookies.</span> We use
                Session Cookies to operate our Service.
              </li>
              <li>
                <span className="font-bold">Preference Cookies.</span> We use
                Preference Cookies to remember your preferences and various
                settings.
              </li>
              <li>
                <span className="font-bold">Security Cookies.</span> We use
                Security Cookies for security purposes.
              </li>
            </ul>
            <p className="pt-6 text-start font-poppins text-xl  font-bold sm:text-2xl">
              Use of Data
            </p>
            <p className="pt-3 font-poppins text-sm font-light  text-gray-500 sm:text-base ">
              Tunzaa Fintech uses the collected data for various purposes:
            </p>
            <ul className="list-disc pl-11 font-poppins text-sm font-light  text-gray-500 sm:text-base ">
              <li>To provide and maintain the Service</li>
              <li>To notify you about changes to our Service</li>
              <li>
                To allow you to participate in interactive features of our
                Service when you choose to do so
              </li>
              <li>To provide customer care and support</li>
              <li>
                To provide analysis or valuable information so that we can
                improve the Service
              </li>
              <li>To monitor the usage of the Service</li>
              <li>To detect, prevent and address technical issues</li>
            </ul>
            <p className="pt-6 text-start font-poppins text-xl  font-bold sm:text-2xl">
              Transfer Of Data
            </p>
            <p className="pt-3 font-poppins text-sm font-light  text-gray-500 sm:text-base ">
              Your information, including Personal Data, may be transferred to —
              and maintained on — computers located outside of your state,
              province, country or other governmental jurisdiction where the
              data protection laws may differ than those from your jurisdiction.
            </p>
            <p className="pt-3 font-poppins text-sm font-light  text-gray-500 sm:text-base ">
              If you are located outside Tanzania and choose to provide
              information to us, please note that we transfer the data,
              including Personal Data, to Tanzania and process it there.
            </p>
            <p className="pt-3 font-poppins text-sm font-light  text-gray-500 sm:text-base ">
              Your consent to this Privacy Policy followed by your submission of
              such information represents your agreement to that transfer.
            </p>{" "}
            <p className="pt-3 font-poppins text-sm font-light  text-gray-500 sm:text-base ">
              Tunzaa Fintech will take all steps reasonably necessary to ensure
              that your data is treated securely and in accordance with this
              Privacy Policy and no transfer of your Personal Data will take
              place to an organization or a country unless there are adequate
              controls in place including the security of your data and other
              personal information.
            </p>
            <p className="pt-6 text-start font-poppins text-xl  font-bold sm:text-2xl">
              Disclosure Of Data
            </p>{" "}
            <p className="sm:xl pt-6 font-poppins text-lg  font-bold text-black ">
              Legal Requirements
            </p>
            <p className="pt-3 pb-3 font-poppins text-sm font-light  text-gray-500 sm:text-base ">
              Tunzaa Fintech may disclose your Personal Data in the good faith
              belief that such action is necessary to:
            </p>
            <ul className="list-disc pl-11 font-poppins text-sm font-light  text-gray-500 sm:text-base ">
              <li>To comply with a legal obligation</li>
              <li>
                To protect and defend the rights or property of Tunzaa Fintech
              </li>
              <li>
                To prevent or investigate possible wrongdoing in connection with
                the Service
              </li>
              <li>
                To protect the personal safety of users of the Service or the
                public
              </li>
              <li>To protect against legal liability</li>
            </ul>
            <p className="sm:xl pt-6 font-poppins text-lg  font-bold text-black ">
              Security Of Data
            </p>{" "}
            <p className="pt-3 font-poppins text-sm font-light  text-gray-500 sm:text-base ">
              The security of your data is important to us, but remember that no
              method of transmission over the Internet, or method of electronic
              storage is 100% secure. While we strive to use commercially
              acceptable means to protect your Personal Data, we cannot
              guarantee its absolute security.
            </p>
            <p className="sm:xl pt-6 font-poppins text-lg  font-bold text-black ">
              Service Providers
            </p>{" "}
            <p className="pt-3 font-poppins text-sm font-light  text-gray-500 sm:text-base ">
              We may employ third party companies and individuals to facilitate
              our Service ("Service Providers"), to provide the Service on our
              behalf, to perform Service-related services or to assist us in
              analyzing how our Service is used.
            </p>
            <p className="pt-3 font-poppins text-sm font-light  text-gray-500 sm:text-base ">
              These third parties have access to your Personal Data only to
              perform these tasks on our behalf and are obligated not to
              disclose or use it for any other purpose.
            </p>
            <p className="pt-6 text-start font-poppins text-xl  font-bold sm:text-2xl">
              Analytics
            </p>{" "}
            <p className="pt-3 font-poppins text-sm font-light  text-gray-500 sm:text-base ">
              We may use third-party Service Providers to monitor and analyze
              the use of our Service.
            </p>
            <p className="pt-6 text-start font-poppins text-xl  font-bold sm:text-2xl">
              Links To Other Sites
            </p>{" "}
            <p className="pt-3 font-poppins text-sm font-light  text-gray-500 sm:text-base ">
              Our Service may contain links to other sites that are not operated
              by us. If you click on a third party link, you will be directed to
              that third party's site. We strongly advise you to review the
              Privacy Policy of every site you visit.
            </p>
            <p className="pt-3 font-poppins text-sm font-light  text-gray-500 sm:text-base ">
              We have no control over and assume no responsibility for the
              content, privacy policies or practices of any third party sites or
              services.
            </p>
            <p className="pt-6 text-start font-poppins text-xl  font-bold sm:text-2xl">
              Children's Privacy
            </p>{" "}
            <p className="pt-3 font-poppins text-sm font-light  text-gray-500 sm:text-base ">
              Our Service does not address anyone under the age of 18
              ("Children").
            </p>
            <p className="pt-3 font-poppins text-sm font-light  text-gray-500 sm:text-base ">
              We do not knowingly collect personally identifiable information
              from anyone under the age of 18. If you are a parent or guardian
              and you are aware that your Children has provided us with Personal
              Data, please contact us. If we become aware that we have collected
              Personal Data from children without verification of parental
              consent, we take steps to remove that information from our
              servers.
            </p>{" "}
            <p className="pt-6 text-start font-poppins text-xl  font-bold sm:text-2xl">
              Changes To This Privacy Policy
            </p>{" "}
            <p className="pt-3 font-poppins text-sm font-light  text-gray-500 sm:text-base ">
              We may update our Privacy Policy from time to time. We will notify
              you of any changes by posting the new Privacy Policy on this page.
            </p>
            <p className="pt-3 font-poppins text-sm font-light  text-gray-500 sm:text-base ">
              We will let you know via email and/or a prominent notice on our
              Service, prior to the change becoming effective and update the
              "effective date" at the top of this Privacy Policy.
            </p>
            <p className="pt-3 font-poppins text-sm font-light  text-gray-500 sm:text-base ">
              You are advised to review this Privacy Policy periodically for any
              changes. Changes to this Privacy Policy are effective when they
              are posted on this page.
            </p>
            <p className="pt-6 text-start font-poppins text-xl  font-bold sm:text-2xl">
              Contact Us
            </p>
            <p className="pt-3 font-poppins text-sm font-light  text-gray-500 sm:text-base ">
              For concerns regarding our terms of use and/or privacy policy
              please contact us at our mailing address.
            </p>
          </div>
        </section>
      ) : (
        <section className="bg-white">
          <div className="lg:pb-13 container mx-auto flex max-w-screen-xl flex-col px-4 pb-8 sm:px-12">
            <p className="pt-6 font-poppins text-sm font-light  text-gray-500 sm:text-base ">
              Tunzaa Fintech ("sisi", "sisi", au "yetu") inafanya kazi kwenye
              tovuti ya tunzaa.co.tz ("Huduma").
            </p>
            <p className="pt-3 font-poppins text-sm font-light  text-gray-500 sm:text-base ">
              Ukurasa huu unakujulisha sera zetu kuhusu ukusanyaji na matumizi
              ya data za kibinafsi unapotumia Huduma yetu na chaguzi ambazo
              zimehusishwa na data hizo.
            </p>
            <p className="pt-3 font-poppins text-sm font-light  text-gray-500 sm:text-base ">
              Tunatumia data zako kutoa na kuboresha Huduma. Kwa kutumia Huduma,
              unakubali ukusanyaji na utumiaji wa habari kulingana na sera hii.
              Isipokuwa imefafanuliwa vinginevyo katika Sera hii ya Faragha,
              maneno yanayotumiwa katika Sera hii ya Faragha yana maana sawa na
              katika
              <a
                className="text-blue-500 hover:cursor-pointer"
                href="https://tunzaa.co.tz/sw/terms-of-service"
              >
                Vigezo na Masharti
              </a>
              yetu, yanayopatikana tunzaa.co.tz
            </p>
            <p className="pt-6 text-start font-poppins text-xl font-bold uppercase sm:text-3xl">
              UKUSANYAJI WA TAARIFA NA MATUMIZI
            </p>
            <p className="pt-3 font-poppins text-sm font-light  text-gray-500 sm:text-base ">
              Tunakusanya aina anuwai ya habari kwa madhumuni anuwai ya kutoa na
              kuboresha Huduma yetu kwako.
            </p>
            <p className="pt-6 text-start font-poppins text-xl  font-bold sm:text-2xl">
              Aina za Taarifa Zilizokusanywa
            </p>
            <p className="sm:xl pt-3 font-poppins text-lg  font-bold text-black ">
              Taarifa binafsi
            </p>{" "}
            <p className="pt-6 font-poppins text-sm font-light  text-gray-500 sm:text-base ">
              Wakati unatumia Huduma yetu, tunaweza kukuuliza utupatie taarifa
              fulani inayotambulika ya kibinafsi inayoweza kutumiwa kuwasiliana
              au kukutambulisha ("Taarifa za Kibinafsi"). Maelezo
              yanayotambulika ya kibinafsi yanaweza kujumuisha:
            </p>
            <ul className="list-disc pl-11 font-poppins text-sm font-light  text-gray-500 sm:text-base ">
              <li>Barua pepe</li>
              <li>Jina la kwanza na jina la mwisho</li>
              <li>Nambari ya simu</li>
              <li>Taarifa za Vidakuzi na Matumizi</li>
            </ul>
            <p className="sm:xl pt-6 font-poppins text-lg  font-bold text-black ">
              Taarifa za Matumizi
            </p>{" "}
            <p className="pt-3 font-poppins text-sm font-light  text-gray-500 sm:text-base ">
              Tunaweza pia kukusanya taarifa jinsi Huduma inavyopatikana na
              inavyotumiwa ("Taarifa za Matumizi"). Taarifa hizi za Matumizi
              zinaweza kujumuisha taarifa kama anwani ya Itifaki ya Mtandao ya
              kompyuta yako (kwa mfano anwani ya IP), aina ya kivinjari, toleo
              la kivinjari, kurasa za Huduma zetu ulizotembelea, muda na tarehe
              uliyotumia huduma yetu, muda uliotumia kwenye kurasa hizo, kipekee
              vitambulisho vya kifaa vya kipekeee na data zingine za uchunguzi.
            </p>
            <p className="sm:xl pt-6 font-poppins text-lg  font-bold text-black ">
              Ufuatiliaji na Taarifa za Vidakuzi
            </p>
            <p className="pt-3 font-poppins text-sm font-light  text-gray-500 sm:text-base ">
              Tunatumia vidakuzi na teknolojia kama hizo za ufuatiliaji
              kufuatilia shughuli kwenye Huduma yetu na kutunzaa baadhi ya
              taarifa.
            </p>
            <p className="pt-3 font-poppins text-sm font-light  text-gray-500 sm:text-base ">
              Vidakuzi ni faili zilizo na data ndogo ambazo zinaweza kujumuisha
              kitambulisho cha kipekee kisichojulikana. Vidakuzi hutumwa kwenye
              kivinjari chako kutoka kwa wavuti na kuhifadhiwa kwenye kifaa
              chako. Teknolojia nyingine ufuatiliaji ambazo hutumiwa ni pamoja
              na beacons, vitambulisho, na hati za kukusanya na kufuatilia
              taarifa ili kuboresha na kuchambua Huduma yetu.
            </p>
            <p className="pt-3 font-poppins text-sm font-light  text-gray-500 sm:text-base ">
              Unaweza kuamuru kivinjari chako kukataa vidakuzi vyote au
              kuonyesha vidakuzi vinapotumwa. Hata hivyo, ikiwa haukubali na
              vidakuzi, huenda usiweze kutumia sehemu kadhaa za Huduma yetu.
            </p>
            <p className="pt-3 font-poppins text-sm font-light  text-gray-500 sm:text-base ">
              Mifano ya Vidakuzi tunayotumia:
            </p>
            <ul className="list-disc pl-11 font-poppins text-sm font-light  text-gray-500 sm:text-base ">
              <li>
                <span className="font-bold">Session Cookies.</span> unatumia
                "Session Cookies" kuendesha Huduma yetu.
              </li>
              <li>
                <span className="font-bold">Preference Cookies.</span> Tunatumia
                "Preference Cookies" kukumbuka mapendeleo yako na mipangilio
                anuwai.
              </li>
              <li>
                <span className="font-bold">Security Cookies.</span>
                Tunatumia "Security Cookies" kwa sababu za usalama.
              </li>
            </ul>
            <p className="pt-6 text-start font-poppins text-xl  font-bold sm:text-2xl">
              Matumizi ya Taarifa
            </p>
            <p className="pt-3 font-poppins text-sm font-light  text-gray-500 sm:text-base ">
              Tunzaa Fintech hutumia data zilizokusanywa kwa madhumuni maalum :
            </p>
            <ul className="list-disc pl-11 font-poppins text-sm font-light  text-gray-500 sm:text-base ">
              <li>Kutoa na kudumisha Huduma</li>
              <li>Kukujulisha juu ya mabadiliko kwenye Huduma yetu</li>
              <li>
                Kukuruhusu kushiriki katika huduma zinazoingiliana za Huduma
                yetu wakati unachagua kufanya hivyo
              </li>
              <li>Kutoa huduma na msaada kwa wateja</li>
              <li>
                Kutoa uchambuzi au taarifa muhimu ili tuweze kuboresha Huduma
              </li>
              <li>Kufuatilia matumizi ya Huduma</li>
              <li>Kugundua, kuzuia na kushughulikia maswala ya kiufundi</li>
            </ul>
            <p className="pt-6 text-start font-poppins text-xl  font-bold sm:text-2xl">
              Uhamisho wa Taarifa
            </p>
            <p className="pt-3 font-poppins text-sm font-light  text-gray-500 sm:text-base ">
              Taarifa zako, pamoja na Takwimu za Kibinafsi, zinaweza kuhamishiwa
              kwa - na kudumishwa kwenye - kompyuta zilizo nje ya jimbo lako,
              mkoa, nchi au mamlaka nyingine ya serikali ambapo sheria za ulinzi
              wa data zinaweza kutofautiana na zile zinazotoka kwenye mamlaka
              yako.
            </p>
            <p className="pt-3 font-poppins text-sm font-light  text-gray-500 sm:text-base ">
              Ikiwa uko nje ya Tanzania na unachagua kutupatia taarifa,
              tafadhali kumbuka kuwa tunahamisha data hiyo, pamoja na Takwimu za
              Kibinafsi, kwenda Tanzania na kuichakata huko.
            </p>
            <p className="pt-3 font-poppins text-sm font-light  text-gray-500 sm:text-base ">
              Idhini yako kwa Sera hii ya Faragha ikifuatiwa na uwasilishaji
              wako wa taarifa kama hizo inawakilisha makubaliano yako ya
              uhamisho huo.
            </p>{" "}
            <p className="pt-3 font-poppins text-sm font-light  text-gray-500 sm:text-base ">
              Tunzaa Fintech itachukua hatua zote zinazohitajika kuhakikisha
              kuwa data zako zinathibitiwa salama na kwa mujibu wa Sera hii ya
              Faragha na hakuna uhamisho wowote wa Taarifa zako za kibinafsi
              utafanyika kwa shirika au nchi isipokuwa kuna udhibiti wa kutosha
              ikiwa ni pamoja na usalama wa data zako na taarifa zingine za
              kibinafsi.
            </p>
            <p className="pt-6 text-start font-poppins text-xl  font-bold sm:text-2xl">
              Utoaji wa Taarifa
            </p>{" "}
            <p className="sm:xl pt-6 font-poppins text-lg  font-bold text-black ">
              Mahitaji ya kisheria
            </p>
            <p className="pt-3 pb-3 font-poppins text-sm font-light  text-gray-500 sm:text-base ">
              Tunzaa Fintech inaweza kutoa taarifa zako za kibinafsi kwa lengo
              zuri kwamba hatua kama hiyo ni muhimu kwa:
            </p>
            <ul className="list-disc pl-11 font-poppins text-sm font-light  text-gray-500 sm:text-base ">
              <li>Kuzingatia wajibu wa kisheria</li>
              <li>Kulinda na kutetea haki au mali ya Tunzaa Fintech</li>
              <li>
                Kuzuia au kuchunguza makosa yanayowezekana kuhusiana na Huduma
              </li>
              <li>
                Kulinda usalama wa kibinafsi wa watumiaji wa Huduma au umma
              </li>
              <li>Kulinda dhidi ya dhima ya kisheria</li>
            </ul>
            <p className="sm:xl pt-6 font-poppins text-lg  font-bold text-black ">
              Usalama wa Taarifa
            </p>{" "}
            <p className="pt-3 font-poppins text-sm font-light  text-gray-500 sm:text-base ">
              Usalama wa taarifa zako ni muhimu kwetu, lakini kumbuka kuwa
              hakuna njia ya usambazaji kwenye mtandao, au njia ya uhifadhi wa
              elektroniki iliyo salama kwa 100%. Wakati tunajitahidi kutumia
              njia zinazokubalika kibiashara kulinda Taarifa zako za Kibinafsi,
              hatuwezi kuhakikisha usalama wake kabisa.
            </p>
            <p className="sm:xl pt-6 font-poppins text-lg  font-bold text-black ">
              Watoa Huduma
            </p>{" "}
            <p className="pt-3 font-poppins text-sm font-light  text-gray-500 sm:text-base ">
              Tunaweza kuajiri kampuni za watu wengine na watu binafsi kuwezesha
              Huduma yetu ("Watoa Huduma"), kutoa Huduma kwa niaba yetu,
              kutekeleza huduma zinazohusiana na Huduma au kutusaidia kuchambua
              jinsi Huduma yetu inatumiwa.
            </p>
            <p className="pt-3 font-poppins text-sm font-light  text-gray-500 sm:text-base ">
              Watu hawa wa tatu wana ufikiaji wa Taarifa zako za kibinafsi ili
              tu kufanya kazi hizi kwa niaba yetu na wanalazimika kutozitoa au
              kuzitumia kwa madhumuni mengine yoyote.
            </p>
            <p className="pt-6 text-start font-poppins text-xl  font-bold sm:text-2xl">
              Takwimu
            </p>{" "}
            <p className="pt-3 font-poppins text-sm font-light  text-gray-500 sm:text-base ">
              Tunaweza kutumia Watoa Huduma wa tatu kufuatilia na kuchambua
              matumizi ya Huduma yetu.
            </p>
            <p className="pt-6 text-start font-poppins text-xl  font-bold sm:text-2xl">
              Viunganisho Kwa Tovuti Zingine
            </p>{" "}
            <p className="pt-3 font-poppins text-sm font-light  text-gray-500 sm:text-base ">
              Huduma yetu inaweza kuwa na viungo kwa tovuti zingine ambazo
              haziendeshwi na sisi. Ukibonyeza kiunganisho cha mtu wa tatu,
              utaelekezwa kwa wavuti ya mtu huyo wa tatu. Tunakushauri sana
              kupitia Sera ya Faragha ya kila tovuti unayotembelea.
            </p>
            <p className="pt-3 font-poppins text-sm font-light  text-gray-500 sm:text-base ">
              Hatuna udhibiti na hatuchukui jukumu la maudhui, sera za faragha
              au mazoea ya tovuti au huduma zozote za mtu mwingine.
            </p>
            <p className="pt-6 text-start font-poppins text-xl  font-bold sm:text-2xl">
              Faragha ya Watoto
            </p>{" "}
            <p className="pt-3 font-poppins text-sm font-light  text-gray-500 sm:text-base ">
              Huduma yetu haishughulikii mtu yeyote chini ya umri wa miaka 18
              ("Watoto").
            </p>
            <p className="pt-3 font-poppins text-sm font-light  text-gray-500 sm:text-base ">
              Hatukusanyi kwa kujua taarifa inayotambulika ya kibinafsi kutoka
              kwa mtu yeyote chini ya umri wa miaka 18. Ikiwa wewe ni mzazi au
              mlezi na unajua kuwa Watoto wako wametupatia Taarifa za Kibinafsi,
              tafadhali wasiliana nasi. Ikiwa tutatambua kuwa tumekusanya
              Takwimu za Kibinafsi kutoka kwa watoto bila uthibitisho wa idhini
              ya wazazi, tunachukua hatua za kuondoa taarifa hizo kwenye seva
              zetu.
            </p>{" "}
            <p className="pt-6 text-start font-poppins text-xl  font-bold sm:text-2xl">
              Mabadiliko ya Sera hii ya Faragha
            </p>{" "}
            <p className="pt-3 font-poppins text-sm font-light  text-gray-500 sm:text-base ">
              Tunaweza kusasisha Sera yetu ya Faragha mara kwa mara.
              Tutakujulisha mabadiliko yoyote kwa kuchapisha Sera mpya ya
              Faragha kwenye ukurasa huu.
            </p>
            <p className="pt-3 font-poppins text-sm font-light  text-gray-500 sm:text-base ">
              Tutakufahamisha kupitia barua pepe na / au ilani maarufu kwenye
              Huduma yetu, kabla ya mabadiliko kuwa bora na kusasisha "tarehe ya
              kuanza" juu ya Sera hii ya Faragha.
            </p>
            <p className="pt-3 font-poppins text-sm font-light  text-gray-500 sm:text-base ">
              Unashauriwa kupitia Sera hii ya Faragha mara kwa mara kwa
              mabadiliko yoyote. Mabadiliko ya Sera hii ya Faragha yanaanza
              kutumiaka baada ya kuchapishwa kwenye ukurasa huu.
            </p>
            <p className="pt-6 text-start font-poppins text-xl  font-bold sm:text-2xl">
              Wasiliana nasi
            </p>
            <p className="pt-3 font-poppins text-sm font-light  text-gray-500 sm:text-base ">
              Ikiwa una maswali yoyote kuhusu Sera hii ya Faragha, tafadhali
              wasiliana nasi kwa anwani yetu ya barua.
            </p>
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
};

export default Privacypolicy;
