import { Keys } from "@/types";

const keys: Keys = {
  mapsApiKey: "AIzaSyD13hs0Sh4DfhLzaUxz8CenAjXone_JZFk",
};

if (Object.values(keys).includes("NULL")) {
  throw new Error("Not env var defined");
}
export default keys;
