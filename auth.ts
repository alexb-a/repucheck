import NextAuth from "next-auth";
import "next-auth/jwt";
import Cognito from "next-auth/providers/cognito";

export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [Cognito],
  session: { strategy: "jwt" },
  callbacks: {
    authorized({ auth }) {
      return !!auth;
    },
  },
  trustHost: true,
});

declare module "next-auth" {
  interface Session {
    accessToken?: string;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    accessToken?: string;
  }
}
