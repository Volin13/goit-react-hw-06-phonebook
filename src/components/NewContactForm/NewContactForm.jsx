import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../redux/contactsSlice';
import { Field, Form, Formik } from 'formik';
import * as yup from 'yup';
import ErrorMsg from '../NewContactForm/NewContactForm.styled';
import Wrapper from '../Wrapper/Wrapper.styled';
const getContacts = state => state.contacts;
const schema = yup.object().shape({
  name: yup.string().min(3, 'Its too short.').required('Type your name please'),
  number: yup
    .string()
    .matches(
      /[0-9]{3}[ .-][0-9]{2}[ .-][0-9]{2}/,
      'Invalid format. It should be 999-99-99'
    )
    .max(9, 'Invalid format. It should be 999-99-99')
    .required('Please add a phone number'),
});

const INITIAL_FORM_VALUES = { name: '', number: '' };
function AddContactForm() {
  const { items } = useSelector(getContacts);
  const dispatch = useDispatch();

  const handleSubmit = ({ name, number }, { setSubmitting, resetForm }) => {
    if (
      items.some(contact => contact.name.toLowerCase() === name.toLowerCase())
    ) {
      alert('This contact already exists');
      setSubmitting(false);
      return;
    }
    resetForm();
    dispatch(addContact(name, number));
    setSubmitting(false);
  };
  return (
    <div>
      <Formik
        initialValues={INITIAL_FORM_VALUES}
        validationSchema={schema}
        onSubmit={handleSubmit}
      >
        <Form autoComplete="off">
          <Wrapper>
            <Field
              placeholder="Name"
              className="inputStyled"
              type="text"
              name="name"
            />
            <ErrorMsg name="name" component="div" />
          </Wrapper>
          <Wrapper>
            <Field
              placeholder="Phone number"
              className="inputStyled"
              type="text"
              name="number"
            />
            <ErrorMsg name="number" />
          </Wrapper>
          <Wrapper>
            <button className="styledBtn" type="submit">
              Add to phone book
            </button>
          </Wrapper>
        </Form>
      </Formik>
    </div>
  );
}

export default AddContactForm;
