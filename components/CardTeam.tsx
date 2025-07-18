import Image from "next/image";

type CardTeamProps = {
  image: string;
  name: string;
  role: string;
};

export default function CardTeam({ image, name, role }: CardTeamProps) {
  return (
    <div className="bg-white shadow-[0_10px_30px_rgba(0,0,0,0.1)] rounded-xl overflow-hidden text-center hover:shadow-[0_12px_36px_rgba(0,0,0,0.15)] transition duration-300">
      <div className="relative w-full h-64">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover w-full h-full"
        />
      </div>
      <div className="p-6 space-y-1">
        <h3 className="text-lg font-semibold text-[#222]">{name}</h3>
        <p className="text-sm text-gray-600">{role}</p>
      </div>
    </div>
  );
}
