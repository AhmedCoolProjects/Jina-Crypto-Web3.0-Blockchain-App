import Head from "next/head";
import { Grid } from "@mui/material";
import WelcomeCard from "@comp/cards/WelcomeCard";
import WelcomeInfoCard from "@comp/cards/WelcomeInfoCard";
import EthereumCard from "@comp/cards/EthereumCard";
import FormCard from "@comp/cards/FormCard";

export default function Home() {
  return (
    <div>
      <Head>
        <title> Jina Crypto | Web3.0 Blockchain App</title>
      </Head>
      <div className="w-full pt-4">
        <Grid className="sm:p-4" container spacing={6}>
          <Grid item xs={12} sm={12} md={6}>
            <WelcomeCard />
            <WelcomeInfoCard />
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <EthereumCard />
            <FormCard />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
