import * as multer from 'multer';
import { BadRequestException } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import * as fs from 'fs/promises';

export async function uploadImage(file: Express.Multer.File, entity: string): Promise<string> {
  if (!file) {
    throw new BadRequestException('File not provided');
  }

  const filename = `${uuidv4()}-${file.originalname}`;
  await fs.writeFile(`./uploads/${entity}/${filename}`, file.buffer);
  return filename;
}

export const multerOptions = {
  storage: multer.memoryStorage(),
  limits: {
    fileSize: 1024 * 1024 * 5 // 5 MB
  },
  fileFilter: (req: any, file: Express.Multer.File, cb: any) => {
    const allowedMimes = ['image/jpeg', 'image/png'];

    if (allowedMimes.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new BadRequestException('Invalid file type'));
    }
  }
};
