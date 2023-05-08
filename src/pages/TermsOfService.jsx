import React, { useEffect } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { useLanguageContext } from "../LanguageContext";

const TermsOfService = () => {
  const { lang } = useLanguageContext();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="min-h-screen bg-[#2F56A1]">
      <Navbar />
      {lang == "en" ? (
        <section className="bg-white">
          <div className="lg:pb-13 container mx-auto flex max-w-screen-xl flex-col px-4 pb-8 sm:px-12">
            <p className="pt-6 text-start font-poppins text-xl  font-bold sm:text-2xl">
              Terms and Conditions
            </p>
            <p className="text-end font-poppins text-sm font-semibold  italic   text-gray-400 sm:text-base ">
              Published on: 17 April 2021
            </p>
            <p className="pt-3 font-poppins text-sm font-light  text-gray-500 sm:text-base ">
              These terms and conditions outline the rules and regulations for
              the use of Tunzaa Fintech's Website, located at{" "}
              <a
                className="text-blue-500 hover:cursor-pointer"
                href="https://tunzaa.co.tz"
              >
                tunzaa.co.tz.
              </a>
            </p>
            <p className="pt-3 font-poppins text-sm font-light  text-gray-500 sm:text-base ">
              By accessing this website we assume you accept these terms and
              conditions. Do not continue to use Tunzaa if you do not agree to
              take all of the terms and conditions stated on this page.
            </p>
            <p className="pt-3 font-poppins text-sm font-light  text-gray-500 sm:text-base ">
              The following terminology applies to these Terms and Conditions,
              Privacy Statement and Disclaimer Notice and all Agreements:
              "Client", "You" and "Your" refers to you, the person log on this
              website and compliant to the Company’s terms and conditions. "The
              Company", "Ourselves", "We", "Our" and "Us", refers to our
              Company. "Party", "Parties", or "Us", refers to both the Client
              and ourselves. All terms refer to the offer, acceptance and
              consideration of payment necessary to undertake the process of our
              assistance to the Client in the most appropriate manner for the
              express purpose of meeting the Client’s needs in respect of the
              provision of the Company’s stated services, in accordance with and
              subject to, prevailing law of the United Republic of Tanzania. Any
              use of the above terminology or other words in the singular,
              plural, capitalization and/or he/she or they, are taken as
              interchangeable and therefore as referring to same.
            </p>
            <p className="pt-6 text-start font-poppins text-xl  font-bold sm:text-2xl">
              Cookies
            </p>
            <p className="pt-3 font-poppins text-sm font-light  text-gray-500 sm:text-base ">
              We employ the use of cookies. By accessing Tunzaa, you agreed to
              use cookies in agreement with Tunzaa Fintech's Privacy Policy.
            </p>
            <p className="pt-3 font-poppins text-sm font-light  text-gray-500 sm:text-base ">
              Most interactive websites use cookies to let us retrieve the
              user’s details for each visit. Cookies are used by our website to
              enable the functionality of certain areas to make it easier for
              people visiting our website. Some of our affiliate/advertising
              partners may also use cookies.
            </p>{" "}
            <p className="pt-6 text-start font-poppins text-xl  font-bold sm:text-2xl">
              License
            </p>
            <p className="pt-3 font-poppins text-sm font-light  text-gray-500 sm:text-base ">
              Unless otherwise stated, Tunzaa Fintech and/or its licensors own
              the intellectual property rights for all material on Tunzaa. All
              intellectual property rights are reserved. You may access this
              from Tunzaa for your own personal use subjected to restrictions
              set in these terms and conditions.
            </p>
            <p className="pt-3 font-poppins text-sm font-light  text-gray-500 sm:text-base ">
              You must not:
            </p>
            <ul className="list-disc pl-11 font-poppins text-sm font-light  text-gray-500 sm:text-base ">
              <li>Republish material from Tunzaa</li>
              <li>Sell, rent or sub-license material from Tunzaa</li>
              <li>Reproduce, duplicate or copy material from Tunzaa</li>
              <li>Redistribute content from Tunzaa</li>
            </ul>
            <p className="pt-3 font-poppins text-sm font-light  text-gray-500 sm:text-base ">
              Parts of this website offer an opportunity for users to post and
              exchange opinions and information in certain areas of the website.
              Tunzaa Fintech does not filter, edit, publish or review Comments
              prior to their presence on the website. Comments do not reflect
              the views and opinions of Tunzaa Fintech, its agents and/or
              affiliates. Comments reflect the views and opinions of the person
              who post their views and opinions. To the extent permitted by
              applicable laws, Tunzaa Fintech shall not be liable for the
              Comments or for any liability, damages or expenses caused and/or
              suffered as a result of any use of and/or posting of and/or
              appearance of the Comments on this website.
            </p>
            <p className="pt-3 font-poppins text-sm font-light  text-gray-500 sm:text-base ">
              Tunzaa Fintech reserves the right to monitor all Comments and to
              remove any Comments which can be considered inappropriate,
              offensive or causes breach of these Terms and Conditions.
            </p>{" "}
            <p className="pt-3 font-poppins text-sm font-light  text-gray-500 sm:text-base ">
              You warrant and represent that:
            </p>
            <ul className="list-disc pl-11 font-poppins text-sm font-light  text-gray-500 sm:text-base ">
              <li>
                You are entitled to post the Comments on our website and have
                all necessary licenses and consents to do so;
              </li>
              <li>
                The Comments do not invade any intellectual property right,
                including without limitation copyright, patent or trademark of
                any third party;
              </li>
              <li>
                The Comments do not contain any defamatory, libellous,
                offensive, indecent or otherwise unlawful material which is an
                invasion of privacy
              </li>
              <li>
                The Comments will not be used to solicit or promote business or
                custom or present commercial activities or unlawful activity.
              </li>
            </ul>
            <p className="pt-3 font-poppins text-sm font-light  text-gray-500 sm:text-base ">
              You hereby grant Tunzaa Fintech a non-exclusive license to use,
              reproduce, edit and authorize others to use, reproduce and edit
              any of your Comments in any and all forms, formats or media.
            </p>{" "}
            <p className="pt-6 text-start font-poppins text-xl  font-bold sm:text-2xl">
              Hyperlinking to our Content
            </p>
            <p className="pt-3 font-poppins text-sm font-light  text-gray-500 sm:text-base ">
              The following organizations may link to our Website without prior
              written approval:
            </p>
            <ul className="list-disc pl-11 font-poppins text-sm font-light  text-gray-500 sm:text-base ">
              <li>Government agencies;</li>
              <li>Search engines;</li>
              <li>News organizations;</li>
              <li>
                Online directory distributors may link to our Website in the
                same manner as they hyperlink to the Websites of other listed
                businesses; and
              </li>
              <li>
                Systemwide Accredited Businesses except soliciting non-profit
                organizations, charity shopping malls, and charity fundraising
                groups which may not hyperlink to our Web site.
              </li>
            </ul>
            <p className="pt-3 font-poppins text-sm font-light  text-gray-500 sm:text-base ">
              These organizations may link to our home page, to publications or
              to other Website information so long as the link: (a) is not in
              any way deceptive; (b) does not falsely imply sponsorship,
              endorsement or approval of the linking party and its products
              and/or services; and (c) fits within the context of the linking
              party’s site.
            </p>{" "}
            <p className="pt-3 font-poppins text-sm font-light  text-gray-500 sm:text-base ">
              We may consider and approve other link requests from the following
              types of organizations:
            </p>
            <ul className="list-disc pl-11 font-poppins text-sm font-light  text-gray-500 sm:text-base ">
              <li>
                commonly-known consumer and/or business information sources;
              </li>
              <li>dot.com community sites;</li>
              <li>associations or other groups representing charities;</li>
              <li>online directory distributors;</li>
              <li>internet portals;</li>
              <li>accounting, law and consulting firms; and</li>
              <li>educational institutions and trade associations.</li>
            </ul>
            <p className="pt-3 font-poppins text-sm font-light  text-gray-500 sm:text-base ">
              We will approve link requests from these organizations if we
              decide that: (a) the link would not make us look unfavourably to
              ourselves or to our accredited businesses; (b) the organization
              does not have any negative records with us; (c) the benefit to us
              from the visibility of the hyperlink compensates the absence of
              Tunzaa Fintech, and (d) the link is in the context of general
              resource information.
            </p>
            <p className="pt-3 font-poppins text-sm font-light  text-gray-500 sm:text-base ">
              These organizations may link to our home page so long as the link:
              (a) is not in any way deceptive; (b) does not falsely imply
              sponsorship, endorsement or approval of the linking party and its
              products or services; and (c) fits within the context of the
              linking party’s site.
            </p>
            <p className="pt-3 font-poppins text-sm font-light  text-gray-500 sm:text-base ">
              If you are one of the organizations listed in paragraph 2 above
              and are interested in linking to our website, you must inform us
              by sending an e-mail to Tunzaa Fintech. Please include your name,
              your organization name, contact information as well as the URL of
              your site, a list of any URLs from which you intend to link to our
              Website, and a list of the URLs on our site to which you would
              like to link. Wait 2-3 weeks for a response.
            </p>
            <p className="pt-3 font-poppins text-sm font-light  text-gray-500 sm:text-base ">
              Approved organizations may hyperlink to our Website as follows:
            </p>
            <ul className="list-disc pl-11 font-poppins text-sm font-light  text-gray-500 sm:text-base ">
              <li>By use of our corporate name; or </li>
              <li>
                By use of the uniform resource locator being linked to; or
              </li>
              <li>
                By use of any other description of our Website being linked to
                that makes sense within the context and format of content on the
                linking party’s site.
              </li>
            </ul>
            <p className="pt-3 font-poppins text-sm font-light  text-gray-500 sm:text-base ">
              No use of Tunzaa Fintech's logo or other artwork will be allowed
              for linking absent a trademark license agreement.
            </p>
            <p className="pt-6 text-start font-poppins text-xl  font-bold sm:text-2xl">
              iFrames
            </p>
            <p className="pt-3 font-poppins text-sm font-light  text-gray-500 sm:text-base ">
              Without prior approval and written permission, you may not create
              frames around our Webpages that alter in any way the visual
              presentation or appearance of our Website.
            </p>
            <p className="pt-6 text-start font-poppins text-xl  font-bold sm:text-2xl">
              Content Liability
            </p>
            <p className="pt-3 font-poppins text-sm font-light  text-gray-500 sm:text-base ">
              We shall not be held responsible for any content that appears on
              your Website. You agree to protect and defend us against all
              claims that are rising on your Website. No link(s) should appear
              on any Website that may be interpreted as libellous, obscene or
              criminal, or which infringes, otherwise violates, or advocates the
              infringement or other violation of, any third party rights.
            </p>
            <p className="pt-6 text-start font-poppins text-xl  font-bold sm:text-2xl">
              Reservation of Rights
            </p>
            <p className="pt-3 font-poppins text-sm font-light  text-gray-500 sm:text-base ">
              We reserve the right to request that you remove all links or any
              particular link to our Website. You approve to immediately remove
              all links to our Website upon request. We also reserve the right
              to amend these terms and conditions and its linking policy at any
              time. By continuously linking to our Website, you agree to be
              bound to and follow these linking terms and conditions.
            </p>
            <p className="pt-6 text-start font-poppins text-xl  font-bold sm:text-2xl">
              Removal of links from our website
            </p>
            <p className="pt-3 font-poppins text-sm font-light  text-gray-500 sm:text-base ">
              If you find any link on our Website that is offensive for any
              reason, you are free to contact and inform us at any moment. We
              will consider requests to remove links but we are not obligated to
              or so or to respond to you directly.
            </p>{" "}
            <p className="pt-3 font-poppins text-sm font-light  text-gray-500 sm:text-base ">
              We do not ensure that the information on this website is correct,
              we do not warrant its completeness or accuracy; nor do we promise
              to ensure that the website remains available or that the material
              on the website is kept up to date.
            </p>
            <p className="pt-6 text-start font-poppins text-xl  font-bold sm:text-2xl">
              Disclaimer{" "}
            </p>{" "}
            <p className="pt-3 font-poppins text-sm font-light  text-gray-500 sm:text-base ">
              To the maximum extent permitted by applicable law, we exclude all
              representations, warranties and conditions relating to our website
              and the use of this website. Nothing in this disclaimer will:
            </p>
            <ul className="list-disc pl-11 font-poppins text-sm font-light  text-gray-500 sm:text-base ">
              <li>
                limit or exclude our or your liability for death or personal
                injury;
              </li>
              <li>
                limit or exclude our or your liability for fraud or fraudulent
                misrepresentation;
              </li>
              <li>
                limit any of our or your liabilities in any way that is not
                permitted under applicable law; or
              </li>
              <li>
                exclude any of our or your liabilities that may not be excluded
                under applicable law.
              </li>
            </ul>
            <p className="pt-3 font-poppins text-sm font-light  text-gray-500 sm:text-base ">
              The limitations and prohibitions of liability set in this Section
              and elsewhere in this disclaimer: (a) are subject to the preceding
              paragraph; and (b) govern all liabilities arising under the
              disclaimer, including liabilities arising in contract, in tort and
              for breach of statutory duty.
            </p>
            <p className="pt-3 font-poppins text-sm font-light  text-gray-500 sm:text-base ">
              As long as the website and the information and services on the
              website are provided free of charge, we will not be liable for any
              loss or damage of any nature.
            </p>
            <p className="pt-6 text-start font-poppins text-xl  font-bold sm:text-2xl">
              Contact
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
            <p className="pt-6 text-start font-poppins text-xl  font-bold sm:text-2xl">
              Vigezo na Masharti
            </p>
            <p className="text-end font-poppins text-sm font-semibold  italic   text-gray-400 sm:text-base ">
              Imechapishwa: 17 Aprili 2021
            </p>
            <p className="pt-3 font-poppins text-sm font-light  text-gray-500 sm:text-base ">
              Vigezo na masharti haya yanaonyesha sheria na kanuni za matumizi
              ya Tovuti ya Tunzaa Fintech , iliyopo{" "}
              <a
                className="text-blue-500 hover:cursor-pointer"
                href="https://tunzaa.co.tz"
              >
                tunzaa.co.tz.
              </a>
            </p>
            <p className="pt-3 font-poppins text-sm font-light  text-gray-500 sm:text-base ">
              Kwa kutumia tovuti hii tunadhani unakubaliana na sheria na
              masharti haya. Usiendelee kutumia Tunzaa ikiwa haukubaliani na
              kuzingatia sheria na masharti yote yaliyotajwa kwenye ukurasa huu.
            </p>
            <p className="pt-3 font-poppins text-sm font-light  text-gray-500 sm:text-base ">
              Istilahi zifuatazo zinatumika kwenye Vigezo na Masharti haya,
              Taarifa ya Faragha na Taarifa ya Kanusho na Mikataba yote:
              "Mteja", "Wewe" na "Yako" inamaanisha wewe, mtu anayeingia kwenye
              wavuti hii na anayetii sheria na masharti ya Kampuni. "Kampuni",
              "Sisi wenyewe", "Yetu" na "Sisi", inahusu Kampuni yetu. "Sisi",
              inahusu Mteja na sisi wenyewe kama kampuni. Masharti yote yanahusu
              utoaji, kukubalika na kuzingatia malipo muhimu ili kuwezesha
              mchakato wa msaada wetu kwa Mteja katika njia inayofaa zaidi kwa
              kusudi dhahiri la kukidhi mahitaji ya Mteja katika utoaji wa
              huduma zilizotajwa na Kampuni, kwa mujibu wa sheria zilizopo za
              Jamhuri ya Muungano wa Tanzania. Matumizi yoyote ya istilahi hapo
              juu au maneno mengine katika umoja, wingi, herufi kubwa na/au yeye
              au wao, hutumika kwa kubadilishana kwa hivyo yana maana sawa.
            </p>
            <p className="pt-6 text-start font-poppins text-xl  font-bold sm:text-2xl">
              Vidakuzi (Cookies)
            </p>
            <p className="pt-3 font-poppins text-sm font-light  text-gray-500 sm:text-base ">
              Tunatumia vidakuzi. Kwa kutumia Tunzaa, unakubali kutumia vidakuzi
              kwa makubaliano na Sera ya Faragha ya Kampuni ya Tunzaa Fintech.
            </p>
            <p className="pt-3 font-poppins text-sm font-light  text-gray-500 sm:text-base ">
              Tovuti nyingi hutumia vidakuzi ili kupata maelezo ya mtumiaji kila
              anapotembelea tovuti. Vidakuzi hutumiwa na wavuti yetu kuwezesha
              utendaji bora wa baadhi ya maeneo ili iwe rahisi kwa watu
              wanaotembelea wavuti yetu. Baadhi ya washirika wetu / washirika wa
              matangazo pia wanaweza kutumia vidakuzi.
            </p>{" "}
            <p className="pt-6 text-start font-poppins text-xl  font-bold sm:text-2xl">
              Leseni
            </p>
            <p className="pt-3 font-poppins text-sm font-light  text-gray-500 sm:text-base ">
              Isipokuwa imeelezwa vingine,Tunzaa Fintech na/au watoa leseni wake
              wanamiliki haki miliki ya vifaa vyote vya Tunzaa. Haki zote za
              umiliki zinahifadhiwa. Unaweza kupata taarifa hizi kutoka Tunzaa
              kwa matumizi yako ya kibinafsi chini ya vigezo vilivyowekwa katika
              sheria na masharti haya.
            </p>
            <p className="pt-3 font-poppins text-sm font-light  text-gray-500 sm:text-base ">
              Haupaswi:
            </p>
            <ul className="list-disc pl-11 font-poppins text-sm font-light  text-gray-500 sm:text-base ">
              <li>Kuchapisha tena taarifa kutoka Tunzaa</li>
              <li>Kuuza, kukodisha vifaa vya leseni ndogo kutoka Tunzaa</li>
              <li>Kuzalisha, nukuu au kunakili taarifa kutoka Tunzaa</li>
              <li>Kusambaza maudhui kutoka Tunzaa</li>
            </ul>
            <p className="pt-3 font-poppins text-sm font-light  text-gray-500 sm:text-base ">
              Sehemu za tovuti hii hutoa fursa kwa watumiaji kuchapisha na
              kubadilishana maoni na habari katika maeneo fulani ya wavuti.
              Tunzaa Fintech haichungi, kuhariri, kuchapisha au kukagua Maoni
              kabla ya uwepo wao kwenye wavuti. Maoni hayahusiani na maoni na
              mtazamo wa Tunzaa Fintech , mawakala wake na/au washirika. Maoni
              kwenye tovuti hii yanaonyesha mtazamo wa mtu analiyetuma maoni
              husika. Kwa kiwango kinachoruhusiwa na sheria zinazotumika, Tunzaa
              Fintech haitawajibika kwa Maoni au kwa dhima yoyote, uharibifu au
              gharama zilizosababishwa na matokeo ya matumizi yoyote ya na/au
              kuchapisha na/au kuonekana kwa Maoni kwenye tovuti hii.
            </p>
            <p className="pt-3 font-poppins text-sm font-light  text-gray-500 sm:text-base ">
              Tunzaa Fintech ina haki ya kufuatilia Maoni yote na kuondoa maoni
              yoyote ambayo yanaweza kuzingatiwa kuwa yasiyofaa au
              yanayosababisha ukiukaji wa Sheria na Masharti haya.
            </p>{" "}
            <p className="pt-3 font-poppins text-sm font-light  text-gray-500 sm:text-base ">
              Unaidhinisha na kufahamu kwamba:
            </p>
            <ul className="list-disc pl-11 font-poppins text-sm font-light  text-gray-500 sm:text-base ">
              <li>
                Una haki ya kutuma Maoni kwenye wavuti yetu na una leseni zote
                muhimu na idhini ya kufanya hivyo;
              </li>
              <li>
                Maoni hayaingilii haki yoyote ya umiliki, pamoja na
                hakimiliki;hati miliki au alama ya biashara ya mtu yeyote wa
                tatu;
              </li>
              <li>
                Maoni hayana maneno ya kukashifu, ya kukashifu, ya kukera,
                yasiyo na stala au mengineyo ambayo ni kinyume cha sheria na
                uvamizi wa faragha.
              </li>
              <li>
                Maoni hayatatumiwa kuomba au kukuza biashara au desturi au
                kuwasilisha shughuli za kibiashara au shughuli haramu.
              </li>
            </ul>
            <p className="pt-3 font-poppins text-sm font-light  text-gray-500 sm:text-base ">
              Hivyo unaipa Tunzaa Fintech leseni isiyo ya kipekee ya kutumia,
              kuzalisha tena, kuhariri na kuidhinisha wengine kutumia, kuzaa
              tena na kuhariri maoni yako yoyote kwa aina yoyote, fomati au
              media.
            </p>{" "}
            <p className="pt-6 text-start font-poppins text-xl  font-bold sm:text-2xl">
              Kiungo cha Maudhui yetu
            </p>
            <p className="pt-3 font-poppins text-sm font-light  text-gray-500 sm:text-base ">
              Mashirika yafuatayo yanaweza kuunganishwa na Tovuti yetu bila
              idhini ya maandishi.
            </p>
            <ul className="list-disc pl-11 font-poppins text-sm font-light  text-gray-500 sm:text-base ">
              <li>Mawakala wa serikali;</li>
              <li>Injini za utafutaji mtandaoni;</li>
              <li>Mashirika ya habari;</li>
              <li>
                Wasambazaji wa maudhui mtandaoni wanaweza kuweka kiungo ya
                Tovuti yetu kwa njia ile ile kama wanaweka kiungo cha Tovuti za
                biashara zingine zilizoorodheshwa; na
              </li>
              <li>
                Mfumo wa biashara zilizosibitishwa isipokuwa mashirika yasiyo ya
                kibiashara, vituo vya ununuzi vya hisani, na vikundi vya
                kuchangisha misaada ambavyo haviwezi kuweka kiungo cha Tovuti
                yetu.
              </li>
            </ul>
            <p className="pt-3 font-poppins text-sm font-light  text-gray-500 sm:text-base ">
              Mashirika haya yanaweza kuweka kiungo ya ukurasa wetu wa Mwanzo,
              machapisho au habari zingine za Tovuti ili mradi kiungo hiyo: (a)
              sio njia yoyote ya kudanganya; (b) haimaanishi uongo wa udhamini,
              kuidhinisha au idhini ya ushirikiano na bidhaa zake na/au huduma;
              na (c) inafaa/inaendana na muktadha wa tovuti ya chama
              kinachounganisha.
            </p>{" "}
            <p className="pt-3 font-poppins text-sm font-light  text-gray-500 sm:text-base ">
              Tunaweza kuzingatia na kuidhinisha maombi mengine ya kuweka kiungo
              kutoka kwa aina zifuatazo za mashirika:
            </p>
            <ul className="list-disc pl-11 font-poppins text-sm font-light  text-gray-500 sm:text-base ">
              <li>
                Vyanzo vya habari vinavyojulikana vya watumiaji na/au biashara;
              </li>
              <li>Tovuti za dot.com za kijamii;</li>
              <li>Vyama au vikundi vingine vinavyowakilisha misaada;</li>
              <li>Wasambazaji wa maudhui mtandaoni;</li>
              <li>Milango ya kimtandao;</li>
              <li>Makampuni ya uhasibu, sheria na ushauri; na</li>
              <li>taasisi za elimu na vyama vya biashara.</li>
            </ul>
            <p className="pt-3 font-poppins text-sm font-light  text-gray-500 sm:text-base ">
              Tutakubali maombi ya kuweka kiungo kutoka kwa mashirika haya ikiwa
              tutaamua kuwa: (a) kiungo hakifanyi tuonekane vibaya kwa biashara
              zetu zilizothibitishwa; (b) shirika halina kumbukumbu zozote mbaya
              na sisi; (c) faida kwetu kutokana na muonekano wa kiungo hulipa
              fidia kutokuwepo kwa Tunzaa Fintech ; na (d) kiungo kipo katika
              muktadha wa habari ya jumla ya rasilimali.
            </p>
            <p className="pt-3 font-poppins text-sm font-light  text-gray-500 sm:text-base ">
              Mashirika haya yanaweza kuweka kiungo cha ukurasa wetu wa mwanzo
              ilimradi kiungo:(a) sio njia yoyote ya kudanganya; (b) haimaanishi
              uongo wa udhamini, kuidhinisha au idhini ya chama kinachounganisha
              na bidhaa au huduma zake; na (c) inafaa ndani ya muktadha wa
              wavuti ya chama kinachounganisha.
            </p>
            <p className="pt-3 font-poppins text-sm font-light  text-gray-500 sm:text-base ">
              Ikiwa wewe ni moja ya mashirika yaliyoorodheshwa katika aya ya 2
              hapo juu na una nia ya kuweka kiungo ya tovuti yetu, lazima
              utuarifu kwa kutuma barua pepe kwa Tunzaa Fintech . Tafadhali
              jumuisha jina lako, jina la shirika lako, taarifa za mawasiliano
              na URL ya tovuti yako, orodha ya URL yoyote ile ambayo unakusudia
              kuweka kiungo kwenye tovuti yetu, na orodha ya URL kwenye tovuti
              yetu ambayo ungependa kuweka kiungo yake. Subiri wiki 2-3 kwa
              majibu.
            </p>
            <p className="pt-3 font-poppins text-sm font-light  text-gray-500 sm:text-base ">
              Mashirika yaliyoidhinishwa yanaweza kuweka kiungo ya Tovuti yetu
              kama ifuatavyo:
            </p>
            <ul className="list-disc pl-11 font-poppins text-sm font-light  text-gray-500 sm:text-base ">
              <li>Kwa kutumia jina letu la kampuni; au </li>
              <li>Kwa kutumia URL iliyounganishwa; au</li>
              <li>
                Kwa kutumia maelezo mengine yoyote ya Tovuti yetu kuweka kiungo
                ambayo ina maana ndani ya muktadha na muundo wa maudhui kwenye
                tovuti husika.
              </li>
            </ul>
            <p className="pt-3 font-poppins text-sm font-light  text-gray-500 sm:text-base ">
              Utaruhusiwa kutotumia nembo ya Tunzaa Fintech au michoro mingine
              kwa kuunganisha kutokuwepo kwa makubaliano ya leseni ya alama ya
              biashara.
            </p>
            <p className="pt-6 text-start font-poppins text-xl  font-bold sm:text-2xl">
              Fremu
            </p>
            <p className="pt-3 font-poppins text-sm font-light  text-gray-500 sm:text-base ">
              Bila idhini ya awali na idhini ya maandishi, huenda usiweze kuunda
              fremu karibu na kurasa zetu za wavuti ambazo hubadilisha kwa njia
              yoyote uwasilishaji wa kuonekana au kuonekana kwa Wavuti yetu.
            </p>
            <p className="pt-6 text-start font-poppins text-xl  font-bold sm:text-2xl">
              Dhima ya Maudhui
            </p>
            <p className="pt-3 font-poppins text-sm font-light  text-gray-500 sm:text-base ">
              Hatutawajibika kwa maudhui yoyote yale yaliyomo kwenye tovuti
              yako. Unakubali kutulinda na kututetea dhidi ya madai yote ambayo
              yanatokea kwenye Tovuti yako. Viungo havitakiwa kuonekana kwenye
              Tovuti yoyote ambayo inaweza kutafsiriwa kama ya kupotosha, ya
              kuchukiza au ya jinai, au ambayo inakiuka, au inatetea ukiukaji wa
              haki yoyote.
            </p>
            <p className="pt-6 text-start font-poppins text-xl  font-bold sm:text-2xl">
              Uhifadhi wa Haki
            </p>
            <p className="pt-3 font-poppins text-sm font-light  text-gray-500 sm:text-base ">
              Tuna haki ya kuomba uondoe kiungo zote au moja ya kiungo kwenye
              Tovuti yetu. Unakubali kuondoa mara moja kiungo zote kwenye Tovuti
              yetu kama tulivyoomba. Pia tuna haki ya kuboresha masharti na
              faragha hii na sera iliyounganishwa muda wowote. Kwa kuendelea
              kuweka Kiungo cha Tovuti yetu, unakubali kufungwa na kufuata
              sheria na masharti haya.
            </p>
            <p className="pt-6 text-start font-poppins text-xl  font-bold sm:text-2xl">
              Kuondoa Kiungo kwenye Tovuti yetu
            </p>
            <p className="pt-3 font-poppins text-sm font-light  text-gray-500 sm:text-base ">
              Ikiwa umekutana na kiungo chochote kwenye tovuti yetu ambacho
              kinakera kwa sababu yoyote, kuwa huru kuwasiliana nasi muda
              wowote. Tutazingatia maombi ya kuondoa kiungo lakini hatulazimiki
              kufanya hivyo au kukujibu moja kwa moja.
            </p>{" "}
            <p className="pt-3 font-poppins text-sm font-light  text-gray-500 sm:text-base ">
              Hatuhakikishi kuwa taarifa kwenye tovuti hii ni sahihi,
              hatuhakikishi ukamilifu wake au uwezo; wala hatuahidi kuwa tovuti
              itaendelea kupatikana au maudhui kwenye tovuti hii yanaboresha
              kila muda.
            </p>
            <p className="pt-6 text-start font-poppins text-xl  font-bold sm:text-2xl">
              Kanusho
            </p>{" "}
            <p className="pt-3 font-poppins text-sm font-light  text-gray-500 sm:text-base ">
              Kwa kiwango cha juu kinachoruhusiwa na sheria husika, hatujumuishi
              uwakilishi wowote, dhamana na hali inayohusiana na tovuti yetu na
              matumizi ya tovuti hii. Hakuna kitu chochote katika kanusho hili
              kitakachofanya:
            </p>
            <ul className="list-disc pl-11 font-poppins text-sm font-light  text-gray-500 sm:text-base ">
              <li>
                Kupunguza au kuondoa dhima yetu au yako ya kifo au jeraha la
                kibinafsi;
              </li>
              <li>
                Kupunguza au kuondoa dhima yetu au yako kwa udanganyifu au
                upotoshaji wa ulaghai;
              </li>
              <li>
                Kuzuia dhima yetu yoyote ile au kwa njia yoyote ambayo
                hairuhusiwi chini ya sheria inayotumika; au
              </li>
              <li>
                Kuondoa dhima yoyote ile yetu au yako ambayo haiwezi kujumuishwa
                chini ya sheria inayotumika.
              </li>
            </ul>
            <p className="pt-3 font-poppins text-sm font-light  text-gray-500 sm:text-base ">
              Vikwazo na makatazo ya dhima yaliyowekwa katika Sehemu hii na
              mahali pengine kwenye kanusho hili: (a) ipo chini ya aya
              iliyotangulia; na (b) kudhibiti dhima zote zinazotokana na
              kanusho, pamoja na dhima inayotokana na mkataba, kwa makosa na kwa
              kukiuka ushuru wa kisheria.
            </p>
            <p className="pt-3 font-poppins text-sm font-light  text-gray-500 sm:text-base ">
              Kwa kuwa tovuti na taarifa na huduma kwenye tovuti hii zimetolewa
              bure, hatutawajibika kwa upotezaji au uharibifu wowote wa aina
              yoyote.
            </p>
            <p className="pt-6 text-start font-poppins text-xl  font-bold sm:text-2xl">
              Mawasiliano
            </p>
            <p className="pt-3 font-poppins text-sm font-light  text-gray-500 sm:text-base ">
              Kwa maelezo zaidi kuhusu sheria na masharti ya matumizi na/au sera
              ya faragha tafadhali wasiliana nasi kwa anwani yetu ya barua pepe.
            </p>
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
};

export default TermsOfService;
