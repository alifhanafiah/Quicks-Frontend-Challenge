import Spinner from "../assets/icons/spinner.svg";

type LoadingProps = {
  content: string;
};

const Loading = ({ content }: LoadingProps) => {
  return (
    <div className="grid h-full place-items-center">
      <div className="flex flex-col justify-center">
        <img src={Spinner} alt="Loading" className="animate-spin" />

        <p className="font-bold text-primary-gray-400">{content}</p>
      </div>
    </div>
  );
};

export default Loading;
