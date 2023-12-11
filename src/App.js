import Navbar from "./components/Navbar/Navbar"
import YourSecondBrain,{StyledImageComponent} from "./components/YourSecondBrain"
import SayGoodbye from "./components/SayGoodbye"
import UsersAround from "./components/UsersAround"
import CreateMultipleChatbots from "./components/CreateMultipleChatbots"
import CustomizeYourAssistant from "./components/CustomizeYourAssistant"
import Regardless from "./components/Regardless"
import Footer from "./components/Footer"
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
     <Footer />
    </>
      );
}

export default App;
