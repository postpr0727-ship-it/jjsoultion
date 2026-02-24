import { SERVICES } from "@/constants/services";
import ServiceCard from "./ServiceCard";

export default function ServiceList() {
  return (
    <section className="pb-32 bg-[#0a192f]">
      <div className="max-w-7xl mx-auto px-6">
        {SERVICES.map((service, index) => (
          <ServiceCard
            key={service.id}
            service={service}
            reversed={index % 2 !== 0}
          />
        ))}
      </div>
    </section>
  );
}
