const MemberCard = ({ jobs, name, description, image, imageClass }) => {
  return (
    <div className="relative bg-background group rounded-md overflow-hidden">
      <img className={`absolute inset-0 object-cover w-full h-full transition-opacity opacity-75  group-hover:opacity-50 ${imageClass}`} src={image} alt />
      <div className="relative p-8">
        <p className="text-sm font-medium tracking-widest text-primary uppercase">{jobs}</p>
        <p className="text-2xl font-bold text-white">{name}</p>
        <div className="mt-64">
          <div className="transition-all transform translate-y-8 opacity-0  group-hover:opacity-100 group-hover:translate-y-0">
            <p className="text-sm text-white">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MemberCard;
