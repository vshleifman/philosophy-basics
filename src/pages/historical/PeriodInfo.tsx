import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { Text } from "config/styles";
// import { philosophers } from "data/philosophersData";
import PhilosophersList from "components/philosophers-list/PhilosophersList";
import { PeriodDataType, PhilType } from "config/types";
import axios from "axios";

const PeriodInfo = ({
  title,
  text1,
  text2,
  text3,
  text4,
  period_id,
}: PeriodDataType) => {
  const [philosophers, setPhilosophers] = useState<PhilType[]>([]);

  const fetchPhilosophers = async () => {
    try {
      const philosophersSrc = await (
        await axios.get("http://localhost:3001/philosopher")
      ).data;
      setPhilosophers(philosophersSrc);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchPhilosophers();
  }, []);

  const periodPhilosophers = philosophers.filter(
    (phil) => phil.period_id === period_id
  );

  const text = [text1, text2, text3, text4];

  return (
    <Container className="mt-3">
      <Row>
        <h1 className="display-4">{title}</h1>

        <Text className="mt-3">{text[0]}</Text>

        <Text>It include the following major philosophers:</Text>
      </Row>

      <Row>
        <PhilosophersList philosophers={periodPhilosophers} fraction={2} />
      </Row>

      <Row className="mt-3">
        {text.map((paragraph, i) => i > 0 && <Text key={i}>{paragraph}</Text>)}
      </Row>
    </Container>
  );
};

export default PeriodInfo;
