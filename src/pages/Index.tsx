import { Helmet } from "react-helmet";
import { AuthLayout } from "@/components/auth/AuthLayout";
import { LoginForm } from "@/components/auth/LoginForm";

export default function IndexPage() {
  return (
    <>
      <Helmet>
        <title>Login - My Application</title>
        <meta name="description" content="Login to access your account" />
      </Helmet>
      <AuthLayout>
        <LoginForm />
      </AuthLayout>
    </>
  );
}
