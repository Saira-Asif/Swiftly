import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="relative w-full bg-[#031504] text-white py-4">
      <div className="max-w-7xl mx-auto px-0 sm:px-4 flex flex-col md:flex-row items-center justify-around">
        {/* Left Side: Logo */}
        <div className="mb-4 md:mb-0">
          <Image
            src="/Swiftly_Logo_white.png"
            alt="Logo"
            width={150}
            height={150}
          />
        </div>

        {/* Right Side: Vertical Divs */}
        <div className="flex flex-col md:flex-row gap-x-20 mt-10 mb-6 w-full sm:w-auto">
          {/* First Vertical Div */}
          <div className="pl-4 sm:pl-0">
            <ul>
              <h3 className="text-lg font-semibold mb-6">User Area</h3>
              <li>
                <Link href="../userArea/my-account">
                  <button className="text-sm text-gray-400 hover:text-white mb-4">
                    My Account
                  </button>
                </Link>
              </li>
              <li>
                <Link href="../userArea/cart">
                  <button className="text-sm text-gray-400 hover:text-white mb-4">
                    My Cart
                  </button>
                </Link>
              </li>
              <li>
                <Link href="../userArea/login">
                  <button className="text-sm text-gray-400 hover:text-white mb-4">
                    Login
                  </button>
                </Link>
              </li>
              <li>
                <Link href="../userArea/checkout">
                  <button className="text-sm text-gray-400 hover:text-white mb-4">
                    Checkout
                  </button>
                </Link>
              </li>
            </ul>
          </div>

          {/* Second Vertical Div */}
          <div className="pl-4 sm:pl-0">
            <ul>
              <h3 className="text-lg font-semibold mb-6">Shopping Guide</h3>
              <li>
                <Link href="../shoppingGuide/payment">
                  <button className="text-sm text-gray-400 hover:text-white mb-4">
                    Payment
                  </button>
                </Link>
              </li>
              <li>
                <Link href="../shoppingGuide/shipment">
                  <button className="text-sm text-gray-400 hover:text-white mb-4">
                    Shipment
                  </button>
                </Link>
              </li>
              <li>
                <Link href="../shoppingGuide/faq">
                  <button className="text-sm text-gray-400 hover:text-white mb-4">
                    FAQ
                  </button>
                </Link>
              </li>
              <li>
                <Link href="../shoppingGuide/return-policy">
                  <button className="text-sm text-gray-400 hover:text-white mb-4">
                    Return Policy
                  </button>
                </Link>
              </li>
            </ul>
          </div>

          {/* Third Vertical Div */}
          <div className="pl-4 sm:pl-0">
            <ul>
              <h3 className="text-lg font-semibold mb-6">Services</h3>
              <li>
                <Link href="/supportPage">
                  <button className="text-sm text-gray-400 hover:text-white mb-4">
                    Contact Support
                  </button>
                </Link>
              </li>
              <li>
                <Link href="/coming-soon">
                  <button className="text-sm text-gray-400 hover:text-white mb-4">
                    Business Accounts
                  </button>
                </Link>
              </li>
              <li>
                <Link href="/coming-soon">
                  <button className="text-sm text-gray-400 hover:text-white mb-4">
                    Rider Opportunities
                  </button>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
