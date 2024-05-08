import GeneralAccordion from "./accordion/general";

const FAQ = () => {
  return (
    <div className="flex flex-col items-center py-20">
      <p className="text-lg font-normal text-black/70 mb-4">Need help?</p>
      <h2 className=" font-semibold uppercase text-[#1C1C1C] text-3xl">
        Frequently Asked Questions
      </h2>
      <GeneralAccordion />
    </div>
  );
};

export default FAQ;
