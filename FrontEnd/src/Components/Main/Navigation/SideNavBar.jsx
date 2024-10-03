import logo from "../../../assets/MainLogo/main_logo.png";

export default function SideNavBar() {
  return (
    <div className="flex flex-row items-center justify-center">
      <button className="size-[3rem]">
        <img src={logo} />
      </button>
    </div>
  );
}
