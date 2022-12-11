import Link from "next/link";
import React from "react";
import withLayout from "../../components/HOC/withLayout";

const Page404 = () => {
  // eslint-disable-next-line react/no-unescaped-entities
  return <Link href="/aml-screening">Go back to "/aml-screening" page</Link>;
};

export default withLayout(Page404);
