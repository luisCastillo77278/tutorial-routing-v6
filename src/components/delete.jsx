import { redirect } from 'react-router-dom';
import { deleteContact } from '../contact';

export const action = async ({ params }) => {
  throw new Error('oh dang!!!');
  await deleteContact(params.contactId);
  return redirect('/');
};
