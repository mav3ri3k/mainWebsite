import { type AppProps } from "$fresh/server.ts";
export default function App({ Component }: AppProps) {
  return (
    <html>
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>mainWebsite</title>
        <link rel="stylesheet" href="/styles.css" />
      </head>
      <body>
        <header>
          mav3ri3k
        </header>
        <main>
          <Component />
        </main>
        <footer>
          Apurva Mishra
        </footer>
      </body>
    </html>
  );
}
