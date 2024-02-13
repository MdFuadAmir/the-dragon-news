import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import qzone1 from "../../../assets/qZone1.png"
import qzone2 from "../../../assets/qZone2.png"
import qzone3 from "../../../assets/qZone3.png"
import bgpng from "../../../assets/bg.png"

const RightSideNave = () => {
  return (
    <div className="p-3">
      {/* login */}
      <div className="mb-8">
        <h2 className="mb-6 text-2xl font-bold">Login With</h2>
        <div className="space-y-3">
          <button className="btn w-full bg-white border border-blue-600">
            <FcGoogle></FcGoogle> Login With Google
          </button>
          <button className="btn w-full bg-white border border-black">
            <FaGithub></FaGithub> Login With Github
          </button>
        </div>
      </div>
      {/* find us on */}
      <div className="mb-8">
        <h2 className="mb-6 text-2xl font-bold">Find Us On</h2>
        <a className="p-4 flex text-lg items-center border rounded-t-lg">
          <FaFacebook className="mr-3"></FaFacebook>
          <span>Facebook</span>
        </a>
        <a className="p-4 flex text-lg items-center border">
          <FaTwitter className="mr-3"></FaTwitter> <span>Twitter</span>
        </a>
        <a className="p-4 flex text-lg items-center border rounded-b-lg">
          <FaInstagramSquare className="mr-3"></FaInstagramSquare>
          <span>Instagram</span>
        </a>
      </div>
      {/* Q-Zone */}
      <div className="mb-8 p-3 bg-gray-200">
        <h2 className=" mb-6 text-2xl font-bold ">Q-Zone</h2>
        <div className="space-y-2">
        <img src={qzone1} alt="" />
        <img src={qzone2} alt="" />
        <img src={qzone3} alt="" />
        </div>
      </div>
      {/* news */}
      <div>
      <img src={bgpng} alt="" />
      </div>
    </div>
  );
};

export default RightSideNave;
