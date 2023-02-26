import { BuiltInProviderType } from "next-auth/providers";
import {
  ClientSafeProvider,
  LiteralUnion,
  getProviders,
  signIn,
} from "next-auth/react";
import Button from "../../components/button";
import Layout from "../../components/layout";

type SignInProps = {
  providers: Record<
    LiteralUnion<BuiltInProviderType, string>,
    ClientSafeProvider
  >;
};

export default function SignIn({ providers }: SignInProps) {
  return (
    <Layout pageTitle="Sign in | Geo Quiz">
      <div className="mt-5">
        <h1 className="font-bold text-md">Sign in to start play!</h1>
        <div className="flex flex-col gap-2 max-w-xs m-auto">
          {Object.values(providers).map((provider) => (
            <button
              key={provider.name}
              className="mt-5 p-3 bg-orange rounded-xl text-white font-medium defaultTrasition hover:brightness-75"
              onClick={() => signIn(provider.id, { callbackUrl: "/" })}
            >
              Sign in with {provider.name}
            </button>
          ))}
          <Button text="Back" href="/" />
        </div>
      </div>
    </Layout>
  );
}

export async function getServerSideProps() {
  const providers = await getProviders();

  return {
    props: {
      providers,
    },
  };
}
