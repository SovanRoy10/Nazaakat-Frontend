import { useSession, signIn } from "next-auth/react";

export default function LayoutPage({ children }) {
  const { data: session } = useSession();

  if (session) {
    return <>{children}</>;
  } else {
    return (
      <main
        className={`flex min-h-screen flex-col items-center justify-center p-5 text-center `}
      >
        <div className="max-w-xl lg:max-w-3xl">
          <h1 className="mt-6 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
            Welcome to Nazaakat Store
          </h1>

          <p className="mt-4 leading-relaxed text-gray-500 max-w-sm">
            You have to login or sign up first for checking out
          </p>
          <div className="col-span-6 sm:flex sm:items-center sm:gap-4 my-4 flex items-center justify-center">
            <button
              className="inline-block shrink-0 rounded-md border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500"
              onClick={() => signIn("google")}
            >
              Sign In with Google
            </button>
          </div>
        </div>
      </main>
    );
  }
}
