import Image from "next/image";

interface PersonCardProps {
  name: string;
  role: string; // Character (for cast) OR Job (for crew)
  profilePath: string | null;
}

export default function PersonCard({ name, role, profilePath }: PersonCardProps) {
  return (
    <div className="text-center">
      <Image
        src={
          profilePath
            ? `https://image.tmdb.org/t/p/w200${profilePath}`
            : "/placeholder.jpg"
        }
        alt={name}
        width={150}
        height={200}
        className="rounded-lg object-cover mx-auto"
      />
      <p className="font-semibold mt-2">{name}</p>
      <p className="text-sm text-gray-500">{role}</p>
    </div>
  );
}
