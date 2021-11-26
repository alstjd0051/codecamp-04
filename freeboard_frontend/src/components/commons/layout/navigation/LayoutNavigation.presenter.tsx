import { MenuItem, Wrapper } from "./LayoutNavigation.styles";
import { ILayoutNavigationUIProps } from "./LayoutNavigation.types";

export default function LayoutNavigationUI(props: ILayoutNavigationUIProps) {
  return (
    <Wrapper>
      <MenuItem id="/covid" onClick={props.onClickMenu}>
        Now in Covid -19
      </MenuItem>
      <>|</>
      <MenuItem id="/boards" onClick={props.onClickMenu}>
        Bulletin Board
      </MenuItem>
      <>|</>
      <MenuItem id="/product" onClick={props.onClickMenu}>
        Miiin_sseong Product
      </MenuItem>
      <>|</>
      <MenuItem id="/myPage" onClick={props.onClickMenu}>
        PortFolio Page
      </MenuItem>
      <>|</>
      <MenuItem id="/kakaoMap" onClick={props.onClickMenu}>
        I'm In Here
      </MenuItem>
    </Wrapper>
  );
}
