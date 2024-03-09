import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  try {
    const pic = await uploadPhoto();
    const user = await createUser();

    return Promise.resolve({ pic, user });
  } catch (err) {
    return Promise.resolve({ pic: null, user: null });
  }
}
