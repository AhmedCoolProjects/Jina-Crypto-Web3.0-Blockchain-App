import FetchHook from "@comp/hooks/FetchHook";
import { Paper, Link } from "@mui/material";

function TransactionCard({ transaction }) {
  const gifUrl = FetchHook({ keyword: transaction.keyword });
  return (
    <Paper
      elevation={3}
      className="flex space-y-3 h-full flex-col p-4 rounded-xl"
    >
      <Link
        href={`https://ropsten.etherscan.io/address/${transaction.addressFrom}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        From: {transaction.addressFrom.slice(0, 5)}...
        {transaction.addressFrom.slice(transaction.addressFrom.length - 4)}
      </Link>
      <Link
        href={`https://ropsten.etherscan.io/address/${transaction.addressTo}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        To: {transaction.addressTo.slice(0, 5)}...
        {transaction.addressTo.slice(transaction.addressTo.length - 4)}
      </Link>
      <h1>Amount: {transaction.amount} ETH</h1>

      {transaction.message && <h1>Message: {transaction.message}</h1>}
      <img
        src={gifUrl || transaction.url}
        className="rounded-xl w-3/4 h-[200px] object-cover self-center"
        alt="gif"
      />
      <Paper
        elevation={5}
        className="p-4 rounded-3xl flex flex-col items-center justify-center"
      >
        <h1>{transaction.timestamp}</h1>
      </Paper>
    </Paper>
  );
}

export default TransactionCard;
