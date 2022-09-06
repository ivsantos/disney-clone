import NextAuth from 'next-auth';
import CognitoProvider from 'next-auth/providers/cognito';
import GithubProvider from 'next-auth/providers/github';

export const authOptions = {
  theme: {
    colorScheme: 'dark',
  },
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    }),
    CognitoProvider({
      clientId: process.env.COGNITO_CLIENT_ID,
      clientSecret: process.env.COGNITO_CLIENT_SECRET,
      issuer: process.env.COGNITO_ISSUER,
    }),
  ],
};

export default NextAuth(authOptions);
