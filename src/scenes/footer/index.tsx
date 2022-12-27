import Logo from "@/assets/Logo.png";

type Props = {};

const Footer = () => {
  return (
    <footer className="bg-primary-100 py-16">
      <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
          <img alt="Logo" src={Logo} />
          <p className="my-5">
            Lorem vitae ut augue auctor faucibus eget eget ut libero. Elementum
            purus et arcu massa dictum condimentum. Augue scelerisque iaculis
            orci ut habitant laoreet. Iaculis tristique.
          </p>
          <p>© GUIGVD All Rights Reserved.</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Links</h4>
          <a href="https://www.instagram.com/guigvd/" target="_blank">
            <p className="my-5 transition duration-500 hover:text-primary-500">
              <i className="fa-brands fa-instagram"></i> guigvd
            </p>
          </a>
          <a href="https://github.com/guigvd" target="_blank">
            <p className="my-5 transition duration-500 hover:text-primary-500">
              <i className="fa-brands fa-github"></i> guigvd
            </p>
          </a>
          <a href="https://www.linkedin.com/in/guigvd/" target="_blank">
            <p className=" transition duration-500 hover:text-primary-500">
              <i className="fa-brands fa-linkedin"></i> guigvd
            </p>
          </a>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Constact Us</h4>
          <p className="my-5">Tempus metus mattins risus volutpat egestas.</p>
          <p>(333) 425-6825</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
