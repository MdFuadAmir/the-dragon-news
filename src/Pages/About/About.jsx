import Navber from "../Shared/Navber/Navber";
import owner from "../../assets/owner.jpg"
const About = () => {
  return (
    <div>
      <Navber></Navber>
      <div className="mt-8">
        <h2 className="text-center font-bold text-4xl my-4">About Us Page</h2>
        <p className="text-center mb-8">
          378 inspirational designs, illustrations, and graphic elements from
          the worlds best designers. <br />
          Want more inspiration? Browse our search results...
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="col-span-1">
                <h2 className="text-3xl font-bold">About Me -</h2>
                <div className="ml-6 mt-4 space-y-2 bg-slate-200 p-4 rounded-lg">
                    <h4 className="font-bold text-xl">Name: Md Fuad Amir</h4>
                    <h4 className="font-bold text-xl">Email: mdfuadamir@gmail.com</h4>
                    <h4 className="font-bold text-xl">Phone: 017******31</h4>
                    <p><span className="font-bold text-xl">Blog:-</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati ducimus reprehenderit aspernatur asperiores numquam quasi soluta corporis, sint culpa, cumque, exercitationem facere? Dolores rem error unde quasi dignissimos vitae distinctio quibusdam tenetur, saepe eaque accusamus impedit, ab debitis nam doloribus voluptates. Natus magnam voluptate maxime molestiae commodi, sequi neque nihil nesciunt minima quas magni itaque quidem, asperiores repudiandae. Aliquid tempore voluptatibus pariatur quidem aspernatur autem commodi adipisci ratione ipsa dolorem amet iusto ab hic, excepturi nihil fuga sit possimus consequuntur, provident distinctio nemo. Nulla dolor veritatis reiciendis ipsa facilis debitis sapiente reprehenderit, doloremque sunt itaque laborum perferendis excepturi accusantium ut commodi facere illo suscipit repellat pariatur quia! Voluptatibus optio corrupti consectetur at ratione voluptas! Molestiae repellat, odio a dolores reprehenderit ea qui labore esse dolorum ad commodi nesciunt! Harum minima provident magni, tenetur placeat soluta laboriosam animi expedita. Quaerat, alias! Quis voluptas at consectetur, ducimus aliquid harum enim illo nulla eius quos alias facilis possimus ut eum consequatur vel. Cumque officia consectetur pariatur numquam, fugit corrupti quo delectus quidem tenetur voluptatum, ad animi provident qui, eaque quam magnam suscipit exercitationem magni iusto modi! Eos tempore odit quibusdam amet, velit minus dolore sapiente itaque temporibus deleniti labore aperiam possimus numquam quidem?</p>                    

                </div>
            </div>
            <div className="col-span-1">
                <img className="rounded-lg" src={owner} alt="" />
            </div>
        </div>
      </div>
    </div>
  );
};

export default About;
