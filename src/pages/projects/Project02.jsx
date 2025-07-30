import { AnimatedDiv } from "../../components/ui/AnimatedDiv";
import { useInView } from "react-intersection-observer";

export const Project02 = () => {
  const { ref, inView } = useInView({
    threshold: 0.5, // Trigger when 50% of the element is visible
    triggerOnce: false, // IMPORTANT: The animation should run only ONCE per entry
  });

  // Apply the custom animation class when inView is true
  const animationClasses = `
    transform // Ensure transform is present for base transformations
    ${inView ? "animate-in-and-out-on-scroll" : ""}
    // Optional: If you want it to always start from rotate-x-0 rotate-y-0
    // before the animation triggers, you could add:
    ${!inView ? "rotate-x-0 rotate-y-0" : ""}
  `;

  return (
    <div>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere amet
        nobis harum, reiciendis fugiat recusandae ad, est unde corporis
        exercitationem accusantium facilis in id libero quas consequatur. Est et
        aliquid dolores iure ipsum placeat cum quo consequuntur aspernatur quam
        suscipit exercitationem, dignissimos modi alias ratione! Enim, tempora
        laborum error repellat rem aliquam tempore distinctio rerum delectus
        repudiandae vitae minima temporibus provident neque odio eum hic ex
        officiis! Obcaecati laboriosam sint recusandae aperiam facilis,
        architecto non ad totam eius possimus itaque magnam impedit expedita
        adipisci tempora eveniet vero neque? Sint, iure dolor consequatur earum
        vel quae iste ipsum facilis. A maiores dolor reiciendis ullam rem,
        facilis, omnis nostrum accusamus hic necessitatibus, voluptates at
        provident inventore? Iusto fuga similique minima quod laboriosam
        distinctio? Vel, dignissimos veniam! Provident rem numquam voluptatem
        sit beatae ipsum corporis consectetur error eum at, illum itaque cum
        tenetur dolor vel totam dicta accusantium aliquid tempore natus iusto
        mollitia? Autem minus fugiat atque, iusto, voluptate dolore inventore
        temporibus reiciendis placeat, ad incidunt debitis nam id iure ab at
        dicta maxime? Fugit, architecto. Dignissimos possimus expedita non,
        cumque veritatis quam aut ad necessitatibus sequi numquam laudantium
        eaque aperiam quas dolorum pariatur! Quia provident nemo quidem natus
        architecto tempora atque iusto, voluptate alias et aperiam facilis modi,
        ut dolore sint, nam laudantium consequuntur officia qui iste ipsum.
        Officia, voluptates natus eos quos, ut dolore animi doloremque eaque
        odio blanditiis corrupti illo praesentium facilis accusamus cupiditate
        ea, aut exercitationem eligendi. Eum et omnis quasi nam iste cumque
        ratione quibusdam adipisci animi illo repellat, asperiores a, ipsum
        impedit qui fuga iure praesentium. Beatae error, libero natus distinctio
        magnam a laboriosam cupiditate modi nihil repudiandae officiis deserunt
        quasi nesciunt ex voluptatum quidem impedit neque? Dolore pariatur
        aperiam impedit soluta, nihil et molestiae, voluptas distinctio eveniet
        debitis consequatur placeat voluptatibus qui laborum, ducimus officiis
        dolorum id! Ullam maiores deleniti repellat sequi porro aliquam, facilis
        eius facere corrupti repellendus dolores, maxime quia beatae consequatur
        eos nostrum debitis vitae quibusdam ipsum? Officia voluptatum totam
        explicabo exercitationem, repellendus delectus earum reprehenderit
        voluptas quod doloribus doloremque impedit ab in veritatis corrupti
        molestiae fugiat ut aut eaque soluta. Fugiat, amet. Commodi, alias ipsa
        magni officia ex voluptatem natus et voluptates at aperiam vitae earum
        tempore hic, nemo optio, doloribus culpa quibusdam vero praesentium
        repellendus illo nesciunt? Expedita, vero nisi! Accusamus dignissimos
        quas optio, nihil pariatur dolore iste molestias temporibus fuga eos
        dolor expedita in omnis quasi accusantium. Aut saepe incidunt, non
        perspiciatis ad, praesentium rem est excepturi illo expedita suscipit
        nulla in blanditiis. Iste est officiis nulla hic odit. Eveniet accusamus
        beatae laborum voluptates, dolor ex ipsum! Inventore doloribus iusto
        cumque eos vel, quam dolor earum obcaecati rem mollitia at voluptas
        deleniti. Aperiam nisi hic, incidunt soluta, ex fuga voluptate similique
        id porro eum non et quibusdam maxime odit delectus neque blanditiis
        doloribus perspiciatis laudantium numquam ipsa. Ut alias quo laborum
        quos, quam molestiae! In libero alias odio corporis nulla, sapiente,
        quas minima earum, nisi fugit at. Eius exercitationem quis non sapiente
        officiis iure corrupti delectus, ullam sint totam commodi.
      </p>
      <div
        ref={ref}
        className={`
          w-44 h-44 bg-amber-100 border rounded-2xl p-2 cursor-pointer
          ${animationClasses}
        `}
      >
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Lorem ipsum
        dolor sit, amet consectetur adipisicing elit.
      </div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
        obcaecati voluptatem, reiciendis excepturi consequatur corporis error
        beatae molestias minus aperiam non soluta, perferendis voluptate.
        Assumenda asperiores cumque omnis consequuntur quia!
      </p>
      <AnimatedDiv className="text-red-400 text-5xl" delay={600}>
        <div>Hello World ...</div>
      </AnimatedDiv>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum molestias
        rem ipsum inventore minima sequi laboriosam vero ratione! Distinctio
        officia placeat praesentium eius dolorum excepturi incidunt esse aliquam
        ducimus rerum labore commodi omnis eveniet nemo, delectus ipsa quas quos
        explicabo atque qui cum dolorem. Impedit nam unde hic reiciendis culpa!
        Hic tempore eaque voluptatem? Repellendus doloremque voluptate delectus
        quod, eius possimus repudiandae facere. Repellendus neque sit nemo ea
        odit quis laborum aliquam numquam voluptatum, officiis repudiandae dicta
        impedit. Ad molestiae animi voluptatum? Nobis fugit, ab dolorum itaque
        pariatur quod ex alias. Error maxime sapiente animi non dolorem
        molestias aut praesentium iste sequi incidunt eos temporibus quos,
        beatae velit reiciendis assumenda illo at nostrum pariatur iusto
        expedita magnam eveniet laborum quod! Sint, dignissimos? Et corporis
        fugiat aperiam debitis quaerat quas ipsa consequuntur reiciendis
        incidunt laudantium quae tenetur eligendi, reprehenderit assumenda
        ullam! Aut blanditiis vitae impedit eius asperiores voluptatibus
        adipisci, id quia mollitia ea culpa sint sequi totam alias aliquid
        nesciunt! Amet architecto quaerat minus suscipit officia. Facilis in
        perspiciatis eveniet amet quae voluptas et odio repellat accusantium,
        blanditiis dolores totam ab qui at magni, doloribus voluptatem! Ducimus
        beatae magnam, possimus labore excepturi sit vero voluptatibus,
        repudiandae, tenetur eveniet voluptates. Quidem dolorum voluptas vitae
        laboriosam cumque aspernatur at exercitationem ad deleniti commodi!
        Soluta dolore obcaecati libero, ea, fugiat officia ducimus, voluptas hic
        architecto maxime odit reprehenderit impedit incidunt beatae quidem
        eaque. Odio saepe quibusdam iste eaque omnis veniam incidunt
        accusantium, quae harum perferendis sapiente, ullam esse deserunt
        maiores iusto reprehenderit minima repellendus vel quam aspernatur atque
        magni. Nobis ipsa alias voluptatem culpa magni sit impedit, provident et
        pariatur, omnis voluptates tempore. Ut fugit commodi exercitationem nemo
        accusantium porro hic ab voluptatibus a, sunt molestias expedita quos,
        perferendis laudantium veniam voluptates alias distinctio praesentium
        fugiat corrupti sapiente nobis sit ullam iusto? Nostrum officiis veniam
        consequuntur obcaecati nisi ea perferendis maxime excepturi. Fuga
        aspernatur velit officiis iure quia totam nam numquam veritatis et
        voluptatum cupiditate magnam excepturi doloribus vel maiores consequatur
        odio ullam atque facere, vitae provident dolor quisquam odit. Ratione
        incidunt, illum recusandae eveniet nihil beatae itaque enim! Atque cum
        quaerat quia explicabo officiis. Quaerat esse dolor consequuntur, velit
        ea, soluta aliquam optio deleniti incidunt illum quisquam quae itaque
        voluptas molestiae! Consequatur eveniet possimus aut blanditiis quo fuga
        odio, reiciendis inventore consequuntur totam eum magni tempore
        quibusdam dolorem expedita alias delectus saepe assumenda ut optio
        facere, modi nisi explicabo! Ratione animi consectetur possimus.
      </p>
    </div>
  );
};
