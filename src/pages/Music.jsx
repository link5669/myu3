import "../App.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import MarcNavbar from "../components/Navbar";
import MarcFooter from "../components/Footer";
import { Link } from "react-router-dom";
import Album from "../components/Album";
import shp from "../assets/shp.jpeg";
import bard1 from "../assets/DND+NRS+Album+Cover.png";
import bard2 from "../assets/DND+ELM+Album+Cover.jpeg";
import stalling from "../assets/STL+Album+Cover.png";
import missingTwin from "../assets/HMT+Album+Cover.jpg";
import alistair from "../assets/BXR+Album+Cover.jpg";
import ptps from "../assets/PTPS/PTPS Album Cover.png";
import MultilinePlayer from "../components/MultilinePlayer";
import dreamFactoryCover from "../assets/DreamFactory/TDF Album Cover.png";
import btrp from "../assets/BTRP.png";
import spell from "../assets/spell.png";
import tek from "../assets/ATAS-TEKHA Album Cover.png";
import rots from "../assets/ROTS Album Cover.png";
import sprout from "../assets/Sprout.png";
import afterlife from "../assets/AFTL Album Cover.jpg";
import broadway from "../assets/BWBL Album Cover.png";

function Music() {
  const claws =
    "https://dl.dropboxusercontent.com/scl/fi/ypiedv3d5hu47c9mc7r80/CLA-Album-Cover.jpg?rlkey=g0j3p1dri8c56t6ra7yle25s2&e=1&dl=0";
  const shuriken =
    "https://www.dl.dropboxusercontent.com/scl/fi/qpjmqh2v5hvxfu17rp958/SHSG-Album-Cover.png?rlkey=8ewufqr6awff2fg58m6gvf0oe&dl=0";

  // albums.js
  // albums.js
  const albums = [
    // Row 1
    {id: "mix",
      img: "https://www.dl.dropboxusercontent.com/scl/fi/lyzidlbuqoxezr1m0kmjd/BTND-Album-Cover.jpeg?rlkey=80rbhc70jvvhru4oh8e1xhn39&dl=0",
      file: ["https://www.dl.dropboxusercontent.com/scl/fi/k92b1nog2koik64w7qlpr/Day-1-Track-4-Fast-n-Easy.wav?rlkey=ax25y7qznhmt16jyse1uw4nw1&dl=0"],
      title: "Mixed Jams (from Beat Tender)",
      description: "EP / Jazz Fusion",
      info: [{title: "Mixed Jams (from Beat Tender)"}]
    },
    {
      id: "shu",
      img: shuriken,
      file: [
        "https://www.dl.dropboxusercontent.com/scl/fi/ieh8cmgjeu7qkyjhtakqw/SHSG-Preview.m4a?rlkey=ks0hneigkoottx0y1jlg1ocr8&dl=0",
      ],
      title: "Shuriken Saga",
      description: "Video Game / Japanese Adventure",
      info: [{ title: "Shuriken Saga" }],
    },
    {
      id: "cao",
      img: claws,
      file: [
        "https://dl.dropboxusercontent.com/scl/fi/llevzt3ift4z06dx1rlvq/CLA-Preview.m4a?rlkey=ae5xg5qs038rjtwhutcegqm9c&e=1&dl=0",
      ],
      title: "Claws and Order",
      description: "Short Film / Musical",
      info: [{ title: "Claws and Order" }],
    },
    {
      id: "afterlife",
      img: afterlife,
      file: [
        "https://www.dl.dropboxusercontent.com/scl/fi/dmrnwu4gskvpf655faor0/AFTL-Social-Media-Preview.m4a?rlkey=298y42zbcrfzyp6m8yd94o3ii&e=1&dl=0",
      ],
      title: "Afterlife",
      description: "Short Film / Dark Comedy",
      info: [{ title: "Afterlife" }],
    },

    // Row 2
    {
      id: "rots",
      img: rots,
      file: [
        "https://www.dl.dropboxusercontent.com/scl/fi/uifjm1bauwvldiiuy76el/ROTS-DELTA-M01v2-Delta-Emblock-s-Theme.wav?rlkey=043vo2m4p7m7y3zu2vdnemhdw&e=1&dl=0",
      ],
      title: "Resurgence of the Storm",
      description: "MOBA / Sci-Fi Fantasy",
      info: [{ title: "Resurgence of the Storm" }],
    },
    {
      id: "broadway",
      img: broadway,
      file: [
        "https://www.dl.dropboxusercontent.com/scl/fi/8smkz4cbxw9m0cp6yotql/BWBL-T01v1-S01-Like-It-s-A-Dream.wav?rlkey=bh1ibgzx5a7qznjh6w8nraz7b&dl=0",
      ],
      title: "Broadway Blues",
      description: "Short Film / Musical",
      info: [{ title: "Broadway Blues" }],
    },
    {
      id: "tekha",
      img: tek,
      file: [
        "https://www.dl.dropboxusercontent.com/scl/fi/br98cgv6sximop5zdp2ax/TEKHA-T01-Full-Character-Showcase.wav?rlkey=ui6u2947wycpqxzdzbx7909kx&dl=0",
      ],
      title: "Across The Astral Sea: Tekha",
      description: "TTRPG / Adventure Pop Punk",
      info: [{ title: "Across The Astral Sea: Tekha" }],
    },

    // Row 3
    {
      id: "sprout",
      img: sprout,
      file: [
        "https://www.dl.dropboxusercontent.com/scl/fi/jr00sb0y6il6p9vi652l0/SPRT-Social-Media-Preview.m4a?rlkey=25cydip38sch9b50sbe6gyh59&dl=0",
      ],
      title: "Sprout",
      description: "Short Film / Orchestral",
      info: [{ title: "Sprout" }],
    },
    {
      id: "dreamFactory",
      img: dreamFactoryCover,
      file: [
        "https://www.dl.dropboxusercontent.com/scl/fi/0lhty67m1z0iqkyhpkdif/TDF-Social-Media-Preview.mp3?rlkey=adqrmyod72roicfed57uxavqn&dl=0",
      ],
      title: "The Dream Factory",
      description: "Short Film / Orchestral",
      info: [{ title: "The Dream Factory" }],
    },
    {
      id: "spell",
      img: spell,
      file: [require("../assets/ASTB Preview.mp3")],
      title: "A Spell To Break",
      description: "Short Film / Magical Fantasy",
      info: [{ title: "A Spell To Break" }],
    },

    // Row 4
    {
      id: "ptps",
      img: ptps,
      file: [
        "https://www.dl.dropboxusercontent.com/scl/fo/cwxd6z2d4uef8vl24m2x5/h/_Final%20Tracks%20%28Audio%29/PTPS%20ST01v1%20M01v4%20Main%20Menu.wav?rlkey=1lk894vipypruh8cqhfknijqx&dl=0",
      ],
      title: "Potion Pushas",
      description: "Video Game / Fantasy, Noir, Electronic",
      info: [{ title: "Potion Pushas" }],
    },
    {
      id: "btrp",
      img: btrp,
      file: [
        "https://www.dl.dropboxusercontent.com/scl/fi/ml1cxf08rso7mn09565ks/ASTB-Preview.mp3?rlkey=r04jz5hhkudy8ssvyrsrfuhvz&dl=0",
      ],
      title: "Beach Trip!",
      description: "Short Film / Country Comedy",
      info: [{ title: "Beach Trip!" }],
    },
    {
      img: bard2,
      title: "A Bard’s Tale: The Plane of Elemental Chaos Vol. 1",
      description: "Library Music / Contemporary",
    },

    // Row 5
    {
      id: "stalling",
      img: stalling,
      file: [require("../assets/STL+DEMO+M10+At+Shit_s+End.mp3")],
      title: "Stalling",
      description: "Short Film / Musical Comedy",
      info: [{ title: "Stalling" }],
    },
    {
      id: "shp",
      img: shp,
      file: [require("../assets/SHP_Soundtrack_Preview_v2.mp3")],
      title: "Shpilkes",
      description: "Short Film / Psychological Thriller",
      info: [{ title: "Shpilkes" }],
    },
    {
      img: missingTwin,
      title: "Missing Twin",
      description: "Feature Film / Drama, Thriller",
    },

    // Row 6 (extras)
    {
      id: "bard1",
      img: bard1,
      file: [require("../assets/NRS+DEMO+105+Pursuit.mp3")],
      title: "A Bard’s Tale: Norse Vol. 1",
      description: "Library Music / Norse, Folk, Metal",
      info: [{ title: "A Bard’s Tale: Norse Vol. 1" }],
    },
    {
      id: "bxr",
      img: alistair,
      file: [
        "https://www.dl.dropboxusercontent.com/scl/fi/7nqm0puw0wjx25lsp4q0w/BXR-Preview.m4a?rlkey=e7q2o60nx4uvrpq8cc1y5bsol&e=1&dl=0",
      ],
      title: "Alistair",
      description: "Video Game / Horror, Electronic",
      info: [{ title: "Alistair" }],
    },
  ];

  const colStyles = [
      { padding: "3%", paddingLeft: "8%" },
      { padding: "3%" },
      { padding: "3%", paddingRight: "8%" },
    ];
  const numCols = 3;
    const chunkSize = Math.ceil(albums.length / numCols);

    // Split into [ [first 6], [next 6], [rest 5] ]
    const columns = albums.reduce(
      (acc, album, idx) => {
        const colIndex = idx % numCols;
        acc[colIndex].push(album);
        return acc;
      },
      Array.from({ length: numCols }, () => [])
    );

  return (
    <>
      <div style={{ width: "100vw", background: "black" }}>
        <MarcNavbar />
        <br />
        <br />
        <h2
          style={{ color: "white", textAlign: "center", paddingBottom: "15px" }}
        >
          SELECT TRACKS
        </h2>
        <p
          style={{
            textAlign: "center",
            color: "white",
            fontFamily: "Georgia",
            paddingBottom: "15px",
          }}
        >
          <i>
            Interested in music for your project?{" "}
            <Link style={{ color: "grey" }} to="/contact">
              Send a message
            </Link>{" "}
            to request a custom demo reel!
          </i>
        </p>
        <Container>
          <Row>
            <MultilinePlayer style={{ paddingBottom: "100px" }} />
            <hr
              style={{
                color: "white",
                border: "2px solid white",
              }}
            />
            <h2
              style={{
                color: "white",
                textAlign: "center",
                paddingBottom: "15px",
                paddingTop: "15px",
              }}
            >
              ALBUMS
            </h2>

            {columns.map((colAlbums, colIdx) => (
                   <Col key={colIdx} style={colStyles[colIdx]}>
                     {colAlbums.map((a) => (
                       <Album
                         key={a.id ?? a.title}
                         id={a.id}
                         img={a.img}
                         file={a.file}
                         title={a.title}
                         description={a.description}
                         info={a.info}
                       />
                     ))}
                   </Col>
                 ))}
          </Row>
          <div style={{ paddingTop: "5%" }}></div>
          <div
            style={{
              height: "3px",
              backgroundColor: "white",
              width: "100%",
            }}
          />
          <div style={{ paddingTop: "5%" }}></div>
          <Row>
            <Col></Col>
            <Col></Col>
          </Row>
          <br />
          <br />
          <br />
          <br />
        </Container>

        <MarcFooter />
        <br />
        <br />
        <br />
        <br />
      </div>
    </>
  );
}

export default Music;
