import { ArrowRight, ArrowDown } from "lucide-react";

export function Connector({direction="horizontal"}) {
  return (
    <div aria-hidden="true">
      {direction === "vertical" ? (
        <ArrowDown className="text-gray-600" />
      ) : (
        <ArrowRight className="text-gray-600" />
      )}
    </div>
  );
}