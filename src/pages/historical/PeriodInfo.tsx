import React, { useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
// import { Text } from "styles/styles";
import PhilosophersList from "components/philosophers-list/PhilosophersList";
import { PeriodDataType } from "types/types";
import { useDispatch, useSelector } from "react-redux";
import { philosophersSelector } from "selectors/selectors";
import { setPhilosophersThunk } from "reducers/philosopherSlice";
import { Sh1, Sp } from "styles/styles";

const PeriodInfo = ({
  title,
  text1,
  text2,
  text3,
  text4,
  period_id,
}: PeriodDataType) => {
  const dispatch = useDispatch();
  const { philosophers } = useSelector(philosophersSelector);

  useEffect(() => {
    dispatch(setPhilosophersThunk());
  }, [dispatch]);

  const periodPhilosophers = philosophers.filter(
    (phil) => phil.PeriodId === period_id
  );

  const text = [text1, text2, text3, text4];

  return (
    <Container className="mt-3">
      <Row>
        <Sh1>{title}</Sh1>

        <Sp className="mt-3">{text[0]}</Sp>

        <Sp>It includes the following major philosophers:</Sp>
      </Row>

      <Row>
        <PhilosophersList philosophers={periodPhilosophers} fraction={2} />
      </Row>

      <Row className="mt-3">
        {text.map((paragraph, i) => i > 0 && <Sp key={i}>{paragraph}</Sp>)}
      </Row>
    </Container>
  );
};

export default PeriodInfo;
