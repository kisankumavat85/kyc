import { useRouter } from "next/router";
import withLayout from "../components/HOC/withLayout";

function Home() {
  return <h1>Home</h1>;
}

export default withLayout(Home);
