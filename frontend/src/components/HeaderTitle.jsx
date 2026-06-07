const HeaderTitle = ({ title }) => {
  return (
    <div className="flex justify-center items-center">
      <h1 className="font-semibold md:text-5xl text-3xl text-center">
        {title}
      </h1>
    </div>
  );
};

export default HeaderTitle;
