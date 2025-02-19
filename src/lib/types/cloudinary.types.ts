type UploadImageToCloudinaryProps = {
  file: File;
  folder: string;
  reference: string;
};

type UploadImageToCloudinaryReturn = {
  url: string;
  publicId: string;
};

export type { UploadImageToCloudinaryProps, UploadImageToCloudinaryReturn };
