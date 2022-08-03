const ButtonOutline = ({ name, ...props }) => {
  return (
    <button {...props} className="relative inline-block text-sm font-medium text-primary group focus:outline-none">
      <span className="absolute inset-0 border border-primary border-current"></span>
      <span className="block px-12 py-3 transition-transform bg-transparent border border-current group-hover:-translate-x-1 group-hover:-translate-y-1">{name}</span>
    </button>
  );
};

export default ButtonOutline;
