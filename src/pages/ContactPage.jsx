import styled from 'styled-components';
import Button from '../components/Button';
import PageTitle from '../layout/PageTitle';
import Layout from '../layout/Layout';
const ContactPageContainer = styled.div``;

const Form = styled.form``;

const Label = styled.label``;

const Input = styled.input``;

const TextArea = styled.textarea``;

const FormGroup = styled.div``;

const BtnGroup = styled.div``;

const ContactPage = () => {
  return (
    <Layout>
      <ContactPageContainer>
        <PageTitle>I Would Love to Hear From You</PageTitle>
        <Form>
          <FormGroup>
            <Label></Label>
            <Input />
            <Label></Label>
            <Input />
          </FormGroup>
          <FormGroup>
            <Label></Label>
            <TextArea />
          </FormGroup>
          <BtnGroup>
            <Button />
            <Button />
          </BtnGroup>
        </Form>
      </ContactPageContainer>
    </Layout>
  );
};

export default ContactPage;
