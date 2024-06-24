import { Helmet } from "react-helmet";

export const UseHelmet = (title: string) => {
  return (
    <Helmet>
      <meta charSet="utf-8" />
      <title>{title}</title>
      <link rel="canonical" href="http://mysite.com/example" />
    </Helmet>
  );
};
