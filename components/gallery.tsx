import Image from "next/image";

interface GalleryProps {
  images?: string[];
}

export function Gallery({ images }: GalleryProps) {
  const fallbackImages = [
    "/images/lizzaa/img-4.png",
    "/images/lizzaa/img-5.png",
    "/images/lizzaa/img-6.png",
    "/images/lizzaa/img-7.png",
    "/images/lizzaa/img-8.png",
    "/images/lizzaa/img-9.png",
    "/images/lizzaa/img-10.png",
    "/images/lizzaa/img-11.png",
    "/images/lizzaa/img-12.png",
    "/images/lizzaa/img-13.png"
  ];

  const galleryImages = images?.length ? images : fallbackImages;

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {galleryImages.map((image, index) => (
        <div key={image} className="relative h-[320px] overflow-hidden rounded-2xl bg-gray-100">
          <Image
            src={image}
            alt={`Lizza Atelier creation ${index + 1}`}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            quality={100}
            priority={index < 6}
            unoptimized
            className="h-full w-full object-cover transition duration-700 hover:scale-105"
            style={{ imageRendering: 'crisp-edges' }}
          />
        </div>
      ))}
    </div>
  );
}