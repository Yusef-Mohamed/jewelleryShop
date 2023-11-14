import { useContext, useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { AppContext } from "../../App";
const OrderFa = () => {
  const { lang } = useContext(AppContext);
  const [opens, setOpens] = useState({
    one: false,
    two: false,
    three: false,
    four: false,
    five: false,
  });
  return (
    <div className="my-12">
      {lang === "en" && (
        <div className="border-b border-b-slate-300 ">
          <button
            onClick={() => setOpens((prev) => ({ ...prev, one: !prev.one }))}
            className="flex py-2 text-lg focus:outline-none w-full justify-between items-center uppercase"
          >
            DELIVERY INFORMATION
            <IoIosArrowBack
              size={20}
              className={`transition-all ${
                opens.one ? "rotate-90" : "rotate-[270deg]"
              }`}
            />
          </button>
          <div
            className={`my-2 transition-all  overflow-hidden ${
              opens.one ? "h-full" : "h-0"
            }`}
          >
            <p>
              Orders placed on THE FIRST BRAND can be delivered every day of the
              week. Delivery costs will vary depending on the service selected,
              where your item is coming from and its destination. Express
              delivery is available for the majority of destinations. Same Day,
              F90 and Standard delivery are available in selected countries.
              When you're placing your order, the available delivery options for
              your destination will be displayed at checkout. The delivery
              options for your destination are displayed at checkout.
            </p>
            <p>
              We require a signature for all orders, so delivery to PO Boxes,
              Army Post Office (APO) and Fleet Post Office (FPO) addresses is
              currently unavailable.
            </p>
            <p>
              If you're placing your order from the locations below and it's
              above the following threshold, we also offer a lower delivery fee.
              In checkout, you'll see the lowest delivery price available for
              the items in your order.
            </p>
            <ul className="px-6 list-disc">
              <li>United States: USD $250</li>
              <li>Australia: AUD $300</li>
              <li>China Mainland: CNY ¥1500</li>
              <li>Hong Kong SAR: HKD $2000</li>
              <li>Japan: JPY ¥28000</li>
              <li>Republic of Korea: KRW ₩280000</li>
              <li>Macau SAR: USD $150</li>
            </ul>
            <p>
              If you’re placing your order from the locations below and it’s
              above the following thresholds, we offer free delivery.
            </p>
            <ul className="px-6 list-disc">
              <li>United States: USD $200 (full price and sale)</li>
              <li>China Mainland: CNY ¥2500 (full price and sale)</li>
              <li>Hong Kong SAR, Macau SAR: HKD $3000 (full price and sale)</li>
              <li>Taiwan Region: TWD $10000 (full price and sale)</li>
              <li>CIS countries: USD $430 (full price only)</li>
            </ul>
            <b>Delivery times</b>
            <b>
              Express delivery for most of Europe and the US: delivered within
              2-4 days.
            </b>
            <b>Rest of the world: delivered within 3-7 days.</b>
            <p>
              Standard delivery for selected countries: delivered within 2-6
              days.
            </p>
            <p>
              Same Day delivery for selected countries: delivered on the same
              day for orders placed by 11:00 in the morning.
            </p>
            <p>
              F90 delivery for selected countries: delivered within 90 minutes
              from the time an order is placed.
            </p>
            <p>
              Delivery times are based on the time your package is sent and
              should only be used as a guide. THE FIRST BRAND cannot take
              responsibility for customs clearance delays or failed payments,
              though we'll try to minimise any potential delays.
            </p>
            <p>
              Depending on your location, our orders can be delivered by
              different couriers like DHL, UPS, FedEx, TNT or DPD.
            </p>
            <b>F90 — store to door in 90 minutes</b>
            <p>
              Our F90 delivery service allows you to shop at THE FIRST BRAND and
              have your order delivered within 90 minutes. Once an F90 order is
              placed, it’s carefully prepared and hand-delivered by our courier.
            </p>
            <p>
              F90, Store to Door in 90 minutes is currently offered from
              selected THE FIRST BRAND brands and partner boutiques in Berlin,
              Hong Kong SAR, LA, London, Madrid, Milan, New York, Paris and São
              Paulo. If F90 is available for your location, you'll see it as an
              option while you shop. This service is available Monday to Friday,
              between 08:00 and 19:00.
            </p>
            <b>Same Day delivery</b>
            <p>
              Same Day delivery is available in Berlin, London, Manchester,
              Paris, Los Angeles, New York, Miami, Milan, Rome, Barcelona,
              Madrid, and Shanghai. Place your order by 11:00 in the morning and
              your THE FIRST BRAND order will be with you by 19:00 that same
              day, Monday to Friday, excluding public holidays. Orders placed
              after 11:00 in the morning will be delivered the next business
              day.
            </p>
            <p>
              To shop the pieces that are available, select Same Day Delivery
              To, under the filter shown on the left when you’re shopping. This
              will filter all the pieces that are available for Same Day
              delivery.
            </p>
            <p>
              If Same Day delivery is available for your postcode, this option
              will also show at checkout after you enter your delivery address.
              The delivery cost varies from city to city and will be visible at
              checkout before placing your order.
            </p>
          </div>
        </div>
      )}
      {lang === "ar" && (
        <div className="border-b border-b-slate-300 ">
          <button
            onClick={() => setOpens((prev) => ({ ...prev, one: !prev.one }))}
            className="flex py-2 text-lg focus:outline-none w-full justify-between items-center uppercase"
          >
            معلومات التوصيل
            <IoIosArrowBack
              size={20}
              className={`transition-all ${
                opens.one ? "rotate-90" : "rotate-[270deg]"
              }`}
            />
          </button>
          <div
            className={`my-2 transition-all  overflow-hidden ${
              opens.one ? "h-full" : "h-0"
            }`}
          >
            <p>
              يمكن توصيل الطلبات التي تم تقديمها على THE FIRST BRAND في أي يوم
              من أيام الأسبوع. تتفاوت تكلفة التوصيل حسب الخدمة المختارة ومكان
              المنتج ووجهته. التوصيل السريع متاح لمعظم الوجهات. التوصيل في نفس
              اليوم والتوصيل القياسي متاحان في بعض البلدان المحددة. عندما تقوم
              بتقديم طلبك، ستظهر خيارات التوصيل المتاحة لوجهتك عند الخروج. ستتم
              عرض خيارات التوصيل المتاحة لوجهتك عند الخروج.
            </p>
            <p>
              نحن بحاجة إلى توقيع لجميع الطلبات، لذلك التوصيل إلى صناديق البريد
              (PO Boxes) ومكاتب البريد العسكرية (APO) ومكاتب البريد البحرية
              (FPO) غير متاح حالياً.
            </p>
            <p>
              إذا كنت تقوم بتقديم طلبك من المواقع المدرجة أدناه وكانت القيمة
              أعلى من الحد المحدد أدناه، نقدم أيضاً رسوم توصيل أقل. في عملية
              الخروج، سترى أدنى سعر للتوصيل المتاح للعناصر في طلبك.
            </p>
            <ul className="px-6 list-disc">
              <li>الولايات المتحدة: 250 دولار أمريكي</li>
              <li>أستراليا: 300 دولار أسترالي</li>
              <li>الصين الرئيسية: 1500 يوان صيني</li>
              <li>هونغ كونغ SAR: 2000 دولار هونغ كونغي</li>
              <li>اليابان: 28000 ين ياباني</li>
              <li>جمهورية كوريا: 280000 وون كوري جنوبي</li>
              <li>ماكاو SAR: 150 دولار أمريكي</li>
            </ul>
            <p>
              إذا كنت تقوم بتقديم طلبك من المواقع المدرجة أدناه وكانت القيمة
              أعلى من الحدود المحددة أدناه، نقدم التوصيل المجاني.
            </p>
            <ul className="px-6 list-disc">
              <li>
                الولايات المتحدة: 200 دولار أمريكي (السعر الكامل والتخفيضات)
              </li>
              <li>الصين الرئيسية: 2500 يوان صيني (السعر الكامل والتخفيضات)</li>
              <li>
                هونغ كونغ SAR، ماكاو SAR: 3000 دولار هونغ كونغي (السعر الكامل
                والتخفيضات)
              </li>
              <li>
                منطقة تايوان: 10000 دولار تايواني (السعر الكامل والتخفيضات)
              </li>
              <li>
                دول الاتحاد السوفيتي المستقلة: 430 دولار أمريكي (السعر الكامل
                فقط)
              </li>
            </ul>
            <b>أوقات التوصيل</b>
            <b>
              التوصيل السريع لمعظم أنحاء أوروبا والولايات المتحدة: يتم التسليم
              خلال 2-4 أيام.
            </b>
            <b>باقي أنحاء العالم: يتم التسليم خلال 3-7 أيام.</b>
            <p>
              التوصيل القياسي لبعض البلدان المحددة: يتم التسليم خلال 2-6 أيام.
            </p>
            <p>
              التوصيل في نفس اليوم لبعض البلدان المحددة: يتم التسليم في نفس
              اليوم للطلبات التي تم تقديمها قبل الساعة 11:00 صباحًا.
            </p>
            <p>
              توصيل F90 لبعض البلدان المحددة: يتم التسليم خلال 90 دقيقة من وقت
              تقديم
            </p>
            <p>
              أوقات التوصيل تعتمد على وقت إرسال طردك ويجب استخدامها فقط كدليل.
              لا يمكن لـ THE FIRST BRAND تحمل مسؤولية تأخير التخليص الجمركي أو
              فشل الدفع، على الرغم من أننا سنحاول تقليل أي تأخير محتمل.
            </p>
            <p>
              اعتمادًا على موقعك، يمكن توصيل طلباتنا من قبل شركات شحن مختلفة مثل
              DHL، UPS، FedEx، TNT أو DPD.
            </p>
            <b>F90 — توصيل من المتجر إلى الباب في 90 دقيقة</b>

            <p>
              خدمة توصيل F90 لدينا تسمح لك بالتسوق على THE FIRST BRAND وتوصيل
              طلبك في غضون 90 دقيقة. بمجرد تقديم طلب F90، يتم إعداده بعناية
              وتسليمه يدويًا من قبل مرسلنا.
            </p>
            <p>
              خدمة F90، من المتجر إلى الباب في 90 دقيقة متاحة حاليًا من بعض
              علامات THE FIRST BRAND والمتاجر الشريكة في برلين، هونغ كونغ SAR،
              لوس أنجلوس، لندن، مدريد، ميلان، نيويورك، باريس وساو باولو. إذا
              كانت خدمة F90 متاحة لموقعك، ستراها كخيار أثناء التسوق. تكون هذه
              الخدمة متاحة من الاثنين إلى الجمعة، بين الساعة 08:00 و 19:00.
            </p>
            <b>توصيل في نفس اليوم</b>

            <p>
              التوصيل في نفس اليوم متاح في برلين، لندن، مانشستر، باريس، لوس
              أنجلوس، نيويورك، ميامي، ميلان، روما، برشلونة، مدريد وشنغهاي. قم
              بتقديم طلبك قبل الساعة 11:00 صباحًا وسيكون طلبك من THE FIRST BRAND
              معك بحلول الساعة 19:00 في نفس اليوم، من الاثنين إلى الجمعة،
              باستثناء الأيام العطل. ستتم توصيل الطلبات التي تم تقديمها بعد
              الساعة 11:00 صباحًا في اليوم التالي.
            </p>
            <p>
              لشراء القطع المتاحة، حدد توصيل في نفس اليوم تحت الفلتر المعروض على
              الجانب الأيسر عندما تتسوق. سيتم عرض هذه القطع جميعًا التي متاحة
              للتوصيل في نفس اليوم.
            </p>
            <p>
              إذا كان توصيل في نفس اليوم متاحًا لرمز البريد الخاص بك، ستظهر هذه
              الخيار أيضًا عند الخروج بعد إدخال عنوان التسليم الخاص بك. تتفاوت
              تكلفة التوصيل من مدينة إلى أخرى وستكون مرئية عند الخروج قبل تقديم
              طلبك.
            </p>
          </div>
        </div>
      )}
      {lang === "en" && (
        <div className="border-b border-b-slate-300 ">
          <button
            onClick={() => setOpens((prev) => ({ ...prev, two: !prev.two }))}
            className="flex py-2 text-lg focus:outline-ntwo w-full justify-between items-center uppercase"
          >
            Duites and taxes
            <IoIosArrowBack
              size={20}
              className={`transition-all ${
                opens.two ? "rotate-90" : "rotate-[270deg]"
              }`}
            />
          </button>
          <div
            className={`my-2 transition-all  overflow-hidden ${
              opens.two ? "h-full" : "h-0"
            }`}
          >
            <p>
              If you're in any of the locations below, we include the cost of
              duties and taxes in your order. The price you see at checkout is
              the price you pay and there are no additional delivery fees. EU
              (excluding the Canary Islands), UK, USA, Canada, China Mainland,
              Australia, New Zealand, Puerto Rico, Switzerland, Singapore,
              Republic Of Korea, Kuwait, Mexico, Qatar, India, Norway, Saudi
              Arabia, Taiwan Region, Thailand, UAE, Japan, Brazil, Isle of Man,
              San Marino, Colombia, Chile, Argentina, Egypt, Lebanon, Turkey,
              Hong Kong SAR and Bahrain. Import duties are not applicable if
              you’re ordering from within your own region, but you may need to
              pay VAT or local sales taxes. For the UK and US, these are
              included at checkout. If a Delivery At Place (DAP) destination is
              selected, the price you pay at checkout will exclude import duties
              and sales taxes. Instead, you’ll need to pay these directly to our
              courier to release your order from customs. As we're unable to
              advise the exact amount, we recommend contacting your local
              customs office or tax authority before placing a Delivery At Place
              (DAP) order.
            </p>
            <b>Delivery to US</b>
            <p>
              If you’re a US customer ordering from one of our international
              brands or partner boutiques, US Customs may ask for your IRS, EIN
              or SSN number before authorising delivery to your address. Don’t
              worry – you’ll usually have one week to provide this information
              before your order is returned to its original location for a
              refund. Need more information? View our Terms & Conditions
            </p>
          </div>
        </div>
      )}
      {lang === "ar" && (
        <div className="border-b border-b-slate-300 ">
          <button
            onClick={() => setOpens((prev) => ({ ...prev, two: !prev.two }))}
            className="flex py-2 text-lg focus:outline-ntwo w-full justify-between items-center uppercase"
          >
            الرسوم والضرائب
            <IoIosArrowBack
              size={20}
              className={`transition-all ${
                opens.two ? "rotate-90" : "rotate-[270deg]"
              }`}
            />
          </button>
          <div
            className={`my-2 transition-all  overflow-hidden ${
              opens.two ? "h-full" : "h-0"
            }`}
          >
            <p>
              إذا كنت في أي من المواقع أدناه، فإننا نتضمن تكلفة الرسوم والضرائب
              في طلبك. السعر الذي تراه عند الخروج هو السعر الذي تدفعه ولا توجد
              رسوم تسليم إضافية. الاتحاد الأوروبي (باستثناء جزر الكناري)،
              المملكة المتحدة، الولايات المتحدة، كندا، الصين الرئيسية، أستراليا،
              نيوزيلندا، بورتو ريكو، سويسرا، سنغافورة، جمهورية كوريا، الكويت،
              المكسيك، قطر، الهند، النرويج، المملكة العربية السعودية، منطقة
              تايوان، تايلاند، الإمارات العربية المتحدة، اليابان، البرازيل،
              جزيرة مان، سان مارينو، كولومبيا، تشيلي، الأرجنتين، مصر، لبنان،
              تركيا، هونغ كونغ SAR، والبحرين. الرسوم الجمركية غير قابلة للتطبيق
              إذا كنت تقوم بالطلب من داخل منطقتك الخاصة، ولكن قد تحتاج إلى دفع
              ضريبة القيمة المضافة (VAT) أو الضرائب المحلية. بالنسبة للمملكة
              المتحدة والولايات المتحدة، يتم تضمين هذه في عملية الخروج. إذا تم
              اختيار وجهة توصيل إلى مكان (Delivery At Place - DAP)، سيتم استبعاد
              رسوم الاستيراد والضرائب عن السعر الذي تدفعه عند الخروج. بدلاً من
              ذلك، ستحتاج إلى دفع هذه المبالغ مباشرةً لمندوب البريد الخاص بنا
              لإطلاق طلبك من الجمارك. نظرًا لعدم قدرتنا على تقديم المبلغ الدقيق،
              نوصي بالاتصال بمكتب الجمارك المحلي أو السلطة الضريبية المحلية قبل
              تقديم طلب بوجهة توصيل إلى مكان (DAP).
            </p>
            <b>التوصيل إلى الولايات المتحدة</b>
            <p>
              إذا كنت عميلًا أمريكيًا وتقوم بالطلب من أحد علاماتنا الدولية أو
              متاجر شريكة، قد تطلب جمارك الولايات المتحدة منك رقم IRS أو EIN أو
              SSN قبل تفويض التوصيل إلى عنوانك. لا تقلق - عادةً ما يكون لديك
              أسبوع واحد لتقديم هذه المعلومات قبل أن يتم إرجاع طلبك إلى الموقع
              الأصلي للحصول على استرداد. هل تحتاج إلى مزيد من المعلومات؟ اطلع
              على شروطنا وأحكامنا.
            </p>
          </div>
        </div>
      )}
      {lang === "en" && (
        <div className="border-b border-b-slate-300 ">
          <button
            onClick={() =>
              setOpens((prev) => ({ ...prev, three: !prev.three }))
            }
            className="flex py-2 text-lg focus:outline-ntwo w-full justify-between items-center uppercase"
          >
            tracking your order{" "}
            <IoIosArrowBack
              size={20}
              className={`transition-all ${
                opens.three ? "rotate-90" : "rotate-[270deg]"
              }`}
            />
          </button>
          <div
            className={`my-2 transition-all  overflow-hidden ${
              opens.three ? "h-full" : "h-0"
            }`}
          >
            <p>
              After you’ve placed an order, we’ll email you with all the
              details. Our brands and partner boutiques have 2 business days to
              process your order. Once your order is sent, you’ll receive an
              email with the tracking number. You can also track your order by
              heading to Orders & Returns in your account. If you've placed an
              order as a guest and want to track your order, enter your guest
              order details here Depending on your location and selected
              delivery method, it can take 2 – 7 business days for your package
              to arrive. We always aim to deliver your package within the time
              specified, but sometimes there may be delays due to customs
              clearance or failed payments. If you've shopped items from
              multiple locations, you may receive more than one package.
            </p>
          </div>
        </div>
      )}
      {lang === "ar" && (
        <div className="border-b border-b-slate-300">
          <button
            onClick={() =>
              setOpens((prev) => ({ ...prev, three: !prev.three }))
            }
            className="flex py-2 text-lg focus:outline-ntwo w-full justify-between items-center uppercase"
          >
            تتبع طلبك{" "}
            <IoIosArrowBack
              size={20}
              className={`transition-all ${
                opens.three ? "rotate-90" : "rotate-[270deg]"
              }`}
            />
          </button>
          <div
            className={`my-2 transition-all  overflow-hidden ${
              opens.three ? "h-full" : "h-0"
            }`}
          >
            <p>
              بعدما قمت بتقديم طلب، سنرسل لك بريدًا إلكترونيًا يحتوي على جميع
              التفاصيل. علاماتنا التجارية والمتاجر الشريكة لديها يومين عمل
              لمعالجة طلبك. بمجرد إرسال طلبك، ستتلقى بريدًا إلكترونيًا يحتوي على
              رقم التتبع. يمكنك أيضًا تتبع طلبك من خلال الانتقال إلى الطلبات
              والمرتجعات في حسابك. إذا قمت بتقديم طلب كضيف وترغب في تتبع طلبك،
              أدخل تفاصيل طلبك كضيف هنا بناءً على موقعك والطريقة التي اخترتها
              للتسليم، قد يستغرق وصول طردك من 2 إلى 7 أيام عمل. نحن نهدف دائمًا
              إلى تسليم طردك في الوقت المحدد، ولكن في بعض الأحيان قد تحدث
              تأخيرات بسبب إجراءات التفتيش الجمركي أو عدم نجاح عمليات الدفع. إذا
              قمت بشراء عناصر من مواقع متعددة، قد تتلقى أكثر من طرد واحد.
            </p>
          </div>
        </div>
      )}
      {lang === "en" && (
        <div className="border-b border-b-slate-300 ">
          <button
            onClick={() => setOpens((prev) => ({ ...prev, four: !prev.four }))}
            className="flex py-2 text-lg focus:outline-ntwo w-full justify-between items-center uppercase"
          >
            cancellations
            <IoIosArrowBack
              size={20}
              className={`transition-all ${
                opens.four ? "rotate-90" : "rotate-[270deg]"
              }`}
            />
          </button>
          <div
            className={`my-2 transition-all  overflow-hidden ${
              opens.four ? "h-full" : "h-0"
            }`}
          >
            <p>
              Changed your mind? No problem, some of our brands and partner
              boutiques allow order cancellations before the order is prepared.
            </p>
            <b>How to cancel your order:</b>
            <ol className="px-6 list-decimal">
              <li>
                Go to Orders & Returns if you have an account, or if you placed
                an order as a guest, enter your guest order details here
              </li>
              <li>
                Select the items you want to cancel and your reason for
                cancellation
              </li>
              <li>We'll email you confirmation of your cancelled order</li>
            </ol>
            <p>
              We can't cancel your order if your order has already been prepared
              — but we do offer a free returns service. For more information on
              cancelling and returning orders, visit our Return & Refunds Policy
            </p>
            <p>
              If you've cancelled your order, you'll receive a full refund
              within 14 days, depending on your payment provider.
            </p>
            <b>Made-to-order and customised items</b>
            <p>
              Made-to-order and customised items can only be cancelled within 48
              hours of placing your order. All you need to do is follow the
              steps above in your account.
            </p>
            <b>Changes and cancellations to F90 and Same Day delivery</b>
            <p>
              If you would like to make changes to your order or the delivery
              time, contact our global Customer Service team F90 and Same Day
              delivery orders are prioritised, so if you change your mind, we
              may not be able to cancel your order. You can return your order
              for a refund using our free returns service. For more information,
              visit our Returns & Refunds page here
            </p>
          </div>
        </div>
      )}
      {lang === "ar" && (
        <div className="border-b border-b-slate-300">
          <button
            onClick={() => setOpens((prev) => ({ ...prev, four: !prev.four }))}
            className="flex py-2 text-lg focus:outline-ntwo w-full justify-between items-center uppercase"
          >
            الإلغاء
            <IoIosArrowBack
              size={20}
              className={`transition-all ${
                opens.four ? "rotate-90" : "rotate-[270deg]"
              }`}
            />
          </button>
          <div
            className={`my-2 transition-all  overflow-hidden ${
              opens.four ? "h-full" : "h-0"
            }`}
          >
            <p>
              هل قررت تغيير رأيك؟ ليس هناك مشكلة، بعض علاماتنا التجارية والمتاجر
              الشريكة تسمح بإلغاء الطلب قبل تجهيزه.
            </p>
            <b>كيفية إلغاء طلبك:</b>
            <ol className="px-6 list-decimal">
              <li>
                انتقل إلى الطلبات والمرتجعات إذا كان لديك حساب، أو إذا قمت
                بتقديم طلب كضيف، أدخل تفاصيل طلبك كضيف هنا
              </li>
              <li>حدد العناصر التي ترغب في إلغاءها وسبب إلغاءك</li>
              <li>سنرسل لك تأكيدًا عبر البريد الإلكتروني بخصوص إلغاء طلبك</li>
            </ol>
            <p>
              لا يمكننا إلغاء طلبك إذا تم تجهيزه بالفعل — ولكننا نقدم خدمة إرجاع
              مجانية. لمزيد من المعلومات حول إلغاء وإرجاع الطلبات، قم بزيارة
              صفحة سياسة الإرجاع والاسترداد لدينا.
            </p>
            <p>
              إذا قمت بإلغاء طلبك، ستتلقى استردادًا كاملاً في غضون 14 يومًا، حسب
              مزود الدفع الخاص بك.
            </p>
            <b>العناصر المصنوعة حسب الطلب والمخصصة</b>
            <p>
              العناصر المصنوعة حسب الطلب والمخصصة يمكن إلغاؤها فقط خلال 48 ساعة
              من تقديم طلبك. كل ما عليك فعله هو اتباع الخطوات أعلاه في حسابك.
            </p>
            <b>تغييرات وإلغاءات لخدمة F90 والتسليم في نفس اليوم</b>
            <p>
              إذا كنت ترغب في إجراء تغييرات على طلبك أو وقت التسليم، اتصل بفريق
              خدمة العملاء العالمي لدينا. يتم تفضيل طلبات F90 والتسليم في نفس
              اليوم، لذلك إذا قررت تغيير رأيك، قد لا نكون قادرين على إلغاء طلبك.
              يمكنك إرجاع طلبك للحصول على استرداد باستخدام خدمة الإرجاع المجانية
              لدينا. لمزيد من المعلومات، قم بزيارة صفحة الإرجاع والاسترداد هنا.
            </p>
          </div>
        </div>
      )}
      {lang === "en" && (
        <div className="border-b border-b-slate-300 ">
          <button
            onClick={() => setOpens((prev) => ({ ...prev, five: !prev.five }))}
            className="flex py-2 text-lg focus:outline-ntwo w-full justify-between items-center uppercase"
          >
            made-to-order and customised items
            <IoIosArrowBack
              size={20}
              className={`transition-all ${
                opens.five ? "rotate-90" : "rotate-[270deg]"
              }`}
            />
          </button>
          <div
            className={`my-2 transition-all  overflow-hidden ${
              opens.five ? "h-full" : "h-0"
            }`}
          >
            <p>
              Due to the nature of made-to-order and customised items,
              manufacturing lead times may vary as your item is created
              specifically for you. For more information on manufacturing times,
              visit the product information page.
            </p>
          </div>
        </div>
      )}
      {lang === "ar" && (
        <div className="border-b border-b-slate-300">
          <button
            onClick={() => setOpens((prev) => ({ ...prev, five: !prev.five }))}
            className="flex py-2 text-lg focus:outline-ntwo w-full justify-between items-center uppercase"
          >
            العناصر المصنوعة حسب الطلب والمخصصة
            <IoIosArrowBack
              size={20}
              className={`transition-all ${
                opens.five ? "rotate-90" : "rotate-[270deg]"
              }`}
            />
          </button>
          <div
            className={`my-2 transition-all  overflow-hidden ${
              opens.five ? "h-full" : "h-0"
            }`}
          >
            <p>
              نظرًا لطبيعة العناصر المصنوعة حسب الطلب والمخصصة، قد تختلف أوقات
              التصنيع وفقًا للوقت الذي يستغرقه إنشاء العنصر بشكل خاص لك. لمزيد
              من المعلومات حول أوقات التصنيع، قم بزيارة صفحة معلومات المنتج.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default OrderFa;
