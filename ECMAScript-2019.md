# ECMAScript 6
## Table Of Contents

**[let & const](#let-const)**  
**[arrow functions](#arrow-functions)**

***
<br>

### let & const
<br>

```js
for (var i = 0; i < 3; i++) {
  setTimeout(function () {
    // console.log(i)
  }, i * 100)
}

// 3 3 3

for (let i = 0; i < 3; i++) {
  setTimeout(function () {
    console.log(i)
  }, i * 100)
}

// 0 1 2
```
Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam eligendi ducimus ea, iure officia mollitia provident corrupti quidem nesciunt inventore, cupiditate, pariatur porro recusandae qui natus cum ab? Quos, cumque?
  Placeat dolorem sapiente esse veritatis commodi, libero minima ullam tempore id minus labore quam ducimus possimus nam magnam nostrum molestiae distinctio at reprehenderit assumenda, cum hic repellendus! Consectetur, tempore eveniet!
  Facilis magni autem eaque! Incidunt hic officiis maiores eos aspernatur dolorem sint perferendis aperiam sunt. Alias, cum culpa voluptate commodi ullam consequuntur! Recusandae laborum voluptates atque aperiam nesciunt voluptatibus nostrum.
  Consequatur ad eveniet dignissimos soluta, corporis dolorem. Nisi adipisci reprehenderit, doloremque provident ipsum nemo omnis, voluptate nam accusamus reiciendis deleniti impedit minima fugiat eaque inventore, assumenda hic soluta veniam autem.
  Id aliquam eaque voluptatibus doloremque velit natus mollitia eum eveniet nesciunt maxime, reiciendis dolore reprehenderit cupiditate ducimus accusantium ut in dolorem asperiores, autem ullam? Vel recusandae ad minima sunt! Expedita.
  Animi eveniet, amet necessitatibus sapiente ex mollitia, beatae voluptas, itaque deserunt quos recusandae voluptatum adipisci? Quasi ut fuga quia, architecto saepe veritatis amet voluptas fugit expedita delectus quo ipsa soluta.
  Voluptate consequatur odio neque accusamus! Iusto sapiente sunt reprehenderit est ipsa quibusdam quos aut nulla accusantium doloribus nihil, dolores, nemo laborum ullam velit. Nostrum doloremque quae quis numquam fugit est.
  Tempore consectetur ab, veniam itaque molestias nam debitis, libero maiores repudiandae earum explicabo voluptas eligendi voluptate facilis, fugit atque. Nostrum, vero dolorum exercitationem ratione ad dignissimos laboriosam odit esse harum?
  Cupiditate eveniet necessitatibus suscipit eaque architecto velit quisquam reprehenderit expedita ab quo sit magni voluptas, tempora iure officia! Temporibus ratione ducimus ab sint saepe eveniet dicta animi repudiandae. Ducimus, perspiciatis!
  Molestiae asperiores, eaque quae deserunt natus animi reiciendis eligendi recusandae ab possimus quia corporis dolorum sit eius maxime numquam commodi illum! Ex totam excepturi fuga assumenda inventore. Blanditiis, maxime nihil!
  Possimus ratione iure beatae ut esse dolore voluptatem laudantium soluta non, dignissimos vero molestiae veniam cum quaerat commodi, quia impedit? Eligendi ducimus tempore sequi quam autem quibusdam. Fugit, reprehenderit eveniet?
  Quisquam asperiores voluptas iusto, saepe sunt accusamus quis, enim quam pariatur amet aliquam nihil impedit molestias nulla rerum ea? Quas animi voluptatum sequi dicta, nihil unde nam repellendus iusto officiis.
  Iure eveniet eius enim ad, id illo nesciunt optio delectus, deserunt eaque commodi voluptatem, consequuntur aliquid eligendi. Perspiciatis et saepe quos? Consequatur impedit voluptate dolorum tenetur. Qui quidem eos eius?
  Nam officiis cum sint voluptate? Earum necessitatibus quasi architecto magnam esse harum repellat non. Nesciunt veritatis excepturi iure quibusdam eos praesentium voluptates beatae est corporis aliquid, dolor similique dolores. Nisi.
  Quam a odio quo, sed, libero, beatae illum eligendi doloremque error consectetur aut ipsum magnam maiores suscipit aspernatur quia architecto veniam explicabo. Fugit, veritatis! Exercitationem cum vero nam numquam. Eius.
  Minima eligendi harum magnam libero soluta, eius necessitatibus amet vero tempore esse est quam adipisci veniam illo excepturi quo perspiciatis laboriosam voluptate voluptas nam animi nisi? Nostrum veniam voluptate distinctio?
  Nemo nostrum quidem illum, rem cumque quas error ipsum tenetur tempora voluptate exercitationem eos eveniet laboriosam maxime facere omnis? Eius, non modi nihil quibusdam suscipit aut incidunt quam qui molestiae.
  Natus laboriosam ullam modi obcaecati. Architecto quo consequuntur alias ullam velit quibusdam amet, quasi fuga tempore iste perferendis possimus quas veniam doloremque dignissimos nesciunt sed magnam, asperiores nihil veritatis illo.
  Rem recusandae aperiam mollitia ut labore ad consectetur! Assumenda reiciendis sequi voluptatum fuga aliquam. Nulla ab neque similique perferendis laudantium dolores ut placeat, facilis culpa quam repellat autem assumenda adipisci!
  Sapiente dolor odio iste ipsam eum et aut deserunt? Veniam consectetur iste cupiditate, neque repudiandae blanditiis recusandae, magnam sit debitis quis mollitia pariatur laborum expedita est quasi, alias quae! Minima.
  Placeat, aspernatur quasi vitae sit fugiat labore eos fugit beatae laudantium, culpa praesentium incidunt veniam, vero ab blanditiis? Voluptates quos nemo ratione libero dicta, possimus neque! Quos repellendus excepturi consectetur!
  Excepturi numquam ullam corporis sequi adipisci distinctio maxime doloribus est inventore, facere assumenda sed culpa minima dignissimos, quo obcaecati autem ex voluptatum quaerat exercitationem dolores molestias saepe itaque! Asperiores, labore!
  Eum repudiandae culpa minus dolor, blanditiis magni aut, iusto laborum minima nulla, neque obcaecati consectetur. Adipisci mollitia porro aliquam ab, suscipit aperiam! Eveniet id consequuntur quas rerum illum maiores magnam.
  Neque suscipit iste, saepe accusamus exercitationem voluptatem rerum repellendus provident placeat voluptate a perferendis, ut architecto possimus ipsa rem magnam corrupti, ad dolorum esse ea. Dolore sequi laborum atque nihil.
  Facilis ducimus officia, ea, sed quidem hic, iusto tenetur facere debitis totam nam. Aperiam ipsa earum, iure eum voluptas eligendi at quos tempore molestiae, distinctio vel laudantium cum! Tempora, pariatur?
  Inventore corrupti, aperiam error, placeat quam dignissimos, voluptatem veritatis voluptas quas odio rem. Odit cum nam dicta iusto deleniti illum eveniet. Perferendis ipsam, molestiae ex dignissimos enim tempore consequatur sint.
  Veniam porro illo cum aliquam soluta minus id harum sint quibusdam amet, ipsum ut iste fuga, consectetur aliquid commodi exercitationem repudiandae iusto? Tempora, porro ex aliquid repudiandae provident nostrum illum!
  Beatae exercitationem molestias voluptates? Fugit voluptates vitae ratione vel quo assumenda aliquid provident doloribus quod praesentium iure reprehenderit corrupti excepturi enim cupiditate ea, alias a illum, expedita dolore quos minus.
  Quisquam vero repellendus necessitatibus fuga nihil natus deserunt accusantium inventore at in. Accusantium autem fugit modi labore voluptatum in doloremque placeat cumque, sint dolorum quisquam, necessitatibus expedita, excepturi totam. Earum!
  Explicabo voluptate repudiandae nesciunt, vel molestiae quaerat voluptatem quos cumque rerum aspernatur nulla accusamus ipsam sequi debitis maxime omnis consequatur doloribus porro iusto! Similique perspiciatis, recusandae placeat maxime et eum.
  Ullam iste, ipsum omnis magnam libero, unde dicta velit doloribus reiciendis hic illum fugiat id voluptates dignissimos minima reprehenderit molestiae consectetur temporibus. Officia delectus distinctio omnis sint magnam hic porro.
  Quas perspiciatis rem quam sit illum sequi pariatur? Commodi quas quod optio consequatur ut exercitationem, ducimus, reiciendis facere quia debitis dignissimos ea fugit odit quo accusantium, inventore voluptatum aliquid quos!
  Excepturi pariatur debitis animi nostrum. Praesentium architecto ut enim accusamus ipsa saepe mollitia culpa harum. Labore odio temporibus officia, aut explicabo sapiente numquam obcaecati tenetur repudiandae dolorum quidem dignissimos dolorem?
  Eius veritatis voluptates temporibus totam fugiat rem est doloremque ab non. Nostrum tempora velit sit illum tenetur, sapiente optio, quas, odio voluptas doloribus autem in maiores totam blanditiis adipisci officiis?
  Aspernatur hic laboriosam quasi minima quo et autem consequuntur quibusdam voluptate, laudantium amet pariatur mollitia dolorem distinctio vero molestiae expedita nihil sunt necessitatibus assumenda repudiandae rem, quaerat quod. Ducimus, minima?
  Nihil quibusdam, nostrum vel commodi natus debitis? Sint delectus laudantium tenetur, modi sed est sequi aliquid assumenda ipsa quas consectetur, libero molestiae minus quia nobis dignissimos nesciunt eligendi eaque consequuntur?
  Sunt voluptates laborum quod dolore debitis! Tempora laborum expedita quis temporibus necessitatibus eaque magnam incidunt, aliquid, cum fugit maiores facilis accusantium molestiae voluptatum non molestias sunt, veniam quisquam facere inventore!
  Sint quidem molestiae maiores nisi! Natus tempora tenetur saepe sapiente aliquam distinctio eveniet? Vitae facilis distinctio at sunt recusandae aperiam doloribus labore eaque. Deserunt delectus, iste excepturi illum vitae incidunt?
  Doloribus blanditiis praesentium, quia debitis nisi voluptatum rerum, ullam deleniti quisquam hic harum voluptatibus enim aliquid? Aperiam dolorem corporis ratione atque harum, perspiciatis porro quis reiciendis, ab sequi distinctio asperiores?
  Ullam atque assumenda dolorum ad eos quia, architecto eveniet quos non nisi perspiciatis ipsa, expedita dolorem. Est architecto, quaerat, reprehenderit velit odit quae explicabo a quibusdam aliquam minus voluptate eum.
  Quam earum quo perspiciatis illo quidem maxime odit maiores veniam alias dignissimos necessitatibus aperiam omnis aspernatur repellendus harum, corrupti odio ut, libero sint cumque ratione? Reprehenderit quisquam quibusdam iste qui?
  Voluptas mollitia nemo excepturi, debitis ullam error adipisci ut dolores iste libero distinctio voluptates, ratione quidem hic praesentium impedit. Perspiciatis quasi expedita, assumenda atque exercitationem autem fuga! Harum, quod ipsum!
  Fugiat, iusto nostrum ab earum eius aut ex, aliquid sint quia soluta suscipit totam. Quos, explicabo voluptatum. Similique nisi aliquid, adipisci, consequatur ea enim corporis iste non, odio inventore sapiente.
  Magni tempora aperiam necessitatibus voluptatem, vero delectus ex, obcaecati, similique praesentium vel quos vitae aliquam alias illo? Saepe modi sint dolor eum dolores repellendus odit harum at, ex exercitationem illum!
  In harum aut dolorum necessitatibus quo id quidem, consequatur tempore rem inventore distinctio perspiciatis iusto? Esse molestiae quis, nobis soluta, qui sunt praesentium deleniti expedita exercitationem voluptatibus veritatis sint. Asperiores!
  Eius assumenda, expedita vel inventore in suscipit quam nisi? Voluptas veniam ea assumenda numquam hic quo ut ipsum aliquid perspiciatis aspernatur distinctio ab, impedit possimus enim quibusdam. Eligendi, similique odit.
  Inventore harum fuga, ab ad dolorum fugit tenetur earum, accusantium quos eius vitae. Alias ipsa maxime non ipsam suscipit quidem, quibusdam obcaecati accusantium, provident eius assumenda iusto cumque ut possimus.
  Odit minus aut esse numquam voluptatibus veritatis illum repudiandae dolor, quam sequi laborum, eos nostrum eius debitis. Porro distinctio blanditiis earum reprehenderit sint temporibus a facere atque? Ab, ut cum?
  Minima, deleniti suscipit voluptatum porro fuga sed ut laudantium sapiente odit reprehenderit mollitia aliquid, eum nihil vero in reiciendis eaque. Possimus facilis iste optio ab facere consequatur consequuntur, suscipit harum.
  Expedita illum exercitationem commodi, ut omnis assumenda perferendis at beatae, corrupti quisquam ipsum tempora eveniet soluta delectus non deleniti suscipit deserunt dicta voluptas obcaecati, ullam quam autem. Est, earum facere.
  Tenetur magni explicabo, voluptas accusantium minima amet laudantium nesciunt quasi, excepturi sint veniam unde deleniti! Optio, iure omnis qui assumenda, expedita sapiente sequi molestias, neque delectus architecto harum rem ab.
  Quas enim deserunt ullam blanditiis voluptatem? Distinctio esse alias porro tempora ipsum voluptates delectus, accusamus nulla est ad ex repudiandae dolorum ullam iste nesciunt dolore. Quibusdam ipsam magni voluptates quidem?
  Ad sunt sequi minima laborum inventore enim assumenda quod ab, et sed doloribus alias esse debitis atque delectus facere omnis consectetur aliquam veritatis quae vitae fugiat praesentium? Libero, odit eum?
  Inventore consequatur, nihil expedita laboriosam quidem animi perferendis consectetur officiis iure illo incidunt aperiam corporis omnis! Earum, explicabo culpa alias repellat placeat officia molestiae? Modi numquam odit expedita nobis recusandae.
  Numquam rerum voluptate minima eveniet a deleniti iusto odit qui dicta, debitis alias vitae, placeat ab molestias perferendis temporibus ea sequi nesciunt? Repellendus sint, aliquam hic asperiores esse dolores quod.
  Eos temporibus doloremque harum porro voluptas rerum, placeat hic ullam, nulla magnam quae qui reprehenderit praesentium aliquid vel esse ab vero laborum repellendus! Reprehenderit excepturi harum, laborum aliquam reiciendis exercitationem?
  In eum incidunt culpa iure inventore dolor facilis modi! Voluptatibus consequatur dolorum earum, non magnam labore cum illum quasi corporis voluptatum saepe ab et error harum? Aut quidem exercitationem culpa!
  Vel, excepturi officia facere deserunt reiciendis nulla porro odit nam illo, sunt laboriosam nemo cupiditate iste corporis quas earum neque vitae numquam in eius delectus provident, unde est! Nesciunt, sed.
  Libero eos praesentium fugiat, sed laborum sequi dolore voluptates, nostrum iste eaque minima saepe veritatis maiores quasi beatae magni accusamus modi. Unde eos reprehenderit blanditiis ut incidunt ducimus corporis exercitationem!
  At fugit et praesentium officiis? Dolore nisi quam distinctio quo voluptatibus non et, repudiandae facilis sunt, aliquid tempora amet quisquam quas ratione laborum alias culpa corporis modi reprehenderit voluptatum sequi!
  Saepe, beatae? Officiis magnam in pariatur eos aut qui quos laudantium voluptatem eius explicabo facere repellendus dicta similique earum excepturi vitae dolores tenetur quisquam, aliquam suscipit, repudiandae at? Et, ratione.
  Labore officiis sapiente, ducimus quisquam deleniti pariatur ex saepe in? Maxime, nostrum? Eligendi sit impedit qui suscipit laborum quidem a officia facere earum quas? Et pariatur rem earum porro tempora.
  Dolor ab optio eos quibusdam ex recusandae eum quis, quam, ea quas inventore unde! Sunt exercitationem, suscipit reprehenderit incidunt aliquam quisquam earum autem quasi dolore quo ipsa amet. Placeat, debitis?
  Tempore eius mollitia laborum corporis maiores neque, rem sint assumenda labore sapiente earum, nulla ipsa voluptatem itaque, dolorem quod optio sit facilis id sed dicta quaerat omnis pariatur unde. Aliquid?
  Explicabo, ex modi repudiandae rem non facilis totam iusto! Facilis amet similique, voluptatibus, voluptatum dolore enim, accusamus inventore dolores odio temporibus eius. Ad voluptatibus tempora tempore temporibus quae porro ullam!
  Debitis cum dolor, distinctio suscipit recusandae iste modi tempore. Eum itaque enim autem. Distinctio ad doloribus dolore molestiae nemo reprehenderit labore voluptates perferendis ipsam. Velit praesentium cumque molestias harum obcaecati!
  Quo hic qui illum maiores libero odio rem tempora ullam vel, ducimus excepturi laborum omnis ratione quae. Delectus ipsa, laudantium ipsam aspernatur non possimus atque quasi consectetur minima nihil a.
  Laudantium excepturi sint placeat quo dignissimos cumque iure qui itaque aspernatur iste, eius ea quidem in hic sapiente ex suscipit maiores inventore saepe! Explicabo saepe modi veritatis nihil exercitationem repudiandae.
  Amet qui quae quo quia laudantium. Sint, molestiae fugit? Porro blanditiis corporis nam enim necessitatibus assumenda nostrum neque ipsa, repellendus quis officiis nesciunt. Illo nihil quae cumque. Dolor, perferendis ut.
  Vitae incidunt, sed voluptatum nulla pariatur fugit provident exercitationem iste magni excepturi perspiciatis nesciunt aliquid sequi in at ipsa quos, accusantium eos, quae illo voluptas temporibus inventore nobis laborum. Voluptas.
  Saepe rem blanditiis, mollitia aut beatae delectus! Culpa dolores amet officiis repudiandae mollitia libero, sunt beatae, aut, porro fugiat veniam non ducimus. Sint at ipsum ratione explicabo possimus tenetur modi!
  Laudantium, similique odit cum doloremque, atque harum eos rerum exercitationem nesciunt obcaecati dignissimos quaerat. Perspiciatis adipisci magnam quam nesciunt facilis dolor similique eos ipsam, odit numquam quod exercitationem amet repellendus.
  Nemo error tenetur sapiente quos aspernatur debitis cumque incidunt eaque magni? Quia cupiditate, labore veritatis eos eius, culpa enim delectus consequuntur totam corporis debitis non tenetur assumenda minus. Omnis, veniam.
  Omnis iusto nesciunt saepe quas similique sequi eos quibusdam, sit perspiciatis totam doloribus magnam, amet unde dolore. Iure alias iusto, ducimus cum quaerat iste impedit laborum similique, deserunt corporis quae.
  Repudiandae quas perspiciatis magni recusandae consequuntur repellendus ex ut, excepturi, animi doloribus quisquam officiis ipsam illum explicabo quasi quibusdam alias quaerat, laboriosam pariatur similique nemo? Suscipit omnis quibusdam impedit illum?
  Ab, odit mollitia. Nesciunt nobis eos cupiditate accusantium, error natus laborum dolore? Sint iure, saepe necessitatibus nihil in, mollitia sunt neque eligendi voluptates praesentium unde eum expedita autem dolor molestias?
  Tempore harum exercitationem sequi! Fugit hic, commodi assumenda fugiat numquam optio reprehenderit adipisci officia ab fuga recusandae impedit? Praesentium omnis ab nulla veritatis aperiam esse reprehenderit assumenda quaerat exercitationem maiores!
  Numquam nisi, maiores delectus quis sint doloremque culpa magnam rem non facere laborum ipsa illum amet, earum libero sed obcaecati fuga aliquam rerum, itaque fugit cum odio. Debitis, assumenda quas.
  Doloremque officiis quas dignissimos, non molestiae quam exercitationem aut nesciunt amet voluptas officia deleniti ipsa accusamus voluptatibus consectetur! Itaque voluptatibus sint quisquam fuga nobis? Cupiditate commodi fugiat blanditiis quibusdam asperiores.
  Vero ab quas, dignissimos aliquam nemo incidunt laudantium veniam voluptatum reiciendis rerum, numquam tempora assumenda officia! Dignissimos, neque aliquid illo maxime nihil rem expedita perspiciatis dolorum beatae saepe doloremque quaerat.
  Nostrum minima veniam id modi quae vel ab amet labore voluptate enim, fugit eum cumque fuga molestiae illo placeat dicta qui, quis autem repudiandae? Magnam quo obcaecati debitis a placeat.
  Doloremque similique eius, blanditiis voluptatem vel vitae atque tempora, cupiditate maxime voluptates porro quaerat eum eveniet incidunt iste in asperiores! Consectetur, eius sunt eum dignissimos placeat soluta modi harum nesciunt!
  Exercitationem quae quo ipsum debitis cumque, est itaque animi a facilis possimus quisquam accusantium culpa quos accusamus. Quibusdam natus laborum iusto, veniam animi, similique fuga esse quasi doloribus recusandae quas.
  Dignissimos hic officiis explicabo minus alias, nam optio in, adipisci dicta delectus itaque deserunt esse laborum modi doloremque ipsum asperiores! Libero cum a enim ullam consequuntur labore, sint obcaecati tenetur!
  Ducimus mollitia voluptatibus quaerat esse saepe, quod aspernatur? Voluptas deserunt soluta expedita error! Eaque, iure, molestias sapiente consequatur temporibus asperiores eveniet perspiciatis assumenda consectetur officia sit quibusdam minus ullam quidem.
  Vero inventore, aspernatur modi adipisci voluptate nihil, corporis consequuntur eveniet veritatis, reprehenderit maxime totam voluptatem laudantium mollitia. Exercitationem ea consequuntur sed voluptatem, impedit sint maxime facilis molestias. Numquam, ratione ea?
  Tempora velit et, facere tempore dicta ducimus. Maiores voluptatem reprehenderit voluptate expedita harum unde porro recusandae doloribus similique excepturi voluptates, perspiciatis eum placeat labore consequatur. Sequi dolore ut harum. Qui.
  Illum ipsam reiciendis nobis repellat nulla sequi corporis officia inventore quis sint adipisci animi rem qui quod asperiores, exercitationem deserunt ad cumque neque maiores expedita! Sit optio iste beatae debitis.
  Vero fugit molestias dicta provident doloremque praesentium deleniti ea rem illum, perferendis tempore. Illum, cumque dolores facere totam tempora quaerat voluptates placeat ipsam, reiciendis, temporibus esse cupiditate accusantium repudiandae optio.
  Exercitationem, rem laborum nobis voluptatum id eum debitis harum! Nobis quod expedita, amet, facere repellat veritatis nam ratione autem commodi consequatur molestiae minima est praesentium nostrum dolores a? Recusandae, maiores?
  Tenetur consequatur labore exercitationem sint quis omnis consequuntur, inventore totam rerum corrupti porro accusamus impedit reiciendis voluptatibus ratione repellat delectus ea error iusto aut sequi quasi? Nihil fuga eum blanditiis.
  Mollitia fugiat similique reprehenderit ab? Similique dolores architecto qui quia, ut quidem, sapiente ullam facilis nihil expedita, amet voluptates est a nam accusantium culpa reprehenderit numquam officiis in animi delectus!
  Odit quam necessitatibus, tenetur alias consectetur reprehenderit provident maxime labore, voluptates ab veniam culpa asperiores. Corporis nulla doloremque voluptates assumenda modi est eaque! Unde corrupti exercitationem dignissimos. Atque, molestiae libero.
  Blanditiis, esse quidem. Laboriosam quod est assumenda, reprehenderit vel aliquid repudiandae accusantium earum non nemo consectetur, veritatis numquam dolores eius fugit accusamus quis voluptates cum totam consequuntur voluptate nam facilis.
  Nostrum suscipit aut nobis voluptate repellat recusandae. Cumque commodi nemo nisi necessitatibus voluptates assumenda quasi quas officia, corrupti facilis aut eveniet tenetur. Repellat odio cum cumque labore tempore velit ut.
  Dignissimos nulla blanditiis excepturi soluta sint non voluptatum sit tenetur corrupti, facilis nesciunt veritatis voluptatem dicta expedita deserunt sequi. Itaque corporis ducimus quaerat dicta nihil hic qui nobis porro tempora!
  Provident, exercitationem architecto placeat quos labore dolores! Odit autem animi quidem suscipit aspernatur reiciendis repudiandae labore nulla, officiis dolorem fuga deserunt voluptate, exercitationem tempore est vitae ad minima modi. Vitae.
  Voluptatum pariatur expedita placeat beatae facere atque aliquam dolorem! Doloremque consequatur eveniet quisquam nam voluptatem praesentium odio harum, deleniti doloribus. Reiciendis, molestiae quas. Praesentium, repellendus officia ducimus tempora voluptates nobis!
  Inventore recusandae est sequi placeat corporis eveniet nihil, soluta voluptates impedit maxime magnam amet, veniam repellat repudiandae debitis. Quasi dolorem voluptatem dolore quis aliquam eligendi labore cum odit! Beatae, tempore.
  Ullam, repellendus. Sequi fugit cupiditate rerum, unde ex nesciunt iusto magni hic repellendus doloribus soluta repudiandae omnis quis dolore accusamus fugiat odio? Cupiditate quis iusto consectetur cumque ducimus pariatur earum!
<br>

### arrow functions
<br>