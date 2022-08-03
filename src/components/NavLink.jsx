const NavLink = ({ name, href = '#', ...props }) => {
  return (
    <li>
      <a {...props} className="text-white transition hover:text-primary" href={href}>
        {name}
      </a>
    </li>
  );
};

export default NavLink;
