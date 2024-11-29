const headerList = [
  {
    label: "Home",
    href: "#",
  },
  {
    label: "About Us",
    href: "#",
  },
  {
    label: "Projects",
    href: "#",
  },
  {
    label: "Services",
    href: "#",
  },
  {
    label: "Contact Us",
    href: "#",
  },
];

interface IHeaderItem {
  label: string;
  href: string;
}

const HeaderItem = ({ label, href }: IHeaderItem) => {
  return (
    <li className="header_navbar-item">
      <a href={href}>{label}</a>
    </li>
  );
};
const Header = () => {
  return (
    <div id="header">
      <ul className="header_navbar-list">
        <li className="header_navbar-item">
          <img src="logo.png" alt="logo_theBox" />
        </li>
        <li className="header_navbar-item text-italic text-bold">The</li>
        <div>Box</div>
      </ul>
      <ul className="header_navbar-list">
        {
          headerList.map((item, index) => (
            <HeaderItem key={index} {...item} />
          ))
        }
      </ul>
    </div>
  );
};
export default Header;
