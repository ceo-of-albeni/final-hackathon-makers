import React from "react";
import { Carousel } from "antd";
import "../../styles/style.css";
// swiper
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import CardForSwiper from "../CardForSwiper/CardForSwiper";
// card
import { Card } from "antd";
const gridStyle = {
  width: "64%",
  textAlign: "center",
};
const contentStyle = {
  margin: 0,
  height: "660px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
};
const App = () => {
  const onChange = currentSlide => {
    console.log(currentSlide);
  };
  return (
    <>
      <Carousel afterChange={onChange}>
        <div>
          <h3 style={contentStyle}>
            <img
              src="https://kabar.kg/site/assets/files/54434/b161d039b18a8dbe213de23f43dd3dde.jpg"
              alt=""
              width="100%"
              height="660px"
            />
          </h3>
        </div>
        <div>
          <h3 style={contentStyle}>
            <img
              src="https://img.geliophoto.com/bishkek/07_bishkek.jpg"
              alt=""
              width="100%"
              height="660px"
            />
          </h3>
        </div>
        <div>
          <h3 style={contentStyle}>
            <img
              src="https://kartinkin.net/pics/uploads/posts/2022-08/thumbs/1660329925_26-kartinkin-net-p-bishkek-stolitsa-krasivo-foto-27.jpg"
              alt=""
              width="100%"
              height="660px"
            />
          </h3>
        </div>
        <div>
          <h3 style={contentStyle}>
            {" "}
            <img
              src="https://wikiway.com/upload/hl-photo/0cf/066/bishkek_2.jpg"
              alt=""
              width="120%"
              height="690px"
            />
          </h3>
        </div>
      </Carousel>
      <div>
        <h2 style={{ color: "black", marginLeft: "33%", marginTop: "100px" }}>
          Красивые места нашей страны
        </h2>
        <div
          style={{
            width: " 50%",
            fontSize: "19px",
            marginLeft: "20%",
            background: " lightgrey",
            padding: "10px",
          }}>
          <p style={{ color: "black", lineHeight: "1.5em" }}>
            Экскурсионные туры по Киргизии. Великий Шелковый путь сыграл большую
            роль в судьбе кыргызов. Поэтому здесь – в Кыргызстане можно до сих
            пор обнаружить его наследие. Территория и народы древней Киргизии
            находились у истоков и в центре формирования этого величайшего
            экономического и культурного феномена мировой истории. Занимая
            выгодное географическое положение на торговых путях и впитывая в
            себя культурные достижения Востока и Запада, Кыргызская Республика
            стала тем мостиком, который соединял Запад и Восток, а также их
            культуры. Она и по сей день объединяет в себе дух кочевых времен и
            современную реальность.
          </p>
        </div>
      </div>
      {/* //swiper  */}
      <Swiper
        // modules={[Navigation, Pagination, Scrollbar, Ally]}

        spaceBetween={5}
        slidesPerView={4}
        style={{ width: "1090px", marginTop: "130px" }}
        onSlideChange={() => console.log("slide change")}
        onSwiper={swiper => console.log(swiper)}>
        <SwiperSlide className="card">
          <CardForSwiper
            image="https://www.president.kg/files/content_photo/Burana.jpg"
            make="Бурана"
          />
        </SwiperSlide>
        <SwiperSlide className="card">
          <CardForSwiper
            image="https://celes.club/uploads/posts/2022-05/1651685071_1-celes-club-p-ushchele-dzheti-oguz-priroda-krasivo-foto-1.jpg"
            make="Жети-огуз"
          />
        </SwiperSlide>
        <SwiperSlide className="card">
          <CardForSwiper
            image="https://funart.pro/uploads/posts/2021-04/1617325936_7-p-oboi-ozero-sari-chelek-7.jpg"
            make="Сары-Челек"
          />
        </SwiperSlide>
        <SwiperSlide className="card">
          <CardForSwiper
            image="https://www.advantour.com/img/kyrgyzstan/images/arslanbob.jpg"
            make="Арсланбаб"
          />
        </SwiperSlide>
        <SwiperSlide className="card">
          <CardForSwiper
            image="https://data.kaktus.media/image/original/2021-06-16_12-28-43_472772_w.jpg"
            make="Токтогульская ГЭС"
          />
        </SwiperSlide>
        <SwiperSlide className="card">
          <CardForSwiper
            image="https://planetaduha.com/wp-content/uploads/2014/06/01-altyn-arashan-1280x720.jpg"
            make="Алтын-Арашан"
          />
        </SwiperSlide>
        <SwiperSlide className="card">
          <CardForSwiper
            image="https://triptokyrgyzstan.com/sites/default/files/media/image/c_vlad_ushakov_3_0.jpg"
            make="Ущелье Чычкан"
          />
        </SwiperSlide>
        <SwiperSlide className="card">
          <CardForSwiper
            image="https://ic.pics.livejournal.com/frantsouzov/21599674/402457/402457_original.jpg"
            make="Таш-Рабат"
          />
        </SwiperSlide>
        <SwiperSlide className="card">
          <CardForSwiper
            image="https://24.kg/files/media/210/210166.jpg"
            make="Кум-Тор"
          />
        </SwiperSlide>
        <SwiperSlide className="card">
          <CardForSwiper
            image="https://www.advantour.com/img/kyrgyzstan/lakes/kel-suu-lake.jpg"
            make="Кель-Суу"
          />
        </SwiperSlide>
        ...
      </Swiper>
      {/* first */}
      <div>
        <h2
          style={{
            color: "black",
            marginTop: "100px",
            marginBottom: "60px",
            marginLeft: "35%",
          }}>
          Национальные игры кыргызов
        </h2>
        <div style={{ display: "flex" }}>
          <div style={{ marginLeft: "10%" }}>
            <img
              src="https://theplanetsworld.com/travel-tips1/proud-eagle-hunters-of-kyrgyzstan-15.jpg"
              alt=""
              width="530px"
              height="453px"
            />
          </div>
          <Card style={{ border: "none" }}>
            <Card.Grid style={gridStyle} className="grid">
              Салбуурун — комплексные охотничьи игры с ловчими птицами и
              собаками, проводящиеся в Киргизии. Включает соколиную охоту,
              стрельбу из лука (иногда конную стрельбу из лука), а также охоту с
              тайганом. Одна из дисциплин Всемирных игр кочевников. Салбуурун
              происходит из кочевой традиции охоты и защиты стада от хищников,
              таких как волки. Самый зрелищный этап фестиваля — это травля волка
              собаками киргизской породы — тайганами. Следующий этап фестиваля —
              охота с беркутами. Фестиваль направлен «на развитие и пропаганду
              национального богатства киргизского народа». В буквальном переводе
              с киргизского языка слово «салбуурун» расшифровывается как
              «изюминка охотника». Первые игры были проведены в 2006 году в
              Тонском районе. С тех пор они часто проводились на местах
            </Card.Grid>
          </Card>
        </div>
      </div>
      {/* // second */}
      <div style={{ marginTop: "100px" }}>
        <div style={{ display: "flex" }}>
          <Card style={{ border: "none" }}>
            <Card.Grid style={gridStyle} className="grid-2">
              Кок-бору, Кёк-бёрю, Кюк бюре, кокпар (кирг. көк-бөрү (дословно
              "синий/сизый волк" в значении русского выражения "серый волк"),
              улак-тартыш (борьба за козла) или улак (козел), алт. кöк-бöрӱ,
              башк. күк бүре, каз. көкпар, узб. кўкпари) — древняя, популярная
              конная-спортивная игра среди киргизов, алтайцев, башкир, казахов,
              узбеков и других народов Азии. В русском языке для игры кок-бору и
              её аналога бузкаши также употребляется слово «козлодрание», хотя
              на деле целью игры является не раздирание туши козла на части, а
              овладение тушей отбором её у соперника. Кок-бору — это симбиоз
              скачек и игры. Всадники борются за тушу козла — необходимоа затем
              забросить в «казан» (ворота) команды соперника.
            </Card.Grid>
          </Card>
          <div style={{ marginRight: "15%" }}>
            <img
              src="http://worldnomadgames.com/media/images/news/GD3A1358.jpg"
              alt=""
              width="530px"
              height="453px"
            />
          </div>
        </div>
      </div>
      {/* third */}
      <div style={{ marginTop: "100px" }}>
        <div style={{ display: "flex" }}>
          <div className="">
            <div style={{ marginLeft: "23%" }} className="img-2">
              <img
                src="http://p.phgk.ru/b/s/3506/27895.jpg"
                alt="meditation"
                width="630px"
                height="453px"
              />
            </div>
          </div>
          <Card style={{ border: "none" }}>
            <Card.Grid style={gridStyle} className="grid">
              Издревле конная игра «Кыз куумай» являлась неотъемлемой частью
              жизни кочевых народов. Если западные мужчины покоряли своих
              возлюбленных любовными серенадами и стихами, то наши джигиты
              завоевывали их конными скачками.Название игры «Кыз куумай» в
              переводе с тюркских языков означает «Догони девушку». В прошлом
              эта игра была свадебным обычаем. В игре участвовали жених, невеста
              и сноха - джене, которая старалась помочь девушке ускакать от
              юноши. Жених должен был догнать невесту, этим он доказывал свою
              любовь к ней и закреплял право на женитьбу. Эта национальная
              традиционная игра часто проводится в праздничные дни.
            </Card.Grid>
          </Card>
        </div>
      </div>

      <video
        src="https://www.youtube.com/watch?v=cgZrQ6MJ0ng"
        className="back-video"></video>
    </>
  );
};
export default App;
