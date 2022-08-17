import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Header, Footer } from "../components";
import { ThemeProvider } from "next-themes";
import Sidebar from "../components/Sidebar";
import { AppProvider } from "../context/AppContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AppProvider>
      <ThemeProvider enableSystem={true} attribute="class">
        <Sidebar />
        <Header />
        <Component {...pageProps} />
        <Footer />
      </ThemeProvider>
    </AppProvider>
  );
}

export default MyApp;
