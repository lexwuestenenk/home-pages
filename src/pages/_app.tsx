import { motion, AnimatePresence } from "framer-motion";
import type { AppProps } from 'next/app'

import "../styles/globals.css";
import { useRouter } from "next/router";
import { SessionProvider } from "next-auth/react";

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  const router = useRouter();
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={router.route}
        initial="initialState"
        animate="animateState"
        exit="exitState"
        transition={{
          duration: 1,
        }}
        variants={{
          initialState: {
            opacity: 0,
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)"
          },
          animateState: {
            opacity: 1,
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)"
          },
          exitState: {
            opacity: 0,
            clipPath: "polygon(100% 0, 100% 0, 100% 100%, 100% 100%)"
          }
        }}
        className="base-page-size"
      >
        <SessionProvider session={pageProps.session}>
          <Component {...pageProps} />
        </SessionProvider>
      </motion.div>
    </AnimatePresence>
  );
}

export default MyApp;