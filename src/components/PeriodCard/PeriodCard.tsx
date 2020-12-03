import React, { useEffect } from "react";
import Card from "react-bootstrap/Card";
import { Link, useRouteMatch } from "react-router-dom";
import { Era } from "types/types";
import { useDispatch, useSelector } from "react-redux";
import { setPeriodsThunk } from "reducers/periodSlice";
import { periodsSelector } from "selectors/selectors";
import { SCard, SLink } from "styles/styles";

const { Img, Body, Title, Text } = Card;

interface PeriodCardProps {
  currentEra: Era;
}

const PeriodCard = ({ currentEra }: PeriodCardProps) => {
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
            <SLink
              style={{ textDecoration: "none", color: "black" }}
              to={`${path}/${period_enum}`}
            >
              <SCard key={i} className="my-3">
                <Img variant="top" src={img_url} />
                <Body>
                  <Title>{title}</Title>
                  <Text>
                    {dates}
                    <br />
                    {description}
                  </Text>
                </Body>
              </SCard>
            </SLink>
          );
        }
      )}
    </>
  );
};

export default PeriodCard;
