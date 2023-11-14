import { useContext, useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { AppContext } from "../../App";
const Faqs = () => {
  const { lang } = useContext(AppContext);
  const [opens, setOpens] = useState({
    one: false,
    two: false,
    three: false,
    four: false,
    five: false,
    six: false,
    seven: false,
    eight: false,
  });
  return (
    <div className="my-12">
      {lang === "en" && (
        <div className="border-b border-b-slate-300 ">
          <button
            onClick={() => setOpens((prev) => ({ ...prev, one: !prev.one }))}
            className="flex py-2 text-lg focus:outline-none w-full justify-between items-center uppercase"
          >
            how to shop and place an order?
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
            <b>Do I need an account to place an order?</b>
            <p>
              No, all you need is an email address to place and track orders. To
              checkout faster, access your wishlist and order updates, we
              recommend setting up a THE FIRST BRAND account.
            </p>
            <p>
              If you create a THE FIRST BRAND account and place an order, you'll
              be automatically enrolled in our loyalty programme, Access. Every
              piece you buy takes you one step closer to unlocking exclusive
              rewards... from early sale access and priority customer care to
              unlimited free shipping and a dedicated personal stylist.
            </p>
            <p>Learn more about our Access loyalty programme.</p>

            <b>I've forgotten my password, what should I do?</b>
            <p>
              Follow the forgot your password link on our Sign In page and enter
              your email address. You’ll then receive an email to reset your
              password.
            </p>
            <b>How do I receive THE FIRST BRAND email updates?</b>
            <p>
              Stay informed of new arrivals, trends and exclusive promotions by
              entering your email address at the bottom of our homepage. You can
              manage your email preferences in your account.
            </p>
            <p>How do I place an order on your website?</p>

            <b>Here’s how:</b>
            <p>
              Choose a category or brand from the top navigation menu or search
              to explore a specific style or brand Select your desired item and
              click Add To Bag. Once you've added all items, it's time to
              checkout Sign in to your account or, if you've not yet created
              one, continue via guest checkout Enter your address, payment
              method and delivery details to place your order. We'll confirm the
              order and it will be carefully prepared and sent to you, with
              updates every step of the way.
            </p>
            <b>Can I place an order over the phone?</b>
            <p>
              Sure. Our global Customer Service advisors are happy to assist you
              with this.
            </p>
            <b>Can I cancel my THE FIRST BRAND order or make changes to it?</b>
            <p>
              Yes, you may be able to cancel some items before we prepare your
              order. Head to Orders & Returns, or if you placed an order as a
              guest and want to make changes, enter your guest order details
              here.
            </p>
            <p>
              You can't add items to an existing order, but you can place a new
              order for any additional pieces. For more information, view our
              Orders & Deliveries page.
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
            كيفية التسوق والطلب؟
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
            <b>هل أحتاج إلى حساب لتقديم طلب؟</b>
            <p>
              لا، كل ما تحتاجه هو عنوان بريد إلكتروني لتقديم الطلبات وتتبعها.
              لتسريع عملية الدفع والوصول إلى قائمة الأماني الخاصة بك وتحديثات
              الطلبات، نوصي بإعداد حساب THE FIRST BRAND.
            </p>
            <p>
              إذا قمت بإنشاء حساب THE FIRST BRAND وقدمت طلبًا، سيتم تسجيلك
              تلقائيًا في برنامج الولاء الخاص بنا، Access. كل قطعة تشتريها تقربك
              خطوة واحدة أقرب إلى فتح مكافآت حصرية... بدءًا من الوصول المبكر إلى
              البيع والرعاية العملاء الأولوية والشحن المجاني غير المحدود ومصمم
              أزياء شخصي مخصص.
            </p>
            <p>تعرف على المزيد حول برنامج الولاء Access الخاص بنا.</p>

            <b>لقد نسيت كلمة المرور، ماذا يجب عليّ فعله؟</b>
            <p>
              انتقل إلى الرابط "هل نسيت كلمة المرور" على صفحة تسجيل الدخول وأدخل
              عنوان بريدك الإلكتروني. ستتلقى بعد ذلك رسالة بريد إلكتروني تحتوي
              على رابط لإعادة تعيين كلمة المرور الخاصة بك.
            </p>
            <b>
              كيف يمكنني تلقي تحديثات THE FIRST BRAND عبر البريد الإلكتروني؟
            </b>
            <p>
              ابق على اطلاع بالوصول إلى التصاميم الجديدة والاتجاهات والعروض
              الحصرية عن طريق إدخال عنوان بريدك الإلكتروني في أسفل صفحتنا
              الرئيسية. يمكنك إدارة تفضيلات البريد الإلكتروني الخاصة بك في
              حسابك.
            </p>
            <b>كيف يمكنني تقديم طلب على موقع الويب الخاص بكم؟</b>
            <p>إليك كيفية القيام بذلك:</p>
            <p>
              اختر فئة أو علامة تجارية من القائمة العلوية للتنقل أو ابحث
              لاستكشاف نمط أو علامة تجارية محددة. حدد العنصر المطلوب وانقر فوق
              "أضف إلى الحقيبة". بمجرد أن تقوم بإضافة جميع العناصر، حان الوقت
              للدفع. قم بتسجيل الدخول إلى حسابك أو، إذا لم تقم بإنشاء حساب بعد،
              قم بمتابعة الدفع كضيف. قم بإدخال عنوانك وطريقة الدفع وتفاصيل
              التسليم لتقديم طلبك. سنؤكد الطلب وسيتم إعداده بعناية وإرساله إليك،
              مع تحديثات في كل مرحلة من المراحل.
            </p>
            <b>هل يمكنني تقديم طلب عبر الهاتف؟</b>
            <p>
              بالتأكيد. مستشارو خدمة العملاء العالميون لدينا سيكونون سعداء
              بمساعدتك في ذلك.
            </p>
            <b>هل يمكنني إلغاء طلب THE FIRST BRAND أو إجراء تغييرات عليه؟</b>
            <p>
              نعم، قد تكون قادرًا على إلغاء بعض العناصر قبل أن نقوم بإعداد طلبك.
              انتقل إلى "الطلبات والمرتجعات"، أو إذا قمت بالطلب كضيف وترغب في
              إجراء تغييرات، أدخل تفاصيل الطلب كضيف هنا.
            </p>
            <p>
              لا يمكنك إضافة عناصر إلى طلب قائم بالفعل، ولكن يمكنك تقديم طلب
              جديد لأي قطع إضافية. لمزيد من المعلومات، راجع صفحة الطلبات
              والتسليم.
            </p>
          </div>
        </div>
      )}
      {lang === "en" && (
        <div className="border-b border-b-slate-300 ">
          <button
            onClick={() => setOpens((prev) => ({ ...prev, two: !prev.two }))}
            className="flex pt-4 py-2 text-lg focus:outline-none w-full justify-between items-center uppercase"
          >
            the first brand pricing and payment{" "}
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
            <b>Why is THE FIRST BRAND pricing different?</b>
            <p>
              It's down to our unique business model. At THE FIRST BRAND, you're
              shopping items from our luxury brands and partner boutiques
              worldwide.
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
            <b>Which currencies can I shop in?</b>
            <p>
              This is determined by your delivery destination and will be
              displayed at checkout before placing your order. If your local
              currency is unavailable, your order will be charged in USD for a
              competitive exchange rate.
            </p>
            <b>When will my card be charged?</b>
            <p>
              If you pay by debit card, cryptocurrency or PayPal, THE FIRST
              BRAND will take payment when you place your order.
            </p>
            <b>Which payment methods do you accept?</b>
            <ul className="px-6 list-disc">
              <li>Visa</li>
              <li>MasterCard</li>
              <li>Maestro</li>
              <li>Amercian Express</li>
              <li>Discover</li>
              <li>Diners</li>
              <li>JCB</li>
              <li>JDpay (only available to China Mainland)</li>
              <li>PayPal</li>
              <li>Apple Pay</li>
              <li>
                Afterpay (only available in the United States and Australia)
              </li>
              <li>
                Alipay (only available to United States, Canada, China Mainland,
                Hong Kong SAR and Macau SAR)
              </li>
              <li>HB Pay (only available to China Mainland and Hong Kong)</li>
              <li>
                Klarna (only available to the US, UK, Germany, Austria,
                Switzerland and Belgium)
              </li>
              <li>
                WeChat (only available in China Mainland, Hong Kong SAR and
                Macau SAR)
              </li>
              <li>UnionPay</li>
              <li>iDEAL (only available to The Netherlands)</li>
              <li>Boleto (only available to Brazil)</li>
              <li>
                Cryptocurrency (the full list of valid cryptocurrencies can be
                found here)
              </li>
            </ul>
            <p>
              In selected countries, we accept payment instalments with Klarna
              and Afterpay. We only accept credit card instalments as payment in
              Brazil. For your safety, security checks are taken on all payments
              made to us at the time of purchase.
            </p>
            <b>Will my personal details stay safe?</b>
            <p>
              Absolutely. We keep your personal data private and confidential
              and only share it with your consent or if legally permitted to.
              For further details, view the THE FIRST BRAND Privacy Policy.
            </p>
          </div>
        </div>
      )}
      {lang === "ar" && (
        <div className="border-b border-b-slate-300">
          <button
            onClick={() => setOpens((prev) => ({ ...prev, two: !prev.two }))}
            className="flex pt-4 py-2 text-lg focus:outline-none w-full justify-between items-center uppercase"
          >
            تسعير ودفع العلامة الأولى
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
            <b>لماذا تكون أسعار THE FIRST BRAND مختلفة؟</b>
            <p>
              ذلك يعود إلى نموذج الأعمال الفريد الذي نمتلكه. في THE FIRST BRAND،
              أنت تتسوق للعناصر من علاماتنا التجارية الفاخرة والمتاجر الشريكة
              حول العالم.
            </p>
            <p>
              تُحدد الأسعار من قبل كل علامة تجارية THE FIRST BRAND ومتجر شريك،
              لذا يمكن أن تختلف أسعار نفس العنصر اعتمادًا على مكان منشأه وموقعك.
              وهذا هو أيضًا السبب في أن وضع عنصر في سلة التسوق أو قائمة الأماني
              لا يحجزه بسعر معين.
            </p>
            <p>
              على الرغم من عدم وجود لدينا أي تحكم في تقلب الأسعار، سنقدم دائمًا
              لك أفضل سعر متاح لوجهتك عند تقديم طلبك.
            </p>
            <p>
              لعرض أدق الأسعار، حدد وجهة التسليم الخاصة بك على موقعنا على الويب.
            </p>
            <b>في أي عملات يمكنني التسوق؟</b>
            <p>
              يتم تحديد ذلك بناءً على وجهة التسليم الخاصة بك وسيتم عرضها عند
              الخروج قبل تقديم طلبك. إذا كانت عملتك المحلية غير متاحة، سيتم
              محاسبة طلبك بالدولار الأمريكي بسعر صرف تنافسي.
            </p>
            <b>متى سيتم محاسبة بطاقتي؟</b>
            <p>
              إذا قمت بالدفع عبر بطاقة الخصم، العملات المشفرة أو PayPal، ستقوم
              THE FIRST BRAND بأخذ الدفع عندما تقوم بتقديم طلبك.
            </p>
            <b>ما هي وسائل الدفع التي تقبلها؟</b>
            <ul className="px-6 list-disc">
              <li>Visa</li>
              <li>MasterCard</li>
              <li>Maestro</li>
              <li>Amercian Express</li>
              <li>Discover</li>
              <li>Diners</li>
              <li>JCB</li>
              <li>JDpay (متاحة فقط في الصين الرئيسية)</li>
              <li>PayPal</li>
              <li>Apple Pay</li>
              <li>Afterpay (متاحة فقط في الولايات المتحدة وأستراليا)</li>
              <li>
                Alipay (متاحة فقط للولايات المتحدة وكندا والصين الرئيسية ومنطقة
                هونغ كونغ ومنطقة ماكاو)
              </li>
              <li>HB Pay (متاحة فقط في الصين الرئيسية وهونغ كونغ)</li>
              <li>
                Klarna (متاحة فقط في الولايات المتحدة والمملكة المتحدة وألمانيا
                والنمسا وسويسرا وبلجيكا)
              </li>
              <li>
                WeChat (متاحة فقط في الصين الرئيسية ومنطقة هونغ كونغ ومنطقة
                ماكاو)
              </li>
              <li>UnionPay</li>
              <li>iDEAL (متاحة فقط في هولندا)</li>
              <li>Boleto (متاحة فقط في البرازيل)</li>
              <li>
                Cryptocurrency (يمكن العثور على قائمة العملات المشفرة الصالحة
                بالكامل هنا)
              </li>
            </ul>
            <p>
              في بعض البلدان المحددة، نقبل دفع التقسيط باستخدام Klarna و
              Afterpay. نقبل فقط دفع التقسيط ببطاقة الائتمان كوسيلة دفع في
              البرازيل. ولاجل سلامتك، يتم اجراء فحوصات أمان على جميع المدفوعات
              التي تتم إلينا في وقت الشراء.
            </p>
            <b>هل ستظل تفاصيلي الشخصية آمنة؟</b>
            <p>
              بالتأكيد. نحن نحتفظ ببياناتك الشخصية بسرية تامة ونشاركها فقط
              بموافقتك أو إذا كان ذلك قانونيًا مسموحًا به. للمزيد من التفاصيل،
              يرجى الاطلاع على سياسة الخصوصية لشركة THE FIRST BRAND.
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
            className="flex pt-4 py-2 text-lg focus:outline-none w-full justify-between items-center uppercase"
          >
            porduct availabiltiy authenticity and pre owned items
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
            <b>Are you going to have my size again?</b>
            <p>
              To be notified about a sold out item being back in stock, go to
              the product information page. Select your size on the dropdown
              menu and choose size missing, then enter your email address and
              the size you need.
            </p>
            <b>Can I reserve an item to buy later?</b>
            <p>
              We aim to provide a fair opportunity to shop our most in-demand
              styles and as items are often limited, we don't offer
              reservations.
            </p>
            <b>Are THE FIRST BRAND items guaranteed authentic?</b>

            <p>
              Our offering is expertly curated by the best luxury fashion brands
              and boutiques around the globe and all our items are guaranteed
              authentic.
            </p>
            <b>How will my order be packaged?</b>

            <p>
              Your order will be carefully prepared in a protective THE FIRST
              BRAND package. If the designer has provided any branded boxes,
              dust bags or cases, these will also be included.
            </p>
            <b>Do your pre-owned items come in different conditions?</b>
            <p>Yes, our pre-owned items come in the following conditions:</p>
            <p>
              Unworn with tags: previously owned but never been used and in
              original condition. This item comes with its original tags.
            </p>
            <p>
              Unworn: previously owned but never been used and in original
              condition. This item comes without its original tags.
            </p>
            <p>
              Excellent: previously owned and worn, but like new or with almost
              no signs of use. This item is still in almost perfect condition
              with no defects.
            </p>
            <p>
              Excellent: previously owned and worn, but like new or with almost
              no signs of use. This item is still in almost perfect condition
              with no defects.
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
            className="flex pt-4 py-2 text-lg focus:outline-none w-full justify-between items-center uppercase"
          >
            توافر المنتج وأصالته والعناصر المستعملة
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
            <b>هل ستكون مقاسي متاحًا مرة أخرى؟</b>
            <p>
              لتلقي إشعار بتوافر العنصر المباع عندما يتم طرحه مرة أخرى في
              المخزون، انتقل إلى صفحة معلومات المنتج. حدد مقاسك من قائمة السقطة
              واختر "المقاس نفد"، ثم أدخل عنوان بريدك الإلكتروني والمقاس الذي
              تحتاجه.
            </p>
            <b>هل يمكنني حجز عنصر للشراء لاحقًا؟</b>
            <p>
              نهدف إلى توفير فرصة عادلة للتسوق لأكثر أنماطنا طلبًا، ونظرًا لأن
              العناصر غالبًا ما تكون محدودة، لا نقدم خدمة الحجز.
            </p>
            <b>هل تضمن THE FIRST BRAND أن العناصر أصلية؟</b>
            <p>
              تم اختيار عرضنا بعناية من قبل أفضل علامات الأزياء الفاخرة والمتاجر
              حول العالم، وجميع عناصرنا مضمونة الأصالة.
            </p>
            <b>كيف سيتم تعبئة طلبي؟</b>
            <p>
              سيتم تجهيز طلبك بعناية في عبوة THE FIRST BRAND الواقية. إذا كان
              المصمم قد قدم أي صناديق علامات تجارية، أكياس غبار أو حافظات،
              ستتضمن هذه أيضًا.
            </p>
            <b>هل العناصر المستعملة لديك تأتي بحالات مختلفة؟</b>
            <p>نعم، تأتي العناصر المستعملة لدينا بالحالات التالية:</p>
            <p>
              لم تستخدم مع العلامات: تمتلك سابقًا ولكن لم تتم استخدامها وتكون في
              حالة أصلية. يتم تقديم هذا العنصر مع علاماته الأصلية.
            </p>
            <p>
              لم تستخدم: تمتلك سابقًا ولكن لم تتم استخدامها وتكون في حالة أصلية.
              يتم تقديم هذا العنصر بدون علاماته الأصلية.
            </p>
            <p>
              ممتازة: تمتلك سابقًا ولكنها تم ارتداؤها بشكل جيد أو تكاد لا تظهر
              علامات الاستخدام. هذا العنصر لا يزال في حالة تقريبًا مثالية دون أي
              عيوب.
            </p>
            <p>
              ممتازة: تمتلك سابقًا ولكنها تم ارتداؤها بشكل جيد أو تكاد لا تظهر
              علامات الاستخدام. هذا العنصر لا يزال في حالة تقريبًا مثالية دون أي
              عيوب.
            </p>
          </div>
        </div>
      )}
      {lang === "en" && (
        <div className="border-b border-b-slate-300 ">
          <button
            onClick={() => setOpens((prev) => ({ ...prev, four: !prev.four }))}
            className="flex pt-4 py-2 text-lg focus:outline-none w-full justify-between items-center uppercase"
          >
            DELIVERY, TAXES AND DUTIEs
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
            <b>How much will I be charged for delivery?</b>
            <p>
              This varies depending on the size, weight and destination of your
              chosen items. The good news is we offer One Delivery Fee for
              orders above a certain threshold – this means you can order
              multiple pieces from multiple locations for one fee. You'll see
              the delivery fee at the checkout.
            </p>
            <b>Do you offer Same Day delivery?</b>
            <p>
              Yes, we offer a Same Day delivery service in Berlin, London,
              Manchester, Paris, Los Angeles, New York, Miami, Milan, Rome,
              Barcelona, Madrid, Hong Kong SAR and Shanghai. Order before 11:00
              in the morning to receive your delivery the same day, and after
              11:00 for the next business day.
            </p>
            <b>When will I receive my item and how can I track delivery?</b>
            <p>
              Once your order is confirmed, we'll send it within 2 business
              days. Depending on your location and selected delivery method,
              delivery can take 2-7 business days. If you ordered from multiple
              THE FIRST BRAND brands and partner boutiques, your items will
              arrive separately. We'll email you with the tracking information
              and an estimated delivery date when each item is sent.
            </p>
            <p>
              You can also track your order by heading to Orders & Returns in
              your account. Opted for guest checkout? Track your guest order
              here.
            </p>
            <b>Will I need to pay taxes and duties?</b>
            <p>
              THE FIRST BRAND ships to the following destinations on a Delivery
              Duties Paid (DDP) basis: European Union (excluding the Canary
              Islands), The United Kingdom, USA, Canada, China Mainland,
              Australia, New Zealand, Puerto Rico, Switzerland, Singapore,
              Republic Of Korea, Kuwait, Mexico, Qatar, India, Norway, Saudi
              Arabia, Taiwan Region, Thailand, U.A.E, Japan, Brazil, Isle of
              Man, San Marino, Colombia, Chile, Argentina, Egypt, Lebanon,
              Turkey, Hong Kong SAR and Bahrain. This means that all applicable
              taxes and duties are included in the final price when you place
              your order and there are no additional costs due upon delivery. If
              a Delivery At Place (DAP) destination is selected, the price you
              pay to THE FIRST BRAND will exclude all relevant import duties and
              sales taxes. As the recipient, you'll need to pay these directly
              to the courier to release your order from customs upon arrival.
              For US customers, THE FIRST BRAND does not collect sales or use
              tax in all states. Your purchase may be subject to sales or use
              tax, unless your state is exempt from taxation. Many states
              require a sales/use tax return filing at the end of the year for
              taxable purchases that were not taxed (including internet
              purchases) and payment of use tax on those purchases. For more
              details, please contact your local customs office, respective tax
              authority or view our Duties and Taxes information.
            </p>
            <b>Why can't certain items be delivered to me?</b>
            <p>
              While THE FIRST BRAND delivers internationally, the brands on our
              website can determine where their items are distributed — so some
              may not be available to order in all regions. Some items may also
              be restricted by local customs in the country you are sending to.
              If you have any questions, contact our global Customer Service
              team
            </p>
            <b>
              I didn't receive my invoice with my order. Where can I find it?
            </b>
            <p>
              We're creating a more sustainable shopping experience. To reduce
              waste, invoices have been removed from THE FIRST BRAND orders.
              Sign in to your account on our website to download your digital
              invoice, or if you placed an order as a guest, enter your guest
              order details here.
            </p>
          </div>
        </div>
      )}
      {lang === "ar" && (
        <div className="border-b border-b-slate-300">
          <button
            onClick={() => setOpens((prev) => ({ ...prev, four: !prev.four }))}
            className="flex pt-4 py-2 text-lg focus:outline-none w-full justify-between items-center uppercase"
          >
            التوصيل، الضرائب والرسوم الجمركية
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
            <b>كم سيتم محاسبتي للتوصيل؟</b>
            <p>
              هذا يتغير اعتمادًا على حجم ووزن وجهة العناصر التي اخترتها. الخبر
              السار هو أننا نقدم رسوم توصيل واحدة للطلبات التي تزيد عن عتبة
              معينة - وهذا يعني أنك يمكن أن تطلب عدة قطع من أماكن متعددة مقابل
              رسم واحد. سترى رسوم التوصيل في عربة التسوق.
            </p>
            <b>هل تقدمون خدمة التوصيل في نفس اليوم؟</b>
            <p>
              نعم، نقدم خدمة التوصيل في نفس اليوم في برلين، لندن، مانشستر،
              باريس، لوس أنجلوس، نيويورك، ميامي، ميلان، روما، برشلونة، مدريد،
              هونغ كونغ SAR وشنغهاي. اطلب قبل الساعة 11:00 صباحًا لتلقي طلبك في
              نفس اليوم، وبعد الساعة 11:00 صباحًا لليوم العمل التالي.
            </p>
            <b>متى سأستلم طلبي وكيف يمكنني تتبع التوصيل؟</b>
            <p>
              بمجرد تأكيد طلبك، سنقوم بإرساله خلال يومي عملين. اعتمادًا على
              موقعك والطريقة التي اخترتها للتوصيل، قد يستغرق التوصيل من 2 إلى 7
              أيام عمل. إذا كنت قد طلبت من علامات THE FIRST BRAND متعددة ومتاجر
              شريكة، ستصل عناصرك بشكل منفصل. سنرسل لك بريدًا إلكترونيًا يحتوي
              على معلومات التتبع وتاريخ التسليم المقدر عند إرسال كل عنصر.
            </p>
            <p>
              يمكنك أيضًا تتبع طلبك عن طريق الانتقال إلى "الطلبات والمرتجعات" في
              حسابك. اختر الدفع كضيف؟ تتبع طلبك كضيف من هنا.
            </p>
            <b>هل سأحتاج إلى دفع الضرائب والرسوم الجمركية؟</b>
            <p>
              تقوم THE FIRST BRAND بشحن المنتجات إلى الوجهات التالية على أساس
              "توصيل الرسوم المدفوعة" (DDP): الاتحاد الأوروبي (باستثناء جزر
              الكناري)، المملكة المتحدة، الولايات المتحدة، كندا، الصين الرئيسية،
              أستراليا، نيوزيلندا، بورتو ريكو، سويسرا، سنغافورة، جمهورية كوريا،
              الكويت، المكسيك، قطر، الهند، النرويج، السعودية، منطقة تايوان،
              تايلاند، الإمارات العربية المتحدة، اليابان، البرازيل، جزيرة مان،
              سان مارينو، كولومبيا، تشيلي، الأرجنتين، مصر، لبنان، تركيا، هونغ
              كونغ SAR والبحرين. وهذا يعني أن جميع الضرائب والرسوم المناسبة
              مدرجة في السعر النهائي عند إجراء الطلب ولا توجد تكاليف إضافية عند
              التسليم. إذا تم اختيار وجهة "توصيل في المكان" (DAP)، فإن السعر
              الذي تدفعه لـ THE FIRST BRAND سيستبعد جميع الرسوم والضرائب
              الجمركية المتعلقة بالاستيراد. ك تحتاج إلى دفع هذه مباشرة لشركة
              البريد لإطلاق طلبك من الجمارك عند الوصول. بالنسبة للعملاء في
              الولايات المتحدة، لا يقوم THE FIRST BRAND بجمع ضريبة المبيعات أو
              الاستخدام في جميع الولايات. قد يكون عليك دفع ضريبة المبيعات أو
              الاستخدام على شراء خاضع للضريبة، ما لم تكن ولايتك معفاة من
              الضريبة. تتطلب العديد من الولايات تقديم إقرار بضريبة
              المبيعات/الاستخدام في نهاية العام للمشتريات الخاضعة للضريبة التي
              لم تكن مفرضة ضريبة عليها (بما في ذلك المشتريات عبر الإنترنت) ودفع
              ضريبة الاستخدام على تلك المشتريات. لمزيد من التفاصيل، يُرجى
              الاتصال بمكتب الجمارك المحلي، الجهة الضريبية المعنية أو مشاهدة
              معلوماتنا حول الضرائب والرسوم الجمركية.
            </p>
            <b>لماذا لا يمكن توصيل بعض العناصر إلي؟</b>
            <p>
              في حين أن THE FIRST BRAND تقدم خدمة توصيل دولية، يمكن للعلامات
              التجارية على موقعنا تحديد أماكن توزيع منتجاتها - لذا قد لا تكون
              بعض العناصر متاحة للطلب في جميع المناطق. قد تكون بعض العناصر أيضًا
              مقيدة بسبب الجمارك المحلية في البلد الذي ترسل إليه. إذا كانت لديك
              أي أسئلة، فاتصل بفريق خدمة العملاء العالمي لدينا.
            </p>
            <b>لم أتلقّ فاتورتي مع طلبي. من أين يمكنني العثور عليها؟</b>
            <p>
              نحن نقوم بإنشاء تجربة تسوق أكثر استدامة. تمت إزالة الفواتير من
              طلبات THE FIRST BRAND للحد من الفاقد. قم بتسجيل الدخول إلى حسابك
              على موقعنا على الويب لتنزيل الفاتورة الرقمية الخاصة بك. أو إذا قمت
              بتقديم طلب كضيف، أدخل تفاصيل طلبك كضيف هنا.
            </p>
          </div>
        </div>
      )}
      {lang === "en" && (
        <div className="border-b border-b-slate-300 ">
          <button
            onClick={() => setOpens((prev) => ({ ...prev, five: !prev.five }))}
            className="flex pt-4 py-2 text-lg focus:outline-none w-full justify-between items-center uppercase"
          >
            RETURNS and refunds
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
            <b>What is THE FIRST BRAND’s returns policy?</b>
            <p>
              We offer a refund on any items returned to us within 14 days of
              the delivery date, excluding any delivery costs. You can use our
              Free Collection service to return any unwanted items.
            </p>
            <p>
              Our payment provider will use the email address you provided at
              checkout and email you as soon as your refund has been processed.
              Once a refund is successfully claimed by you, the crypto should
              return to your wallet within the same business day depending on
              how congested blockchain is.
            </p>
            <p>
              To start a return, go to Orders & Returns in your account, or if
              you placed your order as a guest, enter your guest order details
              here.
            </p>
            <p>
              It's best to book your collection within 7 days of delivery — this
              is to make sure your package arrives within the required time
              frame. We are unable to process exchanges and all returned items
              must be unworn, undamaged and unused, with all tags attached. All
              designer boxes or cases that came with your order must be included
              with your return. If anything is damaged or missing from your
              return, you may not receive your refund. Read the full Returns
              Policy here.
            </p>
            <b>How do I book a free collection or return in store?</b>
            <p>
              To request a return, go to Orders & Returns if you have an
              account, or if you placed your order as a guest, enter your guest
              order details here.
            </p>
            <p>
              For our Free Collection service, select courier collection and
              choose a collection date. We'll then send you a confirmation email
              with the next steps. Need to reschedule your collection? You can
              also do this in Orders & Returns in your account.
            </p>
            <p>
              If you would prefer to drop off your return, select drop-off
              instead. Prepare your package with any return documents and take
              it to your chosen location along with your return confirmation
              email. Returns delivered within the US can be dropped off at any
              UPS or Fedex store.
            </p>
            <b>
              I want to return my order but I need my invoice for customs
              clearance. Will it still be included in my order?
            </b>
            <p>
              Yes - invoices for customs clearance will still be included in
              your THE FIRST BRAND order. When you're preparing your return,
              you'll need to include the Return Note outside the THE FIRST BRAND
              package.
            </p>
            <b>How do I return my item?</b>
            <b>Here’s what you need to do:</b>
            <ol className="px-6 list-decimal">
              <li>
                Go to Orders & Returns if you have an account. If you placed
                your order as a guest, enter your guest order details here
              </li>
              <li>
                Find the order you want to return and click Return Item(s)
              </li>
              <li>Select each item and your reason for returning</li>
            </ol>
            <b>
              There are two ways to return your items. Depending on your
              location, one will always be available.
            </b>
            <b>1. Book a free returns collection</b>
            <p>
              Select your collection address and number of packages, schedule a
              collection date, suitable time and click Book Collection
            </p>
            <b>2. Return for free at a drop-off point near you</b>
            <p>
              Select the in-store or drop-off option in your account and take
              the return to your chosen THE FIRST BRAND partner boutique or
              courier drop-off point
            </p>
            <b>Prepare your return</b>
            <ol className="px-6 list-decimal">
              <li>
                Place the item inside the THE FIRST BRAND packaging - don't
                forget any brand boxes, dust bags, or cases.
              </li>
              <li>
                Attach your Return Label to the outside of the THE FIRST BRAND
                packaging. If you’re returning multiple beauty items that
                arrived in separate boxes, please package them the same way they
                arrived with new Return Labels.
              </li>
              <li>
                If you received a Return Note with your order, attach it to the
                outside of your package.
              </li>
              <li>
                Give the Waybill Doc to the courier. Make a note of the Waybill
                Number to track your return.
              </li>
            </ol>
            <p>
              When your package is collected or dropped off, make sure you ask
              the courier to scan the label so you can track your return.
            </p>
            <p>
              Returns from different brands or partner boutiques should be
              packaged separately and the correct Return Label attached to the
              outside of each THE FIRST BRAND package.
            </p>
            <b>How do I package my item for return?</b>
            <p>Follow these steps to prepare your item:</p>
            <ol className="px-6 list-decimal">
              <li>
                Place any unwanted items, along with any brand boxes or cases
                that came with your order, inside the reusable THE FIRST BRAND
                packaging.
              </li>
              <li>
                Attach the Return Label and a signed copy of the Return Note to
                the outside of the THE FIRST BRAND packaging. Please do not
                attach any labels to the designer box or cases that came with
                your order.
              </li>
            </ol>
            <p>
              If you're returning to multiple locations, please pack the items
              separately and attach the corresponding Return Label to the
              outside of each package.
            </p>
            <p>Find out more about preparing your package for return here.</p>
            <b>
              Does my order need to be returned in the THE FIRST BRAND package
              it arrived in?
            </b>
            <p>
              We recommend returning your item in the reusable THE FIRST BRAND
              package provided, but if you're unable to do that, please find a
              suitable box so that items are returned in perfect condition.
              Items must be returned undamaged and unused, with all tags
              attached, including original packaging and branded boxes.
            </p>
            <b>Will the courier collect multiple packages?</b>
            <p>
              Yes, your courier may be able to collect multiple packages. If
              you're returning items to multiple THE FIRST BRAND brands or
              partner boutiques, you'll still need to request a separate
              collection for each package in your account. If you placed your
              order as a guest, enter your guest order details here.
            </p>
            <b>When will I receive my refund?</b>
            <p>
              You can track your return by using the tracking number assigned to
              your Return Label. Once your return has been received by our brand
              or partner boutique, it can take up to 6 calendar days to process.
              As soon as it's accepted, we'll send you a confirmation email.
              Your refund will be processed to your original payment method.
              This can take up to 14 days to show in your account, depending on
              your payment provider.
            </p>
            <b>Will delivery costs & duties be refunded on return?</b>
            <p>
              While we offer a Free Collection service for all returns, the
              original delivery cost won’t be included in your refund. If you
              placed an order to a Delivery At Place (DAP) destination, taxes
              and duties are non-refundable through THE FIRST BRAND. You may be
              able to recover these by contacting your local customs office
              directly. If you placed an order to a Delivery Duties Paid (DDP)
              destination, taxes and duties are refundable through THE FIRST
              BRAND.
            </p>
            <b>Can I return my made-to-order item?</b>
            <p>
              We are unable to accept returns as made-to-order items are created
              to your specification.
            </p>
          </div>
        </div>
      )}
      {lang === "ar" && (
        <div className="border-b border-b-slate-300">
          <button
            onClick={() => setOpens((prev) => ({ ...prev, five: !prev.five }))}
            className="flex pt-4 py-2 text-lg focus:outline-none w-full justify-between items-center uppercase"
          >
            الإرجاع واسترداد الأموال
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
            <b>ما هي سياسة إرجاع THE FIRST BRAND؟</b>
            <p>
              نحن نقدم استردادًا لأي سلعة مُرَجَّعَة إلينا في غضون 14 يومًا من
              تاريخ التسليم، باستثناء أي تكاليف توصيل. يمكنك استخدام خدمة الجمع
              المجانية لدينا لإرجاع أي سلع غير مرغوب فيها.
            </p>
            <p>
              سيستخدم مزود الدفع الخاص بنا عنوان البريد الإلكتروني الذي قدمته
              عند الخروج وسيقوم بإرسال بريد إلكتروني لك بمجرد معالجة استردادك.
              بمجرد أن يتم استلام الاسترداد بنجاح من قبلك، يجب أن يعود العملات
              المشفرة إلى محفظتك في نفس اليوم العمل اعتمادًا على مدى ازدحام
              البلوكتشين.
            </p>
            <p>
              لبدء عملية الإرجاع، انتقل إلى الطلبات والمرتجعات في حسابك، أو إذا
              قمت بالطلب كضيف، أدخل تفاصيل طلبك كضيف هنا.
            </p>
            <p>
              من الأفضل حجز جمع السلع خلال 7 أيام من التوصيل - هذا للتأكد من
              وصول طردك خلال الإطار الزمني المطلوب. لا يمكننا معالجة التبادلات
              ويجب أن تكون جميع السلع المُرَجَّعَة غير ملبوسة وغير تالفة وغير
              مستخدمة، مع جميع العلامات المرفقة. يجب تضمين جميع صناديق المصمم أو
              الحالات التي تمت مع طلبك مع إرجاعك. إذا كان هناك أي ضرر أو نقص في
              إرجاعك، فقد لا تتلقى استرداد أموالك. اقرأ سياسة الإرجاع الكاملة
              هنا.
            </p>
            <b>كيف يمكنني حجز جمع مجاني أو الإرجاع في المتجر؟</b>
            <p>
              لطلب الإرجاع، انتقل إلى الطلبات والمرتجعات إذا كان لديك حساب، أو
              إذا قمت بالطلب كضيف، أدخل تفاصيل طلبك كضيف هنا.
            </p>
            <p>
              بالنسبة لخدمة الجمع المجانية لدينا، حدد جمع البريد واختر تاريخ
              الجمع. سنرسل لك بعد ذلك بريدًا إلكترونيًا تأكيديًا مع الخطوات
              التالية. هل تحتاج إلى إعادة جدولة جمعك؟ يمكنك أيضًا القيام بذلك في
              الطلبات والمرتجعات في حسابك.
            </p>
            <p>
              إذا كنت تفضل إرجاع السلع بنفسك، حدد الخيار "التسليم في المتجر أو
              الإسقاط" بدلاً من ذلك. قم بتجهيز طردك مع أي مستندات إرجاع وقم
              بأخذه إلى الموقع الذي اخترته بالإضافة إلى بريد تأكيد الإرجاع الخاص
              بك. يمكن تسليم الإرجاعات داخل الولايات المتحدة في أي متجر UPS أو
              FedEx.
            </p>
            <b>
              أرغب في إرجاع طلبي ولكنني بحاجة إلى فاتورتي للتخليص الجمركي. هل
              ستتضمن ما زالت في طلبي؟
            </b>
            <p>
              نعم - ستتضمن الفواتير الخاصة بالتخليص الجمركي في طلب THE FIRST
              BRAND الخاص بك. عند عندما تقوم بتجهيز إرجاعك، ستحتاج إلى تضمين
              ملاحظة الإرجاع خارج عبوة THE FIRST BRAND.
            </p>
            <b>كيف يمكنني إرجاع سلعتي؟</b>
            <b>إليك ما تحتاج للقيام به:</b>
            <ol className="px-6 list-decimal">
              <li>
                انتقل إلى الطلبات والمرتجعات إذا كان لديك حساب. إذا قمت بالطلب
                كضيف، أدخل تفاصيل طلبك كضيف هنا
              </li>
              <li>ابحث عن الطلب الذي ترغب في إرجاعه وانقر فوق "إرجاع السلع"</li>
              <li>حدد كل سلعة وسبب إرجاعك</li>
            </ol>
            <b>
              هناك طريقتان لإرجاع السلع الخاصة بك. اعتمادًا على موقعك، سيكون
              دائمًا هناك واحد متاحًا.
            </b>
            <b>1. حجز جمع الإرجاع مجانًا</b>
            <p>
              حدد عنوان الجمع الخاص بك وعدد الحزم، وقم بجدولة تاريخ الجمع والوقت
              المناسب وانقر فوق "حجز الجمع"
            </p>
            <b>2. إرجاع السلع مجانًا في نقطة الإسقاط القريبة منك</b>
            <p>
              حدد الخيار "في المتجر أو الإسقاط" في حسابك وقم بإرجاع السلعة إلى
              متجر THE FIRST BRAND الشريك الذي اخترته أو نقطة الإسقاط الخاصة
              بشركة الشحن
            </p>
            <b>قم بتجهيز إرجاعك</b>
            <ol className="px-6 list-decimal">
              <li>
                ضع السلعة داخل عبوة THE FIRST BRAND قابلة لإعادة الاستخدام - لا
                تنس أي صناديق علامات تجارية أو أكياس غبار أو حالات.
              </li>
              <li>
                قم بتثبيت ملصق الإرجاع على الخارج من عبوة THE FIRST BRAND. إذا
                كنت تقوم بإرجاع عدة سلع جمالية وصلت في صناديق منفصلة، فيرجى
                تعبئتها بنفس الطريقة التي وصلت بها مع ملصقات إرجاع جديدة.
              </li>
              <li>
                إذا كنت قد تلقيت ملحوظة الإرجاع مع طلبك، قم بتثبيتها على الخارج
                من حزمتك.
              </li>
              <li>
                قدم مستند Waybill للساعي. احرص على تسجيل رقم Waybill لتتبع
                إرجاعك.
              </li>
            </ol>
            <p>
              عندما يتم جمع طردك أو الإسقاط، تأكد من طلب من الساعي مسح الملصق
              حتى تتمكن من تتبع إرجاعك.
            </p>
            <p>
              يجب تعبئة الإرجاعات من ماركات مختلفة أو متاجر شريكة بشكل منفصل
              وتثبيت الملصق الصحيح إلى الخارج من كل عبوة THE FIRST BRAND.
            </p>
            <b>كيف يمكنني تعبئة سلعتي للإرجاع؟</b>
            <p>اتبع هذه الخطوات لتجهيز سلعتك:</p>
            <ol className="px-6 list-decimal">
              <li>
                ضع السلع الغير مرغوب فيها، جنبًا إلى جنب مع أي صناديق علامات
                تجارية أو حالات وصلت مع طلبك، داخل عبوة THE FIRST BRAND قابلة
                لإعادة الاستخدام.
              </li>
              <li>
                قم بتثبيت ملصق الإرجاع ونسخة موقعة من ملحوظة الإرجاع على الخارج
                من عبوة THE FIRST BRAND. من فضلك، لا تقم بتثبيت أي ملصقات على
                صناديق المصمم أو الحالات الأصلية التي وصلت مع طلبك.
              </li>
            </ol>
            <p>لمعرفة المزيد حول تجهيز عبوتك للإرجاع، اطلع على المزيد هنا.</p>
            <b>
              هل يجب أن تُرجع طلبي في العبوة التي وصلت فيها THE FIRST BRAND؟
            </b>
            <p>
              نوصي بإعادة السلعة في العبوة القابلة لإعادة الاستخدام التي قدمتها
              THE FIRST BRAND، ولكن إذا لم تتمكن من ذلك، يرجى العثور على عبوة
              مناسبة حتى تتم إعادة السلع بحالة مثالية. يجب أن تُرجع السلع غير
              التالفة وغير المستخدمة، مع جميع العلامات المرفقة، بما في ذلك
              التعبئة الأصلية والصناديق العلامية.
            </p>
            <b>هل سيقوم الساعي بجمع حزم متعددة؟</b>
            <p>
              نعم، قد يكون الساعي قادرًا على جمع حزم متعددة. إذا كنت تقوم بإرجاع
              السلع إلى علامات THE FIRST BRAND متعددة أو متاجر شريكة، ستحتاج مع
              ذلك إلى طلب جمع منفصل لكل حزمة في حسابك. إذا قمت بالطلب كضيف، أدخل
              تفاصيل طلبك كضيف هنا.
            </p>
            <b>متى سأستلم استرداد أموالي؟</b>
            <p>
              يمكنك تتبع إرجاعك باستخدام رقم التتبع المخصص لملصق الإرجاع. بمجرد
              استلام إرجاعك من قبل علامتنا التجارية أو متجر الشريك، قد يستغرق ما
              يصل إلى 6 أيام تقويمية لمعالجته. بمجرد أن يتم قبوله، سنرسل لك
              بريدًا إلكترونيًا تأكيديًا. سيتم معالجة استرداد أموالك إلى وسيلة
              الدفع الأصلية الخاصة بك. يمكن أن يستغرق ذلك ما يصل إلى 14 يومًا
              حتى يظهر في حسابك، اعتمادًا على مزود الدفع الخاص بك.
            </p>
            <b>هل ستُسترد تكاليف التوصيل والرسوم عند الإرجاع؟</b>
            <p>
              بينما نقدم خدمة الجمع المجانية لجميع الإرجاعات، لن يتم تضمين تكلفة
              التوصيل الأصلية في استردادك. إذا قمت بطلب إلى وجهة تسليم مكان
              المقابلة (DAP)، فإن الضرائب والرسوم غير قابلة للاسترداد من خلال
              THE FIRST BRAND. قد تتمكن من استردادها من خلال الاتصال بمكتب
              الجمارك المحلي مباشرة. إذا قمت بطلب إلى وجهة تسليم الرسوم المدفوعة
              (DDP)، فإن الضرائب والرسوم قابلة للاسترداد من خلال THE FIRST
              BRAND.
            </p>
            <b>هل يمكنني إرجاع سلعة صنعت حسب الطلب؟</b>
            <p>
              لا يمكننا قبول الإرجاعات لأن السلع المصنوعة حسب الطلب تم إنشاؤها
              وفقًا لمواصفاتك.
            </p>
          </div>
        </div>
      )}
      {lang === "en" && (
        <div className="border-b border-b-slate-300 ">
          <button
            onClick={() => setOpens((prev) => ({ ...prev, six: !prev.six }))}
            className="flex pt-4 py-2 text-lg focus:outline-none w-full justify-between items-center uppercase"
          >
            Pre-order
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
            <b>What does pre-order mean?</b>
            <p>
              You can get early access to next season's most wanted pieces
              before they're released.
            </p>
            <b>When will my pre-order item arrive?</b>
            <p>
              As soon as your item has been released and is ready to be sent,
              you'll receive an email with the estimated delivery date.
            </p>
            <b>When do I have to pay?</b>
            <p>Pre-order items require full payment at checkout.</p>

            <b>Can I cancel a pre-order?</b>
            <p>
              Some of our brands and partner boutiques allow you to cancel an
              item before we prepare your order.
            </p>
            <b>To cancel your order:</b>
            <ol className="px-6 list-decimal">
              <li>
                Go to Orders & Returns if you have an account, or if you placed
                an order as a guest, enter your guest order details here. We'll
                need your order number and email address
              </li>
              <li>
                Select the items you want to cancel and your reason for
                cancellation
              </li>
              <li>We'll email you confirmation of your cancelled order</li>
            </ol>
            <p>
              If your order has already been prepared, we can't cancel your
              order — but we do offer a Free Returns service.
            </p>
            <b>Can I change my delivery address?</b>
            <p>
              Go to Order Details in your THE FIRST BRAND account, to check if
              you can change your address. You may not be able to if your item
              has already been sent.
            </p>
            <b>Are pre-order items refundable?</b>
            <p>
              Yes, just make sure items meet the conditions of our Returns
              Policy.
            </p>
            <b>Will pre-order items be delivered with my other orders?</b>
            <p>
              No, they will be delivered separately according to the expected
              release date.
            </p>
            <b>Is there a limit on purchasing pre-order items?</b>
            <p>
              There may be order limits on some pre-order items. This is so
              everyone has a chance to get the items they love.
            </p>
          </div>
        </div>
      )}
      {lang === "ar" && (
        <div className="border-b border-b-slate-300">
          <button
            onClick={() => setOpens((prev) => ({ ...prev, six: !prev.six }))}
            className="flex pt-4 py-2 text-lg focus:outline-none w-full justify-between items-center uppercase"
          >
            الطلب المسبق
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
            <b>ماذا يعني الطلب المسبق؟</b>
            <p>
              يمكنك الحصول على الوصول المبكر إلى القطع الأكثر طلبًا للموسم
              القادم قبل إصدارها.
            </p>
            <b>متى ستصل سلعتي المطلوبة مسبقًا؟</b>
            <p>
              بمجرد أن تتم إصدار سلعتك وتكون جاهزة للشحن، ستتلقى بريدًا
              إلكترونيًا يحتوي على تاريخ التسليم المتوقع.
            </p>
            <b>متى يجب أن أدفع؟</b>
            <p>تتطلب السلع المطلوبة مسبقًا الدفع الكامل عند الخروج.</p>

            <b>هل يمكنني إلغاء طلب سلعة مطلوبة مسبقًا؟</b>
            <p>
              تسمح بعض من علاماتنا ومتاجر شريكنا بإلغاء سلعة قبل تجهيز طلبك.
            </p>
            <b>لإلغاء طلبك:</b>
            <ol className="px-6 list-decimal">
              <li>
                انتقل إلى الطلبات والمرتجعات إذا كان لديك حساب، أو إذا قمت
                بالطلب كضيف، أدخل تفاصيل طلبك كضيف هنا. سنحتاج إلى رقم طلبك
                وعنوان البريد الإلكتروني
              </li>
              <li>حدد العناصر التي ترغب في إلغائها وسبب إلغائك</li>
              <li>سنرسل لك بريدًا إلكترونيًا يؤكد إلغاء طلبك</li>
            </ol>
            <p>
              إذا تم تجهيز طلبك بالفعل، فإننا لا نستطيع إلغاء طلبك — ولكننا نقدم
              خدمة الإرجاع المجانية.
            </p>
            <b>هل يمكنني تغيير عنوان التسليم الخاص بي؟</b>
            <p>
              انتقل إلى تفاصيل الطلب في حساب THE FIRST BRAND الخاص بك للتحقق من
              إمكانية تغيير عنوان التسليم. قد لا تكون قادرًا على القيام بذلك إذا
              تم بالفعل إرسال سلعتك.
            </p>
            <b>هل السلع المطلوبة مسبقًا قابلة للاسترداد؟</b>
            <p>نعم، فقط تأكد من أن السلع تستوفي شروط سياسة الإرجاع لدينا.</p>
            <b>هل سيتم تسليم السلع المطلوبة مسبقًا مع طلباتي الأخرى؟</b>
            <p>لا، ستتم تسليمها بشكل منفصل وفقًا لتاريخ الإصدار المتوقع.</p>
            <b>هل هناك حد أقصى لشراء السلع المطلوبة مسبقًا؟</b>
            <p>
              قد تكو ن تكون هناك حدود للطلب على بعض السلع المطلوبة مسبقًا. وذلك
              لضمان أن الجميع لديه فرصة للحصول على السلع التي يحبونها.
            </p>
          </div>
        </div>
      )}
      {lang === "en" && (
        <div className="border-b border-b-slate-300 ">
          <button
            onClick={() =>
              setOpens((prev) => ({ ...prev, seven: !prev.seven }))
            }
            className="flex pt-4 py-2 text-lg focus:outline-none w-full justify-between items-center uppercase"
          >
            SIZE AND FIT
            <IoIosArrowBack
              size={20}
              className={`transition-all ${
                opens.seven ? "rotate-90" : "rotate-[270deg]"
              }`}
            />
          </button>
          <div
            className={`my-2 transition-all  overflow-hidden ${
              opens.seven ? "h-full" : "h-0"
            }`}
          >
            <b>Where can I find size conversion charts?</b>
            <p>
              View our size conversion charts by selecting Size Guide, which you
              can find above the select size menu, on the product information
              page.
            </p>
            <b>How can I get a better understanding on how a piece will fit?</b>
            <p>
              Go to the product information page and select the Size & Fit tab
              to view the size, fit, cut and model measurements. You can find
              the material composition and care instructions on The Details tab.
            </p>
            <b>What's the difference between size, fit, cut and material?</b>
            <p>
              The size of an item refers to the designer size on the label, fit
              describes how the item will fit on the body, cut is the silhouette
              and the material describes what the item is made from. To find
              this information, go to the product information page and view The
              Details and Size & Fit tab.
            </p>
            <b>Why do designer sizes vary?</b>
            <p>
              International sizes are slightly different when converted and some
              designers fit larger or smaller than others. That's why we provide
              specific information for each item.
            </p>
            <b>What if my item doesn't fit?</b>
            <p>
              If your item doesn't fit, you can return it with our free returns
              service. If you'd like to place another order, you can do this
              online or contact our global Customer Service team.
            </p>
          </div>
        </div>
      )}
      {lang === "ar" && (
        <div className="border-b border-b-slate-300">
          <button
            onClick={() =>
              setOpens((prev) => ({ ...prev, seven: !prev.seven }))
            }
            className="flex pt-4 py-2 text-lg focus:outline-none w-full justify-between items-center uppercase"
          >
            المقاسات والمقاس
            <IoIosArrowBack
              size={20}
              className={`transition-all ${
                opens.seven ? "rotate-90" : "rotate-[270deg]"
              }`}
            />
          </button>
          <div
            className={`my-2 transition-all  overflow-hidden ${
              opens.seven ? "h-full" : "h-0"
            }`}
          >
            <b>أين يمكنني العثور على جداول تحويل المقاسات؟</b>
            <p>
              يمكنك عرض جداول تحويل المقاسات لدينا عن طريق اختيار دليل المقاسات،
              الذي يمكنك العثور عليه أعلى قائمة اختيار المقاس على صفحة معلومات
              المنتج.
            </p>
            <b>كيف يمكنني الحصول على فهم أفضل حول كيفية تناسب القطعة؟</b>
            <p>
              انتقل إلى صفحة معلومات المنتج واختر علامة التبويب المتعلقة بالمقاس
              والتناسب لعرض المقاس، وكيفية التناسب، والقصّة، وقياسات النموذج.
              يمكنك أيضًا العثور على تكوين المادة وإرشادات العناية على علامة
              التبويب تفاصيل القطعة.
            </p>
            <b>ما الفرق بين المقاس، والتناسب، والقصّة، والمادة؟</b>
            <p>
              المقاس يشير إلى مقاس المصمم الذي يظهر على العلامة، التناسب يصف كيف
              ستتناسب القطعة مع الجسم، القصّة هي الشكل والقطعة والمادة تصف ماهية
              مصنوعة منها القطعة. للعثور على هذه المعلومات، انتقل إلى صفحة
              معلومات المنتج وشاهد علامة التبويب التفاصيل والمقاس والتناسب.
            </p>
            <b>لماذا تختلف المقاسات من المصممين؟</b>
            <p>
              المقاسات الدولية تختلف قليلًا عند التحويل، وبعض المصممين يمكن أن
              يكونوا أكبر أو أصغر من غيرهم. هذا هو السبب في توفير معلومات محددة
              لكل قطعة.
            </p>
            <b>ماذا لو لم تتناسب القطعة معي؟</b>
            <p>
              إذا لم تتناسب القطعة معك، يمكنك إرجاعها باستخدام خدمة الإرجاع
              المجانية لدينا. إذا كنت ترغب في تقديم طلب آخر، يمكنك القيام بذلك
              عبر الإنترنت أو الاتصال بفريق خدمة العملاء العالمي لدينا.
            </p>
          </div>
        </div>
      )}
      {lang === "en" && (
        <div className="border-b border-b-slate-300 ">
          <button
            onClick={() =>
              setOpens((prev) => ({ ...prev, eight: !prev.eight }))
            }
            className="flex pt-4 py-2 text-lg focus:outline-none w-full justify-between items-center uppercase"
          >
            PROMOTIONS
            <IoIosArrowBack
              size={20}
              className={`transition-all ${
                opens.eight ? "rotate-90" : "rotate-[270deg]"
              }`}
            />
          </button>
          <div
            className={`my-2 transition-all  overflow-hidden ${
              opens.eight ? "h-full" : "h-0"
            }`}
          >
            <b>How do I find out about the latest promotions?</b>
            <p>
              To stay updated on exclusive promotions, new in and early sale
              access, sign up to our emails.
            </p>
            <b>What different types of promotions are there?</b>
            <p>
              You can view all our promotions on the Promotion Terms &
              Conditions page. Or if you're an Access member, check your Access
              dashboard for promotional rewards in your account.
            </p>
            <b>How do I apply a promo code?</b>
            <p>
              All you need to do is add your eligible items to your shopping
              bag. Depending on the promo code, it will either be automatically
              applied, or you may have to manually enter it at checkout. If you
              have any questions, contact our global Customer Service team.
            </p>
            <b>Are there any brands excluded from promotional discounts?</b>
            <p>
              Yes, promotional discounts can only be redeemed on selected brands
              and items. As each THE FIRST BRAND promotion is different, we're
              unable to provide a list of excluded brands and items. However,
              items that are labelled or added to the promotions page may be
              eligible for a promotional discount. For more information, view
              the Promotion Terms & Conditions page.
            </p>
            <b>How do I know if my item is eligible for a promotion?</b>
            <p>
              Items that are labelled or added to the promotions page may be
              eligible for a promotion. If a minimum spend applies, this must be
              spent in a single transaction. For more information, view the
              Promotion Terms & Conditions page.
            </p>
            <b>
              The item I want is part of the promotion but my size isn't
              discounted. Why does this happen?
            </b>
            <p>
              At THE FIRST BRAND, you are shopping items from our worldwide
              selection of luxury brands and partner boutiques. If the size you
              want is from a brand or partner boutique that isn't participating
              in our THE FIRST BRAND promotion, it will not be discounted.
            </p>
            <b>My promo code has expired. Can I request another one?</b>
            <p>
              Our Customer Service team are unable to reactivate any promotional
              discounts. Promotional discounts and promotional codes are also
              non-transferable and have no cash alternative.
            </p>
          </div>
        </div>
      )}
      {lang === "ar" && (
        <div className="border-b border-b-slate-300">
          <button
            onClick={() =>
              setOpens((prev) => ({ ...prev, eight: !prev.eight }))
            }
            className="flex pt-4 py-2 text-lg focus:outline-none w-full justify-between items-center uppercase"
          >
            العروض والترويجات
            <IoIosArrowBack
              size={20}
              className={`transition-all ${
                opens.eight ? "rotate-90" : "rotate-[270deg]"
              }`}
            />
          </button>
          <div
            className={`my-2 transition-all  overflow-hidden ${
              opens.eight ? "h-full" : "h-0"
            }`}
          >
            <b>كيف يمكنني معرفة أحدث العروض والترويجات؟</b>
            <p>
              للبقاء على اطلاع دائم على العروض الحصرية، والمنتجات الجديدة،
              والوصول المبكر إلى البيع، يُفضل التسجيل في رسائل البريد الإلكتروني
              الخاصة بنا.
            </p>
            <b>ما هي أنواع الترويجات المختلفة المتاحة؟</b>
            <p>
              يمكنك عرض جميع الترويجات التي نقدمها على صفحة شروط وأحكام العروض.
              أو إذا كنت عضوًا في برنامج Access، يُمكنك التحقق من لوحة Access
              الخاصة بك لمعرفة المكافآت الترويجية في حسابك.
            </p>
            <b>كيف يمكنني استخدام رمز الترويج؟</b>
            <p>
              كل ما عليك القيام به هو إضافة العناصر المؤهلة إلى سلة التسوق
              الخاصة بك. باختلاف رمز الترويج، قد يتم تطبيقه تلقائيًا، أو قد
              تحتاج إلى إدخاله يدويًا عند الخروج. إذا كنت تواجه أي استفسارات،
              يمكنك التواصل مع فريق خدمة العملاء العالمي لدينا.
            </p>
            <b>هل هناك أي علامات تجارية تستبعد من الخصومات الترويجية؟</b>
            <p>
              نعم، يمكن استبعاد الخصومات الترويجية عن بعض العلامات التجارية
              والعناصر المحددة. حيث أن كل ترويج THE FIRST BRAND مختلف، لذا نحن
              غير قادرين على تقديم قائمة بالعلامات التجارية والعناصر المستبعدة.
              ومع ذلك، قد تكون العناصر المُعلمة أو المُضافة إلى صفحة الترويج
              مؤهلة للحصول على خصم ترويجي. لمزيد من المعلومات، يمكنك الاطلاع على
              صفحة شروط وأحكام العروض.
            </p>
            <b>كيف أعرف ما إذا كانت عنصري مؤهلة للخصم الترويجي؟</b>
            <p>
              قد تكون العناصر المُعلمة أو المُضافة إلى صفحة الترويج مؤهلة للحصول
              على خصم ترويجي. إذا كان هناك حد أدنى للإنفاق، يجب أن يتم الإنفاق
              به في عملية واحدة. لمزيد من المعلومات، يمكنك الاطلاع على صفحة شروط
              وأحكام العروض.
            </p>
            <b>
              العنصر الذي أرغب في شرائه جزء من الترويج ولكن مقاسي ليس له خصم.
              لماذا يحدث هذا؟
            </b>
            <p>
              في THE FIRST BRAND، أنت تتسوق العناصر من اختيارنا العالمي من
              العلامات التجارية الفاخرة والمتاجر الشريكة. إذا كان الحجم الذي
              تريده من علامة تجارية أو متجر شريك لا يشارك في الترويج THE FIRST
              BRAND، فلن يتم تطبيق الخصم عليه.
            </p>
            <b>رمز الترويج الخاص بي انتهى صلاحيته. هل يمكنني طلب رمز آخر؟</b>
            <p>
              فريق خدمة العملاء لدينا غير قادر على إعادة تفعيل أي خصومات
              ترويجية. الخصومات الترويجية ورموز الترويج أيضًا غير قابلة للنقل
              ولا تأتي ببديل نقدي.
            </p>
            <b>كيف يمكنني معرفة أحدث العروض والترويجات؟</b>
            <p>
              للبقاء على اطلاع دائم على العروض الحصرية، والمنتجات الجديدة،
              والوصول المبكر إلى البيع، يُفضل التسجيل في رسائل البريد الإلكتروني
              الخاصة بنا.
            </p>
            <b>ما هي أنواع الترويجات المختلفة المتاحة؟</b>
            <p>
              يمكنك عرض جميع الترويجات التي نقدمها على صفحة شروط وأحكام العروض.
              أو إذا كنت عضوًا في برنامج Access، يُمكنك التحقق من لوحة Access
              الخاصة بك لمعرفة المكافآت الترويجية في حسابك.
            </p>
            <b>كيف يمكنني استخدام رمز الترويج؟</b>
            <p>
              كل ما عليك القيام به هو إضافة العناصر المؤهلة إلى سلة التسوق
              الخاصة بك. باختلاف رمز الترويج، قد يتم تطبيقه تلقائيًا، أو قد
              تحتاج إلى إدخاله يدويًا عند الخروج. إذا كنت تواجه أي استفسارات،
              يمكنك التواصل مع فريق خدمة العملاء العالمي لدينا.
            </p>
            <b>هل هناك أي علامات تجارية تستبعد من الخصومات الترويجية؟</b>
            <p>
              نعم، يمكن استبعاد الخصومات الترويجية عن بعض العلامات التجارية
              والعناصر المحددة. حيث أن كل ترويج THE FIRST BRAND مختلف، لذا نحن
              غير قادرين على تقديم قائمة بالعلامات التجارية والعناصر المستبعدة.
              ومع ذلك، قد تكون العناصر المُعلمة أو المُضافة إلى صفحة الترويج
              مؤهلة للحصول على خصم ترويجي. لمزيد من المعلومات، يمكنك الاطلاع على
              صفحة شروط وأحكام العروض.
            </p>
            <b>كيف أعرف ما إذا كانت عنصري مؤهلة للخصم الترويجي؟</b>
            <p>
              قد تكون العناصر المُعلمة أو المُضافة إلى صفحة الترويج مؤهلة للحصول
              على خصم ترويجي. إذا كان هناك حد أدنى للإنفاق، يجب أن يتم الإنفاق
              به في عملية واحدة. لمزيد من المعلومات، يمكنك الاطلاع على صفحة شروط
              وأحكام العروض.
            </p>
            <b>
              العنصر الذي أرغب في شرائه جزء من الترويج ولكن مقاسي ليس له خصم.
              لماذا يحدث هذا؟
            </b>
            <p>
              في THE FIRST BRAND، أنت تتسوق العناصر من اختيارنا العالمي من
              العلامات التجارية الفاخرة والمتاجر الشريكة. إذا كان الحجم الذي
              تريده من علامة تجارية أو متجر شريك لا يشارك في الترويج THE FIRST
              BRAND، فلن يتم تطبيق الخصم عليه.
            </p>
            <b>رمز الترويج الخاص بي انتهى صلاحيته. هل يمكنني طلب رمز آخر؟</b>
            <p>
              فريق خدمة العملاء لدينا غير قادر على إعادة تفعيل أي خصومات
              ترويجية. الخصومات الترويجية ورموز الترويج أيضًا غير قابلة للنقل
              ولا تأتي ببديل نقدي.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Faqs;
