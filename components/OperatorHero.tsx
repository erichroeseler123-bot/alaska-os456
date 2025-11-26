// components/OperatorHero.tsx

import Link from "next/link";
import { Operator } from "../lib/types";

interface Props {
  operator: Operator;
}

export default function OperatorHero({ operator }: Props) {
  return (
    <div style={{ padding: "20px", background: "#002332", borderRadius: "10px" }}>
      <h2 style={{ color: "#fff", marginBottom: "10px" }}>{operator.name}</h2>
      {operator.description && (
        <p style={{ color: "white", opacity: 0.8 }}>{operator.description}</p>
      )}

      {operator.website && (
        <a
          href={operator.website}
          style={{
            display: "inline-block",
            marginTop: "15px",
            padding: "10px 15px",
            background: "#0aa",
            color: "white",
            borderRadius: "6px",
          }}
        >
          Visit Website
        </a>
      )}
    </div>
  );
}
