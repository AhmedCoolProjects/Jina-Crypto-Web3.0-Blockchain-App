import Head from "next/head";
import { Grid } from "@mui/material";
import WelcomeCard from "@comp/cards/WelcomeCard";
import WelcomeInfoCard from "@comp/cards/WelcomeInfoCard";
import EthereumCard from "@comp/cards/EthereumCard";
import FormCard from "@comp/cards/FormCard";
import ServicesInfos from "@comp/cards/ServicesInfos";
import TransactionCard from "@comp/cards/TransactionCard";
import { TransactionContext } from "context/TransactionContext";
import { useContext } from "react";

export default function Home() {
  const { currentAccount, transactions } = useContext(TransactionContext);
  return (
    <div>
      <Head>
        <title> Jina Crypto | Web3.0 Blockchain App</title>
      </Head>
      <div className="w-full space-y-6 pt-4">
        <Grid className="sm:p-4" container spacing={6}>
          <Grid item xs={12} sm={12} md={6}>
            <WelcomeCard />
            <WelcomeInfoCard />
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <EthereumCard />
            <FormCard />
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <h1 className="text-3xl w-full mt-8 font-semibold text-left opacity-80">
              Services that are available on Jina Crypto
            </h1>
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <ServicesInfos />
          </Grid>
        </Grid>
        <h1 className="text-2xl font-semibold my-3 text-center">
          Latest Transactions
        </h1>
        <Grid container spacing={3}>
          {currentAccount ? (
            transactions.map((transaction, index) => (
              <Grid item key={index} xs={12} sm={6} md={4}>
                <TransactionCard transaction={transaction} />
              </Grid>
            ))
          ) : (
            <h1>Please connect to see your transactions</h1>
          )}
        </Grid>
      </div>
    </div>
  );
}
