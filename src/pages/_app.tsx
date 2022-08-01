import { AnimatePresence } from "framer-motion";
import { DefaultSeo } from "next-seo";
import { AppProps } from "next/app";
import { useRouter } from "next/router";
import NextNProgress from "nextjs-progressbar";
import { ToastContainer, Zoom } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

import { Loading } from "src/components/Loading/Loading";

import SEO from "../../next-seo.config";
import Header from "../components/Header";
import ScrollToTop from "../components/ScrollToTop";
import { AuthProvider } from "../contexts/AuthContext";
import { ThemeContextProvider } from "../contexts/Theme";
import GlobalStyles from "../styles/GlobalStyle";

function MyApp({ Component, pageProps }: AppProps) {
    const [isLoading, setIsLoading] = useState(true);
    const { asPath } = useRouter();

    return (
        <>
            <DefaultSeo {...SEO} />
            <ToastContainer
                position="top-right"
                autoClose={3000}
                newestOnTop
                closeOnClick
                rtl={false}
                draggable={true}
                pauseOnHover
                transition={Zoom}
                theme="light"
            />
            <NextNProgress color="#2F80ED" startPosition={0.5} />
            <ThemeContextProvider>
                <AuthProvider>
                    {isLoading ? <Loading /> : "Not Loading"}
                    {/* {asPath === "/" || asPath === "/signup" ? (
                        <>
                            <AnimatePresence exitBeforeEnter>
                                <Component {...pageProps} key={asPath} />
                            </AnimatePresence>
                            <GlobalStyles />
                        </>
                    ) : (
                        <>
                            <Header />
                            <AnimatePresence exitBeforeEnter>
                                <Component {...pageProps} key={asPath} />
                            </AnimatePresence>
                            <ScrollToTop />
                            <GlobalStyles />
                        </>
                    )} */}
                </AuthProvider>
            </ThemeContextProvider>
        </>
    );
}

export default MyApp;
function useState(arg0: boolean): [any, any] {
    throw new Error("Function not implemented.");
}
