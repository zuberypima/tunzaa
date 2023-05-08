import React, { useEffect } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { useLanguageContext } from "../LanguageContext";

const ReturnPolicy = () => {
  const { lang } = useLanguageContext();
useEffect(() => {
  window.scrollTo(0, 0);
}, []);
  return (
    <div className="min-h-screen bg-[#2F56A1]">
      <Navbar />
      <section className="bg-white">
        <div className="lg:pb-13 container mx-auto flex max-w-screen-xl flex-col px-4 pb-8 sm:px-12">
          {lang == "en" ? (
            <p className="pt-6 text-start font-poppins text-xl  font-bold sm:text-2xl">
              RETURN & REFUND POLICY
            </p>
          ) : (
            <p className="pt-6 text-start font-poppins text-xl font-bold uppercase sm:text-2xl">
              Sera ya Kurudisha
            </p>
          )}
          {lang == "en" ? (
            <p className="pt-3 font-poppins text-sm font-semibold uppercase  text-gray-500 sm:text-lg ">
              Return
            </p>
          ) : (
            <p className="pt-3 font-poppins text-sm font-semibold uppercase  text-gray-500 sm:text-lg ">
              Kurudisha
            </p>
          )}
          {lang == "en" ? (
            <p className="pt-3 font-poppins text-sm font-light  text-gray-500 sm:text-base ">
              Tunzaa offers a 7 days return window for items that meet the
              requirements for return. Please contact us via any of our contact
              channels within 7 days of delivery and we will ensure you get a
              resolution.
            </p>
          ) : (
            <p className="pt-3 font-poppins text-sm font-light  text-gray-500 sm:text-base ">
              Tunzaa inatoa siku 7 kurudisha bidhaa ambazo zinakidhi vigezo vya
              kurudishwa. Tafadhali wasiliana nasi kupitia njia yoyote ya
              mawasiliano ndani ya siku 7 tangu upokei bidhaa husika na
              tutahakikisha unapata suluhisho.
            </p>
          )}
          {lang == "en" ? (
            <p className="pt-3 font-poppins text-sm font-semibold text-gray-500 sm:text-base ">
              Return Instructions
            </p>
          ) : (
            <p className="pt-3 font-poppins text-sm font-semibold text-gray-500 sm:text-base ">
              Maelekezo ya kurudisha
            </p>
          )}
          {lang == "en" ? (
            <p className="pt-3 font-poppins text-sm font-semibold text-gray-500 sm:text-base ">
              STEP 1:{" "}
              <span className="font-light text-black">Send a report</span>
            </p>
          ) : (
            <p className="pt-3 font-poppins text-sm font-semibold text-gray-500 sm:text-base ">
              HATUA YA 1:{" "}
              <span className="font-light text-black">Tuma Ripoti</span>
            </p>
          )}
          {lang == "en" ? (
            <p className="pt-3 font-poppins text-sm font-light  text-gray-500 sm:text-base ">
              Also include pictures of the product (include details such as
              serial number, model, make and the like) that was delivered to
              mambo@tunzaa.co.tz as a means of evidence.
            </p>
          ) : (
            <p className="pt-3 font-poppins text-sm font-light  text-gray-500 sm:text-base ">
              Pia jumuisha picha za bidhaa (pamoja na maelezo kama vile "serial
              namba", aina, na mengineyo) tuma kwenda mambo@tunzaa.co.tz kama
              sehemu ya ushahidi.
            </p>
          )}{" "}
          {lang == "en" ? (
            <p className="pt-3 font-poppins text-sm font-semibold text-gray-500 sm:text-base ">
              STEP 2:{" "}
              <span className="font-light text-black">
                Return after Authorization
              </span>
            </p>
          ) : (
            <p className="pt-3 font-poppins text-sm font-semibold text-gray-500 sm:text-base ">
              HATUA YA 2:{" "}
              <span className="font-light text-black">
                Kurudisha baada ya Uidhinishaji
              </span>
            </p>
          )}
          {lang == "en" ? (
            <p className="pt-3 font-poppins text-sm font-light  text-gray-500 sm:text-base ">
              Once your claim is validated, we will provide information on the
              most suitable means of getting the item from you.
            </p>
          ) : (
            <p className="pt-3 font-poppins text-sm font-light  text-gray-500 sm:text-base ">
              Mara tu ombi lako litakapothibitishwa, tutakupa taarifa juu ya
              njia zinazofaa zaidi za kupata bidhaa kutoka kwako.
            </p>
          )}{" "}
          {lang == "en" ? (
            <p className="pt-3 font-poppins text-sm font-semibold text-gray-500 sm:text-base ">
              STEP 3:{" "}
              <span className="font-light text-black">Get Resolution</span>
            </p>
          ) : (
            <p className="pt-3 font-poppins text-sm font-semibold text-gray-500 sm:text-base ">
              HATUA YA 3:{" "}
              <span className="font-light text-black">Tuma Ripoti</span>
            </p>
          )}
          {lang == "en" ? (
            <p className="pt-3 font-poppins text-sm font-light  text-gray-500 sm:text-base ">
              Upon our confirmation of the receipt of the item, Tunzaa will
              assist only by notifying the Seller to resolve the matter as its
              sole responsibility without any further obligation on Tunzaa.
            </p>
          ) : (
            <p className="pt-3 font-poppins text-sm font-light  text-gray-500 sm:text-base ">
              Baada ya uthibitisho wetu wa kupokea risiti ya bidhaa husika,
              Tunzaa itahusika kukusaidia kumjulisha Muuzaji kufanyia kazi
              maombi yako na haitahusika na majukumu mengine.
            </p>
          )}
          {lang == "en" ? (
            <p className="pt-3 font-poppins text-sm font-semibold text-gray-500 sm:text-base ">
              NB:{" "}
              <span className="font-poppins text-sm font-light  text-gray-500 sm:text-base">
                Place the item in its original packaging, including any
                accessories, tags, labels or freebies. If you have created a
                password on the device you wish to return, please ensure it is
                removed, otherwise, your return will be invalid.
              </span>
            </p>
          ) : (
            <p className="pt-3 font-poppins text-sm font-semibold text-gray-500 sm:text-base ">
              MUHIMU:{" "}
              <span className="font-poppins text-sm font-light  text-gray-500 sm:text-base">
                Weka bidhaa husika kwenye kifurushi chake halisi, ikiwa ni
                pamoja na vifaa, vitambulisho, lebo au zawadi za bure. Ikiwa
                umeweka nenosiri kwenye kifaa unachotaka kurudisha, tafadhali
                hakikisha imeondolewa, vinginevyo, kurudisha kwako kutakuwa
                batili.
              </span>
            </p>
          )}
          {lang == "en" ? (
            <p className="pt-5 font-poppins text-sm font-semibold text-gray-500 sm:text-base ">
              Items not eligible for Returns
            </p>
          ) : (
            <p className="pt-5 font-poppins text-sm font-semibold text-gray-500 sm:text-base ">
              Bidhaa ambazo hazistahili Kurudishwa
            </p>
          )}
          {lang == "en" ? (
            <ul className="list-decimal pl-11 pt-3 font-poppins text-sm font-light  text-gray-500 sm:text-base ">
              <li>
                Products that have been altered from their original or opened by
                unauthorized personnel without permission.
              </li>
              <li>
                Perishable goods cannot be returned except a valid reason is
                raised at the point of delivery with affirmation from the
                dispatcher.
              </li>
              <li>Products damaged due to misuse.</li>
              <li>Books and CDs.</li>
              <li>
                Unauthorized repair, misuse, collision, negligence, abuse, into
                the liquid, accident, alteration, product quality problems
                caused by improper installation, or torn, altered labels of
                machine serial number or anti-counterfeiting mark;
              </li>
            </ul>
          ) : (
            <ul className="list-decimal pl-11 pt-3 font-poppins text-sm font-light  text-gray-500 sm:text-base ">
              <li>
                Bidhaa ambazo zimebadilishwa kutoka kwenye kifungashio chake cha
                asili au kufunguliwa na mtu asiye na idhini ya kufanya hivyo.
              </li>
              <li>
                Bidhaa zinazoharibika haziwezi kurudishwa isipokuwa kwa sababu
                maalum utakazozitoa wakati wa kupokea bidhaa.
              </li>
              <li>Bidhaa zilizoharibiwa kwa sababu ya matumizi mabaya.</li>
              <li>Vitabu na CD.</li>
              <li>
                Matengenezo yasiyoruhusiwa, matumizi mabaya, uzembe,
                unyanyasaji, kuloweshwa na maji, ajali, mabadiliko, matatizo ya
                ubora wa bidhaa yaliyosababishwa na usakinishaji usiofaa, au
                lebo zilizobadilishwa namba ya mashine au alama ya bandia;
              </li>
            </ul>
          )}
          {lang == "en" ? (
            <p className="pt-5 font-poppins text-sm font-semibold text-gray-500 sm:text-lg ">
              REFUND
            </p>
          ) : (
            <p className="pt-5 font-poppins text-sm font-semibold text-gray-500 sm:text-lg ">
              KURUDISHIWA PESA
            </p>
          )}
          {lang == "en" ? (
            <>
              <p className="pt-3 font-poppins text-sm font-light  text-gray-500 sm:text-base ">
                Once we receive your returned item, we will inspect it and
                process your refund within 10 business days into the phone
                number you used to register at Tunzaa.
              </p>
              <p className="pt-3 font-poppins text-sm font-light  text-gray-500 sm:text-base ">
                Tunzaa charges 25% of the money you have already paid for every
                refund. We charge 25% to cover transaction and storage costs.
              </p>
              <p className="pt-5 font-poppins text-sm font-semibold text-gray-500 sm:text-base ">
                NB: Terms and Conditions Apply.
              </p>
            </>
          ) : (
            <>
              <p className="pt-3 font-poppins text-sm font-light  text-gray-500 sm:text-base ">
                Mara tu tutakapopokea bidhaa iliyorudishwa kutoka kwako,
                tutakagua na kushughulikia kurudisha pesa yako kati ya siku 10
                za kazi kwenye namba ya simu uliyotumia kujisajili kwenye
                Tunzaa.
              </p>
              <p className="pt-3 font-poppins text-sm font-light  text-gray-500 sm:text-base ">
                Tunzaa inatoza 25% ya pesa ambazo tayari umelipa kwa kila
                urejesho. Tunatoza 25% kulipia gharama za ununuzi na uhifadhi.
              </p>
              <p className="pt-5 font-poppins text-sm font-semibold text-gray-500 sm:text-base ">
                NB: Vigezo na Masharti kuzingatiwa.
              </p>
            </>
          )}
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default ReturnPolicy;
