import Head from "next/head";
import { Home } from "@/components/home/Home";

export default function home() {
  return (
    <>
      <Head>
        <title>Rayhan Kobir | Software Developer</title>
        <link rel="shortcut icon" href="/favicon.png" />
        <meta name="description" content="Rayhan Kobir | Software Developer" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Rayhan Kobir | Frontend Developer" />
        <meta
          name="description"
          content="Hey! I'm Rayhan Kobir, and I'm a Bachelor of Science in Computer Science graduate."
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
