import { HomeBanner, ItemsSection } from "@/shared/components";
import { houseSection, menSection, womenSection } from "@/shared/utils";

export default function Home() {
  return (
    <div>
      <HomeBanner />
      <ItemsSection section={womenSection} />
      <ItemsSection section={menSection} />
      <ItemsSection section={houseSection} />
    </div>
  );
}
