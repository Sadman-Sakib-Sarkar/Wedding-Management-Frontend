import Navbar from 'components/Navbar'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import HomePage from '../pages/homepage/HomePage'
import Checklist from '../pages/planning-tools/Checklist'
import Budget from '../pages/planning-tools/Budget'
import WeddingVendors from '../pages/planning-tools/WeddingVendors'
import Guests from '../pages/planning-tools/Guests'
import BanquetHalls from '../pages/wedding-venues/BanquetHalls'
import Hotels from '../pages/wedding-venues/Hotels'
import MarriageGarden from '../pages/wedding-venues/MarriageGarden'
import WeddingResorts from '../pages/wedding-venues/WeddingResorts'
import WeddingWebsite from '../pages/planning-tools/WeddingWebsite'
import Caterers from '../pages/wedding-vendors/Caterers'
import Florists from '../pages/wedding-vendors/Florists'
import WeddingMusic from '../pages/wedding-vendors/WeddingMusic'
import WeddingPhotographers from '../pages/wedding-vendors/WeddingPhotographers'
import WeddingTransportation from '../pages/wedding-vendors/WeddingTransportation'
import WeddingVideography from '../pages/wedding-vendors/WeddingVideography'
import Jewellery from '../pages/brides/Jewellery'
import Lehenga from '../pages/brides/Lehenga'
import MakeupArtists from '../pages/brides/MakeupArtists'
import MakeupSalon from '../pages/brides/MakeupSalon'
import MehndiArtists from '../pages/brides/MehndiArtists'
import Sherwani from '../pages/grooms/Sherwani'
import SignIn from '../pages/sign/SignIn'
import SignUp from '../pages/sign/SignUp'
import AboutUs from '../pages/about-us/AboutUs'
import VendorSignIn from '../pages/sign/VendorSignIn'
import VendorSignUp from '../pages/sign/VendorSignUp'

export default function App() {

  return (
    <>
      <Navbar/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/checklist" element={<Checklist/>}/>
          <Route path="/budget" element={<Budget/>}/>
          <Route path="/wedding-vendors" element={<WeddingVendors/>}/>
          <Route path="/wedding-website" element={<WeddingWebsite/>}/>
          <Route path="/guests" element={<Guests/>}/>
          <Route path="/banquet-halls" element={<BanquetHalls/>}/>
          <Route path="/hotels" element={<Hotels/>}/>
          <Route path="/marriage-garden" element={<MarriageGarden/>}/>
          <Route path="/wedding-resorts" element={<WeddingResorts/>}/>
          <Route path="/caterers" element={<Caterers/>}/>
          <Route path="/florists" element={<Florists/>}/>
          <Route path="/wedding-music" element={<WeddingMusic/>}/>
          <Route path="/wedding-photographers" element={<WeddingPhotographers/>}/>
          <Route path="/wedding-transportation" element={<WeddingTransportation/>}/>
          <Route path="/wedding-videography" element={<WeddingVideography/>}/>
          <Route path="/jewellery" element={<Jewellery/>}/>
          <Route path="/lehenga" element={<Lehenga/>}/>
          <Route path="/makeup-artists" element={<MakeupArtists/>}/>
          <Route path="/makeup-salon" element={<MakeupSalon/>}/>
          <Route path="/mehndi-artists" element={<MehndiArtists/>}/>
          <Route path="/sherwani" element={<Sherwani/>}/>
          <Route path="/sign-in" element={<SignIn/>}/>
          <Route path="/sign-up" element={<SignUp/>}/>
          <Route path="/about-us" element={<AboutUs/>}/>
          <Route path="/vendor-sign-in" element={<VendorSignIn/>}/>
          <Route path="/vendor-sign-up" element={<VendorSignUp/>}/>

        </Routes>
      </BrowserRouter>
    </>

  )
}
