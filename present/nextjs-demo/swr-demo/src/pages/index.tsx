import ComponentA from "@/components/ComponentA";
import ComponentB from "@/components/ComponentB";

export default function Home() {
  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <ComponentA></ComponentA>
      <ComponentB></ComponentB>
    </div>
  );
}
