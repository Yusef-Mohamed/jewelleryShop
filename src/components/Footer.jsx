import Logo from "./Logo";

const Footer = () => {
  return (
    <footer className="border-t border-t-slate-200 py-8">
      <div className=" grid grid-cols-2 sm:grid-cols-4 container mx-auto">
        <div className="col-span-2 sm:col-span-1">
          <div className="h-8 mx-auto w-fit">
            <Logo />
          </div>
        </div>
        <div>
          <h6>Support</h6>
          <ul>
            <li className="text-gray/50 ">test</li>
            <li className="text-gray/50 ">test</li>
            <li className="text-gray/50 ">test</li>
            <li className="text-gray/50 ">test</li>
          </ul>
        </div>
        <div>
          <h6>Support</h6>
          <ul>
            <li className="text-gray/50 ">test</li>
            <li className="text-gray/50 ">test</li>
            <li className="text-gray/50 ">test</li>
            <li className="text-gray/50 ">test</li>
          </ul>
        </div>
        <div>
          <h6>Support</h6>
          <ul>
            <li className="text-gray/50 ">test</li>
            <li className="text-gray/50 ">test</li>
            <li className="text-gray/50 ">test</li>
            <li className="text-gray/50 ">test</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
