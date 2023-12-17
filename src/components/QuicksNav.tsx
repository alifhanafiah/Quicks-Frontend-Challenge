import Lightning from "../assets/icons/cloud-lightning.svg";

const QuicksNav = () => {
  return (
    <div className="fixed bottom-0 right-0 border border-red-500">
      <div className="flex h-16 w-16 items-center rounded-full bg-primary-blue">
        <img src={Lightning} alt="Quicks Shorcut" />
      </div>
    </div>
  );
};

export default QuicksNav;
