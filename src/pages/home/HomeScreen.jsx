import { SideBard } from "../../layout/LeftSideBar/SideBard";
import { NoteScreen } from "../../layout/NoteContain/NoteScreen";
import { NothingSelected } from "../../layout/NoteContain/NothingSelected";
import { HomeContainer } from "./HomeStyles";

export const HomeScreen = () => {
  return (
    <HomeContainer className="animate__animated animate__fadeIn">
      <SideBard />
      <NoteScreen />
      {/*   <NothingSelected /> */}

    </HomeContainer>
  );
};
