import { useContext } from "react";
import featuersImage from "../assets/featuers.svg";
import messegeImage from "../assets/messege.svg";
import servesesImage from "../assets/serveses.svg";
import visonImage from "../assets/vison.svg";
import { AppContext } from "../App";
const Aboutus = () => {
  const { lang } = useContext(AppContext);
  return (
    <div>
      <div className="container mx-auto">
        <div className="border border-gray p-4 rounded-xl my-4">
          <h2 className="flex items-center gap-4">
            <img className="h-[40px]" src={visonImage} alt="" />
            <span className="text-xl">
              {lang === "en" ? "Our Vision" : "رؤيتنا"}
            </span>
          </h2>
          <p className="py-4">
            {lang === "en"
              ? "The vision of an online store is of utmost importance for success in the world of e-commerce. It is essential to define the products or services offered and carefully design the brand. Additionally, it is crucial to develop a marketing strategy and direct efforts toward achieving set goals, ultimately guiding success and growth."
              : "رؤية المتجر الإلكتروني ذات أهمية قصوى للنجاح في عالم التجارة الإلكترونية. من الضروري تحديد المنتجات أو الخدمات المُقدَّمة وتصميم العلامة التجارية بعناية. بالإضافة إلى ذلك، من الأهمية بمكان وضع استراتيجية تسويقية وتوجيه الجهود نحو تحقيق الأهداف المحددة، مما يقود في النهاية إلى النجاح والنمو."}
          </p>
        </div>
        <div className="border border-gray p-4 rounded-xl my-4">
          <h2 className="flex items-center gap-4">
            <img className="h-[40px]" src={messegeImage} alt="" />
            <span className="text-xl">
              {lang === "en" ? "Our mission" : "رسالتنا"}
            </span>
          </h2>
          <p className="py-4">
            {lang === "en"
              ? "Our mission as an online store is to provide our customers with an exceptional shopping experience. We aim to offer high-quality products and outstanding customer service. We are dedicated to meeting our customers' needs and providing a convenient solution for their online shopping requirements. Our mission focuses on enhancing customer satisfaction and building strong, long-lasting relationships, making us a trusted destination to fulfill their needs and achieve their vision for online shopping."
              : "رسالتنا كمتجر إلكتروني تتمثل في توفير تجربة تسوق استثنائية لعملائنا. نهدف إلى تقديم منتجات عالية الجودة وخدمة عملاء متميزة. نسعى جاهدين لتلبية احتياجات عملائنا وتوفير حلاً سهلاً ومريحًا لاحتياجاتهم التسويقية عبر الإنترنت. تقوم رسالتنا بتعزيز رضا العملاء وبناء علاقات قوية ودائمة معهم، مما يجعلنا وجهة موثوقة لتلبية احتياجاتهم وتحقيق رؤيتهم للتسوق عبر الإنترنت"}
          </p>
        </div>
        <div className="border border-gray p-4 rounded-xl my-4">
          <h2 className="flex items-center gap-4">
            <img className="h-[40px]" src={servesesImage} alt="" />
            <span className="text-xl">
              {lang === "en" ? "Our Services" : "خدماتنا"}
            </span>
          </h2>
          <p className="py-4">
            {lang === "en"
              ? "Our online store offers a diverse range of high-quality products and outstanding services tailored to meet your needs. We are committed to providing a distinctive shopping experience, featuring a wide selection of items, easy navigation and purchasing, and fast, secure delivery. Whether you're in need of electronics, clothing, home essentials, or specialized services, we're here to fulfill your requirements and ensure your complete satisfaction."
              : "متجرنا الإلكتروني يقدم مجموعة متنوعة من المنتجات عالية الجودة والخدمات المتميزة التي تلبي احتياجاتك. نحن ملتزمون بتقديم تجربة تسوق مميزة تتضمن تشكيلة واسعة من المنتجات، وسهولة التصفح والشراء، وتوصيل سريع وآمن. سواء كنت بحاجة إلى منتجات إلكترونية، ملابس، أدوات منزلية، أو خدمات خاصة، نحن هنا لتلبية احتياجاتك وتحقيق رضاك التام"}
          </p>
        </div>
        <div className="border border-gray p-4 rounded-xl my-4">
          <h2 className="flex items-center gap-4">
            <img className="h-[40px]" src={featuersImage} alt="" />
            <span className="text-xl">
              {lang === "en"
                ? "Our competitive advantages include"
                : "مميزاتنا التنافسية"}
            </span>
          </h2>
          <p className="py-4">
            {lang === "en"
              ? "Our online store stands out with a diverse product range, high-quality items, easy browsing and purchasing, along with fast and secure delivery. We offer special deals, exceptional customer support, a unique shopping experience, and customer satisfaction guarantee, making us a trusted destination for electronics, clothing, and more."
              : "متجرنا الإلكتروني يبرز بتنوع منتجاته، جودتها العالية، وتسهيل عمليات التصفح والشراء، مع توصيل سريع وآمن. نقدم عروضًا خاصة، ودعمًا عملاء استثنائيًا، وتجربة تسوق فريدة، وضمان رضا العميل، مما يجعلنا وجهة موثوقة لمنتجات إلكترونية، ملابس، وأكثر."}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Aboutus;
