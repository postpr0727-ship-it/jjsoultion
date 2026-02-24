import { SERVICES } from "@/constants/services";
import ServiceCard from "./ServiceCard";

export default function ServiceList() {
  return (
    <section className="section-padding bg-navy-950">
      <div className="max-w-6xl mx-auto">
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
