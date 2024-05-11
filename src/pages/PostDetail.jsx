import { Link } from "react-router-dom";
import PostAuthor from "../components/PostAuthor";
import { Button, Container } from "@mui/material";
import Thumbnail from '../assets/blog22.jpg'

const PostDetail = () => {
  return (
    <section className=" bg-gray-200">
      <Container maxWidth="lg" className="post_detail_container bg-white pt-4 rounded-xl border-gray-600 border-y-2  mx-auto">
        <div className="post_detail_header flex justify-between mb-2 ">
          <PostAuthor />
          <div className="post_detail_button flex gap-4 items-center">
            <Button variant="outlined">
             
              <Link to={`/post/werwer/edit`}>Edit</Link>
            </Button>
            <Button variant="outlined" color="error">
              <Link to={`/post/werwer/delete`}>Delete</Link>
            </Button>
          </div>
        </div>
        <h1 className="text-5xl m-2 font-bold" >This is the post title!</h1>
        <div className="m-2 h-fit maz-h-[30rem] overflow-hidden  " >
            <img className="rounded-xl my-4" src={Thumbnail} alt="" />
        </div>
        <div className="container">
        <p className="mb-4" >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque aspernatur vero, quibusdam similique at illum non vitae cupiditate perferendis veniam libero velit! Quasi explicabo autem molestiae molestias modi, veritatis illo.</p>
        <p className="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum hic ratione voluptate nisi excepturi, ab error? Quam consectetur perferendis ipsa commodi est sint nostrum, eveniet enim quo, aliquam cumque illum ex voluptatum dignissimos molestias magni. Necessitatibus repellat sed ratione eum quasi unde dolorem beatae saepe ut magni, totam id deserunt inventore! Reprehenderit iste maxime adipisci?</p>
        <p className="mb-4">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur qui fugiat dolorem rerum cupiditate consectetur voluptatem iure doloremque, quis consequuntur assumenda autem optio odio. Unde laboriosam dolore commodi at, repudiandae facilis quos vitae aspernatur modi placeat in enim distinctio earum nam itaque quae, sed nostrum labore maiores culpa veritatis, officiis adipisci. Distinctio alias aliquam illo dignissimos quos dolores aliquid quisquam repellendus, animi tempora soluta adipisci, laudantium libero. Sequi, adipisci. Sint esse quibusdam pariatur omnis quam iusto nesciunt dolorem nostrum laborum nemo deserunt expedita blanditiis velit voluptatibus animi, incidunt vitae, neque eligendi corporis minus quaerat repellendus porro ea. Suscipit explicabo temporibus vero aliquid perspiciatis! Impedit culpa repellat officia nulla labore cupiditate.</p>
        <p className="mb-4" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus expedita quam asperiores, sit culpa sequi voluptates nostrum impedit temporibus dolore.</p>
        <p className="mb-4">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil illo asperiores voluptatum pariatur id repellat accusantium eos officia harum ipsam totam dicta voluptas esse nostrum, eligendi quibusdam vero fugit deleniti laborum, quo reiciendis adipisci quis! Autem accusantium officiis est eos in hic eum labore facere nihil voluptatibus commodi animi ullam doloremque itaque nobis numquam sint neque amet repellat laborum, rem dicta laboriosam! Aperiam sint aspernatur quod libero, laboriosam sunt voluptate neque ipsum tenetur similique accusantium quaerat voluptatum, nihil quae nulla expedita ad provident quasi officia qui quidem labore nemo consequuntur vitae. Quaerat ipsam aut consequuntur a harum? Ex dignissimos explicabo illum ea! Molestias, debitis nam repellendus nisi molestiae, minima doloribus atque, dolorem expedita error maxime velit nulla inventore? Repellendus numquam ipsum obcaecati natus, reiciendis suscipit sed soluta optio accusantium voluptatum sunt fuga pariatur, dolore excepturi quod? Necessitatibus temporibus eaque commodi ducimus labore delectus exercitationem. Ab minus, quibusdam accusamus itaque sunt impedit pariatur inventore sequi corrupti, sint dolorem iste? Rerum itaque doloremque dolore dolor similique quas voluptatibus. Exercitationem deleniti, ipsam ducimus aspernatur repellat similique quasi velit, architecto mollitia ab animi iure et sed placeat dolorem quibusdam delectus consequuntur quisquam minus nisi commodi! Repellendus omnis voluptatibus laboriosam aliquam pariatur. Ab, assumenda animi!</p>
        </div>
      </Container>
    </section>
  );
};

export default PostDetail;
