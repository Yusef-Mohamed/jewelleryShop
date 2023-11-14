import { useContext, useRef, useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { AppContext } from "../../App";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_lk6xuag",
        "template_gdhs23r",
        form.current,
        "6QBEroEP9ozkiXEI3"
      )
      .then(
        () => {
          toast.success("Your message have been sent");
        },
        () => {
          toast.success("Something went wrong");
        }
      );
  };
  const { lang } = useContext(AppContext);
  const [opens, setOpens] = useState({ one: false, two: true, three: false });
  return (
    <div className="my-12">
      {lang === "en" && (
        <div className="border-b border-b-slate-300 ">
          <button
            onClick={() => setOpens((prev) => ({ ...prev, one: !prev.one }))}
            className="flex py-2 text-lg focus:outline-none w-full justify-between items-center uppercase"
          >
            How to cancel an order of start a return
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
            <b>To cancel your order:</b>
            <ol
              type="1"
              className="flex flex-col gap-2 mt-2 list-[decimal] px-5"
            >
              <li>
                Go to Orders & Returns if you have an account, or if you placed
                an order as a guest, enter your guest order details here –
                you'll need to provide your order number and email address
              </li>
              <li>
                Select the items you want to cancel and your reason for
                cancellation
              </li>
              <li>We'll email you confirmation of your cancelled order</li>
            </ol>
            <p>
              If your order has already been prepared, we can't cancel your
              order — but we do offer a free returns service.
            </p>
            <b>Here’s what you need to do to book your return:</b>
            <ol
              type="1"
              className="flex flex-col gap-2 mt-2 list-[decimal] px-5"
            >
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
            <b>Prepare your return</b>{" "}
            <ol
              type="1"
              className="flex flex-col gap-2 mt-2 list-[decimal] px-5"
            >
              <li>
                Place the item inside the THE FIRST BRAND packaging - don't
                forget any brand boxes, dust bags, or cases
              </li>
              <li>
                Attach your Return Label to the outside of the THE FIRST BRAND
                packaging.
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
            <b>
              When your package is collected or dropped off, make sure you ask
              the courier to scan the label so you can track your return.
            </b>
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
        <div className="border-b border-b-slate-300 ">
          <button
            onClick={() => setOpens((prev) => ({ ...prev, one: !prev.one }))}
            className="flex py-2 text-lg focus:outline-none w-full justify-between items-center uppercase"
          >
            كيفية إلغاء الطلب أو بدء عملية إرجاع
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
            <b>لإلغاء طلبك:</b>
            <ol
              type="1"
              className="flex flex-col gap-2 mt-2 list-[decimal] px-5"
            >
              <li>
                اذهب إلى الطلبات والمرتجعات إذا كان لديك حسابًا، أو إذا قمت
                بالطلب كضيف، قم بإدخال تفاصيل الطلب الخاص بك هنا - ستحتاج إلى
                تقديم رقم الطلب وعنوان البريد الإلكتروني
              </li>
              <li>حدد العناصر التي ترغب في إلغائها وسبب إلغاء الطلب</li>
              <li>سنرسل لك تأكيدًا عبر البريد الإلكتروني بشأن طلبك الملغى</li>
            </ol>
            <p>
              إذا تم تجهيز طلبك بالفعل، فلن نتمكن من إلغاء طلبك - ولكننا نقدم
              خدمة إرجاع مجانية.
            </p>
            <b>إليك ما عليك فعله لحجز إرجاعك:</b>
            <ol
              type="1"
              className="flex flex-col gap-2 mt-2 list-[decimal] px-5"
            >
              <li>
                اذهب إلى الطلبات والمرتجعات إذا كان لديك حسابًا. إذا قمت بطلبك
                كضيف، قم بإدخال تفاصيل الطلب الخاص بك هنا
              </li>
              <li>
                ابحث عن الطلب الذي ترغب في إرجاعه وانقر على "إرجاع العناصر"
              </li>
              <li>حدد كل عنصر وسبب إرجاعه</li>
            </ol>
            <b>
              هناك طريقتان لإرجاع عناصرك. اعتمادًا على موقعك، ستكون إحداهما
              دائمًا متاحة.
            </b>
            <b>1. حجز جمع الإرجاع مجانًا</b>
            <p>
              حدد عنوان الجمع وعدد الطرود، قم بجدولة تاريخ الجمع والوقت المناسب
              وانقر فوق "حجز الجمع"
            </p>
            <b>2. إرجاع المنتج مجانًا في نقطة إسقاط قريبة منك</b>
            <p>
              حدد الخيار في المتجر أو الإسقاط في حسابك وقم بنقل الإرجاع إلى أقرب
              متجر شريك لدينا أو نقطة إسقاط لشركة الشحن الخاصة بك
            </p>
            <b>قم بتجهيز إرجاعك</b>{" "}
            <ol
              type="1"
              className="flex flex-col gap-2 mt-2 list-[decimal] px-5"
            >
              <li>
                ضع العنصر داخل عبوة THE FIRST BRAND - لا تنسى صناديق العلامات
                التجارية أو أكياس الغبار أو الحافظات
              </li>
              <li>
                قم بتثبيت ملصق الإرجاع على الخارج من عبوة THE FIRST BRAND.
              </li>
              <li>
                إذا تلقيت ملاحظة إرجاع مع طلبك، قم بتثبيتها على الخارج من عبوتك
              </li>
              <li>
                قم بتسليم مستند الشحن إلى سائق الشحن. احتفظ برقم الشحن لتتبع
                إرجاعك
              </li>
            </ol>
            <b>
              عند جمع حزمتك أو إسقاطها، تأكد من طلب من سائق الشحن مسح الملصق حتى
              تتمكن من تتبع إرجاعك.
            </b>
            <p>
              يجب أن تتضمن جميع الوثائق التي تحتاجها لإرجاع عنصرك في عبوة THE
              FIRST BRAND. إذا كنت بحاجة إلى إعادة طباعتها، انتقل إلى الطلبات
              والمرتجعات في حسابك، أو إذا قمت بالطلب كضيف، قم بإدخال تفاصيل
              الطلب الخاص بك هنا.
            </p>
          </div>
        </div>
      )}
      <div className="border-b border-b-slate-300 ">
        <button
          onClick={() => setOpens((prev) => ({ ...prev, two: !prev.two }))}
          className="flex py-2 text-lg focus:outline-none w-full justify-between items-center uppercase"
        >
          {lang === "en" ? "Contact us form" : "تواصل معنا"}
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
          <form ref={form} onSubmit={sendEmail}>
            <div className="flex gap-4">
              <div className="w-full">
                <label className="text-lg block my-3 font-semibold">
                  {lang === "en" ? "Name" : "الاسم"}:
                </label>
                <input
                  type="text"
                  className="border border-slate-300 rounded-lg px-4 py-1 w-full"
                  name="from_name"
                />
              </div>
              <div className="w-full">
                <label className="text-lg block my-3 font-semibold">
                  {lang === "en" ? "Email" : "البريد الالكتروني"}:
                </label>
                <input
                  type="email"
                  className="border border-slate-300 rounded-lg px-4 py-1 w-full"
                  name="from_email"
                />
              </div>
            </div>
            <div>
              <label className="text-lg block my-3 font-semibold">
                {lang === "en" ? "Message" : "الرسالة"}:
              </label>
              <textarea
                className="border border-slate-300 rounded-lg px-4 py-1 w-full"
                name="message"
              />
            </div>
            <input
              className="px-10 py-2 mx-auto bg-[#e1e1e1] rounded-full text-lg text-gray  font-semibold  block"
              type="submit"
              value={lang === "en" ? "Send" : "ارسل"}
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
