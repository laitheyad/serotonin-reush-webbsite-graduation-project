import React, { useEffect } from "react";
import { useState } from "react";
import ChartistGraph from "react-chartist";
import test from "../assets/img/test.jpg";
import size1 from "../assets/img/size1.png";
import brr from "../assets/img/brr.png";
import border from "../assets/img/border.png";
import br22 from "../assets/img/br22.png";
import bgg from "../assets/img/bgg.png";
import mealbg from "../assets/img/mealbg.png";
import eat from "../assets/img/eat.jpg";
import eat1 from "../assets/img/eat1.jpg";
import { Modal } from "react-responsive-modal";
import Grid from "@material-ui/core/Grid";

import { Form } from "react-bootstrap";

// react-bootstrap components
import { Badge, Button, Card, Container, Row, Col } from "react-bootstrap";
import ScrollMenu from "react-horizontal-scrolling-menu";
import { event } from "jquery";

function Dashboard() {
  const [aModal, setaModal] = useState(false);
  const [bModal, setbModal] = useState(false);
  const [cModal, setcModal] = useState(false);
  const [dModal, setdModal] = useState(false);
  const [eModal, seteModal] = useState(false);
  const [news, setNews] = useState([]);
  const [weight, setWeight] = useState();
  const [height, setHeight] = useState();
  const [perfect, setPerfect] = useState();

  function calculate() {
    let perfect = (weight / (height / 100)) ^ 2;
    setPerfect(perfect);
    let span = document.getElementById("perfect");
    console.log(span);
    if (perfect > 25) {
      span.innerHTML = perfect + " " + "overweight";
    } else {
      span.innerHTML = perfect + " " + "not overweight";
    }
  }
  async function _getNews() {
    await fetch("https://serotoninrush.tech/API/news/")
      .then((response) => response.text())
      .then(async (result) => {
        let response = await JSON.parse(result);
        setNews(response);
      });
  }
  useEffect(() => {
    _getNews();
  }, []);
  function cut_string(string = "", len) {
    console.log(string);
    if (string.length > len) {
      let text = string.substring(0, len);
      return text + " ...";
    } else return string;
  }
  return (
    <>
      <Container fluid>
        <Row
          style={{
            width: "100%",
            justifyContent: "space-evenly",
          }}
        >
          <Card
            style={{
              height: 230,
              width: 220,
              borderRadius: "5%",
              backgroundImage: `url(${br22} )`,
            }}
          >
            <Card.Title style={{ paddingLeft: 50 }}>
              <img
                alt="..."
                src={require("assets/img/sero.png").default}
                style={{ height: 100, width: 100 }}
              ></img>
            </Card.Title>
            <Card.Body>
              <label
                style={{
                  fontSize: 10,
                  paddingLeft: 10,
                  maxWidth: "80%",
                  textAlign: "center",
                }}
              >
                How can this site helps you?
              </label>
              <div style={{ paddingLeft: 50, paddingTop: 10 }}>
                <button
                  type="button"
                  className="btn btn-outline-success"
                  onClick={() => setaModal(true)}
                  style={{ height: 30, width: 80, fontSize: 12 }}
                >
                  ???????????????? ????????????!
                </button>
              </div>
            </Card.Body>
          </Card>

          <Card
            style={{
              height: 230,
              width: 220,
              borderRadius: "5%",
              backgroundImage: `url(${border} )`,
            }}
          >
            <Card.Title style={{ paddingLeft: 50 }}>
              {" "}
              <img
                alt="..."
                src={require("assets/img/heartt.png").default}
                style={{ height: 80, width: 80 }}
              ></img>
            </Card.Title>
            <Card.Body>
              <label
                style={{
                  fontSize: 10,
                  paddingLeft: 10,
                  maxWidth: "80%",
                  textAlign: "center",
                }}
              >
                Medical Advices for eating routine!
              </label>
              <div style={{ paddingLeft: 50, paddingTop: 10 }}>
                <button
                  type="button"
                  className="btn btn-outline-danger"
                  onClick={() => setbModal(true)}
                  style={{ height: 30, width: 80, fontSize: 12 }}
                >
                  ???????????????? ????????????!
                </button>
              </div>
            </Card.Body>
          </Card>

          <Card
            style={{
              height: 230,
              width: 220,
              borderRadius: "5%",
              backgroundImage: `url(${brr} )`,
            }}
          >
            <Card.Title style={{ paddingLeft: 50 }}>
              <img
                alt="..."
                src={require("assets/img/cook.png").default}
                style={{ height: 80, width: 80 }}
              ></img>
            </Card.Title>
            <Card.Body>
              <label
                style={{
                  fontSize: 10,
                  paddingLeft: 10,
                  maxWidth: "80%",
                  textAlign: "center",
                }}
              >
                Best Diets Routine!
              </label>
              <div style={{ paddingLeft: 50, paddingTop: 10 }}>
                <button
                  type="button"
                  className="btn btn-outline-warning"
                  onClick={() => setcModal(true)}
                  style={{ height: 30, width: 80, fontSize: 12 }}
                >
                  ???????????????? ????????????!
                </button>
              </div>
            </Card.Body>
          </Card>
        </Row>
        <hr />
        <Row>
          <div>???????????????? ???????? ????????????????????!</div>
        </Row>
        <Row style={{ flexDirection: "row" }}>
          <div>
            <img
              alt="..."
              src={require("assets/img/leaf.png").default}
              style={{ height: 300, width: 150 }}
            ></img>
          </div>
          <Grid
            container
            spacing={4}
            style={{ maxWidth: "70%", marginLeft: "7%" }}
          >
            <Grid item xs={10}>
              <Grid container justify="center" spacing={0}>
                {news.map((news_item) => (
                  <Card style={{ width: "16rem", margin: 15 }}>
                    <Card.Img variant="top" src={news_item.image} />
                    <Card.Body>
                      <Card.Title>{cut_string(news_item.title, 21)}</Card.Title>
                      <Card.Text>{cut_string(news_item.body, 35)}</Card.Text>
                      <a href={news_item.url} className="btn btn-secondary">
                        Visit Link
                      </a>
                    </Card.Body>
                  </Card>
                ))}
              </Grid>
            </Grid>
          </Grid>
          <div>
            <img
              alt="..."
              src={require("assets/img/leaf.png").default}
              style={{ height: 300, width: 190 }}
            ></img>
          </div>
        </Row>
        <hr />
        <Row style={{ width: "100%", justifyContent: "center" }}>
          <h3
            style={{
              textAlign: "center",
              color: "#065f8c",
            }}
          >
            ???????????????? ????????????????????????
          </h3>
        </Row>
        <Row style={{ width: "100%", justifyContent: "center" }}>
          <div>
            <h6>???????????????????? ???????????????? ???????????????? ????????????????????????</h6>
            <img
              alt="..."
              src={require("assets/img/pngtree.png").default}
              style={{ height: 200, width: 190 }}
            ></img>
          </div>
          <div style={{ paddingLeft: 10 }}>
            <h6 style={{ paddingTop: 30, color: "#9dd2ed" }}>
              {" "}
              ???????????????????????? ???????????????????????? ????????????????!
            </h6>
            <h6 style={{ fontSize: 10 }}>
              {" "}
              ???????????? ???????????????? ???????? ???????????? ???????????? ???????????? ???????????????? ???????????????? ???????????? ???????????????? ???????? <br />
              ???????????????????????????????????? ???????? ???????????? ???????????????? ???????? ???????????????? ???????? ???????????????????? ???????????????????????? :
            </h6>
            <div style={{ paddingTop: 30 }}>
              <button
                type="button"
                className="btn "
                style={{ backgroundColor: "#9dd2ed" }}
                onClick={() => setdModal(true)}
              >
                ???????????????? ???????????????? ????????????????????
              </button>{" "}
              <br></br>
            </div>
            <div style={{ paddingTop: 20 }}>
              <button
                type="button"
                className="btn "
                onClick={() => seteModal(true)}
                style={{ backgroundColor: "#9dd2ed" }}
              >
                How its works?
              </button>
            </div>
            <div style={{ paddingTop: 20 }}>
              <label style={{ fontSize: 10 }}>
                {" "}
                <footer>
                  To know more about losing weight check this page:
                </footer>{" "}
                <br />
                <a href="https://www.healthline.com/health/best-weight-loss-blogs-of-the-year#3">
                  see page
                </a>{" "}
              </label>
            </div>
          </div>

          <div style={{ marginLeft: "10%" }}>
            <Card
              style={{ width: 300, height: 130, backgroundColor: "#9dd2ed" }}
            >
              <p> why you should know your BMI?</p>
              <p style={{ fontSize: 10 }}>
                Your BMI is a measurement that is a ratio of your weight and
                height. It's a good way to gauge whether your weight is in
                healthy proportion to your height. In fact, knowing your BMI can
                help you ??? and your GP ??? determine any health risks you may face
                if it's outside of the healthy range.
              </p>
            </Card>
            <img
              alt="..."
              src={require("assets/img/test.png").default}
              style={{ height: 190, width: 200 }}
            ></img>
          </div>
        </Row>
        <hr />
        <Modal open={aModal} onClose={() => setaModal(false)} center>
          <Card
            style={{
              backgroundImage: `url(${mealbg} )`,
              backgroundSize: 1000,
              height: 400,
              width: 400,
            }}
          >
            <Card.Title style={{ color: "#3d6965" }}>
              <h6>???????????? ???????????????? ???????????????? ???????????????????????? ?????????????????????????????????????</h6>
            </Card.Title>
            <Card.Body>
              <Row>
                <div>
                  <p style={{ fontSize: 12, color: "#15afd1" }}>
                    ???????????? ???????????????????????????? ???????????????????????????????????? ???????????????????????????????? <br />
                    ???????? ???? ???????????????????????????????? ???????????????????????????????????? <br />
                    ???????????? ???????????????? ???????? ???? ???????????????????????????????????????????????????????????????? <br />
                    ???????????????? ???????? ???????????????????????????????????? ???????? ???????????????????? ???????????????????????????? ???????? ???????????? ????????????????????, ???????????? ????????????
                    ???????????????????????????????????????? ???????????????????????? ???????????? ???????????????? ???????????????????????????????? <br /> ???????????????????????? ???????????????????? ????????????????
                    ???????????????????????????? ???????????? ???????????????????? ???????????????? ????????????????????????????????????????, <br />
                    ???????????????????? ???????????? ???????? ???????????????????????????????? ????????????????
                    <br /> ???? ???????????????? ???????????????? ???????????????????????????????? ????????????????, <br />
                    ???????????????????????? ???????????? ???????????? ????????????????.
                  </p>
                </div>
                <div></div>
              </Row>
              <Row>
                <Col>
                  <img
                    alt="..."
                    src={require("assets/img/cheese.png").default}
                    style={{ height: 150, width: 150 }}
                  ></img>
                </Col>
                <Col>
                  {" "}
                  <img
                    alt="..."
                    src={require("assets/img/beef.png").default}
                    style={{ height: 150, width: 150 }}
                  ></img>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Modal>
        <Modal open={bModal} onClose={() => setbModal(false)} center>
          <Card
            style={{
              backgroundImage: `url(${eat} )`,
              backgroundSize: 400,
              height: 400,
              width: 400,
            }}
          ></Card>
        </Modal>
        <Modal open={cModal} onClose={() => setcModal(false)} center>
          <Card
            style={{
              backgroundImage: `url(${eat1} )`,
              backgroundSize: 400,

              height: 500,
              width: 400,
            }}
          >
            {" "}
          </Card>
        </Modal>

        <Modal open={dModal} onClose={() => setdModal(false)} center>
          <Form
            style={{
              height: 350,
              width: 350,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <hr />

            <Row>
              <Col>
                <Form.Group>
                  <Form.Label> Your Weight:</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="50 in Kilo "
                    style={{ width: 140 }}
                    value={weight}
                    onChange={(e) => {
                      setWeight(e.target.value);
                    }}
                  />
                </Form.Group>
              </Col>
            </Row>
            <br />
            <Row>
              <Col>
                <Form.Group>
                  <Form.Label>Your Height::</Form.Label>
                  <Form.Control
                    type="text"
                    style={{ width: 140 }}
                    placeholder="160 in cm "
                    value={height}
                    onChange={(e) => setHeight(e.target.value)}
                  />
                </Form.Group>
              </Col>

              <Col style={{ paddingTop: 30 }}>
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={() => calculate()}
                >
                  Calculate
                </button>
              </Col>
            </Row>
            <p
              id="perfect"
              style={{
                textAlign: "center",
                width: "100%",
                backgroundColor: "rgba(200,200,200,0.6)",
                padding: 5,
                borderRadius: 15,
              }}
            ></p>
            <p
              style={{
                backgroundColor: "rgba(200,200,200,0.6)",
                padding: 5,
                borderRadius: 15,
              }}
            >
              A BMI of 25.0 or more is overweight, while the healthy range is
              18.5 to 24.9. BMI applies to most adults 18-65 years.
            </p>
          </Form>
        </Modal>
        <Modal open={eModal} onClose={() => seteModal(false)} center>
          <Card
            style={{ height: 240, width: 450, backgroundImage: `url(${bgg} )` }}
          >
            <Row style={{ justifyContent: "center" }}>
              <h5 style={{ textAlign: "center", marginTop: 10 }}>
                What is the perfect weight?How you can know it ?
              </h5>
              <br />
            </Row>
            <Row style={{ fontSize: 14, justifyContent: "center" }}>
              <p style={{ textAlign: "center", padding: 20 }}>
                Body Mass Index is a simple calculation using a person???s height
                and weight.
                <br /> The formula is BMI = kg/m2 where kg is a person???s weight
                in kilograms and m2 is their height in metres squared.
                <br />
                A BMI of 25.0 or more is overweight,
                <br /> while the healthy range is 18.5 to 24.9. BMI applies to
                most adults 18-65 years
              </p>
            </Row>
          </Card>{" "}
        </Modal>
      </Container>
    </>
  );
}

export default Dashboard;
