import { Grid, Paper } from "@mui/material";

const DATA = [
  {
    id: 1,
    title: "Blockchain",
  },
  {
    id: 2,
    title: "Cryptocurrency",
  },
  {
    id: 3,
    title: "Security",
  },
  {
    id: 4,
    title: "Finality",
  },
  {
    id: 5,
    title: "Ethereum",
  },
  {
    id: 6,
    title: "Web 3.0",
  },
];

function WelcomeInfoCard() {
  return (
    <Grid className="p-6 mt-4" container spacing={4}>
      {DATA.map((itemText) => (
        <Grid key={itemText.id} item xs={6} sm={6} md={4}>
          <Paper
            elevation={3}
            className="p-5 flex flex-col items-center justify-center"
          >
            <h1 className="text-center text-base font-semibold">
              {itemText.title}
            </h1>
          </Paper>
        </Grid>
      ))}
    </Grid>
  );
}

export default WelcomeInfoCard;
