import { Paper, TextField, Button, CircularProgress } from "@mui/material";
import { TransactionContext } from "context/TransactionContext";
import { useContext, useState } from "react";

function FormCard() {
  const { infos, setInfos, sendTransaction } = useContext(TransactionContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    sendTransaction();
  };
  return (
    <Paper
      elevation={3}
      className="p-4 w-full items-center space-y-4 mt-6 flex flex-col"
    >
      <TextField
        autoFocus
        margin="dense"
        id="address-to"
        label="Address to"
        type="text"
        fullWidth
        variant="standard"
        value={infos.adressTo}
        onChange={(e) => setInfos({ ...infos, adressTo: e.target.value })}
      />
      <TextField
        margin="dense"
        id="amount"
        label="Amount"
        type="number"
        inputProps={{
          step: "0.0001",
        }}
        fullWidth
        variant="standard"
        value={infos.amount}
        onChange={(e) => setInfos({ ...infos, amount: e.target.value })}
      />
      <TextField
        margin="dense"
        id="keyword"
        label="Keyword (GIF)"
        type="text"
        fullWidth
        variant="standard"
        value={infos.keywordGif}
        onChange={(e) => setInfos({ ...infos, keywordGif: e.target.value })}
      />
      <TextField
        margin="dense"
        id="message"
        label="Message"
        type="text"
        fullWidth
        variant="standard"
        value={infos.message}
        onChange={(e) => setInfos({ ...infos, message: e.target.value })}
      />
      {false ? (
        <CircularProgress color="primary" size={80} disableShrink />
      ) : (
        <Button
          disabled={
            !infos.adressTo ||
            !infos.amount ||
            !infos.keywordGif ||
            !infos.message
          }
          onClick={handleSubmit}
          fullWidth
        >
          Confirme
        </Button>
      )}
    </Paper>
  );
}

export default FormCard;
