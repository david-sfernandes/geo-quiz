import { Poppins } from "@next/font/google";
import Head from "next/head";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export default function Layout({ children, showTopImg = true, pageTitle = "Geo Quiz" }: LayoutProps) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <Head>
        <title>{pageTitle}</title>
      </Head>
      <div
        className={`${poppins.className} bg-[url('/assets/background.png')] w-screen 
      h-screen p-2 bg-center bg-cover overflow-auto`}
      >
        <div className="w-full h-full grid grid-rows-[1fr_35px] max-w-md m-auto">
          <main className="h-full flex my-auto">
            <section className="m-auto w-full">
              <div className="flex">
                <h1 className="text-white font-bold text-lg text">
                  COUNTRY QUIZ
                </h1>
                {showTopImg && (
                  <img
                    src="/assets/undraw_adventure_4hum 1.svg"
                    alt="adventure"
                    className="-mb-11"
                  />
                )}
              </div>
              <section className="mainSection ">{children}</section>
            </section>
          </main>

          <footer className="text-white font-thin text-xs text-center mt-2">
            create by{" "}
            <a
              className="underline font-normal"
              href="https://github.com/david-sfernandes"
            >
              David Sousa
            </a>{" "}
            - devChallenges.io
          </footer>
        </div>
      </div>
    </div>
  );
}
