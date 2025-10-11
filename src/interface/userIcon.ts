import { OverlayPanel } from "primereact/overlaypanel";
import { UserData } from "./userData";

export interface UserIconButton {
  styleCode: string;
  ref: React.RefObject<OverlayPanel | null>;
  userData: UserData;
}
