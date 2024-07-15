import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";

export const Login = () => {
  return (
    <div>
      <h1>Login</h1>
      <GoogleOAuthProvider clientId="192171897729-n43l9s09bgq7gncdmo6lo9blva3jo8fa.apps.googleusercontent.com">
        <GoogleLogin onSuccess={(user) => console.log(user)} />
      </GoogleOAuthProvider>
    </div>
  );
};
