export default function Footer() {
  return (
    <div className="bg-gray-50 dark:bg-darkPrimary">
      <div className="max-w-screen-lg py-10 px-4 sm:px-6 text-gray-800 dark:text-white sm:flex justify-between mx-auto">
        <div className="p-5 sm:w-2/12 border-r">
          <div className="text-sm uppercase text-primary font-bold">Menu</div>
          <ul className="flex flex-row md:flex-col justify-between">
            <li className="my-2">
              <a className="hover:text-primary" href="#">
                Home
              </a>
            </li>
            <li className="my-2">
              <a className="hover:text-primary" href="#">
                Services
              </a>
            </li>
            <li className="my-2">
              <a className="hover:text-primary" href="#">
                Products
              </a>
            </li>
            <li className="my-2">
              <a className="hover:text-primary" href="#">
                Pricing
              </a>
            </li>
          </ul>
        </div>
        <div className="p-5 sm:w-7/12 border-r text-center">
          <h3 className="font-bold text-xl text-primary mb-4">Componentity</h3>
          <p className="text-gray-500 dark:text-white text-sm mb-10">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industrys standard dummy text
            ever since the 1500s.
          </p>
        </div>
        <div className="p-5 sm:w-3/12">
          <div className="text-sm uppercase text-primary font-bold">
            Contact Us
          </div>
          <ul>
            <li className="my-2">
              <a className="hover:text-primary" href="#">
                XXX XXXX, Floor 4 San Francisco, CA
              </a>
            </li>
            <li className="my-2">
              <a className="hover:text-primary" href="#">
                contact@company.com
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex py-5 m-auto text-gray-800 dark:text-white text-sm flex-col items-center border-t max-w-screen-xl">
        <div className="my-5">© Copyright 2023. All Rights Reserved.</div>
      </div>
    </div>
  );
}
