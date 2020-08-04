import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import { Link, useRouteMatch } from "react-router-dom";
import { PeriodDataType, Era } from "config/types";
import axios from "axios";

const { Img, Body, Title, Text } = Card;

interface PhilTimeCardProps {
  currentEra: Era;
}

const PhilTimeCard = ({ currentEra }: PhilTimeCardProps) => {
  let { path } = useRouteMatch();
  const [periods, setPeriods] = useState([]);

  const fetchPeriods = async () => {
    try {
      const periodData = await axios.get("http://localhost:3001/period");
      setPeriods(periodData.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchPeriods();
  }, []);

  const getCurrentPeriods = () => {
    return periods.filter(
      (period: PeriodDataType) => period.era === currentEra
    );
  };

  return (
    <>
      {getCurrentPeriods().map(
        (
          { title, img_url, dates, description, period_enum }: PeriodDataType,
          i
        ) => {
          return (
            <Card key={i} className="my-3" bg="light">
              <Link to={`${path}/${period_enum}`}>
                <Img variant="top" src={img_url} />
                <Body>
                  <Title>{title}</Title>
                  <Text>
                    {dates}
                    <br />
                    {description}
                  </Text>
                </Body>
              </Link>
            </Card>
          );
        }
      )}
    </>
  );
};

export default PhilTimeCard;
