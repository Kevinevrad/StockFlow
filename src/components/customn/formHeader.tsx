import logo from "../../assets/inventory.png";

export const FormHeader = ({ headerTitle }: { headerTitle: string }) => {
  return (
    <div className="flex items-center justify-center gap-1.5   my-1  ">
      <img src={logo} alt="Logo" className="h-12 w-12" />
      <h1 className="text-3xl tracking-tight uppercase  font-extrabold font-mono ">
        {headerTitle}
      </h1>
    </div>
  );
};
