// src/pages/LoginPage/index.tsx
import { Form, message } from "antd";
import {
  LoginWrapper,
  LoginCard,
  LoginRow,
  FormColumn,
  FormContent,
  Logo,
  LoginTitle,
  LoginSubtitle,
  LoginForm,
  ImageColumn,
  ImageWrapper,
  LoginImage,
} from "./styles";
import { Input, PasswordInput } from "../../components/Input";
import { Button } from "../../components/Button";
import { useLoginMutation } from "../../hooks/services/loginService";
import { IoEyeOutline } from "react-icons/io5";
import { GoEyeClosed } from "react-icons/go";
import NAVIGATION_CONSTANTS from "../../constants/navigations";
import { useNavigate } from "react-router-dom";
import ProfileLoginImg from "/src/assets/profile-login.png";

const LoginPage = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const { mutate: submitLogin, isPending } = useLoginMutation();

  const handleLogin = () => {
    form
      .validateFields()
      .then((values: any) => {
        submitLogin(values, {
          onSuccess: (data) => {
            localStorage.setItem("authToken", data.token);

            // Mensagem de sucesso
            message.success("Login realizado com sucesso!");

            setTimeout(() => {
              navigate(NAVIGATION_CONSTANTS.EVENTS);
            }, 3000);
          },
          onError: () => {
            form.setFieldsValue({ password: "" });
          },
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <LoginWrapper>
      <LoginCard>
        <LoginRow>
          <FormColumn xs={12} xl={12}>
            <FormContent>
              <Logo src="/src/assets/logo.png" alt="Logo" />

              <LoginTitle>Bem-vindo de volta</LoginTitle>
              <LoginSubtitle>Entre com sua conta para acessar o painel.</LoginSubtitle>

              <LoginForm>
                <Form
                  form={form}
                  layout="vertical"
                  disabled={isPending} // Desabilita o form durante o loading
                >
                  <Form.Item
                    label="E-mail"
                    name="email"
                    rules={[
                      { required: true, message: "Digite seu e-mail" },
                      { type: "email", message: "E-mail inválido" },
                    ]}
                    required={false}
                  >
                    <Input
                      placeholder="seunome@seuservidor.com"
                      size="large"
                      disabled={isPending}
                    />
                  </Form.Item>

                  <Form.Item
                    label="Senha"
                    name="password"
                    rules={[
                      { required: true, message: "Digite sua senha" },
                      { min: 6, message: "A senha deve ter pelo menos 6 caracteres" },
                    ]}
                    required={false}
                  >
                    <PasswordInput
                      placeholder="Digite aqui"
                      size="large"
                      disabled={isPending}
                      iconRender={(visible) =>
                        !visible ? <IoEyeOutline size={22} /> : <GoEyeClosed size={22} />
                      }
                    />
                  </Form.Item>

                  <Button
                    type="primary"
                    block
                    size="large"
                    loading={isPending}
                    onClick={handleLogin}
                  >
                    {isPending ? "Entrando..." : "Entrar"}
                  </Button>
                </Form>
              </LoginForm>
            </FormContent>
          </FormColumn>

          <ImageColumn xs={12} xl={12}>
            <ImageWrapper>
              <LoginImage src={ProfileLoginImg} alt="Ilustração" />
            </ImageWrapper>
          </ImageColumn>
        </LoginRow>
      </LoginCard>
    </LoginWrapper>
  );
};

export default LoginPage;
