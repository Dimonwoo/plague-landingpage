import Head from "next/head";
import { FC } from "react";

type IMetaProps = {
  title: string;
  description: string;
  canonical?: string;
};

const Meta: FC<IMetaProps> = ({ title, description }) => {
  return (
    <>
      <Head>
        <title>{`Plague`}</title>
        <meta name="description" content={`description`}></meta>
        <meta charSet="UTF-8" key="charset" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1"
          key="viewport"
        />
        <link rel="apple-touch-icon" href={`/images/logo.png`} key="apple" />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href={`/images/logo.png`}
          key="icon32"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href={`/images/logo.png`}
          key="icon16"
        />
        <link rel="icon" href={`/images/logo.png`} key="favicon" />
      </Head>
    </>
  );
};

export { Meta };
