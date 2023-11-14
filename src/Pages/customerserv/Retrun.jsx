import { useContext, useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { AppContext } from "../../App";
const Retrun = () => {
  const { lang } = useContext(AppContext);
  const [opens, setOpens] = useState({
    one: false,
    two: false,
    three: false,
    four: false,
  });
  return (
    <div className="my-12">
      {lang === "en" && (
        <div className="border-b border-b-slate-300 ">
          <button
            onClick={() => setOpens((prev) => ({ ...prev, one: !prev.one }))}
            className="flex py-2 text-lg focus:outline-none w-full justify-between items-center uppercase"
          >
            how to return
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
              As part of our commitment to reducing our environmental impact,
              our return instructions are paper free. This benefits our
              customers, our people and our planet.
            </p>
            <p>
              When returning your items, please include any accessories, branded
              boxes or cases that came with your order, in the reusable THE
              FIRST BRAND packaging. If anything is damaged or missing from your
              return, you may not receive your refund.
            </p>
            <p>
              Whether you arrange a collection or drop off your return, you’ll
              need to do this from the country or region you ordered to.
            </p>
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
            <p>
              1. Book a free returns collection Select your collection address
              and number of packages, schedule a collection date, suitable time
              and click Book Collection
            </p>
            <p>
              2. Return for free at a drop-off point near you Select the
              in-store or drop-off option in your account and take the return to
              your chosen THE FIRST BRAND partner boutique or courier drop-off
              point
            </p>
            <b>Prepare your return</b>
            <ol className="px-6 list-decimal">
              <li>
                Place the item inside the THE FIRST BRAND packaging - don't
                forget any brand boxes, dust bags, or cases
              </li>
              <li>
                Attach your Return Label to the outside of the THE FIRST BRAND
                packaging. If you’re returning multiple beauty items that
                arrived in separate boxes, please package them the same way they
                arrived with new Return Labels
              </li>
              <li>
                If you received a Return Note with your order, attach it to the
                outside of your package
              </li>
              <li>
                Give the Waybill Doc to the courier. Make a note of the Waybill
                Number to track your return
              </li>
            </ol>
            <p>
              When your package is collected or dropped off, make sure you ask
              the courier to scan the label so you can track your return.
            </p>
            <b>
              Need to reschedule your return collection? You can do this by
              heading to Orders & Returns in your account.
            </b>
            <p>
              Returns from different brands or partner boutiques should be
              packaged separately and the correct Return Label attached to the
              outside of each THE FIRST BRAND package.
            </p>
            <p>
              All the documents you need to return your item should be included
              in your THE FIRST BRAND package. If you need to reprint them, head
              to Orders & Returns in your account, or if you placed an order as
              a guest, enter your guest order details here.
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
            كيفية الإرجاع
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
              كجزء من التزامنا بتقليل تأثيرنا على البيئة، تعليمات الإرجاع لدينا
              خالية من الورق. وهذا يعود بالفائدة على عملائنا وموظفينا وكوكبنا.
            </p>
            <p>
              عند إرجاع العناصر الخاصة بك، يُرجى تضمين أي إكسسوارات أو صناديق
              العلامة التجارية أو الحالات التي تم مع الطلب، داخل عبوة THE FIRST
              BRAND قابلة لإعادة الاستخدام. إذا كان هناك أي ضرر أو نقص في عملية
              الإرجاع الخاصة بك، قد لا تتلقى استردادك.
            </p>
            <p>
              سواء قمت بترتيب عملية جمع أو تسليم إرجاعك، ستحتاج إلى القيام بذلك
              من البلد أو المنطقة التي قمت بالطلب منها.
            </p>
            <b>إليك ما عليك فعله:</b>
            <ol className="px-6 list-decimal">
              <li>
                اذهب إلى الطلبات والمرتجعات إذا كان لديك حسابًا. إذا قمت بطلبك
                كضيف، قم بإدخال تفاصيل طلبك كضيف هنا
              </li>
              <li>ابحث عن الطلب الذي تريد إرجاعه وانقر على "إرجاع العناصر"</li>
              <li>اختر كل عنصر وسبب إرجاعك</li>
            </ol>
            <b>
              هناك طريقتان لإرجاع عناصرك. واحدة منهما ستكون دائمًا متاحة،
              اعتمادًا على موقعك.
            </b>
            <p>
              1. احجز جمعًا مجانيًا للمرتجعات. حدد عنوان الجمع وعدد الحزم، وجدول
              موعد الجمع والوقت المناسب، ثم انقر على "حجز الجمع"
            </p>
            <p>
              2. قم بالإرجاع مجانًا في نقطة استلام قريبة منك. اختر الخيار الخاص
              بالإرجاع في المتجر أو الإسقاط في حسابك وقم بإرجاع العنصر إلى
              المتجر الشريك لـ THE FIRST BRAND الذي اخترته أو نقطة الإسقاط لشركة
              الشحن
            </p>
            <b>قم بتجهيز إرجاعك</b>
            <ol className="px-6 list-decimal">
              <li>
                ضع العنصر داخل عبوة THE FIRST BRAND - لا تنسى أي صناديق العلامة
                التجارية أو أكياس الغبار أو الحالات
              </li>
              <li>
                قم بتثبيت بطاقة الإرجاع الخاصة بك على الخارج من عبوة THE FIRST
                BRAND. إذا كنت تقوم بإرجاع عناصر جمال متعددة وصلت في صناديق
                منفصلة، يرجى تعبئتها بنفس الطريقة التي وصلت بها مع إرفاق بطاقات
                إرجاع جديدة
              </li>
              <li>
                إذا كنت قد تلقيت مذكرة إرجاع مع طلبك، قم بتثبيتها على الخارج من
                حزمتك
              </li>
              <li>
                قدم وثيقة الشحن إلى الساعي. قم بتدوين رقم الوثيقة لتتبع عملية
                الإرجاع
              </li>
            </ol>
            <p>
              عندما يتم جمع حزمتك أو إسقاطها، تأكد من طلب من الساعي مسح البطاقة
              حتى تتمكن من تتبع عملية الإرجاع.
            </p>
            <b>هل تحتاج إلى إعادة جدولة عملية جمع الإرجاع؟ يمكنك القيام بذل</b>
            <b>
              مشروع القيام بذلك عن طريق الانتقال إلى الطلبات والمرتجعات في
              حسابك.
            </b>
            <p>
              يجب تعبئة عناصر مختلفة من علامات تجارية أو متاجر شريكة بشكل منفصل
              وتثبيت بطاقة الإرجاع الصحيحة على الخارج من كل عبوة THE FIRST
              BRAND.
            </p>
            <p>
              يجب تضمين جميع الوثائق التي تحتاجها لإرجاع عنصرك داخل عبوة THE
              FIRST BRAND. إذا كنت بحاجة إلى إعادة طباعتها، انتقل إلى الطلبات
              والمرتجعات في حسابك، أو إذا قمت بالطلب كضيف، قم بإدخال تفاصيل طلبك
              كضيف هنا.
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
            Returns policy
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
            <b>
              We accept returns within 14 days, starting from the day your order
              was delivered.
            </b>
            <p>Returned items must comply with our returns policy:</p>
            <ul>
              <li>
                • Items must be returned unworn, undamaged and unused, with all
                tags attached and the original packaging included
              </li>
              <li>
                • Footwear and accessories must be returned with the original
                branded boxes and dust bags, where provided, and placed inside a
                protective box when returned
              </li>
              <li>
                • When trying on footwear, please do not mark the soles or
                damage the shoe box
              </li>
              <li>
                • If an item has a THE FIRST BRAND security tag or brand tag
                attached, it must be returned with the tag in its original
                position
              </li>
              <li>
                • Beauty and cosmetic products must be returned unopened and
                unused, with the seals of any packaging still intact
              </li>
              <li>
                • Hosiery, lingerie and swimwear items must be returned with the
                hygiene seals attached and in unopened and undamaged packaging,
                where applicable
              </li>
              <li>
                • Lingerie and swimwear must only be tried on over your own
                undergarments. We will not accept any returns that have been
                worn or are soiled
              </li>
              <li>
                • Due to the nature of face masks, we will not be able to accept
                returns unless the item is damaged or faulty when delivered to
                you
              </li>
              <li>
                • Jewellery must be returned in the same condition it arrived
                in, including all branded packaging and documents provided with
                it
              </li>
              <li>
                • Made-to-order items cannot be returned as they have been
                created to your specification, unless the item arrives damaged
                or faulty when delivered to you
              </li>
            </ul>
            <p>
              Please be careful when trying on your purchases and return them in
              the same condition you received them. Any returns that do not meet
              our policy will not be accepted.
            </p>
            <p>
              To create a better shopping experience for our customers, we offer
              a flexible returns policy. We monitor the number of returns and
              reserve the right to close your THE FIRST BRAND account or
              restrict future orders if your return behaviour is in breach of
              our Returns Policy. Read our Terms & Conditions here.
            </p>
            <b>Cancelling an order under the Consumer Contracts Regulation</b>

            <p>
              Depending on where you live, you can also choose to cancel your
              order under the Consumer Contracts (Information, Cancellation and
              Additional Charges) 2013 Regulations (CCRs). If you would like to
              cancel your order, you must notify us of your wish to cancel
              within 14 days from the date your order arrived using one of the
              methods set out below. Once you notify us, you will be responsible
              for the cost and arrangement of returning the items to the THE
              FIRST BRAND brand or partner boutique you ordered from. For more
              information on cancelling an order under the Consumer Contracts
              Regulation (CCRs), view our Terms & Conditions.
            </p>
            <b>To cancel a contract, you must inform us, preferably:</b>
            <p>
              • By telephone on 8000320327, giving us your name, address and
              order reference; or
            </p>
            <p>
              • By completing and returning this cancelation form to the address
              specified in the form.
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
            سياسة الإرجاع
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
            <b>نقبل الإرجاع خلال 14 يومًا، ابتداءً من يوم تسليم طلبك.</b>
            <p>يجب أن تتوافق العناصر المُرَجَعَة مع سياسة الإرجاع لدينا:</p>
            <ul>
              <li>
                • يجب إعادة العناصر غير الملبوسة، غير المتضررة وغير المستخدمة،
                مع جميع العلامات المرفقة والتعبئة الأصلية.
              </li>
              <li>
                • يجب إعادة الأحذية والإكسسوارات مع صناديق العلامات التجارية
                الأصلية وأكياس الغبار الأصلية، إذا توفرت، ووضعها داخل عبوة واقية
                عند الإرجاع.
              </li>
              <li>
                • عند تجربة الأحذية، يرجى عدم تلطيخ النعل أو تلف صندوق الحذاء.
              </li>
              <li>
                • إذا كانت العنصر مرفقًا بوسم أمان THE FIRST BRAND أو وسم
                العلامة التجارية، يجب إعادته بالوسم في مكانه الأصلي.
              </li>
              <li>
                • يجب إعادة منتجات الجمال ومستحضرات التجميل غير المفتوحة وغير
                المستخدمة، مع الأختام على أي عبوة مازالت مستوفية.
              </li>
              <li>
                • الجوارب وملابس اللانجري وملابس السباحة يجب أن تُعيد بالأختام
                الصحية المرفقة وفي عبوات غير مفتوحة وغير تالفة، إذا كان ذلك
                مناسبًا.
              </li>
              <li>
                • يجب تجربة ملابس اللانجري وملابس السباحة فقط فوق ملابس اللانجري
                الخاصة بك. لن نقبل أي إرجاعات تكون قد تم ارتداؤها أو تم تلطيخها.
              </li>
              <li>
                • نظرًا لطبيعة أقنعة الوجه، لن نكون قادرين على قبول الإرجاعات ما
                لم يكن العنصر تالفًا أو خاطئًا عند تسليمه لك.
              </li>
              <li>
                • يجب إعادة المجوهرات في نفس الحالة التي وصلت بها، بما في ذلك
                جميع التعبئة والوثائق المميزة معها.
              </li>
              <li>• لا يمكن إعادة العناصر المصنوعة حسب</li>
            </ul>
            <b>
              الطلب لأنه تم إنشاؤها وفقًا لمواصفاتك، ما لم يكن العنصر تالفًا أو
              خاطئًا عند تسليمه لك.
            </b>
            <p>
              يرجى توخي الحذر عند تجربة مشترياتك وإعادتها بنفس الحالة التي
              استلمتها بها. لن يتم قبول أي إرجاع لا يتوافق مع سياسة الإرجاع
              لدينا.
            </p>
            <p>
              من أجل توفير تجربة تسوق أفضل لعملائنا، نقدم سياسة إرجاع مرنة. نحن
              نراقب عدد عمليات الإرجاع ونحتفظ بحق إغلاق حساب THE FIRST BRAND
              الخاص بك أو تقييد الطلبات المستقبلية إذا كان سلوك الإرجاع الخاص بك
              ينتهك سياسة الإرجاع لدينا. اقرأ شروطنا وأحكامنا هنا.
            </p>
            <b>إلغاء الطلب بموجب لائحة عقود المستهلك</b>
            <p>
              حسب المكان الذي تعيش فيه، يمكنك أيضًا اختيار إلغاء طلبك بموجب
              لائحة عقود المستهلك (المعلومات والإلغاء والرسوم الإضافية) لعام
              2013 (CCRs). إذا كنت ترغب في إلغاء طلبك، يجب عليك إعلامنا برغبتك
              في الإلغاء في غضون 14 يومًا من تاريخ وصول طلبك باستخدام أحد
              الأساليب المذكورة أدناه. بمجرد إخطارنا، ستكون مسؤولًا عن تكلفة
              وترتيب إعادة العناصر إلى العلامة التجارية THE FIRST BRAND أو
              المتجر الشريك الذي طلبت منه. لمزيد من المعلومات حول إلغاء الطلب
              بموجب لائحة عقود المستهلك (CCRs)، اطلع على شروطنا وأحكامنا.
            </p>
            <b>لإلغاء العقد، يجب أن تبلغنا بذلك، تفضلًا:</b>
            <p>
              • عبر الهاتف على الرقم 8000320327، مقدمًا لنا اسمك وعنوانك ومرجع
              الطلب؛ أو
            </p>
            <p>
              • من خلال استكمال وإرجاع نموذج الإلغاء هذا إلى العنوان المحدد في
              النموذج.
            </p>{" "}
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
            Refunds
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
              Once your return has been received by our brand or partner
              boutique, it can take up to 6 calendar days to process. When your
              return has been accepted, your refund will be processed to your
              original payment method, excluding any delivery costs. Refunds can
              take up to 14 days to show in your account, depending on your
              payment provider.
            </p>
            <p>
              If you're eligible, we may be able to process your refund as THE
              FIRST BRAND credit if you prefer. Once processed, it will show in
              your THE FIRST BRAND account to use the next time you shop with
              us.
            </p>
            <p>
              To track the return of your package, use the Waybill Number from
              the Waybill Doc included in your order. Or check the status of
              your return by going to Orders & Returns in your account. If you
              placed your order as a guest and want to track your return, enter
              your guest order details here.
            </p>
            <b>Refunds in cryptocurrency</b>
            <p>
              If you have used cryptocurrency to pay for your order, once your
              return has been accepted by our brand or partner boutique, your
              refund will be processed by TripleA in the original cryptocurrency
              at the current exchange rate. Our payment provider, TripleA will
              use the email address you provided at checkout and email you as
              soon as your refund has been processed.
            </p>
            <p>
              To claim your refund, you'll need to email TripleA with the
              following information:
            </p>
            <ul className="px-6 list-disc">
              <li>Full Name</li>
              <li>National ID, Passport or Business Registration Number</li>
              <li>Country of Residence</li>
              <li>Crypto Address to receive your refund</li>
            </ul>
            <p>
              Once you've provided the requested information, your refund will
              be processed by Triple A and they will send you a confirmation
              email. You'll need to claim your refund from TripleA within 30
              days of being emailed.
            </p>
            <p>
              When a refund is successfully claimed by you, the crypto should
              return to your wallet within the same business day, depending on
              how congested blockchain is. If you need any help, please contact
              TripleA's Customer Service team on support@triple-a.io
            </p>
            <b>Faulty items</b>
            <p>
              If you receive an item in a flawed or damaged condition, or if it
              doesn’t quite match the description on our website, contact our
              global Customer Service as soon as possible. We'll arrange a
              return and process a full refund for the faulty item.
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
            استرداد الأموال
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
              بمجرد استلام إرجاعك من قبل علامتنا التجارية أو متجر الشريك، يمكن
              أن يستغرق ما يصل إلى 6 أيام تقويمية لمعالجته. عندما يتم قبول
              إرجاعك، سيتم معالجة استرداد الأموال إلى وسيلة الدفع الأصلية،
              باستثناء أي تكاليف توصيل. يمكن أن تستغرق عملية الاسترداد ما يصل
              إلى 14 يومًا لتظهر في حسابك، اعتمادًا على مزود الدفع الخاص بك.
            </p>
            <p>
              إذا كنت مؤهلاً، فقد نكون قادرين على معالجة استرداد الأموال الخاص
              بك على هيئة رصيد THE FIRST BRAND إذا كنت تفضل. بمجرد معالجته،
              سيظهر في حسابك THE FIRST BRAND لاستخدامه في المرة القادمة التي
              تتسوق فيها معنا.
            </p>
            <p>
              لتتبع إرجاع العبوة الخاصة بك، استخدم رقم البوليصة (Waybill Number)
              من مستند البوليصة الوارد في طلبك. أو قم بفحص حالة إرجاعك عن طريق
              الانتقال إلى الطلبات والمرتجعات في حسابك. إذا قمت بطلبك كضيف وترغب
              في تتبع إرجاعك، أدخل تفاصيل طلبك كضيف هنا.
            </p>
            <b>استرداد الأموال بوسائل العملات الرقمية</b>
            <p>
              إذا استخدمت العملات الرقمية لدفع طلبك، بمجرد قبول إرجاعك من قبل
              علامتنا التجارية أو متجر الشريك، سيتم معالجة استرداد الأموال الخاص
              بك بواسطة TripleA بالعملة الرقمية الأصلية بسعر الصرف الحالي.
              ستستخدم مزود الدفع لدينا، TripleA، البريد الإلكتروني الذي قدمته
              عند الخروج وسيتم إرسال بريد إلكتروني إليك بمجرد معالجة استرداد
              الأموال الخاص بك.
            </p>
            <p>
              للمطالبة باسترداد الأموال الخاص بك، ستحتاج إلى إرسال بريدًا
              إلكترونيًا إلى TripleA مع المعلومات التالية:
            </p>
            <ul className="px-6 list-disc">
              <li>الاسم الكامل</li>
              <li>الهوية الوطنية، جواز السفر أو رقم التسجيل التجاري</li>
              <li>بلد الإقامة</li>
              <li>عنوان العملات الرقمية لاستقبال استرداد الأموال الخاص بك</li>
            </ul>
            <p>
              بمجرد تقديم المعلومات المطلوبة، سيتم معالجة استرداد الأموال الخاص
              بك من قبل TripleA وسيتم إرسال بريد إلكتروني تأكيدي لك. ستحتاج إلى
              المطالبة باسترداد الأموال من TripleA في غضون 30 يومًا من تلقي
              البريد الإلكتروني.
            </p>
            <p>
              عندما يتم المطالبة بنجاح بالاسترداد من قبلك، يجب أن تعود العملة
              الرقمية إلى محفظتك في نفس اليوم العمل، اعتمادًا على مدى ازدحام
              سلسلة الكتل. إذا كنت بحاجة إلى مساعدة، يرجى الاتصال بفريق خدمة
              العملاء لدى TripleA على support@triple-a.io.
            </p>
            <b>العناصر التالفة</b>
            <p>
              إذا تلقيت عنصرًا في حالة تالفة أو معي إذا تلقيت عنصرًا في حالة
              تالفة أو معيبة، أو إذا لم يتطابق تمامًا مع الوصف على موقعنا على
              الويب، يرجى الاتصال بخدمة العملاء العالمية لدينا في أقرب وقت ممكن.
              سنقوم بترتيب إرجاعه ومعالجة استرداد كامل للعنصر التالف.
            </p>
          </div>
        </div>
      )}
      {lang === "en" && (
        <div className="border-b border-b-slate-300 ">
          <button
            onClick={() => setOpens((prev) => ({ ...prev, four: !prev.four }))}
            className="flex py-2 text-lg focus:outline-none w-full justify-between items-center uppercase"
          >
            made-to-order and pre-owned items
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
            <b>Made-to-order items</b>
            <p>
              Due to the nature of made-to-order items, and the fact they have
              been specially created for you, we can not accept returns unless
              the items are damaged or faulty when delivered to you.
            </p>
            <b>Pre-owned items</b>
            <p>
              Pre-owned items sold at THE FIRST BRAND are checked prior to sale
              to guarantee their quality and precision. These items should be
              treated with care and returned in the same condition they were
              received. If any of your purchases arrive in a flawed or faulty
              condition, or without THE FIRST BRAND and brand tags attached,
              contact our global Customer Service team.
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
            العناصر المصنوعة حسب الطلب والعناصر مستعملة مسبقًا
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
            <b>العناصر المصنوعة حسب الطلب</b>
            <p>
              نظرًا لطبيعة العناصر المصنوعة حسب الطلب، ولحقيقة أنه تم إنشاؤها
              خصيصًا لك، لا يمكننا قبول الإرجاع ما لم تكن العناصر تالفة أو معيبة
              عند تسليمها لك.
            </p>
            <b>العناصر مستعملة مسبقًا</b>
            <p>
              تُفحص العناصر المستعملة مسبقًا المباعة في THE FIRST BRAND قبل
              البيع لضمان جودتها ودقتها. يجب معاملة هذه العناصر بعناية وإعادتها
              بنفس الحالة التي تم استلامها بها. إذا وصلت أي من مشترياتك في حالة
              تالفة أو معيبة، أو بدون علامات THE FIRST BRAND وعلامات العلامة
              التجارية، يرجى الاتصال بفريق خدمة العملاء العالمي لدينا.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Retrun;
