import React, { useEffect } from "react";
import Card from "react-bootstrap/Card";
import { Link, useRouteMatch } from "react-router-dom";
import { PeriodDataType, Era } from "types/types";
import { useDispatch, useSelector } from "react-redux";
import { setPeriodsThunk } from "reducers/periodSlice";
import { periodsSelector } from "selectors/selectors";

const { Img, Body, Title, Text } = Card;

interface PhilTimeCardProps {
  currentEra: Era;
}

const PhilTimeCard = ({ currentEra }: PhilTimeCardProps) => {
  let { path } = useRouteMatch();

  const dispatch = useDispatch();
  const { periods } = useSelector(periodsSelector);

  useEffect(() => {
    dispatch(setPeriodsThunk());
  }, [dispatch]);

  const getCurrentPeriods = () => {
    return periods.filter((period) => period.era === currentEra);
  };

  return (
    <>
      {getCurrentPeriods().map(
        ({ title, img_url, dates, description, period_enum }, i) => {
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
