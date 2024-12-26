import Head from "next/head";
import { Home } from "@/components/home/Home";

export default function home() {
  return (
    <>
      <Head>
        <meta
          name="google-site-verification"
          content="dUhhMsldCKanNfyDZfBnXgzzyza7cR7vAcofz_K7k94"
        />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/favicon.ico" />
        <link rel="cononical" href="https://rayhankobir.vercel.app" />

        <title>Rayhan Kobir | Software Developer</title>
        <link rel="shortcut icon" href="/favicon.png" />
        <meta name="description" content="Rayhan Kobir | Software Developer" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Rayhan Kobir | Software Developer" />
        <meta
          name="description"
          content="Hey! I'm Rayhan Kobir, and I'm a Bachelor of Science in Computer Science graduate."
        />
        <meta property="og:site_name" content="Rayhan Kobir" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta
          property="keywords"
          content="Rayhan Kobir, Software Developer, Frontend Developer, Backend Developer, Nodejs deverloper, Nestjs developer, Reactjs developer, Nextjs developer"
        />

        <meta property="og:title" content="Rayhan Kobir | Frontend Developer" />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://rayhankobir.vercel.app" />
        <meta
          property="og:image"
          content="https://rayhankobir.vercel.app/screenshot.png"
        />
        <meta
          property="og:description"
          content="Hey! I'm Rayhan Kobir, and I'm a Bachelor of Science in Computer Science graduate."
        />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@rayhankobir" />
        <meta name="twitter:title" content="Rayhan Kobir | Sotware Developer" />
        <meta
          name="twitter:description"
          content="Hey! I'm Rayhan Kobir, and I'm a Bachelor of Science in Computer Science graduate."
        />
        <meta name="twitter:creator" content="@rayhankobir793" />
        <meta
          name="twitter:image"
          content="https://rayhankobir.vercel.app/screenshot.png"
        />

        <meta
          itemProp="name"
          content="Rayhan Kobir | Frontend Developer | Backend Developer"
        />
        <meta
          itemProp="description"
          content="Hey! I'm Rayhan Kobir, and I'm a Bachelor of Science in Computer Science graduate."
        />
        <meta
          itemProp="image"
          content="https://rayhankobir.vercel.app/screenshot.png"
        />
      </Head>
      <Home />
    </>
  );
}
