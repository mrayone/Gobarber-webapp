import React, { useCallback, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { FiLogIn, FiMail } from 'react-icons/fi';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';
import { useToast } from '../../hooks/toast';
import getValidationErrors from '../../utils/getValidationErrors';

import logoImg from '../../assets/logo.svg';
import { Container, Content, Background, AnimationContainer } from './styles';
import Input from '../../components/Input';
import Button from '../../components/Button';
import api from '../../services/apiClient';

interface Request {
  email: string;
}

const ForgotPassword: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { addToast } = useToast();

  const handleSubmit = useCallback(
    async (data: Request): Promise<void> => {
      setIsLoading(true);
      formRef.current?.setErrors({});
      try {
        const schema = Yup.object().shape({
          email: Yup.string()
            .required('E-mail obrigatório')
            .email('Digite um e-mail válido'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        await api.post('/password/forgot', {
          email: data.email,
        });

        addToast({
          type: 'success',
          title: 'Recuperação de senha',
          description:
            'Enviamos um e-mail para recuperação de senha, chegue sua caixa de entrada para recuparar!',
        });
      } catch (error) {
        if (error instanceof Yup.ValidationError) {
          formRef.current?.setErrors(getValidationErrors(error));
          return;
        }

        addToast({
          type: 'error',
          title: 'Erro na recuperação',
          description: 'Ocorreu um erro ao solicitar a recuperação de senha.',
        });
      } finally {
        setIsLoading(false);
      }
    },
    [addToast, setIsLoading],
  );

  return (
    <Container>
      <Content>
        <AnimationContainer>
          <img src={logoImg} alt="GoBarber" />
          <Form ref={formRef} onSubmit={handleSubmit}>
            <h1>Esqueci minha senha</h1>
            <Input name="email" icon={FiMail} placeholder="E-mail" />

            <Button type="submit" loading={isLoading}>
              Recuperar
            </Button>
          </Form>

          <Link to="/">
            <FiLogIn /> Voltar para o login
          </Link>
        </AnimationContainer>
      </Content>

      <Background />
    </Container>
  );
};

export default ForgotPassword;
