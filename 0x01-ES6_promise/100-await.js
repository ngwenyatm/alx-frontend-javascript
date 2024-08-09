import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
    let uploadedImage;
    let createdUser;
  try {
    uploadedImage = await uploadPhoto();
    createdUser = await createUser();
  } catch (errorMessage) {
    uploadedImage = null;
    createdUser = null;
  }
  return { uploadedImage, createdUser };
}