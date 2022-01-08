import { Paper } from "@mui/material";

function ServiceCard({ cardData }) {
  return (
    <Paper
      elevation={3}
      className="
  flex flex-row space-x-5 items-center p-6 rounded-xl"
    >
      {cardData.icon}
      <div className="flex flex-col">
        <h1 className="text-xl mb-2">{cardData.title}</h1>
        <h1 className="opacity-80 text-base">{cardData.description}</h1>
      </div>
    </Paper>
  );
}

export default ServiceCard;
