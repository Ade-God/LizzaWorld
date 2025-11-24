import Image from "next/image";

interface GalleryProps {
  images?: string[];
}

export function Gallery({ images }: GalleryProps) {
  const fallbackImages = [
    "/images/lizzaa/img-4.jpg",
    "/images/lizzaa/img-5.jpg",
    "/images/lizzaa/img-6.jpg",
    "/images/lizzaa/img-7.jpg",
    "/images/lizzaa/img-8.jpg",
    "/images/lizzaa/img-9.jpg",
    "/images/lizzaa/img-10.jpg",
    "/images/lizzaa/img-11.jpg",
    "/images/lizzaa/img-12.jpg",
    "/images/lizzaa/img-13.jpg"
  ];

  const galleryImages = images?.length ? images : fallbackImages;

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {galleryImages.map((image, index) => (
        <div key={image} className="relative h-[320px] overflow-hidden rounded-2xl">
          <Image
            src={image}
            alt={`Lizza Atelier creation ${index + 1}`}
            fill
            sizes="(min-width: 1024px) 30vw, (min-width: 768px) 45vw, 100vw"
            unoptimized
            className="h-full w-full object-cover transition duration-700 hover:scale-105"
          />
        </div>
      ))}
    </div>
  );
}
