const AbountMe = () => {
  return (
    <div
      style={{
        backgroundImage:
          'url("https://fire-hoodie-356.notion.site/image/https%3A%2F%2Fi.imgur.com%2FNiTjnID.gif?table=block&id=f97dcb84-d096-457a-bfe5-3c197911c4b9&spaceId=863c4272-6152-4a40-b4a1-84d6994c54bb&userId=&cache=v2")',
        backgroundSize: "cover",
        backgroundPosition: "center bottom",
        height: "600px",
        width: "100%",
      }}
      className=""
    >
      <div className="md:pr-[250px] md:grid md:grid-cols-2 gap-20 md:pt-10 ">
        <div className="md:pl-[200px] bg-[#1b1c4162]">
          <h1 className="text-4xl md:py-6">About Me</h1>
          <hr className="sm:w-60 md:w-96 border-[#0c08f8]  border-[2px]" />
          <h1 className="font-bold text-2xl">
            I am a Highly motivated Web Developer, Willing to solve and execute
            projects with all the skills I have.
          </h1>
        </div>
        <div className="md:pl-20 md:pt-32">
        <div
          className="md:grid md:grid-cols-2 md:p-16 
           md:w-[700px]  pr-1 font-bold text-2xl  bg-[#1b1c4162]"
        >
          <div>
          <ul>
            Juan Carlos Coronel Zarabanda
            <li>Phone: +57 3005478524</li>
            <li>Age: 27 </li>
          </ul>
          </div>
          <div>
          <ul>
            <li>Address: Bogota D.C. Colombia</li>
            <li>Hobbie: Gardening</li>
          </ul>
          </div>
        </div>
        </div>
        <div className="py-10 px-10">
          <a href="https://drive.google.com/file/d/1jQrTBwI1PeVi2PZIkPh0hQhaV9a0KCuK/view?usp=sharing">
            <div className="bg-[#0c08f8] hover:bg-[#08dcf8] px-5 py-2 flex-justify-end">
              <span>Visualize CV Freely</span>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default AbountMe;
