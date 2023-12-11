import Navbar from "./components/Navbar/Navbar"
import YourSecondBrain,{StyledImageComponent} from "./components/YourSecondBrain"
import SayGoodbye from "./components/SayGoodbye"
import UsersAround from "./components/UsersAround"
import CreateMultipleChatbots from "./components/CreateMultipleChatbots"
import CustomizeYourAssistant from "./components/CustomizeYourAssistant"
import Regardless from "./components/Regardless"
import Footer from "./components/Footer"
import FileWizard from "./components/FileWizard"
import UploadFiles from "./components/UploadFiles"
import UnquestionableAccuracy from "./components/UnquestionableAccuracy"
import SeeWhatOurUsers from "./components/SeeWhatOurUsers"
import MoneyBack from "./components/MoneyBack"
import Saving from "./components/StartSaving"
function App() {
  return (
    <>
     <Navbar />
     <YourSecondBrain />
     <StyledImageComponent />
     <UsersAround />
     <SayGoodbye />
     <CreateMultipleChatbots />
     <CustomizeYourAssistant />
     <Regardless />
     <FileWizard/>
     <UploadFiles />
     <UnquestionableAccuracy />
     <SeeWhatOurUsers />
     <MoneyBack />
     <Saving />
     <Footer />
    </>
      );
}

export default App;
