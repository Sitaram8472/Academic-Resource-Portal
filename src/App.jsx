// Roter
import { Routes, Route } from "react-router-dom";

// import landing page
import Header from "./Components/Header/Header.jsx";
import ChooseYear from "./Components/ChooseYear/ChooseYear.jsx";

// import userprofile
import Myprofile from "./UserProfile/Myprofile.jsx";

// page
import FirstYear from "./Page/year/FirstYear.jsx";
import SecondYear from "./Page/year/SecondYear.jsx";
import ThirdYear from "./Page/year/ThirdYear.jsx";
import FourthYear from "./Page/year/FourthYear.jsx";

// content
import ThirdYearContent from "./Page/ThirdYearContent/ThirdYearContent.jsx";

function App() {
  return (
    <>
      <Header />

      <Routes>
        {/* home section */}
        <Route path="/home" element={<div><ChooseYear/></div>} />
        <Route path="/about" element={<h2>About Page</h2>} />
        <Route path="/contact" element={<h2>Contact Page</h2>} />
        <Route path="/services" element={<h2>Services Page</h2>} />

        {/* login nad signup */}
        <Route path="/login" element={<h2>Login</h2>} />
        <Route path="/signup" element={<h2>signup</h2>} />

        {/* usersection */}
        <Route path="/my-profile" element={<Myprofile />} />
        <Route path="/edit-profile" element={<h2>Edit Profile Page</h2>} />
        <Route path="/explanation" element={<h2>My Explanation Page</h2>} />
        <Route path="/report-bug" element={<h2>Report Bug Page</h2>} />
        <Route path="/certificates" element={<h2>My Certificates Page</h2>} />
        <Route path="/logout" element={<h2>Logout Page</h2>} />

        {/* page */}

        <Route path="/firstyear" element={<FirstYear />} />
        <Route path="/secondyear" element={<SecondYear />} />
        <Route path="/thirdyear" element={<ThirdYear />} />
        <Route path="/fourthyear" element={<FourthYear />} />

        {/* contents */}
        <Route path="thirdyearcontent" element={<ThirdYearContent/>}/>

        
      </Routes>
    </>
  );
}

export default App;
