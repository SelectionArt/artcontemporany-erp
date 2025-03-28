"use client";
// Vendors
import JSZip from "jszip";
import { saveAs } from "file-saver";
import { useState } from "react";
import Image from "next/image";
import { format } from "date-fns";
import { es } from "date-fns/locale/es";
// Components
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";
// Icons
import {
  X,
  Download,
  PaintbrushIcon as PaintBrush,
  Square,
  SquareStack,
  Type,
} from "lucide-react";
// Types
import type { ArtworkProps } from "./types/artwork.container.types";

const ArtworkContainer = ({ artwork }: ArtworkProps) => {
  const [selectedImage, setSelectedImage] = useState(
    artwork.images[0]?.url || "",
  );

  const handleDownload = async (): Promise<void> => {
    const zip = new JSZip();

    const totalImages = artwork.images.length;

    const downloadPromises = artwork.images.map(async (image, index) => {
      try {
        const response = await fetch(image.url);
        const blob = await response.blob();
        const fileExtension = image.url.split(".").pop();

        const baseFilename = `${artwork.referenceNumber}-${artwork.referenceCode}_${artwork.width}x${artwork.height}_${artwork.artist.name}`;
        const filename =
          totalImages > 1
            ? `${baseFilename}_${index + 1}.${fileExtension}`
            : `${baseFilename}.${fileExtension}`;

        zip.file(filename, blob);
      } catch (error) {
        console.error(`Error descargando la imagen ${image.url}:`, error);
      }
    });

    await Promise.all(downloadPromises);

    const zipBlob = await zip.generateAsync({ type: "blob" });
    saveAs(zipBlob, `${artwork.referenceNumber}.zip`);
  };

  return (
    <div className="grid w-full max-w-6xl grid-cols-1 gap-6 overflow-y-auto p-4 lg:grid-cols-2">
      <div className="flex flex-col gap-4">
        {selectedImage && (
          <Dialog>
            <DialogTrigger>
              <div className="relative h-60 sm:h-72 md:h-80 lg:h-96">
                <Image
                  alt={artwork.title}
                  className="rounded-lg object-contain"
                  fill={true}
                  priority={true}
                  sizes="500px"
                  src={selectedImage}
                />
              </div>
            </DialogTrigger>
            <DialogContent
              className="flex max-w-full items-center justify-center gap-0 overflow-auto border-none bg-black p-0 py-0 sm:h-dvh sm:rounded-none sm:py-0"
              hideCloseButton
            >
              <DialogClose asChild>
                <Button
                  size="icon"
                  className="absolute top-4 right-4 z-10 cursor-pointer"
                  variant={"outline"}
                >
                  <X className="h-6 w-6" />
                </Button>
              </DialogClose>
              <DialogTitle />
              <DialogDescription />
              <div className="relative h-full w-full">
                <Image
                  alt={artwork.title}
                  className="object-contain"
                  fill={true}
                  sizes="100vw"
                  src={selectedImage}
                />
              </div>
            </DialogContent>
          </Dialog>
        )}
        <Carousel className="w-full">
          <CarouselContent className="-ml-4">
            {artwork.images.map((image) => (
              <CarouselItem key={image.id} className="basis-1/4 pl-4">
                <button
                  className="relative h-32 w-full cursor-pointer p-4"
                  onClick={() => setSelectedImage(image.url)}
                >
                  <Image
                    alt="Miniatura"
                    className="rounded-lg object-cover"
                    fill={true}
                    sizes="125px"
                    src={image.url}
                  />
                </button>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>

      <Card className="max-w-auto p-0">
        <CardContent>
          <div className="flex justify-between">
            <div className="flex flex-col gap-1">
              <h1 className="text-2xl font-semibold">
                {artwork.title || "Untitled"}
              </h1>
              <p className="text-muted-foreground text-lg">
                by {artwork.artist.name}
              </p>
            </div>
            <Button
              size={"icon"}
              variant={"outline"}
              className="flex items-center gap-2"
              onClick={handleDownload}
            >
              <Download />
            </Button>
          </div>

          <Separator className="my-4" />

          <div className="flex flex-col gap-4">
            <h2 className="text-base font-semibold">Detalles</h2>
            <div className="grid grid-cols-2 gap-2">
              <div>Número de referencia:</div>
              <div>{artwork.referenceNumber}</div>
              {artwork.referenceCode && (
                <>
                  <div>Código de referencia:</div>
                  <div>{artwork.referenceCode}</div>
                </>
              )}
              <div>Dimensiones:</div>
              <div>
                {artwork.width} x {artwork.height} cm
              </div>
            </div>

            <Separator className="my-2" />

            {artwork.colors.length > 0 && (
              <>
                <div className="flex flex-col gap-4">
                  <h2 className="mb-2 text-sm font-semibold">Colores</h2>
                  <div className="flex flex-wrap gap-2">
                    {artwork.colors.map((color) => (
                      <Badge
                        key={color.id}
                        className="flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium"
                        variant="outline"
                      >
                        <div
                          className="h-5 w-5 rounded-full"
                          style={{ backgroundColor: color.hex }}
                        />
                        {color.name}
                      </Badge>
                    ))}
                  </div>
                </div>
                <Separator className="my-2" />
              </>
            )}

            <div className="flex flex-col gap-4">
              <h2 className="text-base font-semibold">Propiedades</h2>

              <div className="flex flex-wrap gap-2">
                {artwork.finish && (
                  <Badge
                    className="flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium"
                    variant="outline"
                  >
                    <PaintBrush className="h-4 w-4" />
                    {artwork.finish.name}
                  </Badge>
                )}
                {artwork.format && (
                  <Badge
                    className="flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium"
                    variant="outline"
                  >
                    <Square className="h-4 w-4" />
                    {artwork.format.name}
                  </Badge>
                )}
                {artwork.style && (
                  <Badge
                    className="flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium"
                    variant="outline"
                  >
                    <Type className="h-4 w-4" />
                    {artwork.style.name}
                  </Badge>
                )}
                {artwork.support && (
                  <Badge
                    className="flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium"
                    variant="outline"
                  >
                    <SquareStack className="h-4 w-4" />
                    {artwork.support.name}
                  </Badge>
                )}
              </div>
            </div>

            <Separator className="my-2" />

            <div>
              <h2 className="mb-2 font-semibold">Fechas</h2>
              <div className="grid grid-cols-2 gap-2">
                <div>Creado el:</div>
                <div>
                  {format(new Date(artwork.createdAt), "PPP", { locale: es })}
                </div>
                <div>Última actualización:</div>
                <div>
                  {format(new Date(artwork.updatedAt), "PPP", { locale: es })}
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export { ArtworkContainer };
