const Button = ({ name, ...props }) => {
  return (
    <button class="relative inline-block text-sm font-medium text-white group focus:outline-none">
      <span class="absolute inset-0 border border-primary"></span>
      <span class="block px-12 py-3 transition-transform bg-primary border border-primary group-hover:-translate-x-1 group-hover:-translate-y-1">{name}</span>
    </button>
  );
};

export default Button;
