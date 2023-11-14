import { useContext, useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { AppContext } from "../../App";
const Payment = () => {
  const { lang } = useContext(AppContext);
  const [opens, setOpens] = useState({
    one: false,
    two: false,
    three: false,
    four: false,
    five: false,
    six: false,
  });
  return (
    <div className="my-12">
      {lang === "en" && (
        <div className="border-b border-b-slate-300 ">
          <button
            onClick={() => setOpens((prev) => ({ ...prev, one: !prev.one }))}
            className="flex py-2 text-lg focus:outline-none w-full justify-between items-center uppercase"
          >
            why is THE FIRST BRAND pricing different?
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
              It's down to our unique business model. At THE FIRST BRAND, you're
              shopping items from our luxury brands and partner boutiques
              worldwide, expertly curated for you by our team.
            </p>
            <p>
              Prices are determined by each THE FIRST BRAND brand and partner
              boutique, so the price of the same item may vary depending on
              where it's coming from and your location. That's also why placing
              an item in your shopping bag or wishlist won't reserve it at a
              particular price.
            </p>
            <p>
              Although we don’t have any control over price variation, we'll
              always offer you the best price available to your destination when
              you place your order.
            </p>
            <p>
              To view the most accurate prices, select your delivery destination
              on our website.
            </p>
          </div>
        </div>
      )}
      {lang === "ar" && (
        <div className="border-b border-b-slate-300">
          <button
            onClick={() => setOpens((prev) => ({ ...prev, one: !prev.one }))}
            className="flex py-2 text-lg focus:outline-none w-full justify-between items-center uppercase"
          >
            لماذا تكون أسعار THE FIRST BRAND مختلفة؟
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
              ذلك يعود إلى نموذج الأعمال الفريد الخاص بنا. في THE FIRST BRAND،
              تقوم بشراء العناصر من علاماتنا التجارية الفاخرة ومتاجر الشركاء
              الخاصة بنا في جميع أنحاء العالم، حيث يتم تقديمها لك بعناية فائقة
              من قبل فريقنا.
            </p>
            <p>
              تتم تحديد الأسعار من قبل كل علامة THE FIRST BRAND ومتجر شريك، لذا
              قد تختلف أسعار العنصر نفسه اعتمادًا على مكان مصدره ومكان تواجدك.
              هذا هو أيضًا السبب في أن وضع عنصر في حقيبة التسوق الخاصة بك أو في
              قائمة الأماني لن يحجزه بسعر معين.
            </p>
            <p>
              على الرغم من أننا لا نملك أي تحكم في تغير الأسعار، إلا أننا سنقدم
              لك دائمًا أفضل سعر متاح لوجهتك عندما تقوم بطلبك.
            </p>
            <p>
              لعرض الأسعار الأكثر دقة، قم بتحديد وجهة التسليم الخاصة بك على
              موقعنا على الويب.
            </p>
          </div>
        </div>
      )}
      {lang === "en" && (
        <div className="border-b border-b-slate-300 ">
          <button
            onClick={() => setOpens((prev) => ({ ...prev, two: !prev.two }))}
            className="flex py-2 text-lg focus:outline-none w-full justify-between items-center uppercase"
          >
            which currencies can i shop in?{" "}
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
              This is determined by your delivery destination and will be
              displayed at checkout before placing your order. Unless you are
              paying with cryptocurrency, if your local currency is unavailable,
              your order will be charged in USD at a competitive exchange rate.
            </p>
          </div>
        </div>
      )}
      {lang === "ar" && (
        <div className="border-b border-b-slate-300">
          <button
            onClick={() => setOpens((prev) => ({ ...prev, two: !prev.two }))}
            className="flex py-2 text-lg focus:outline-none w-full justify-between items-center uppercase"
          >
            في أي عملات يمكنني التسوق؟{" "}
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
              يتم تحديد هذا بواسطة وجهة التسليم الخاصة بك وسيتم عرضه في عملية
              الدفع قبل تقديم طلبك. ما لم تكن تدفع باستخدام العملات الرقمية، إذا
              كانت عملتك المحلية غير متوفرة، سيتم فرض تكلفة طلبك بالدولار
              الأمريكي بسعر صرف تنافسي.
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
            className="flex py-2 text-lg focus:outline-none w-full justify-between items-center uppercase"
          >
            when will my card be charged?
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
              If you pay by debit card, credit card or PayPal or cryptocurrency,
              THE FIRST BRAND (or its affiliates as applicable) will take
              payment when you place your order.
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
            className="flex py-2 text-lg focus:outline-none w-full justify-between items-center uppercase"
          >
            متى سيتم خصم مبلغ بطاقتي؟
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
              إذا قمت بالدفع باستخدام بطاقة الخصم أو بطاقة الائتمان أو باي بال
              أو العملات الرقمية، ستقوم THE FIRST BRAND (أو شركاتها التابعة حسب
              الاقتضاء) بأخذ الدفعة عندما تقوم بتقديم طلبك.
            </p>
          </div>
        </div>
      )}
      {lang === "en" && (
        <div className="border-b border-b-slate-300 ">
          <button
            onClick={() => setOpens((prev) => ({ ...prev, four: !prev.four }))}
            className="flex py-2 text-lg focus:outline-none w-full justify-between items-center text-left uppercase"
          >
            are there any additional fees then you place an order on THE FIRST
            BRAND?
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
              As THE FIRST BRAND is based in the United Kingdom, your bank may
              charge additional fees. This can happen with debit and credit
              cards that aren't issued in the UK. For more details, please reach
              out to your bank before placing an order.
            </p>
          </div>
        </div>
      )}
      {lang === "ar" && (
        <div className="border-b border-b-slate-300">
          <button
            onClick={() => setOpens((prev) => ({ ...prev, four: !prev.four }))}
            className="flex py-2 text-lg focus:outline-none w-full justify-between items-center uppercase"
          >
            هل هناك رسوم إضافية عندما تقوم بطلب من THE FIRST BRAND؟{" "}
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
              نظرًا لأن THE FIRST BRAND مقرها في المملكة المتحدة، قد تفرض بنكك
              رسومًا إضافية. يمكن أن يحدث ذلك مع بطاقات الخصم وبطاقات الائتمان
              التي لم تصدر في المملكة المتحدة. للحصول على مزيد من التفاصيل، يرجى
              التواصل مع بنكك قبل تقديم طلب الشراء.
            </p>
          </div>
        </div>
      )}
      {lang === "en" && (
        <div className="border-b border-b-slate-300 ">
          <button
            onClick={() => setOpens((prev) => ({ ...prev, five: !prev.five }))}
            className="flex py-2 text-lg focus:outline-none w-full justify-between items-center uppercase"
          >
            whitch payment methods do you accept?{" "}
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
            <ul>
              <li>• Visa</li>
              <li>• MasterCard</li>
              <li>• Maestro</li>
              <li>• American Express</li>
              <li>• Discover</li>
              <li>• Diners</li>
              <li>• JCB</li>
              <li>• JDpay (only available to China Mainland)</li>
              <li>• PayPal</li>
              <li>• Apple Pay</li>
              <li>
                •Afterpay (only available in the United States and Australia)
              </li>
              <li>
                • Alipay (only available to United States, Canada, China
                Mainland, Hong Kong SAR and Macau SAR)
              </li>
              <li>• HB Pay (only available to China Mainland and Hong Kong)</li>
              <li>
                • Klarna (only available to the US, UK, Germany, Austria,
                Switzerland and Belgium)
              </li>
              <li>
                • WeChat (only available in China Mainland, Hong Kong SAR and
                Macau SAR)
              </li>
              <li>• UnionPay</li>
              <li>• iDEAL (only available to The Netherlands)</li>
              <li>• Boleto (only available to Brazil)</li>
              <li>
                • Cryptocurrency (the full list of valid cryptocurrencies can be
                found here)
              </li>
            </ul>
            <p>
              In selected countries, we accept payment instalments with Klarna
              and Afterpay. We only accept credit card instalments as payment in
              Brazil. For your safety, security checks are taken on all payments
              made to us at the time of purchase.
            </p>
          </div>
        </div>
      )}
      {lang === "ar" && (
        <div className="border-b border-b-slate-300">
          <button
            onClick={() => setOpens((prev) => ({ ...prev, five: !prev.five }))}
            className="flex py-2 text-lg focus:outline-none w-full justify-between items-center uppercase"
          >
            أيّ وسائل دفع تقبلونها؟{" "}
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
            <ul>
              <li>• فيزا (Visa)</li>
              <li>• ماستركارد (MasterCard)</li>
              <li>• مايسترو (Maestro)</li>
              <li>• أمريكان إكسبريس (American Express)</li>
              <li>• ديسكفر (Discover)</li>
              <li>• دينرز (Diners)</li>
              <li>• جي سي بي (JCB)</li>
              <li>• جي دي باي (JDpay) (متاحة فقط في الصين الرئيسية)</li>
              <li>• باي بال (PayPal)</li>
              <li>• آبل باي (Apple Pay)</li>
              <li>
                • أفترباي (Afterpay) (متاحة فقط في الولايات المتحدة وأستراليا)
              </li>
              <li>
                • آليباي (Alipay) (متاحة فقط في الولايات المتحدة وكندا والصين
                الرئيسية ومنطقة هونغ كونغ الإدارية ومنطقة ماكاو الإدارية)
              </li>
              <li>
                • إتش بي باي (HB Pay) (متاحة فقط في الصين الرئيسية ومنطقة هونغ
                كونغ)
              </li>
              <li>
                • كلارنا (Klarna) (متاحة فقط في الولايات المتحدة والمملكة
                المتحدة وألمانيا والنمسا وسويسرا وبلجيكا)
              </li>
              <li>
                • ويتشات (WeChat) (متاحة فقط في الصين الرئيسية ومنطقة هونغ كونغ
                الإدارية ومنطقة ماكاو الإدارية)
              </li>
              <li>• يونيون باي (UnionPay)</li>
              <li>• آيديال (iDEAL) (متاحة فقط في هولندا)</li>
              <li>• بوليتو (Boleto) (متاحة فقط في البرازيل)</li>
              <li>
                • العملات الرقمية (يمكن العثور على القائمة الكاملة للعملات
                الرقمية الصالحة هنا)
              </li>
            </ul>
            <p>
              في بعض البلدان المحددة، نقبل الدفع بالأقساط باستخدام كلارنا
              وأفترباي. نحن نقبل فقط أقساط بطاقة الائتمان كوسيلة دفع في
              البرازيل. لأجل سلامتك، يتم إجراء فحوصات أمان على جميع المدفوعات
              التي تتم لنا في وقت الشراء.
            </p>
          </div>
        </div>
      )}
      {lang === "en" && (
        <div className="border-b border-b-slate-300 ">
          <button
            onClick={() => setOpens((prev) => ({ ...prev, six: !prev.six }))}
            className="flex py-2 text-lg focus:outline-none w-full justify-between items-center uppercase"
          >
            Are my personal detalis safe?
            <IoIosArrowBack
              size={20}
              className={`transition-all ${
                opens.six ? "rotate-90" : "rotate-[270deg]"
              }`}
            />
          </button>
          <div
            className={`my-2 transition-all  overflow-hidden ${
              opens.six ? "h-full" : "h-0"
            }`}
          >
            <p>
              Absolutely. We keep your personal information confidential and
              only give it out with your consent or if legally permitted. For
              further details, view the THE FIRST BRAND Privacy Policy here
            </p>
          </div>
        </div>
      )}
      {lang === "ar" && (
        <div className="border-b border-b-slate-300">
          <button
            onClick={() => setOpens((prev) => ({ ...prev, six: !prev.six }))}
            className="flex py-2 text-lg focus:outline-none w-full justify-between items-center uppercase"
          >
            هل تكون تفاصيلي الشخصية آمنة؟
            <IoIosArrowBack
              size={20}
              className={`transition-all ${
                opens.six ? "rotate-90" : "rotate-[270deg]"
              }`}
            />
          </button>
          <div
            className={`my-2 transition-all  overflow-hidden ${
              opens.six ? "h-full" : "h-0"
            }`}
          >
            <p>
              بالتأكيد. نحن نحتفظ بمعلوماتك الشخصية بسرية ونقوم بالكشف عنها فقط
              بموافقتك أو إذا سمحت القوانين بذلك. لمزيد من التفاصيل، يمكنك
              مشاهدة سياسة الخصوصية لـ THE FIRST BRAND هنا
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Payment;
