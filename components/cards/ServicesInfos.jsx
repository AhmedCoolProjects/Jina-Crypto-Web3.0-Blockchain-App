import { SERVICES_INFOS } from "@as/data/constants";
import ServiceCard from "./ServiceCard";

function ServicesInfos() {
  return (
    <div className="flex flex-col w-full space-y-5">
      {SERVICES_INFOS.map((service) => (
        <ServiceCard key={service.id} cardData={service} />
      ))}
    </div>
  );
}

export default ServicesInfos;
